export class jsonDB {
    private dbFilePath: string;
    private devMode: boolean;

    constructor(dbFilePath: string, devMode: boolean = false) {
        this.dbFilePath = dbFilePath;
        this.devMode = devMode;
    }

    async create(data: Record<string, unknown>): Promise<string> {
        const rawData = await Deno.readTextFile(this.dbFilePath);
        const jsonData = JSON.parse(rawData);

        const id = crypto.randomUUID();

        jsonData[id] = data;

        const jsonString = this.devMode
            ? JSON.stringify(jsonData, null, 2)
            : JSON.stringify(jsonData);
        console.log(`Created JSON document in: ${this.dbFilePath} \n${jsonString}`);

        await Deno.writeTextFile(this.dbFilePath, jsonString);

        return id;
    }
}
