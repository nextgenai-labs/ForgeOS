import { randomUUID } from "node:crypto";

import type { EmbeddingProvider } from "./embeddings/EmbeddingProvider";
import type { IMemoryStore } from "./interfaces/IMemoryStore";
import type { MemoryRecord } from "./types/MemoryRecord";
import type { SemanticSearchOptions } from "./types/SemanticSearchOptions";
import type { VectorStore } from "./vector/VectorStore";

export class MemoryManager {

    constructor(

        private readonly store: IMemoryStore,

        private readonly vectorStore: VectorStore,

        private readonly embeddingProvider: EmbeddingProvider

    ) {

    }

    async remember(

        key: string,

        namespace: string,

        value: unknown,

        metadata?: Record<string, unknown>

    ): Promise<MemoryRecord> {

        const now = new Date();

        const record: MemoryRecord = {

            id: randomUUID(),

            key,

            namespace,

            value,

            metadata,

            createdAt: now,

            updatedAt: now

        };

        await this.store.set(record);

        const vector = await this.embeddingProvider.embed(
            JSON.stringify(value)
        );

        await this.vectorStore.add({

            id: record.id,

            text: JSON.stringify(value),

            vector,

            namespace,

            metadata

        });

        return record;

    }

    async recall(

        key: string

    ): Promise<MemoryRecord | undefined> {

        return this.store.get(key);

    }

    async forget(

        key: string

    ): Promise<boolean> {

        const record = await this.store.get(key);

        if (!record) {

            return false;

        }

        await this.vectorStore.remove(record.id);

        return this.store.delete(key);

    }

    async search(

        query: string,

        options: SemanticSearchOptions = {}

    ): Promise<string[]> {

        const vector = await this.embeddingProvider.embed(
            query
        );

        const results = await this.vectorStore.search(

            vector,

            options.limit ?? 5,

            options.minScore ?? 0,

            options.metadata,

            options.namespace

        );

        return results.map(
            result => result.embedding.text
        );

    }

}