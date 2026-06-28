import { randomUUID } from "node:crypto";

import { SQLiteVectorStore } from "../src/vector/SQLiteVectorStore";

async function main(): Promise<void> {

    const store = new SQLiteVectorStore();

    await store.clear();

    await store.add({

        id: randomUUID(),

        text: "ForgeOS",

        namespace: "system",

        vector: [1, 0, 0],

        metadata: {

            type: "company"

        }

    });

    await store.add({

        id: randomUUID(),

        text: "TypeScript",

        namespace: "system",

        vector: [0.9, 0.1, 0],

        metadata: {

            type: "language"

        }

    });

    await store.add({

        id: randomUUID(),

        text: "Banana",

        namespace: "food",

        vector: [0, 1, 0]

    });

    console.log(

        await store.search(

            [1, 0, 0],

            5,

            0.5

        )

    );

}

main().catch(console.error);