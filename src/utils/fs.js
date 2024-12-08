const fs = require("fs");
const path = require("path");
function readFile(filename) {
  return JSON.parse(
    fs.readFileSync(
      path.join(process.cwd(), "src", "models", `${filename}.json`),
      "utf-8",
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    )
  );
}

function writeFile(filename, data) {
  fs.writeFile(
    path.join(process.cwd(), "src", "models", `${filename}.json`),
    JSON.stringify(data, null, 2),
    "utf-8",
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
}

module.exports = {
  readFile,
  writeFile,
};
