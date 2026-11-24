import * as fs from "node:fs";

const sentence = "A keychain that shouts 'other jacket!' the second you pat your pockets, so you never search the wrong coat again.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", sentence, "utf8");
