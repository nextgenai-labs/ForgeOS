import type { IMemoryStore } from "../interfaces/IMemoryStore";
import type { MemoryRecord } from "../types/MemoryRecord";
import type { MemoryQuery } from "../types/MemoryQuery";

export class InMemoryStore implements IMemoryStore {

    private readonly store =
        new Map<string, MemoryRecord>();

    async set(
        record: MemoryRecord
    ): Promise<void> {

        this.store.set(record.key, record);

    }

    async get(
        key: string
    ): Promise<MemoryRecord | undefined> {

        return this.store.get(key);

    }

    async has(
        key: string
    ): Promise<boolean> {

        return this.store.has(key);

    }

    async delete(
        key: string
    ): Promise<boolean> {

        return this.store.delete(key);

    }

    async clear(): Promise<void> {

        this.store.clear();

    }

    async query(
        query: MemoryQuery
    ): Promise<MemoryRecord[]> {

        let records = Array.from(this.store.values());

        if (query.namespace) {

            records = records.filter(
                record => record.namespace === query.namespace
            );

        }

        if (query.key) {

            records = records.filter(
                record => record.key === query.key
            );

        }

        if (query.limit) {

            records = records.slice(0, query.limit);

        }

        return records;

    }

}