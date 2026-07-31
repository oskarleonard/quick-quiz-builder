// Fetches the quiz images at build time when they are not present in the
// deploy payload (the Vercel MCP deploy ships source text only).
import { access, mkdir, writeFile } from "node:fs/promises";

const BASE =
  "https://raw.githubusercontent.com/oskarleonard/quick-quiz-builder/quiz/app/images/";
const FILES = [
  "malaga.jpeg",
  "tapas.jpeg",
  "oel.jpeg",
  "elpimpi.jpeg",
  "vin.jpeg",
  "padron.jpeg",
  "vermut.jpeg",
  "cana.jpeg",
  "vinprovning.jpeg",
];

await mkdir("app/images", { recursive: true });

for (const file of FILES) {
  try {
    await access(`app/images/${file}`);
    continue;
  } catch {}
  const res = await fetch(BASE + file);
  if (!res.ok) throw new Error(`Failed to fetch ${file}: ${res.status}`);
  await writeFile(`app/images/${file}`, Buffer.from(await res.arrayBuffer()));
  console.log(`fetched ${file}`);
}
