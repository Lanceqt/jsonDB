import { jsonDB } from "./jsonDB/mod.ts";

const testing = new jsonDB("./jsonDB/testdata/test.json");

await testing.create({ key: "value" });
