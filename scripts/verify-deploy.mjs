import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const requiredFiles = [
  "index.html",
  "about.html",
  "collection.html",
  "gallery.html",
  "reviews.html",
  "contact.html",
  "booking.html",
  "vercel.json",
  "package.json",
  "api/vivienne.mjs",
  "assets/css/styles.css",
  "assets/js/app.js",
  "assets/css/admin.css",
  "assets/js/admin.js"
];

const missing = requiredFiles.filter((file) => !fs.existsSync(path.join(root, file)));
if (missing.length) {
  console.error(`Missing required deployment files:\n${missing.map((file) => `- ${file}`).join("\n")}`);
  process.exit(1);
}

const readJson = (file) => JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));
const vercel = readJson("vercel.json");
const pkg = readJson("package.json");
const vercelText = fs.readFileSync(path.join(root, "vercel.json"), "utf8");

if (vercelText.includes("nodejs20.x") || vercelText.includes('"runtime"')) {
  console.error("Remove custom function runtime declarations from vercel.json before deploying.");
  process.exit(1);
}

if (vercel.functions?.["api/vivienne.mjs"]?.maxDuration !== 30) {
  console.error("vercel.json should configure api/vivienne.mjs with maxDuration: 30.");
  process.exit(1);
}

if (pkg.engines?.node !== "22.x") {
  console.error('package.json should pin "engines.node" to "22.x" for Vercel.');
  process.exit(1);
}

const publicHtml = fs.readdirSync(root).filter((file) => file.endsWith(".html"));
for (const file of publicHtml) {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  if (!html.includes("assets/css/styles.css") || !html.includes("assets/js/app.js")) {
    console.error(`${file} is missing the public CSS or JavaScript asset reference.`);
    process.exit(1);
  }
}

console.log("Vercel deploy check passed.");
