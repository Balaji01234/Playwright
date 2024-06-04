import { expect, test } from '../../common/fixtures';
import { Page } from '@playwright/test';
import {
  initProject,
  configure2DProjectForTest,
  configure2DProjectForTestV0,
  toggle2D,
  ensureDrawMode,
  enableAutoSave
} from '../../common/project';
import { clearCanvas } from '../../common/canvas';
import { createGeometryDir, getGeometry, getSnaptrudeDSType } from '../../common/geometry';
import * as path from 'path';
import { reset2DCameraVersion0 } from '../../common/camera';

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
 * @id Autocomplete_0071
 * @description Verify the user is able to autocomplete line+arc (mass/slab) through vertices/edge or not after enable/disable the normal snap in PP
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass/slab
 * 3.Draw a line+arc mass/slab
 * 4.enable/disable the normal snap in PP
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line+arc (mass/slab) through vertices/edge, after enable/disable the normal snap in PP
 */
test('Autocomplete_0071', async () => {
  test.setTimeout(500000);
  await page.locator('#canvas').click({
    position: {
      x: 117,
      y: 246
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 112,
      y: 398
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 268,
      y: 400
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 192,
      y: 370
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 277,
      y: 247
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 111,
      y: 250
    }
  });
  await page.getByRole('img', { name: 'Settings' }).click();
  await page
    .locator('div')
    .filter({ hasText: /^Normal Snap$/ })
    .locator('div')
    .nth(3)
    .click();
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 195,
      y: 246
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 191,
      y: 134
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 377,
      y: 132
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 385,
      y: 297
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 447,
      y: 220
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 268,
      y: 302
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 267,
      y: 394
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 350,
      y: 405
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 383,
      y: 396
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 365,
      y: 387
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 383,
      y: 300
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 624,
      y: 232
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 620,
      y: 369
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 783,
      y: 364
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 791,
      y: 228
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 829,
      y: 295
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 623,
      y: 226
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 621,
      y: 364
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 616,
      y: 501
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 788,
      y: 497
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 708,
      y: 472
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 787,
      y: 369
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 790,
      y: 428
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 899,
      y: 432
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 898,
      y: 296
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 924,
      y: 361
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 834,
      y: 295
    }
  });
  const point1 = { x: 211, y: 307 };
  const point2 = { x: 764, y: 266 };
  await expect(page).toHaveCanvasSnapshot('autocomplete_0071.png', {
    maxDiffPixels: 960
  });
  const actualGeometry1 = await getGeometry(page, { x: 211, y: 307 });
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0071_1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, { x: 405, y: 240 });
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0071_2.geom', geometryDir);
  const actualGeometry3 = await getGeometry(page, { x: 729, y: 387 });
  await expect(actualGeometry3).toHaveGeometryV0('autocomplete_0071_3.geom', geometryDir);
  const actualGeometry4 = await getGeometry(page, { x: 764, y: 266 });
  await expect(actualGeometry4).toHaveGeometryV0('autocomplete_0071_4.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Roof');
  await page.getByRole('img', { name: 'Settings' }).click();
  await page
    .locator('div')
    .filter({ hasText: /^Normal Snap$/ })
    .locator('div')
    .nth(3)
    .click();
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
 * @id Autocomplete_0072
 * @description Verify the user is able to autocomplete line+arc (mass/slab) through vertices/edge or not after enable/disable the nearest point snap in PP
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass/slab
 * 3.Draw a line+arc mass/slab
 * 4.enable/disable the nearest point snap in PP
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line+arc (mass/slab) through vertices/edge, after enable/disable the nearest point snap in PP
 */
test('Autocomplete_0072', async () => {
  test.setTimeout(500000);
  await page.locator('#canvas').click({
    position: {
      x: 109,
      y: 215
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 273,
      y: 217
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 263,
      y: 369
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 109,
      y: 370
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 194,
      y: 405
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 109,
      y: 222
    }
  });
  await page.getByRole('img', { name: 'Settings' }).click();
  await page
    .locator('div')
    .filter({ hasText: /^Nearest Point Snap$/ })
    .locator('div')
    .nth(2)
    .click();
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 275,
      y: 216
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 369,
      y: 217
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 371,
      y: 294
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 395,
      y: 253
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 370,
      y: 370
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 281,
      y: 371
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 190,
      y: 405
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 198,
      y: 469
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 319,
      y: 465
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 321,
      y: 373
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 610,
      y: 247
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 617,
      y: 374
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 720,
      y: 360
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 670,
      y: 409
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 723,
      y: 248
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 610,
      y: 245
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 665,
      y: 245
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 666,
      y: 178
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 823,
      y: 169
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 823,
      y: 314
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 726,
      y: 322
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 612,
      y: 245
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 544,
      y: 252
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 549,
      y: 172
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 515,
      y: 212
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 669,
      y: 187
    }
  });
  const point1 = { x: 203, y: 278 };
  const point2 = { x: 666, y: 301 };
  await expect(page).toHaveCanvasSnapshot('autocomplete_0072.png', {
    maxDiffPixels: 960
  });
  const actualGeometry1 = await getGeometry(page, { x: 203, y: 278 });
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0072_1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, { x: 328, y: 341 });
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0072_2.geom', geometryDir);
  const actualGeometry3 = await getGeometry(page, { x: 666, y: 301 });
  await expect(actualGeometry3).toHaveGeometryV0('autocomplete_0072_3.geom', geometryDir);
  const actualGeometry4 = await getGeometry(page, { x: 764, y: 224 });
  await expect(actualGeometry4).toHaveGeometryV0('autocomplete_0072_4.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Roof');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.getByRole('img', { name: 'Space' }).click();
  await page.getByRole('img', { name: 'Settings' }).click();
  await page
    .locator('div')
    .filter({ hasText: /^Nearest Point Snap$/ })
    .locator('div')
    .nth(2)
    .click();
  await page.getByRole('img', { name: 'Settings' }).click();
});

/**
 * @id Autocomplete_0073
 * @description Verify the user is able to autocomplete line+arc (mass/slab) through vertices/edge or not after import sketch.
 *
 * @steps
 * 1.Create project
 * 2.Import sketch
 * 3.Select draw mass/slab
 * 4.Draw a line+arc mass/slab
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line+arc (mass/slab) through vertices/edge, after import sketch.
 */
test('Autocomplete_0073', async () => {
  test.setTimeout(500000);
  await enableAutoSave(page);
  await page.getByText('Import').click();
  await page.locator('#importInput').setInputFiles(path.join(__dirname, '2.jpg'));
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.locator('#close-import-image-toast').click();
  await page.locator('#canvas').click({
    position: {
      x: 457,
      y: 350
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 574,
      y: 353
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 570,
      y: 427
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 459,
      y: 421
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 450,
      y: 346
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 432,
      y: 393
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 571,
      y: 349
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 652,
      y: 352
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 612,
      y: 327
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 650,
      y: 475
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 572,
      y: 472
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 573,
      y: 427
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 510,
      y: 425
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 515,
      y: 463
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 568,
      y: 459
    }
  });
  const point1 = { x: 547, y: 400 };
  await expect(page).toHaveCanvasSnapshot('autocomplete_0073.png', {
    maxDiffPixels: 960
  });
  const actualGeometry1 = await getGeometry(page, { x: 547, y: 400 });
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0073_1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, { x: 611, y: 454 });
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0073_2.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  await page.getByRole('img', { name: 'userimportedfiles' }).click();
  await page.getByRole('img', { name: 'delete', exact: true }).click();
  await page.getByRole('img', { name: 'userimportedfiles' }).click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
 * @id Autocomplete_0074
 * @description Verify the user is able to autocomplete line+arc (mass/slab) through vertices/edge or not after import autocad
 *
 * @steps
 * 1.Create project
 * 2.Import autocad
 * 3.Select draw mass/slab
 * 4.Draw a line+arc mass/slab
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line+arc (mass/slab) through vertices/edge, after import autocad
 */
test('Autocomplete_0074', async () => {
  test.setTimeout(600000);
  await enableAutoSave(page);
  await page.getByText('Import').click();
  await page.locator('#importInput').setInputFiles(path.join(__dirname, 'Snaptrude_Import_1.dwg'));
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'zoomOut' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 438,
      y: 268
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 438,
      y: 268
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 438,
      y: 268
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 438,
      y: 268
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 438,
      y: 268
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 904,
      y: 615
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 904,
      y: 615
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 904,
      y: 615
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 904,
      y: 615
    }
  });
  await page.getByRole('img', { name: 'zoomIn' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 415,
      y: 164
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 415,
      y: 164
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 415,
      y: 164
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 415,
      y: 164
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 415,
      y: 164
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 457,
      y: 250
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 306,
      y: 147
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 308,
      y: 314
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 391,
      y: 318
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 387,
      y: 153
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 427,
      y: 232
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 313,
      y: 154
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 428,
      y: 228
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 508,
      y: 232
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 512,
      y: 355
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 361,
      y: 356
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 371,
      y: 320
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 388,
      y: 149
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 513,
      y: 156
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 506,
      y: 231
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 635,
      y: 200
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 636,
      y: 313
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 751,
      y: 307
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 692,
      y: 346
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 826,
      y: 313
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 824,
      y: 193
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 640,
      y: 200
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 824,
      y: 204
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 890,
      y: 203
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 889,
      y: 310
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 908,
      y: 247
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 829,
      y: 309
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 789,
      y: 312
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 792,
      y: 370
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 873,
      y: 362
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 867,
      y: 311
    }
  });
  const point1 = { x: 682, y: 241 };
  const point2 = { x: 468, y: 277 };
  await expect(page).toHaveCanvasSnapshot('autocomplete_0074.png', {
    maxDiffPixels: 960
  });
  const actualGeometry1 = await getGeometry(page, { x: 682, y: 241 });
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0074_1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, { x: 468, y: 277 });
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0074_2.geom', geometryDir);
  const actualGeometry3 = await getGeometry(page, { x: 826, y: 365 });
  await expect(actualGeometry3).toHaveGeometryV0('autocomplete_0074_3.geom', geometryDir);
  const actualGeometry4 = await getGeometry(page, { x: 495, y: 293 });
  await expect(actualGeometry4).toHaveGeometryV0('autocomplete_0074_4.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Roof');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Mass');
  await page.getByRole('img', { name: 'userimportedfiles' }).click();
  await page.locator('[id="\\31 "]').click();
  await page.getByRole('img', { name: 'delete', exact: true }).click();
  await page.getByRole('img', { name: 'userimportedfiles' }).click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.getByRole('img', { name: 'Space' }).click();
  await reset2DCameraVersion0(page);
});

/**
 * @id Autocomplete_0075
 * @description Verify the user is able to autocomplete line+arc (mass/slab) through vertices/edge or not after import pdf
 *
 * @steps
 * 1.Create project
 * 2.Import pdf
 * 3.Select draw mass/slab
 * 4.Draw a line+arc mass/slab
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line+arc (mass/slab) through vertices/edge, after import pdf
 */
test('Autocomplete_0075', async () => {
  test.setTimeout(600000);
  await enableAutoSave(page);
  await page.getByText('Import').click();
  await page
    .locator('#importInput')
    .setInputFiles(path.join(__dirname, 'Persimmon housetypes AAH4926-404 Type 1735 (1) (1).pdf'));
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 166,
      y: 175
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 165,
      y: 477
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 407,
      y: 480
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 404,
      y: 179
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 447,
      y: 327
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 175,
      y: 175
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 448,
      y: 314
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 533,
      y: 318
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 528,
      y: 526
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 312,
      y: 527
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 318,
      y: 486
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 407,
      y: 175
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 537,
      y: 178
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 534,
      y: 313
    }
  });
  const point1 = { x: 365, y: 257 };
  await expect(page).toHaveCanvasSnapshot('autocomplete_0075.png', {
    maxDiffPixels: 960
  });
  const actualGeometry1 = await getGeometry(page, { x: 365, y: 257 });
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0075_1.geom', geometryDir);
  const actualGeometry3 = await getGeometry(page, { x: 488, y: 273 });
  await expect(actualGeometry3).toHaveGeometryV0('autocomplete_0075_2.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  await page.getByRole('img', { name: 'userimportedfiles' }).click();
  await page.locator('[id="\\33 "]').click();
  await page.getByRole('img', { name: 'delete', exact: true }).click();
  await page.getByRole('img', { name: 'userimportedfiles' }).click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
 * @id Autocomplete_0076
 * @description Verify the user is able to autocomplete line+arc (mass/slab) through vertices/edge or not on topography
 *
 * @steps
 * 1.Create project
 * 2.Import topography
 * 3.Select draw mass/slab
 * 4.Draw a line+arc mass/slab
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line+arc (mass/slab) through vertices/edge on topography
 */
test('Autocomplete_0076', async () => {
  test.setTimeout(600000);
  await page.getByText('Import').click();
  await page.getByRole('button', { name: 'Load Topography' }).click();
  await page.getByRole('button', { name: 'Load Topography' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 209,
      y: 227
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 204,
      y: 432
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 401,
      y: 437
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 404,
      y: 229
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 478,
      y: 330
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 212,
      y: 227
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 477,
      y: 328
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 580,
      y: 324
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 571,
      y: 478
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 312,
      y: 479
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 451,
      y: 578
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 316,
      y: 437
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 207,
      y: 228
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 206,
      y: 142
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 583,
      y: 140
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 575,
      y: 328
    }
  });
  const point1 = { x: 416, y: 358 };
  await expect(page).toHaveCanvasSnapshot('autocomplete_0076.png', {
    maxDiffPixels: 960
  });
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0076_1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, { x: 490, y: 504 });
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0076_2.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  await page.getByRole('img', { name: 'userimportedfiles' }).click();
  await page.locator('[id="\\32 "]').click();
  await page.getByRole('img', { name: 'delete', exact: true }).click();
  await page.getByRole('img', { name: 'userimportedfiles' }).click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
 * @id Autocomplete_0077
 * @description Verify the user is able to autocomplete line+arc (mass/slab) through vertices/edge or not besides topography
 *
 * @steps
 * 1.Create project
 * 2.Import topography
 * 3.Select draw mass/slab
 * 4.Draw a line+arc mass/slab
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line+arc (mass/slab) through vertices/edge on besides topography
 */
test('Autocomplete_0077', async () => {
  test.setTimeout(400000);
  await page.getByText('Import').click();
  await page.getByRole('button', { name: 'Load Topography' }).click();
  await page.getByRole('button', { name: 'Load Topography' }).click();
  await page.getByRole('img', { name: 'zoomExtents' }).click();
  await page.getByRole('img', { name: 'zoomOut' }).click();
  for (let i = 0; i <= 43; i++) {
    await page.locator('#canvas').click({
      position: {
        x: 10,
        y: 103
      }
    });
  }
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 682,
      y: 225
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 683,
      y: 345
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 824,
      y: 342
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 755,
      y: 384
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 824,
      y: 221
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 684,
      y: 228
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 683,
      y: 222
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 681,
      y: 190
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 827,
      y: 195
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 767,
      y: 143
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 876,
      y: 190
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 878,
      y: 224
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 819,
      y: 223
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 824,
      y: 284
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 895,
      y: 290
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 901,
      y: 435
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 752,
      y: 433
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 749,
      y: 390
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 594,
      y: 530
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 598,
      y: 605
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 760,
      y: 608
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 677,
      y: 634
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 758,
      y: 532
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 590,
      y: 531
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 682,
      y: 494
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 758,
      y: 531
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 803,
      y: 538
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 808,
      y: 607
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 826,
      y: 566
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 763,
      y: 604
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 676,
      y: 491
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 680,
      y: 434
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 464,
      y: 438
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 481,
      y: 565
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 591,
      y: 569
    }
  });
  const point1 = { x: 780, y: 258 };
  const point2 = { x: 683, y: 568 };
  await expect(page).toHaveCanvasSnapshot('autocomplete_0077.png', {
    maxDiffPixels: 960
  });
  const actualGeometry1 = await getGeometry(page, { x: 780, y: 258 });
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0077_1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, { x: 683, y: 568 });
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0077_2.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Roof');
  await reset2DCameraVersion0(page);
  await page.locator('//img[@alt="userimportedfiles"]').click();
  await page.locator('[id="\\32 "]').click();
  await page.getByRole('img', { name: 'delete', exact: true }).click();
  await page.locator('//img[@alt="userimportedfiles"]').click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
 * @id Autocomplete_0078
 * @description Verify the user is able to autocomplete line+arc (mass/slab) through vertices/edges or not after label update (balcony/diningroom/bedroom etc., )
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass/slab
 * 3.Draw a line+arc mass/slab
 * 4.Label update
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line+arc (mass/slab) through vertices/edge after label update (balcony/diningroom/bedroom etc., )
 */
test('Autocomplete_0078', async () => {
  test.setTimeout(500000);
  await page.locator('#canvas').click({
    position: {
      x: 158,
      y: 235
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 150,
      y: 372
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 312,
      y: 383
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 306,
      y: 237
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 344,
      y: 310
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 159,
      y: 234
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').dblclick({
    position: {
      x: 275,
      y: 336
    }
  });
  await page.waitForTimeout(500);
  await page.keyboard.type('balcony');
  await page.keyboard.press('Enter');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 251,
      y: 233
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 246,
      y: 158
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 434,
      y: 175
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 349,
      y: 125
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 436,
      y: 304
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 345,
      y: 306
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 309,
      y: 370
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 439,
      y: 368
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 437,
      y: 312
    }
  });
  const point1 = { x: 391, y: 228 };
  await expect(page).toHaveCanvasSnapshot('autocomplete_0078.png', {
    maxDiffPixels: 960
  });
  const actualGeometry1 = await getGeometry(page, { x: 211, y: 314 });
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0078_1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, { x: 391, y: 228 });
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0078_2.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
 * @id Autocomplete_0079
 * @description Verify the user is able to autocomplete line+arc (mass/slab) through vertices/edges or not after save as the project
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass/slab
 * 3.Draw a line+arc mass/slab
 * 4.Save as project
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line+arc (mass/slab) through vertices/edge after label update (balcony/diningroom/bedroom etc., )
 */
test('Autocomplete_0079', async () => {
  test.setTimeout(600000);
  await page.evaluate(() => {
    // @ts-ignore
    store.exposed.autoSaveConfig.disableToasts();
    // @ts-ignore
    store.exposed.autoSaveConfig.enable();
  });
  await page.locator('#canvas').click({
    position: {
      x: 249,
      y: 243
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 248,
      y: 373
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 435,
      y: 375
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 339,
      y: 433
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 434,
      y: 240
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 251,
      y: 238
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 340,
      y: 241
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 346,
      y: 174
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 532,
      y: 172
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 524,
      y: 323
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 564,
      y: 249
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 436,
      y: 313
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 252,
      y: 239
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 246,
      y: 175
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 337,
      y: 180
    }
  });
  await page.getByRole('img', { name: '>' }).first().click();
  await page.getByText('Save As', { exact: true }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  const page1Promise = page.waitForEvent('popup');
  const page1 = await page1Promise;
  await page1.waitForSelector('.project-is-ready', {
    state: 'attached',
    timeout: 120000
  });
  await page1.getByRole('img', { name: 'Slab' }).click();
  await page1.locator('#canvas').click({
    position: {
      x: 153,
      y: 303
    }
  });
  await page1.locator('#canvas').click({
    position: {
      x: 150,
      y: 407
    }
  });
  await page1.getByRole('img', { name: 'arc' }).click();
  await page1.locator('#canvas').click({
    position: {
      x: 280,
      y: 401
    }
  });
  await page1.locator('#canvas').click({
    position: {
      x: 216,
      y: 439
    }
  });
  await page1.getByRole('img', { name: 'draw', exact: true }).click();
  await page1.locator('#canvas').click({
    position: {
      x: 284,
      y: 303
    }
  });
  await page1.locator('#canvas').click({
    position: {
      x: 158,
      y: 307
    }
  });
  await page1.locator('#canvas').click({
    position: {
      x: 277,
      y: 301
    }
  });
  await page1.locator('#canvas').click({
    position: {
      x: 350,
      y: 310
    }
  });
  await page1.getByRole('img', { name: 'arc' }).click();
  await page1.locator('#canvas').click({
    position: {
      x: 340,
      y: 212
    }
  });
  await page1.locator('#canvas').click({
    position: {
      x: 382,
      y: 254
    }
  });
  await page1.getByRole('img', { name: 'draw', exact: true }).click();
  await page1.locator('#canvas').click({
    position: {
      x: 158,
      y: 217
    }
  });
  await page1.locator('#canvas').click({
    position: {
      x: 154,
      y: 296
    }
  });
  await page1.locator('#canvas').click({
    position: {
      x: 278,
      y: 356
    }
  });
  await page1.locator('#canvas').click({
    position: {
      x: 324,
      y: 356
    }
  });
  await page1.locator('#canvas').click({
    position: {
      x: 330,
      y: 307
    }
  });
  await expect(page1).toHaveCanvasSnapshot('autocomplete_0079.png', {
    maxDiffPixels: 960
  });
  await clearCanvas(page1);
  await page1.close();
  const point1 = { x: 380, y: 301 };
  const actualGeometry1 = await getGeometry(page, { x: 380, y: 301 });
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0079_1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, { x: 501, y: 247 });
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0079_2.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  await page.getByRole('img', { name: 'Space' }).click();
  await page.evaluate(() => {
    // @ts-ignore
    store.exposed.autoSaveConfig.disableToasts();
    // @ts-ignore
    store.exposed.autoSaveConfig.disable();
  });
  await clearCanvas(page);
});

/**
 * @id Autocomplete_0080
 * @description Verify the user is able to autocomplete line+arc (mass/slab) through vertices/edges or not after refreshing the project
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass/slab
 * 3.Draw a line+arc mass/slab
 * 4.Refresh the project
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line+arc (mass/slab) through vertices/edge after refreshing the project
 */
test('Autocomplete_0080', async () => {
  test.setTimeout(500000);

  await page.evaluate(() => {
    // @ts-ignore
    store.exposed.autoSaveConfig.disableToasts();
    // @ts-ignore
    store.exposed.autoSaveConfig.enable();
  });
  await page.reload();
  await page.waitForSelector('.project-is-ready', {
    state: 'attached',
    timeout: 60000
  });
  await clearCanvas(page);
  await toggle2D(page);
  await ensureDrawMode(page);
  await reset2DCameraVersion0(page);

  await page.locator('#canvas').click({
    position: {
      x: 268,
      y: 278
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 442,
      y: 271
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 440,
      y: 477
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 508,
      y: 369
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 262,
      y: 482
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 261,
      y: 283
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 506,
      y: 367
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 576,
      y: 362
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 568,
      y: 551
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 383,
      y: 554
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 381,
      y: 481
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 268,
      y: 275
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 265,
      y: 202
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 439,
      y: 198
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 355,
      y: 147
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 445,
      y: 282
    }
  });

  await page.reload();
  await page.waitForSelector('.project-is-ready', {
    state: 'attached',
    timeout: 60000
  });
  await toggle2D(page);
  await ensureDrawMode(page);
  await reset2DCameraVersion0(page);

  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 687,
      y: 220
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 679,
      y: 338
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 795,
      y: 338
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 793,
      y: 218
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 857,
      y: 279
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 794,
      y: 178
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 687,
      y: 173
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 686,
      y: 223
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 791,
      y: 339
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 788,
      y: 411
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 683,
      y: 414
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 740,
      y: 463
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 697,
      y: 338
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 851,
      y: 276
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 904,
      y: 289
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 909,
      y: 361
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 802,
      y: 367
    }
  });
  const point1 = { x: 387, y: 350 };
  const point2 = { x: 751, y: 288 };
  await expect(page).toHaveCanvasSnapshot('autocomplete_0080.png', {
    maxDiffPixels: 960
  });
  const actualGeometry1 = await getGeometry(page, { x: 387, y: 350 });
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0080_1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, { x: 751, y: 288 });
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0080_2.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Roof');
  await page.getByRole('img', { name: 'Space' }).click();
  await clearCanvas(page);
  await page.waitForTimeout(300);
});
