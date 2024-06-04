// save file

const fs = require("fs");
const resurrect = require("resurrect-js");

export default function saveToFile(data, filePath) {
  fs.writeFileSync(filePath, new resurrect().stringify(data));
}