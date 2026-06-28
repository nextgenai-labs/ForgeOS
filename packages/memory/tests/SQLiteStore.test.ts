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

        metadata: {

            role: "assistant",

            version: "1.0"

        },

        createdAt: now,

        updatedAt: now

    });

    await store.set({

        id: randomUUID(),

        key: "agent",

        namespace: "system",

        value: "ELENA",

        metadata: {

            role: "assistant"

        },

        createdAt: now,

        updatedAt: now

    });

    await store.set({

        id: randomUUID(),

        key: "user",

        namespace: "accounts",

        value: "Darshan",

        metadata: {

            role: "user"

        },

        createdAt: now,

        updatedAt: now

    });

    console.log("\n========== GET ==========");
    console.log(
        await store.get("company")
    );

    console.log("\n========== HAS ==========");
    console.log(
        await store.has("company")
    );
    console.log(
        await store.has("missing")
    );

    console.log("\n========== ALL ==========");
    console.log(
        await store.query({})
    );

    console.log("\n========== NAMESPACE ==========");
    console.log(
        await store.query({
            namespace: "system"
        })
    );

    console.log("\n========== KEY ==========");
    console.log(
        await store.query({
            key: "company"
        })
    );

    console.log("\n========== METADATA ==========");

    const assistantRecords = await store.query({

        metadata: {

            role: "assistant"

        }

    });

    console.log(assistantRecords);

    console.log(
        "Assistant records:",
        assistantRecords.length
    );

    const userRecords = await store.query({

        metadata: {

            role: "user"

        }

    });

    console.log(
        userRecords
    );

    console.log(
        "User records:",
        userRecords.length
    );

    console.log("\n========== LIMIT ==========");
    console.log(
        await store.query({
            limit: 2
        })
    );

    console.log("\n========== OFFSET ==========");
    console.log(
        await store.query({
            limit: 2,
            offset: 1
        })
    );

    console.log("\n========== ORDER ASC ==========");
    console.log(
        await store.query({

            orderBy: "key",

            order: "ASC"

        })
    );

    console.log("\n========== ORDER DESC ==========");
    console.log(
        await store.query({

            orderBy: "key",

            order: "DESC"

        })
    );

    console.log("\n========== DELETE ==========");

    console.log(
        await store.delete("company")
    );

    console.log(
        await store.has("company")
    );

    console.log("\n========== CLEAR ==========");

    await store.clear();

    console.log(
        await store.query({})
    );

}

main().catch(error => {

    console.error(error);

    process.exit(1);

});