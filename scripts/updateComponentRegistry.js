const fs = require("fs");
const path = require("path");

const COMPONENTS_DIR = path.join(__dirname, "../src/components");
const README_PATH = path.join(__dirname, "../README.md");

function getComponentNames() {
  return fs
    .readdirSync(COMPONENTS_DIR, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .sort();
}

function generateTable(components) {
  return (
    "| Component       | Category       | Description |\n" +
    "|-----------------|----------------|-------------|\n" +
    components
      .map(
        (name) =>
          `| \`${name}\` | UI Elements | <!-- ${name} description --> |`
      )
      .join("\n")
  );
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
  const components = getComponentNames();
  const newTable = generateTable(components);

  const readme = fs.readFileSync(README_PATH, "utf-8");
  const updatedReadme = updateReadme(readme, newTable);

  fs.writeFileSync(README_PATH, updatedReadme);
  console.log("✅ Component registry updated in README.md");
}

main();
