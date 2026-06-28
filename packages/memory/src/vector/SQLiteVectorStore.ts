import Database from "better-sqlite3";

import type { Embedding } from "../types/Embedding";
import type { SearchResult } from "../types/SearchResult";

import { cosineSimilarity } from "./CosineSimilarity";
import type { VectorStore } from "./VectorStore";

export class SQLiteVectorStore implements VectorStore {

    private readonly db: Database.Database;

    constructor(
        path = "forgeos-memory.db"
    ) {

        this.db = new Database(path);

        this.db.pragma("journal_mode = WAL");
        this.db.pragma("foreign_keys = ON");

        this.createTable();

    }

    private createTable(): void {

        this.db.exec(`

            CREATE TABLE IF NOT EXISTS embeddings (

                id TEXT PRIMARY KEY,

                text TEXT NOT NULL,

                namespace TEXT,

                metadata TEXT,

                dimensions INTEGER NOT NULL,

                vector TEXT NOT NULL

            );

            CREATE INDEX IF NOT EXISTS idx_embeddings_namespace
            ON embeddings(namespace);

            CREATE INDEX IF NOT EXISTS idx_embeddings_dimensions
            ON embeddings(dimensions);

        `);

    }

    async add(
        embedding: Embedding
    ): Promise<void> {

        if (!Array.isArray(embedding.vector)) {

            throw new Error(
                "Embedding vector must be an array."
            );

        }

        if (embedding.vector.length === 0) {

            throw new Error(
                "Embedding vector cannot be empty."
            );

        }

        if (
            embedding.vector.some(
                value => !Number.isFinite(value)
            )
        ) {

            throw new Error(
                "Embedding vector contains invalid numbers."
            );

        }

        this.db.prepare(

            `
            INSERT OR REPLACE INTO embeddings (

                id,
                text,
                namespace,
                metadata,
                dimensions,
                vector

            )

            VALUES (

                @id,
                @text,
                @namespace,
                @metadata,
                @dimensions,
                @vector

            )
            `

        ).run({

            id: embedding.id,

            text: embedding.text,

            namespace: embedding.namespace ?? null,

            metadata: JSON.stringify(
                embedding.metadata ?? {}
            ),

            dimensions: embedding.vector.length,

            vector: JSON.stringify(
                embedding.vector
            )

        });

    }

    async remove(
        id: string
    ): Promise<boolean> {

        const result = this.db.prepare(

            `
            DELETE FROM embeddings
            WHERE id = ?
            `

        ).run(id);

        return result.changes > 0;

    }

    async clear(): Promise<void> {

        this.db.prepare(

            `
            DELETE FROM embeddings
            `

        ).run();

    }

    async search(

        vector: number[],

        limit = 5,

        minScore = 0,

        metadata?: Record<string, unknown>,

        namespace?: string

    ): Promise<SearchResult[]> {

        if (!Array.isArray(vector) || vector.length === 0) {

            return [];

        }

        const rows = this.db.prepare(

            `
            SELECT

                id,
                text,
                namespace,
                metadata,
                vector,
                dimensions

            FROM embeddings

            WHERE dimensions = ?

            `

        ).all(vector.length) as Array<{

            id: string;

            text: string;

            namespace: string | null;

            metadata: string | null;

            vector: string;

            dimensions: number;

        }>;

        let results: SearchResult[] = [];

        for (const row of rows) {

            try {

                const embedding: Embedding = {

                    id: row.id,

                    text: row.text,

                    namespace: row.namespace ?? undefined,

                    metadata: row.metadata
                        ? JSON.parse(row.metadata)
                        : undefined,

                    vector: JSON.parse(row.vector)

                };

                if (

                    !Array.isArray(
                        embedding.vector
                    )

                ) {

                    continue;

                }

                if (

                    embedding.vector.length !==
                    vector.length

                ) {

                    continue;

                }

                results.push({

                    embedding,

                    score: cosineSimilarity(

                        vector,
                        embedding.vector

                    )

                });

            }

            catch (error) {

                console.warn(

                    `Skipping corrupted embedding ${row.id}`,

                    error

                );

            }

        }

        results = results.filter(

            result =>
                result.score >= minScore

        );

        if (namespace) {

            results = results.filter(

                result =>
                    result.embedding.namespace ===
                    namespace

            );

        }

        if (metadata) {

            results = results.filter(

                result => {

                    if (
                        !result.embedding.metadata
                    ) {

                        return false;

                    }

                    return Object.entries(
                        metadata
                    ).every(

                        ([key, value]) =>

                            result.embedding.metadata?.[
                                key
                            ] === value

                    );

                }

            );

        }

        results.sort(

            (a, b) =>
                b.score - a.score

        );

        return results.slice(

            0,
            limit

        );

    }

}