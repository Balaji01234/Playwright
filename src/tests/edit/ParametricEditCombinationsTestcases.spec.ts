import { expect, test } from '../../common/fixtures';
import { Page } from '@playwright/test';
import { initProject, configure2DProjectForTestV0, enableAutoSave } from '../../common/project';
import { clearCanvas } from '../../common/canvas';
import { createGeometryDir, getGeometry, getSnaptrudeDS } from '../../common/geometry';
import * as path from 'path';
import { reset2DCameraVersion0 } from '../../common/camera';

test.describe('ParametricEditWithCombinationsTC', () => {
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
   * @id Parametric Edit_0051
   * @description Check user is able to push/pull edit & edit on drawn mass in 2D/3D or not after remove vertex.
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw mass
   * 4.remove vertex the mass
   * 5.Select push/pull edit/edit tool
   * 6.push/pull edit/edit on mass
   *
   * @expected Users should be able to perform push/pull edits and regular edits on drawn mass in both 2D and 3D after remove vertex the object.
   */
  test('ParametricEdit_0051', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 416,
        y: 265
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 432,
        y: 439
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 639,
        y: 450
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 638,
        y: 266
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 417,
        y: 267
      }
    });
    await page.getByRole('img', { name: 'addLayer' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 526,
        y: 435
      }
    });
    await page.getByRole('img', { name: 'removeLayer' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 525,
        y: 439
      }
    });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 605,
        y: 443
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 607,
        y: 535
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 635,
        y: 370
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 749,
        y: 376
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 564,
        y: 263
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 574,
        y: 221
      }
    });
    const point = { x: 589, y: 256 };
    const actualGeometry = await getGeometry(page, point);
    await expect(actualGeometry).toHaveGeometryV0('ParametricEdit_0051.geom', geometryDir);
    let component = await getSnaptrudeDS(page, point);
    expect(component.type).toBe('Mass');
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_0051.png', {
      maxDiffPixels: 960
    });
  });

  /**
   * @id Parametric Edit_0052
   * @description Check user is able to push/pull edit & edit on drawn mass in 2D or not after split.
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw mass
   * 4.split
   * 5.Select push/pull edit/edit tool
   * 6.push/pull edit/edit on mass
   *
   * @expected Users should be able to perform push/pull edits and regular edits on drawn mass in 2D  after split
   */
  test('ParametricEdit_0052', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 324,
        y: 205
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 322,
        y: 383
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 589,
        y: 379
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 583,
        y: 212
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 320,
        y: 207
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 445,
        y: 204
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 448,
        y: 383
      }
    });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 517,
        y: 381
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 511,
        y: 450
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 415,
        y: 383
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 416,
        y: 423
      }
    });
    const point1 = { x: 434, y: 249 };
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_52.png', {
      maxDiffPixels: 960
    });
    const actualGeometry = await getGeometry(page, point1);
    await expect(actualGeometry).toHaveGeometryV0('ParametricEdit_52.geom', geometryDir);
    const point2 = { x: 551, y: 258 };
    const actualGeometry1 = await getGeometry(page, point2);
    await expect(actualGeometry1).toHaveGeometryV0('ParametricEdit_52(1).geom', geometryDir);
    const component = await getSnaptrudeDS(page, point1);
    await expect(component.type).toBe('Mass');
  });

  /**
   * @id Parametric Edit_0053
   * @description Check user is able to push/pull edit & edit on drawn mass in 3D or not after split face
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw mass
   * 4.split face
   * 5.Select push/pull edit/edit tool
   * 6.push/pull edit/edit on mass
   *
   * @expected Users should be able to perform push/pull edits and regular edits on drawn mass in 3D after split face
   */
  test('ParametricEdit_0053', async () => {
    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 429,
        y: 442
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 584,
        y: 390
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 661,
        y: 468
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 491,
        y: 539
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 425,
        y: 438
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 512,
        y: 349
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 575,
        y: 426
      }
    });
    await page.getByRole('img', { name: 'pushpull' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 576,
        y: 360
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 557,
        y: 266
      }
    });
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_53.png', {
      maxDiffPixels: 960
    });
    const point1 = { x: 626, y: 360 };
    const actualGeometry = await getGeometry(page, point1);
    await expect(actualGeometry).toHaveGeometryV0('ParametricEdit_53_1.geom', geometryDir);
    const point2 = { x: 533, y: 453 };
    const actualGeometry1 = await getGeometry(page, point2);
    await expect(actualGeometry1).toHaveGeometryV0('ParametricEdit_53_2.geom', geometryDir);
    const component = await getSnaptrudeDS(page, point1);
    await expect(component.type).toBe('Mass');
    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  });

  /**
   * @id Parametric Edit_0054
   * @description Check user is able to push/pull edit & edit on drawn mass in 2D/3D or not after import sketch
   *
   * @steps
   * 1.Create project
   * 2.Import sketch
   * 3.Select mass
   * 4.Draw mass
   * 5.Select push/pull edit/edit tool
   * 6.push/pull edit/edit on mass
   *
   * @expected Users should be able to perform push/pull edits and regular edits on drawn mass in 2D/3D after import sketch
   */
  test('ParametricEdit_0054', async () => {
    test.setTimeout(350000);
    await enableAutoSave(page);
    await page.getByText('Import').click();
    await page.locator('#importInput').setInputFiles(path.join(__dirname, 'image.jpg'));
    await page.locator("(//*[text()='Import'])[2]").click();
    await page.waitForSelector("//*[text()='Import Successful']", {
      state: 'attached',
      timeout: 60000
    });
    await page.getByRole('button', { name: 'Done' }).click();
    await page.locator('#close-import-image-toast').click();
    await page.locator('#canvas').click({
      position: {
        x: 532,
        y: 266
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 537,
        y: 352
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 628,
        y: 348
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 620,
        y: 267
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 534,
        y: 267
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 531,
        y: 350
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 457,
        y: 350
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 453,
        y: 423
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 570,
        y: 420
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 574,
        y: 354
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 572,
        y: 425
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 576,
        y: 478
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 648,
        y: 476
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 653,
        y: 349
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 627,
        y: 342
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 650,
        y: 410
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 733,
        y: 413
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 739,
        y: 473
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 650,
        y: 475
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 734,
        y: 412
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 725,
        y: 338
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 805,
        y: 340
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 817,
        y: 436
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 740,
        y: 442
      }
    });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 503,
        y: 420
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 504,
        y: 462
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 676,
        y: 413
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 673,
        y: 393
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 773,
        y: 437
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 778,
        y: 455
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 805,
        y: 411
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 818,
        y: 410
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 646,
        y: 367
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 677,
        y: 364
      }
    });
    const point1 = { x: 551, y: 334 };
    const actualGeometry = await getGeometry(page, point1);
    await expect(actualGeometry).toHaveGeometryV0('ParametricEdit_54_1.geom', geometryDir);
    const point2 = { x: 592, y: 375 };
    const actualGeometry1 = await getGeometry(page, point2);
    await expect(actualGeometry1).toHaveGeometryV0('ParametricEdit_54_2.geom', geometryDir);
    const point3 = { x: 766, y: 361 };
    const actualGeometry2 = await getGeometry(page, point3);
    await expect(actualGeometry2).toHaveGeometryV0('ParametricEdit_54_3.geom', geometryDir);
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_54.png', {
      maxDiffPixels: 960
    });
    const component = await getSnaptrudeDS(page, point1);
    await expect(component.type).toBe('Mass');
    await page.getByRole('img', { name: 'userimportedfiles' }).click();
    await page.getByRole('img', { name: 'delete', exact: true }).click();
    await page.getByRole('img', { name: 'userimportedfiles' }).click();
  });

  /**
   * @id Parametric Edit_0055
   * @description Check user is able to push/pull edit & edit on drawn mass in 2D/3D or not after import cad
   *
   * @steps
   * 1.Create project
   * 2.Import cad
   * 3.Select mass
   * 4.Draw mass
   * 5.Select push/pull edit/edit tool
   * 6.push/pull edit/edit on mass
   *
   * @expected Users should be able to perform push/pull edits and regular edits on drawn mass in 2D/3D after import cad
   */
  test('ParametricEdit_0055', async () => {
    test.setTimeout(350000);
    await enableAutoSave(page);
    await page.getByText('Import').click();
    await page.locator('#importInput').setInputFiles(path.join(__dirname, '1.dwg'));
    await page.getByRole('button', { name: 'Import' }).click();
    await page.waitForSelector("//*[text()='Import Successful']", {
      state: 'attached',
      timeout: 60000
    });
    await page.getByRole('button', { name: 'Done' }).click();
    await page.getByRole('img', { name: 'zoomOut' }).click();
    for (let i = 0; i <= 25; i++) {
      await page.locator('#canvas').click({
        position: {
          x: 500,
          y: 307
        }
      });
    }
    await page.waitForTimeout(3000);
    await page.getByRole('img', { name: 'pointer' }).click();
    await page.getByRole('img', { name: 'move', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 712,
        y: 235
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 719,
        y: 367
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 471,
        y: 323
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 442,
        y: 316
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 446,
        y: 400
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 547,
        y: 401
      }
    });

    await page.locator('#canvas').click({
      position: {
        x: 547,
        y: 350
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 511,
        y: 351
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 509,
        y: 320
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 477,
        y: 313
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 473,
        y: 324
      }
    });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 546,
        y: 371
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 579,
        y: 372
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 461,
        y: 323
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 464,
        y: 285
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 476,
        y: 317
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 469,
        y: 313
      }
    });
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_55.png', {
      maxDiffPixels: 960
    });
    const point = { x: 482, y: 357 };
    const component = await getSnaptrudeDS(page, point);
    await expect(component.type).toBe('Mass');
    const actualGeometry = await getGeometry(page, point);
    await expect(actualGeometry).toHaveGeometryV0('ParametricEdit_55.geom', geometryDir);
    await page.getByRole('img', { name: 'userimportedfiles' }).click();
    await page.locator('[id="\\31 "]').click();
    await page.getByRole('img', { name: 'delete', exact: true }).click();
    await page.getByRole('img', { name: 'userimportedfiles' }).click();
    await reset2DCameraVersion0(page);
  });

  /**
   * @id Parametric Edit_0056
   * @description Check user is able to push/pull edit & edit on drawn mass in 2D/3D or not after import pdf
   *
   * @steps
   * 1.Create project
   * 2.Import pdf
   * 3.Select mass
   * 4.Draw mass
   * 5.Select push/pull edit/edit tool
   * 6.push/pull edit/edit on mass
   *
   * @expected Users should be able to perform push/pull edits and regular edits on drawn mass in 2D/3D after import pdf
   */
  test('ParametricEdit_0056', async () => {
    await enableAutoSave(page);
    await page.getByText('Import').click();
    await page.locator('#importInput').setInputFiles(path.join(__dirname, 'Home-Plan.pdf'));
    await page.getByRole('button', { name: 'Import' }).click();
    await page.waitForSelector("//*[text()='Import Successful']", {
      state: 'attached',
      timeout: 60000
    });
    await page.getByRole('button', { name: 'Done' }).click();
    await page.getByRole('img', { name: 'zoomOut' }).click();
    for (let i = 0; i <= 7; i++) {
      await page.locator('#canvas').click({
        position: {
          x: 429,
          y: 329
        }
      });
    }
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 210,
        y: 264
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 210,
        y: 333
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 305,
        y: 330
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 309,
        y: 266
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 219,
        y: 264
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 306,
        y: 264
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 376,
        y: 265
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 379,
        y: 333
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 313,
        y: 332
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 210,
        y: 337
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 212,
        y: 369
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 269,
        y: 369
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 269,
        y: 335
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 388,
        y: 262
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 391,
        y: 196
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 548,
        y: 201
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 550,
        y: 259
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 393,
        y: 260
      }
    });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 376,
        y: 293
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 389,
        y: 291
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 346,
        y: 332
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 347,
        y: 372
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 267,
        y: 353
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 300,
        y: 351
      }
    });
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_56.png', {
      maxDiffPixels: 960
    });
    const point1 = { x: 289, y: 296 };
    const actualGeometry1 = await getGeometry(page, point1);
    await expect(actualGeometry1).toHaveGeometryV0('ParametricEdit_56_1.geom', geometryDir);
    const point2 = { x: 286, y: 354 };
    const actualGeometry2 = await getGeometry(page, point2);
    await expect(actualGeometry2).toHaveGeometryV0('ParametricEdit_56_2.geom', geometryDir);
    const point3 = { x: 358, y: 289 };
    const actualGeometry3 = await getGeometry(page, point3);
    await expect(actualGeometry3).toHaveGeometryV0('ParametricEdit_56_3.geom', geometryDir);
    const point4 = { x: 432, y: 219 };
    const actualGeometry4 = await getGeometry(page, point4);
    await expect(actualGeometry4).toHaveGeometryV0('ParametricEdit_56_4.geom', geometryDir);
    const component = await getSnaptrudeDS(page, point1);
    await expect(component.type).toBe('Mass');
    await page.getByRole('img', { name: 'userimportedfiles' }).click();
    await page.locator('[id="\\33 "]').click();
    await page.getByRole('img', { name: 'delete', exact: true }).click();
    await page.getByRole('img', { name: 'userimportedfiles' }).click();
  });

  /**
   * @id Parametric Edit_0057
   * @description Check user is able to push/pull edit & edit on drawn mass in 2D/3D or not after import topography
   *
   * @steps
   * 1.Create project
   * 2.Import topography
   * 3.Select mass
   * 4.Draw mass
   * 5.Select push/pull edit/edit tool
   * 6.push/pull edit/edit on mass
   *
   * @expected Users should be able to perform push/pull edits and regular edits on drawn mass in 2D/3D after import topography
   */
  test('ParametricEdit_0057', async () => {
    test.setTimeout(350000);
    await page.getByText('Import').click();
    await page.getByRole('button', { name: 'Load Topography' }).click();
    await page.getByRole('button', { name: 'Load Topography' }).click();
    await page.getByRole('img', { name: 'zoomOut' }).click();
    for (let i = 0; i <= 30; i++) {
      await page.locator('#canvas').click({
        position: {
          x: 486,
          y: 263
        }
      });
    }
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 531,
        y: 313
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 536,
        y: 481
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 730,
        y: 474
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 722,
        y: 311
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 530,
        y: 313
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 629,
        y: 308
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 634,
        y: 259
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 815,
        y: 272
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 819,
        y: 398
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 732,
        y: 407
      }
    });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 666,
        y: 310
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 668,
        y: 363
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 775,
        y: 399
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 773,
        y: 442
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 728,
        y: 406
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 696,
        y: 406
      }
    });
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_57.png', {
      maxDiffPixels: 960
    });
    const point1 = { x: 550, y: 341 };
    const actualGeometry1 = await getGeometry(page, point1);
    await expect(actualGeometry1).toHaveGeometryV0('ParametricEdit_57_1.geom', geometryDir);
    const point2 = { x: 786, y: 298 };
    const actualGeometry2 = await getGeometry(page, point2);
    await expect(actualGeometry2).toHaveGeometryV0('ParametricEdit_57_2.geom', geometryDir);
    const component = await getSnaptrudeDS(page, point1);
    await expect(component.type).toBe('Mass');
    await page.getByRole('img', { name: 'userimportedfiles' }).click();
    await page.getByText('Topography').click();
    await page.getByRole('img', { name: 'delete', exact: true }).click();
    await reset2DCameraVersion0(page);
  });

  /**
   * @id Parametric Edit_0058
   * @description Check user is able to push/pull edit & edit on drawn mass in 2D/3D or not after hide/unhide
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw mass
   * 4.hide/unhide
   * 5.Select push/pull edit/edit tool
   * 6.push/pull edit/edit on mass
   * 7.hide/unhide
   *
   * @expected Users should be able to perform push/pull edits and regular edits on drawn mass in 2D/3D after hide/unhide
   */
  test('ParametricEdit_0058', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 323,
        y: 233
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 329,
        y: 363
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 476,
        y: 369
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 479,
        y: 240
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 318,
        y: 236
      }
    });
    await page.getByRole('img', { name: 'pointer' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 348,
        y: 254
      }
    });
    await page.getByRole('img', { name: 'Bulb0' }).click();
    await page.getByRole('img', { name: 'Bulb', exact: true }).click();
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 403,
        y: 365
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 413,
        y: 416
      }
    });
    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
    await page.getByRole('img', { name: 'pointer' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 678,
        y: 475
      }
    });
    await page.getByRole('img', { name: 'Bulb0' }).click();
    await page.getByRole('img', { name: 'Bulb', exact: true }).click();
    await page.getByRole('img', { name: 'pushpull' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 627,
        y: 316
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 618,
        y: 249
      }
    });
    const point = { x: 439, y: 260 };
    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
    await page.getByRole('img', { name: 'pointer' }).click();
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_58.png', {
      maxDiffPixels: 960
    });
    const actualGeometry = await getGeometry(page, point);
    await expect(actualGeometry).toHaveGeometryV0('ParametricEdit_58.geom', geometryDir);
    const component = await getSnaptrudeDS(page, point);
    await expect(component.type).toBe('Mass');
  });

  /**
   * @id Parametric Edit_0059
   * @description Check user is able to push/pull edit & edit on drawn mass in 2D/3D or not after undo/redo
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw mass
   * 4.undo/redo
   * 5.Select push/pull edit/edit tool
   * 6.push/pull edit/edit on mass
   * 7.undo/redo
   *
   * @expected Users should be able to perform push/pull edits and regular edits on drawn mass in 2D/3D after undo/redo
   */
  test('ParametricEdit_0059', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 318,
        y: 231
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 328,
        y: 388
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 531,
        y: 399
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 319,
        y: 233
      }
    });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 381,
        y: 387
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 376,
        y: 416
      }
    });
    await page.getByRole('img', { name: 'Undo' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 407,
        y: 387
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 402,
        y: 435
      }
    });
    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
    await page.getByRole('img', { name: 'pushpull' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 462,
        y: 289
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 459,
        y: 231
      }
    });
    await page.getByRole('img', { name: 'Undo' }).click();
    await page.getByRole('img', { name: 'Redo' }).click();
    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 424,
        y: 436
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 422,
        y: 398
      }
    });
    const point = { x: 357, y: 279 };
    await page.getByRole('img', { name: 'Undo' }).click();
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_59.png', {
      maxDiffPixels: 960
    });
    const actualGeometry = await getGeometry(page, point);
    await expect(actualGeometry).toHaveGeometryV0('ParametricEdit_59.geom', geometryDir);
    const component = await getSnaptrudeDS(page, point);
    await expect(component.type).toBe('Mass');
  });

  /**
   * @id Parametric Edit_0060
   * @description Check user is able to push/pull edit & edit on drawn mass in 2D/3D or not after delete/undo
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw mass
   * 4.delete/undo
   * 5.Select push/pull edit/edit tool
   * 6.push/pull edit/edit on mass
   * 7.delete/undo
   *
   * @expected Users should be able to perform push/pull edits and regular edits on drawn mass in 2D/3D after delete/undo
   */
  test('ParametricEdit_0060', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 372,
        y: 156
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 386,
        y: 335
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 529,
        y: 337
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 463,
        y: 267
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 528,
        y: 220
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 447,
        y: 187
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 443,
        y: 155
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 377,
        y: 153
      }
    });
    await page.getByRole('img', { name: 'pointer' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 418,
        y: 294
      }
    });
    await page.locator("//*[@data-tooltip-id='delete_icon']").click();
    await page.getByRole('img', { name: 'Undo' }).click();
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 526,
        y: 227
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 462,
        y: 239
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 524,
        y: 332
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 465,
        y: 337
      }
    });
    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
    await page.getByRole('img', { name: 'pushpull' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 510,
        y: 255
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 535,
        y: 366
      }
    });
    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 448,
        y: 157
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 468,
        y: 156
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 452,
        y: 185
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 468,
        y: 184
      }
    });
    const point = { x: 405, y: 196 };
    await page.getByRole('img', { name: 'Undo' }).click();
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_60.png', {
      maxDiffPixels: 960
    });
    const actualGeometry = await getGeometry(page, point);
    await expect(actualGeometry).toHaveGeometryV0('ParametricEdit_60.geom', geometryDir);
    const component = await getSnaptrudeDS(page, point);
    await expect(component.type).toBe('Mass');
  });
});
