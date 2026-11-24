import * as fs from "node:fs";

const sentence =
  "A fridge magnet that catches you opening the door out of boredom, locks it for ten minutes, and whispers, 'You ate twenty minutes ago.'";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", sentence, "utf8");
