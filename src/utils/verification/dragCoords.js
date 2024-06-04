function dragCoords(coordinates) {
  // Filter out any strings from the coordinates array
  const filteredCoordinates = coordinates.filter(
    (coord) => typeof coord !== "string"
  );

  let minX = Math.min(...filteredCoordinates.map((coord) => coord.x));
  let minY = Math.min(...filteredCoordinates.map((coord) => coord.y));
  let maxX = Math.max(...filteredCoordinates.map((coord) => coord.x));
  let maxY = Math.max(...filteredCoordinates.map((coord) => coord.y));

  let start = { x: minX, y: minY };
  let end = { x: maxX, y: maxY };

  return { start, end };
}

module.exports = dragCoords;
