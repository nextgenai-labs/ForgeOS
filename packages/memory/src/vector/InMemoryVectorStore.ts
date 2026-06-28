import { cosineSimilarity } from "./CosineSimilarity";

import type { Embedding } from "../types/Embedding";
import type { VectorStore } from "./VectorStore";

export class InMemoryVectorStore
implements VectorStore {

    private readonly embeddings: Embedding[] = [];

    async add(
        embedding: Embedding
    ): Promise<void> {

        this.embeddings.push(embedding);

    }

    async remove(
        id: string
    ): Promise<boolean> {

        const index = this.embeddings.findIndex(
            embedding => embedding.id === id
        );

        if (index === -1) {

            return false;

        }

        this.embeddings.splice(index, 1);

        return true;

    }

    async clear(): Promise<void> {

        this.embeddings.length = 0;

    }

    async search(
        vector: number[],
        limit = 5
    ): Promise<Embedding[]> {

        return [...this.embeddings]
            .map(embedding => ({

                embedding,

                score: cosineSimilarity(
                    vector,
                    embedding.vector
                )

            }))
            .sort(
                (a, b) => b.score - a.score
            )
            .slice(0, limit)
            .map(
                result => result.embedding
            );

    }

}
