import { jsonDB } from "./jsonDB/mod.ts";

const db = new jsonDB("./testdata/test.json", true);
const testdb = new jsonDB("./testdata/pikachu.json", true);

// await db.create({ key: "value" });
// await db.create({
//     somekey: "somevalue",
//     someotherkey: "someothervalue",
//     alsoakey: "alsoavalue",
// });

await testdb.create({
    name: "Pikachu",
    type: "Electric",
    level: 100,
    moves: ["Thunderbolt", "Thunder", "Volt Tackle", "Quick Attack"],
});
