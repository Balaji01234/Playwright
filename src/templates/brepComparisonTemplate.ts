import { test, expect } from "@playwright/test";
import { getBrep } from "../utils/verification/GetBrep";
import readFromFile from "../utils/verification/ReadFromFile";
import compareBrep from "../utils/verification/CompareBrep";
const getAbsolutePath = require("../utils/verification/GetAbsolutePath");

test("brep-template", async ({ page }) => {
  // copy below portion

  let mesh = await getBrep(page);

  expect(mesh).toBeDefined();

  if (mesh) {
    // inputs for the relative paths
    let relBrepPath = "../../../testData/template.brep";

    const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

    // saveToFile(mesh, absoluteBrepPath);
    let baseMesh = readFromFile(absoluteBrepPath);

    compareBrep(mesh, baseMesh);

    await expect(page).toHaveScreenshot("template.png", {
      maxDiffPixels: 960,
    });
  }
});
