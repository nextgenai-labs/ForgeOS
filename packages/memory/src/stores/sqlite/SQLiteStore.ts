import Database from "better-sqlite3";

import type { IMemoryStore } from "../../interfaces/IMemoryStore";
import type { MemoryRecord } from "../../types/MemoryRecord";
import type { MemoryQuery } from "../../types/MemoryQuery";

type SQLiteMemoryRecord = Omit<
    MemoryRecord,
    "value" |
    "metadata" |
    "createdAt" |
    "updatedAt"
> & {

    value: string;

    metadata: string | null;

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
                metadata TEXT,
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

            metadata:
                row.metadata === null
                    ? undefined
                    : JSON.parse(row.metadata),

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
                metadata,
                createdAt,
                updatedAt
            )
            VALUES
            (
                @id,
                @key,
                @namespace,
                @value,
                @metadata,
                @createdAt,
                @updatedAt
            )
        `).run({

            id: record.id,

            key: record.key,

            namespace: record.namespace,

            value: JSON.stringify(record.value),

            metadata:
                record.metadata === undefined
                    ? null
                    : JSON.stringify(record.metadata),

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
            DELETE
            FROM memory
        `).run();

    }

    async query(
        query: MemoryQuery
    ): Promise<MemoryRecord[]> {

        const conditions: string[] = [];

        const values: unknown[] = [];

        if (query.key !== undefined) {

            conditions.push("key = ?");

            values.push(query.key);

        }

        if (query.namespace !== undefined) {

            conditions.push("namespace = ?");

            values.push(query.namespace);

        }

        let sql = `
            SELECT *
            FROM memory
        `;

        if (conditions.length > 0) {

            sql += `
                WHERE ${conditions.join(" AND ")}
            `;

        }

        const orderByColumns = {

            key: "key",

            createdAt: "createdAt",

            updatedAt: "updatedAt"

        } as const;

        const orderBy = orderByColumns[
            query.orderBy ?? "updatedAt"
        ];

        const order =
            query.order === "ASC"
                ? "ASC"
                : "DESC";

        sql += `
            ORDER BY ${orderBy} ${order}
        `;

        if (query.limit !== undefined) {

            sql += `
                LIMIT ?
            `;

            values.push(query.limit);

        }

        if (query.offset !== undefined) {

            if (query.limit === undefined) {

                sql += `
                    LIMIT -1
                `;

            }

            sql += `
                OFFSET ?
            `;

            values.push(query.offset);

        }

        const rows = this.db
            .prepare(sql)
            .all(...values) as SQLiteMemoryRecord[];

        let records = rows.map(
            row => this.toMemoryRecord(row)
        );

        if (query.metadata !== undefined) {

            const metadata = query.metadata;

            records = records.filter(record => {

                const recordMetadata = record.metadata;

                if (recordMetadata === undefined) {

                    return false;

                }

                return Object.entries(metadata).every(
                    ([key, value]) =>
                        recordMetadata[key] === value
                );

            });

        }

        return records;

    }

}