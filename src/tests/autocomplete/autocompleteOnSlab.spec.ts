import { expect, test } from '../../common/fixtures';
import { Page } from '@playwright/test';
import { initProject, configure2DProjectForTestV0 } from '../../common/project';
import { clearCanvas } from '../../common/canvas';
import { createGeometryDir, getGeometry, getSnaptrudeDS } from '../../common/geometry';

test.describe('Autocomplete', () => {
  let page: Page;
  let geometryDir: string;
  const Mass = "//*[text()='Category']//..//*[text()='Mass']";
  const arc = "//*[@alt='arc']";

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
   * @id Autocomplete_0011
   * @description Verify the user can able to autocomplete the arc mass through vertices/edge or not in different storeys
   *
   * @steps
   * 1.Create project
   * 2.Select draw mass
   * 3.Draw a line+arc mass
   * 4.Storey copy
   * 5.Autocomplete any point on edge
   *
   * @expected Autocomplete on arc mass should done through vertices  in different storeys.
   */
  test('autocomplete_0011', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 229,
        y: 290
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 381,
        y: 288
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 378,
        y: 419
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 427,
        y: 360
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 227,
        y: 423
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 225,
        y: 296
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 176,
        y: 346
      }
    });
    await page.getByRole('img', { name: 'pointer' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 341,
        y: 319
      }
    });
    await page.locator('#canvas').press('Control+ArrowUp');
    await page.getByText('2', { exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 305,
        y: 220
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 229,
        y: 286
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 232,
        y: 205
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 384,
        y: 206
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 309,
        y: 218
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 379,
        y: 289
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 384,
        y: 242
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 508,
        y: 249
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 501,
        y: 358
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 535,
        y: 301
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 427,
        y: 356
      }
    });
    const Point1 = { x: 364, y: 319 };
    const Point2 = { x: 353, y: 238 };
    const actualGeometry1 = await getGeometry(page, Point1);
    const actualGeometry2 = await getGeometry(page, Point2);
    await expect(actualGeometry1).toHaveGeometryV0('differentStorey.geom', geometryDir);
    await expect(actualGeometry2).toHaveGeometryV0('differentStorey2.geom', geometryDir);
    await expect(page).toHaveCanvasSnapshot('Screenhot1.png', {
      maxDiffPixels: 960
    });
    let Component1 = await getSnaptrudeDS(page, Point1);
    expect(Component1.type).toBe('Mass');
    let Component2 = await getSnaptrudeDS(page, Point2);
    expect(Component2.type).toBe('Mass');
    await page.locator('#canvas').click({
      modifiers: ['Control'],
      position: {
        x: 378,
        y: 368
      }
    });
    await page.locator('#canvas').click({
      modifiers: ['Control'],
      position: {
        x: 486,
        y: 311
      }
    });
    await page.locator('#canvas').click({
      modifiers: ['Control'],
      position: {
        x: 335,
        y: 251
      }
    });
    await page.getByRole('img', { name: 'delete_icon' }).click();
    await page.locator('p').filter({ hasText: '1' }).click();
  });

  /**
   * @id Autocomplete_0012
   * @description Verify the user can able to autocomplete the line+arc mass through vertices/edge or not in different storeys
   *
   * @steps
   * 1.Create project
   * 2.Select draw mass
   * 3.Draw a line+arc mass
   * 4.Storey copy
   * 5.Autocomplete any point on edge
   *
   * @expected Autocomplete should done through vertices on line+arc mass  in different storeys.
   */

  test('Autocomplete_0012', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 307,
        y: 258
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 303,
        y: 455
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 408,
        y: 525
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 387,
        y: 523
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 498,
        y: 304
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 311,
        y: 253
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 337,
        y: 223
      }
    });
    await page.getByRole('img', { name: 'pointer' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 420,
        y: 250
      }
    });
    await page.locator('#canvas').press('Control+ArrowUp');
    await page.getByText('2', { exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 296,
        y: 137
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 453,
        y: 216
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 641,
        y: 223
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 599,
        y: 414
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 617,
        y: 411
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 457,
        y: 396
      }
    });

    const Point1 = { x: 406, y: 432 };
    const Point2 = { x: 577, y: 356 };
    const actualGeometry1 = await getGeometry(page, Point1);
    const actualGeometry2 = await getGeometry(page, Point2);
    await expect(actualGeometry1).toHaveGeometryV0('differentStoreylinearc1.geom', geometryDir);
    await expect(actualGeometry2).toHaveGeometryV0('differentStoreylinearc2.geom', geometryDir);
    await expect(page).toHaveCanvasSnapshot('Screenhot2.png', {
      maxDiffPixels: 960
    });
    let Component1 = await getSnaptrudeDS(page, Point1);
    expect(Component1.type).toBe('Mass');
    let Component2 = await getSnaptrudeDS(page, Point2);
    expect(Component2.type).toBe('Mass');
    await page.locator('#canvas').click({
      position: {
        x: 408,
        y: 448
      }
    });
    await page.locator('#canvas').click({
      modifiers: ['Control'],
      position: {
        x: 588,
        y: 361
      }
    });
    await page.getByRole('img', { name: 'delete_icon' }).click();
    await page.locator('p').filter({ hasText: '1' }).click();
  });

  /**
   * @id Autocomplete_0013
   * @description Verify the user can able to autocomplete the line slab through vertices or not.
   *
   * @steps
   * 1.Create project
   * 2.Select draw slab
   * 3.Draw a line slab
   * 4.Autocomplete through vertices
   *
   * @expected Autocomplete should done through vertices on line slab.
   */

  test('autocomplete_0013', async () => {
    await page.getByRole('img', { name: 'Slab' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 221,
        y: 227
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 427,
        y: 228
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 435,
        y: 400
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 230,
        y: 403
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 241,
        y: 229
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 423,
        y: 229
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 606,
        y: 226
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 600,
        y: 397
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 428,
        y: 394
      }
    });
    const Point1 = { x: 400, y: 368 };
    const Point2 = { x: 546, y: 370 };
    const actualGeometry1 = await getGeometry(page, Point1);
    const actualGeometry2 = await getGeometry(page, Point2);
    await expect(actualGeometry1).toHaveGeometryV0('slabline1.geom', geometryDir);
    await expect(actualGeometry2).toHaveGeometryV0('Slabline2.geom', geometryDir);
    await expect(page).toHaveCanvasSnapshot('Screenhot3.png', {
      maxDiffPixels: 960
    });
    let Component1 = await getSnaptrudeDS(page, Point1);
    expect(Component1.type).toBe('Roof');
    let Component2 = await getSnaptrudeDS(page, Point2);
    expect(Component2.type).toBe('Roof');
    await page.getByRole('img', { name: 'Space' }).click();
  });

  /**
   * @id Autocomplete_0014
   * @description Verify the user can able to autocomplete the arc slab through vertices or not.
   *
   * @steps
   * 1.Create project
   * 2.Select draw slab
   * 3.Draw a arc slab
   * 4.Autocomplete through vertices
   *
   * @expected Autocomplete on arc slab should done through vertices.
   */

  test('autocomplete_0014', async () => {
    await page.getByRole('img', { name: 'Slab' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 231,
        y: 281
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 415,
        y: 271
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 411,
        y: 396
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 454,
        y: 334
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 418,
        y: 485
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 366,
        y: 486
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 366,
        y: 399
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 230,
        y: 393
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 235,
        y: 280
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 206,
        y: 333
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 231,
        y: 279
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 235,
        y: 190
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 419,
        y: 199
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 318,
        y: 152
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 410,
        y: 280
      }
    });
    const Point1 = { x: 327, y: 309 };
    const Point2 = { x: 348, y: 237 };
    const actualGeometry1 = await getGeometry(page, Point1);
    const actualGeometry2 = await getGeometry(page, Point2);
    await expect(actualGeometry1).toHaveGeometryV0('slabarc1.geom', geometryDir);
    await expect(actualGeometry2).toHaveGeometryV0('Slabarc2.geom', geometryDir);
    await expect(page).toHaveCanvasSnapshot('Screenhot4.png', {
      maxDiffPixels: 960
    });
    let Component1 = await getSnaptrudeDS(page, Point1);
    expect(Component1.type).toBe('Roof');
    let Component2 = await getSnaptrudeDS(page, Point2);
    expect(Component2.type).toBe('Roof');
    await page.getByRole('img', { name: 'Space' }).click();
  });

  /**
   * @id Autocomplete_0015
   * @description Verify the user can able to autocomplete the line+arc slab through vertices or not.
   *
   * @steps
   * 1.Create project
   * 2.Select draw slab
   * 3.Draw a line+arc slab
   * 4.Autocomplete through vertices
   *
   * @expected Autocomplete should done through vertices on line+arc slab.
   */

  test('autocomplete_0015', async () => {
    await page.getByRole('img', { name: 'Slab' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 279,
        y: 279
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 271,
        y: 419
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 413,
        y: 421
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 408,
        y: 433
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 410,
        y: 281
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 288,
        y: 281
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 301,
        y: 232
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 412,
        y: 277
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 516,
        y: 282
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 518,
        y: 420
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 541,
        y: 386
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 417,
        y: 417
      }
    });
    const Point1 = { x: 378, y: 337 };
    const Point2 = { x: 492, y: 337 };
    const actualGeometry1 = await getGeometry(page, Point1);
    const actualGeometry2 = await getGeometry(page, Point2);
    await expect(actualGeometry1).toHaveGeometryV0('Slabarclinevertices1.geom', geometryDir);
    await expect(actualGeometry2).toHaveGeometryV0('Slabarclinevetices2.geom', geometryDir);
    await expect(page).toHaveCanvasSnapshot('screenshot5.png', {
      maxDiffPixels: 960
    });
    let Component1 = await getSnaptrudeDS(page, Point1);
    expect(Component1.type).toBe('Roof');
    let Component2 = await getSnaptrudeDS(page, Point2);
    expect(Component2.type).toBe('Roof');
    await page.getByRole('img', { name: 'Space' }).click();
  });

  /**
   * @id Autocomplete_0016
   * @description Verify the user can able to autocomplete the line slab through any point on the edge or not
   *
   * @steps
   * 1.Create project
   * 2.Select draw slab
   * 3.Draw a line slab
   * 4.Autocomplete any point on edge
   *
   * @expected Autocomplete should done through any point of edge on line slab.
   */

  test('autocomplete_0016', async () => {
    await page.getByRole('img', { name: 'Slab' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 324,
        y: 235
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 328,
        y: 410
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 525,
        y: 407
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 517,
        y: 232
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 327,
        y: 247
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 418,
        y: 231
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 428,
        y: 169
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 627,
        y: 192
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 627,
        y: 340
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 527,
        y: 340
      }
    });

    const Point1 = { x: 465, y: 377 };
    const Point2 = { x: 571, y: 280 };
    const actualGeometry1 = await getGeometry(page, Point1);
    const actualGeometry2 = await getGeometry(page, Point2);
    await expect(actualGeometry1).toHaveGeometryV0('slablineedge1.geom', geometryDir);
    await expect(actualGeometry2).toHaveGeometryV0('Slablineedge2.geom', geometryDir);
    await expect(page).toHaveCanvasSnapshot('Screenhot6.png', {
      maxDiffPixels: 960
    });
    let Component1 = await getSnaptrudeDS(page, Point1);
    expect(Component1.type).toBe('Roof');
    let Component2 = await getSnaptrudeDS(page, Point2);
    expect(Component2.type).toBe('Roof');
    await page.getByRole('img', { name: 'Space' }).click();
  });

  /**
   * @id Autocomplete_0017
   * @description Verify the user can able to autocomplete the arc slab through any point on the edge or not
   *
   * @steps
   * 1.Create project
   * 2.Select draw slab
   * 3.Draw a arc slab
   * 4.Autocomplete any point on edge
   *
   * @expected Autocomplete should done through anyone point of edge on arc slab.
   */

  test('autocomplete_0017', async () => {
    await page.getByRole('img', { name: 'Slab' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 202,
        y: 289
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 344,
        y: 292
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 354,
        y: 403
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 382,
        y: 350
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 205,
        y: 403
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 200,
        y: 291
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 168,
        y: 350
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 276,
        y: 405
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 278,
        y: 484
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 422,
        y: 479
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 351,
        y: 523
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 424,
        y: 339
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 385,
        y: 337
      }
    });
    const Point1 = { x: 318, y: 345 };
    const Point2 = { x: 380, y: 456 };
    const actualGeometry1 = await getGeometry(page, Point1);
    const actualGeometry2 = await getGeometry(page, Point2);
    await expect(actualGeometry1).toHaveGeometryV0('slabarcedge1.geom', geometryDir);
    await expect(actualGeometry2).toHaveGeometryV0('Slabarcedge2.geom', geometryDir);
    await expect(page).toHaveCanvasSnapshot('Screenhot7.png', {
      maxDiffPixels: 960
    });
    let Component1 = await getSnaptrudeDS(page, Point1);
    expect(Component1.type).toBe('Roof');
    let Component2 = await getSnaptrudeDS(page, Point2);
    expect(Component2.type).toBe('Roof');
  });

  /**
   * @id Autocomplete_0018
   * @description Verify the user can able to autocomplete the line+arc slab through any point on the edge or not.
   *
   * @steps
   * 1.Create project
   * 2.Select draw slab
   * 3.Draw a line+arc slab
   * 4.Autocomplete any point on edge
   *
   * @expected Autocomplete should done through anypoint of edge on line+arc slab.
   */

  test('autocomplete_0018', async () => {
    await page.getByRole('img', { name: 'Slab' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 210,
        y: 252
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 212,
        y: 413
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 352,
        y: 423
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 326,
        y: 391
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 433,
        y: 422
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 440,
        y: 248
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 210,
        y: 253
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 213,
        y: 225
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 280,
        y: 375
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 277,
        y: 467
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 488,
        y: 458
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 483,
        y: 496
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 489,
        y: 363
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 436,
        y: 368
      }
    });
    const Point1 = { x: 403, y: 319 };
    const Point2 = { x: 461, y: 462 };
    const actualGeometry1 = await getGeometry(page, Point1);
    const actualGeometry2 = await getGeometry(page, Point2);
    await expect(actualGeometry1).toHaveGeometryV0('slablinearcedge1.geom', geometryDir);
    await expect(actualGeometry2).toHaveGeometryV0('Slablinearcedge2.geom', geometryDir);
    await expect(page).toHaveCanvasSnapshot('Screenhot8.png', {
      maxDiffPixels: 960
    });
    let Component1 = await getSnaptrudeDS(page, Point1);
    expect(Component1.type).toBe('Roof');
    let Component2 = await getSnaptrudeDS(page, Point2);
    expect(Component2.type).toBe('Roof');
    await page.getByRole('img', { name: 'Space' }).click();
  });

  /**
   * @id Autocomplete_0019
   * @description Verify the user can able to autocomplete the line slab through any point on multiple edge or not.
   *
   * @steps
   * 1.Create project
   * 2.Select draw slab
   * 3.Draw a line slab
   * 4.Autocomplete any point on multiple edge
   *
   * @expected Autocomplete should done through any point on multiple edge on line slab.
   */

  test('autocomplete_0019', async () => {
    await page.getByRole('img', { name: 'Slab' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 231,
        y: 310
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 228,
        y: 426
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 383,
        y: 433
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 391,
        y: 307
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 229,
        y: 306
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 298,
        y: 308
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 312,
        y: 248
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 483,
        y: 253
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 491,
        y: 373
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 387,
        y: 382
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 337,
        y: 427
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 342,
        y: 492
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 560,
        y: 486
      }
    });

    await page.locator('#canvas').click({
      position: {
        x: 542,
        y: 318
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 485,
        y: 316
      }
    });
    const Point1 = { x: 332, y: 367 };
    const Point2 = { x: 474, y: 307 };
    const Point3 = { x: 517, y: 419 };
    const actualGeometry1 = await getGeometry(page, Point1);
    const actualGeometry2 = await getGeometry(page, Point2);
    const actualGeometry3 = await getGeometry(page, Point3);
    await expect(actualGeometry1).toHaveGeometryV0('slablMultiine1.geom', geometryDir);
    await expect(actualGeometry2).toHaveGeometryV0('SlabMultiline2.geom', geometryDir);
    await expect(actualGeometry3).toHaveGeometryV0('SlabMultiline3.geom', geometryDir);
    await expect(page).toHaveCanvasSnapshot('Screenhot9.png', {
      maxDiffPixels: 960
    });
    let Component1 = await getSnaptrudeDS(page, Point1);
    expect(Component1.type).toBe('Roof');
    let Component2 = await getSnaptrudeDS(page, Point2);
    expect(Component2.type).toBe('Roof');
    let Component3 = await getSnaptrudeDS(page, Point3);
    expect(Component3.type).toBe('Roof');
    await page.getByRole('img', { name: 'Space' }).click();
  });

  /**
   * @id Autocomplete_0020
   * @description Verify the user can able to autocomplete the arc slab through any point on the multiple edge or not.
   *
   * @steps
   * 1.Create project
   * 2.Select draw slab
   * 3.Draw a arc slab
   * 4.Autocomplete any point on multiple edge
   *
   * @expected Autocomplete should done through any point on multiple edge on line slab.
   */

  test('Autocomplete_0020', async () => {
    await page.getByRole('img', { name: 'Slab' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 221,
        y: 281
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 461,
        y: 285
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 453,
        y: 447
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 522,
        y: 362
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 222,
        y: 446
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 222,
        y: 282
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 260,
        y: 367
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 524,
        y: 354
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 663,
        y: 355
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 649,
        y: 544
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 714,
        y: 452
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 341,
        y: 544
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 343,
        y: 446
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 386,
        y: 274
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 383,
        y: 208
      }
    });
    await page.getByRole('img', { name: 'arc' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 136,
        y: 209
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 257,
        y: 145
      }
    });
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    await page.locator('#canvas').click({
      position: {
        x: 143,
        y: 362
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 258,
        y: 361
      }
    });
    const Point1 = { x: 386, y: 346 };
    const Point2 = { x: 313, y: 214 };
    const actualGeometry1 = await getGeometry(page, Point1);
    const actualGeometry2 = await getGeometry(page, Point2);
    await expect(actualGeometry1).toHaveGeometryV0('slablMultiArc1.geom', geometryDir);
    await expect(actualGeometry2).toHaveGeometryV0('SlabMultiArc2.geom', geometryDir);
    await expect(page).toHaveCanvasSnapshot('Screenhot10.png', {
      maxDiffPixels: 960
    });
    let Component1 = await getSnaptrudeDS(page, Point1);
    expect(Component1.type).toBe('Roof');
    let Component2 = await getSnaptrudeDS(page, Point2);
    expect(Component2.type).toBe('Roof');
    await page.getByRole('img', { name: 'Space' }).click();
  });
});
