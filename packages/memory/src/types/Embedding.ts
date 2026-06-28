export interface Embedding {

    id: string;

    text: string;

    vector: number[];

    namespace?: string;

    metadata?: Record<string, unknown>;

}