import { expect, test } from '../../common/fixtures';
import { Page } from '@playwright/test';
import { configure2DProjectForTestV0, initProject } from '../../common/project';
import { clearCanvas } from '../../common/canvas';
import { createGeometryDir, getGeometry, getSnaptrudeDSType } from '../../common/geometry';

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
 * @id TC_DT_066
 * @description Check user able to draw orthogonal Column, using object type as Column
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw line 4 Select Object type as Column 6 Draw orthogonal Column
 * @expected User should be able to draw orthogonal Column
 */
test('TC_DT_066', async () => {
  await page.getByRole('img', { name: 'Column' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 290,
      y: 214
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 284,
      y: 398
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 477,
      y: 399
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 476,
      y: 320
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 367,
      y: 328
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 365,
      y: 216
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 293,
      y: 218
    }
  });
  const point = { x: 329, y: 318 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab21' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab21' + '.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
});

/**
 * @id TC_DT_067
 * @description Check user able to draw Angular Column , using object type as Column
 * @steps
 *  1 Enter Url 2 Login 3 Create Project 4 Select Draw Tool 5 Select Object type as Column 6 Draw Angular Column
 * @expected User should able to draw Angular Column
 */
test('TC_DT_067', async () => {
  await page.getByRole('img', { name: 'Column' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 427,
      y: 273
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 364,
      y: 274
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 393,
      y: 213
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 477,
      y: 217
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 502,
      y: 268
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 510,
      y: 438
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 428,
      y: 431
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 428,
      y: 278
    }
  });

  const point = { x: 475, y: 281 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab22' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab22' + '.png', {
    maxDiffPixels: 960
  });

  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
});

/**
 * @id TC_DT_068
 * @description Check user able to Draw two edge Arc Column , using object type as Column
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw ARC tool 4 Select Object type as Column 5 Draw two edge ARC Column
 * @expected User should be able to draw two edge Arc Column
 */
test('TC_DT_068', async () => {
  await page.getByRole('img', { name: 'arc' }).click();
  await page.getByRole('img', { name: 'Column' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 369,
      y: 224
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 490,
      y: 225
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 431,
      y: 169
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 373,
      y: 229
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 362,
      y: 298
    }
  });
  const point = { x: 456, y: 263 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab23' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab23' + '.png', {
    maxDiffPixels: 960
  });

  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
});

/**
 * @id TC_DT_069
 * @description Check user able to Draw semicircle Column Arc, using object type as Column
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw ARC tool 4 Select Object type as Column 5 Draw semi-circle Column ARC
 * @expected User should be able to draw semi - circle Column Arc
 */
test('TC_DT_069', async () => {
  await page.getByRole('img', { name: 'arc' }).click();
  await page.getByRole('img', { name: 'Column' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 316,
      y: 237
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 514,
      y: 248
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 417,
      y: 144
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 321,
      y: 235
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 420,
      y: 238
    }
  });
  const point = { x: 424, y: 204 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab24' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab24' + '.png', {
    maxDiffPixels: 960
  });

  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
});

/**
 * @id TC_DT_073
 * @description Check user able to draw Column circle
 * @steps
 *  1 Enter Url 2 Login 3 Create Project 4 Select Draw Circle tool 5 Select Object type as Column 6 Draw Column circle
 * @expected User should be able to draw Column circle
 */
test('TC_DT_073', async () => {
  await page.getByRole('img', { name: 'drawCircle' }).click();
  await page.getByRole('img', { name: 'Column' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 364,
      y: 199
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 408,
      y: 256
    }
  });
  const point = { x: 369, y: 223 };
  //  const actualGeometry = await getGeometry(page, point);
  //  await expect(actualGeometry).toHaveGeometryV0("Drawtab25" + ".geom", geometryDir)
  await expect(page).toHaveCanvasSnapshot('Drawtab25' + '.png', {
    maxDiffPixels: 960
  });
  //
  //  expect(await getSnaptrudeDSType(page, point)).toBe("Mass");
});

/**
 * @id TC_DT_074
 * @description Check user able to Draw Beam by using Beam Object type or not
 * @steps
 *  1 Enter Url 2 Login 3 Create Project 4 Draw Beam
 * @expected User should able to Draw Beam, by using object type asBeam
 */
test('TC_DT_074', async () => {
  await page.getByText('Beam').click();
  await page.locator('#canvas').click({
    position: {
      x: 392,
      y: 358
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 389,
      y: 243
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 523,
      y: 249
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 527,
      y: 354
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 397,
      y: 355
    }
  });
  const point = { x: 390, y: 326 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab26' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab26' + '.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
});

/**
 * @id TC_DT_075
 * @description Check user able to draw orthogonal Beam, using object type as Beam
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw line 4 Select Object type as Beam 6 Draw orthogonal Beam
 * @expected User should be able to draw orthogonal Beam
 */
test('TC_DT_075', async () => {
  // await page.getByText('Beam').click();
  await page.locator('#canvas').click({
    position: {
      x: 319,
      y: 208
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 316,
      y: 394
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 532,
      y: 397
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 527,
      y: 320
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 391,
      y: 315
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 387,
      y: 209
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 320,
      y: 205
    }
  });
  const point = { x: 318, y: 313 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab27' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab27' + '.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
});

/**
 * @id TC_DT_076
 * @description Check user able to draw Angular Beam , using object type as Beam
 * @steps
 *  1 Enter Url 2 Login 3 Create Project 4 Select Draw Tool 5 Select Object type as Beam 6 Draw Angular Beam
 * @expected User should able to draw Angular Beam
 */
test('TC_DT_076', async () => {
  await page.getByRole('img', { name: 'Beam' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 442,
      y: 330
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 356,
      y: 326
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 414,
      y: 257
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 522,
      y: 257
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 544,
      y: 327
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 541,
      y: 507
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 441,
      y: 511
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 440,
      y: 332
    }
  });

  await page.locator('#canvas').click({
    position: {
      x: 440,
      y: 426
    }
  });
  const point = { x: 440, y: 426 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab28' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab28' + '.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
});

/**
 * @id TC_DT_083
 * @description Check user able to Draw Facade element mass by using Facade element mass Object type or not
 * @steps
 *  1 Enter Url 2 Login 3 Create Project 4 Draw Facade element mass
 * @expected User should able to Draw Facade element mass, by using object type asFacade element mass
 */
test('TC_DT_083', async () => {
  await page.getByText('Mass', { exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 334,
      y: 313
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 340,
      y: 225
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 399,
      y: 225
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 399,
      y: 184
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 468,
      y: 183
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 467,
      y: 231
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 540,
      y: 224
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 539,
      y: 306
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 337,
      y: 309
    }
  });
  const point = { x: 442, y: 227 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab29' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab29' + '.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
});

/**
 * @id TC_DT_084
 * @description Check user able to draw orthogonal Facade element mass, using object type as Facade element mass
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw line 4 Select Object type as Facade element mass 6 Draw orthogonal Facade element mass
 * @expected User should be able to draw orthogonal Facade element mass
 */
test('TC_DT_084', async () => {
  await page.getByText('Mass', { exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 293,
      y: 199
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 289,
      y: 386
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 489,
      y: 385
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 487,
      y: 313
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 363,
      y: 312
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 364,
      y: 202
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 297,
      y: 199
    }
  });

  const point = { x: 346, y: 336 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab30' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab30' + '.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
});
