import { MemoryManager } from "../src/core/MemoryManager";
import { InMemoryStore } from "../src/stores/InMemoryStore";

async function main() {

    const manager =
        new MemoryManager(
            new InMemoryStore()
        );

    await manager.set({

        id: "1",

        key: "greeting",

        value: "hello",

        namespace: "system",

        createdAt: new Date(),

        updatedAt: new Date()

    });

    const record =
        await manager.get("greeting");

    console.log("ForgeOS Memory");

    console.log(record?.value);

}

main();