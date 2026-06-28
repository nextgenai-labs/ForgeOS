import { randomUUID } from "node:crypto";

import { PgVectorStore } from "../src/vector/PgVectorStore";

async function main(): Promise<void> {

    const store = new PgVectorStore();

    await store.clear();

    console.log("\n========== ADD ==========\n");

    await store.add({

        id: randomUUID(),

        text: "ForgeOS",

        namespace: "system",

        metadata: {

            type: "company"

        },

        vector: new Array(768).fill(1)

    });

    console.log("Added ForgeOS");

    await store.add({

        id: randomUUID(),

        text: "TypeScript",

        namespace: "system",

        metadata: {

            type: "language"

        },

        vector: new Array(768).fill(0.95)

    });

    console.log("Added TypeScript");

    await store.add({

        id: randomUUID(),

        text: "Apple",

        namespace: "fruit",

        metadata: {

            type: "food"

        },

        vector: new Array(768).fill(0.10)

    });

    console.log("Added Apple");

    console.log("\n========== SEARCH ==========\n");

    const results = await store.search(

        new Array(768).fill(1),

        5,

        0

    );

    console.log(results);

    console.log("\n========== FILTER BY NAMESPACE ==========\n");

    const namespaceResults = await store.search(

        new Array(768).fill(1),

        5,

        0,

        undefined,

        "system"

    );

    console.log(namespaceResults);

    console.log("\n========== FILTER BY METADATA ==========\n");

    const metadataResults = await store.search(

        new Array(768).fill(1),

        5,

        0,

        {

            type: "company"

        }

    );

    console.log(metadataResults);

    console.log("\n========== REMOVE ==========\n");

    const removed = await store.remove(

        results[0].embedding.id

    );

    console.log(removed);

    console.log("\n========== CLEAR ==========\n");

    await store.clear();

    console.log("Database cleared.");

    await store.close();

}

main().catch(console.error);