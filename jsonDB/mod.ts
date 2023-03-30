export class jsonDB {
    private dbFilePath: string;

    constructor(dbFilePath: string) {
        this.dbFilePath = dbFilePath;
    }

    async create(data: Record<string, unknown>): Promise<string> {
        const rawData = await Deno.readTextFile(this.dbFilePath);
        const jsonData = JSON.parse(rawData);

        const id = crypto.randomUUID();

        jsonData[id] = data;

        await Deno.writeTextFile(this.dbFilePath, JSON.stringify(jsonData));

        return id;
    }
}
