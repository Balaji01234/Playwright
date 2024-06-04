import { expect, test } from '../../common/fixtures';
import { Page } from '@playwright/test';
import { initProject, configure2DProjectForTestV0 } from '../../common/project';
import { clearCanvas } from '../../common/canvas';
import { createGeometryDir, getGeometry, getSnaptrudeDS } from '../../common/geometry';

test.describe('ParametricEdit2DEdge', () => {
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
  test('Edit2DOnStraightEdgeMass', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 254,
        y: 242
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 254,
        y: 423
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 500,
        y: 421
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 486,
        y: 240
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 259,
        y: 257
      }
    });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 504,
        y: 338
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 603,
        y: 335
      }
    });
    const point = { x: 461, y: 258 };
    const actualGeometry = await getGeometry(page, point);
    await expect(actualGeometry).toHaveGeometryV0('Edit2DOnStraightEdgeMass.geom', geometryDir);
    let Component = await getSnaptrudeDS(page, point);
    expect(Component.type).toBe('Mass');
    await expect(page).toHaveCanvasSnapshot('Edit2DOnStraightEdgeMass.png', {
      maxDiffPixels: 960
    });
  });
  test('Edit2DOnAngledMassEdge', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 221,
        y: 371
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 405,
        y: 366
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 305,
        y: 293
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 220,
        y: 270
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 218,
        y: 369
      }
    });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 353,
        y: 320
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 438,
        y: 279
      }
    });
    const point = { x: 415, y: 312 };
    const actualGeometry = await getGeometry(page, point);
    await expect(actualGeometry).toHaveGeometryV0('Edit2DOnAngledEdgeMass.geom', geometryDir);
    let Component = await getSnaptrudeDS(page, point);
    expect(Component.type).toBe('Mass');
    await expect(page).toHaveCanvasSnapshot('Edit2DOnAngledEdgeMass.png', {
      maxDiffPixels: 960
    });
  });
  test('Edit2DOnArcMassEdge', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 374,
        y: 437
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 389,
        y: 274
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 621,
        y: 274
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 614,
        y: 390
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 639,
        y: 384
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 470,
        y: 435
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 489,
        y: 390
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 374,
        y: 434
      }
    });
    const point = { x: 490, y: 302 };
    const actualGeometry = await getGeometry(page, point);
    await expect(actualGeometry).toHaveGeometryV0('Edit2DOnArcEdgeMass.geom', geometryDir);
    let Component = await getSnaptrudeDS(page, point);
    expect(Component.type).toBe('Mass');
    await expect(page).toHaveCanvasSnapshot('Edit2DOnArcEdgeMass.png', {
      maxDiffPixels: 960
    });
  });
  test('Edit2DOnStraightPlusArcMassEdge', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 286,
        y: 372
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 288,
        y: 195
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 512,
        y: 196
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 549,
        y: 258
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 418,
        y: 370
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 494,
        y: 338
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 289,
        y: 367
      }
    });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 509,
        y: 322
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 567,
        y: 309
      }
    });
    const point = { x: 402, y: 227 };
    const actualGeometry = await getGeometry(page, point);
    await expect(actualGeometry).toHaveGeometryV0(
      'Edit2DOnStraightPlusArcEdgeMass.geom',
      geometryDir
    );
    let Component = await getSnaptrudeDS(page, point);
    expect(Component.type).toBe('Mass');
    await expect(page).toHaveCanvasSnapshot('Edit2DOnStraightPlusArcEdgeMass.png', {
      maxDiffPixels: 960
    });
  });
  test('EditOn2DMassVertices', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 158,
        y: 264
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 165,
        y: 369
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 284,
        y: 367
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 284,
        y: 261
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 159,
        y: 264
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 498,
        y: 264
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 502,
        y: 357
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 677,
        y: 366
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 675,
        y: 267
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 500,
        y: 265
      }
    });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 281,
        y: 266
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 329,
        y: 262
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 679,
        y: 356
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 745,
        y: 358
      }
    });
    const point1 = { x: 273, y: 276 };
    const actualGeometry1 = await getGeometry(page, point1);
    await expect(actualGeometry1).toHaveGeometryV0('EditOn2DVerticesMass1.geom', geometryDir);
    const point2 = { x: 533, y: 315 };
    const actualGeometry2 = await getGeometry(page, point2);
    await expect(actualGeometry2).toHaveGeometryV0('EditOn2DVerticesMass2.geom', geometryDir);
    let Component = await getSnaptrudeDS(page, point1);
    expect(Component.type).toBe('Mass');
    await expect(page).toHaveCanvasSnapshot('EditOn2DVerticesMass.png', {
      maxDiffPixels: 960
    });
  });
  test('EditOn2DStraightMassEdgeAfterCopy', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 227,
        y: 247
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 225,
        y: 365
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 346,
        y: 368
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 350,
        y: 243
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 234,
        y: 248
      }
    });
    await page.getByRole('img', { name: 'copy' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 300,
        y: 306
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 590,
        y: 302
      }
    });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 634,
        y: 295
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 692,
        y: 292
      }
    });
    const point1 = { x: 306, y: 258 };
    const actualGeometry1 = await getGeometry(page, point1);
    await expect(actualGeometry1).toHaveGeometryV0(
      'EditOn2DStraightEdgeMassAfterCopy1.geom',
      geometryDir
    );
    const point2 = { x: 587, y: 254 };
    const actualGeometry2 = await getGeometry(page, point2);
    await expect(actualGeometry2).toHaveGeometryV0(
      'EditOn2DStraightEdgeMassAfterCopy2.geom',
      geometryDir
    );
    let Component = await getSnaptrudeDS(page, point1);
    expect(Component.type).toBe('Mass');
    await expect(page).toHaveCanvasSnapshot('EditOn2DStraightEdgeMassAfterCopy.png', {
      maxDiffPixels: 960
    });
  });
  test('EditOn2DAngledMassEdgeAfterCopy', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 282,
        y: 230
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 230,
        y: 318
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 350,
        y: 315
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 346,
        y: 460
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 417,
        y: 455
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 415,
        y: 281
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 377,
        y: 230
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 286,
        y: 227
      }
    });
    await page.getByRole('img', { name: 'copy' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 371,
        y: 307
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 646,
        y: 302
      }
    });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 542,
        y: 254
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 566,
        y: 259
      }
    });
    const point1 = { x: 350, y: 275 };
    const actualGeometry1 = await getGeometry(page, point1);
    await expect(actualGeometry1).toHaveGeometryV0(
      'EditOn2DAngledEdgeMassAfterCopy1.geom',
      geometryDir
    );
    const point2 = { x: 614, y: 261 };
    const actualGeometry2 = await getGeometry(page, point2);
    await expect(actualGeometry2).toHaveGeometryV0(
      'EditOn2DAngledEdgeMassAfterCopy2.geom',
      geometryDir
    );
    let Component = await getSnaptrudeDS(page, point1);
    expect(Component.type).toBe('Mass');
    await expect(page).toHaveCanvasSnapshot('EditOn2DAngledEdgeMassAfterCopy.png', {
      maxDiffPixels: 960
    });
  });
  test('EditOn2DArcMassEdgeAfterCopy', async () => {
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 273,
        y: 277
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 426,
        y: 276
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 355,
        y: 205
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 430,
        y: 395
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 395,
        y: 361
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 272,
        y: 394
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 278,
        y: 410
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 269,
        y: 279
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 301,
        y: 287
      }
    });
    await page.getByRole('img', { name: 'copy' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 363,
        y: 288
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 658,
        y: 293
      }
    });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 685,
        y: 336
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 664,
        y: 336
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 622,
        y: 334
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 638,
        y: 334
      }
    });
    const point1 = { x: 345, y: 236 };
    const actualGeometry1 = await getGeometry(page, point1);
    await expect(actualGeometry1).toHaveGeometryV0(
      'EditOn2DArcMassEdgeAfterCopy1.geom',
      geometryDir
    );
    const point2 = { x: 622, y: 235 };
    const actualGeometry2 = await getGeometry(page, point2);
    await expect(actualGeometry2).toHaveGeometryV0(
      'EditOn2DArcMassEdgeAfterCopy2.geom',
      geometryDir
    );
    let Component = await getSnaptrudeDS(page, point1);
    expect(Component.type).toBe('Mass');
    await expect(page).toHaveCanvasSnapshot('EditOn2DArcMassEdgeAfterCopy.png', {
      maxDiffPixels: 960
    });
  });
  test('EditOn2DStraightPlusArcMassEdgeAfterCopy', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 204,
        y: 228
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 202,
        y: 429
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 357,
        y: 421
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 313,
        y: 461
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 357,
        y: 231
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 207,
        y: 230
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 254,
        y: 166
      }
    });
    await page.getByRole('img', { name: 'copy' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 282,
        y: 247
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 607,
        y: 245
      }
    });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 610,
        y: 465
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 609,
        y: 507
      }
    });
    const point1 = { x: 268, y: 212 };
    const actualGeometry1 = await getGeometry(page, point1);
    await expect(actualGeometry1).toHaveGeometryV0(
      'EditOn2DStraightPlusArcMassEdgeAfterCopy1.geom',
      geometryDir
    );
    const point2 = { x: 627, y: 201 };
    const actualGeometry2 = await getGeometry(page, point2);
    await expect(actualGeometry2).toHaveGeometryV0(
      'EditOn2DStraightPlusArcMassEdgeAfterCopy2.geom',
      geometryDir
    );
    let Component = await getSnaptrudeDS(page, point1);
    expect(Component.type).toBe('Mass');
    await expect(page).toHaveCanvasSnapshot('EditOn2DStraightPlusArcMassEdgeAfterCopy.png', {
      maxDiffPixels: 960
    });
  });
  test('EditOn2DCircularMassAfterCopy', async () => {
    await page.getByRole('img', { name: 'drawCircle' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 186,
        y: 256
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 204,
        y: 317
      }
    });
    await page.getByRole('img', { name: 'copy' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 174,
        y: 261
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 501,
        y: 260
      }
    });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
    await page.waitForTimeout(300);
    await page.locator('#canvas').click({
      position: {
        x: 754,
        y: 422
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 696,
        y: 538
      }
    });
    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
    await page.waitForTimeout(300);
    await expect(page).toHaveCanvasSnapshot('EditOn2DCircularMassAfterCopy.png', {
      maxDiffPixels: 960
    });
  });
});
