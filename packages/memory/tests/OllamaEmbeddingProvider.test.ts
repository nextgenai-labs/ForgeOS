import { OllamaEmbeddingProvider } from "../src/providers/OllamaEmbeddingProvider";

async function main(): Promise<void> {

    const provider = new OllamaEmbeddingProvider();

    const embedding = await provider.embed(
        "ForgeOS is an AI operating system."
    );

    console.log(
        embedding.length
    );

    console.log(
        embedding.slice(0, 10)
    );

}

main().catch(console.error);
