import type { Embedding } from "./Embedding";

export interface SearchResult {

    embedding: Embedding;

    score: number;

}