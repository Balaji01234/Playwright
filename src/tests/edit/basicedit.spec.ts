import { expect, test } from '../../common/fixtures';
import readFromFile from '../../utils/verification/ReadFromFile';
import { dragMouse, getBrep } from '../../utils/verification/GetBrep';
import compareBrep from '../../utils/verification/CompareBrep';
import dragCoords from '../../utils/verification/dragCoords';
import set3DCameraPositionToVersion0 from '../../utils/environment/set3DCameraPositionToVersion0';
import takeMousePointerToCanvasOrigin from '../../utils/ux interactions/takeMousePointerToCanvasOrigin';
import { Page } from '@playwright/test';
import { configure2DProjectForTestV0, initProject } from '../../common/project';
import { clearCanvas, selectAll } from '../../common/canvas';
const getAbsolutePath = require('../../utils/verification/GetAbsolutePath');
const ClickCoords = require('../../utils/verification/ClickCoordinates');

// Legacy tests. Do not run.
test.describe.skip('basicEdit', () => {
  let page: Page;

  test.beforeAll(async ({ browser }, testInfo) => {
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

  test('editing', async () => {
    let delay = 10;

    // Define the coordinates of the box
    const coordinates = [
      { x: 256, y: 232 },
      { x: 536, y: 233 },
      { x: 535, y: 406 },
      { x: 258, y: 407 },
      { x: 257, y: 231 },
      'edit',
      { x: 534, y: 318 },
      { x: 709, y: 329 },
      { x: 708, y: 407 },
      { x: 715, y: 476 },
      { x: 258, y: 404 },
      { x: 256, y: 475 }
    ];

    await ClickCoords(page, coordinates, delay);

    const { start, end } = dragCoords(coordinates);

    await page.getByRole('img', { name: 'pointer' }).click();

    await page.waitForTimeout(100);

    // Now you can use these start and end points in your dragMouse function

    let mesh = await getBrep(page, start, end);

    expect(mesh).toBeDefined();

    if (mesh) {
      // inputs for the relative paths
      let relBrepPath = '../../../testData/edit/brep/editTest1.brep';

      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(mesh, absoluteBrepPath);
      let baseMesh = readFromFile(absoluteBrepPath);

      compareBrep(mesh, baseMesh);

      await expect(page).toHaveCanvasSnapshot('editTest1Screenshot.png');
    }
  });

  test('angle', async () => {
    let delay = 10;

    // Define the coordinates of the box
    const coordinates = [
      { x: 216, y: 213 },
      { x: 564, y: 208 },
      { x: 681, y: 414 },
      { x: 332, y: 413 },
      { x: 217, y: 211 },
      'edit',
      { x: 334, y: 415 },
      { x: 216, y: 411 },
      { x: 683, y: 413 },
      { x: 564, y: 412 }
    ];

    await ClickCoords(page, coordinates, delay);

    await page.getByRole('img', { name: 'pointer' }).click();

    // Now you can use these start and end points in your dragMouse function

    let mesh = await getBrep(page);
    await page.waitForTimeout(100);

    expect(mesh).toBeDefined();

    if (mesh) {
      // inputs for the relative paths
      let relBrepPath = '../../../testData/edit/brep/angle.brep';

      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(mesh, absoluteBrepPath);
      let baseMesh = readFromFile(absoluteBrepPath);

      compareBrep(mesh, baseMesh);

      await expect(page).toHaveCanvasSnapshot('angle.png');
    }
  });

  test('createBuilding', async () => {
    let delay = 10;

    const coordinates = [
      { x: 266, y: 212 },
      { x: 614, y: 211 },
      { x: 613, y: 492 },
      { x: 265, y: 489 },
      { x: 270, y: 212 }
    ];

    // handling all the clicks on page using for loop in function below
    await ClickCoords(page, coordinates, delay);

    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
    await page.waitForTimeout(300);
    await set3DCameraPositionToVersion0(page);
    await page.getByText('Automate', { exact: true }).click();
    await page.getByRole('img', { name: 'autoResize' }).click();

    // calculating start and end for drag operations

    await page.getByRole('img', { name: 'pointer' }).click();

    // Now you can use these start and end points in your dragMouse function

    await page.waitForTimeout(100);

    let mesh = await getBrep(page);

    expect(mesh).toBeDefined();

    if (mesh) {
      // inputs for the relative paths
      let relBrepPath = '../../../testData/edit/brep/createBuilding.brep';

      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(mesh, absoluteBrepPath);
      let baseMesh = readFromFile(absoluteBrepPath);

      compareBrep(mesh, baseMesh);

      await expect(page).toHaveCanvasSnapshot('createBuildingSnapshot.png');
    }
  });

  test('flipX', async () => {
    let delay = 10;

    // Define the coordinates of the box
    const coordinates = [
      { x: 212, y: 265 },
      { x: 213, y: 508 },
      { x: 629, y: 507 },
      { x: 630, y: 388 },
      { x: 333, y: 385 },
      { x: 333, y: 266 },
      { x: 213, y: 265 }
    ];

    await ClickCoords(page, coordinates, delay);

    await page.getByRole('img', { name: 'pointer' }).click();

    // Now you can use these start and end points in your dragMouse function

    let mesh = await getBrep(page);
    expect(mesh).toBeDefined();

    await selectAll(page);
    await page.getByRole('img', { name: 'flipX', exact: true }).click();
    await takeMousePointerToCanvasOrigin(page);
    await page.mouse.click(700, 700);
    if (mesh) {
      // inputs for the relative paths
      let relBrepPath = '../../../testData/edit/brep/flipX.brep';

      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(mesh, absoluteBrepPath);
      let baseMesh = readFromFile(absoluteBrepPath);

      compareBrep(mesh, baseMesh);

      await expect(page).toHaveCanvasSnapshot('flipX.png');
    }
  });

  test('move', async () => {
    let delay = 10;

    // Define the coordinates of the box
    const coordinates = [
      { x: 221, y: 211 },
      { x: 463, y: 209 },
      { x: 467, y: 384 },
      { x: 220, y: 383 },
      { x: 223, y: 212 },
      'move',
      { x: 286, y: 277 },
      { x: 635, y: 286 }
    ];

    await ClickCoords(page, coordinates, delay);

    await page.getByRole('img', { name: 'pointer' }).click();

    await page.waitForTimeout(100);

    // Now you can use these start and end points in your dragMouse function

    let mesh = await getBrep(page);

    expect(mesh).toBeDefined();

    if (mesh) {
      // inputs for the relative paths
      let relBrepPath = '../../../testData/edit/brep/move.brep';

      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(mesh, absoluteBrepPath);
      let baseMesh = readFromFile(absoluteBrepPath);

      compareBrep(mesh, baseMesh);

      await expect(page).toHaveCanvasSnapshot('move.png');
    }
  });

  test('pushPull', async () => {
    let delay = 10;

    // Define the coordinates of the box
    const coordinates = [
      { x: 224, y: 194 },
      { x: 643, y: 193 },
      { x: 637, y: 439 },
      { x: 223, y: 436 },
      { x: 224, y: 194 },
      'toggle 2d<->3d',
      'pushpull',
      { x: 654, y: 404 },
      { x: 645, y: 243 }
    ];

    await ClickCoords(page, coordinates, delay);

    await set3DCameraPositionToVersion0(page);

    const { start, end } = dragCoords(coordinates);

    await page.getByRole('img', { name: 'pointer' }).click();

    // Now you can use these start and end points in your dragMouse function

    await page.waitForTimeout(100);

    let mesh = await getBrep(page);

    // Expect mesh to be defined
    expect(mesh).toBeDefined();

    if (mesh) {
      // inputs for the relative paths
      let relBrepPath = '../../../testData/edit/brep/pushPull.brep';

      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(mesh, absoluteBrepPath);
      let baseMesh = readFromFile(absoluteBrepPath);

      compareBrep(mesh, baseMesh);

      await expect(page).toHaveCanvasSnapshot('pushPull.png');
    }
    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  });

  // TODO: Flaky test case. Need to fix it
  test.skip('rotate', async () => {
    let delay = 10;

    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.getByRole('img', { name: 'draw', exact: true }).click();

    // Define the coordinates of the box
    const coordinates = [
      { x: 237, y: 332 },
      { x: 447, y: 333 },
      { x: 446, y: 474 },
      { x: 237, y: 474 },
      { x: 238, y: 336 },
      'rotate',
      { x: 338, y: 403 },
      { x: 449, y: 402 },
      { x: 397, y: 503 }
    ];

    await ClickCoords(page, coordinates, delay);

    const { start, end } = dragCoords(coordinates);

    await page.getByRole('img', { name: 'pointer' }).click();

    // Now you can use these start and end points in your dragMouse function

    await page.waitForTimeout(100);

    let mesh = await getBrep(page);

    expect(mesh).toBeDefined();

    if (mesh) {
      // inputs for the relative paths
      let relBrepPath = '../../../testData/edit/brep/rotate.brep';

      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(mesh, absoluteBrepPath);
      let baseMesh = readFromFile(absoluteBrepPath);

      compareBrep(mesh, baseMesh);

      await expect(page).toHaveCanvasSnapshot('rotate.png');
    }
  });

  test('vertice', async () => {
    let delay = 10;

    // Define the coordinates of the box
    const coordinates = [
      { x: 275, y: 433 },
      { x: 414, y: 193 },
      { x: 480, y: 434 },
      { x: 275, y: 431 },
      'edit',
      { x: 415, y: 188 },
      { x: 483, y: 199 }
    ];

    await ClickCoords(page, coordinates, delay);

    await page.getByRole('img', { name: 'pointer' }).click();

    // Now you can use these start and end points in your dragMouse function

    await page.waitForTimeout(100);

    let mesh = await getBrep(page);

    expect(mesh).toBeDefined();

    if (mesh) {
      // inputs for the relative paths
      let relBrepPath = '../../../testData/edit/brep/vertice.brep';

      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(mesh, absoluteBrepPath);
      let baseMesh = readFromFile(absoluteBrepPath);

      compareBrep(mesh, baseMesh);

      await expect(page).toHaveCanvasSnapshot('vertice.png');
    }
  });

  test('void', async () => {
    let delay = 10;

    // Define the coordinates of the box
    const coordinates = [
      'slab',
      { x: 250, y: 224 },
      { x: 668, y: 222 },
      { x: 671, y: 469 },
      { x: 249, y: 465 },
      { x: 252, y: 222 },
      'drawVoid',
      { x: 311, y: 295 },
      { x: 313, y: 399 },
      { x: 588, y: 397 },
      { x: 586, y: 295 },
      { x: 311, y: 294 },
      'edit',
      { x: 450, y: 294 },
      { x: 449, y: 292 },
      { x: 449, y: 259 },
      { x: 449, y: 398 },
      { x: 451, y: 434 },
      { x: 313, y: 292 },
      { x: 313, y: 259 },
      { x: 250, y: 342 },
      { x: 145, y: 354 },
      { x: 668, y: 346 },
      { x: 774, y: 356 }
    ];

    await ClickCoords(page, coordinates, delay);

    const { start, end } = dragCoords(coordinates);

    await page.getByRole('img', { name: 'pointer' }).click();

    // Now you can use these start and end points in your dragMouse function

    await page.waitForTimeout(100);

    let mesh = await getBrep(page, start, end);

    expect(mesh).toBeDefined();

    if (mesh) {
      // inputs for the relative paths
      let relBrepPath = '../../../testData/edit/brep/void.brep';

      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(mesh, absoluteBrepPath);
      let baseMesh = readFromFile(absoluteBrepPath);

      compareBrep(mesh, baseMesh);

      await expect(page).toHaveCanvasSnapshot('void.png');
    }
  });
});
