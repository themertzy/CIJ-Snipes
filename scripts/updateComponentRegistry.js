const fs = require("fs");
const path = require("path");

const COMPONENTS_DIR = path.join(__dirname, "../src/components");
const README_PATH = path.join(__dirname, "../README.md");

function getComponentMetadata(name) {
  const metaPath = path.join(COMPONENTS_DIR, name, "meta.json");
  let meta = {
    category: "UI Elements",
    description: `Add description for ${name}`,
  };

  if (fs.existsSync(metaPath)) {
    try {
      const file = fs.readFileSync(metaPath, "utf-8");
      meta = { ...meta, ...JSON.parse(file) };
    } catch (err) {
      console.warn(`⚠️ Failed to parse meta.json for ${name}`);
    }
  }

  return meta;
}

function getComponentList() {
  return fs
    .readdirSync(COMPONENTS_DIR, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .sort();
}

function generateTable(components) {
  const rows = components.map((name) => {
    const { category, description } = getComponentMetadata(name);
    return `| \`${name}\` | ${category} | ${description} |`;
  });

  return [
    "| Component       | Category       | Description |",
    "|-----------------|----------------|-------------|",
    ...rows,
  ].join("\n");
}

function updateReadme(content, tableMarkdown) {
  const start = "## 📦 Component Registry";
  const end = "## 📝 Status";

  const [before, rest] = content.split(start);
  const [, after] = rest.split(end);

  return [
    before.trim(),
    start,
    "",
    "Below is a list of reusable components currently available in **CIJ-Snipes**.",
    "",
    tableMarkdown,
    "",
    end,
    after.trim(),
  ].join("\n\n");
}

function main() {
  const components = getComponentList();
  const table = generateTable(components);

  const readme = fs.readFileSync(README_PATH, "utf-8");
  const updated = updateReadme(readme, table);

  fs.writeFileSync(README_PATH, updated);
  console.log("✅ Component registry updated in README.md");
}

main();
