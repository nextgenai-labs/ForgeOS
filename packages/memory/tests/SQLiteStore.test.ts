import { randomUUID } from "node:crypto";

import { SQLiteStore } from "../src/stores/sqlite/SQLiteStore";

async function main(): Promise<void> {

    const store = new SQLiteStore();

    await store.clear();

    const now = new Date();

    await store.set({

        id: randomUUID(),

        key: "company",

        namespace: "system",

        value: "ForgeOS",

        createdAt: now,

        updatedAt: now

    });

    await store.set({

        id: randomUUID(),

        key: "agent",

        namespace: "system",

        value: "ELENA",

        createdAt: now,

        updatedAt: now

    });

    await store.set({

        id: randomUUID(),

        key: "user",

        namespace: "accounts",

        value: "Darshan",

        createdAt: now,

        updatedAt: now

    });

    console.log("All");

    console.log(
        await store.query({})
    );

    console.log("Namespace");

    console.log(
        await store.query({
            namespace: "system"
        })
    );

    console.log("Key");

    console.log(
        await store.query({
            key: "company"
        })
    );

    console.log("Namespace + Key");

    console.log(
        await store.query({
            namespace: "system",
            key: "agent"
        })
    );

}

main().catch(error => {

    console.error(error);

    process.exit(1);

});