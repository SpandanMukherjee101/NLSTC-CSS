#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { PurgeCSS } from "purgecss"; // v4+ uses named import

// Input and output paths
const inputCSS = path.resolve("nlstc.css");
const outputPath = process.argv.includes("--out")
  ? process.argv[process.argv.indexOf("--out") + 1]
  : path.resolve("nlstc.min.css");

const outputDir = path.dirname(outputPath);

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Run PurgeCSS
(async () => {
  const content = ["./**/*.html", "./**/*.{js,jsx,ts,tsx}"];
  const inputFile = path.resolve("node_modules/nlstc-css/nlstc.css");

  console.log("🔍 Running PurgeCSS on nlstc.css...");

  try {
    const purgeCSSResult = await PurgeCSS.purge({
      content,
      css: [inputFile],
    });

    fs.writeFileSync(outputPath, purgeCSSResult[0].css);
    console.log(`✅ Purged CSS written to: ${outputPath}`);
  } catch (err) {
    console.error("❌ PurgeCSS failed:", err);
    process.exit(1);
  }
})();
