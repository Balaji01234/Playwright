import { expect, test } from '../../common/fixtures';
import checkDraw from '../../utils/verification/checkDraw';
import readFromFile from '../../utils/verification/ReadFromFile';
import { getBrep } from '../../utils/verification/GetBrep';
import compareBrep from '../../utils/verification/CompareBrep';
import dragCoords from '../../utils/verification/dragCoords';
import set3DCameraPositionToVersion0 from '../../utils/environment/set3DCameraPositionToVersion0';
// import saveToFile from '../../utils/verification/SaveToFile';
import { Page } from '@playwright/test';
import { initProject, configure2DProjectForTestV0 } from '../../common/project';
import { clearCanvas } from '../../common/canvas';
import { createGeometryDir, type Geometry, getGeometry } from '../../common/geometry';

const getAbsolutePath = require('../../utils/verification/GetAbsolutePath');
const ClickCoords = require('../../utils/verification/ClickCoordinates');

// Legacy tests. Do not run.
test.describe.skip('basicDraw', () => {
  let page: Page;
  let geometryDir: string;

  test.beforeAll(async ({ browser }, testInfo) => {
    geometryDir = await createGeometryDir(testInfo.project.testDir, testInfo.titlePath[0]);
    const context = await browser.newContext();
    page = await context.newPage();
    await initProject(page, testInfo);
  });

  test.beforeEach(async () => {
    await configure2DProjectForTestV0(page);
  });

  test.afterEach(async () => {
    await clearCanvas(page);
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('3d-Capture', async () => {
    let delay = 10;

    const coordinates = [
      { x: 352, y: 211 },
      { x: 701, y: 213 },
      { x: 702, y: 395 },
      { x: 351, y: 393 },
      { x: 352, y: 210 }
    ];

    await ClickCoords(page, coordinates, delay);

    const actualGeometry = await getGeometry(page, { x: 400, y: 300 });

    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
    await set3DCameraPositionToVersion0(page);
    await page.waitForTimeout(100);

    await expect(actualGeometry).toHaveGeometryV0('3d-Capture.geom', geometryDir);
    await expect(page).toHaveCanvasSnapshot('3d-CaptureSnapshot.png');
  });

  test('3d-Draw', async () => {
    let delay = 10;

    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();

    await set3DCameraPositionToVersion0(page);

    await page.waitForTimeout(100);

    await checkDraw(page);

    const coordinates = [
      { x: 422, y: 277 },
      { x: 636, y: 238 },
      { x: 890, y: 356 },
      { x: 592, y: 461 },
      { x: 423, y: 274 }
    ];

    await ClickCoords(page, coordinates, delay);

    await page.getByRole('img', { name: 'pointer' }).click();

    await page.waitForTimeout(100);

    let mesh = await getBrep(page);

    expect(mesh).toBeDefined();

    if (mesh) {
      // inputs for the relative paths
      let relBrepPath = '../../../testData/draw/brep/3d-Draw.brep';

      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(mesh, absoluteBrepPath);
      let baseMesh = readFromFile(absoluteBrepPath);

      compareBrep(mesh, baseMesh);

      await expect(page).toHaveCanvasSnapshot('3d-DrawSnapshot.png');
    }
  });

  test('autocomplete-one', async () => {
    let delay = 10;
    // await page.getByRole("img", { name: "draw", exact: true }).click();
    // await page.getByRole("img", { name: "draw", exact: true }).click();

    const coordinates = [
      { x: 195, y: 152 },
      { x: 622, y: 150 },
      { x: 618, y: 417 },
      { x: 193, y: 392 },
      { x: 197, y: 150 },
      { x: 626, y: 286 },
      { x: 916, y: 284 },
      { x: 910, y: 550 },
      { x: 472, y: 543 },
      { x: 473, y: 418 }
    ];

    await ClickCoords(page, coordinates, delay);

    await page.getByRole('img', { name: 'pointer' }).click();

    // Now you can use these start and end points in your dragMouse function

    let mesh = await getBrep(page);

    expect(mesh).toBeDefined();

    if (mesh) {
      // inputs for the relative paths
      let relBrepPath = '../../../testData/draw/brep/ACtest01.brep';

      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(mesh, absoluteBrepPath);
      let baseMesh = readFromFile(absoluteBrepPath);

      compareBrep(mesh, baseMesh);

      await expect(page).toHaveCanvasSnapshot('acScreenshot.png');
    }
  });

  test('Autocomplete-two', async () => {
    let delay = 10;

    const coordinates = [
      { x: 163, y: 183 },
      { x: 163, y: 422 },
      { x: 536, y: 422 },
      { x: 536, y: 185 },
      { x: 164, y: 185 },
      { x: 349, y: 182 },
      { x: 348, y: 128 },
      { x: 718, y: 131 },
      { x: 721, y: 502 },
      { x: 353, y: 499 },
      { x: 351, y: 425 },
      { x: 538, y: 304 },
      { x: 656, y: 304 },
      { x: 649, y: 467 },
      { x: 455, y: 467 },
      { x: 455, y: 425 }
    ];

    // handling all the clicks on page using for loop in function below
    await ClickCoords(page, coordinates, delay);

    // calculating start and end for drag operations

    const { start, end } = dragCoords(coordinates);

    await page.getByRole('img', { name: 'pointer' }).click();

    // Now you can use these start and end points in your dragMouse function

    let mesh = await getBrep(page, start, end);

    expect(mesh).toBeDefined();

    if (mesh) {
      // inputs for the relative paths
      let relBrepPath = '../../../testData/draw/brep/Autocomplete-2.brep';

      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(mesh, absoluteBrepPath);
      let baseMesh = readFromFile(absoluteBrepPath);

      compareBrep(mesh, baseMesh);

      await expect(page).toHaveCanvasSnapshot('Autocomplete-2Snapshot.png');
    }
  });

  test('autocomplete-three', async () => {
    let delay = 10;

    const coordinates = [
      { x: 335, y: 228 },
      { x: 683, y: 225 },
      { x: 681, y: 468 },
      { x: 333, y: 466 },
      { x: 334, y: 225 },
      { x: 334, y: 296 },
      { x: 194, y: 293 },
      { x: 190, y: 137 },
      { x: 439, y: 135 },
      { x: 439, y: 226 },
      { x: 337, y: 384 },
      { x: 561, y: 379 },
      { x: 561, y: 226 },
      { x: 427, y: 472 },
      { x: 432, y: 606 },
      { x: 831, y: 604 },
      { x: 831, y: 326 },
      { x: 683, y: 327 }
    ];

    // handling all the clicks on page using for loop in function below
    await ClickCoords(page, coordinates, delay);

    // calculating start and end for drag operations

    const { start, end } = dragCoords(coordinates);

    await page.getByRole('img', { name: 'pointer' }).click();

    // Now you can use these start and end points in your dragMouse function

    let mesh = await getBrep(page, start, end);

    expect(mesh).toBeDefined();

    if (mesh) {
      // inputs for the relative paths
      let relBrepPath = '../../../testData/draw/brep/autocomplete-3.brep';

      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(mesh, absoluteBrepPath);
      let baseMesh = readFromFile(absoluteBrepPath);

      compareBrep(mesh, baseMesh);

      await expect(page).toHaveCanvasSnapshot('autocomplete-3Snapshot.png');
    }
  });

  test('design', async () => {
    let delay = 10;

    const coordinates = [
      { x: 149, y: 154 },
      { x: 834, y: 152 },
      { x: 911, y: 281 },
      { x: 909, y: 596 },
      { x: 404, y: 596 },
      { x: 406, y: 399 },
      { x: 146, y: 400 },
      { x: 147, y: 154 },
      { x: 208, y: 211 },
      { x: 383, y: 213 },
      { x: 380, y: 297 },
      { x: 205, y: 298 },
      { x: 204, y: 209 },
      { x: 557, y: 211 },
      { x: 730, y: 212 },
      { x: 729, y: 297 },
      { x: 557, y: 297 },
      { x: 554, y: 213 },
      { x: 557, y: 472 },
      { x: 730, y: 471 },
      { x: 730, y: 558 },
      { x: 555, y: 556 },
      { x: 558, y: 473 },
      { x: 465, y: 338 },
      { x: 811, y: 337 },
      { x: 815, y: 441 },
      { x: 464, y: 439 },
      { x: 463, y: 339 }
    ];

    // handling all the clicks on page using for loop in function below
    await ClickCoords(page, coordinates, delay);

    // calculating start and end for drag operations

    const { start, end } = dragCoords(coordinates);

    await page.getByRole('img', { name: 'pointer' }).click();

    // Now you can use these start and end points in your dragMouse function

    await page.waitForTimeout(100);

    let mesh = await getBrep(page, start, end);

    expect(mesh).toBeDefined();

    if (mesh) {
      // inputs for the relative paths
      let relBrepPath = '../../../testData/draw/brep/template.brep';

      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(mesh, absoluteBrepPath);
      let baseMesh = readFromFile(absoluteBrepPath);

      compareBrep(mesh, baseMesh);

      await expect(page).toHaveCanvasSnapshot('designSnapshot.png');
    }
  });

  test('hexagon', async () => {
    let delay = 10;

    const coordinates = [
      { x: 320, y: 228 },
      { x: 321, y: 389 },
      { x: 531, y: 442 },
      { x: 739, y: 388 },
      { x: 738, y: 228 },
      { x: 531, y: 174 },
      { x: 325, y: 226 }
    ];

    // handling all the clicks on page using for loop in function below
    await ClickCoords(page, coordinates, delay);

    // calculating start and end for drag operations

    // const { start, end } = dragCoords(coordinates);

    await page.getByRole('img', { name: 'pointer' }).click();

    // Now you can use these start and end points in your dragMouse function

    let mesh = await getBrep(page);

    expect(mesh).toBeDefined();

    if (mesh) {
      // inputs for the relative paths
      let relBrepPath = '../../../testData/draw/brep/hexagon01.brep';

      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(mesh, absoluteBrepPath);
      let baseMesh = readFromFile(absoluteBrepPath);

      compareBrep(mesh, baseMesh);

      await expect(page).toHaveCanvasSnapshot('hexagonSnapshot.png');
    }
  });

  test('pentagon', async () => {
    let delay = 10;

    const coordinates = [
      { x: 311, y: 248 },
      { x: 312, y: 389 },
      { x: 648, y: 383 },
      { x: 646, y: 249 },
      { x: 480, y: 156 },
      { x: 312, y: 247 }
    ];

    // handling all the clicks on page using for loop in function below
    await ClickCoords(page, coordinates, delay);

    // calculating start and end for drag operations

    // const { start, end } = dragCoords(coordinates);

    await page.getByRole('img', { name: 'pointer' }).click();

    // Now you can use these start and end points in your dragMouse function

    let mesh = await getBrep(page);

    expect(mesh).toBeDefined();

    if (mesh) {
      // inputs for the relative paths
      let relBrepPath = '../../../testData/draw/brep/pentagon01.brep';

      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(mesh, absoluteBrepPath);
      let baseMesh = readFromFile(absoluteBrepPath);

      compareBrep(mesh, baseMesh);

      await expect(page).toHaveCanvasSnapshot('pentagonSnapshot.png');
    }
  });

  test('polygon', async () => {
    let delay = 10;

    const coordinates = [
      { x: 222, y: 309 },
      { x: 293, y: 201 },
      { x: 490, y: 253 },
      { x: 487, y: 365 },
      { x: 398, y: 458 },
      { x: 251, y: 421 },
      { x: 222, y: 313 }
    ];

    // handling all the clicks on page using for loop in function below
    await ClickCoords(page, coordinates, delay);

    // calculating start and end for drag operations

    // const { start, end } = dragCoords(coordinates);

    await page.getByRole('img', { name: 'pointer' }).click();

    // Now you can use these start and end points in your dragMouse function

    await page.waitForTimeout(100);

    let mesh = await getBrep(page);

    expect(mesh).toBeDefined();

    if (mesh) {
      // inputs for the relative paths
      let relBrepPath = '../../../testData/draw/brep/polygon01.brep';

      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(mesh, absoluteBrepPath);
      let baseMesh = readFromFile(absoluteBrepPath);

      compareBrep(mesh, baseMesh);

      await expect(page).toHaveCanvasSnapshot('polygonSnapshot.png');
    }
  });
});
