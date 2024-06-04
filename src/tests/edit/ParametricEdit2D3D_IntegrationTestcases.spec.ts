import { expect, test } from '../../common/fixtures.js';
import { Page } from '@playwright/test';
import { initProject, configure2DProjectForTestV0 } from '../../common/project.js';
import { clearCanvas } from '../../common/canvas.js';
import { createGeometryDir, getGeometry, getSnaptrudeDS } from '../../common/geometry.js';
import { setCameraPosition } from '../../common/camera';

test.describe('ParametricEdit2D&3D', () => {
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
  //Parametric Edit_0011
  test('EditLinearMassAfterStoreyCopy', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 244,
        y: 254
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 245,
        y: 352
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 436,
        y: 359
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 438,
        y: 255
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 244,
        y: 254
      }
    });
    await page.getByRole('img', { name: 'pointer' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 403,
        y: 273
      }
    });
    await page.getByRole('img', { name: 'storey_down' }).first().click();
    await page.getByRole('button', { name: 'Copy selection above' }).click();
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 361,
        y: 350
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 361,
        y: 421
      }
    });
    const Point = { x: 396, y: 278 };
    const actualGeometry = await getGeometry(page, Point);
    await expect(actualGeometry).toHaveGeometryV0(
      'EditLinearMassAfterStoreyCopy.geom',
      geometryDir
    );
    await expect(page).toHaveCanvasSnapshot('EditLinearMassAfterStoreyCopy.png', {
      maxDiffPixels: 960
    });
    let Component = await getSnaptrudeDS(page, Point);
    expect(Component.type).toBe('Mass');
    await page.getByText('2', { exact: true }).click();
    await page.getByRole('img', { name: 'pointer' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 396,
        y: 278
      }
    });
    await page.getByRole('img', { name: 'delete_icon' }).click();
    await page.locator('div').filter({ hasText: /^1$/ }).nth(4).click();
  });
  //Parametric Edit_0012
  test('EditAngledMassAfterStoreyCopy', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 203,
        y: 244
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 188,
        y: 399
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 338,
        y: 348
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 204,
        y: 249
      }
    });
    await page.getByRole('img', { name: 'pointer' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 297,
        y: 356
      }
    });
    await page.getByRole('img', { name: 'storey_down' }).first().click();
    await page.getByRole('button', { name: 'Copy selection above' }).click();
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 268,
        y: 380
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 285,
        y: 443
      }
    });
    const Point = { x: 297, y: 356 };
    const actualGeometry = await getGeometry(page, Point);
    await expect(actualGeometry).toHaveGeometryV0(
      'EditAngledMassAfterStoreyCopy.geom',
      geometryDir
    );
    //await expect(page).toHaveCanvasSnapshot(
    //   'EditAngledMassAfterStoreyCopy.png',
    //   {
    //     maxDiffPixels: 960
    //   }
    // );
    let Component = await getSnaptrudeDS(page, Point);
    expect(Component.type).toBe('Mass');
    await page.getByText('2', { exact: true }).click();
    await page.getByRole('img', { name: 'pointer' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 234,
        y: 339
      }
    });
    await page.getByRole('img', { name: 'delete_icon' }).click();
    await page.locator('p').filter({ hasText: '1' }).click();
  });
  //Parametric Edit_0013
  /*
  While editing 2 edge arc mass, after storey copy, mass deformed.
  Bug Id: ST-3434
  */
  test.skip('EditArcMassAfterStoreyCopy', async () => {
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 217,
        y: 247
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 371,
        y: 243
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 299,
        y: 211
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 374,
        y: 430
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 213,
        y: 420
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 290,
        y: 473
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 215,
        y: 255
      }
    });
    await page.getByRole('img', { name: 'pointer' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 311,
        y: 247
      }
    });
    await page.getByRole('img', { name: 'storey_down' }).first().click();
    await page.getByRole('button', { name: 'Copy selection above' }).click();
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 287,
        y: 472
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 316,
        y: 485
      }
    });
  });

  //Parametric Edit_0014
  test('EditLinePlusArcMassAfterStoreyCopy', async () => {
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 274,
        y: 277
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 497,
        y: 282
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 383,
        y: 203
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 277,
        y: 280
      }
    });
    await page.getByRole('img', { name: 'pointer' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 435,
        y: 243
      }
    });
    await page.getByRole('img', { name: 'storey_down' }).first().click();
    await page.getByRole('button', { name: 'Copy selection above' }).click();
    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('img', { name: 'pushpull' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 693,
        y: 253
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 642,
        y: 267
      }
    });
    const Point1 = { x: 590, y: 221 };
    const actualGeometry1 = await getGeometry(page, Point1);
    await expect(actualGeometry1).toHaveGeometryV0(
      'EditLinePlusArcMassAfterStoreyCopy1.geom',
      geometryDir
    );
    const Point2 = { x: 572, y: 374 };
    const actualGeometry2 = await getGeometry(page, Point2);
    await expect(actualGeometry2).toHaveGeometryV0(
      'EditLinePlusArcMassAfterStoreyCopy2.geom',
      geometryDir
    );
    //await expect(page).toHaveCanvasSnapshot(
    //   'EditLinePlusArcMassAfterStoreyCopy.png',
    //   {
    //     maxDiffPixels: 960
    //   }
    // );
    let Component = await getSnaptrudeDS(page, Point1);
    expect(Component.type).toBe('Mass');
    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
    await page.waitForTimeout(300);
    await page.locator("//*[@data-tooltip-id='storey-2']").click();
    await page.locator('#canvas').click({
      position: {
        x: 370,
        y: 233
      }
    });
    await page.getByRole('img', { name: 'delete_icon' }).click();
    await page.locator('p').filter({ hasText: '1' }).click();
  });
  //Parametric Edit_0015
  test('EditCircularMassAfterStoreyCopy', async () => {
    await page.getByRole('img', { name: 'drawCircle' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 164,
        y: 228
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 205,
        y: 241
      }
    });
    await page.getByRole('img', { name: 'pointer' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 195,
        y: 219
      }
    });
    await page.getByRole('img', { name: 'storey_down' }).first().click();
    await page.getByRole('button', { name: 'Copy selection above' }).click();
    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('img', { name: 'pushpull' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 659,
        y: 209
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 671,
        y: 287
      }
    });
    //await expect(page).toHaveCanvasSnapshot(
    //   'EditCircularMassAfterStoreyCopy.png',
    //   {
    //     maxDiffPixels: 960
    //   }
    // );
    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
    await page.waitForTimeout(300);
    await page.locator("//*[@data-tooltip-id='storey-2']").click();
    await page.getByRole('img', { name: 'pointer' }).click();

    await page.locator('#canvas').click({
      position: {
        x: 179,
        y: 249
      }
    });
    await page.getByRole('img', { name: 'delete_icon' }).click();
    await page.locator('p').filter({ hasText: '1' }).click();
    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
    await page.waitForTimeout(300);
  });
  //Parametric Edit_0016
  test('Edit3DLinearMassOnTopFace', async () => {
    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
    const camPos = {
      position: {
        _x: 109.11920087683933,
        _y: 72.74613391789288,
        _z: -62.999999999999936
      },
      alpha: -0.5235987755982983,
      beta: 1.0471975511965976,
      radius: 141.77988009018995,
      target: {
        _x: 2.784290809196847,
        _y: 1.8561938727978884,
        _z: -1.607511048191995
      },
      isOrtho: false,
      orthoLeft: -130.66713034926278,
      orthoRight: 130.66713034926278,
      orthoBottom: -73.50026082146032,
      orthoTop: 73.50026082146032
    };
    await setCameraPosition(page, camPos);
    await page.waitForTimeout(300);
    await page.locator('#canvas').click({
      position: {
        x: 416,
        y: 440
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 445,
        y: 508
      }
    });

    await page.locator('#canvas').click({
      position: {
        x: 619,
        y: 442
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 573,
        y: 390
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 421,
        y: 432
      }
    });
    await page.getByRole('img', { name: 'pushpull' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 518,
        y: 381
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 502,
        y: 322
      }
    });
    const Point1 = { x: 469, y: 380 };
    const actualGeometry1 = await getGeometry(page, Point1);
    await expect(actualGeometry1).toHaveGeometryV0('Edit3DLinearMassOnTopFace.geom', geometryDir);
    await expect(page).toHaveCanvasSnapshot('Edit3DLinearMassOnTopFace.png', {
      maxDiffPixels: 960
    });
    let Component = await getSnaptrudeDS(page, Point1);
    expect(Component.type).toBe('Mass');
    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
    await page.waitForTimeout(300);
  });
  //Parametric Edit_0017
  test('Edit3DAngularMassOnTopFace', async () => {
    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
    await page.waitForTimeout(300);
    await page.locator('#canvas').click({
      position: {
        x: 520,
        y: 410
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 473,
        y: 527
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 647,
        y: 468
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 526,
        y: 411
      }
    });
    await page.getByRole('img', { name: 'pushpull' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 566,
        y: 398
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 549,
        y: 325
      }
    });
    const Point = { x: 520, y: 433 };
    const actualGeometry = await getGeometry(page, Point);
    await expect(actualGeometry).toHaveGeometryV0('Edit3DAngularMassOnTopFace.geom', geometryDir);
    await expect(page).toHaveCanvasSnapshot('Edit3DAngularMassOnTopFace.png', {
      maxDiffPixels: 960
    });
    let Component = await getSnaptrudeDS(page, Point);
    expect(Component.type).toBe('Mass');
    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
    await page.waitForTimeout(300);
  });
  //Parametric Edit_0018
  test('Edit3DArcMassOnTopFace', async () => {
    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 486,
        y: 450
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 623,
        y: 413
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 581,
        y: 483
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 488,
        y: 449
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 538,
        y: 446
      }
    });
    await page.getByRole('img', { name: 'pushpull' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 560,
        y: 389
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 555,
        y: 328
      }
    });
    const Point = { x: 538, y: 373 };
    const actualGeometry = await getGeometry(page, Point);
    await expect(actualGeometry).toHaveGeometryV0('Edit3DArcMassOnTopFace.geom', geometryDir);
    //await expect(page).toHaveCanvasSnapshot('Edit3DArcMassOnTopFace.png', {
    //   maxDiffPixels: 960
    // });
    let Component = await getSnaptrudeDS(page, Point);
    expect(Component.type).toBe('Mass');
    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
    await page.waitForTimeout(300);
  });
  //Parametric Edit_0019
  test('Edit3DArcPlusLineMassOnTopFace', async () => {
    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 488,
        y: 451
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 617,
        y: 418
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 534,
        y: 400
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 491,
        y: 443
      }
    });
    await page.getByRole('img', { name: 'pushpull' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 523,
        y: 360
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 513,
        y: 292
      }
    });
    const Point = { x: 567, y: 386 };
    const actualGeometry = await getGeometry(page, Point);
    await expect(actualGeometry).toHaveGeometryV0(
      'Edit3DArcPlusLineMassOnTopFace.geom',
      geometryDir
    );
    //await expect(page).toHaveCanvasSnapshot(
    //   'Edit3DArcPlusLineMassOnTopFace.png',
    //   {
    //     maxDiffPixels: 960
    //   }
    // );
    let Component = await getSnaptrudeDS(page, Point);
    expect(Component.type).toBe('Mass');
    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
    await page.waitForTimeout(300);
  });
  //Parametric Edit_0020
  test('Edit3DCircularMassOnTopFace', async () => {
    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('img', { name: 'drawCircle' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 541,
        y: 426
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 583,
        y: 450
      }
    });
    await page.getByRole('img', { name: 'pushpull' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 511,
        y: 360
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 504,
        y: 253
      }
    });
    //await expect(page).toHaveCanvasSnapshot('Edit3DCircularMassOnTopFace.png', {
    //   maxDiffPixels: 960
    // });
  });
});
