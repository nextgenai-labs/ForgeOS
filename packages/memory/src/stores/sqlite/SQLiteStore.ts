import Database from "better-sqlite3";

import type { IMemoryStore } from "../../interfaces/IMemoryStore";
import type { MemoryRecord } from "../../types/MemoryRecord";
import type { MemoryQuery } from "../../types/MemoryQuery";

type SQLiteMemoryRecord = Omit<
    MemoryRecord,
    "value" | "createdAt" | "updatedAt"
> & {
    value: string;
    createdAt: string;
    updatedAt: string;
};

export class SQLiteStore implements IMemoryStore {

    private readonly db: Database.Database;

    constructor(
        filename = "forgeos-memory.db"
    ) {

        this.db = new Database(filename);

        this.initialize();

    }

    private initialize(): void {

        this.db.exec(`
            CREATE TABLE IF NOT EXISTS memory (
                id TEXT PRIMARY KEY,
                key TEXT UNIQUE,
                namespace TEXT,
                value TEXT NOT NULL,
                createdAt TEXT NOT NULL,
                updatedAt TEXT NOT NULL
            );
        `);

    }

    private toMemoryRecord(
        row: SQLiteMemoryRecord
    ): MemoryRecord {

        return {

            ...row,

            value: JSON.parse(row.value),

            createdAt: new Date(row.createdAt),

            updatedAt: new Date(row.updatedAt)

        };

    }

    async set(
        record: MemoryRecord
    ): Promise<void> {

        this.db.prepare(`
            INSERT OR REPLACE INTO memory
            (
                id,
                key,
                namespace,
                value,
                createdAt,
                updatedAt
            )
            VALUES
            (
                @id,
                @key,
                @namespace,
                @value,
                @createdAt,
                @updatedAt
            )
        `).run({

            id: record.id,

            key: record.key,

            namespace: record.namespace,

            value: JSON.stringify(record.value),

            createdAt: record.createdAt.toISOString(),

            updatedAt: record.updatedAt.toISOString()

        });

    }

    async get(
        key: string
    ): Promise<MemoryRecord | undefined> {

        const row = this.db.prepare(`
            SELECT *
            FROM memory
            WHERE key = ?
        `).get(key) as SQLiteMemoryRecord | undefined;

        if (!row) {

            return undefined;

        }

        return this.toMemoryRecord(row);

    }

    async has(
        key: string
    ): Promise<boolean> {

        const row = this.db.prepare(`
            SELECT 1
            FROM memory
            WHERE key = ?
        `).get(key);

        return row !== undefined;

    }

    async delete(
        key: string
    ): Promise<boolean> {

        const result = this.db.prepare(`
            DELETE
            FROM memory
            WHERE key = ?
        `).run(key);

        return result.changes > 0;

    }

    async clear(): Promise<void> {

        this.db.prepare(`
            DELETE FROM memory
        `).run();

    }

    async query(
        query: MemoryQuery
    ): Promise<MemoryRecord[]> {

        void query;

        const rows = this.db.prepare(`
            SELECT *
            FROM memory
        `).all() as SQLiteMemoryRecord[];

        return rows.map(
            row => this.toMemoryRecord(row)
        );

    }

}