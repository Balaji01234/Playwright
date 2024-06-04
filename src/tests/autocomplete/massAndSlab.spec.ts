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
 * @id Autocomplete_0021
 * @description Verify the user is able to autocomplete the line+arc slab through any point on the multiple edge or not.
 *
 * @steps
 * 1.Create project
 * 2.Select draw slab
 * 3.Draw a line+arc slab
 * 4.Autocomplete any point on multiple edge
 *
 * @expected Autocomplete should done through any point on multiple edge on line slab.
 */
test('autocomplete_0021', async () => {
  test.setTimeout(500000);
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 171,
      y: 249
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 346,
      y: 251
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 336,
      y: 363
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 366,
      y: 343
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 164,
      y: 362
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 172,
      y: 249
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 210,
      y: 313
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 258,
      y: 363
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 247,
      y: 474
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 284,
      y: 421
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 468,
      y: 470
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 481,
      y: 325
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 504,
      y: 402
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 383,
      y: 320
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 505,
      y: 395
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 656,
      y: 405
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 647,
      y: 564
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 695,
      y: 516
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 386,
      y: 565
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 377,
      y: 472
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 417,
      y: 505
    }
  });
  const point1 = { x: 324, y: 291 };
  const point2 = { x: 414, y: 397 };
  const point3 = { x: 662, y: 456 };
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0021_1.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0021_2.geom', geometryDir);
  await expect(actualGeometry3).toHaveGeometryV0('autocomplete_0021_3.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('autocomplete_0021.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point1)).toBe('Roof');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
 * @id Autocomplete_0022
 * @description Verify the user is able to autocomplete the line slab through vertices/edge or not in different storeys
 *
 * @steps
 * 1.Create project
 * 2.Select draw slab
 * 3.Draw a line+arc slab
 * 4.Storey copy
 * 5.Autocomplete any point on edge
 *
 * @expected Autocomplete should done through vertices on line slab in different storeys.
 */
test('autocomplete_0022', async () => {
  test.setTimeout(500000);
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 267,
      y: 256
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 278,
      y: 405
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 450,
      y: 415
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 472,
      y: 249
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 268,
      y: 246
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 362,
      y: 369
    }
  });
  await page.locator('#canvas').press('Control+ArrowUp');
  await page.getByText('2', { exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 452,
      y: 254
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 449,
      y: 253
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 607,
      y: 271
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 605,
      y: 408
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 453,
      y: 406
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 341,
      y: 255
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 349,
      y: 175
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 539,
      y: 173
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 524,
      y: 254
    }
  });
  const point1 = { x: 365, y: 315 };
  const point2 = { x: 520, y: 355 };
  const point3 = { x: 505, y: 217 };
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0022_1.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0022_2.geom', geometryDir);
  await expect(actualGeometry3).toHaveGeometryV0('autocomplete_0022_3.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('autocomplete_0022.png', {
    maxDiffPixels: 960
  });

  // await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 444,
      y: 222
    }
  });
  await page.locator('#canvas').click({
    modifiers: ['Control'],
    position: {
      x: 392,
      y: 313
    }
  });
  await page.locator('#canvas').click({
    modifiers: ['Control'],
    position: {
      x: 535,
      y: 319
    }
  });
  await page.getByRole('img', { name: 'delete_icon' }).click();
  await page.locator('p').filter({ hasText: '1' }).click();
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
 * @id Autocomplete_0023
 * @description Verify the user is able to autocomplete the arc slab through vertices/edge or not in different storeys
 *
 * @steps
 * 1.Create project
 * 2.Select draw slab
 * 3.Draw a line+arc slab
 * 4.Storey copy
 * 5.Autocomplete any point on edge
 *
 * @expected Autocomplete on arc slab should done through vertices  in different storeys.
 */
test('autocomplete_0023', async () => {
  test.setTimeout(500000);
  await clearCanvas(page);
  await page.getByRole('img', { name: 'arc' }).click();
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 249,
      y: 295
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 328,
      y: 297
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 288,
      y: 261
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 327,
      y: 428
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 250,
      y: 426
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 285,
      y: 456
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 239,
      y: 297
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 304,
      y: 415
    }
  });
  await page.locator('#canvas').press('Control+ArrowUp');
  await page.getByText('2', { exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 480,
      y: 383
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 250,
      y: 293
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 174,
      y: 295
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 183,
      y: 211
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 400,
      y: 213
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 305,
      y: 165
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 400,
      y: 292
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 336,
      y: 298
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 288,
      y: 455
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 291,
      y: 509
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 398,
      y: 508
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 344,
      y: 530
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 397,
      y: 355
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 424,
      y: 434
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 339,
      y: 376
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 295,
      y: 365
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 374,
      y: 243
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 379,
      y: 422
    }
  });
  const point1 = { x: 295, y: 365 };
  const point2 = { x: 374, y: 243 };
  const point3 = { x: 379, y: 422 };
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0023_1.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0023_2.geom', geometryDir);
  await expect(actualGeometry3).toHaveGeometryV0('autocomplete_0023_3.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('autocomplete_0023.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point1)).toBe('Roof');
  await page.locator('#canvas').click({
    position: {
      x: 308,
      y: 215
    }
  });
  await page.locator('#canvas').click({
    modifiers: ['Control'],
    position: {
      x: 305,
      y: 350
    }
  });
  await page.locator('#canvas').click({
    modifiers: ['Control'],
    position: {
      x: 376,
      y: 417
    }
  });
  await page.getByRole('img', { name: 'delete_icon' }).click();
  await page.locator('p').filter({ hasText: '1' }).click();
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
 * @id Autocomplete_0024
 * @description Verify the user is able to autocomplete the line+arc slab through vertices/edge or not in different storeys
 *
 * @steps
 * 1.Create project
 * 2.Select draw slab
 * 3.Draw a line+arc slab
 * 4.Storey copy
 * 5.Autocomplete any point on edge
 *
 * @expected Autocomplete should done through vertices on line+arc slab  in different storeys.
 */
test('autocomplete_0024', async () => {
  test.setTimeout(400000);
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 289,
      y: 289
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 432,
      y: 282
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 487,
      y: 336
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 439,
      y: 328
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 495,
      y: 431
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 287,
      y: 426
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 393,
      y: 465
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 288,
      y: 295
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 449,
      y: 389
    }
  });
  await page.locator('#canvas').press('Control+ArrowUp');
  await page.getByText('2', { exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 602,
      y: 328
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 436,
      y: 283
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 438,
      y: 200
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 555,
      y: 206
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 490,
      y: 158
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 552,
      y: 337
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 483,
      y: 340
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 378,
      y: 465
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 384,
      y: 555
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 538,
      y: 560
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 541,
      y: 409
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 597,
      y: 479
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 529,
      y: 342
    }
  });
  const point1 = { x: 325, y: 346 };
  const point2 = { x: 543, y: 276 };
  const point3 = { x: 500, y: 501 };
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0024_1.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0024_2.geom', geometryDir);
  await expect(actualGeometry3).toHaveGeometryV0('autocomplete_0024_3.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('autocomplete_0024.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point1)).toBe('Roof');
  await page.locator('#canvas').click({
    position: {
      x: 422,
      y: 373
    }
  });
  await page.locator('#canvas').click({
    modifiers: ['Control'],
    position: {
      x: 521,
      y: 299
    }
  });
  await page.locator('#canvas').click({
    modifiers: ['Control'],
    position: {
      x: 530,
      y: 456
    }
  });
  await page.getByRole('img', { name: 'delete_icon' }).click();
  await page.locator('p').filter({ hasText: '1' }).click();
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
 * @id Autocomplete_0025
 * @description Verify the user is able to autocomplete line (mass/slab) through vertices/edge or not after Edit.
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass/slab
 * 3.Draw a line mass/slab
 * 4.Edit
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line (mass/slab) through vertices/edge, after edit.
 */
test('autocomplete_0025', async () => {
  test.setTimeout(400000);
  await page.locator('#canvas').click({
    position: {
      x: 151,
      y: 256
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 150,
      y: 425
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 314,
      y: 440
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 312,
      y: 257
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 149,
      y: 249
    }
  });
  await page.getByRole('img', { name: 'edit' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 233,
      y: 253
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 233,
      y: 192
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 314,
      y: 192
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 467,
      y: 197
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 471,
      y: 423
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 317,
      y: 428
    }
  });
  await page.getByRole('img', { name: 'edit' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 468,
      y: 287
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 418,
      y: 284
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 224,
      y: 189
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 234,
      y: 129
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 375,
      y: 137
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 377,
      y: 191
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 562,
      y: 219
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 554,
      y: 338
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 675,
      y: 348
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 673,
      y: 219
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 566,
      y: 210
    }
  });
  await page.getByRole('img', { name: 'edit' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 618,
      y: 334
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 611,
      y: 405
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 561,
      y: 216
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 553,
      y: 135
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 739,
      y: 137
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 744,
      y: 398
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 681,
      y: 407
    }
  });
  await page.getByRole('img', { name: 'edit' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 743,
      y: 265
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 759,
      y: 268
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 620,
      y: 400
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 619,
      y: 454
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 812,
      y: 446
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 802,
      y: 337
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 757,
      y: 340
    }
  });
  const point1 = { x: 212, y: 341 };
  const point2 = { x: 392, y: 350 };
  const point3 = { x: 254, y: 153 };
  const point4 = { x: 611, y: 287 };
  const point5 = { x: 690, y: 187 };
  const point6 = { x: 751, y: 425 };
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  const actualGeometry3 = await getGeometry(page, point3);
  const actualGeometry4 = await getGeometry(page, point4);
  const actualGeometry5 = await getGeometry(page, point5);
  const actualGeometry6 = await getGeometry(page, point6);
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0025_1.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0025_2.geom', geometryDir);
  await expect(actualGeometry3).toHaveGeometryV0('autocomplete_0025_3.geom', geometryDir);
  await expect(actualGeometry4).toHaveGeometryV0('autocomplete_0025_4.geom', geometryDir);
  await expect(actualGeometry5).toHaveGeometryV0('autocomplete_0025_5.geom', geometryDir);
  await expect(actualGeometry6).toHaveGeometryV0('autocomplete_0025_6.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('autocomplete_0025.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point4)).toBe('Roof');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
 * @id Autocomplete_0026
 * @description Verify the user is able to autocomplete arc (mass/slab) through vertices/edge or not after Edit.
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass/slab
 * 3.Draw a arc mass/slab
 * 4.Edit
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for arc (mass/slab) through vertices/edge, after edit.
 */
test('autocomplete_0026', async () => {
  test.setTimeout(400000);
  await page.locator('#canvas').click({
    position: {
      x: 140,
      y: 206
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 138,
      y: 319
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 315,
      y: 315
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 229,
      y: 348
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 317,
      y: 201
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 144,
      y: 211
    }
  });
  await page.getByRole('img', { name: 'edit' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 221,
      y: 346
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 222,
      y: 414
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 313,
      y: 319
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 428,
      y: 327
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 430,
      y: 156
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 488,
      y: 239
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 309,
      y: 155
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 311,
      y: 202
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 224,
      y: 203
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 229,
      y: 106
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 363,
      y: 107
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 295,
      y: 122
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 364,
      y: 156
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 656,
      y: 200
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 652,
      y: 310
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 656,
      y: 413
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 689,
      y: 359
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 793,
      y: 409
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 791,
      y: 205
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 856,
      y: 304
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 662,
      y: 207
    }
  });
  await page.getByRole('img', { name: 'edit' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 713,
      y: 199
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 708,
      y: 126
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 655,
      y: 186
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 593,
      y: 186
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 602,
      y: 377
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 554,
      y: 273
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 690,
      y: 376
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 657,
      y: 412
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 654,
      y: 470
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 791,
      y: 467
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 723,
      y: 510
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 790,
      y: 414
    }
  });
  const point1 = { x: 245, y: 350 };
  const point2 = { x: 259, y: 149 };
  const point3 = { x: 773, y: 273 };
  const point4 = { x: 603, y: 293 };
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  const actualGeometry3 = await getGeometry(page, point3);
  const actualGeometry4 = await getGeometry(page, point4);
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0026_1.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0026_2.geom', geometryDir);
  await expect(actualGeometry3).toHaveGeometryV0('autocomplete_0026_3.geom', geometryDir);
  await expect(actualGeometry4).toHaveGeometryV0('autocomplete_0026_4.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('autocomplete_0026.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point4)).toBe('Roof');
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
 * @id Autocomplete_0027
 * @description Verify the user is able to autocomplete line+arc (mass/slab) through vertices/edge or not after Edit.
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass/slab
 * 3.Draw a line+arc mass/slab
 * 4.Edit
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line+arc (mass/slab) through vertices/edge, after edit.
 */
test('autocomplete_0027', async () => {
  test.setTimeout(400000);
  await page.locator('#canvas').click({
    position: {
      x: 145,
      y: 264
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 145,
      y: 449
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 245,
      y: 451
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 191,
      y: 471
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 246,
      y: 268
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 153,
      y: 263
    }
  });
  await page.getByRole('img', { name: 'edit' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 196,
      y: 260
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 191,
      y: 222
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 247,
      y: 445
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 327,
      y: 443
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 335,
      y: 222
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 350,
      y: 338
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 250,
      y: 221
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 190,
      y: 222
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 199,
      y: 170
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 305,
      y: 178
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 252,
      y: 139
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 308,
      y: 216
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 488,
      y: 265
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 619,
      y: 264
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 620,
      y: 334
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 643,
      y: 296
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 497,
      y: 333
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 494,
      y: 266
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 515,
      y: 301
    }
  });
  await page.getByRole('img', { name: 'edit' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 552,
      y: 263
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 551,
      y: 247
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 493,
      y: 330
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 494,
      y: 423
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 620,
      y: 420
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 543,
      y: 481
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 628,
      y: 328
    }
  });
  await page.getByRole('img', { name: 'edit' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 550,
      y: 481
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 547,
      y: 505
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 620,
      y: 378
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 717,
      y: 375
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 710,
      y: 292
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 756,
      y: 335
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 657,
      y: 288
    }
  });
  const point1 = { x: 194, y: 405 };
  const point2 = { x: 291, y: 396 };
  const point3 = { x: 267, y: 190 };
  const point4 = { x: 584, y: 286 };
  const point5 = { x: 585, y: 425 };
  const point6 = { x: 690, y: 336 };
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  const actualGeometry3 = await getGeometry(page, point3);
  const actualGeometry4 = await getGeometry(page, point4);
  const actualGeometry5 = await getGeometry(page, point5);
  const actualGeometry6 = await getGeometry(page, point6);
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0027_1.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0027_2.geom', geometryDir);
  await expect(actualGeometry3).toHaveGeometryV0('autocomplete_0027_3.geom', geometryDir);
  await expect(actualGeometry4).toHaveGeometryV0('autocomplete_0027_4.geom', geometryDir);
  await expect(actualGeometry5).toHaveGeometryV0('autocomplete_0027_5.geom', geometryDir);
  await expect(actualGeometry6).toHaveGeometryV0('autocomplete_0027_6.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('autocomplete_0027.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point4)).toBe('Roof');
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
 * @id Autocomplete_0028
 * @description Verify the user is able to autocomplete line (mass/slab) through vertices/edge or not after move Edit.
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass/slab
 * 3.Draw a line mass/slab
 * 4.Move edit
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line (mass/slab) through vertices/edge, after move edit.
 */
test('autocomplete_0028', async () => {
  test.setTimeout(400000);
  await page.locator('#canvas').click({
    position: {
      x: 95,
      y: 244
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 106,
      y: 442
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 230,
      y: 450
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 228,
      y: 247
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 93,
      y: 249
    }
  });
  await page.getByRole('img', { name: 'move', exact: true }).click();
  await page.locator('#canvas').dblclick({
    position: {
      x: 157,
      y: 242
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 161,
      y: 194
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 234,
      y: 196
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 375,
      y: 199
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 365,
      y: 519
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 236,
      y: 521
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 235,
      y: 447
    }
  });
  await page.getByRole('img', { name: 'move', exact: true }).click();
  await page.locator('#canvas').dblclick({
    position: {
      x: 373,
      y: 344
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 316,
      y: 346
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 127,
      y: 439
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 127,
      y: 558
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 271,
      y: 553
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 273,
      y: 523
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 459,
      y: 198
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 465,
      y: 311
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 590,
      y: 301
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 591,
      y: 192
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 463,
      y: 198
    }
  });
  await page.getByRole('img', { name: 'move', exact: true }).click();
  await page.locator('#canvas').dblclick({
    position: {
      x: 527,
      y: 309
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 527,
      y: 416
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 594,
      y: 201
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 654,
      y: 196
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 657,
      y: 416
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 599,
      y: 414
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 507,
      y: 197
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 511,
      y: 135
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 630,
      y: 134
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 626,
      y: 193
    }
  });
  const point1 = { x: 189, y: 393 };
  const point2 = { x: 267, y: 385 };
  const point3 = { x: 149, y: 515 };
  const point4 = { x: 477, y: 289 };
  const point5 = { x: 643, y: 294 };
  const point6 = { x: 609, y: 174 };
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  const actualGeometry3 = await getGeometry(page, point3);
  const actualGeometry4 = await getGeometry(page, point4);
  const actualGeometry5 = await getGeometry(page, point5);
  const actualGeometry6 = await getGeometry(page, point6);
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0028_1.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0028_2.geom', geometryDir);
  await expect(actualGeometry3).toHaveGeometryV0('autocomplete_0028_3.geom', geometryDir);
  await expect(actualGeometry4).toHaveGeometryV0('autocomplete_0028_4.geom', geometryDir);
  await expect(actualGeometry5).toHaveGeometryV0('autocomplete_0028_5.geom', geometryDir);
  await expect(actualGeometry6).toHaveGeometryV0('autocomplete_0028_6.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('autocomplete_0028.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point4)).toBe('Roof');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
 * @id Autocomplete_0029
 * @description Verify the user is able to autocomplete arc (mass/slab) through vertices/edge or not after move Edit.
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass/slab
 * 3.Draw a arc mass/slab
 * 4.Move Edit
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for arc (mass/slab) through vertices/edge, after move edit.
 */
test('autocomplete_0029', async () => {
  test.setTimeout(500000);
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 150,
      y: 265
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 150,
      y: 348
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 122,
      y: 307
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 273,
      y: 343
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 277,
      y: 262
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 302,
      y: 306
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 153,
      y: 272
    }
  });
  await page.getByRole('img', { name: 'move', exact: true }).click();
  await page.locator('#canvas').dblclick({
    position: {
      x: 126,
      y: 300
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 95,
      y: 303
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 195,
      y: 260
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 194,
      y: 197
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 329,
      y: 207
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 259,
      y: 169
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 324,
      y: 298
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 305,
      y: 298
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 315,
      y: 295
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 152,
      y: 343
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 146,
      y: 435
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 327,
      y: 429
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 235,
      y: 477
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 326,
      y: 298
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 546,
      y: 269
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 651,
      y: 271
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 598,
      y: 222
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 655,
      y: 386
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 546,
      y: 394
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 547,
      y: 265
    }
  });
  await page.getByRole('img', { name: 'move', exact: true }).click();
  await page.locator('#canvas').dblclick({
    position: {
      x: 595,
      y: 221
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 595,
      y: 163
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 658,
      y: 207
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 812,
      y: 207
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 810,
      y: 352
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 869,
      y: 279
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 654,
      y: 329
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 650,
      y: 387
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 652,
      y: 462
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 814,
      y: 355
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 817,
      y: 429
    }
  });
  const point1 = { x: 249, y: 320 };
  const point2 = { x: 299, y: 212 };
  const point3 = { x: 308, y: 415 };
  const point4 = { x: 608, y: 296 };
  const point5 = { x: 762, y: 289 };
  const point6 = { x: 720, y: 406 };
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  const actualGeometry3 = await getGeometry(page, point3);
  const actualGeometry4 = await getGeometry(page, point4);
  const actualGeometry5 = await getGeometry(page, point5);
  const actualGeometry6 = await getGeometry(page, point6);
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0029_1.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0029_2.geom', geometryDir);
  await expect(actualGeometry3).toHaveGeometryV0('autocomplete_0029_3.geom', geometryDir);
  await expect(actualGeometry4).toHaveGeometryV0('autocomplete_0029_4.geom', geometryDir);
  await expect(actualGeometry5).toHaveGeometryV0('autocomplete_0029_5.geom', geometryDir);
  await expect(actualGeometry6).toHaveGeometryV0('autocomplete_0029_6.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('autocomplete_0029.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point4)).toBe('Roof');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
 * @id Autocomplete_0030
 * @description Verify the user is able to autocomplete line+arc (mass/slab) through vertices/edge or not after move Edit.
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass/slab
 * 3.Draw a line+arc mass/slab
 * 4.Move Edit
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line+arc (mass/slab) through vertices/edge, after move edit.
 */
test('autocomplete_0030', async () => {
  test.setTimeout(400000);
  await page.locator('#canvas').click({
    position: {
      x: 118,
      y: 238
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 119,
      y: 402
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 316,
      y: 398
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 312,
      y: 239
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 353,
      y: 316
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 119,
      y: 234
    }
  });
  await page.getByRole('img', { name: 'move', exact: true }).click();
  await page.locator('#canvas').dblclick({
    position: {
      x: 355,
      y: 316
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 281,
      y: 312
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 280,
      y: 311
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 377,
      y: 316
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 383,
      y: 440
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 411,
      y: 376
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 222,
      y: 432
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 221,
      y: 402
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 119,
      y: 235
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 121,
      y: 151
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 316,
      y: 148
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 221,
      y: 123
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 319,
      y: 243
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 543,
      y: 248
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 539,
      y: 336
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 704,
      y: 339
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 710,
      y: 253
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 736,
      y: 286
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 544,
      y: 250
    }
  });
  await page.getByRole('img', { name: 'move', exact: true }).click();
  await page.locator('#canvas').dblclick({
    position: {
      x: 732,
      y: 287
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 772,
      y: 288
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 548,
      y: 242
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 537,
      y: 184
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 704,
      y: 194
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 619,
      y: 144
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 697,
      y: 254
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 704,
      y: 209
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 811,
      y: 212
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 815,
      y: 401
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 864,
      y: 309
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 633,
      y: 408
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 637,
      y: 335
    }
  });
  const point1 = { x: 256, y: 277 };
  const point2 = { x: 286, y: 213 };
  const point3 = { x: 366, y: 362 };
  const point4 = { x: 628, y: 289 };
  const point5 = { x: 671, y: 201 };
  const point6 = { x: 820, y: 274 };
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  const actualGeometry3 = await getGeometry(page, point3);
  const actualGeometry4 = await getGeometry(page, point4);
  const actualGeometry5 = await getGeometry(page, point5);
  const actualGeometry6 = await getGeometry(page, point6);
  await expect(actualGeometry1).toHaveGeometryV0('autocomplete_0030_1.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('autocomplete_0030_2.geom', geometryDir);
  await expect(actualGeometry3).toHaveGeometryV0('autocomplete_0030_3.geom', geometryDir);
  await expect(actualGeometry4).toHaveGeometryV0('autocomplete_0030_4.geom', geometryDir);
  await expect(actualGeometry5).toHaveGeometryV0('autocomplete_0030_5.geom', geometryDir);
  await expect(actualGeometry6).toHaveGeometryV0('autocomplete_0030_6.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('autocomplete_0030.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point4)).toBe('Roof');
  await page.getByRole('img', { name: 'Space' }).click();
});
