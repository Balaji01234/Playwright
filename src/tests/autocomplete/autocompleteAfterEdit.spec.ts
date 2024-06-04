import { expect, test } from '../../common/fixtures';
import { Page } from '@playwright/test';
import { initProject, configure2DProjectForTestV0 } from '../../common/project';
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
 * @id Autocomplete_0041
 * @description Verify the user is able to autocomplete arc (mass/slab) through vertices/edge or not after copy
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass/slab
 * 3.Draw a arc mass/slab
 * 4.Copy
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for arc (mass/slab) through vertices/edge, after Copy
 */
test('Autocomplete_0041', async () => {
  test.setTimeout(500000);
  await page.locator('#canvas').click({
    position: {
      x: 96,
      y: 220
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 99,
      y: 332
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 221,
      y: 328
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 158,
      y: 391
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 213,
      y: 217
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 100,
      y: 221
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 157,
      y: 168
    }
  });
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 143,
      y: 283
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 319,
      y: 290
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 247,
      y: 332
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 339,
      y: 169
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 337,
      y: 138
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 486,
      y: 139
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 411,
      y: 160
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 490,
      y: 287
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 394,
      y: 288
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 442,
      y: 313
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 489,
      y: 137
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 574,
      y: 138
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 576,
      y: 294
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 620,
      y: 211
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 494,
      y: 284
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 679,
      y: 254
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 686,
      y: 334
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 805,
      y: 331
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 752,
      y: 364
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 807,
      y: 261
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 683,
      y: 252
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 742,
      y: 222
    }
  });
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 743,
      y: 294
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 744,
      y: 507
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 742,
      y: 459
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 742,
      y: 430
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 739,
      y: 393
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 625,
      y: 399
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 631,
      y: 513
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 657,
      y: 456
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 673,
      y: 519
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 805,
      y: 465
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 855,
      y: 471
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 861,
      y: 554
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 877,
      y: 506
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 809,
      y: 544
    }
  });
  const point1 = { x: 358, y: 328 };
  const point2 = { x: 564, y: 249 };
  const point3 = { x: 705, y: 509 };
  const point4 = { x: 713, y: 407 };
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  const actualGeometry3 = await getGeometry(page, point3);
  const actualGeometry4 = await getGeometry(page, point4);
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0041_1.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0041_2.geom', geometryDir);
  await expect(actualGeometry3).toHaveGeometryV0('autocomplete_0041_3.geom', geometryDir);
  await expect(actualGeometry4).toHaveGeometryV0('autocomplete_0041_4.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Autocomplete_0041.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point4)).toBe('Roof');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
 * @id Autocomplete_0042
 * @description Verify the user is able to autocomplete line+arc (mass/slab) through vertices/edge or not after copy
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass/slab
 * 3.Draw a line+arc mass/slab
 * 4.Copy
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line+arc (mass/slab) through vertices/edge, after rotate
 */
test('Autocomplete_0042', async () => {
  test.setTimeout(500000);
  await page.locator('#canvas').click({
    position: {
      x: 119,
      y: 179
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 122,
      y: 272
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 201,
      y: 271
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 203,
      y: 175
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 238,
      y: 226
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 125,
      y: 181
    }
  });
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 197,
      y: 225
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 201,
      y: 473
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 165,
      y: 408
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 202,
      y: 420
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 206,
      y: 346
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 333,
      y: 348
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 263,
      y: 312
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 338,
      y: 565
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 203,
      y: 573
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 265,
      y: 600
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 196,
      y: 526
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 150,
      y: 516
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 255,
      y: 601
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 148,
      y: 599
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 662,
      y: 275
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 667,
      y: 150
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 787,
      y: 152
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 728,
      y: 165
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 787,
      y: 271
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 657,
      y: 271
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 725,
      y: 329
    }
  });
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 719,
      y: 252
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 578,
      y: 485
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 651,
      y: 382
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 649,
      y: 383
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 767,
      y: 393
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 771,
      y: 500
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 648,
      y: 508
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 711,
      y: 478
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 583,
      y: 396
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 589,
      y: 326
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 446,
      y: 325
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 449,
      y: 317
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 449,
      y: 459
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 523,
      y: 463
    }
  });
  const point1 = { x: 277, y: 483 };
  const point2 = { x: 149, y: 490 };
  const point3 = { x: 592, y: 467 };
  const point4 = { x: 754, y: 425 };
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  const actualGeometry3 = await getGeometry(page, point3);
  const actualGeometry4 = await getGeometry(page, point4);
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0042_1.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0042_2.geom', geometryDir);
  await expect(actualGeometry3).toHaveGeometryV0('autocomplete_0042_3.geom', geometryDir);
  await expect(actualGeometry4).toHaveGeometryV0('autocomplete_0042_4.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Autocomplete_0042.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point4)).toBe('Roof');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
 * @id Autocomplete_0043
 * @description Verify the user is able to autocomplete line (mass/slab) through vertices/edge or not after rotate
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass/slab
 * 3.Draw a line mass/slab
 * 4.rotate
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line (mass/slab) through vertices/edge, after rotate
 */
test('Autocomplete_0043', async () => {
  test.setTimeout(500000);
  await page.locator('#canvas').click({
    position: {
      x: 112,
      y: 225
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 105,
      y: 348
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 238,
      y: 347
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 239,
      y: 441
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 319,
      y: 448
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 320,
      y: 226
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 120,
      y: 227
    }
  });
  await page.getByRole('img', { name: 'rotate' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 208,
      y: 276
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 211,
      y: 110
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 322,
      y: 275
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 261,
      y: 313
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 346,
      y: 319
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 335,
      y: 457
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 190,
      y: 450
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 195,
      y: 385
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 141,
      y: 175
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 139,
      y: 133
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 353,
      y: 137
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 350,
      y: 307
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 569,
      y: 192
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 561,
      y: 329
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 639,
      y: 324
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 641,
      y: 275
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 842,
      y: 272
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 841,
      y: 191
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 571,
      y: 204
    }
  });
  await page.getByRole('img', { name: 'rotate' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 639,
      y: 226
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 645,
      y: 445
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 493,
      y: 230
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 624,
      y: 427
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 621,
      y: 535
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 849,
      y: 527
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 830,
      y: 308
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 670,
      y: 308
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 675,
      y: 164
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 854,
      y: 161
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 846,
      y: 305
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 779,
      y: 424
    }
  });
  const point1 = { x: 200, y: 301 };
  const point2 = { x: 325, y: 364 };
  const point3 = { x: 641, y: 345 };
  const point4 = { x: 779, y: 424 };
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  const actualGeometry3 = await getGeometry(page, point3);
  const actualGeometry4 = await getGeometry(page, point4);
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0043_1.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0043_2.geom', geometryDir);
  await expect(actualGeometry3).toHaveGeometryV0('autocomplete_0043_3.geom', geometryDir);
  await expect(actualGeometry4).toHaveGeometryV0('autocomplete_0043_4.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Autocomplete_0043.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point4)).toBe('Roof');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.getByRole('img', { name: 'Space' }).click();
});
/**
 * @id Autocomplete_0044
 * @description Verify the user is able to autocomplete arc (mass/slab) through vertices/edge or not after rotate
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass/slab
 * 3.Draw a arc mass/slab
 * 4.rotate
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for arc (mass/slab) through vertices/edge, after rotate
 */
test('Autocomplete_0044', async () => {
  test.setTimeout(600000);
  await page.locator('#canvas').click({
    position: {
      x: 128,
      y: 290
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 127,
      y: 475
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 242,
      y: 467
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 263,
      y: 290
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 299,
      y: 378
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 131,
      y: 285
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 188,
      y: 247
    }
  });
  await page.getByRole('img', { name: 'rotate' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 195,
      y: 362
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 404,
      y: 371
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 196,
      y: 511
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 173,
      y: 294
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 175,
      y: 209
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 352,
      y: 196
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 260,
      y: 151
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 353,
      y: 347
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 397,
      y: 276
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 312,
      y: 342
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 269,
      y: 406
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 349,
      y: 343
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 363,
      y: 441
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 576,
      y: 274
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 568,
      y: 439
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 716,
      y: 436
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 649,
      y: 472
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 723,
      y: 278
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 661,
      y: 281
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 687,
      y: 286
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 573,
      y: 279
    }
  });
  await page.getByRole('img', { name: 'rotate' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 646,
      y: 372
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 790,
      y: 253
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 713,
      y: 452
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 582,
      y: 299
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 579,
      y: 210
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 590,
      y: 258
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 742,
      y: 214
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 664,
      y: 151
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 751,
      y: 297
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 744,
      y: 250
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 842,
      y: 251
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 836,
      y: 540
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 876,
      y: 391
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 661,
      y: 537
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 659,
      y: 443
    }
  });
  const point1 = { x: 218, y: 334 };
  const point2 = { x: 348, y: 259 };
  const point3 = { x: 642, y: 328 };
  const point4 = { x: 831, y: 328 };
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  const actualGeometry3 = await getGeometry(page, point3);
  const actualGeometry4 = await getGeometry(page, point4);
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0044_1.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0044_2.geom', geometryDir);
  await expect(actualGeometry3).toHaveGeometryV0('autocomplete_0044_3.geom', geometryDir);
  await expect(actualGeometry4).toHaveGeometryV0('autocomplete_0044_4.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Autocomplete_0044.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point4)).toBe('Roof');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.getByRole('img', { name: 'Space' }).click();
});
/**
 * @id Autocomplete_0045
 * @description Verify the user is able to autocomplete line+arc (mass/slab) through vertices/edge or not after rotate
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass/slab
 * 3.Draw a line+arc mass/slab
 * 4.rotate
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line+arc (mass/slab) through vertices/edge, after rotate
 */
test('Autocomplete_0045', async () => {
  test.setTimeout(500000);
  await page.locator('#canvas').click({
    position: {
      x: 105,
      y: 285
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 98,
      y: 402
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 215,
      y: 405
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 205,
      y: 282
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 102,
      y: 285
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 163,
      y: 164
    }
  });
  await page.getByRole('img', { name: 'rotate' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 164,
      y: 278
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 340,
      y: 278
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 159,
      y: 219
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 218,
      y: 223
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 218,
      y: 154
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 357,
      y: 154
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 361,
      y: 278
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 388,
      y: 217
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 294,
      y: 285
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 234,
      y: 339
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 236,
      y: 426
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 353,
      y: 437
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 293,
      y: 457
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 355,
      y: 286
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 561,
      y: 233
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 704,
      y: 234
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 705,
      y: 335
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 749,
      y: 278
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 565,
      y: 328
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 558,
      y: 236
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 520,
      y: 277
    }
  });
  await page.getByRole('img', { name: 'rotate' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 639,
      y: 284
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 821,
      y: 279
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 626,
      y: 426
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 682,
      y: 215
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 789,
      y: 215
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 781,
      y: 355
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 824,
      y: 286
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 681,
      y: 355
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 631,
      y: 392
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 625,
      y: 469
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 771,
      y: 462
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 701,
      y: 500
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 765,
      y: 361
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 760,
      y: 412
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 725,
      y: 403
    }
  });
  const point1 = { x: 241, y: 281 };
  const point2 = { x: 327, y: 327 };
  const point3 = { x: 642, y: 304 };
  const point4 = { x: 725, y: 403 };
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  const actualGeometry3 = await getGeometry(page, point3);
  const actualGeometry4 = await getGeometry(page, point4);
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0045_1.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0045_2.geom', geometryDir);
  await expect(actualGeometry3).toHaveGeometryV0('autocomplete_0045_3.geom', geometryDir);
  await expect(actualGeometry4).toHaveGeometryV0('autocomplete_0045_4.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Autocomplete_0045.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point4)).toBe('Roof');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
 * @id Autocomplete_0046
 * @description Verify the user is able to autocomplete line (mass/slab) through vertices/edge or not after flip(x/z)
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass/slab
 * 3.Draw a line mass/slab
 * 4.flip(x/z)
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line (mass/slab) through vertices/edge, after flip(x/z)
 */
test('Autocomplete_0046', async () => {
  test.setTimeout(600000);
  await page.locator('#canvas').click({
    position: {
      x: 113,
      y: 228
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 117,
      y: 399
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 258,
      y: 390
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 253,
      y: 440
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 317,
      y: 436
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 319,
      y: 223
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 111,
      y: 227
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 255,
      y: 285
    }
  });
  await page.getByRole('img', { name: 'flipX', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 424,
      y: 205
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 293,
      y: 224
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 281,
      y: 160
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 403,
      y: 169
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 395,
      y: 363
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 320,
      y: 366
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 114,
      y: 439
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 119,
      y: 496
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 395,
      y: 484
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 404,
      y: 359
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 545,
      y: 246
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 551,
      y: 424
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 710,
      y: 428
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 704,
      y: 300
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 575,
      y: 316
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 574,
      y: 246
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 547,
      y: 253
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 683,
      y: 364
    }
  });
  await page.getByRole('img', { name: 'flipXY' }).click();
  await page.getByRole('img', { name: 'flipX', exact: true }).click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 585,
      y: 154
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 605,
      y: 245
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 604,
      y: 183
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 836,
      y: 191
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 837,
      y: 324
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 714,
      y: 323
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 711,
      y: 426
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 777,
      y: 428
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 780,
      y: 489
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 837,
      y: 485
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 838,
      y: 323
    }
  });
  const point1 = { x: 204, y: 342 };
  const point2 = { x: 367, y: 432 };
  const point3 = { x: 631, y: 284 };
  const point4 = { x: 785, y: 197 };
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  const actualGeometry3 = await getGeometry(page, point3);
  const actualGeometry4 = await getGeometry(page, point4);
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0046_1.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0046_2.geom', geometryDir);
  await expect(actualGeometry3).toHaveGeometryV0('autocomplete_0046_3.geom', geometryDir);
  await expect(actualGeometry4).toHaveGeometryV0('autocomplete_0046_4.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Autocomplete_0046.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point4)).toBe('Roof');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
 * @id Autocomplete_0047
 * @description Verify the user is able to autocomplete arc (mass/slab) through vertices/edge or not after flip(x/z)
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass/slab
 * 3.Draw a arc mass/slab
 * 4.flip(x/z)
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for arc (mass/slab) through vertices/edge, after flip(x/z)
 */
test('Autocomplete_0047', async () => {
  test.setTimeout(500000);
  await page.locator('#canvas').click({
    position: {
      x: 104,
      y: 250
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 101,
      y: 343
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 222,
      y: 339
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 164,
      y: 376
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 219,
      y: 181
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 110,
      y: 179
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 166,
      y: 140
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 109,
      y: 259
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 130,
      y: 214
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 213,
      y: 241
    }
  });
  await page.getByRole('img', { name: 'flipX', exact: true }).click();
  await page.getByRole('img', { name: 'flipXY' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 267,
      y: 209
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 223,
      y: 169
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 288,
      y: 165
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 299,
      y: 308
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 328,
      y: 234
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 296,
      y: 338
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 219,
      y: 336
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 147,
      y: 374
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 149,
      y: 447
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 240,
      y: 442
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 195,
      y: 461
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 245,
      y: 337
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 488,
      y: 197
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 638,
      y: 208
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 624,
      y: 351
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 700,
      y: 258
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 488,
      y: 357
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 487,
      y: 202
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 511,
      y: 278
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 597,
      y: 309
    }
  });
  await page.getByRole('img', { name: 'flipXY' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 589,
      y: 389
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 594,
      y: 348
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 600,
      y: 455
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 778,
      y: 446
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 685,
      y: 497
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 780,
      y: 270
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 682,
      y: 279
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 783,
      y: 273
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 906,
      y: 268
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 846,
      y: 228
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 902,
      y: 449
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 777,
      y: 459
    }
  });
  const point1 = { x: 138, y: 295 };
  const point2 = { x: 269, y: 295 };
  const point3 = { x: 732, y: 400 };
  const point4 = { x: 637, y: 222 };
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  const actualGeometry3 = await getGeometry(page, point3);
  const actualGeometry4 = await getGeometry(page, point4);
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0047_1.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0047_2.geom', geometryDir);
  await expect(actualGeometry3).toHaveGeometryV0('autocomplete_0047_3.geom', geometryDir);
  await expect(actualGeometry4).toHaveGeometryV0('autocomplete_0047_4.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Autocomplete_0047.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point4)).toBe('Roof');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
 * @id Autocomplete_0048
 * @description Verify the user is able to autocomplete line+arc (mass/slab) through vertices/edge or not after flip(x/z)
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass/slab
 * 3.Draw a line+arc mass/slab
 * 4.flip(x/z)
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line+arc (mass/slab) through vertices/edge, after flip(x/z)
 */
test('Autocomplete_0048', async () => {
  test.setTimeout(500000);
  await page.locator('#canvas').click({
    position: {
      x: 108,
      y: 244
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 116,
      y: 346
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 237,
      y: 335
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 239,
      y: 166
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 269,
      y: 255
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 65,
      y: 166
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 65,
      y: 224
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 74,
      y: 197
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 66,
      y: 253
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 103,
      y: 238
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 236,
      y: 260
    }
  });
  await page.getByRole('img', { name: 'flipX', exact: true }).click();
  await page.getByRole('img', { name: 'flipXY' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 320,
      y: 167
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 270,
      y: 264
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 366,
      y: 260
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 360,
      y: 164
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 342,
      y: 217
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 224,
      y: 172
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 160,
      y: 346
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 155,
      y: 444
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 331,
      y: 438
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 241,
      y: 470
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 324,
      y: 313
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 260,
      y: 314
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 557,
      y: 222
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 557,
      y: 331
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 705,
      y: 329
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 627,
      y: 364
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 703,
      y: 216
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 561,
      y: 214
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 646,
      y: 286
    }
  });
  await page.getByRole('img', { name: 'flipX', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 746,
      y: 214
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 705,
      y: 249
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 786,
      y: 258
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 796,
      y: 372
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 822,
      y: 297
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 711,
      y: 366
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 630,
      y: 366
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 632,
      y: 458
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 759,
      y: 449
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 695,
      y: 482
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 754,
      y: 375
    }
  });
  const point1 = { x: 205, y: 321 };
  const point2 = { x: 255, y: 402 };
  const point3 = { x: 590, y: 325 };
  const point4 = { x: 750, y: 302 };
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  const actualGeometry3 = await getGeometry(page, point3);
  const actualGeometry4 = await getGeometry(page, point4);
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0048_1.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0048_2.geom', geometryDir);
  await expect(actualGeometry3).toHaveGeometryV0('autocomplete_0048_3.geom', geometryDir);
  await expect(actualGeometry4).toHaveGeometryV0('autocomplete_0048_4.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Autocomplete_0048.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point4)).toBe('Roof');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
 * @id Autocomplete_0049
 * @description Verify the user is able to autocomplete line (mass/slab) through vertices/edge or not after split
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass/slab
 * 3.Draw a line mass/slab
 * 4.split
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line (mass/slab) through vertices/edge, after split
 */
test('Autocomplete_0049', async () => {
  test.setTimeout(500000);
  await page.locator('#canvas').click({
    position: {
      x: 105,
      y: 239
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 96,
      y: 367
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 389,
      y: 357
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 403,
      y: 234
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 101,
      y: 238
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 143,
      y: 205
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 137,
      y: 415
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 248,
      y: 233
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 245,
      y: 162
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 494,
      y: 161
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 481,
      y: 297
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 394,
      y: 310
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 140,
      y: 369
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 154,
      y: 473
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 384,
      y: 483
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 393,
      y: 368
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 661,
      y: 185
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 664,
      y: 342
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 897,
      y: 359
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 897,
      y: 183
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 655,
      y: 189
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 817,
      y: 149
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 826,
      y: 381
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 654,
      y: 184
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 590,
      y: 188
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 592,
      y: 407
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 665,
      y: 411
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 667,
      y: 345
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 665,
      y: 378
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 861,
      y: 374
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 860,
      y: 453
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 630,
      y: 460
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 633,
      y: 411
    }
  });
  const point1 = { x: 328, y: 334 };
  const point2 = { x: 445, y: 260 };
  const point3 = { x: 763, y: 254 };
  const point4 = { x: 606, y: 343 };
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  const actualGeometry3 = await getGeometry(page, point3);
  const actualGeometry4 = await getGeometry(page, point4);
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0049_1.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0049_2.geom', geometryDir);
  await expect(actualGeometry3).toHaveGeometryV0('autocomplete_0049_3.geom', geometryDir);
  await expect(actualGeometry4).toHaveGeometryV0('autocomplete_0049_4.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Autocomplete_0049.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point4)).toBe('Roof');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
 * @id Autocomplete_0050
 * @description Verify the user is able to autocomplete arc (mass/slab) through vertices/edge or not after split
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass/slab
 * 3.Draw a arc mass/slab
 * 4.split
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for arc (mass/slab) through vertices/edge, after split
 */
test('Autocomplete_0050', async () => {
  test.setTimeout(500000);
  await page.locator('#canvas').click({
    position: {
      x: 117,
      y: 272
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 117,
      y: 377
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 283,
      y: 381
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 287,
      y: 278
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 321,
      y: 326
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 179,
      y: 279
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 232,
      y: 292
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 120,
      y: 269
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 244,
      y: 226
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 245,
      y: 418
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 194,
      y: 334
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 122,
      y: 373
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 123,
      y: 468
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 201,
      y: 470
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 159,
      y: 483
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 203,
      y: 375
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 211,
      y: 422
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 276,
      y: 426
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 275,
      y: 546
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 316,
      y: 478
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 164,
      y: 555
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 229,
      y: 581
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 168,
      y: 489
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 495,
      y: 194
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 609,
      y: 189
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 627,
      y: 377
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 636,
      y: 279
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 499,
      y: 379
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 499,
      y: 199
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 457,
      y: 332
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 656,
      y: 329
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 556,
      y: 274
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 491,
      y: 188
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 493,
      y: 135
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 721,
      y: 141
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 618,
      y: 106
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 720,
      y: 195
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 705,
      y: 168
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 605,
      y: 194
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 551,
      y: 380
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 554,
      y: 466
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 702,
      y: 454
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 630,
      y: 487
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 709,
      y: 252
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 640,
      y: 253
    }
  });
  const point1 = { x: 178, y: 356 };
  const point2 = { x: 257, y: 443 };
  const point3 = { x: 587, y: 249 };
  const point4 = { x: 668, y: 344 };
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  const actualGeometry3 = await getGeometry(page, point3);
  const actualGeometry4 = await getGeometry(page, point4);
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0050_1.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0050_2.geom', geometryDir);
  await expect(actualGeometry3).toHaveGeometryV0('autocomplete_0050_3.geom', geometryDir);
  await expect(actualGeometry4).toHaveGeometryV0('autocomplete_0050_4.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Autocomplete_0050.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point2)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point4)).toBe('Roof');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.getByRole('img', { name: 'Space' }).click();
});
