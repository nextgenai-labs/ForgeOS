import { FileMemoryProvider } from "../src/providers/FileMemoryProvider";

async function main() {

    const provider = new FileMemoryProvider(
        "./tmp/memory.json"
    );

    await provider.save([
        {
            id: crypto.randomUUID(),

            key: "company",

            value: "ForgeOS",

            namespace: "system",

            createdAt: new Date(),

            updatedAt: new Date()
        }
    ]);

    const records = await provider.load();

    console.log(records);

}

main();