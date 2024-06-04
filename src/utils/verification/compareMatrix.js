const { expect } = require("@playwright/test");
const { tolerance } = require("../environment/constants");

const compareMatrix = async (matrix1, matrix2) => {
  expect(matrix1.length).toBe(matrix2.length);

  for (let i = 0; i < matrix1.length; i++) {
    expect(matrix1[i].length).toBe(matrix2[i].length);

    for (let j = 0; j < matrix1[i].length; j++) {
      expect(await almostEqual(matrix1[i][j], matrix2[i][j])).toBeTruthy();
    }
  }
};

const almostEqual = async (num1, num2) => {
  return Math.abs(num1 - num2) < tolerance;
};

module.exports = compareMatrix;
