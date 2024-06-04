import { expect, test } from '../../common/fixtures';
import { Page } from '@playwright/test';
import { initProject, configure2DProjectForTestV0 } from '../../common/project';
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
 * @id TC_DT_185
 * @description Check user able to draw Angular slab , using object type as slab
 * @steps
 *  1 Enter Url 2 Login 3 Create Project 4 Select Draw Tool 5 Select Object type as slab 6 Draw Angular slab
 * @expected User should able to draw Angular slab
 */
test.skip('TC_DT_185', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 439,
      y: 447
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 569,
      y: 406
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 569,
      y: 482
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 402,
      y: 542
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 437,
      y: 444
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 659,
      y: 463
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 644,
      y: 553
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 720,
      y: 554
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 736,
      y: 606
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 831,
      y: 596
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 821,
      y: 538
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 762,
      y: 533
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 736,
      y: 455
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 660,
      y: 462
    }
  });
  const point1 = { x: 465, y: 467 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('drawTabAngualrSlab1.geom', geometryDir);
  const point2 = { x: 702, y: 508 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('drawTabAngualrSlab2.geom', geometryDir);
  const component = await getSnaptrudeDS(page, point1);
  expect(component.type).toBe('Roof');
  await expect(page).toHaveCanvasSnapshot('drawTabAngualrSlab.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_186
 * @description Check user able to Draw two edge Arc slab , using object type as slab
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw ARC tool 4 Select Object type as slab 5 Draw two edge ARC slab
 * @expected User should be able to draw two edge Arc slab
 */
test('TC_DT_186', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 433,
      y: 468
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 542,
      y: 432
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 470,
      y: 419
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 441,
      y: 466
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 470,
      y: 440
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 664,
      y: 429
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 724,
      y: 488
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 654,
      y: 490
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 667,
      y: 435
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 652,
      y: 447
    }
  });
  const point1 = { x: 486, y: 417 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('drawTwoEdgeArcSlab1.geom', geometryDir);
  const point2 = { x: 653, y: 468 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('drawTwoEdgeArcSlab2.geom', geometryDir);
  const component = await getSnaptrudeDS(page, point1);
  expect(component.type).toBe('Roof');
  await expect(page).toHaveCanvasSnapshot('drawTwoEdgeArcSlab.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_187
 * @description Check user able to Draw semicircle slab Arc, using object type as slab
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw ARC tool 4 Select Object type as slab 5 Draw semi-circle slab ARC
 * @expected User should be able to draw semi - circle slab Arc
 */
test('TC_DT_187', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'arc' }).click();
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 534,
      y: 422
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 610,
      y: 499
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 634,
      y: 441
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 534,
      y: 426
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 536,
      y: 425
    }
  });
  const point = { x: 598, y: 449 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('drawSemicircleArcSlab.geom', geometryDir);
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Roof');
  await expect(page).toHaveCanvasSnapshot('drawSemicircleArcSlab.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_188
 * @description Check user able to Draw multiple- edge slab Arc
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw ARC tool 4 Select Object type as slab 5 Draw multiple edge slab ARC
 * @expected User should be able to draw multiple edge slab Arc
 */
test('TC_DT_188', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'arc' }).click();
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 403,
      y: 452
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 521,
      y: 422
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 493,
      y: 418
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 575,
      y: 431
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 579,
      y: 416
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 497,
      y: 468
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 531,
      y: 475
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 449,
      y: 501
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 458,
      y: 502
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 396,
      y: 455
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 441,
      y: 453
    }
  });
  const point = { x: 498, y: 436 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('drawMultipleEdgeArcSlab.geom', geometryDir);
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Roof');
  await expect(page).toHaveCanvasSnapshot('drawMultipleEdgeArcSlab.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_189
 * @description Check user able to Draw Line + Arc slab
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw ARC/Line tool 4 Select Object type as slab 5 Draw Line + ARC slab
 * @expected User should be able to draw Line + Arc slab
 */
test('TC_DT_189', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'arc' }).click();
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 589,
      y: 392
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 661,
      y: 465
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 677,
      y: 456
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 585,
      y: 391
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 471,
      y: 443
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 541,
      y: 515
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 551,
      y: 449
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 569,
      y: 460
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 476,
      y: 439
    }
  });

  const point1 = { x: 653, y: 409 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('drawLinePlusArcSlab1.geom', geometryDir);
  const point2 = { x: 525, y: 463 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('drawLinePlusArcSlab2.geom', geometryDir);
  const component = await getSnaptrudeDS(page, point1);
  expect(component.type).toBe('Roof');
  await expect(page).toHaveCanvasSnapshot('drawLinePlusArcSlab.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_190
 * @description Check user able to Draw different shape of line + Arc combination slab
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw Line/ARC tool 4 Select Object type as slab 5 Draw different shape of Line + ARC combination slab
 * @expected user should be able to Draw different shape of line + Arc combination slab
 */
test('TC_DT_190', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 477,
      y: 422
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 515,
      y: 496
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 624,
      y: 460
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 620,
      y: 469
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 569,
      y: 393
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 481,
      y: 416
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 536,
      y: 417
    }
  });
  const point = { x: 539, y: 456 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('drawDifferentShapeLineArcSlab.geom', geometryDir);
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Roof');
  await expect(page).toHaveCanvasSnapshot('drawDifferentShapeLineArcSlab.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_192
 * @description Check user able to Draw Column by using Column Object type or not
 * @steps
 *  1 Enter Url 2 Login 3 Create Project 4 Draw Column
 * @expected User should able to Draw Column, by using object type asColumn
 */
test('TC_DT_192', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'Column' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 517,
      y: 417
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 534,
      y: 448
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 576,
      y: 426
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 564,
      y: 409
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 520,
      y: 421
    }
  });
  const point = { x: 555, y: 425 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('drawColumnUsingColumnObject.geom', geometryDir);
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
  await expect(page).toHaveCanvasSnapshot('drawColumnUsingColumnObject.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_193
 * @description Check that the user is able to draw default thickness 25 mm Column value using Column Object type or not
 * @steps
 *  1 Enter Url 2 Login 3 Create Project 4 Select Draw Line tool 5 Select Object type as Column 6 Draw Column thickness value (25mm)
 * @expected user should be able to draw the default thickness value of 25 mm for the Column
 */
test('TC_DT_193', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'Column' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 502,
      y: 421
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 544,
      y: 493
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 650,
      y: 447
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 603,
      y: 395
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 510,
      y: 422
    }
  });
  const point = { x: 601, y: 424 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('drawColumnWithDefaultThickness.geom', geometryDir);
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
  await expect(page).toHaveCanvasSnapshot('drawColumnWithDefaultThickness.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_194
 * @description Check user able to draw orthogonal Column, using object type as Column
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw line 4 Select Object type as Column 6 Draw orthogonal Column
 * @expected User should be able to draw orthogonal Column
 */
test('TC_DT_194', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'Column' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 539,
      y: 410
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 377,
      y: 467
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 417,
      y: 580
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 527,
      y: 542
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 478,
      y: 470
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 571,
      y: 436
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 539,
      y: 407
    }
  });
  const point = { x: 463, y: 467 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('drawOrthogonalColumn.geom', geometryDir);
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
  await expect(page).toHaveCanvasSnapshot('drawOrthogonalColumn.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_196
 * @description Check user able to Draw two edge Arc Column , using object type as Column
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw ARC tool 4 Select Object type as Column 5 Draw two edge ARC Column
 * @expected User should be able to draw two edge Arc Column
 */
test('TC_DT_196', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'arc' }).click();
  await page.getByRole('img', { name: 'Column' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 502,
      y: 439
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 629,
      y: 402
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 575,
      y: 390
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 505,
      y: 434
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 550,
      y: 409
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 548,
      y: 503
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 676,
      y: 460
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 684,
      y: 473
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 551,
      y: 498
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 607,
      y: 498
    }
  });
  const point1 = { x: 514, y: 370 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('drawTwoEdgeArcColumn1.geom', geometryDir);
  const point2 = { x: 633, y: 492 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry1).toHaveGeometryV0('drawTwoEdgeArcColumn2.geom', geometryDir);
  const component = await getSnaptrudeDS(page, point1);
  expect(component.type).toBe('Mass');
  await expect(page).toHaveCanvasSnapshot('drawTwoEdgeArcColumn.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});
