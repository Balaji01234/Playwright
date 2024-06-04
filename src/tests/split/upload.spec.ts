import { expect, test } from '../../common/fixtures';
import { Page } from '@playwright/test';
import { initProject, configure2DProjectForTestV0, enableAutoSave } from '../../common/project';
import { clearCanvas, selectAll } from '../../common/canvas';
import {
  createGeometryDir,
  getGeometry,
  getSnaptrudeDS,
  getSnaptrudeDSType
} from '../../common/geometry';
import * as path from 'node:path';
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
test('Split mass_029_1', async () => {
  await page.locator("//*[text()='Import']").click();
  await page.locator('#importInput').setInputFiles(path.join(__dirname, 'Split mass_029_1.jpg'));
  await page.getByRole('button', { name: 'Import' }).click();
  await page.waitForSelector("//*[text()='Import Successful']", {
    state: 'attached',
    timeout: 60000
  });
  await page.getByRole('button', { name: 'Done' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 533,
      y: 350
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 531,
      y: 261
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 628,
      y: 263
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 627,
      y: 346
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 532,
      y: 347
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 730,
      y: 346
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 739,
      y: 449
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 738,
      y: 391
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 823,
      y: 441
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 784,
      y: 463
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 817,
      y: 353
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 815,
      y: 398
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 733,
      y: 347
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 771,
      y: 333
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 776,
      y: 333
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 760,
      y: 381
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 764,
      y: 365
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 783,
      y: 432
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 764,
      y: 419
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 821,
      y: 448
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 798,
      y: 439
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 580,
      y: 261
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 590,
      y: 348
    }
  });
  await expect(page).toHaveCanvasSnapshot('split_mass_029_1.png', {
    maxDiffPixels: 960
  });
  const point = { x: 556, y: 308 };
  const point1 = { x: 795, y: 391 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('split_mass_029_1.geom', geometryDir);
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('split_mass_029_1_1.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  await page.getByRole('img', { name: 'userimportedfiles' }).click();
  await page.getByRole('img', { name: 'delete', exact: true }).click();
  await page.getByRole('img', { name: 'userimportedfiles' }).click();
  await clearCanvas(page);
  await reset2DCameraVersion0(page);
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
test('Split mass_030', async () => {
  test.setTimeout(350000);
  await page.getByRole('img', { name: 'storey_down' }).nth(1).click();
  await page.getByRole('button', { name: 'Create new storey below' }).click();
  await page.getByText('-1', { exact: true }).click();
  await page.waitForTimeout(200);
  await page.locator("//*[text()='Import']").click();
  await page.locator('#importInput').setInputFiles(path.join(__dirname, 'Split mass_029_1.jpg'));
  await page.getByRole('button', { name: 'Import' }).click();
  await page.waitForSelector("//*[text()='Import Successful']", {
    state: 'attached',
    timeout: 60000
  });
  await page.getByRole('button', { name: 'Done' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 454,
      y: 421
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 453,
      y: 350
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 577,
      y: 349
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 577,
      y: 426
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 457,
      y: 425
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 652,
      y: 350
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 654,
      y: 479
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 664,
      y: 410
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 763,
      y: 476
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 705,
      y: 488
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 755,
      y: 351
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 747,
      y: 412
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 659,
      y: 350
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 703,
      y: 332
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 710,
      y: 332
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 702,
      y: 391
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 695,
      y: 370
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 717,
      y: 453
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 726,
      y: 425
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 759,
      y: 475
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 734,
      y: 477
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 522,
      y: 347
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 517,
      y: 429
    }
  });
  await expect(page).toHaveCanvasSnapshot('split_mass_030.png', {
    maxDiffPixels: 960
  });
  const point = { x: 557, y: 382 };
  const point1 = { x: 725, y: 371 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('split_mass_030.geom', geometryDir);
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('split_mass_030_1.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  await page.getByRole('img', { name: 'userimportedfiles' }).click();
  await page.getByRole('img', { name: 'delete', exact: true }).click();
  await page.getByRole('img', { name: 'userimportedfiles' }).click();
  await clearCanvas(page);
  await reset2DCameraVersion0(page);
});

/**
 * @id Split mass_031
 * @description After uploading the sketch,Check user able to split the mass drawn on the upper storey
 * @steps
 *  1.Create new Project
 *  2.Upload sketch
 *  3.Draw the ( Line/ Arc) mass on the upper storey
 *  4.Spilt the mass
 *   a. split the line mass using draw tool
 *   b. Split he Arc mass using Arc tool
 * @expected After uploading the sketch User should able to split the mass drawn on the upper storey
 */
test('Split mass_031', async () => {
  await page.getByRole('img', { name: 'storey_down' }).first().click();
  await page.getByRole('button', { name: 'Create new storey above' }).click();
  await page.getByText('2', { exact: true }).click();
  await page.locator("//*[text()='Import']").click();
  await page.locator('#importInput').setInputFiles(path.join(__dirname, 'Split mass_029_1.jpg'));
  await page.locator("(//*[text()='Import'])[2]").click();
  await expect(page.locator("//*[text()='Image' and text()=' Import']")).not.toBeVisible({
    timeout: 60000
  });
  await page.waitForSelector("//*[text()='Import Successful']", {
    state: 'attached',
    timeout: 60000
  });
  await page.getByRole('button', { name: 'Done' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 736,
      y: 436
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 735,
      y: 346
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 829,
      y: 339
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 829,
      y: 432
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 742,
      y: 426
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 534,
      y: 263
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 535,
      y: 363
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 544,
      y: 311
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 650,
      y: 357
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 601,
      y: 375
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 649,
      y: 269
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 641,
      y: 312
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 534,
      y: 261
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 587,
      y: 248
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 587,
      y: 248
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 589,
      y: 304
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 583,
      y: 287
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 591,
      y: 328
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 583,
      y: 325
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 651,
      y: 366
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 625,
      y: 357
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 781,
      y: 347
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 784,
      y: 435
    }
  });
  await expect(page).toHaveCanvasSnapshot('split_mass_031.png', {
    maxDiffPixels: 960
  });
  const point = { x: 623, y: 289 };
  const point1 = { x: 765, y: 379 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('split_mass_031.geom', geometryDir);
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('split_mass_031_1.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  await page.getByRole('img', { name: 'userimportedfiles' }).click();
  await page.getByRole('img', { name: 'delete', exact: true }).click();
  await page.getByRole('img', { name: 'userimportedfiles' }).click();
  await clearCanvas(page);
  await reset2DCameraVersion0(page);
});

/**
 * @id Split mass_032
 * @description Check user able to split the mass after upload CAD
 * @steps
 *  1.Create new Project
 *  2.Upload CAD
 *  3.Draw the ( Line/ Arc) mass on top of the CAD
 *  4.Spilt the masses using Draw tool
 * @expected User should able to split the mass after upload CAD
 */
test('Split mass_032', async () => {
  test.setTimeout(450000);
  await page.locator("//*[text()='Import']").click();
  await page.locator('#importInput').setInputFiles(path.join(__dirname, 'Split mass_032.dwg'));
  await page.getByRole('button', { name: 'Import' }).click();
  await page.waitForSelector("//*[text()='Import Successful']", {
    state: 'attached',
    timeout: 60000
  });
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'zoomOut' }).click();
  for (let i = 0; i <= 35; i++) {
    await page.locator('#canvas').click({
      position: {
        x: 453,
        y: 282
      }
    });
  }
  await page.getByRole('img', { name: 'zoomIn' }).click();
  for (let i = 0; i <= 3; i++) {
    await page.locator('#canvas').click({
      position: {
        x: 533,
        y: 201
      }
    });
  }
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 415,
      y: 264
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 415,
      y: 127
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 471,
      y: 129
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 470,
      y: 272
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 421,
      y: 269
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 501,
      y: 142
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 508,
      y: 245
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 506,
      y: 200
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 595,
      y: 246
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 549,
      y: 256
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 597,
      y: 151
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 588,
      y: 203
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 502,
      y: 142
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 541,
      y: 131
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 418,
      y: 198
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 470,
      y: 197
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 508,
      y: 193
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 585,
      y: 193
    }
  });
  await expect(page).toHaveCanvasSnapshot('split_mass_032.png', {
    maxDiffPixels: 960
  });
  const point = { x: 451, y: 241 };
  const point1 = { x: 553, y: 222 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('split_mass_032.geom', geometryDir);
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('split_mass_032_1.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  await page.locator('#canvas').press('Control+a');
  await page.getByRole('img', { name: 'delete_icon' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 517,
      y: 202
    }
  });
  await page.getByRole('img', { name: 'delete_icon' }).click();
  await reset2DCameraVersion0(page);
});

/**
 * @id Split mass_033
 * @description After uploading the CAD,Check user able to split the mass drawn on the ground storey
 * @steps
 *  1.Create new Project
 *  2.Upload CAD
 *  3.Draw the ( Line/ Arc) mass on the ground storey
 *  4.Spilt the masses using Draw tool
 * @expected After uploading the CAD User should able to split the mass drawn on the ground storey
 */
test('Split mass_033', async () => {
  await page.getByRole('img', { name: 'storey_down' }).nth(1).click();
  await page.getByRole('button', { name: 'Create new storey below' }).click();
  await page.getByText('-1', { exact: true }).click();
  await page.locator("//*[text()='Import']").click();
  await page.locator('#importInput').setInputFiles(path.join(__dirname, 'Split mass_032.dwg'));
  await page.getByRole('button', { name: 'Import' }).click();
  await page.waitForSelector("//*[text()='Import Successful']", {
    state: 'attached',
    timeout: 60000
  });
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'zoomOut' }).click();
  for (let i = 0; i <= 33; i++) {
    await page.locator('#canvas').click({
      position: {
        x: 453,
        y: 282
      }
    });
  }
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 465,
      y: 193
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 467,
      y: 120
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 543,
      y: 121
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 543,
      y: 191
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 471,
      y: 191
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 570,
      y: 182
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 569,
      y: 253
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 576,
      y: 219
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 650,
      y: 251
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 613,
      y: 258
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 651,
      y: 181
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 647,
      y: 223
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 569,
      y: 183
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 606,
      y: 172
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 464,
      y: 161
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 538,
      y: 155
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 577,
      y: 214
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 652,
      y: 217
    }
  });
  await expect(page).toHaveCanvasSnapshot('split_mass_033.png', {
    maxDiffPixels: 960
  });
  const point = { x: 519, y: 177 };
  const point1 = { x: 616, y: 232 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('split_mass_033.geom', geometryDir);
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('split_mass_033_1.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  await page.locator('#canvas').press('Control+a');
  await page.getByRole('img', { name: 'delete_icon' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 517,
      y: 202
    }
  });
  await page.getByRole('img', { name: 'delete_icon' }).click();
  await reset2DCameraVersion0(page);
});

/**
 * @id Split mass_034
 * @description After uploading the CAD,Check user able to split the mass drawn on the upper storey
 * @steps
 *  1.Create new Project
 *  2.Upload CAD
 *  3.Draw the ( Line/ Arc) mass on the upper storey
 *  4.Spilt the masses using Draw tool
 * @expected After uploading the CAD User should able to split the mass drawn on the upper storey
 */
test('Split mass_034', async () => {
  await page.getByRole('img', { name: 'storey_down' }).first().click();
  await page.getByRole('button', { name: 'Create new storey above' }).click();
  await page.getByText('2', { exact: true }).click();
  await page.locator("//*[text()='Import']").click();
  await page.locator('#importInput').setInputFiles(path.join(__dirname, 'Split mass_032.dwg'));
  await page.getByRole('button', { name: 'Import' }).click();
  await page.waitForSelector("//*[text()='Import Successful']", {
    state: 'attached',
    timeout: 60000
  });
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'zoomOut' }).click();
  for (let i = 0; i <= 33; i++) {
    await page.locator('#canvas').click({
      position: {
        x: 453,
        y: 282
      }
    });
  }
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 552,
      y: 168
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 553,
      y: 113
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 635,
      y: 123
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 635,
      y: 173
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 558,
      y: 169
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 451,
      y: 185
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 445,
      y: 268
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 459,
      y: 229
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 545,
      y: 265
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 505,
      y: 283
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 543,
      y: 187
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 537,
      y: 228
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 449,
      y: 187
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 489,
      y: 164
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 463,
      y: 221
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 532,
      y: 220
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 595,
      y: 115
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 595,
      y: 168
    }
  });
  await expect(page).toHaveCanvasSnapshot('split_mass_034.png', {
    maxDiffPixels: 960
  });
  const point = { x: 491, y: 262 };
  const point1 = { x: 571, y: 149 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('split_mass_034.geom', geometryDir);
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('split_mass_034_1.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  await page.locator('#canvas').press('Control+a');
  await page.getByRole('img', { name: 'delete_icon' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 517,
      y: 202
    }
  });
  await page.getByRole('img', { name: 'delete_icon' }).click();
  await reset2DCameraVersion0(page);
});

/**
 * @id Split mass_035
 * @description Check user able to split the mass after upload PDF
 * @steps
 *  1.Create new Project
 *  2.Upload PDF
 *  3.Draw ( Line/ Arc) mass
 *  4.Spilt the mass
 *   a. split the line mass using draw tool
 *   b. Split he Arc mass using Arc tool
 * @expected User should able to split the mass after upload PDF
 */
test('Split mass_035', async () => {
  await page.locator("//*[text()='Import']").click();
  await page.locator('#importInput').setInputFiles(path.join(__dirname, 'Split mass_035.pdf'));
  await page.getByRole('button', { name: 'Import' }).click();
  await page.waitForSelector("//*[text()='Import Successful']", {
    state: 'attached',
    timeout: 60000
  });
  await page.getByRole('button', { name: 'Done' }).click();
  await page.waitForTimeout(2000);
  await page.locator('#canvas').click({
    position: {
      x: 219,
      y: 331
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 223,
      y: 207
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 413,
      y: 209
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 417,
      y: 324
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 219,
      y: 331
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 547,
      y: 181
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 552,
      y: 356
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 563,
      y: 259
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 714,
      y: 356
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 636,
      y: 378
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 721,
      y: 189
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 700,
      y: 276
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 552,
      y: 183
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 602,
      y: 162
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 629,
      y: 158
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 633,
      y: 259
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 614,
      y: 225
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 637,
      y: 297
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 622,
      y: 294
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 716,
      y: 354
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 675,
      y: 345
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 313,
      y: 205
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 319,
      y: 332
    }
  });
  await expect(page).toHaveCanvasSnapshot('split_mass_035.png', {
    maxDiffPixels: 960
  });
  const point = { x: 281, y: 278 };
  const point1 = { x: 650, y: 233 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('split_mass_035.geom', geometryDir);
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('split_mass_035_1.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  await page.locator('#canvas').press('Control+a');
  await page.getByRole('img', { name: 'delete_icon' }).click();
  await reset2DCameraVersion0(page);
});

/**
 * @id Split mass_036
 * @description After uploading the PDF,Check user able to split the mass drawn on the upper storey
 * @steps
 *  1.Create new Project
 *  2.Upload PDF
 *  3.Draw ( Line/ Arc) mass on the upper storey
 *  4.Spilt the masses using Draw tool
 * @expected After uploading the PDF User should able to split the mass drawn on the upper storey
 */
test('Split mass_036', async () => {
  await page.getByRole('img', { name: 'storey_down' }).first().click();
  await page.getByRole('button', { name: 'Create new storey above' }).click();
  await page.getByText('2', { exact: true }).click();
  await page.locator("//*[text()='Import']").click();
  await page.locator('#importInput').setInputFiles(path.join(__dirname, 'Split mass_035.pdf'));
  await page.getByRole('button', { name: 'Import' }).click();
  await page.waitForSelector("//*[text()='Import Successful']", {
    state: 'attached',
    timeout: 60000
  });
  await page.getByRole('button', { name: 'Done' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 230,
      y: 329
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 235,
      y: 199
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 432,
      y: 212
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 433,
      y: 329
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 227,
      y: 335
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 574,
      y: 185
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 575,
      y: 355
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 588,
      y: 276
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 769,
      y: 355
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 671,
      y: 377
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 763,
      y: 191
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 759,
      y: 271
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 579,
      y: 187
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 667,
      y: 163
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 669,
      y: 164
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 669,
      y: 265
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 659,
      y: 239
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 692,
      y: 306
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 675,
      y: 302
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 768,
      y: 356
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 741,
      y: 349
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 333,
      y: 198
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 332,
      y: 333
    }
  });
  await expect(page).toHaveCanvasSnapshot('split_mass_036.png', {
    maxDiffPixels: 960
  });
  const point = { x: 390, y: 260 };
  const point1 = { x: 716, y: 233 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('split_mass_036.geom', geometryDir);
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('split_mass_036_1.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  await page.locator('#canvas').press('Control+a');
  await page.getByRole('img', { name: 'delete_icon' }).click();
  await reset2DCameraVersion0(page);
});

/**
 * @id Split mass_037
 * @description Check user able to split the mass after upload topography
 * @steps
 *  1.Create new Project
 *  2.Import Topography
 *  3.Draw ( Line/ Arc) mass
 *  4.Spilt the mass
 *   a. split the line mass using draw tool
 *   b. Split he Arc mass using Arc tool
 *
 * @expected User should able to split the mass after upload topography
 */
test('Split mass_037', async () => {
  test.setTimeout(350000);
  await page.locator("//*[text()='Import']").click();
  await page.getByRole('button', { name: 'Load Topography' }).click();
  await page.getByRole('button', { name: 'Load Topography' }).click();
  await page.getByRole('img', { name: 'zoomOut' }).click();
  for (let i = 0; i <= 33; i++) {
    await page.locator('#canvas').click({
      position: {
        x: 535,
        y: 339
      }
    });
  }
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 317,
      y: 408
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 315,
      y: 247
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 509,
      y: 239
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 507,
      y: 414
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 311,
      y: 408
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 683,
      y: 199
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 679,
      y: 407
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 701,
      y: 320
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 891,
      y: 409
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 811,
      y: 430
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 884,
      y: 203
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 874,
      y: 291
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 682,
      y: 197
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 747,
      y: 166
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 784,
      y: 160
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 785,
      y: 302
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 767,
      y: 248
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 806,
      y: 362
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 783,
      y: 353
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 898,
      y: 408
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 841,
      y: 387
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 322,
      y: 323
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 506,
      y: 333
    }
  });
  await expect(page).toHaveCanvasSnapshot('split_mass_037.png', {
    maxDiffPixels: 960
  });
  const point = { x: 425, y: 300 };
  const point1 = { x: 843, y: 285 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('split_mass_037.geom', geometryDir);
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('split_mass_037_1.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  await page.locator('#canvas').press('Control+a');
  await page.getByRole('img', { name: 'delete_icon' }).click();
  await reset2DCameraVersion0(page);
});

/**
 * @id Split mass_038
 * @description After importing the topography,Verify that the user can split the mass drawn on a top of the topography
 * @steps
 *  1.Create new Project
 *  2.Upload topography
 *  3.Draw ( Line/ Arc) mass on a top of the topography
 *  4.Spilt the masses using Draw tool
 * @expected  User should be able to split the mass drawn on top of the topography
 */
test('Split mass_038', async () => {
  test.setTimeout(350000);
  await page.locator("//*[text()='Import']").click();
  await page.getByRole('button', { name: 'Load Topography' }).click();
  await page.getByRole('button', { name: 'Load Topography' }).click();
  await page.getByRole('img', { name: 'zoomOut' }).click();
  for (let i = 0; i <= 33; i++) {
    await page.locator('#canvas').click({
      position: {
        x: 535,
        y: 339
      }
    });
  }
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 256,
      y: 403
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 248,
      y: 274
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 448,
      y: 271
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 460,
      y: 403
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 265,
      y: 407
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 568,
      y: 236
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 582,
      y: 400
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 578,
      y: 329
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 735,
      y: 399
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 662,
      y: 424
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 755,
      y: 234
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 724,
      y: 324
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 568,
      y: 239
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 641,
      y: 218
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 347,
      y: 274
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 358,
      y: 406
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 576,
      y: 321
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 724,
      y: 315
    }
  });
  await expect(page).toHaveCanvasSnapshot('split_mass_038.png', {
    maxDiffPixels: 960
  });
  const point = { x: 306, y: 334 };
  const point1 = { x: 646, y: 284 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('split_mass_038.geom', geometryDir);
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('split_mass_038_1.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  await page.locator('#canvas').press('Control+a');
  await page.getByRole('img', { name: 'delete_icon' }).click();
  await reset2DCameraVersion0(page);
});

/**
 * @id Split mass_039
 * @description After importing the topography,Verify that the user can split the elevated mass drawn on top of the topography
 * @steps
 *  1.Create new Project
 *  2.Upload topography
 *  3.Draw the elevated ( Line/ Arc) mass on a top of the topography
 *  4. Split the mass by selecting the object type as Space
 *   a. split the line mass using draw tool
 *   b. Split he Arc mass using Arc tool
 * @expected  User should be able to split the elevated mass drawn on top of the topography
 */
test('Split mass_039', async () => {
  test.setTimeout(600000);
  await page.locator("//*[text()='Import']").click();
  await page.getByRole('button', { name: 'Load Topography' }).click();
  await page.getByRole('dialog').locator('img').nth(1).click();
  await page.getByRole('button', { name: 'Load Topography' }).click();
  await page.getByRole('img', { name: 'zoomOut' }).click();
  for (let i = 0; i <= 33; i++) {
    await page.locator('#canvas').click({
      position: {
        x: 535,
        y: 339
      }
    });
  }
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 324,
      y: 371
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 327,
      y: 244
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 507,
      y: 247
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 516,
      y: 367
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 325,
      y: 370
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 631,
      y: 215
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 640,
      y: 371
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 644,
      y: 294
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 800,
      y: 369
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 713,
      y: 392
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 788,
      y: 219
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 790,
      y: 304
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 627,
      y: 215
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 698,
      y: 196
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 719,
      y: 196
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 745,
      y: 288
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 751,
      y: 259
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 734,
      y: 343
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 753,
      y: 326
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 632,
      y: 373
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 704,
      y: 369
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 413,
      y: 246
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 423,
      y: 370
    }
  });
  await expect(page).toHaveCanvasSnapshot('split_mass_039.png', {
    maxDiffPixels: 960
  });
  await page.locator('#canvas').press('Control+a');
  await page.getByRole('img', { name: 'delete_icon' }).click();
  await reset2DCameraVersion0(page);
});

/**
 * @id Split mass_040
 * @description After importing the topography,Verify that the user able to split the beside drawn mass on the topography
 * @steps
 *  1.Create new Project
 *  2.Upload topography
 *  3.Draw ( Line/ Arc) mass on beside of the topography
 *  4. Split the mass by selecting the object type as Space
 *   a. split the line mass using draw tool
 *   b. Split he Arc mass using Arc tool
 * @expected  User should be able to split the beside drawn mass on the topography
 */
test('Split mass_040', async () => {
  test.setTimeout(350000);
  await page.locator("//*[text()='Import']").click();
  await page.getByRole('button', { name: 'Load Topography' }).click();
  await page.getByRole('button', { name: 'Load Topography' }).click();
  await page.getByRole('img', { name: 'zoomOut' }).click();
  for (let i = 0; i <= 60; i++) {
    await page.locator('#canvas').click({
      position: {
        x: 535,
        y: 339
      }
    });
  }
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 232,
      y: 264
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 235,
      y: 150
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 390,
      y: 163
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 397,
      y: 267
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 232,
      y: 264
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 256,
      y: 375
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 253,
      y: 496
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 262,
      y: 436
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 375,
      y: 496
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 317,
      y: 511
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 379,
      y: 376
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 368,
      y: 440
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 251,
      y: 373
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 313,
      y: 358
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 317,
      y: 359
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 327,
      y: 440
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 305,
      y: 411
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 342,
      y: 480
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 332,
      y: 480
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 371,
      y: 502
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 366,
      y: 492
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 306,
      y: 155
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 314,
      y: 262
    }
  });
  await expect(page).toHaveCanvasSnapshot('split_mass_040.png', {
    maxDiffPixels: 960
  });
  const point = { x: 267, y: 219 };
  const point1 = { x: 324, y: 404 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('split_mass_040.geom', geometryDir);
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('split_mass_040_1.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  await page.locator('#canvas').press('Control+a');
  await page.getByRole('img', { name: 'delete_icon' }).click();
  await reset2DCameraVersion0(page);
});
