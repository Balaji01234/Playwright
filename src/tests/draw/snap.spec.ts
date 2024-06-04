import { expect, test } from '../../common/fixtures';
import { Page } from '@playwright/test';
import { initProject, configure2DProjectForTestV0 } from '../../common/project';
import { clearCanvas } from '../../common/canvas';
import { createGeometryDir, getGeometry, getSnaptrudeDS } from '../../common/geometry';

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

/**
 * @id TC_DT_261
 * @description Check user able to snap with an Reference (Grey) and draw mass using a space object type.
 *
 * @steps
 * 1 Enter Url
 * 2 Login
 * 3 Create Project
 * 4 Select Draw Tool
 * 5 Select Object type as space
 * 6  Snap with an Reference (Grey) and draw mass
 *
 * @expected User should be able to snap with an Reference (Grey) and draw mass using space Object type
 */
test('TC_DT_261', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 448,
      y: 447
    }
  });
  await page.mouse.move(448, 447);
  await page.mouse.move(558, 408);
  await expect(page).toHaveCanvasSnapshot('tc_dt_261.png', {
    maxDiffPixels: 960
  });
  await page.locator('#canvas').click({
    position: {
      x: 579,
      y: 404
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 638,
      y: 464
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 493,
      y: 521
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 447,
      y: 448
    }
  });
  const point = { x: 592, y: 424 };
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('tc_dt_261.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('tc_dt_261_1.png', {
    maxDiffPixels: 960
  });
});

/**
 * @id TC_DT_262
 * @description Check user able to snap with an Extension line (Pink)and draw mass using a space object type.
 *
 * @steps
 * 1 Enter Url
 * 2 Login
 * 3 Create Project
 * 4 Select Draw Tool
 * 5 Select Object type as space
 * 6  Snap with an Extension line (Pink)and draw mass
 *
 * @expected User should be able to snap with an Extension line (Pink)and draw mass using space Object type
 */
test('TC_DT_262', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 409,
      y: 279
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 417,
      y: 415
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 570,
      y: 412
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 575,
      y: 286
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 406,
      y: 281
    }
  });
  const point = {
    x: 459,
    y: 294
  };
  await page.mouse.move(574, 281);
  await page.mouse.move(700, 281);
  await expect(page).toHaveCanvasSnapshot('tc_dt_262.png', {
    maxDiffPixels: 960
  });
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('tc_dt_262.geom', geometryDir);
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
});

/**
 * @id TC_DT_263
 * @description Check user able to snap with an Extension Line (red)and draw mass using a space object type.
 *
 * @steps
 * 1 Enter Url
 * 2 Login
 * 3 Create Project
 * 4 Select Draw Tool
 * 5 Select Object type as space
 * 6  Snap with an Extension Line (red)and draw mass
 *
 * @expected User should be able to snap with an Extension Line (red)and draw mass using space Object type
 */
test('TC_DT_263', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 447,
      y: 355
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 450,
      y: 502
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 659,
      y: 491
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 658,
      y: 358
    }
  });
  await page.mouse.move(659, 358);
  await page.mouse.move(659, 357);
  await expect(page).toHaveCanvasSnapshot('tc_dt_263.png', {
    maxDiffPixels: 960
  });
  await page.locator('#canvas').click({
    position: {
      x: 450,
      y: 355
    }
  });
  const point = {
    x: 625,
    y: 384
  };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('tc_dt_263.geom', geometryDir);
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
});

/**
 * @id TC_DT_264
 * @description Check user able to snap with an Extension Line (green)and draw mass using a space object type.
 *
 * @steps
 * 1 Enter Url
 * 2 Login
 * 3 Create Project
 * 4 Select Draw Tool
 * 5 Select Object type as space
 * 6  Snap with an Extension Line (green)and draw mass
 *
 * @expected User should be able to snap with an Extension Line (green)and draw mass using space Object type
 */
test('TC_DT_264', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 292,
      y: 232
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 296,
      y: 408
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 479,
      y: 400
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 479,
      y: 276
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 295,
      y: 280
    }
  });
  await page.mouse.move(480, 274);
  await page.mouse.move(487, 198);
  await expect(page).toHaveCanvasSnapshot('tc_dt_264.png', {
    maxDiffPixels: 960
  });
  const point = {
    x: 459,
    y: 292
  };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('tc_dt_264.geom', geometryDir);
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
});

/**
 * @id TC_DT_265
 * @description Check user able to snap with an Reference  Line (Red) and draw mass using a space object type.
 *
 * @steps
 * 1 Enter Url
 * 2 Login
 * 3 Create Project
 * 4 Select Draw Tool
 * 5 Select Object type as space
 * 6  Snap with an Reference  Line (Red) and draw mass
 *
 * @expected User should be able to snap with an Reference  Line (Red) and draw mass using space Object type
 */
test('TC_DT_265', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 422,
      y: 282
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 427,
      y: 428
    }
  });
  await page.mouse.move(422, 427);
  await page.mouse.move(529, 422);
  await expect(page).toHaveCanvasSnapshot('tc_dt_265.png', {
    maxDiffPixels: 960
  });
  await page.locator('#canvas').click({
    position: {
      x: 591,
      y: 424
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 586,
      y: 286
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 423,
      y: 292
    }
  });
  const point = {
    x: 552,
    y: 306
  };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('tc_dt_265.geom', geometryDir);
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
});

/**
 * @id TC_DT_266
 * @description Check user able to snap with an Reference  Line (Red) and draw mass using a space object type.
 *
 * @steps
 * 1 Enter Url
 * 2 Login
 * 3 Create Project
 * 4 Select Draw Tool
 * 5 Select Object type as space
 * 6  Snap with an Reference  Line (Red) and draw mass
 *
 * @expected User should be able to snap with an Reference  Line (Red) and draw mass using space Object type
 */
test('TC_DT_266', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 442,
      y: 259
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 657,
      y: 252
    }
  });
  await page.mouse.move(657, 258);
  await page.mouse.move(663, 432);
  await expect(page).toHaveCanvasSnapshot('tc_dt_266.png', {
    maxDiffPixels: 960
  });
  await page.locator('#canvas').click({
    position: {
      x: 652,
      y: 427
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 446,
      y: 425
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 448,
      y: 263
    }
  });
  const point = {
    x: 596,
    y: 298
  };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('tc_dt_266.geom', geometryDir);
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
});

/**
 * @id TC_DT_267
 * @description Check user able to snap with an Reference Line (Green) and draw mass using a space object type.
 *
 * @steps
 * 1 Enter Url
 * 2 Login
 * 3 Create Project
 * 4 Select Draw Tool
 * 5 Select Object type as space
 * 6  Snap with an Reference Line (Green) and draw mass
 *
 * @expected User should be able to snap with an Reference Line (Green) and draw mass using space Object type
 */
test('TC_DT_267', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 469,
      y: 443
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 598,
      y: 400
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 672,
      y: 484
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 534,
      y: 534
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 465,
      y: 438
    }
  });
  await page.mouse.move(532, 536);
  await page.mouse.move(552, 561);
  const point = {
    x: 635,
    y: 428
  };
  await expect(page).toHaveCanvasSnapshot('tc_dt_267.png', {
    maxDiffPixels: 960
  });
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('tc_dt_267.geom', geometryDir);
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
});

/**
 * @id TC_DT_268
 * @description Check user able to snap and draw Arc mass using space object type or not
 *
 * @steps
 * 1 Enter Url
 * 2 Login
 * 3 Create Project
 * 4 Select Draw Tool
 * 5 Select Object type as space
 * 6  Snap and draw Arc mass
 *
 * @expected User should be able to snap and draw arc mass using space Object type
 */
test('TC_DT_268', async () => {
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 283,
      y: 296
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 468,
      y: 289
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 392,
      y: 198
    }
  });
  await page.mouse.move(283, 295);
  await page.mouse.move(289, 347);
  await expect(page).toHaveCanvasSnapshot('tc_dt_268.png', {
    maxDiffPixels: 960
  });
});

/**
 * @id TC_DT_269
 * @description Check using shortcut keyboard by clicking "Space Bar", Select tool icon is selected or not
 *
 * @steps
 * 1 Create project
 * 2 Click design tab
 * 3 clicking "Space Bar"
 * 4  Select tool icon
 *
 * @expected After clicking "Spacebar", select tool icon should be selected
 */
test('TC_DT_269', async () => {
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.keyboard.press('Space');
  await expect(page.locator("//span//*[@alt='pointer']")).toHaveScreenshot('TC_DT_269_1.png', {
    maxDiffPixels: 960,
    timeout: 15000
  });
  await page.getByRole('img', { name: 'Space' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 291,
      y: 224
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 281,
      y: 414
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 495,
      y: 409
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 489,
      y: 225
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 285,
      y: 223
    }
  });
  const point = {
    x: 440,
    y: 253
  };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('tc_dt_269.geom', geometryDir);
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
  await page.keyboard.press('Space');
  await expect(page).toHaveCanvasSnapshot('tc_dt_269_2.png', {
    maxDiffPixels: 960
  });
});

/**
 * @id TC_DT_270
 * @description Verify that the user can draw a mass by pressing the shortcut key "L" as Draw tool.
 *
 * @steps
 * 1 Create project
 * 2 Click design tab
 * 3 clicking "L" Draw tool icon
 * 4  Draw Mass
 *
 * @expected User should be able to draw a mass by pressing the shortcut key "L" as Draw tool.
 */
test('TC_DT_270', async () => {
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.keyboard.press('L');
  await expect(page.locator("//*[@alt='draw']")).toHaveScreenshot('TC_DT_270_1.png', {
    maxDiffPixels: 960,
    timeout: 15000
  });
  await page.locator('#canvas').click({
    position: {
      x: 329,
      y: 212
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 328,
      y: 370
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 515,
      y: 370
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 509,
      y: 256
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 463,
      y: 257
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 462,
      y: 210
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 328,
      y: 211
    }
  });
  const point = {
    x: 360,
    y: 238
  };
  await expect(page).toHaveCanvasSnapshot('tc_dt_270_2.png', {
    maxDiffPixels: 960
  });
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('tc_dt_270.geom', geometryDir);
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
});
