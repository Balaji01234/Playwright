import { expect, test } from '../../common/fixtures';
import { Page } from '@playwright/test';
import { initProject, configure2DProjectForTestV0 } from '../../common/project';
import {
  createGeometryDir,
  getGeometry,
  getSnaptrudeDS,
  getSnaptrudeDSType
} from '../../common/geometry';

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

test.afterAll(async () => {
  await page.close();
});

/**
 * @id TC_DT_286
 * @description Check user able to draw a Space (ARC) mass by entering length input and angle line, pressing enter key
 * @steps
 *  1 Create project 2 Click design tab 3. Draw ARC Mass 4 Select Draw tool 5 Draw arc mass by entering input length +Enter Key
 * @expected User should be able to draw a Space (ARC) mass by entering length input and angle line pressing enter key
 */
test('TC_DT_286', async () => {
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 206,
      y: 322
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 369,
      y: 321
    }
  });
  await page.mouse.move(289, 250);
  await page.keyboard.type('3500');
  await page.keyboard.press('Enter');

  await page.locator('#canvas').click({
    position: {
      x: 381,
      y: 454
    }
  });
  await page.mouse.move(451, 371);
  await page.locator('#canvas').press('Tab');
  await page.keyboard.type('90');
  await page.keyboard.press('Enter');
  await page.locator('#canvas').click({
    position: {
      x: 214,
      y: 325
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 241,
      y: 440
    }
  });

  const point1 = { x: 346, y: 391 };
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('TC_DT_286.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('TC_DT_286.png', {
    maxDiffPixels: 960
  });
});

/**
 * @id TC_DT_287
 * @description Verify if the user can draw masses on dimension values and check the Dimension Value appear on the canvas. 1. Draw Space Mass 2. Draw Arc Mass 3. Draw Circle Mass
 * @steps
 *  1. Create Project 2.Select Draw Line/Arc/Circle tool 3.Select Object Mass Type as space 4.Enter the dimension value 5.Draw a masses
 * @expected User should be able to draw masses on dimension values and see dimension value appear on the canvas.
 */
test('TC_DT_287', async () => {
  await page.locator('#project-settings-button').click();
  await page
    .locator('div')
    .filter({ hasText: /^Dimension Snap$/ })
    .getByRole('textbox')
    .dblclick();
  await page
    .locator('div')
    .filter({ hasText: /^Dimension Snap$/ })
    .getByRole('textbox')
    .fill('500');
  await page.locator('#canvas').click({
    position: {
      x: 334,
      y: 189
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 491,
      y: 207
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 487,
      y: 346
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 331,
      y: 352
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 339,
      y: 196
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 653,
      y: 253
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 754,
      y: 252
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 702,
      y: 192
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 753,
      y: 343
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 805,
      y: 294
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 663,
      y: 334
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 715,
      y: 393
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 656,
      y: 258
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 602,
      y: 301
    }
  });
  await page.getByRole('img', { name: 'drawCircle' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 145,
      y: 270
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 236,
      y: 220
    }
  });
  const point1 = { x: 408, y: 268 };
  const point2 = { x: 737, y: 282 };
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Mass');
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('TC_DT_287.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('TC_DT_287.png', {
    maxDiffPixels: 960
  });
});

/**
 * @id TC_DT_288
 * @description Check that the user can change the width values in OPP and it appears on the drawn mass 1. Draw Space Mass 2. Draw Arc Mass 3. Draw Circle Mass
 * @steps
 *  1. Create Project 2.Select Draw Line/Arc/Circle tool 3.Select Object Mass Type as space 4.Draw a masses 5.Change the Width value in OPP
 * @expected user should be able to change the width value on drawn mass in OPP
 */
test('TC_DT_288', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 167,
      y: 220
    }
  });

  await page.locator('#canvas').click({
    position: {
      x: 282,
      y: 223
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 278,
      y: 400
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 167,
      y: 404
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 164,
      y: 225
    }
  });
  await page.getByRole('img', { name: 'drawCircle' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 541,
      y: 290
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 618,
      y: 242
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 278,
      y: 257
    }
  });
  await page
    .locator('div')
    .filter({ hasText: /^Widthmm$/ })
    .getByRole('textbox')
    .dblclick();
  await page
    .locator('div')
    .filter({ hasText: /^Widthmm$/ })
    .getByRole('textbox')
    .fill('6000');
  await page
    .locator('div')
    .filter({ hasText: /^Widthmm$/ })
    .getByRole('textbox')
    .press('Enter');
  await page.locator('#canvas').click({
    position: {
      x: 596,
      y: 332
    }
  });
  await page
    .locator('div')
    .filter({ hasText: /^Widthmm$/ })
    .getByRole('textbox')
    .click();
  await page
    .locator('div')
    .filter({ hasText: /^Widthmm$/ })
    .getByRole('textbox')
    .fill('7000');
  await page
    .locator('div')
    .filter({ hasText: /^Widthmm$/ })
    .getByRole('textbox')
    .press('Enter');
  const point1 = { x: 179, y: 303 };
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('TC_DT_288.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('TC_DT_288.png', {
    maxDiffPixels: 960
  });
});

/**
 * @id TC_DT_289
 * @description Check that the user can change the Length values in OPP and it appears on the drawn mass 1. Draw Space Mass 2. Draw Arc Mass 3. Draw Circle Mass
 * @steps
 *  1. Create Project 2.Select Draw Line/Arc/Circle tool 3.Select Object Mass Type as space 4.Draw a masses 5.Change the Length value in OPP
 * @expected user should be able to change the Length values on drawn mass in OPP
 */
test('TC_DT_289', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 179,
      y: 192
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 347,
      y: 187
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 346,
      y: 374
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 179,
      y: 373
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 179,
      y: 196
    }
  });
  await page.getByRole('img', { name: 'drawCircle' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 573,
      y: 274
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 650,
      y: 222
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 282,
      y: 259
    }
  });
  await page
    .locator('div')
    .filter({ hasText: /^Lengthmm$/ })
    .getByRole('textbox')
    .dblclick();
  await page
    .locator('div')
    .filter({ hasText: /^Lengthmm$/ })
    .getByRole('textbox')
    .fill('7000');
  await page
    .locator('div')
    .filter({ hasText: /^Lengthmm$/ })
    .getByRole('textbox')
    .press('Enter');
  await page.locator('#canvas').click({
    position: {
      x: 621,
      y: 277
    }
  });
  await page
    .locator('div')
    .filter({ hasText: /^Lengthmm$/ })
    .getByRole('textbox')
    .dblclick();
  await page
    .locator('div')
    .filter({ hasText: /^Lengthmm$/ })
    .getByRole('textbox')
    .fill('6500');
  await page
    .locator('div')
    .filter({ hasText: /^Lengthmm$/ })
    .getByRole('textbox')
    .press('Enter');

  const point1 = { x: 243, y: 323 };
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('TC_DT_289.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('TC_DT_289.png', {
    maxDiffPixels: 960
  });
});

/**
 * @id TC_DT_290
 * @description Check that the user can change the Height values in OPP and it appears on the drawn mass 1. Draw Space Mass 2. Draw Arc Mass 3. Draw Circle Mass
 * @steps
 *  1. Create Project 2.Select Draw Line/Arc/Circle tool 3.Select Object Mass Type as space 4.Draw a masses 5.Change the Height value in OPP
 * @expected user should be able to change the Height values on drawn mass in OPP
 */
test('TC_DT_290', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 140,
      y: 175
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 281,
      y: 178
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 280,
      y: 279
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 153,
      y: 274
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 150,
      y: 175
    }
  });
  await page.getByRole('img', { name: 'drawCircle' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 266,
      y: 447
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 320,
      y: 409
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 367,
      y: 224
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 444,
      y: 247
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 455,
      y: 225
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 360,
      y: 220
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 333,
      y: 324
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 259,
      y: 210
    }
  });
  await page
    .locator('div')
    .filter({ hasText: /^Heightmm$/ })
    .getByRole('textbox')
    .dblclick();
  await page
    .locator('div')
    .filter({ hasText: /^Heightmm$/ })
    .getByRole('textbox')
    .fill('4500');
  await page
    .locator('div')
    .filter({ hasText: /^Heightmm$/ })
    .getByRole('textbox')
    .press('Enter');
  await page.locator('#canvas').click({
    position: {
      x: 436,
      y: 314
    }
  });
  await page
    .locator('div')
    .filter({ hasText: /^Heightmm$/ })
    .getByRole('textbox')
    .dblclick();
  await page
    .locator('div')
    .filter({ hasText: /^Heightmm$/ })
    .getByRole('textbox')
    .fill('4500');
  await page
    .locator('div')
    .filter({ hasText: /^Heightmm$/ })
    .getByRole('textbox')
    .press('Enter');
  await page.locator('#canvas').click({
    position: {
      x: 305,
      y: 462
    }
  });
  await page
    .locator('div')
    .filter({ hasText: /^Heightmm$/ })
    .getByRole('textbox')
    .dblclick();
  await page
    .locator('div')
    .filter({ hasText: /^Heightmm$/ })
    .getByRole('textbox')
    .fill('5000');
  await page
    .locator('div')
    .filter({ hasText: /^Heightmm$/ })
    .getByRole('textbox')
    .press('Enter');
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  const point1 = { x: 722, y: 202 };
  const point2 = { x: 444, y: 259 };
  const point3 = { x: 756, y: 313 };
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point3)).toBe('Mass');
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry1).toHaveGeometryV0('TC_DT_290_1.geom', geometryDir);
  await expect(actualGeometry3).toHaveGeometryV0('TC_DT_290_2.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('TC_DT_290.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
});

/**
 * @id TC_DT_291
 * @description Check that the user can change the label name in OPP and it appears on the drawn mass 1. Draw Space Mass 2. Draw Arc Mass 3. Draw Circle Mass
 * @steps
 *  1. Create Project 2.Select Draw Line/Arc/Circle tool 3.Select Object Mass Type as space 4.Draw a masses 5.Change the label name in OPP
 * @expected user should be able to change the label name on drawn mass in OPP
 */
test('TC_DT_291', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 161,
      y: 192
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 158,
      y: 326
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 327,
      y: 338
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 326,
      y: 191
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 165,
      y: 182
    }
  });
  await page.getByRole('img', { name: 'drawCircle' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 535,
      y: 260
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 625,
      y: 221
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 714,
      y: 253
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 825,
      y: 200
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 728,
      y: 171
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 821,
      y: 291
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 862,
      y: 284
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 721,
      y: 260
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 705,
      y: 278
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 284,
      y: 281
    }
  });
  await page
    .locator('div')
    .filter({ hasText: /^Label$/ })
    .getByRole('textbox')
    .dblclick();
  await page
    .locator('div')
    .filter({ hasText: /^Label$/ })
    .getByRole('textbox')
    .fill('garden');
  await page
    .locator('div')
    .filter({ hasText: /^Label$/ })
    .getByRole('textbox')
    .press('Enter');
  await page.locator('#canvas').click({
    position: {
      x: 608,
      y: 284
    }
  });
  await page
    .locator('div')
    .filter({ hasText: /^Label$/ })
    .getByRole('textbox')
    .dblclick();
  await page
    .locator('div')
    .filter({ hasText: /^Label$/ })
    .getByRole('textbox')
    .fill('pool');
  await page
    .locator('div')
    .filter({ hasText: /^Label$/ })
    .getByRole('textbox')
    .press('Enter');
  await page.locator('#canvas').click({
    position: {
      x: 850,
      y: 250
    }
  });
  await page
    .locator('div')
    .filter({ hasText: /^Label$/ })
    .getByRole('textbox')
    .dblclick();
  await page
    .locator('div')
    .filter({ hasText: /^Label$/ })
    .getByRole('textbox')
    .fill('site');
  await page
    .locator('div')
    .filter({ hasText: /^Label$/ })
    .getByRole('textbox')
    .press('Enter');
  const point1 = { x: 295, y: 299 };
  const point2 = { x: 755, y: 240 };
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Mass');
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry1).toHaveGeometryV0('TC_DT_291_1.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('TC_DT_291_2.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('TC_DT_291.png', {
    maxDiffPixels: 960
  });
});

/**
 * @id TC_DT_292
 * @description Double clicking on the mass, Check that the user can update the label name on canvas and it appears on the drawn mass 1. Draw Space Mass 2. Draw Arc Mass 3. Draw Circle Mass
 * @steps
 *  1. Create Project 2.Select Draw Line/Arc/Circle tool 3.Select Object Mass Type as space 4.Draw a masses 5.Change the label name on canvas by double clicking on the mass
 * @expected user should be able to change the label name on canvas by double clicking on the drawn mass
 */
test('TC_DT_292', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 171,
      y: 167
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 332,
      y: 162
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 328,
      y: 317
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 176,
      y: 312
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 167,
      y: 165
    }
  });
  await page.getByRole('img', { name: 'drawCircle' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 613,
      y: 230
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 689,
      y: 190
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 351,
      y: 505
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 419,
      y: 409
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 358,
      y: 404
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 493,
      y: 468
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 505,
      y: 440
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 355,
      y: 507
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 474,
      y: 556
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').dblclick({
    position: {
      x: 292,
      y: 270
    }
  });
  await page.waitForTimeout(500);
  await page.keyboard.type('balcony');
  await page.keyboard.press('Enter');

  await page.locator('#canvas').dblclick({
    position: {
      x: 580,
      y: 262
    }
  });
  await page.waitForTimeout(500);
  await page.keyboard.type('Atrium');
  await page.keyboard.press('Enter');
  await page.locator('#canvas').dblclick({
    position: {
      x: 451,
      y: 482
    }
  });
  await page.waitForTimeout(500);
  await page.keyboard.type('Master Bedroom');
  await page.keyboard.press('Enter');

  const point1 = { x: 243, y: 260 };
  const point2 = { x: 401, y: 490 };
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Mass');
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry1).toHaveGeometryV0('TC_DT_292_1.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('TC_DT_292_2.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('TC_DT_292.png', {
    maxDiffPixels: 960
  });
});

/**
 * @id TC_DT_293
 * @description Verify that the user can flip ( X ) the drawn space mass in 2D/3D 1. Draw Space Mass 2. Draw Arc Mass 3. Draw Circle Mass
 * @steps
 *  1. Create Project 2.Select Draw Line/Arc/Circle tool 3.Select Object Mass Type as space 4.Draw a masses 5.Flip (x) drawn mass in 2D/3D
 * @expected user should be able to flip ( X ) the drawn space mass in 2D/3D
 */
test('TC_DT_293', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 116,
      y: 172
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 121,
      y: 312
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 277,
      y: 308
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 280,
      y: 117
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 113,
      y: 167
    }
  });
  await page.getByRole('img', { name: 'drawCircle' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 558,
      y: 244
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 608,
      y: 177
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 265,
      y: 474
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 332,
      y: 402
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 279,
      y: 404
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 400,
      y: 449
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 401,
      y: 402
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 349,
      y: 494
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 391,
      y: 511
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 268,
      y: 468
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 261,
      y: 491
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 229,
      y: 260
    }
  });
  await page.getByRole('img', { name: 'flipX', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 611,
      y: 256
    }
  });
  await page.getByRole('img', { name: 'flipX', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 375,
      y: 409
    }
  });
  await page.getByRole('img', { name: 'flipX', exact: true }).click();

  const point1 = { x: 243, y: 254 };
  const point2 = { x: 383, y: 446 };
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Mass');
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry1).toHaveGeometryV0('TC_DT_293_1.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('TC_DT_293_2.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('TC_DT_293.png', {
    maxDiffPixels: 960
  });
});

/**
 * @id TC_DT_294
 * @description Verify that the user can flip ( Z ) the drawn space mass in 2D/3D 1. Draw Space Mass 2. Draw Arc Mass 3. Draw Circle Mass
 * @steps
 *  1. Create Project 2.Select Draw Line/Arc/Circle tool 3.Select Object Mass Type as space 4.Draw a masses 5.Flip (Z) drawn mass in 2D/3D
 * @expected user should be able to flip ( Z ) the drawn space mass in 2D/3D
 */
test('TC_DT_294', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 156,
      y: 244
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 159,
      y: 378
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 315,
      y: 389
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 332,
      y: 173
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 154,
      y: 240
    }
  });
  await page.getByRole('img', { name: 'drawCircle' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 587,
      y: 258
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 664,
      y: 208
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 354,
      y: 465
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 430,
      y: 414
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 366,
      y: 405
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 501,
      y: 486
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 513,
      y: 450
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 390,
      y: 506
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 433,
      y: 550
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 362,
      y: 469
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 338,
      y: 483
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 293,
      y: 345
    }
  });
  await page.getByRole('img', { name: 'flipXY' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 673,
      y: 244
    }
  });
  await page.getByRole('img', { name: 'flipXY' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 427,
      y: 459
    }
  });
  await page.getByRole('img', { name: 'flipXY' }).click();

  const point1 = { x: 268, y: 327 };
  const point2 = { x: 462, y: 462 };
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Mass');
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry1).toHaveGeometryV0('TC_DT_294.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('TC_DT_294.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('TC_DT_294.png', {
    maxDiffPixels: 960
  });
});

/**
 * @id TC_DT_295
 * @description Verify that the user can able to move the drawn space mass in 2D/3D 1. Draw Space Mass 2. Draw Arc Mass 3. Draw Circle Mass
 * @steps
 *  1. Create Project 2.Select Draw Line/Arc/Circle tool 3.Select Object Mass Type as space 4.Draw a masses 5.Move the drawn mass in 2D/3D
 * @expected user should be able to move the drawn space mass in 2D/3D
 */
test('TC_DT_295', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 113,
      y: 161
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 122,
      y: 308
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 274,
      y: 315
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 260,
      y: 159
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 118,
      y: 147
    }
  });
  await page.getByRole('img', { name: 'drawCircle' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 633,
      y: 261
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 699,
      y: 203
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 252,
      y: 500
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 333,
      y: 441
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 270,
      y: 431
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 407,
      y: 519
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 409,
      y: 450
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 288,
      y: 554
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 372,
      y: 579
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 250,
      y: 495
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 248,
      y: 538
    }
  });
  await page.getByRole('img', { name: 'move', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 217,
      y: 228
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 451,
      y: 237
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 621,
      y: 242
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 808,
      y: 220
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 309,
      y: 463
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 349,
      y: 488
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 382,
      y: 524
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 752,
      y: 520
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 775,
      y: 519
    }
  });
  const point1 = { x: 454, y: 260 };
  const point2 = { x: 775, y: 519 };
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Mass');
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry1).toHaveGeometryV0('TC_DT_295_1.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('TC_DT_295_2.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('TC_DT_295.png', {
    maxDiffPixels: 960
  });
});
