const fs = require("fs");
const resurrect = require("resurrect-js");

function readFromFile(filePath) {
  return new resurrect().resurrect(fs.readFileSync(filePath, "utf-8"));
}

module.exports = readFromFile;
