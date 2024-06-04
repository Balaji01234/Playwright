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
 * @id Split mass_021
 * @description Check user able to split the circle mass , selecting object type as space
 * @steps
 *  1. Create Project
 *  2.Select Object type as Space
 *  3.Drawn circle mass
 *  4. Split the mass by selecting the object type as space
 *   a. split the circle space mass using line/arc tool.
 * @expected user should be able to split the drawn circle mass
 */
test('Split mass_021', async () => {
  await page.getByRole('img', { name: 'drawCircle' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 289,
      y: 249
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 346,
      y: 280
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 493,
      y: 227
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 513,
      y: 289
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 227,
      y: 255
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 358,
      y: 256
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 431,
      y: 232
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 493,
      y: 233
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 457,
      y: 226
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 557,
      y: 228
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 525,
      y: 236
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await expect(page).toHaveCanvasSnapshot('split_mass_021.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
 * @id Split mass_022
 * @description check user able to split the attached masses or not
 * @steps
 *  1.Create new Project
 *  2.Draw mass
 *  3.split the attached mass using Draw tool
 * @expected user should be able to split the mass through vertices
 */
test('Split mass_022', async () => {
  test.setTimeout(350000);
  await page.locator('#canvas').click({
    position: {
      x: 319,
      y: 346
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 320,
      y: 254
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 414,
      y: 262
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 414,
      y: 344
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 321,
      y: 343
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 485,
      y: 347
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 480,
      y: 254
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 588,
      y: 257
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 585,
      y: 347
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 486,
      y: 345
    }
  });
  await page.getByRole('img', { name: 'move', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 485,
      y: 251
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 420,
      y: 259
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 411,
      y: 300
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 517,
      y: 300
    }
  });
  await expect(page).toHaveCanvasSnapshot('split_mass_022.png', {
    maxDiffPixels: 960
  });
  const point = { x: 375, y: 311 };
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
});

/**
 * @id Split mass_023
 * @description check user able to split the mass in 2D on the ground storey
 * @steps
 *  1.Create new Project
 *  2.Draw mass
 *  3.split the mass in 2D on the ground storey
 * @expected user should be able to split the mass in 2D on the ground storey
 */
test('Split mass_023', async () => {
  test.setTimeout(350000);
  await page.getByRole('img', { name: 'storey_down' }).nth(1).click();
  await page.getByRole('button', { name: 'Create new storey below' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 253,
      y: 391
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 252,
      y: 291
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 425,
      y: 307
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 430,
      y: 389
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 258,
      y: 407
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 255,
      y: 342
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 320,
      y: 342
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 324,
      y: 366
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 382,
      y: 366
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 383,
      y: 338
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 433,
      y: 337
    }
  });
  const point = { x: 363, y: 321 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('split_mass_023.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('split_mass_023.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  const point1 = { x: 404, y: 376 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('split_mass_023_1.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
});

/**
 * @id Split mass_024
 * @description check user able to split the mass in 3D on the ground storey
 * @steps
 *  1.Create new Project
 *  2.Draw mass
 *  3.split the mass in 3D on the ground storey
 * @expected user should be able to split the mass in 3D on the ground storey
 */
test('Split mass_024', async () => {
  test.setTimeout(350000);
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.getByRole('img', { name: 'storey_down' }).nth(1).click();
  await page.getByRole('button', { name: 'Create new storey below' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 448,
      y: 485
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 488,
      y: 550
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 627,
      y: 491
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 581,
      y: 435
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 449,
      y: 485
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 516,
      y: 391
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 553,
      y: 458
    }
  });
  await expect(page).toHaveCanvasSnapshot('split_mass_024.png', {
    maxDiffPixels: 960
  });
  const point = { x: 517, y: 420 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('split_mass_024.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  const point1 = { x: 566, y: 403 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('split_mass_024_1.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
});

/**
 * @id Split mass_025
 * @description check user able to split the mass in 2D on the upper storey
 * @steps
 *  1.Create new Project
 *  2.Draw mass
 *  3.split the mass in 2D on the upper storey
 * @expected user should be able to split the mass in 2D on the upper storey
 */
test('Split mass_025', async () => {
  test.setTimeout(350000);
  await page.getByRole('img', { name: 'storey_down' }).first().click();
  await page.getByRole('button', { name: 'Create new storey above' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 268,
      y: 362
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 269,
      y: 257
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 375,
      y: 270
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 378,
      y: 291
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 420,
      y: 293
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 430,
      y: 268
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 500,
      y: 276
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 509,
      y: 361
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 270,
      y: 373
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 372,
      y: 295
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 377,
      y: 365
    }
  });
  const point = { x: 350, y: 317 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('split_mass_025.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('split_mass_025.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  const point1 = { x: 431, y: 329 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('split_mass_025_1.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
});

/**
 * @id Split mass_026
 * @description check user able to split the mass in 3D on the upper storey
 * @steps
 *  1.Create new Project
 *  2.Draw mass
 *  3.split the mass in 3D on the upper storey
 * @expected user should be able to split the mass in 3D on the upper storey
 */
test('Split mass_026', async () => {
  test.setTimeout(350000);
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.getByRole('img', { name: 'storey_down' }).first().click();
  await page.getByRole('button', { name: 'Create new storey above' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 448,
      y: 485
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 488,
      y: 550
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 627,
      y: 491
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 581,
      y: 435
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 449,
      y: 485
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 516,
      y: 391
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 553,
      y: 458
    }
  });
  const point = { x: 517, y: 420 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('split_mass_026.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  const point1 = { x: 566, y: 403 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('split_mass_026_1.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await expect(page).toHaveCanvasSnapshot('split_mass_026.png', {
    maxDiffPixels: 960
  });
});

/**
 * @id Split mass_027
 * @description check user able to split the mass on the same storey
 * @steps
 *  1.Create new Project
 *  2.Draw mass
 *  3.split the mass on the same storey
 * @expected user should be able to split the mass on the same storey
 */
test('Split mass_027', async () => {
  test.setTimeout(350000);
  await page.locator('#canvas').click({
    position: {
      x: 280,
      y: 347
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 273,
      y: 249
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 393,
      y: 256
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 396,
      y: 355
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 284,
      y: 355
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 283,
      y: 296
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 393,
      y: 300
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 441,
      y: 345
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 443,
      y: 250
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 553,
      y: 250
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 557,
      y: 349
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 446,
      y: 350
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 494,
      y: 251
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 504,
      y: 344
    }
  });
  const point = { x: 348, y: 273 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('split_mass_027.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('split_mass_027.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  const point1 = { x: 481, y: 303 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('split_mass_027_1.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
});

/**
 * @id Split mass_028
 * @description After storey copy the mass, check user able to split the mass on the multiple storey
 * @steps
 *  1.Create new Project
 *  2.Draw mass
 *  3.split the mass on the multiple storey
 * @expected user should be able to split the mass on the multiple storey
 */
test('Split mass_028', async () => {
  test.setTimeout(350000);
  await page.getByRole('img', { name: 'storey_down' }).first().click();
  await page.getByRole('button', { name: 'Create new storey above' }).click();
  await page.getByText('2', { exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 266,
      y: 340
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 262,
      y: 245
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 381,
      y: 241
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 377,
      y: 338
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 266,
      y: 339
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 268,
      y: 295
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 305,
      y: 289
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 308,
      y: 311
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 335,
      y: 308
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 332,
      y: 276
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 382,
      y: 280
    }
  });
  const point = { x: 308, y: 270 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('split_mass_028.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('split_mass_028.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  const point1 = { x: 322, y: 327 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('split_mass_028_1.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  await page.getByRole('img', { name: 'storey_down' }).nth(1).click();
  await page.getByRole('button', { name: 'Create new storey below' }).click();
  await page.getByText('-1', { exact: true }).click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 319,
      y: 384
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 322,
      y: 276
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 445,
      y: 281
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 442,
      y: 380
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 316,
      y: 384
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 321,
      y: 332
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 366,
      y: 330
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 367,
      y: 309
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 407,
      y: 308
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 401,
      y: 347
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 445,
      y: 345
    }
  });
  const point2 = { x: 417, y: 291 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('split_mass_028_2.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('split_mass_028_1.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point2)).toBe('Mass');
  const point3 = { x: 375, y: 359 };
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('split_mass_028_3.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point3)).toBe('Mass');
});

/**
 * @id Split mass_029
 * @description Check user able to split the mass drawn on sketch
 * @steps
 *  1.Create new Project
 *  2.Upload sketch
 *  3.Draw the ( Line/ Arc) mass on top of the sketch
 *  4.Spilt the mass
 *   a. split the line mass using draw tool
 *   b. Split he Arc mass using Arc tool
 * @expected User should able to split the mass drawn on sketch
 */
test('Split mass_029', async () => {
  test.setTimeout(350000);
  await page.getByRole('img', { name: 'Settings' }).click();
  await page
    .locator('div')
    .filter({ hasText: /^Millimeters$/ })
    .nth(2)
    .click();
  await page.getByText('Metres').click();
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 255,
      y: 335
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 254,
      y: 221
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 424,
      y: 232
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 422,
      y: 332
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 258,
      y: 331
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 336,
      y: 220
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 346,
      y: 335
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 599,
      y: 242
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 676,
      y: 244
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 647,
      y: 205
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 700,
      y: 289
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 725,
      y: 271
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 638,
      y: 332
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 654,
      y: 359
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 602,
      y: 248
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 559,
      y: 277
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 600,
      y: 243
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 701,
      y: 292
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 636,
      y: 301
    }
  });
  const point = { x: 299, y: 266 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('split_mass_029.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('split_mass_029.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  const point1 = { x: 368, y: 279 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('split_mass_029_1.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  const point2 = { x: 596, y: 303 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('split_mass_029_2.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point2)).toBe('Mass');
  const point3 = { x: 653, y: 255 };
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('split_mass_029_3.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point3)).toBe('Mass');
});

/**
 * @id Split mass_030
 * @description After uploading the sketch,Check user able to split the mass drawn on the ground storey
 * @steps
 *  1.Create new Project
 *  2.Upload sketch
 *  3.Draw the ( Line/ Arc)mass on the ground storey
 *  4.Spilt the mass
 *   a. split the line mass using draw tool
 *   b. Split he Arc mass using Arc tool
 * @expected After uploading the sketch User should able to split the mass drawn on the ground storey
 */
//TODO: The test steps and description does not match
test.skip('Split mass_030', async () => {
  test.setTimeout(350000);
  await page.getByRole('img', { name: 'Settings' }).click();
  await page
    .locator('div')
    .filter({ hasText: /^Tolerance0\.00$/ })
    .locator('div')
    .nth(4)
    .click();
  await page.getByText('0.0000', { exact: true }).click();
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 255,
      y: 348
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 260,
      y: 225
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 413,
      y: 235
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 413,
      y: 343
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 251,
      y: 351
    }
  });
  await page.getByRole('img', { name: 'Settings' }).click();
  await page
    .locator('div')
    .filter({ hasText: /^Tolerance0\.0000$/ })
    .locator('div')
    .nth(4)
    .click();
  await page.getByText('0.000000', { exact: true }).click();
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 255,
      y: 293
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 409,
      y: 289
    }
  });
  await page.getByRole('img', { name: 'Settings' }).click();
  await page
    .locator('div')
    .filter({ hasText: /^Tolerance0\.000000$/ })
    .getByRole('img')
    .click();
  await page.getByText('0.0000000', { exact: true }).click();
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 603,
      y: 256
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 684,
      y: 251
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 658,
      y: 193
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 698,
      y: 326
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 730,
      y: 319
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 626,
      y: 326
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 627,
      y: 357
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 605,
      y: 260
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 555,
      y: 302
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 683,
      y: 254
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 627,
      y: 322
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 640,
      y: 281
    }
  });
  const point = { x: 347, y: 248 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('split_mass_030.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('split_mass_030.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  const point1 = { x: 356, y: 310 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('split_mass_030_1.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  const point2 = { x: 619, y: 267 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('split_mass_030_2.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point2)).toBe('Mass');
  const point3 = { x: 708, y: 299 };
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('split_mass_030_3.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point3)).toBe('Mass');
});
