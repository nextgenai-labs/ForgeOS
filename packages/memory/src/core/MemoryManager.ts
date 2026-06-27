import type { IMemoryStore } from "../interfaces/IMemoryStore";
import type { MemoryProvider } from "../providers/MemoryProvider";

import type { MemoryRecord } from "../types/MemoryRecord";
import type { MemoryQuery } from "../types/MemoryQuery";

export class MemoryManager {

    constructor(
        private readonly store: IMemoryStore,
        private readonly provider?: MemoryProvider
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

    async export(): Promise<MemoryRecord[]> {

        return this.store.query({});

    }

    async save(): Promise<void> {

        if (!this.provider) {
            return;
        }

        const records = await this.export();

        await this.provider.save(records);

    }

    async load(): Promise<void> {

        if (!this.provider) {
            return;
        }

        const records = await this.provider.load();

        for (const record of records) {

            await this.store.set(record);

        }

    }

}