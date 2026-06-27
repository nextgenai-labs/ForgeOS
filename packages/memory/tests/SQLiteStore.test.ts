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

    console.log(
        await store.get("company")
    );

    console.log(
        await store.has("company")
    );

    console.log(
        await store.query({})
    );

    console.log(
        await store.delete("company")
    );

    console.log(
        await store.has("company")
    );

}

main().catch(error => {

    console.error(error);

    process.exit(1);

});