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
 * @id TC_DT_142
 * @description Check user able to Draw semicircle Arc wall on the ground plane by using wall object type in 3D
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw ARC tool 4 Select Object type as Wall 5 Draw semi-circle ARC wall
 * @expected User should be able to draw semi - circleArc wall on the ground plane
 */
test('TC_DT_142', async () => {
  await page.getByRole('img', { name: 'arc' }).click();
  await page.getByRole('img', { name: 'Wall' }).click();
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.locator('#canvas').click({
    position: {
      x: 448,
      y: 517
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 536,
      y: 478
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 475,
      y: 466
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 456,
      y: 513
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 470,
      y: 491
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 646,
      y: 489
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 707,
      y: 569
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 744,
      y: 507
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 644,
      y: 490
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 668,
      y: 513
    }
  });
  const point1 = { x: 433, y: 459 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('draw3DSemiCircleArcWall1.geom', geometryDir);
  const point2 = { x: 745, y: 506 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('draw3DSemiCircleArcWall2.geom', geometryDir);

  const point3 = { x: 674, y: 464 };
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('draw3DSemiCircleArcWall3.geom', geometryDir);
  const point4 = { x: 476, y: 426 };
  const actualGeometry4 = await getGeometry(page, point4);
  await expect(actualGeometry4).toHaveGeometryV0('draw3DSemiCircleArcWall4.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('draw3DSemiCircleArcWall1.png');
  const component = await getSnaptrudeDS(page, point1);
  expect(component.type).toBe('Wall');
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_143
 * @description Check user able to Draw multiple- edge Arc wall on the ground plane by using wall object type in 3D
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw ARC tool 4 Select Object type as Wall 5 Draw multiple edge ARC wall
 * @expected User should be able to draw multiple edge Arc wall on the ground plane
 */
test('TC_DT_143', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 421,
      y: 451
    }
  });
  await page.locator('#canvas').press('Escape');
  await page.getByRole('img', { name: 'Wall' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 384,
      y: 477
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 468,
      y: 463
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 428,
      y: 435
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 539,
      y: 436
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 525,
      y: 418
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 612,
      y: 416
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 584,
      y: 401
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 381,
      y: 478
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 459,
      y: 528
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 66,
      y: 513
    }
  });

  const point1 = { x: 524, y: 479 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('draw3DMultipleEdgeArcWall1.geom', geometryDir);

  const point2 = { x: 562, y: 500 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('draw3DMultipleEdgeArcWall2.geom', geometryDir);
  const point3 = { x: 486, y: 369 };
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('draw3DMultipleEdgeArcWall3.geom', geometryDir);
  const point4 = { x: 562, y: 356 };
  const actualGeometry4 = await getGeometry(page, point4);
  await expect(actualGeometry4).toHaveGeometryV0('draw3DMultipleEdgeArcWall4.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('draw3DMultipleEdgeArcWall1.png');
  const component = await getSnaptrudeDS(page, point1);
  expect(component.type).toBe('Wall');
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_144
 * @description Check user able to Draw Line + Arc wall on the ground plane by using wall object type in 3D
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw ARC/Line tool 4 Select Object type as Wall 5 Draw Line + ARC wall
 * @expected User should be able to draw Line + Arc wall on the ground plane
 */
test('TC_DT_144', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'arc' }).click();
  await page.getByRole('img', { name: 'Wall' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 420,
      y: 462
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
      x: 475,
      y: 418
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 577,
      y: 487
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 460,
      y: 525
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 546,
      y: 535
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 419,
      y: 454
    }
  });
  const point1 = { x: 528, y: 481 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('draw3DLineplusArcWall1.geom', geometryDir);

  const point2 = { x: 424, y: 438 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('draw3DLineplusArcWall2.geom', geometryDir);
  const point3 = { x: 452, y: 371 };
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('draw3DLineplusArcWall3.geom', geometryDir);
  const point4 = { x: 554, y: 401 };
  const actualGeometry4 = await getGeometry(page, point4);
  await expect(actualGeometry4).toHaveGeometryV0('draw3DLineplusArcWall4.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('draw3DLineplusArcWall1.png');
  const component = await getSnaptrudeDS(page, point1);
  expect(component.type).toBe('Wall');
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_145
 * @description Check user able to Draw different shape of line + Arc combination wall on the ground plane by using wall object type in 3D
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw Line/ARC tool 4 Select Object type as Wall 5 Draw different shape of Line + ARC combination wall
 * @expected user should be able to Draw different shape of line + Arc combination wall on the ground plane
 */
// TODO identify the issue with the test
test.skip('draw3DdifferentLineplusArcWall', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'arc' }).click();
  await page.getByRole('img', { name: 'Wall' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 347,
      y: 482
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 439,
      y: 460
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 421,
      y: 452
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 510,
      y: 431
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 550,
      y: 467
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 554,
      y: 452
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 465,
      y: 489
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 347,
      y: 477
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 370,
      y: 569
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  const point1 = { x: 482, y: 466 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0(
    'draw3DdifferentLineplusArcWall1.geom',
    geometryDir
  );
  const point2 = { x: 386, y: 433 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0(
    'draw3DdifferentLineplusArcWall2.geom',
    geometryDir
  );
  const point3 = { x: 368, y: 396 };
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0(
    'draw3DdifferentLineplusArcWall3.geom',
    geometryDir
  );
  const point4 = { x: 476, y: 392 };
  const actualGeometry4 = await getGeometry(page, point4);
  await expect(actualGeometry4).toHaveGeometryV0(
    'draw3DdifferentLineplusArcWall4.geom',
    geometryDir
  );
  const point5 = { x: 537, y: 367 };
  const actualGeometry5 = await getGeometry(page, point5);
  await expect(actualGeometry5).toHaveGeometryV0(
    'draw3DdifferentLineplusArcWall5.geom',
    geometryDir
  );
  await expect(page).toHaveCanvasSnapshot('draw3DdifferentLineplusArcWall1.png');
  const component = await getSnaptrudeDS(page, point1);
  expect(component.type).toBe('Wall');
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_147
 * @description Check user able to draw orthogonal/Line wall on the upper storey plane by using wall object type in 3D
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw line 4 Select Object type as Wall 6 Draw orthogonal/ Line wall
 * @expected User should be able to draw orthogonal/Line wall on the upper storey plane
 */
test('TC_DT_147', async () => {
  test.setTimeout(200000);
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'Wall' }).click();
  await page.getByRole('img', { name: 'storey_down' }).first().click();
  await page.getByRole('button', { name: 'Create new storey above' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 541,
      y: 411
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 341,
      y: 473
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 402,
      y: 588
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 531,
      y: 550
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 488,
      y: 480
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 580,
      y: 463
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 536,
      y: 409
    }
  });

  const point1 = { x: 468, y: 517 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('drawOrthogonalWall2ndStorey1.geom', geometryDir);
  const point2 = { x: 353, y: 486 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('drawOrthogonalWall2ndStorey2.geom', geometryDir);
  const point3 = { x: 382, y: 412 };
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('drawOrthogonalWall2ndStorey3.geom', geometryDir);
  const point4 = { x: 548, y: 374 };
  const actualGeometry4 = await getGeometry(page, point4);
  await expect(actualGeometry4).toHaveGeometryV0('drawOrthogonalWall2ndStorey4.geom', geometryDir);
  const point5 = { x: 539, y: 427 };
  const actualGeometry5 = await getGeometry(page, point5);
  await expect(actualGeometry5).toHaveGeometryV0('drawOrthogonalWall2ndStorey5.geom', geometryDir);
  const point6 = { x: 501, y: 456 };
  const actualGeometry6 = await getGeometry(page, point6);
  await expect(actualGeometry6).toHaveGeometryV0('drawOrthogonalWall2ndStorey6.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('drawOrthogonalWall2ndStorey1.png');
  const component = await getSnaptrudeDS(page, point1);
  expect(component.type).toBe('Wall');
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_148
 * @description Check user able to draw Angled wall on the upper storey plane by using wall object type in 3D
 * @steps
 *  1 Enter Url 2 Login 3 Create Project 4 Select Draw Tool 5 Select Object type as Wall 6 Draw Angled wall
 * @expected User should able to draw Angular wall
 */
test('TC_DT_148', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'Wall' }).click();
  await page.getByRole('img', { name: 'storey_down' }).first().click();
  await page.getByRole('button', { name: 'Create new storey above' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 413,
      y: 448
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 542,
      y: 434
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 475,
      y: 520
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 302,
      y: 535
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 413,
      y: 442
    }
  });

  const point1 = { x: 359, y: 481 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('drawAngledWall2ndStorey1.geom', geometryDir);
  const point2 = { x: 500, y: 445 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('drawAngledWall2ndStorey2.geom', geometryDir);
  const point3 = { x: 427, y: 383 };
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('drawAngledWall2ndStorey3.geom', geometryDir);
  const point4 = { x: 357, y: 423 };
  const actualGeometry4 = await getGeometry(page, point4);
  await expect(actualGeometry4).toHaveGeometryV0('drawAngledWall2ndStorey4.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('drawAngledWall2ndStorey1.png');
  const component = await getSnaptrudeDS(page, point1);
  expect(component.type).toBe('Wall');
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_149
 * @description Check user able to Draw two edge Arc wall on the upper storey plane by using wall object type in 3D
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw ARC tool 4 Select Object type as Wall 5 Draw two edge ARC wall
 * @expected User should be able to draw two edge Arc wall on the upper storey plane
 */
test('TC_DT_149', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'arc' }).click();
  await page.getByRole('img', { name: 'Wall' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 354,
      y: 477
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 515,
      y: 426
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 414,
      y: 431
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 355,
      y: 473
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 412,
      y: 442
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 550,
      y: 458
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 683,
      y: 419
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 596,
      y: 406
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 553,
      y: 457
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 594,
      y: 422
    }
  });
  const point1 = { x: 426, y: 405 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0(
    'draw2EdgeArcWallinUpperstorey1.geom',
    geometryDir
  );
  const point2 = { x: 622, y: 378 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0(
    'draw2EdgeArcWallinUpperstorey2.geom',
    geometryDir
  );
  const point3 = { x: 404, y: 368 };
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0(
    'draw2EdgeArcWallinUpperstorey3.geom',
    geometryDir
  );
  const point4 = { x: 585, y: 346 };
  const actualGeometry4 = await getGeometry(page, point4);
  await expect(actualGeometry4).toHaveGeometryV0(
    'draw2EdgeArcWallinUpperstorey4.geom',
    geometryDir
  );
  await expect(page).toHaveCanvasSnapshot('draw2EdgeArcWallinUpperstorey.png');
  const component = await getSnaptrudeDS(page, point1);
  expect(component.type).toBe('Wall');
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_150
 * @description Check user able to Draw semicircle Arc wall on the upper storey plane by using wall object type in 3D
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw ARC tool 4 Select Object type as Wall 5 Draw semi-circle ARC wall
 * @expected User should be able to draw semi - circleArc wall on the upper storey plane
 */
test('TC_DT_150', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'arc' }).click();
  await page.getByRole('img', { name: 'Wall' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 346,
      y: 533
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 522,
      y: 481
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 408,
      y: 456
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 347,
      y: 530
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 395,
      y: 517
    }
  });
  const point1 = { x: 420, y: 474 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0(
    'draw3DSemicircleWallinUpperstorey1.geom',
    geometryDir
  );
  const point2 = { x: 394, y: 399 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0(
    'draw3DSemicircleWallinUpperstorey2.geom',
    geometryDir
  );
  await expect(page).toHaveCanvasSnapshot('draw3DSemicircleWallinUpperstorey.png');
  const component = await getSnaptrudeDS(page, point1);
  expect(component.type).toBe('Wall');
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_151
 * @description Check user able to Draw multiple- edge Arc wall on the upper storey plane by using wall object type in 3D
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw ARC tool 4 Select Object type as Wall 5 Draw multiple edge ARC wall
 * @expected User should be able to draw multiple edge Arc wall on the upper storey plane
 */
test('TC_DT_151', async () => {
  test.setTimeout(200000);
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'arc' }).click();
  await page.getByRole('img', { name: 'Wall' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 382,
      y: 486
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 477,
      y: 459
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 440,
      y: 449
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 538,
      y: 435
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 513,
      y: 423
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 577,
      y: 479
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 573,
      y: 459
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 380,
      y: 485
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 426,
      y: 552
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 481,
      y: 430
    }
  });
  const point1 = { x: 481, y: 421 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0(
    'draw3DMultipleEdgeArcWallUpperStorey1.geom',
    geometryDir
  );
  const point2 = { x: 597, y: 425 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0(
    'draw3DMultipleEdgeArcWallUpperStorey2.geom',
    geometryDir
  );
  const point3 = { x: 502, y: 371 };
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0(
    'draw3DMultipleEdgeArcWallUpperStorey3.geom',
    geometryDir
  );
  const point4 = { x: 405, y: 392 };
  const actualGeometry4 = await getGeometry(page, point4);
  await expect(actualGeometry4).toHaveGeometryV0(
    'draw3DMultipleEdgeArcWallUpperStorey4.geom',
    geometryDir
  );
  await expect(page).toHaveCanvasSnapshot('draw3DMultipleEdgeArcWallUpperStorey1.png');
  const component = await getSnaptrudeDS(page, point1);
  expect(component.type).toBe('Wall');
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_152
 * @description Check user able to Draw Line + Arc wall on the upper storey plane by using wall object type in 3D
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw ARC/Line tool 4 Select Object type as Wall 5 Draw Line + ARC wall
 * @expected User should be able to draw Line + Arc wall on the upper storey plane
 */
test('TC_DT_152', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);

  await page.getByRole('img', { name: 'arc' }).click();
  await page.getByRole('img', { name: 'Wall' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 417,
      y: 481
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 573,
      y: 429
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 470,
      y: 427
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 413,
      y: 476
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 575,
      y: 478
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 612,
      y: 538
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 621,
      y: 498
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 704,
      y: 501
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 573,
      y: 473
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 652,
      y: 446
    }
  });

  const point1 = { x: 640, y: 480 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0(
    'drawLineplusArcWallUpperStorey1.geom',
    geometryDir
  );
  const point2 = { x: 617, y: 431 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0(
    'drawLineplusArcWallUpperStorey2.geom',
    geometryDir
  );
  const point3 = { x: 662, y: 386 };
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0(
    'drawLineplusArcWallUpperStorey3.geom',
    geometryDir
  );
  const point4 = { x: 467, y: 411 };
  const actualGeometry4 = await getGeometry(page, point4);
  await expect(actualGeometry4).toHaveGeometryV0(
    'drawLineplusArcWallUpperStorey4.geom',
    geometryDir
  );
  const point5 = { x: 462, y: 373 };
  const actualGeometry5 = await getGeometry(page, point5);
  await expect(actualGeometry5).toHaveGeometryV0(
    'drawLineplusArcWallUpperStorey5.geom',
    geometryDir
  );

  await expect(page).toHaveCanvasSnapshot('drawLineplusArcWallUpperStorey1.png');
  const component = await getSnaptrudeDS(page, point1);
  expect(component.type).toBe('Wall');
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});
