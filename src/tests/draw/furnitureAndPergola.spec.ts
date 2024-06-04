import { expect, test } from '../../common/fixtures';
import { Page } from '@playwright/test';
import { configure2DProjectForTestV0, initProject } from '../../common/project';
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
 * @id TC_DT_092
 * @description Check user able to Draw Furniture mass by using Furniture mass Object type or not
 * @steps
 *  1 Enter Url 2 Login 3 Create Project 4 Draw Furniture mass
 * @expected User should be able to Draw Furniture mass, by using object type asFurniture mass
 */
test('TC_DT_092', async () => {
  await page.getByRole('img', { name: 'Mass' }).click();
  await page.getByText('Facade element').click();
  await page.locator('.option >> text=Furniture').click();
  await page.locator('#canvas').click({
    position: {
      x: 390,
      y: 354
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 387,
      y: 271
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 387,
      y: 271
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 479,
      y: 273
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 479,
      y: 200
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 577,
      y: 197
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 585,
      y: 316
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 649,
      y: 313
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 649,
      y: 349
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 398,
      y: 355
    }
  });
  const point = { x: 501, y: 307 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab31' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab31' + '.png', {
    maxDiffPixels: 960
  });
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
  expect(component.massType).toBe('Furniture');
});

/**
 * @id TC_DT_093
 * @description Check user able to draw orthogonal Furniture mass, using object type as Furniture mass
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw line 4 Select Object type as Furniture mass 6 Draw orthogonal Furniture mass
 * @expected User should be able to draw orthogonal Furniture mass
 */
test('TC_DT_093', async () => {
  await page.getByRole('img', { name: 'Mass' }).click();
  await page.getByText('Facade element').click();
  await page.locator('.option >> text=Furniture').click();
  await page.locator('#canvas').click({
    position: {
      x: 389,
      y: 212
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 386,
      y: 367
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 563,
      y: 362
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 566,
      y: 306
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 454,
      y: 306
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 452,
      y: 216
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 393,
      y: 215
    }
  });
  const point = { x: 433, y: 313 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab32' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab32' + '.png', {
    maxDiffPixels: 960
  });
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
  expect(component.massType).toBe('Furniture');
});

/**
 * @id TC_DT_094
 * @description Check user able to draw Angular Furniture mass , using object type as Furniture mass
 * @steps
 *  1 Enter Url 2 Login 3 Create Project 4 Select Draw Tool 5 Select Object type as Furniture mass 6 Draw Angular Furniture mass
 * @expected User should be able to draw Angular Furniture mass
 */
test('TC_DT_094', async () => {
  await page.getByRole('img', { name: 'Mass' }).click();
  await page.getByText('Facade element').click();
  await page.locator('.option >> text=Furniture').click();
  await page.locator('#canvas').click({
    position: {
      x: 475,
      y: 268
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 408,
      y: 265
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 438,
      y: 215
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 531,
      y: 209
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 561,
      y: 261
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 564,
      y: 411
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 479,
      y: 418
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 478,
      y: 269
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 515,
      y: 333
    }
  });
  const point = { x: 515, y: 333 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab33' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab33' + '.png', {
    maxDiffPixels: 960
  });
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
  expect(component.massType).toBe('Furniture');
});

/**
 * @id TC_DT_101
 * @description Check user able to Draw Pergola Mass by using Pergola Mass Object type or not
 * @steps
 *  1 Enter Url 2 Login 3 Create Project 4 Draw Pergola Mass
 * @expected User should be able to Draw Pergola Mass, by using object type asPergola Mass
 */
test('TC_DT_101', async () => {
  await page.getByRole('img', { name: 'Mass' }).click();
  await page.getByText('Facade element').click();
  await page.locator('.option >> text=Pergola').click();
  await page.locator('#canvas').click({
    position: {
      x: 294,
      y: 283
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 292,
      y: 223
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 387,
      y: 221
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 392,
      y: 262
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 454,
      y: 258
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 454,
      y: 196
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 535,
      y: 189
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 542,
      y: 355
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 302,
      y: 355
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 295,
      y: 280
    }
  });
  const point = { x: 429, y: 323 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab34' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab34' + '.png', {
    maxDiffPixels: 960
  });
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
  expect(component.massType).toBe('Pergola');
});

/**
 * @id TC_DT_102
 * @description Check user able to draw orthogonal Pergola Mass, using object type as Pergola Mass
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw line 4 Select Object type as Pergola Mass 6 Draw orthogonal Pergola Mass
 * @expected User should be able to draw orthogonal Pergola Mass
 */
test('TC_DT_102', async () => {
  await page.getByRole('img', { name: 'Mass' }).click();
  await page.getByText('Facade element').click();
  await page.locator('.option >> text=Pergola').click();
  await page.locator('#canvas').click({
    position: {
      x: 306,
      y: 217
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 298,
      y: 392
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 504,
      y: 403
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 503,
      y: 327
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 370,
      y: 315
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 372,
      y: 219
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 308,
      y: 214
    }
  });
  const point = { x: 338, y: 334 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab35' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab35' + '.png', {
    maxDiffPixels: 960
  });
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
  expect(component.massType).toBe('Pergola');
});

/**
 * @id TC_DT_110
 * @description Check user able to Draw Generic Mass by using Generic Mass Object type or not
 * @steps
 *  1 Enter Url 2 Login 3 Create Project 4 Draw Generic Mass
 * @expected User should be able to Draw Generic Mass, by using object type asGeneric Mass
 */
test('TC_DT_110', async () => {
  await page.getByRole('img', { name: 'Mass' }).click();
  await page.getByText('Facade element').click();
  await page.locator('.option >> text=Generic').click();
  await page.locator('#canvas').click({
    position: {
      x: 378,
      y: 310
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 369,
      y: 239
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 449,
      y: 203
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 533,
      y: 236
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 523,
      y: 306
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 464,
      y: 343
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 380,
      y: 317
    }
  });
  const point = { x: 417, y: 284 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab36' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab36' + '.png', {
    maxDiffPixels: 960
  });
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
  expect(component.massType).toBe('Generic mass');
});

/**
 * @id TC_DT_111
 * @description Check user able to draw orthogonal Generic Mass, using object type as Generic Mass
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw line 4 Select Object type as Generic Mass 6 Draw orthogonal Generic Mass
 * @expected User should be able to draw orthogonal Generic Mass
 */
test('TC_DT_111', async () => {
  await page.getByRole('img', { name: 'Mass' }).click();
  await page.getByText('Facade element').click();
  await page.locator('.option >> text=Generic').click();
  await page.locator('#canvas').click({
    position: {
      x: 286,
      y: 188
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 270,
      y: 358
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 462,
      y: 379
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 460,
      y: 289
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 345,
      y: 284
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 356,
      y: 190
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 285,
      y: 186
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 400,
      y: 324
    }
  });
  const point = { x: 400, y: 324 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab37' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab37' + '.png', {
    maxDiffPixels: 960
  });
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
  expect(component.massType).toBe('Generic mass');
});

/**
 * @id TC_DT_112
 * @description Check user able to draw Angular Generic Mass , using object type as Generic Mass
 * @steps
 *  1 Enter Url 2 Login 3 Create Project 4 Select Draw Tool 5 Select Object type as Generic Mass 6 Draw Angular Generic Mass
 * @expected User should be able to draw Angular Generic Mass
 */
test('TC_DT_112', async () => {
  await page.getByRole('img', { name: 'Mass' }).click();
  await page.getByText('Facade element').click();
  await page.locator('.option >> text=Generic').click();
  await page.locator('#canvas').click({
    position: {
      x: 429,
      y: 240
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 366,
      y: 236
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 408,
      y: 184
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 477,
      y: 187
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 507,
      y: 235
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 503,
      y: 391
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 427,
      y: 399
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 425,
      y: 245
    }
  });
  const point = { x: 470, y: 321 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab38' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab38' + '.png', {
    maxDiffPixels: 960
  });
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
  expect(component.massType).toBe('Generic mass');
});

/**
 * @id TC_DT_119
 * @description check user able to draw a mass on the ground plane by using space object type in 3D
 * @steps
 *  1 Enter Url 2 Login 3 Create Project 4 Select Draw Tool 5 Select Object type as space 6 Draw space mass on the ground plane in 3D
 * @expected User should be able to draw mass on the ground plane
 */
test('TC_DT_119', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'storey_down' }).nth(1).click();
  await page.getByRole('button', { name: 'Create new storey below' }).click();
  await page.getByText('Space', { exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 542,
      y: 515
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 487,
      y: 452
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 572,
      y: 421
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 628,
      y: 485
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 543,
      y: 515
    }
  });
  const point = { x: 560, y: 410 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab39' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab39' + '.png', {
    maxDiffPixels: 960
  });
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_120
 * @description check user able to draw a mass on the upper storey plane by using space object type in 3D
 * @steps
 *  1 Enter Url 2 Login 3 Create Project 4 Select Draw Tool 5 Select Object type as space 6 Draw space mass on the upper storey plane in 3D
 * @expected User should be able to draw mass on the upper storey plane
 */
test('TC_DT_120', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'storey_down' }).first().click();
  await page.getByRole('button', { name: 'Create new storey above' }).click();
  await page.getByText('Space', { exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 492,
      y: 562
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 444,
      y: 502
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 512,
      y: 471
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 495,
      y: 437
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 565,
      y: 415
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 603,
      y: 469
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 645,
      y: 449
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 669,
      y: 483
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 493,
      y: 549
    }
  });
  const point = { x: 550, y: 408 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab40' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab40' + '.png', {
    maxDiffPixels: 960
  });
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});
