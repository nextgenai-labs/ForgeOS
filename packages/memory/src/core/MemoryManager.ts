import type { IMemoryStore } from "../interfaces/IMemoryStore";
import type { MemoryRecord } from "../types/MemoryRecord";
import type { MemoryQuery } from "../types/MemoryQuery";

export class MemoryManager {

    constructor(
        private readonly store: IMemoryStore
    ) {}

    async set(
        record: MemoryRecord
    ): Promise<void> {

        await this.store.set(record);

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

        await this.store.clear();

    }

    async query(
        query: MemoryQuery
    ): Promise<MemoryRecord[]> {

        return this.store.query(query);

    }

}