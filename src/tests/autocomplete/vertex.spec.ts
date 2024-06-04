import { expect, test } from '../../common/fixtures';
import { Page } from '@playwright/test';
import { initProject, configure2DProjectForTestV0 } from '../../common/project';
import { clearCanvas } from '../../common/canvas';
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

test.afterEach(async () => {
  await clearCanvas(page);
});

test.afterAll(async () => {
  await page.close();
});

/**
 * @id Autocomplete_0051
 * @description Verify the user can able to autocomplete line+arc (mass/slab) through vertices/edge or not after split
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass/slab
 * 3.Draw a line+arc mass/slab
 * 4.split
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line+arc (mass/slab) through vertices/edge, after split
 */
test('autocomplete_0051', async () => {
  test.setTimeout(400000);
  await page.locator('#canvas').click({
    position: {
      x: 99,
      y: 222
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 101,
      y: 333
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 270,
      y: 332
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 186,
      y: 382
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 264,
      y: 221
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 106,
      y: 226
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 179,
      y: 148
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 180,
      y: 440
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 185,
      y: 216
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 188,
      y: 159
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 197,
      y: 192
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 275,
      y: 160
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 276,
      y: 225
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 270,
      y: 184
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 341,
      y: 190
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 346,
      y: 301
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 378,
      y: 243
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 271,
      y: 296
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 497,
      y: 214
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 501,
      y: 330
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 649,
      y: 332
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 657,
      y: 218
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 500,
      y: 221
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 577,
      y: 161
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 457,
      y: 271
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 693,
      y: 272
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 565,
      y: 234
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 500,
      y: 322
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 504,
      y: 393
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 658,
      y: 405
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 577,
      y: 419
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 652,
      y: 327
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 648,
      y: 282
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 726,
      y: 285
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 730,
      y: 371
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 757,
      y: 334
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 657,
      y: 364
    }
  });
  const point1 = { x: 201, y: 345 };
  const point2 = { x: 324, y: 274 };
  const point3 = { x: 630, y: 297 };
  const point4 = { x: 681, y: 348 };
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  const actualGeometry3 = await getGeometry(page, point3);
  const actualGeometry4 = await getGeometry(page, point4);
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0051_1.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0051_2.geom', geometryDir);
  await expect(actualGeometry3).toHaveGeometryV0('autocomplete_0051_3.geom', geometryDir);
  await expect(actualGeometry4).toHaveGeometryV0('autocomplete_0051_4.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Autocomplete_0051.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point4)).toBe('Roof');
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
 * @id Autocomplete_0052
 * @description Verify the user can able to autocomplete line (mass/slab) through vertices/edge or not after add vertex
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass/slab
 * 3.Draw a line mass/slab
 * 4.add vertex
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line (mass/slab) through vertices/edge, after add vertex
 */
test('Autocomplete_0052', async () => {
  test.setTimeout(400000);
  await page.locator('#canvas').click({
    position: {
      x: 118,
      y: 209
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 116,
      y: 337
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 307,
      y: 338
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 319,
      y: 208
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 117,
      y: 207
    }
  });
  await page.getByRole('img', { name: 'addLayer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 234,
      y: 269
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 309,
      y: 269
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 218,
      y: 342
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 215,
      y: 341
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 209,
      y: 430
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 374,
      y: 415
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 372,
      y: 277
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 309,
      y: 268
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 272,
      y: 209
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 279,
      y: 144
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 348,
      y: 153
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 347,
      y: 275
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 615,
      y: 220
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 615,
      y: 290
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 716,
      y: 282
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 715,
      y: 352
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 780,
      y: 349
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 787,
      y: 221
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 616,
      y: 214
    }
  });
  await page.getByRole('img', { name: 'addLayer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 707,
      y: 247
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 703,
      y: 221
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 786,
      y: 286
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 700,
      y: 221
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 689,
      y: 146
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 894,
      y: 138
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 887,
      y: 283
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 781,
      y: 291
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 743,
      y: 354
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 754,
      y: 431
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 867,
      y: 427
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 869,
      y: 288
    }
  });
  const point1 = { x: 265, y: 240 };
  const point2 = { x: 824, y: 398 };
  await expect(page).toHaveCanvasSnapshot('Autocomplete_0052.png', {
    maxDiffPixels: 960
  });
  const actualGeometry1 = await getGeometry(page, { x: 265, y: 240 });
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0052_1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, { x: 341, y: 352 });
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0052_2.geom', geometryDir);
  const actualGeometry3 = await getGeometry(page, { x: 845, y: 205 });
  await expect(actualGeometry3).toHaveGeometryV0('autocomplete_0052_3.geom', geometryDir);
  const actualGeometry4 = await getGeometry(page, { x: 824, y: 398 });
  await expect(actualGeometry4).toHaveGeometryV0('autocomplete_0052_4.geom', geometryDir);
  let Component1 = await getSnaptrudeDS(page, point1);
  expect(Component1.type).toBe('Mass');
  let Component2 = await getSnaptrudeDS(page, point2);
  expect(Component2.type).toBe('Roof');
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
 * @id Autocomplete_0053
 * @description Verify the user can able to autocomplete arc (mass/slab) through vertices/edge or not after add vertex
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass/slab
 * 3.Draw a arc mass/slab
 * 4.add vertex
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for arc (mass/slab) through vertices/edge, after add vertex
 */
test('Autocomplete_0053', async () => {
  test.setTimeout(500000);
  await page.locator('#canvas').click({
    position: {
      x: 93,
      y: 226
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 97,
      y: 329
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 251,
      y: 333
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 172,
      y: 352
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 256,
      y: 166
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 197,
      y: 171
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 91,
      y: 169
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 133,
      y: 181
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 91,
      y: 224
    }
  });
  await page.getByRole('img', { name: 'addLayer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 201,
      y: 250
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 166,
      y: 352
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 252,
      y: 237
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 250,
      y: 234
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 357,
      y: 235
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 357,
      y: 326
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 389,
      y: 284
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 253,
      y: 327
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 215,
      y: 351
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 214,
      y: 437
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 325,
      y: 441
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 267,
      y: 463
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 325,
      y: 335
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 611,
      y: 213
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 604,
      y: 326
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 793,
      y: 329
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 700,
      y: 370
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 790,
      y: 130
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 734,
      y: 128
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 762,
      y: 142
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 607,
      y: 137
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 615,
      y: 208
    }
  });
  await page.getByRole('img', { name: 'addLayer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 718,
      y: 226
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 701,
      y: 367
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 794,
      y: 228
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 795,
      y: 225
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 878,
      y: 231
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 879,
      y: 327
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 910,
      y: 275
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 793,
      y: 322
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 653,
      y: 357
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 649,
      y: 461
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 853,
      y: 464
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 764,
      y: 494
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 853,
      y: 331
    }
  });
  const point1 = { x: 215, y: 206 };
  const point2 = { x: 798, y: 407 };
  await expect(page).toHaveCanvasSnapshot('Autocomplete_0053.png', {
    maxDiffPixels: 960
  });
  const actualGeometry1 = await getGeometry(page, { x: 215, y: 206 });
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0053_1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, { x: 373, y: 291 });
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0053_2.geom', geometryDir);
  const actualGeometry3 = await getGeometry(page, { x: 754, y: 232 });
  await expect(actualGeometry3).toHaveGeometryV0('autocomplete_0053_3.geom', geometryDir);
  const actualGeometry4 = await getGeometry(page, { x: 798, y: 407 });
  await expect(actualGeometry4).toHaveGeometryV0('autocomplete_0053_4.geom', geometryDir);
  let Component1 = await getSnaptrudeDS(page, point1);
  expect(Component1.type).toBe('Mass');
  let Component2 = await getSnaptrudeDS(page, point2);
  expect(Component2.type).toBe('Roof');
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
 * @id Autocomplete_0054
 * @description Verify the user can able to autocomplete line+arc (mass/slab) through vertices/edge or not after add vertex
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass/slab
 * 3.Draw a line+arc mass/slab
 * 4.add vertex
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line+arc (mass/slab) through vertices/edge, after add vertex
 */
test('Autocomplete_0054', async () => {
  test.setTimeout(400000);
  await page.locator('#canvas').click({
    position: {
      x: 130,
      y: 241
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 125,
      y: 367
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 259,
      y: 364
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 194,
      y: 403
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 260,
      y: 244
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 131,
      y: 250
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 195,
      y: 201
    }
  });
  await page.getByRole('img', { name: 'addLayer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 191,
      y: 293
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 264,
      y: 307
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 194,
      y: 197
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 192,
      y: 200
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 201,
      y: 132
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 347,
      y: 136
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 274,
      y: 154
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 342,
      y: 306
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 259,
      y: 302
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 193,
      y: 405
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 189,
      y: 469
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 297,
      y: 466
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 247,
      y: 486
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 298,
      y: 306
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 582,
      y: 281
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 588,
      y: 442
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 686,
      y: 439
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 688,
      y: 284
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 584,
      y: 280
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 635,
      y: 248
    }
  });
  await page.getByRole('img', { name: 'addLayer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 644,
      y: 343
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 635,
      y: 446
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 686,
      y: 372
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 682,
      y: 283
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 766,
      y: 288
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 768,
      y: 379
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 800,
      y: 329
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 690,
      y: 369
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 636,
      y: 249
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 640,
      y: 193
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 750,
      y: 198
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 689,
      y: 159
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 749,
      y: 277
    }
  });
  const point1 = { x: 193, y: 287 };
  const point2 = { x: 607, y: 387 };
  await expect(page).toHaveCanvasSnapshot('Autocomplete_0054.png', {
    maxDiffPixels: 960
  });
  const actualGeometry1 = await getGeometry(page, { x: 193, y: 287 });
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0054_1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, { x: 331, y: 258 });
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0054_2.geom', geometryDir);
  const actualGeometry3 = await getGeometry(page, { x: 607, y: 387 });
  await expect(actualGeometry3).toHaveGeometryV0('autocomplete_0054_3.geom', geometryDir);
  const actualGeometry4 = await getGeometry(page, { x: 765, y: 343 });
  await expect(actualGeometry4).toHaveGeometryV0('autocomplete_0054_4.geom', geometryDir);
  let Component1 = await getSnaptrudeDS(page, point1);
  expect(Component1.type).toBe('Mass');
  let Component2 = await getSnaptrudeDS(page, point2);
  expect(Component2.type).toBe('Roof');
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
 * @id Autocomplete_0055
 * @description Verify the user can able to autocomplete line (mass/slab) through vertices/edge or not after remove vertex
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass/slab
 * 3.Draw a line mass/slab
 * 4.remove vertex
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line (mass/slab) through vertices/edge, after remove vertex
 */
test('Autocomplete_0055', async () => {
  test.setTimeout(400000);
  await page.locator('#canvas').click({
    position: {
      x: 122,
      y: 274
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 119,
      y: 440
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 190,
      y: 443
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 191,
      y: 358
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 390,
      y: 374
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 389,
      y: 263
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 305,
      y: 263
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 308,
      y: 148
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 117,
      y: 153
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 124,
      y: 273
    }
  });
  await page.getByRole('img', { name: 'removeLayer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 243,
      y: 255
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 390,
      y: 259
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 308,
      y: 147
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 461,
      y: 157
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 455,
      y: 262
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 298,
      y: 267
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 157,
      y: 439
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 156,
      y: 494
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 301,
      y: 484
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 311,
      y: 363
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 593,
      y: 221
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 587,
      y: 370
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 689,
      y: 379
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 691,
      y: 328
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 747,
      y: 328
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 745,
      y: 363
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 834,
      y: 370
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 829,
      y: 215
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 590,
      y: 239
    }
  });
  await page.getByRole('img', { name: 'removeLayer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 735,
      y: 299
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 745,
      y: 322
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 689,
      y: 366
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 592,
      y: 218
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 593,
      y: 142
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 832,
      y: 140
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 831,
      y: 215
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 836,
      y: 174
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 896,
      y: 180
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 877,
      y: 420
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 794,
      y: 410
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 793,
      y: 369
    }
  });
  const point1 = { x: 238, y: 209 };
  const point2 = { x: 781, y: 299 };
  await expect(page).toHaveCanvasSnapshot('Autocomplete_0055.png', {
    maxDiffPixels: 960
  });
  const actualGeometry1 = await getGeometry(page, { x: 238, y: 209 });
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0055_1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, { x: 426, y: 221 });
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0055_2.geom', geometryDir);
  const actualGeometry3 = await getGeometry(page, { x: 781, y: 299 });
  await expect(actualGeometry3).toHaveGeometryV0('autocomplete_0055_3.geom', geometryDir);
  const actualGeometry4 = await getGeometry(page, { x: 876, y: 355 });
  await expect(actualGeometry4).toHaveGeometryV0('autocomplete_0055_4.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Roof');
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
 * @id Autocomplete_0056
 * @description Verify the user can able to autocomplete arc (mass/slab) through vertices/edge or not after remove vertex
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass/slab
 * 3.Draw a arc mass/slab
 * 4.remove vertex
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for arc (mass/slab) through vertices/edge, after remove vertex
 */
test('Autocomplete_0056', async () => {
  test.setTimeout(400000);
  await page.locator('#canvas').click({
    position: {
      x: 152,
      y: 197
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 139,
      y: 363
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 297,
      y: 363
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 222,
      y: 408
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 360,
      y: 367
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 363,
      y: 196
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 153,
      y: 205
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 252,
      y: 133
    }
  });
  await page.getByRole('img', { name: 'removeLayer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 363,
      y: 357
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 297,
      y: 360
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 448,
      y: 358
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 455,
      y: 202
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 493,
      y: 291
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 364,
      y: 190
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 222,
      y: 407
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 217,
      y: 501
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 376,
      y: 493
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 301,
      y: 535
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 384,
      y: 362
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 613,
      y: 284
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 684,
      y: 283
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 687,
      y: 223
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 809,
      y: 224
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 737,
      y: 178
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 803,
      y: 372
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 609,
      y: 380
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 712,
      y: 413
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 612,
      y: 284
    }
  });
  await page.getByRole('img', { name: 'removeLayer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 612,
      y: 281
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 681,
      y: 220
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 607,
      y: 220
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 607,
      y: 152
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 626,
      y: 184
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 809,
      y: 155
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 812,
      y: 226
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 808,
      y: 182
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 884,
      y: 186
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 884,
      y: 346
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 921,
      y: 262
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 809,
      y: 344
    }
  });
  const point1 = { x: 280, y: 244 };
  const point2 = { x: 435, y: 315 };
  await expect(page).toHaveCanvasSnapshot('Autocomplete_0056.png', {
    maxDiffPixels: 960
  });
  const actualGeometry1 = await getGeometry(page, { x: 280, y: 244 });
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0056_1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, { x: 733, y: 283 });
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0056_2.geom', geometryDir);
  const actualGeometry3 = await getGeometry(page, { x: 435, y: 315 });
  await expect(actualGeometry3).toHaveGeometryV0('autocomplete_0056_3.geom', geometryDir);
  const actualGeometry4 = await getGeometry(page, { x: 901, y: 272 });
  await expect(actualGeometry4).toHaveGeometryV0('autocomplete_0056_4.geom', geometryDir);
  let Component1 = await getSnaptrudeDS(page, point1);
  expect(Component1.type).toBe('Mass');
  let Component2 = await getSnaptrudeDS(page, point2);
  expect(Component2.type).toBe('Mass');
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
 * @id Autocomplete_0057
 * @description Verify the user can able to autocomplete line+arc (mass/slab) through vertices/edge or not after remove vertex
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass/slab
 * 3.Draw a line+arc mass/slab
 * 4.remove vertex
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line+arc (mass/slab) through vertices/edge, after remove vertex
 */
test('Autocomplete_0057', async () => {
  test.setTimeout(400000);
  await page.locator('#canvas').click({
    position: {
      x: 123,
      y: 228
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 116,
      y: 383
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 183,
      y: 384
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 181,
      y: 309
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 284,
      y: 311
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 284,
      y: 215
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 324,
      y: 261
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 164,
      y: 211
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 160,
      y: 186
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 119,
      y: 189
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 131,
      y: 233
    }
  });
  await page.getByRole('img', { name: 'removeLayer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 162,
      y: 185
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 186,
      y: 383
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 324,
      y: 255
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 396,
      y: 259
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 393,
      y: 404
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 371,
      y: 341
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 237,
      y: 397
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 241,
      y: 309
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 290,
      y: 209
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 280,
      y: 137
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 399,
      y: 136
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 343,
      y: 165
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 398,
      y: 260
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 555,
      y: 225
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 680,
      y: 229
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 676,
      y: 343
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 734,
      y: 284
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 685,
      y: 412
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 553,
      y: 411
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 553,
      y: 221
    }
  });
  await page.getByRole('img', { name: 'removeLayer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 677,
      y: 411
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 734,
      y: 276
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 800,
      y: 276
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 807,
      y: 445
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 671,
      y: 449
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 729,
      y: 481
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 616,
      y: 379
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 804,
      y: 282
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 883,
      y: 285
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 886,
      y: 443
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 915,
      y: 363
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 802,
      y: 447
    }
  });
  const point1 = { x: 265, y: 256 };
  const point2 = { x: 797, y: 378 };
  await expect(page).toHaveCanvasSnapshot('Autocomplete_0057.png', {
    maxDiffPixels: 960
  });
  const actualGeometry1 = await getGeometry(page, { x: 265, y: 256 });
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0057_1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, { x: 315, y: 350 });
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0057_2.geom', geometryDir);
  const actualGeometry3 = await getGeometry(page, { x: 673, y: 325 });
  await expect(actualGeometry3).toHaveGeometryV0('autocomplete_0057_3.geom', geometryDir);
  const actualGeometry4 = await getGeometry(page, { x: 797, y: 378 });
  await expect(actualGeometry4).toHaveGeometryV0('autocomplete_0057_4.geom', geometryDir);
  let Component1 = await getSnaptrudeDS(page, point1);
  expect(Component1.type).toBe('Mass');
  let Component2 = await getSnaptrudeDS(page, point2);
  expect(Component2.type).toBe('Roof');
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
 * @id Autocomplete_0058
 * @description Verify the user can able to autocomplete the line+arc slab through vertices or not after create building
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass
 * 3.Draw a line+arc mass
 * 4.Create building
 * 5.Autocomplete (slab) on second storey
 *
 * @expected Autocomplete should work for line+arc slab through vertices, after create building.
 */
test('Autocomplete_0058', async () => {
  test.setTimeout(500000);
  await page.locator('#canvas').click({
    position: {
      x: 180,
      y: 298
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 184,
      y: 399
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 310,
      y: 394
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 246,
      y: 427
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 305,
      y: 297
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 246,
      y: 291
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 245,
      y: 239
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 183,
      y: 236
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 214,
      y: 211
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 176,
      y: 293
    }
  });
  await page.locator('//span[text()="Automate"]').click();
  await page.getByRole('img', { name: 'autoResize' }).click();
  await page.locator("//*[text()='2']").click();
  await page.getByText('Design').click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 315,
      y: 293
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 396,
      y: 291
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 390,
      y: 396
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 416,
      y: 345
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 311,
      y: 400
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  const point1 = { x: 242, y: 343 };
  await expect(page).toHaveCanvasSnapshot('Autocomplete_0058.png', {
    maxDiffPixels: 960
  });
  const actualGeometry1 = await getGeometry(page, { x: 242, y: 343 });
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0058_1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, { x: 374, y: 358 });
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0058_2.geom', geometryDir);
  let Component1 = await getSnaptrudeDS(page, point1);
  expect(Component1.type).toBe('Roof');
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 263,
      y: 315
    }
  });
  await page.locator('#canvas').click({
    modifiers: ['Control'],
    position: {
      x: 389,
      y: 353
    }
  });
  await page.getByRole('img', { name: 'delete_icon' }).click();
  await page.locator('p').filter({ hasText: '1' }).click();
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
 * @id Autocomplete_0059
 * @description Verify the user can able to autocomplete the line+arc slab through vertices/edges or not after create building
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass
 * 3.Draw a line+arc mass
 * 4.Create building
 * 5.Autocomplete (slab) on second storey
 *
 * @expected Autocomplete should work for line+arc slab through vertices, after create building.
 */
test('Autocomplete_0059', async () => {
  test.setTimeout(500000);
  await page.locator('#canvas').click({
    position: {
      x: 223,
      y: 251
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 209,
      y: 400
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 419,
      y: 398
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 321,
      y: 461
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 422,
      y: 254
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 218,
      y: 247
    }
  });
  await page.getByText('Automate', { exact: true }).click();
  await page.getByRole('img', { name: 'autoResize' }).click();
  await page.waitForTimeout(5000);
  await page.locator("//p[text()='2']").click();
  await page.getByText('Design').click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 420,
      y: 254
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 550,
      y: 249
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 548,
      y: 402
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 615,
      y: 330
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 418,
      y: 400
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 325,
      y: 247
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 318,
      y: 173
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 475,
      y: 166
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 487,
      y: 240
    }
  });
  const point1 = { x: 366, y: 366 };
  await expect(page).toHaveCanvasSnapshot('Autocomplete_0059.png', {
    maxDiffPixels: 960
  });
  const actualGeometry1 = await getGeometry(page, { x: 366, y: 366 });
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0059_1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, { x: 489, y: 330 });
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0059_2.geom', geometryDir);
  let Component1 = await getSnaptrudeDS(page, point1);
  expect(Component1.type).toBe('Roof');
  await page.locator('#canvas').click({
    position: {
      x: 380,
      y: 335
    }
  });
  await page.locator('#canvas').click({
    modifiers: ['Control'],
    position: {
      x: 528,
      y: 330
    }
  });
  await page.locator('#canvas').click({
    modifiers: ['Control'],
    position: {
      x: 414,
      y: 193
    }
  });
  await page.getByRole('img', { name: 'delete_icon' }).click();
  await page.locator('p').filter({ hasText: '1' }).click();
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
 * @id Autocomplete_0060
 * @description Verify the user can able to autocomplete line+arc (mass/slab) through vertices/edge or not after spllit face
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass/slab
 * 3.Draw a line+arc mass/slab
 * 4.split face
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line+arc (mass/slab) through vertices/edge, after split face
 */
//bug_id ST-3940 (User can't able to split face arc/arc line mass)
test.skip('Autocomplete_0060', async () => {
  test.setTimeout(500000);
  await page.locator('#canvas').click({
    position: {
      x: 169,
      y: 255
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 350,
      y: 253
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 353,
      y: 390
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 402,
      y: 324
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 261,
      y: 397
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 258,
      y: 459
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 164,
      y: 449
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 167,
      y: 260
    }
  });
  await page.locator('//span[text()="Automate"]').click();
  await page.getByRole('img', { name: 'autoResize' }).click();
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.getByText('Design').click();
  await page.getByRole('img', { name: 'addLayer3d' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 833,
      y: 180
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 566,
      y: 257
    }
  });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.getByText('2', { exact: true }).click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 166,
      y: 249
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 113,
      y: 251
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 112,
      y: 463
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 160,
      y: 460
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 143,
      y: 465
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 140,
      y: 513
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 230,
      y: 510
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 182,
      y: 531
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 232,
      y: 461
    }
  });
  const point1 = { x: 285, y: 295 };
  await expect(page).toHaveCanvasSnapshot('Autocomplete_0060.png', {
    maxDiffPixels: 960
  });
  const actualGeometry1 = await getGeometry(page, { x: 285, y: 295 });
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0060_1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, { x: 130, y: 374 });
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0060_2.geom', geometryDir);
  let Component1 = await getSnaptrudeDS(page, point1);
  expect(Component1.type).toBe('Roof');
  await page.locator('#canvas').click({
    position: {
      x: 344,
      y: 326
    }
  });
  await page.locator('#canvas').click({
    modifiers: ['Control'],
    position: {
      x: 150,
      y: 327
    }
  });
  await page.locator('#canvas').click({
    modifiers: ['Control'],
    position: {
      x: 166,
      y: 500
    }
  });
  await page.getByRole('img', { name: 'delete_icon' }).click();
  await page.locator('p').filter({ hasText: '1' }).click();
});
