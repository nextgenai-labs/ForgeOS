import type { EmbeddingProvider } from "./EmbeddingProvider";

export abstract class BaseEmbeddingProvider
implements EmbeddingProvider {

    abstract embed(
        text: string
    ): Promise<number[]>;

    async embedMany(
        texts: string[]
    ): Promise<number[][]> {

        return Promise.all(
            texts.map(
                text => this.embed(text)
            )
        );

    }

}
