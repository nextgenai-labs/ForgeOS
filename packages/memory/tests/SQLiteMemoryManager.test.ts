import { MemoryManager } from "../src/MemoryManager";

import { SQLiteStore } from "../src/stores/sqlite/SQLiteStore";

import { SQLiteVectorStore } from "../src/vector/SQLiteVectorStore";

import { OllamaEmbeddingProvider } from "../src/providers/OllamaEmbeddingProvider";

async function main(): Promise<void> {

    const manager = new MemoryManager(

        new SQLiteStore(),

        new SQLiteVectorStore(),

        new OllamaEmbeddingProvider()

    );

    await manager.remember(

        "company",

        "system",

        "ForgeOS is an AI operating system.",

        {

            type: "company"

        }

    );

    await manager.remember(

        "language",

        "system",

        "ForgeOS is written in TypeScript.",

        {

            type: "language"

        }

    );

    console.log("\n========== RECALL ==========\n");

    console.log(

        await manager.recall(

            "company"

        )

    );

    console.log("\n========== SEARCH ==========\n");

    console.log(

        await manager.search(

            "What language is ForgeOS written in?"

        )

    );

    console.log("\n========== FORGET ==========\n");

    console.log(

        await manager.forget(

            "company"

        )

    );

}
main().catch(console.error);
