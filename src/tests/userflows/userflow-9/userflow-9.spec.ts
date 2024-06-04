import { expect, test } from '../../../common/fixtures';
import readFromFile from '../../../utils/verification/ReadFromFile.js';
import { getBrep } from '../../../utils/verification/GetBrep.js';
import { dragMouse } from '../../../utils/verification/GetBrep.js';
import compareBrep from '../../../utils/verification/CompareBrep.js';
import dragCoords from '../../../utils/verification/dragCoords.js';
import compareMatrix from '../../../utils/verification/compareMatrix.js';
import getMatrix from '../../../utils/verification/getMatrix.js';
import set3DCameraPositionToVersion0 from '../../../utils/environment/set3DCameraPositionToVersion0.js';
import takeMousePointerToCanvasOrigin from '../../../utils/ux interactions/takeMousePointerToCanvasOrigin.js';
import { Page } from '@playwright/test';
import { configure2DProjectForTestV0, initProject } from '../../../common/project';
import { clearCanvas } from '../../../common/canvas';
const getAbsolutePath = require('../../../utils/verification/GetAbsolutePath');
const selectAll = require('../../../utils/verification/selectAll');

// Legacy tests. Do not run.
test.describe.skip('userflow-9', () => {
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

  test('draw', async () => {
    const delay = 10;

    await page.locator('#canvas').click({
      position: {
        x: 211,
        y: 225
      },
      delay: delay
    });
    await page.locator('#canvas').click({
      position: {
        x: 214,
        y: 435
      },
      delay: delay
    });
    await page.locator('#canvas').click({
      position: {
        x: 525,
        y: 432
      },
      delay: delay
    });
    await page.locator('#canvas').click({
      position: {
        x: 527,
        y: 223
      },
      delay: delay
    });
    await page.locator('#canvas').click({
      position: {
        x: 209,
        y: 226
      },
      delay: delay
    });

    // Start and end coords for selecting mesh

    const coordinates = [
      { x: 211, y: 225 },
      { x: 214, y: 435 },
      { x: 525, y: 432 },
      { x: 527, y: 223 },
      { x: 209, y: 226 }
    ];

    await page.waitForTimeout(300);

    const { start, end } = dragCoords(coordinates);

    await page.getByRole('img', { name: 'pointer' }).click();

    // Now you can use these start and end points in your dragMouse function

    let mesh = await getBrep(page, start, end);

    await page.waitForTimeout(300);

    expect(mesh).toBeDefined();

    if (mesh) {
      // inputs for the relative paths
      let relBrepPath = '../../../testData/draw/brep/UF-9BasicDraw.brep';

      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(mesh, absoluteBrepPath);
      let baseMesh = readFromFile(absoluteBrepPath);

      compareBrep(mesh, baseMesh);

      await expect(page).toHaveCanvasSnapshot('UF-9BasicDrawSnapshot.png');

      await page.getByRole('img', { name: 'delete_icon' }).click();
    }
  });

  test('autocomplete', async () => {
    const delay = 10;
    await page.locator('#canvas').click({
      position: {
        x: 204,
        y: 233
      },
      delay: delay
    });
    await page.locator('#canvas').click({
      position: {
        x: 204,
        y: 477
      },
      delay: delay
    });
    await page.locator('#canvas').click({
      position: {
        x: 484,
        y: 472
      },
      delay: delay
    });
    await page.locator('#canvas').click({
      position: {
        x: 483,
        y: 233
      },
      delay: delay
    });
    await page.locator('#canvas').click({
      position: {
        x: 205,
        y: 230
      },
      delay: delay
    });

    await page.locator('#canvas').click({
      position: {
        x: 343,
        y: 231
      },
      delay: delay
    });
    await page.locator('#canvas').click({
      position: {
        x: 343,
        y: 163
      },
      delay: delay
    });
    await page.locator('#canvas').click({
      position: {
        x: 623,
        y: 164
      },
      delay: delay
    });
    await page.locator('#canvas').click({
      position: {
        x: 624,
        y: 372
      },
      delay: delay
    });
    await page.locator('#canvas').click({
      position: {
        x: 483,
        y: 373
      },
      delay: delay
    });

    const ACcoordinates = [
      { x: 204, y: 233 },
      { x: 204, y: 477 },
      { x: 484, y: 472 },
      { x: 483, y: 233 },
      { x: 205, y: 230 },
      { x: 343, y: 231 },
      { x: 343, y: 163 },
      { x: 623, y: 164 },
      { x: 624, y: 372 },
      { x: 483, y: 373 }
    ];

    const { start, end } = dragCoords(ACcoordinates);

    await page.getByRole('img', { name: 'pointer' }).click();

    // Now you can use these start and end points in your dragMouse function

    let mesh = await getBrep(page, start, end);

    await page.waitForTimeout(300);

    expect(mesh).toBeDefined();

    if (mesh) {
      // inputs for the relative paths
      let relBrepPath = '../../../testData/draw/brep/UF-9BasicAutoComplete.brep';

      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(mesh, absoluteBrepPath);

      let baseMesh = readFromFile(absoluteBrepPath);

      compareBrep(mesh, baseMesh);

      await expect(page).toHaveCanvasSnapshot('UF-9BasicAutoCompleteSnapshot.png');
      await page.getByRole('img', { name: 'delete_icon' }).click();
    }
  });

  test('manualLength', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 211,
        y: 225
      }
    });

    await page.mouse.move(214, 435);
    await page.keyboard.type('5000');
    await page.locator('#canvas').press('Enter');
    await page.mouse.move(525, 432);
    await page.keyboard.type('5000');
    await page.locator('#canvas').press('Enter');
    await page.mouse.move(397, 223);
    await page.keyboard.type('5000');
    await page.locator('#canvas').press('Enter');
    await page.mouse.move(209, 226);
    await page.keyboard.type('5000');
    await page.locator('#canvas').press('Enter');

    const lengthCoordinates = [
      { x: 211, y: 225 },
      { x: 214, y: 435 },
      { x: 525, y: 432 },
      { x: 397, y: 223 },
      { x: 209, y: 226 }
    ];

    const { start, end } = dragCoords(lengthCoordinates);

    await page.getByRole('img', { name: 'pointer' }).click();

    // Now you can use these start and end points in your dragMouse function

    let mesh = await getBrep(page, start, end);

    await page.waitForTimeout(300);

    expect(mesh).toBeDefined();

    if (mesh) {
      // inputs for the relative paths
      let relBrepPath = '../../../testData/draw/brep/UF-9BasicLength.brep';

      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(mesh, absoluteBrepPath);
      let baseMesh = readFromFile(absoluteBrepPath);

      compareBrep(mesh, baseMesh);

      await expect(page).toHaveCanvasSnapshot('UF-9BasicLengthSnapshot.png');
      await page.getByRole('img', { name: 'delete_icon' }).click();
    }
  });

  test('vertices', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 227,
        y: 262
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 228,
        y: 472
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 505,
        y: 470
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 507,
        y: 258
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 224,
        y: 261
      }
    });

    await page.getByRole('img', { name: 'Settings' }).click();
    await page.locator('div:nth-child(9) > div:nth-child(3) > div').click();
    await page.getByRole('img', { name: 'Settings' }).click();
    await page.mouse.move(506, 474);

    await page.waitForTimeout(1500);

    await expect(page).toHaveCanvasSnapshot('UF-9-Vertice1.png');

    await page.getByRole('img', { name: 'draw', exact: true }).dblclick();

    await page.mouse.move(506, 368);

    await page.waitForTimeout(1500);

    await expect(page).toHaveCanvasSnapshot('UF-9-Vertice2.png');

    await page.getByRole('img', { name: 'draw', exact: true }).dblclick();

    await page.mouse.move(506, 266);

    await page.waitForTimeout(1500);

    await expect(page).toHaveCanvasSnapshot('UF-9-Vertice3.png');

    await page.getByRole('img', { name: 'draw', exact: true }).dblclick();

    await page.mouse.move(368, 265);

    await page.waitForTimeout(1500);

    await expect(page).toHaveCanvasSnapshot('UF-9-Vertice4.png');

    await page.getByRole('img', { name: 'draw', exact: true }).dblclick();

    await page.mouse.move(227, 373);

    await expect(page).toHaveCanvasSnapshot('UF-9-Vertice5.png');

    await page.waitForTimeout(1500);

    await page.getByRole('img', { name: 'draw', exact: true }).dblclick();

    await page.mouse.move(229, 473);

    await page.waitForTimeout(1500);

    await expect(page).toHaveCanvasSnapshot('UF-9-Vertice6.png');

    await page.getByRole('img', { name: 'Settings' }).click();
    await page.locator('div:nth-child(9) > div:nth-child(3) > div').click();
    await page.getByRole('img', { name: 'Settings' }).click();

    await selectAll(page);
  });

  test('transMatrix', async () => {
    await page.getByRole('img', { name: 'Settings' }).click();
    await page.locator('div:nth-child(9) > div:nth-child(3) > div').click();
    await page.getByRole('img', { name: 'Settings' }).click();

    await page.locator('#canvas').click({
      position: {
        x: 213,
        y: 216
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 214,
        y: 459
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 491,
        y: 459
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 490,
        y: 215
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 214,
        y: 213
      }
    });

    await page.waitForTimeout(2000);

    await expect(page).toHaveCanvasSnapshot('UF-9-preMove.png');

    await page.getByRole('img', { name: 'Settings' }).click();
    // turn on dimension snap
    await page
      .locator('xpath=//p[normalize-space()="Dimension Snap"]/following-sibling::div[2]/div')
      .click();
    await page.getByRole('img', { name: 'Settings' }).click();

    await page.getByRole('img', { name: 'move', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 348,
        y: 338
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 565,
        y: 343
      }
    });

    await expect(page).toHaveCanvasSnapshot('UF-9-postMove.png');

    await page.getByRole('img', { name: 'Settings' }).click();
    // turn off dimension snap
    await page
      .locator('xpath=//p[normalize-space()="Dimension Snap"]/following-sibling::div[2]/div')
      .click();
    await page
      .locator('div')
      .filter({ hasText: /^Dimension Snap$/ })
      .getByRole('textbox')
      .click();
    await page
      .locator('div')
      .filter({ hasText: /^Dimension Snap$/ })
      .getByRole('textbox')
      .dblclick();
    await page
      .locator('div')
      .filter({ hasText: /^Dimension Snap$/ })
      .getByRole('textbox')
      .click();
    await page
      .locator('div')
      .filter({ hasText: /^Dimension Snap$/ })
      .getByRole('textbox')
      .fill('');
    await page
      .locator('div')
      .filter({ hasText: /^Dimension Snap$/ })
      .getByRole('textbox')
      .fill('300');
    await page
      .locator('div')
      .filter({ hasText: /^Dimension Snap$/ })
      .getByRole('textbox');

    await page.getByRole('img', { name: 'Settings' }).click();

    await page.locator('#canvas').click({
      position: {
        x: 558,
        y: 336
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 348,
        y: 341
      }
    });

    await selectAll(page);

    let transMatrix = await getMatrix(page);

    expect(transMatrix).toBeDefined();

    if (transMatrix) {
      let relBrepPath = '../../../testData/draw/matrix/UF-9-transMatrix.mx';
      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(transMatrix, absoluteBrepPath);

      let baseMatrix = readFromFile(absoluteBrepPath);

      compareMatrix(transMatrix, baseMatrix);

      await expect(page).toHaveCanvasSnapshot('UF-9-Matrix.png');
    }

    await page.getByRole('img', { name: 'Settings' }).click();
    await page.locator('div:nth-child(9) > div:nth-child(3) > div').click();
    await page.getByRole('img', { name: 'Settings' }).click();
  });

  test('dimensionSnap', async () => {
    await page.getByRole('img', { name: 'Settings' }).click();
    await page.locator('div:nth-child(9) > div:nth-child(3) > div').click();
    await page
      .locator('div')
      .filter({ hasText: /^Dimension Snap$/ })
      .getByRole('textbox')
      .click();
    await page
      .locator('div')
      .filter({ hasText: /^Dimension Snap$/ })
      .getByRole('textbox')
      .fill('500');
    await page.getByRole('img', { name: 'Settings' }).click();

    await page.locator('#canvas').click({
      position: {
        x: 248,
        y: 214
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 247,
        y: 390
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 421,
        y: 387
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 419,
        y: 213
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 248,
        y: 213
      }
    });
    await page.getByRole('img', { name: 'move', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 329,
        y: 303
      }
    });

    await page.waitForTimeout(3000);

    await page.mouse.move(349, 302);
    await page.waitForTimeout(3000);
    await expect(page).toHaveCanvasSnapshot('UF-9-DS1.png');
    await page.mouse.move(371, 302);
    await page.waitForTimeout(1000);
    await expect(page).toHaveCanvasSnapshot('UF-9-DS2.png');
    await page.mouse.move(381, 303);
    await page.waitForTimeout(1000);
    await expect(page).toHaveCanvasSnapshot('UF-9-DS3.png');
    await page.mouse.move(404, 307);
    await page.waitForTimeout(1000);
    await expect(page).toHaveCanvasSnapshot('UF-9-DS4.png');

    await page.getByRole('img', { name: 'Settings' }).click();
    await page.locator('div:nth-child(9) > div:nth-child(3) > div').click();
    await page.getByRole('img', { name: 'Settings' }).click();

    await selectAll(page);
  });

  test('addVerices', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 135,
        y: 167
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 136,
        y: 516
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 795,
        y: 515
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 796,
        y: 166
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 136,
        y: 168
      }
    });
    await page.getByRole('img', { name: 'addLayer' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 246,
        y: 165
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 645,
        y: 165
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 798,
        y: 235
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 797,
        y: 438
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 671,
        y: 516
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 305,
        y: 515
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 136,
        y: 421
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 135,
        y: 239
      }
    });
    await page.getByRole('img', { name: 'removeLayer' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 459,
        y: 342
      }
    });
    await expect(page).toHaveCanvasSnapshot('UF-9-addVertex.png');

    await page.locator('#canvas').click({
      position: {
        x: 646,
        y: 166
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 796,
        y: 239
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 794,
        y: 439
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 673,
        y: 515
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 305,
        y: 513
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 134,
        y: 421
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 134,
        y: 238
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 247,
        y: 168
      }
    });
    await expect(page).toHaveCanvasSnapshot('UF-9-removeVertex.png');

    await selectAll(page);
  });

  test('copy', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 177,
        y: 174
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 178,
        y: 278
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 282,
        y: 280
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 281,
        y: 173
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 176,
        y: 173
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 560,
        y: 172
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 665,
        y: 174
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 665,
        y: 278
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 559,
        y: 280
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 560,
        y: 172
      }
    });
    await page.getByRole('img', { name: 'copy' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 257,
        y: 225
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 262,
        y: 365
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 227,
        y: 313
      }
    });
    await page.keyboard.type('3');
    await page.locator('#canvas').press('Enter');
    await page.locator('#canvas').click({
      position: {
        x: 642,
        y: 217
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 643,
        y: 355
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 611,
        y: 314
      }
    });
    await page.keyboard.type('3');
    await page.locator('#canvas').press('Enter');
    await page.locator('#canvas').click({
      position: {
        x: 611,
        y: 350
      }
    });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 282,
        y: 223
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 386,
        y: 227
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 665,
        y: 223
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 769,
        y: 231
      }
    });

    await expect(page).toHaveCanvasSnapshot('UF-9-copy/array.png');

    await selectAll(page);
  });

  test('flipXFlipZ', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 207,
        y: 183
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 207,
        y: 287
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 313,
        y: 289
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 310,
        y: 184
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 209,
        y: 183
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 470,
        y: 185
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 470,
        y: 287
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 577,
        y: 288
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 577,
        y: 184
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 474,
        y: 184
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 208,
        y: 426
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 207,
        y: 529
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 473,
        y: 523
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 472,
        y: 422
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 206,
        y: 426
      }
    });

    // drag coords
    await page.getByRole('img', { name: 'pointer' }).click();

    const start = { x: 117, y: 123 };
    const end = { x: 723, y: 571 };

    await dragMouse(page, start, end);

    await page.getByRole('img', { name: 'flipX', exact: true }).click();
    await takeMousePointerToCanvasOrigin(page);

    await selectAll(page);

    let mesh = await getBrep(page);
    expect(mesh).toBeDefined();

    if (mesh) {
      // inputs for the relative paths
      let relBrepPath = '../../../testData/draw/brep/UF-9-flipXFlipZ.brep';

      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(mesh, absoluteBrepPath);
      let baseMesh = readFromFile(absoluteBrepPath);

      compareBrep(mesh, baseMesh);
    }

    await selectAll(page);
    let transMatrix = await getMatrix(page);
    await page.mouse.click(0, 50);

    expect(transMatrix).toBeDefined();

    if (transMatrix) {
      let relBrepPath = '../../../testData/draw/matrix/UF-9-flipX.mx';
      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(transMatrix, absoluteBrepPath);

      let baseMatrix = readFromFile(absoluteBrepPath);

      compareMatrix(transMatrix, baseMatrix);
    }

    await expect(page).toHaveCanvasSnapshot('UF-9-flipX.png');
    await selectAll(page);
    await page.getByRole('img', { name: 'flipX', exact: true }).click();
    await page.getByRole('img', { name: 'flipXY' }).click();

    await takeMousePointerToCanvasOrigin(page);

    let transMatrix1 = await getMatrix(page);
    await page.mouse.click(0, 50);

    expect(transMatrix1).toBeDefined();

    if (transMatrix1) {
      let relBrepPath = '../../../testData/draw/matrix/UF-9-flipZ.mx';
      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(transMatrix, absoluteBrepPath);

      let baseMatrix = readFromFile(absoluteBrepPath);

      compareMatrix(transMatrix, baseMatrix);
    }

    await expect(page).toHaveCanvasSnapshot('UF-9-flipZ.png');
  });

  test('rotate', async () => {
    const viewport = await page.viewportSize();

    await page.locator('#canvas').click({
      position: {
        x: 253,
        y: 238
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 254,
        y: 411
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 531,
        y: 411
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 532,
        y: 239
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 254,
        y: 237
      }
    });
    await page.getByRole('img', { name: 'rotate' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 393,
        y: 322
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 531,
        y: 324
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 464,
        y: 245
      }
    });

    const start = { x: 0, y: 50 };
    const end = { x: viewport.width, y: viewport.height };
    // const { start, end } = await selectAll(page);

    await page.waitForTimeout(2000);

    let mesh = await getBrep(page, start, end);

    expect(mesh).toBeDefined();

    if (mesh) {
      // inputs for the relative paths
      let relBrepPath = '../../../testData/draw/brep/UF-9-rotate.brep';

      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(mesh, absoluteBrepPath);
      let baseMesh = readFromFile(absoluteBrepPath);

      compareBrep(mesh, baseMesh);

      await expect(page).toHaveCanvasSnapshot('UF-9-rotate.png');
    }

    // await selectAll(page);

    await dragMouse(page, start, end);
    let transMatrix = await getMatrix(page);
    await page.mouse.click(0, 50);

    expect(transMatrix).toBeDefined();

    if (transMatrix) {
      let relBrepPath = '../../../testData/draw/matrix/UF-9-rotate.mx';
      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(transMatrix, absoluteBrepPath);

      let baseMatrix = readFromFile(absoluteBrepPath);

      compareMatrix(transMatrix, baseMatrix);
    }
  });

  test('undoRedoShowHide', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 258,
        y: 224
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 258,
        y: 432
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 606,
        y: 433
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 606,
        y: 223
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 258,
        y: 224
      }
    });
    await page.getByRole('img', { name: 'Undo' }).click();
    await page.getByRole('img', { name: 'Redo' }).click();
    await page.getByRole('img', { name: 'pointer' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 379,
        y: 301
      }
    });
    await page.getByRole('img', { name: 'Bulb0' }).click();
    await takeMousePointerToCanvasOrigin(page);
    await page.waitForTimeout(2000);
    await expect(page).toHaveCanvasSnapshot('UF-9-hide.png');
    await page.getByRole('img', { name: 'Bulb', exact: true }).click();
    await takeMousePointerToCanvasOrigin(page);
    await page.waitForTimeout(2000);
    await expect(page).toHaveCanvasSnapshot('UF-9-show.png');
    await page.getByRole('img', { name: 'ObjectIcon' }).click();
    await takeMousePointerToCanvasOrigin(page);
    await page.waitForTimeout(2000);
    await expect(page).toHaveCanvasSnapshot('UF-9-isolate.png');
    await page.getByRole('img', { name: 'Bulb', exact: true }).click();
    await takeMousePointerToCanvasOrigin(page);
    await page.waitForTimeout(2000);

    await selectAll(page);
  });

  test('storeyClone', async () => {
    const delay = 300;
    await page.locator('#canvas').click({
      position: {
        x: 200,
        y: 250
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 199,
        y: 424
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 443,
        y: 423
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 440,
        y: 251
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 201,
        y: 249
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 618,
        y: 250
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 615,
        y: 424
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 722,
        y: 423
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 721,
        y: 249
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 616,
        y: 252
      }
    });
    await page.getByRole('img', { name: '>' }).nth(1).click({ delay: delay });
    await page.getByRole('img', { name: 'selectAll' }).click({ delay: delay });
    await page.getByRole('img', { name: 'storey_down' }).first().click({ delay: delay });
    await page.getByRole('spinbutton').click({ delay: delay });
    await page.getByRole('spinbutton').fill('3');
    await page.getByRole('button', { name: 'Copy selection above' }).click({ delay: delay });

    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click({ delay: delay });

    await set3DCameraPositionToVersion0(page);

    await page.getByRole('img', { name: 'pointer' }).click({ delay: delay });

    await selectAll(page);

    await page.getByText('Automate', { exact: true }).click({ delay: delay });
    await page.getByRole('img', { name: 'autoResize' }).click({ delay: delay });

    const start = { x: 308, y: 138 };
    const end = { x: 893, y: 629 };

    let mesh = await getBrep(page);

    expect(mesh).toBeDefined();

    if (mesh) {
      // inputs for the relative paths
      let relBrepPath = '../../../testData/draw/brep/UF-9-storeyClone.brep';

      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(mesh, absoluteBrepPath);
      let baseMesh = readFromFile(absoluteBrepPath);

      compareBrep(mesh, baseMesh);

      await expect(page).toHaveCanvasSnapshot('UF-9-storeyClone.png');
    }
  });
});
