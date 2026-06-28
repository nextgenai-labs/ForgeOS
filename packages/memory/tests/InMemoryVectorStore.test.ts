import { randomUUID } from "node:crypto";

import { InMemoryVectorStore } from "../src/vector/InMemoryVectorStore";

async function main(): Promise<void> {

    const store = new InMemoryVectorStore();

    await store.add({
        id: randomUUID(),
        text: "Apple",
        vector: [1, 0, 0]
    });

    await store.add({
        id: randomUUID(),
        text: "Orange",
        vector: [0.9, 0.1, 0]
    });

    await store.add({
        id: randomUUID(),
        text: "Car",
        vector: [0, 1, 0]
    });

    console.log(
        await store.search(
            [1, 0, 0]
        )
    );

}

main().catch(console.error);
