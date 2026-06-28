import { BaseEmbeddingProvider } from "../embeddings/BaseEmbeddingProvider";

export class OllamaEmbeddingProvider
extends BaseEmbeddingProvider {

    constructor(

        private readonly model = "nomic-embed-text"

    ) {

        super();

    }

    async embed(
        text: string
    ): Promise<number[]> {

        const response = await fetch(
            "http://127.0.0.1:11434/api/embeddings",
            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify({

                    model: this.model,

                    prompt: text

                })

            }
        );

        if (!response.ok) {

            throw new Error(
                `Ollama request failed: ${response.status}`
            );

        }

        const json = await response.json() as {

            embedding: number[];

        };

        return json.embedding;

    }

}
