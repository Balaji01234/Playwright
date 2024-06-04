const path = require("path");

function getAbsolutePath(relativeBrepPath) {
  // Convert to absolute paths
  let absoluteBrepPath = path.resolve(__dirname, relativeBrepPath);

  return {
    absoluteBrepPath,
  };
}

module.exports = getAbsolutePath;
