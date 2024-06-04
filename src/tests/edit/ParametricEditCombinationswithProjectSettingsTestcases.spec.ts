import { expect, test } from '../../common/fixtures';
import { Page } from '@playwright/test';
import {
  initProject,
  configure2DProjectForTestV0,
  toggle2D,
  ensureDrawMode
} from '../../common/project';
import { clearCanvas } from '../../common/canvas';
import { createGeometryDir, getGeometry, getSnaptrudeDS } from '../../common/geometry';
import { reset2DCameraVersion0 } from '../../common/camera';

test.describe('ParametricEdit_With_Project_Settings', () => {
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
   * @id Parametric Edit_0061
   * @description Check user is able to push/pull edit & edit on drawn mass in 2D/3D or not after lock/unlock
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw mass
   * 4.lock/unlock
   * 5.Select push/pull edit/edit tool
   * 6.push/pull edit/edit on mass
   * 7.lock/unlock
   *
   * @expected Users should be able to perform push/pull edits and regular edits on drawn mass in 2D/3D after lock/unlock
   */
  test('ParametricEdit_0061', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 326,
        y: 218
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 320,
        y: 383
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 475,
        y: 388
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 469,
        y: 335
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 370,
        y: 334
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 374,
        y: 256
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 468,
        y: 253
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 473,
        y: 214
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 328,
        y: 214
      }
    });
    await page.getByRole('img', { name: 'pointer' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 341,
        y: 258
      }
    });
    await page.getByRole('img', { name: 'Lock', exact: true }).click();
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_61_1.png', { maxDiffPixels: 960 });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 416,
        y: 336
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 411,
        y: 388
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 413,
        y: 336
      }
    });
    await page.getByRole('img', { name: 'pointer' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 346,
        y: 295
      }
    });
    await page.getByRole('img', { name: 'Unlock' }).click();
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 373,
        y: 297
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 395,
        y: 297
      }
    });
    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
    await page.getByRole('img', { name: 'pointer' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 388,
        y: 323
      }
    });
    await page.getByRole('img', { name: 'Lock', exact: true }).click();
    await page.getByRole('img', { name: 'pushpull' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 360,
        y: 321
      }
    });
    await page.getByRole('img', { name: 'pointer' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 414,
        y: 300
      }
    });
    await page.getByRole('img', { name: 'Unlock' }).click();
    await page.getByRole('img', { name: 'pushpull' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 361,
        y: 272
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 330,
        y: 355
      }
    });
    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
    const point = { x: 390, y: 240 };
    const actualGeometry = await getGeometry(page, point);
    await expect(actualGeometry).toHaveGeometryV0('ParametricEdit_61.geom', geometryDir);
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_61_2.png', { maxDiffPixels: 960 });
    const component = await getSnaptrudeDS(page, point);
    await expect(component.type).toBe('Mass');
  });
  /**
   * @id Parametric Edit_0062
   * @description Check user is able to push/pull edit & edit on drawn mass in 2D/3D or not after change units in PP
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw mass
   * 4.Change units in PP
   * 5.Select push/pull edit/edit tool
   * 6.push/pull edit/edit on mass
   *
   *
   * @expected Users should be able to perform push/pull edits and regular edits on drawn mass in 2D/3D after change units in PP
   */
  test('ParametricEdit_0062', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 270,
        y: 190
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 261,
        y: 355
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 362,
        y: 348
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 353,
        y: 294
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 431,
        y: 289
      }
    });
    await page.locator('#canvas').press('Escape');
    await page.locator('#canvas').click({
      position: {
        x: 402,
        y: 298
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 403,
        y: 247
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 445,
        y: 242
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 444,
        y: 209
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 484,
        y: 204
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 483,
        y: 184
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 275,
        y: 187
      }
    });
    await page.getByRole('img', { name: 'Settings' }).click();
    await page
      .locator('div')
      .filter({ hasText: /^UnitsMillimeters$/ })
      .getByRole('img')
      .click();
    await page.getByText('Centimeters').click();
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 462,
        y: 206
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 462,
        y: 224
      }
    });
    await page.getByRole('img', { name: 'Settings' }).click();
    await page
      .locator('div')
      .filter({ hasText: /^UnitsCentimeters$/ })
      .getByRole('img')
      .click();
    await page.getByText('Metres').click();
    await page.getByRole('img', { name: 'Settings' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 423,
        y: 249
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 423,
        y: 267
      }
    });
    await page.getByRole('img', { name: 'Settings' }).click();
    await page
      .locator('div')
      .filter({ hasText: /^UnitsMetres$/ })
      .getByRole('img')
      .click();
    await page.getByText('Inches', { exact: true }).click();
    await page.getByRole('img', { name: 'Settings' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 357,
        y: 320
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 344,
        y: 322
      }
    });
    await page.getByRole('img', { name: 'Settings' }).click();
    await page
      .locator('div')
      .filter({ hasText: /^UnitsInches$/ })
      .getByRole('img')
      .click();
    await page.getByText('Feet-inches').click();
    await page.getByRole('img', { name: 'Settings' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 372,
        y: 295
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 374,
        y: 314
      }
    });
    await page.getByRole('img', { name: 'Settings' }).click();
    await page
      .locator('div')
      .filter({ hasText: /^UnitsFeet-inches$/ })
      .getByRole('img')
      .click();
    await page.getByText('Millimeters').click();
    await page.getByRole('img', { name: 'Settings' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 400,
        y: 280
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 380,
        y: 282
      }
    });
    const point = { x: 304, y: 229 };
    const actualGeometry = await getGeometry(page, point);
    await expect(actualGeometry).toHaveGeometryV0('ParametricEdit_62.geom', geometryDir);
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_62.png', { maxDiffPixels: 960 });
    const component = await getSnaptrudeDS(page, point);
    await expect(component.type).toBe('Mass');
  });

  /**
   * @id Parametric Edit_0063
   * @description Check user is able to push/pull edit & edit on drawn mass in 2D/3D or not after change tolerance in PP
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw mass
   * 4.Change tolerance in PP
   * 5.Select push/pull edit/edit tool
   * 6.push/pull edit/edit on mass
   *
   *
   * @expected Users should be able to perform push/pull edits and regular edits on drawn mass in 2D/3D after change tolerance in PP
   */
  test('ParametricEdit_0063', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 230,
        y: 190
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 229,
        y: 308
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 354,
        y: 300
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 354,
        y: 249
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 462,
        y: 247
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 469,
        y: 306
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 591,
        y: 306
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 588,
        y: 185
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 231,
        y: 198
      }
    });
    await page.getByRole('img', { name: 'Settings' }).click();
    await page
      .locator('div')
      .filter({ hasText: /^Tolerance0\.00$/ })
      .getByRole('img')
      .click();
    await page.getByText('0.0', { exact: true }).click();
    await page.getByRole('img', { name: 'Settings' }).click();
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 403,
        y: 247
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 400,
        y: 271
      }
    });
    await page.getByRole('img', { name: 'Settings' }).click();
    await page
      .locator('div')
      .filter({ hasText: /^Tolerance0\.0$/ })
      .getByRole('img')
      .click();
    await page.getByText('0.00', { exact: true }).click();
    await page.getByRole('img', { name: 'Settings' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 352,
        y: 289
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 325,
        y: 287
      }
    });
    await page.getByRole('img', { name: 'Settings' }).click();
    await page
      .locator('div')
      .filter({ hasText: /^Tolerance0\.00$/ })
      .getByRole('img')
      .click();
    await page.getByText('0.000', { exact: true }).click();
    await page.getByRole('img', { name: 'Settings' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 395,
        y: 271
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 396,
        y: 242
      }
    });
    await page.getByRole('img', { name: 'Settings' }).click();
    await page
      .locator('div')
      .filter({ hasText: /^Tolerance0\.000$/ })
      .getByRole('img')
      .click();
    await page.getByText('0.0000', { exact: true }).click();
    await page.getByRole('img', { name: 'Settings' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 461,
        y: 269
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 496,
        y: 270
      }
    });
    await page.getByRole('img', { name: 'Settings' }).click();
    await page
      .locator('div')
      .filter({ hasText: /^Tolerance0\.0000$/ })
      .getByRole('img')
      .click();
    await page.getByText('0.00000', { exact: true }).click();
    await page.getByRole('img', { name: 'Settings' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 493,
        y: 280
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 413,
        y: 277
      }
    });
    await page.getByRole('img', { name: 'Settings' }).click();
    await page
      .locator('div')
      .filter({ hasText: /^Tolerance0\.00000$/ })
      .locator('div')
      .nth(4)
      .click();
    await page.getByText('0.0000000', { exact: true }).click();
    await page.getByRole('img', { name: 'Settings' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 377,
        y: 246
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 380,
        y: 273
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 415,
        y: 287
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 489,
        y: 286
      }
    });
    const point = { x: 445, y: 212 };
    const actualGeometry = await getGeometry(page, point);
    await expect(actualGeometry).toHaveGeometryV0('ParametricEdit_63.geom', geometryDir);
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_63.png', { maxDiffPixels: 960 });
    const component = await getSnaptrudeDS(page, point);
    await expect(component.type).toBe('Mass');
    await page.getByRole('img', { name: 'Settings' }).click();
    await page
      .locator('div')
      .filter({ hasText: /^Tolerance0\.0000000$/ })
      .getByRole('img')
      .click();
    await page.getByText('0.0', { exact: true }).click();
  });

  /**
   * @id Parametric Edit_0064
   * @description Check user is able to push/pull edit & edit on drawn mass in 2D/3D or not after enable/disable dimensional snap in PP
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw mass
   * 4.enable/disable dimensional snap in PP
   * 5.Select push/pull edit/edit tool
   * 6.push/pull edit/edit on mass
   *
   *
   * @expected Users should be able to perform push/pull edits and regular edits on drawn mass in 2D/3D after enable/disable dimensional snap in PP
   */
  test('ParametricEdit_0064', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 254,
        y: 191
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 254,
        y: 236
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 345,
        y: 234
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 352,
        y: 345
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 257,
        y: 348
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 257,
        y: 405
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 469,
        y: 401
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 468,
        y: 342
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 399,
        y: 342
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 402,
        y: 237
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 469,
        y: 232
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 467,
        y: 194
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 256,
        y: 194
      }
    });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 309,
        y: 234
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 317,
        y: 264
      }
    });
    await page.getByRole('img', { name: 'Settings' }).click();
    await page.locator("(//*[text()='Dimension Snap']//..//div)[6]").click();
    await page.getByRole('img', { name: 'Settings' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 427,
        y: 234
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 437,
        y: 265
      }
    });
    await page.getByRole('img', { name: 'Settings' }).click();
    await page.locator("(//*[text()='Dimension Snap']//..//div)[6]").click();
    await page.getByRole('img', { name: 'Settings' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 344,
        y: 307
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 328,
        y: 307
      }
    });
    const point = { x: 336, y: 229 };
    const actualGeometry = await getGeometry(page, point);
    await expect(actualGeometry).toHaveGeometryV0('ParametricEdit_64.geom', geometryDir);
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_64.png', { maxDiffPixels: 960 });
    const component = await getSnaptrudeDS(page, point);
    await expect(component.type).toBe('Mass');
  });

  /**
   * @id Parametric Edit_0065
   * @description Check user is able to push/pull edit & edit on drawn mass in 2D/3D or not after enable/disable angle snap in PP
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw mass
   * 4.enable/disable angle snap in PP
   * 5.Select push/pull edit/edit tool
   * 6.push/pull edit/edit on mass
   *
   *
   * @expected Users should be able to perform push/pull edits and regular edits on drawn mass in 2D/3D after enable/disable angle snap in PP
   */
  test('ParametricEdit_0065', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 192,
        y: 219
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 181,
        y: 414
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 256,
        y: 317
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 333,
        y: 313
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 331,
        y: 409
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 404,
        y: 406
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 415,
        y: 220
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 188,
        y: 218
      }
    });
    await page.getByRole('img', { name: 'Settings' }).click();
    await page.locator('div:nth-child(4) > .sc-hPmHAF > .sc-eYozgo').click();
    await page.getByRole('img', { name: 'Settings' }).click();
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 232,
        y: 344
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 221,
        y: 330
      }
    });
    await page.getByRole('img', { name: 'Settings' }).click();
    await page.locator('div:nth-child(4) > .sc-hPmHAF > .sc-eYozgo').click();
    await page.getByRole('img', { name: 'Settings' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 279,
        y: 317
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 311,
        y: 258
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 209,
        y: 347
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 216,
        y: 307
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 329,
        y: 298
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 308,
        y: 300
      }
    });
    const point = { x: 386, y: 262 };
    const actualGeometry = await getGeometry(page, point);
    await expect(actualGeometry).toHaveGeometryV0('ParametricEdit_65.geom', geometryDir);
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_65.png', { maxDiffPixels: 960 });
    const component = await getSnaptrudeDS(page, point);
    await expect(component.type).toBe('Mass');
  });

  /**
   * @id Parametric Edit_0066
   * @description Check user is able to push/pull edit & edit on drawn mass in 2D/3D or not after enable/disable parallel snap in PP
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw mass
   * 4.enable/disable parallel snap in PP
   * 5.Select push/pull edit/edit tool
   * 6.push/pull edit/edit on mass
   *
   *
   * @expected Users should be able to perform push/pull edits and regular edits on drawn mass in 2D/3D after enable/disable parallel snap in PP
   */
  test('ParametricEdit_0066', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 241,
        y: 225
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 328,
        y: 217
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 321,
        y: 355
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 400,
        y: 346
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 396,
        y: 276
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 532,
        y: 348
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 535,
        y: 154
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 246,
        y: 157
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 240,
        y: 220
      }
    });
    await page.getByRole('img', { name: 'Settings' }).click();
    await page
      .locator('div')
      .filter({ hasText: /^Parallel Snap$/ })
      .locator('div')
      .nth(3)
      .click();
    await page.getByRole('img', { name: 'Settings' }).click();
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 427,
        y: 294
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 421,
        y: 234
      }
    });
    await page.getByRole('img', { name: 'Settings' }).click();
    await page
      .locator('div')
      .filter({ hasText: /^Parallel Snap$/ })
      .locator('div')
      .nth(3)
      .click();
    await page.getByRole('img', { name: 'Settings' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 530,
        y: 296
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 534,
        y: 213
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 401,
        y: 249
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 442,
        y: 246
      }
    });
    const point = { x: 342, y: 174 };
    const actualGeometry = await getGeometry(page, point);
    await expect(actualGeometry).toHaveGeometryV0('ParametricEdit_66.geom', geometryDir);
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_66.png', { maxDiffPixels: 960 });
    const component = await getSnaptrudeDS(page, point);
    await expect(component.type).toBe('Mass');
  });

  /**
   * @id Parametric Edit_0067
   * @description Check user is able to push/pull edit & edit on drawn mass in 2D/3D or not after enable/disable orthogonal snap in PP
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw mass
   * 4.enable/disable orthogonal snap in PP
   * 5.Select push/pull edit/edit tool
   * 6.push/pull edit/edit on mass
   *
   *
   * @expected Users should be able to perform push/pull edits and regular edits on drawn mass in 2D/3D after enable/disable orthogonal snap in PP
   */
  test('ParametricEdit_0067', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 238,
        y: 237
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 234,
        y: 392
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 339,
        y: 429
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 440,
        y: 389
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 450,
        y: 230
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 343,
        y: 204
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 237,
        y: 234
      }
    });
    await page.getByRole('img', { name: 'Settings' }).click();
    await page
      .locator('div')
      .filter({ hasText: /^Orthogonal Snap$/ })
      .locator('div')
      .nth(3)
      .click();
    await page.getByRole('img', { name: 'Settings' }).click();
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 446,
        y: 299
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 518,
        y: 297
      }
    });
    await page.getByRole('img', { name: 'Settings' }).click();
    await page
      .locator('div')
      .filter({ hasText: /^Orthogonal Snap$/ })
      .locator('div')
      .nth(3)
      .click();
    await page.getByRole('img', { name: 'Settings' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 239,
        y: 323
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 175,
        y: 311
      }
    });
    const point = { x: 380, y: 268 };
    const actualGeometry = await getGeometry(page, point);
    await expect(actualGeometry).toHaveGeometryV0('ParametricEdit_67.geom', geometryDir);
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_67.png', { maxDiffPixels: 960 });
    const component = await getSnaptrudeDS(page, point);
    await expect(component.type).toBe('Mass');
  });

  /**
   * @id Parametric Edit_0068
   * @description Check user is able to push/pull edit & edit on drawn mass in 2D/3D or not after enable/disable normal snap in PP
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw mass
   * 4.enable/disable normal snap in PP
   * 5.Select push/pull edit/edit tool
   * 6.push/pull edit/edit on mass
   *
   *
   * @expected Users should be able to perform push/pull edits and regular edits on drawn mass in 2D/3D after enable/disable normal snap in PP
   */
  test('ParametricEdit_0068', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 285,
        y: 218
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 282,
        y: 387
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 447,
        y: 389
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 446,
        y: 220
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 291,
        y: 218
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 383,
        y: 217
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 378,
        y: 163
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 517,
        y: 160
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 519,
        y: 313
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 454,
        y: 315
      }
    });
    await page.getByRole('img', { name: 'Settings' }).click();
    await page
      .locator('div')
      .filter({ hasText: /^Normal Snap$/ })
      .locator('div')
      .nth(3)
      .click();
    await page.getByRole('img', { name: 'Settings' }).click();
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 399,
        y: 215
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 401,
        y: 270
      }
    });
    await page.getByRole('img', { name: 'Settings' }).click();
    await page
      .locator('div')
      .filter({ hasText: /^Normal Snap$/ })
      .locator('div')
      .nth(3)
      .click();
    await page.getByRole('img', { name: 'Settings' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 450,
        y: 292
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 424,
        y: 290
      }
    });
    const point1 = { x: 311, y: 250 };
    const actualGeometry1 = await getGeometry(page, point1);
    await expect(actualGeometry1).toHaveGeometryV0('ParametricEdit_68_1.geom', geometryDir);
    const point2 = { x: 475, y: 190 };
    const actualGeometry2 = await getGeometry(page, point2);
    await expect(actualGeometry2).toHaveGeometryV0('ParametricEdit_68_2.geom', geometryDir);
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_68.png', { maxDiffPixels: 960 });
    const component = await getSnaptrudeDS(page, point1);
    await expect(component.type).toBe('Mass');
  });

  /**
   * @id Parametric Edit_0069
   * @description Check user is able to push/pull edit & edit on drawn mass in 2D/3D or not after save as project
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw mass
   * 4.Select push/pull edit/edit tool
   * 5.push/pull edit/edit on mass
   * 6.Save as project
   * 7.push/pull edit/edit on mass
   *
   *
   * @expected Users should be able to perform push/pull edits and regular edits on drawn mass in 2D/3D after save as project
   */
  test('ParametricEdit_0069', async () => {
    test.setTimeout(250000);
    await page.evaluate(() => {
      // @ts-ignore
      store.exposed.autoSaveConfig.disableToasts();
      // @ts-ignore
      store.exposed.autoSaveConfig.enable();
    });
    await page.reload();
    await page.waitForSelector('.project-is-ready', {
      state: 'attached',
      timeout: 60000
    });
    await clearCanvas(page);
    await toggle2D(page);
    await ensureDrawMode(page);
    await reset2DCameraVersion0(page);
    await page.locator('#canvas').click({
      position: {
        x: 226,
        y: 223
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 227,
        y: 389
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 443,
        y: 390
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 436,
        y: 220
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 225,
        y: 218
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 229,
        y: 308
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 440,
        y: 305
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 330,
        y: 222
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 332,
        y: 303
      }
    });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 372,
        y: 306
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 369,
        y: 344
      }
    });
    await page.getByText('ParametricEd...').click();
    await page.getByText('Save As', { exact: true }).click();
    await page.getByPlaceholder('Save as project name').click();
    await page.getByPlaceholder('Save as project name').press('Control+a');
    await page.getByPlaceholder('Save as project name').fill('ParametricEditCopy');
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Save' }).click();
    const page1 = await page1Promise;
    await page1.waitForSelector('.project-is-ready', {
      state: 'attached',
      timeout: 60000
    });

    await page1.getByRole('img', { name: 'edit' }).click();
    await page1.locator('#canvas').click({
      position: {
        x: 838,
        y: 371
      }
    });
    await page1.locator('#canvas').click({
      position: {
        x: 905,
        y: 364
      }
    });
    await page1.locator('#canvas').click({
      position: {
        x: 770,
        y: 512
      }
    });
    await page1.locator('#canvas').click({
      position: {
        x: 772,
        y: 550
      }
    });
    await page1.locator('#canvas').click({
      position: {
        x: 703,
        y: 207
      }
    });
    await page1.locator('#canvas').click({
      position: {
        x: 709,
        y: 126
      }
    });
    await page1.locator('#canvas').click({
      position: {
        x: 442,
        y: 255
      }
    });
    await page1.locator('#canvas').click({
      position: {
        x: 355,
        y: 251
      }
    });
    await expect(page1).toHaveCanvasSnapshot('ParametricEdit_69.png', { maxDiffPixels: 960 });
    await clearCanvas(page1);
    await page1.close();
    const point1 = { x: 240, y: 289 };
    const actualGeometry1 = await getGeometry(page, point1);
    await expect(actualGeometry1).toHaveGeometryV0('ParametricEdit_69_1.geom', geometryDir);
    const point2 = { x: 373, y: 317 };
    const actualGeometry2 = await getGeometry(page, point2);
    await expect(actualGeometry2).toHaveGeometryV0('ParametricEdit_69_2.geom', geometryDir);
    const component = await getSnaptrudeDS(page, point1);
    await expect(component.type).toBe('Mass');
    await page.evaluate(() => {
      // @ts-ignore
      store.exposed.autoSaveConfig.disableToasts();
      // @ts-ignore
      store.exposed.autoSaveConfig.disable();
    });
    await clearCanvas(page);
  });

  /**
   * @id Parametric Edit_0070
   * @description Check user is able to push/pull edit & edit on drawn mass in 2D/3D or not after refresh project
   *
   * @steps
   * 1.Create project
   * 2.Select mass
   * 3.Draw mass
   * 4.Select push/pull edit/edit tool
   * 5.push/pull edit/edit on mass
   * 6.refresh project
   * 7.push/pull edit/edit on mass
   *
   *
   * @expected Users should be able to perform push/pull edits and regular edits on drawn mass in 2D/3D after refresh project
   */
  test('ParametricEdit_0070', async () => {
    await page.evaluate(() => {
      // @ts-ignore
      store.exposed.autoSaveConfig.disableToasts();
      // @ts-ignore
      store.exposed.autoSaveConfig.enable();
    });
    await page.reload();
    await page.waitForSelector('.project-is-ready', {
      state: 'attached',
      timeout: 60000
    });
    await clearCanvas(page);
    await toggle2D(page);
    await ensureDrawMode(page);
    await reset2DCameraVersion0(page);
    await page.locator('#canvas').click({
      position: {
        x: 239,
        y: 236
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 240,
        y: 375
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 386,
        y: 375
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 380,
        y: 230
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 237,
        y: 233
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 385,
        y: 237
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 561,
        y: 227
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 562,
        y: 286
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 479,
        y: 305
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 393,
        y: 371
      }
    });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 472,
        y: 306
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 571,
        y: 369
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 558,
        y: 236
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 516,
        y: 242
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 562,
        y: 309
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 584,
        y: 310
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 387,
        y: 286
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 444,
        y: 288
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 581,
        y: 307
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 578,
        y: 235
      }
    });
    await page.evaluate(() => {
      // @ts-ignore
      store.exposed.autoSaveConfig.disableToasts();
      // @ts-ignore
      store.exposed.autoSaveConfig.enable();
    });
    await page.reload();
    await page.waitForSelector('.project-is-ready', {
      state: 'attached',
      timeout: 60000
    });
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 683,
        y: 354
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 587,
        y: 352
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 868,
        y: 332
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 749,
        y: 327
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 588,
        y: 391
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 532,
        y: 367
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 488,
        y: 453
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 492,
        y: 532
      }
    });
    await expect(page).toHaveCanvasSnapshot('ParametricEdit_70.png', { maxDiffPixels: 960 });
    const point1 = { x: 465, y: 311 };
    const actualGeometry1 = await getGeometry(page, point1);
    await expect(actualGeometry1).toHaveGeometryV0('ParametricEdit_70_1.geom', geometryDir);
    const point2 = { x: 683, y: 298 };
    const actualGeometry2 = await getGeometry(page, point2);
    await expect(actualGeometry2).toHaveGeometryV0('ParametricEdit_70_2.geom', geometryDir);
    const component = await getSnaptrudeDS(page, point1);
    await expect(component.type).toBe('Mass');
    await page.evaluate(() => {
      // @ts-ignore
      store.exposed.autoSaveConfig.disableToasts();
      // @ts-ignore
      store.exposed.autoSaveConfig.disable();
    });
    await clearCanvas(page);
  });
});
