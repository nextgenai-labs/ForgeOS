import type { Embedding } from "../types/Embedding";
import type { SearchResult } from "../types/SearchResult";

import { cosineSimilarity } from "./CosineSimilarity";

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

        limit = 5,

        minScore = 0,

        metadata?: Record<string, unknown>,

        namespace?: string

    ): Promise<SearchResult[]> {

        let results = this.embeddings
            .map(
                embedding => ({

                    embedding,

                    score: cosineSimilarity(
                        vector,
                        embedding.vector
                    )

                })
            )
            .filter(
                result => result.score >= minScore
            );

        if (namespace !== undefined) {

            results = results.filter(
                result =>
                    result.embedding.namespace === namespace
            );

        }

        if (metadata !== undefined) {

            results = results.filter(result => {

                if (result.embedding.metadata === undefined) {

                    return false;

                }

                return Object.entries(metadata).every(

                    ([key, value]) =>

                        result.embedding.metadata?.[key] === value

                );

            });

        }

        return results
            .sort(
                (a, b) => b.score - a.score
            )
            .slice(0, limit);

    }

}