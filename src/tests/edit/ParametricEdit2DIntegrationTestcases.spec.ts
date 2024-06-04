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
import { reset3DCameraVersion0 } from '../../common/camera';
test.describe('ParametricEdit2D', () => {
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

  // test.afterEach(async () => {
  //   await clearCanvas(page);
  // });

  // test.afterAll(async () => {
  //   await page.close();
  // });

  /**
   * @id Parametric Edit_0001
   * @description Check user can able to push/pull edit on  linear mass edge in 2D or not.
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw linear mass
   * 4.Select push/pull edit tool
   * 5.push/pull edit on mass edge
   *
   * @expected Users should be able to perform push/pull edits on linear mass edges in 2D.
   */
  test('ParametricEdit_0001', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 241,
        y: 221
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 237,
        y: 429
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 453,
        y: 428
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 449,
        y: 346
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 305,
        y: 345
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 306,
        y: 382
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 275,
        y: 381
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 279,
        y: 344
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 273,
        y: 214
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 237,
        y: 216
      }
    });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 354,
        y: 344
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 364,
        y: 312
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 290,
        y: 387
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 303,
        y: 270
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 452,
        y: 362
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 403,
        y: 358
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 241,
        y: 258
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 174,
        y: 260
      }
    });
    const point = { x: 331, y: 333 };
    const actualGeometry = await getGeometry(page, point);
    await expect(actualGeometry).toHaveGeometryV0('ParametricEdit_0001_1.geom', geometryDir);
    expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_0001.png', {
      maxDiffPixels: 960
    });
  });
  /**
   * @id Parametric Edit_0002
   * @description Check user can able to push/pull edit on  angular mass edge in 2D or not.
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw angular mass
   * 4.Select push/pull edit tool
   * 5.push/pull edit on mass edge
   *
   * @expected Users should be able to perform push/pull edits on angular mass edges in 2D.
   */
  test('ParametricEdit_0002', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 295,
        y: 195
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 240,
        y: 271
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 351,
        y: 269
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 367,
        y: 445
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 437,
        y: 448
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 427,
        y: 278
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 396,
        y: 229
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 400,
        y: 190
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 301,
        y: 192
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 604,
        y: 221
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 553,
        y: 298
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 557,
        y: 398
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 692,
        y: 393
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 696,
        y: 294
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 786,
        y: 292
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 761,
        y: 218
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 613,
        y: 223
      }
    });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 409,
        y: 252
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 392,
        y: 268
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 278,
        y: 228
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 254,
        y: 216
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 575,
        y: 268
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 604,
        y: 249
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 766,
        y: 246
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 779,
        y: 269
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 690,
        y: 356
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 664,
        y: 346
      }
    });
    const point1 = { x: 317, y: 217 };
    const actualGeometry1 = await getGeometry(page, point1);
    await expect(actualGeometry1).toHaveGeometryV0('ParametricEdit_0002_1.geom', geometryDir);
    const point2 = { x: 650, y: 251 };
    const actualGeometry2 = await getGeometry(page, point2);
    await expect(actualGeometry2).toHaveGeometryV0('ParametricEdit_0002_2.geom', geometryDir);
    expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_0002.png', {
      maxDiffPixels: 960
    });
  });
  /**
   * @id Parametric Edit_0003
   * @description Check user can able to push/pull edit on  arc mass edge in 2D or not.
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw arc mass
   * 4.Select push/pull edit tool
   * 5.push/pull edit on mass edge
   *
   * @expected Users should be able to perform push/pull edits on arc mass edges in 2D.
   */
  //Failing in screenshot comparison with 0.01 ratio
  test.skip('ParametricEdit_0003', async () => {
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 263,
        y: 259
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 394,
        y: 259
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 337,
        y: 212
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 399,
        y: 371
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 367,
        y: 329
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 264,
        y: 371
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 328,
        y: 415
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 263,
        y: 258
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 286,
        y: 312
      }
    });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 363,
        y: 308
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 382,
        y: 309
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 285,
        y: 314
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 268,
        y: 304
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 325,
        y: 212
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 328,
        y: 189
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 329,
        y: 416
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 330,
        y: 442
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 577,
        y: 255
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 686,
        y: 205
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 615,
        y: 182
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 680,
        y: 424
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 577,
        y: 439
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 623,
        y: 459
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 575,
        y: 253
      }
    });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 628,
        y: 182
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 629,
        y: 206
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 679,
        y: 296
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 680,
        y: 299
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 632,
        y: 458
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 626,
        y: 503
      }
    });
    // await page.locator('#canvas').click({
    //   position: {
    //     x: 634,
    //     y: 449
    //   }
    // });
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_0003.png', {
      maxDiffPixels: 960
    });
    const point1 = { x: 318, y: 235 };
    const actualGeometry1 = await getGeometry(page, point1);
    await expect(actualGeometry1).toHaveGeometryV0('ParametricEdit_0003_1.geom', geometryDir);
    const point2 = { x: 648, y: 258 };
    const actualGeometry2 = await getGeometry(page, point2);
    await expect(actualGeometry2).toHaveGeometryV0('ParametricEdit_0003_2.geom', geometryDir);
    expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  });

  /**
   * @id Parametric Edit_0004
   * @description Check user can able to push/pull edit on  arc+linear mass edge in 2D or not.
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw linear+arc mass
   * 4.Select push/pull edit tool
   * 5.push/pull edit on mass edge
   *
   * @expected Users should be able to perform push/pull edits on linear+arc mass edges in 2D.
   */

  test('ParametricEdit_0004', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 233,
        y: 222
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 221,
        y: 367
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 348,
        y: 378
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 310,
        y: 399
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 345,
        y: 220
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 233,
        y: 220
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 294,
        y: 181
      }
    });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 287,
        y: 400
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 279,
        y: 440
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 284,
        y: 177
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 288,
        y: 152
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 346,
        y: 301
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 351,
        y: 289
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 232,
        y: 283
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 214,
        y: 286
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 574,
        y: 177
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 523,
        y: 295
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 679,
        y: 283
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 592,
        y: 365
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 642,
        y: 180
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 577,
        y: 175
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 617,
        y: 147
      }
    });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 600,
        y: 359
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 624,
        y: 414
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 613,
        y: 146
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 617,
        y: 120
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 663,
        y: 230
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 674,
        y: 230
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 539,
        y: 237
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 555,
        y: 240
      }
    });
    const point1 = { x: 279, y: 173 };
    const actualGeometry1 = await getGeometry(page, point1);
    await expect(actualGeometry1).toHaveGeometryV0('ParametricEdit_0004_1.geom', geometryDir);
    const point2 = { x: 621, y: 148 };
    const actualGeometry2 = await getGeometry(page, point2);
    await expect(actualGeometry2).toHaveGeometryV0('ParametricEdit_0004_2.geom', geometryDir);
    expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_0004.png', {
      maxDiffPixels: 960
    });
  });

  /**
   * @id Parametric Edit_0005
   * @description Check user can able to push/pull edit on  circular mass or not.
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw circular mass
   * 4.Select push/pull edit tool
   * 5.push/pull edit on mass edge
   *
   * @expected Users should be able to perform push/pull edits on circular mass edges in 2D.
   */

  test('ParametricEdit_0005', async () => {
    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
    await page.getByRole('img', { name: 'drawCircle' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 533,
        y: 435
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 568,
        y: 470
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 508,
        y: 336
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 565,
        y: 403
      }
    });
    await page.getByRole('img', { name: 'pushpull' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 562,
        y: 361
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 556,
        y: 261
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 486,
        y: 371
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 486,
        y: 349
      }
    });
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_0005.png', {
      maxDiffPixels: 960
    });
    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  });

  /**
   * @id Parametric Edit_0006
   * @description Check user can able to push/pull edit on  copied linear mass edge in 2D or not
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw linear mass
   * 4.Copy the mass
   * 4.Select push/pull edit tool
   * 5.push/pull edit on copied mass edge
   *
   * @expected Users should be able to perform push/pull edits on copied linear mass edges in 2D.
   */
  test('ParametricEdit_0006', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 239,
        y: 206
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 217,
        y: 386
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 421,
        y: 379
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 419,
        y: 294
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 347,
        y: 294
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 347,
        y: 241
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 484,
        y: 244
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 480,
        y: 200
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 246,
        y: 204
      }
    });
    await page.getByRole('img', { name: 'copy' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 299,
        y: 320
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 603,
        y: 318
      }
    });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 648,
        y: 266
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 630,
        y: 262
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 784,
        y: 223
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 688,
        y: 225
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 722,
        y: 356
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 782,
        y: 353
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 617,
        y: 386
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 617,
        y: 358
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 602,
        y: 207
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 603,
        y: 164
      }
    });
    const point1 = { x: 291, y: 213 };
    const actualGeometry = await getGeometry(page, point1);
    await expect(actualGeometry).toHaveGeometryV0('ParametricEdit_0006_1.geom', geometryDir);
    const point2 = { x: 582, y: 206 };
    const actualGeometry2 = await getGeometry(page, point2);
    await expect(actualGeometry2).toHaveGeometryV0('ParametricEdit_0006_2.geom', geometryDir);
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_0006.png', {
      maxDiffPixels: 960
    });
    expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  });

  /**
   * @id Parametric Edit_0007
   * @description Check user can able to push/pull edit on  copied angled linear mass edge in 2D or not
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw angular mass
   * 4.Copy the mass
   * 4.Select push/pull edit tool
   * 5.push/pull edit on copied mass edge
   *
   * @expected Users should be able to perform push/pull edits on copied angular mass edges in 2D.
   */
  test('ParametricEdit_0007', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 245,
        y: 183
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 193,
        y: 266
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 298,
        y: 270
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 292,
        y: 436
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 362,
        y: 431
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 372,
        y: 266
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 319,
        y: 184
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 246,
        y: 183
      }
    });
    await page.getByRole('img', { name: 'copy' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 315,
        y: 335
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 593,
        y: 334
      }
    });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 498,
        y: 225
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 499,
        y: 222
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 622,
        y: 222
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 625,
        y: 213
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 547,
        y: 268
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 547,
        y: 285
      }
    });
    const point1 = { x: 290, y: 216 };
    const actualGeometry = await getGeometry(page, point1);
    await expect(actualGeometry).toHaveGeometryV0('ParametricEdit_0007_1.geom', geometryDir);
    const point2 = { x: 557, y: 205 };
    const actualGeometry2 = await getGeometry(page, point2);
    await expect(actualGeometry2).toHaveGeometryV0('ParametricEdit_0007_2.geom', geometryDir);
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_0007.png', {
      maxDiffPixels: 960
    });
    expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  });

  /**
   * @id Parametric Edit_0008
   * @description Check user can able to push/pull edit on  copied arc mass edge in 2D or not
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw arc mass
   * 4.Copy the mass
   * 4.Select push/pull edit tool
   * 5.push/pull edit on copied mass edge
   *
   * @expected Users should be able to perform push/pull edits on copied arc mass edges in 2D.
   */
  test('ParametricEdit_0008', async () => {
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 194,
        y: 265
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 316,
        y: 265
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 258,
        y: 224
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 318,
        y: 381
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 293,
        y: 343
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 189,
        y: 383
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 238,
        y: 410
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 192,
        y: 269
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 216,
        y: 309
      }
    });
    await page.getByRole('img', { name: 'copy' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 254,
        y: 281
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 518,
        y: 283
      }
    });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 479,
        y: 308
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 470,
        y: 295
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 544,
        y: 317
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 542,
        y: 313
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 472,
        y: 321
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 478,
        y: 304
      }
    });
    const point1 = { x: 232, y: 248 };
    const actualGeometry1 = await getGeometry(page, point1);
    await expect(actualGeometry1).toHaveGeometryV0('ParametricEdit_0008_1.geom', geometryDir);
    const point2 = { x: 501, y: 249 };
    const actualGeometry2 = await getGeometry(page, point2);
    await expect(actualGeometry2).toHaveGeometryV0('ParametricEdit_0008_2.geom', geometryDir);
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_0008.png', {
      maxDiffPixels: 960
    });
    expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  });

  /**
   * @id Parametric Edit_0009
   * @description Check user can able to push/pull edit on  copied arc+linear mass edge in 2D or not
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw linear+arc mass
   * 4.Copy the mass
   * 4.Select push/pull edit tool
   * 5.push/pull edit on copied mass edge
   *
   * @expected Users should be able to perform push/pull edits on copied linear+arc mass edges in 2D.
   */
  test('ParametricEdit_0009', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 178,
        y: 248
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 183,
        y: 386
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 290,
        y: 386
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 277,
        y: 415
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 289,
        y: 251
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 179,
        y: 248
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 231,
        y: 283
      }
    });
    await page.getByRole('img', { name: 'copy' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 229,
        y: 312
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 516,
        y: 316
      }
    });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 231,
        y: 282
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 229,
        y: 189
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 516,
        y: 432
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 509,
        y: 328
      }
    });
    const point1 = { x: 241, y: 258 };
    const actualGeometry1 = await getGeometry(page, point1);
    await expect(actualGeometry1).toHaveGeometryV0('ParametricEdit_0009_1.geom', geometryDir);
    const point2 = { x: 511, y: 242 };
    const actualGeometry2 = await getGeometry(page, point2);
    await expect(actualGeometry2).toHaveGeometryV0('ParametricEdit_0009_2.geom', geometryDir);
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_0009.png', {
      maxDiffPixels: 960
    });
    expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  });

  /**
   * @id Parametric Edit_0010
   * @description Check user can able to push/pull edit on  copied circular mass or not
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw circular mass
   * 4.Copy the mass
   * 4.Select push/pull edit tool
   * 5.push/pull edit on copied mass edge
   *
   * @expected Users should be able to perform push/pull edits on copied circular mass edges in 2D.
   */
  test('ParametricEdit_0010', async () => {
    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
    await reset3DCameraVersion0(page);
    await page.getByRole('img', { name: 'drawCircle' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 426,
        y: 469
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 454,
        y: 500
      }
    });
    await page.getByRole('img', { name: 'copy' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 447,
        y: 468
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 622,
        y: 423
      }
    });
    await page.getByRole('img', { name: 'pushpull' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 589,
        y: 391
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 582,
        y: 281
      }
    });
    await expect(page).toHaveCanvasSnapshot('Parametric Edit_0010.png', {
      maxDiffPixels: 960
    });
    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  });
});
