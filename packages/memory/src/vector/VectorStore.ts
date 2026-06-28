import type { Embedding } from "../types/Embedding";
import type { SearchResult } from "../types/SearchResult";

export interface VectorStore {

    add(
        embedding: Embedding
    ): Promise<void>;

    remove(
        id: string
    ): Promise<boolean>;

    clear(): Promise<void>;

    search(

        vector: number[],

        limit?: number,

        minScore?: number,

        metadata?: Record<string, unknown>,

        namespace?: string

    ): Promise<SearchResult[]>;

}