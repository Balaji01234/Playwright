const { expect } = require("@playwright/test");
const { tolerance } = require("../environment/constants");

// comparing the b-reps to be almost equal to each other

const compareBrep = async (currentBrep, baselineBrep) => {
  expect(currentBrep.edges.length).toBe(baselineBrep.edges.length);
  expect(currentBrep.faces.length).toBe(baselineBrep.faces.length);
  expect(currentBrep.halfEdges.length).toBe(baselineBrep.halfEdges.length);
  expect(currentBrep.positions.length).toBe(baselineBrep.positions.length);
  expect(currentBrep.vertices.length).toBe(baselineBrep.vertices.length);

  for (let i = 0; i < currentBrep.positions.length; i++) {
    const currentPos = currentBrep.positions[i];
    const found = baselineBrep.positions.some(
      async (basePos) => await almostEqual(currentPos, basePos)
    );
    expect(found).toBeTruthy();
  }
};

// calculation of whether breps are > 0.001 within margin error

const almostEqual = async (pos0, pos1) => {
  return (
    Math.abs(pos0[0] - pos1[0]) < tolerance &&
    Math.abs(pos0[1] - pos1[1]) < tolerance &&
    Math.abs(pos0[2] - pos1[2]) < tolerance
  );
};

module.exports = compareBrep;
