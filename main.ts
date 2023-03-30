import { jsonDB } from "./jsonDB/mod.ts";

const db = new jsonDB("./testdata/test.json");

await db.create({ key: "value" });
