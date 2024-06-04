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
 * @id Erase_021
 * @description Check user able to erase the Arc split on Arc+Line mass
 *
 * @steps
 * 1.Create project
 * 2.Open Design tab
 * 3.Draw Arc+Line mass
 * 4.Arc  Split on mass
 * 5.Select Erase  tool
 * 6.Click on the split
 *
 * @expected user should delete the entire Arc split in the  on  Arc+Line mass
 */
test('ERASE_021', async () => {
  test.setTimeout(400000);
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 345,
      y: 268
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 592,
      y: 267
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 468,
      y: 227
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 594,
      y: 478
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 345,
      y: 487
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 462,
      y: 554
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 348,
      y: 273
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 468,
      y: 226
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 472,
      y: 563
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 536,
      y: 391
    }
  });
  await expect(page).toHaveCanvasSnapshot('erase_021_1.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'eraseEdge' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 533,
      y: 352
    }
  });
  await expect(page).toHaveCanvasSnapshot('erase_021_2.png', {
    maxDiffPixels: 960
  });
  const point1 = { x: 433, y: 340 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('erase_021.geom', geometryDir);
  await expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
});

/**
 * @id Erase_022
 * @description Check user able to erase the Arc split on Circular mass
 *
 * @steps
 * 1.Create project
 * 2.Open Design tab
 * 3.Draw a Circular mass
 * 4.Arc  Split on mass
 * 5.Select Erase  tool
 * 6.Click on the split
 *
 * @expected user should delete the entire Arc split in the  on  Circular mass
 */
test('ERASE_022', async () => {
  test.setTimeout(400000);
  await page.getByRole('img', { name: 'drawCircle' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 476,
      y: 344
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 634,
      y: 197
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 408,
      y: 136
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 460,
      y: 558
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 330,
      y: 360
    }
  });
  await expect(page).toHaveCanvasSnapshot('erase_022_1.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'eraseEdge' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 331,
      y: 365
    }
  });
  await expect(page).toHaveCanvasSnapshot('erase_022_2.png', {
    maxDiffPixels: 960
  });
  const point1 = { x: 514, y: 277 };
  await expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
});

/**
 * @id Erase_023
 * @description Check user able to erase the polyarc split on orthogonal mass
 *
 * @steps
 * 1.Create project
 * 2.Open Design tab
 * 3.Draw orthogonal mass
 * 4.polyarc Split on mass
 * 5.Select Erase  tool
 * 6.Click on the split
 *
 * @expected user should delete the entire polyarc split on orthogonal mass
 */
test('ERASE_023', async () => {
  test.setTimeout(400000);
  await page.locator('#canvas').click({
    position: {
      x: 360,
      y: 183
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 352,
      y: 484
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 669,
      y: 486
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 675,
      y: 181
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 358,
      y: 180
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 668,
      y: 457
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 549,
      y: 382
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 625,
      y: 407
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 453,
      y: 285
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 482,
      y: 345
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 362,
      y: 189
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 431,
      y: 218
    }
  });
  await expect(page).toHaveCanvasSnapshot('erase_023_1.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'eraseEdge' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 476,
      y: 333
    }
  });
  await expect(page).toHaveCanvasSnapshot('erase_023_2.png', {
    maxDiffPixels: 960
  });
  const point1 = { x: 433, y: 340 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('erase_023.geom', geometryDir);
  await expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
});

/**
 * @id Erase_024
 * @description Check user able to erase the polyarc split  on Angled mass
 *
 * @steps
 * 1.Create project
 * 2.Open Design tab
 * 3.Draw  Angled mass
 * 4.polyarc Split on mass
 * 5.Select Erase  tool
 * 6.Click on the split
 *
 * @expected user should delete the entire polyarc split on Angled mass
 */
test('ERASE_024', async () => {
  test.setTimeout(400000);
  await page.locator('#canvas').click({
    position: {
      x: 300,
      y: 345
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 410,
      y: 208
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 635,
      y: 228
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 694,
      y: 333
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 703,
      y: 550
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 458,
      y: 533
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 454,
      y: 346
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 305,
      y: 346
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 624,
      y: 545
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 474,
      y: 276
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 519,
      y: 405
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 371,
      y: 277
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 428,
      y: 254
    }
  });
  await expect(page).toHaveCanvasSnapshot('erase_024_1.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'eraseEdge' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 498,
      y: 360
    }
  });
  await expect(page).toHaveCanvasSnapshot('erase_024_2.png', {
    maxDiffPixels: 960
  });
  const point1 = { x: 433, y: 340 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('erase_024.geom', geometryDir);
  await expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
});

/**
 * @id Erase_025
 * @description Check user able to erase the  polyarc split on Arc mass
 *
 * @steps
 * 1.Create project
 * 2.Open Design tab
 * 3.Draw Arc mass
 * 4.polyarc Split on mass
 * 5.Select Erase  tool
 * 6.Click on the split
 *
 * @expected user should delete the entire polyarc split on  Arc mass
 */
test('ERASE_025', async () => {
  test.setTimeout(400000);
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 355,
      y: 253
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 629,
      y: 262
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 491,
      y: 191
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 634,
      y: 535
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 603,
      y: 436
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 349,
      y: 538
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 496,
      y: 604
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 355,
      y: 254
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 383,
      y: 398
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 603,
      y: 559
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 481,
      y: 441
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 555,
      y: 477
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 477,
      y: 368
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 454,
      y: 420
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 481,
      y: 190
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 522,
      y: 264
    }
  });
  await expect(page).toHaveCanvasSnapshot('erase_025_1.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'eraseEdge' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 500,
      y: 341
    }
  });
  await expect(page).toHaveCanvasSnapshot('erase_025_2.png', {
    maxDiffPixels: 960
  });
  const point1 = { x: 493, y: 455 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('erase_025.geom', geometryDir);
  await expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
});

/**
 * @id Erase_026
 * @description Check user able to erase the   polyarc split  on Arc+Line mass
 *
 * @steps
 * 1.Create project
 * 2.Open Design tab
 * 3.Draw Arc+Line mass
 * 4.polyarc Split on mass
 * 5.Select Erase  tool
 * 6.Click on the split
 *
 * @expected user should delete the entire polyarc split on   Arc+Line mass
 */
test('ERASE_026', async () => {
  test.setTimeout(400000);
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.getByRole('img', { name: 'arc' }).click();

  await page.locator('#canvas').click({
    position: {
      x: 249,
      y: 242
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 258,
      y: 499
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 218,
      y: 372
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 627,
      y: 499
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 647,
      y: 238
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 675,
      y: 367
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 252,
      y: 250
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 218,
      y: 366
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 350,
      y: 375
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 289,
      y: 390
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 546,
      y: 367
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 488,
      y: 348
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 681,
      y: 374
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 618,
      y: 401
    }
  });
  await expect(page).toHaveCanvasSnapshot('erase_026_1.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'eraseEdge' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 456,
      y: 339
    }
  });
  await expect(page).toHaveCanvasSnapshot('erase_026_2.png', {
    maxDiffPixels: 960
  });
  const point1 = { x: 456, y: 339 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('erase_026.geom', geometryDir);
  await expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
});

/**
 * @id Erase_027
 * @description Check user able to erase the  polyarc split on Circular mass
 *
 * @steps
 * 1.Create project
 * 2.Open Design tab
 * 3.Draw a Circular mass
 * 4. polyarc split on mass
 * 5.Select Erase  tool
 * 6.Click on the split
 *
 * @expected user should delete the entire polyarc split on    Circular mass
 */
test('ERASE_027', async () => {
  test.setTimeout(400000);
  await page.getByRole('img', { name: 'drawCircle' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 543,
      y: 331
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 701,
      y: 222
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 384,
      y: 220
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 465,
      y: 313
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 442,
      y: 259
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 621,
      y: 316
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 556,
      y: 374
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 688,
      y: 211
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 633,
      y: 273
    }
  });
  await expect(page).toHaveCanvasSnapshot('erase_027_1.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'eraseEdge' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 521,
      y: 378
    }
  });
  await expect(page).toHaveCanvasSnapshot('erase_027_2.png', {
    maxDiffPixels: 960
  });
  const point1 = { x: 588, y: 324 };
  await expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
});

/**
 * @id Erase_028
 * @description Check user able to erase the polyarc + line split on orthogonal mass
 *
 * @steps
 * 1.Create project
 * 2.Open Design tab
 * 3.Draw orthogonal mass
 * 4.polyarc+line Split on mass
 * 5.Select Erase  tool
 * 6.Click on the split
 *
 * @expected user should delete the entire polyarc+line split on orthogonal mass
 */
test('ERASE_028', async () => {
  test.setTimeout(400000);
  await page.locator('#canvas').click({
    position: {
      x: 302,
      y: 233
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 488,
      y: 232
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 495,
      y: 396
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 715,
      y: 396
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 711,
      y: 545
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 293,
      y: 547
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 294,
      y: 236
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 351,
      y: 232
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 385,
      y: 304
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 381,
      y: 270
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 393,
      y: 485
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 502,
      y: 490
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 715,
      y: 481
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 617,
      y: 517
    }
  });
  await expect(page).toHaveCanvasSnapshot('erase_028_1.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'eraseEdge' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 383,
      y: 388
    }
  });
  await expect(page).toHaveCanvasSnapshot('erase_028_2.png', {
    maxDiffPixels: 960
  });
  const point1 = { x: 440, y: 419 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('erase_028.geom', geometryDir);
  await expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
});

/**
 * @id Erase_029
 * @description Check user able to erase the polyarc +line split  on Angled mass
 *
 * @steps
 * 1.Create project
 * 2.Open Design tab
 * 3.Draw  Angled mass
 * 4.polyarc+line Split on mass
 * 5.Select Erase  tool
 * 6.Click on the split
 *
 * @expected user should delete the entire polyarc+line split on Angled mass
 */
test('ERASE_029', async () => {
  test.setTimeout(400000);
  await page.locator('#canvas').click({
    position: {
      x: 261,
      y: 305
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 349,
      y: 182
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 550,
      y: 179
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 543,
      y: 417
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 406,
      y: 411
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 415,
      y: 311
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 259,
      y: 300
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 305,
      y: 227
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 434,
      y: 225
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 375,
      y: 208
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 441,
      y: 305
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 421,
      y: 275
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 503,
      y: 417
    }
  });
  await expect(page).toHaveCanvasSnapshot('erase_029_1.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'eraseEdge' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 415,
      y: 246
    }
  });
  await expect(page).toHaveCanvasSnapshot('erase_029_2.png', {
    maxDiffPixels: 960
  });
  const point1 = { x: 467, y: 241 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('erase_029.geom', geometryDir);
  await expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
});

/**
 * @id Erase_030
 * @description Check user able to erase the  polyarc +line split on Arc mass
 *
 * @steps
 * 1.Create project
 * 2.Open Design tab
 * 3.Draw  Arc mass
 * 4.polyarc+line Split on mass
 * 5.Select Erase  tool
 * 6.Click on the split
 *
 * @expected user should delete the entire polyarc+line split on Arc mass
 */
test('ERASE_030', async () => {
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 312,
      y: 233
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 743,
      y: 242
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 522,
      y: 140
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 732,
      y: 549
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 701,
      y: 399
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 302,
      y: 549
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 514,
      y: 617
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 314,
      y: 233
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 344,
      y: 373
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 516,
      y: 140
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 518,
      y: 222
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 519,
      y: 344
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 573,
      y: 292
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 406,
      y: 340
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 416,
      y: 493
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 712,
      y: 491
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 570,
      y: 545
    }
  });
  await expect(page).toHaveCanvasSnapshot('erase_030_1.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'eraseEdge' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 526,
      y: 226
    }
  });
  await expect(page).toHaveCanvasSnapshot('erase_030_2.png', {
    maxDiffPixels: 960
  });
  await page.locator('#canvas').click({
    position: {
      x: 504,
      y: 228
    }
  });
  const point1 = { x: 504, y: 228 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('erase_030.geom', geometryDir);
  await expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
});
