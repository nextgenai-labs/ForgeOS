import type { Embedding } from "../types/Embedding";

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
        limit?: number
    ): Promise<Embedding[]>;

}
