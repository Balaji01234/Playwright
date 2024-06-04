import { expect, test } from '../../common/fixtures';
import { Page } from '@playwright/test';
import { initProject, configure2DProjectForTestV0 } from '../../common/project';
import { clearCanvas } from '../../common/canvas';
import { createGeometryDir, getGeometry, getSnaptrudeDS } from '../../common/geometry';

test.describe('ParametricEdit2DEdges', () => {
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
   * @id Parametric Edit_0041
   * @description Check user can able to edit on storey copied straight edge on mass in 2D or not.
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw linear mass
   * 4.Select edit tool
   * 5.edit on storey copied mass straight edge
   *
   * @expected Users should be able to edit the straight edge on storey copied mass in 2D.
   */
  test('ParametricEdit_0041', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 242,
        y: 255
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 237,
        y: 392
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 419,
        y: 388
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 416,
        y: 249
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 243,
        y: 253
      }
    });
    await page.getByRole('img', { name: 'pointer' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 396,
        y: 281
      }
    });
    await page.getByRole('img', { name: 'storey_down' }).first().click();
    await page.getByRole('button', { name: 'Copy selection above' }).click();
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 418,
        y: 300
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 504,
        y: 295
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 355,
        y: 391
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 346,
        y: 465
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 244,
        y: 361
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 192,
        y: 359
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 368,
        y: 254
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 373,
        y: 202
      }
    });
    await page.getByText('2', { exact: true }).first().click();
    await page.getByRole('img', { name: 'pointer' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 469,
        y: 242
      }
    });
    await page.getByRole('img', { name: 'delete_icon' }).click();
    await page.locator('p').filter({ hasText: '1' }).click();
    const point = { x: 406, y: 280 };
    const actualGeometry = await getGeometry(page, point);
    await expect(actualGeometry).toHaveGeometryV0('ParametricEdit_0041.geom', geometryDir);
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_0041.png', {
      maxDiffPixels: 960
    });
    let Component = await getSnaptrudeDS(page, point);
    expect(Component.type).toBe('Mass');
  });
  /**
   * @id Parametric Edit_0042
   * @description Check user can able to edit on storey copied  angled edge in 2D or not.
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw angular mass
   * 4.Select edit tool
   * 5.edit on storey copied mass angled edge
   *
   * @expected Users should be able to edit the angular edge onstorey  copied mass in 2D.
   */
  test('ParametricEdit_0042', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 256,
        y: 198
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 199,
        y: 298
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 363,
        y: 305
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 352,
        y: 436
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 481,
        y: 433
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 468,
        y: 304
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 427,
        y: 193
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 259,
        y: 203
      }
    });
    await page.getByRole('img', { name: 'pointer' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 350,
        y: 229
      }
    });
    await page.getByRole('img', { name: 'storey_down' }).first().click();
    await page.getByRole('button', { name: 'Copy selection above' }).click();
    await page.getByText('2', { exact: true }).first().click();
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 230,
        y: 240
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 292,
        y: 243
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 441,
        y: 231
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 451,
        y: 220
      }
    });
    const point = { x: 387, y: 215 };
    const actualGeometry = await getGeometry(page, point);
    await expect(actualGeometry).toHaveGeometryV0('ParametricEdit_0042.geom', geometryDir);
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_0042.png', {
      maxDiffPixels: 960
    });
    let component = await getSnaptrudeDS(page, point);
    expect(component.type).toBe('Mass');
    await page.getByText('2', { exact: true }).first().click();
    await page.locator('#canvas').click({
      position: {
        x: 387,
        y: 215
      }
    });
    await page.getByRole('img', { name: 'delete_icon' }).click();
    await page.locator('p').filter({ hasText: '1' }).click();
  });
  /**
   * @id Parametric Edit_0043
   * @description Check user can able to edit on storey copied  arc edge in 2D or not.
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw arc mass
   * 4.Select edit tool
   * 5.edit on storey copied mass arc edge
   *
   * @expected Users should be able to edit the arc edge on storey copied mass in 2D.
   */
  /*While editing two edge arc mass, after storey copy, mass deformed.
  Bug Id: ST-3434
  */
  test.skip('ParametricEdit_0043', async () => {
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 265,
        y: 313
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 464,
        y: 327
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 358,
        y: 217
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 266,
        y: 312
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 352,
        y: 250
      }
    });
    await page.getByRole('img', { name: 'pointer' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 386,
        y: 241
      }
    });
    await page.getByRole('img', { name: 'storey_down' }).first().click();
    await page.getByRole('button', { name: 'Copy selection above' }).click();
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 359,
        y: 245
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 366,
        y: 343
      }
    });
  });
  /**
   * @id Parametric Edit_0044
   * @description Check user can able to edit on storey copied straight+arc mass edge in 2D or not.
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw linear+arc mass
   * 4.Select edit tool
   * 5.edit on storey copied mass straight+arc edge
   *
   * @expected Users should be able to edit the straight+arc edge on storey copied mass in 2D.
   */
  /*While editing arc mass, after storey copy, mass deformed.
  Bug Id: ST-3434
  */
  test.skip('ParametricEdit_0044', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 254,
        y: 214
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 251,
        y: 402
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 400,
        y: 399
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 396,
        y: 408
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 403,
        y: 210
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 256,
        y: 210
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 278,
        y: 175
      }
    });
    await page.getByRole('img', { name: 'pointer' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 342,
        y: 237
      }
    });
    await page.getByRole('img', { name: 'storey_down' }).first().click();
    await page.getByRole('button', { name: 'Copy selection above' }).click();
    await page.getByText('2', { exact: true }).first().click();
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 326,
        y: 442
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 332,
        y: 466
      }
    });
  });
  /**
   * @id Parametric Edit_0045
   * @description Check user can able to edit on storey copied vertices mass in 2D/3D or not.
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw circular mass
   * 4.Select edit tool
   * 5.edit on storey copied mass vertices
   *
   * @expected Users should be able to edit the vertices on storey copied mass in 2D.
   */
  test('ParametricEdit_0045', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 425,
        y: 282
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 425,
        y: 423
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 616,
        y: 418
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 619,
        y: 285
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 430,
        y: 280
      }
    });
    await page.getByRole('img', { name: 'pointer' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 450,
        y: 301
      }
    });
    await page.getByRole('img', { name: 'storey_down' }).first().click();
    await page.getByRole('button', { name: 'Copy selection above' }).click();
    await page.getByText('2', { exact: true }).first().click();
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 614,
        y: 287
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 684,
        y: 286
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 615,
        y: 421
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 680,
        y: 418
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 421,
        y: 420
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 355,
        y: 417
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 426,
        y: 285
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 510,
        y: 280
      }
    });
    const point = { x: 587, y: 308 };
    const actualGeometry = await getGeometry(page, point);
    await expect(actualGeometry).toHaveGeometryV0('ParametricEdit_0045.geom', geometryDir);
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_0045.png', {
      maxDiffPixels: 960
    });
    let Component = await getSnaptrudeDS(page, point);
    expect(Component.type).toBe('Mass');
    await page.getByText('2', { exact: true }).first().click();
    await page.locator('#canvas').click({
      position: {
        x: 587,
        y: 308
      }
    });
    await page.getByRole('img', { name: 'delete_icon' }).click();
    await page.locator('p').filter({ hasText: '1' }).click();
  });
  /**
   * @id Parametric Edit_0046
   * @description Check user can able to push/pull edit & edit on drawn mass in 2D/3D or not after move.
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw mass
   * 4.move the mass
   * 5.Select push/pull edit/edit tool
   * 6.push/pull edit/edit on mass
   *
   * @expected Users should be able to perform push/pull edits and regular edits on drawn mass in both 2D and 3D after moving the object.
   */
  test('ParametricEdit_0046', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 388,
        y: 279
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 390,
        y: 455
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 562,
        y: 441
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 550,
        y: 286
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 390,
        y: 279
      }
    });
    await page.getByRole('img', { name: 'move', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 471,
        y: 317
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 389,
        y: 308
      }
    });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 411,
        y: 445
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 412,
        y: 369
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 480,
        y: 313
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 429,
        y: 304
      }
    });
    const point = { x: 403, y: 295 };
    const actualGeometry = await getGeometry(page, point);
    await expect(actualGeometry).toHaveGeometryV0('ParametricEdit_0046.geom', geometryDir);
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_0046.png', {
      maxDiffPixels: 960
    });
    let Component = await getSnaptrudeDS(page, point);
    expect(Component.type).toBe('Mass');
  });
  /**
   * @id Parametric Edit_0047
   * @description Check user can able to push/pull edit & edit on drawn mass in 2D/3D or not after rotate.
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw mass
   * 4.rotate the mass
   * 5.Select push/pull edit/edit tool
   * 6.push/pull edit/edit on mass
   *
   * @expected Users should be able to perform push/pull edits and regular edits on drawn mass in both 2D and 3D after rotating the object.
   */
  test('ParametricEdit_0047', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 255,
        y: 249
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 255,
        y: 424
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 453,
        y: 426
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 346,
        y: 319
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 428,
        y: 253
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 257,
        y: 251
      }
    });
    await page.getByRole('img', { name: 'rotate' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 311,
        y: 315
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 617,
        y: 313
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 305,
        y: 459
      }
    });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 298,
        y: 352
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 289,
        y: 448
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 377,
        y: 428
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 372,
        y: 455
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 287,
        y: 444
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 286,
        y: 459
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 374,
        y: 347
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 468,
        y: 349
      }
    });
    const point = { x: 300, y: 302 };
    const actualGeometry = await getGeometry(page, point);
    await expect(actualGeometry).toHaveGeometryV0('ParametricEdit_0047.geom', geometryDir);
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_0047.png', {
      maxDiffPixels: 960
    });
    let Component = await getSnaptrudeDS(page, point);
    expect(Component.type).toBe('Mass');
  });
  /**
   * @id Parametric Edit_0048
   * @description Check user can able to push/pull edit & edit on drawn mass in 2D/3D or not after flip x.
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw mass
   * 4.flip x the mass
   * 5.Select push/pull edit/edit tool
   * 6.push/pull edit/edit on mass
   *
   * @expected Users should be able to perform push/pull edits and regular edits on drawn mass in both 2D and 3D after flip x the object.
   */
  test('ParametricEdit_0048', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 333,
        y: 254
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 343,
        y: 398
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 483,
        y: 393
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 405,
        y: 309
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 461,
        y: 226
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 394,
        y: 192
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 338,
        y: 250
      }
    });
    await page.getByRole('img', { name: 'pointer' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 371,
        y: 247
      }
    });
    await page.getByRole('img', { name: 'flipX', exact: true }).click();
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 412,
        y: 267
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 480,
        y: 266
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 467,
        y: 355
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 484,
        y: 355
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 398,
        y: 396
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 398,
        y: 335
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 479,
        y: 348
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 479,
        y: 335
      }
    });
    const point = { x: 375, y: 226 };
    const actualGeometry = await getGeometry(page, point);
    await expect(actualGeometry).toHaveGeometryV0('ParametricEdit_0048.geom', geometryDir);
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_0048.png', {
      maxDiffPixels: 960
    });
    let Component = await getSnaptrudeDS(page, point);
    expect(Component.type).toBe('Mass');
  });
  /**
   * @id Parametric Edit_0049
   * @description Check user can able to push/pull edit & edit on drawn mass in 2D/3D or not after flip y
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw mass
   * 4.flip y the mass
   * 5.Select push/pull edit/edit tool
   * 6.push/pull edit/edit on mass
   *
   * @expected Users should be able to perform push/pull edits and regular edits on drawn mass in both 2D and 3D after flip y the object.
   */
  test('ParametricEdit_0049', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 243,
        y: 182
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 239,
        y: 372
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 410,
        y: 368
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 408,
        y: 315
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 314,
        y: 305
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 314,
        y: 260
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 279,
        y: 252
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 285,
        y: 182
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 247,
        y: 181
      }
    });
    await page.getByRole('img', { name: 'pointer' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 275,
        y: 315
      }
    });
    await page.getByRole('img', { name: 'flipXY' }).click();
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 354,
        y: 259
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 354,
        y: 224
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 302,
        y: 314
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 302,
        y: 290
      }
    });
    const point = { x: 374, y: 272 };
    const actualGeometry = await getGeometry(page, point);
    await expect(actualGeometry).toHaveGeometryV0('ParametricEdit_0049.geom', geometryDir);
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_0049.png', {
      maxDiffPixels: 960
    });
    let Component = await getSnaptrudeDS(page, point);
    expect(Component.type).toBe('Mass');
  });
  /**
   * @id Parametric Edit_0050
   * @description Check user can able to push/pull edit & edit on drawn mass in 2D/3D or not after add vertex.
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw mass
   * 4.add vertex the mass
   * 5.Select push/pull edit/edit tool
   * 6.push/pull edit/edit on mass
   *
   * @expected Users should be able to perform push/pull edits and regular edits on drawn mass in both 2D and 3D after add vertex the object.
   */
  test('ParametricEdit_0050', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 333,
        y: 236
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 339,
        y: 382
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 521,
        y: 367
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 517,
        y: 237
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 338,
        y: 236
      }
    });
    await page.getByRole('img', { name: 'addLayer' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 426,
        y: 383
      }
    });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 467,
        y: 383
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 484,
        y: 482
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 377,
        y: 383
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 386,
        y: 302
      }
    });
    const point = { x: 453, y: 261 };
    const actualGeometry = await getGeometry(page, point);
    await expect(actualGeometry).toHaveGeometryV0('ParametricEdit_0050.geom', geometryDir);
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_0050.png', {
      maxDiffPixels: 960
    });
    let Component = await getSnaptrudeDS(page, point);
    expect(Component.type).toBe('Mass');
  });
});
