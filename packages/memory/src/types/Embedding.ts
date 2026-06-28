export interface Embedding {

    id: string;

    text: string;

    vector: number[];

    metadata?: Record<string, unknown>;

}
