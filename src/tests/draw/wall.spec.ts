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
 * @id TC_DT_153
 * @description Check user able to Draw different shape of line + Arc combination wall on the upper storey plane by using wall object type in 3D
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw Line/ARC tool 4 Select Object type as Wall 5 Draw different shape of Line + ARC combination wall
 * @expected user should be able to Draw different shape of line + Arc combination wall on the upper storey plane
 */
test('TC_DT_153', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'Wall' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 359,
      y: 466
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 449,
      y: 437
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 498,
      y: 438
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 498,
      y: 443
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 614,
      y: 408
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 646,
      y: 437
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 637,
      y: 438
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 388,
      y: 525
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 356,
      y: 461
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 365,
      y: 466
    }
  });
  const point1 = { x: 476, y: 452 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('draw3DdifferentLineArcWall1.geom', geometryDir);

  const point2 = { x: 394, y: 421 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('draw3DdifferentLineArcWall2.geom', geometryDir);
  const point3 = { x: 414, y: 391 };
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('draw3DdifferentLineArcWall3.geom', geometryDir);
  const point4 = { x: 467, y: 392 };
  const actualGeometry4 = await getGeometry(page, point4);
  await expect(actualGeometry4).toHaveGeometryV0('draw3DdifferentLineArcWall4.geom', geometryDir);
  const point5 = { x: 549, y: 369 };
  const actualGeometry5 = await getGeometry(page, point5);
  await expect(actualGeometry5).toHaveGeometryV0('draw3DdifferentLineArcWall5.geom', geometryDir);
  const point6 = { x: 604, y: 367 };
  const actualGeometry6 = await getGeometry(page, point6);
  await expect(actualGeometry6).toHaveGeometryV0('draw3DdifferentLineArcWall6.geom', geometryDir);

  const component = await getSnaptrudeDS(page, point1);
  expect(component.type).toBe('Wall');
  // await expect(page).toHaveCanvasSnapshot("draw3DdifferentLineArcWall.png", {
  //   maxDiffPixels: 960,
  // });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_155
 * @description check after selecting object type as wall, user able to draw an internal draw mode wall in 3D
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw line / Draw circle tool 4 Select Object type as Wall 5 Select Draw internal wall Mode 6 Draw internal wall
 * @expected User should be able to draw an internal wall in 3D
 */
test('TC_DT_155', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'Wall' }).click();
  await page.getByRole('img', { name: 'Internal' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 374,
      y: 473
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 551,
      y: 426
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 600,
      y: 504
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 425,
      y: 564
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 374,
      y: 470
    }
  });
  const point1 = { x: 509, y: 504 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('draw3DInternalWall1.geom', geometryDir);
  const point2 = { x: 379, y: 465 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('draw3DInternalWall2.geom', geometryDir);
  const point3 = { x: 445, y: 405 };
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('draw3DInternalWall3.geom', geometryDir);
  const point4 = { x: 571, y: 406 };
  const actualGeometry4 = await getGeometry(page, point4);
  await expect(actualGeometry4).toHaveGeometryV0('draw3DInternalWall4.geom', geometryDir);
  const component = await getSnaptrudeDS(page, point1);
  expect(component.type).toBe('Wall');
  // await expect(page).toHaveCanvasSnapshot("draw3DInternalWall1.png", {
  //   maxDiffPixels: 960,
  // });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_156
 * @description check after selecting object type as wall, user able to draw an external draw mode wall in 3D
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw line / Draw circle tool 4 Select Object type as Wall 5 Select Draw externalwall Mode 6 Draw external clock wise wall
 * @expected User should be able to draw an external wall in 3D
 */
test('TC_DT_156', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'Wall' }).click();
  await page.getByRole('img', { name: 'External' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 367,
      y: 472
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 563,
      y: 410
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 647,
      y: 511
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 423,
      y: 596
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 365,
      y: 472
    }
  });

  const point1 = { x: 539, y: 524 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('draw3DExternalWall1.geom', geometryDir);
  const point2 = { x: 387, y: 465 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('draw3DExternalWall2.geom', geometryDir);
  const point3 = { x: 440, y: 393 };
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('draw3DExternalWall3.geom', geometryDir);
  const point4 = { x: 597, y: 400 };
  const actualGeometry4 = await getGeometry(page, point4);
  await expect(actualGeometry4).toHaveGeometryV0('draw3DExternalWall4.geom', geometryDir);
  const component = await getSnaptrudeDS(page, point1);
  expect(component.type).toBe('Wall');
  // await expect(page).toHaveCanvasSnapshot("draw3DExternalWall1.png", {
  //   maxDiffPixels: 960,
  // });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_157
 * @description check after selecting object type as wall, user able to draw a center line draw mode wall in 3D
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw line / Draw circle tool 4 Select Object type as Wall 5 Select Draw centerline wall Mode 6 Draw centerline wall
 * @expected User should be able to draw a centerline wall in 3D
 */
test('TC_DT_157', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'Wall' }).click();
  await page.getByRole('img', { name: 'Centre' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 407,
      y: 456
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 472,
      y: 585
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 711,
      y: 498
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 603,
      y: 396
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 403,
      y: 455
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 580,
      y: 510
    }
  });
  const point = { x: 580, y: 510 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('draw3DCenterWall.geom', geometryDir);
  const point1 = { x: 422, y: 435 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('draw3DCenterWall1.geom', geometryDir);
  const point2 = { x: 507, y: 385 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('draw3DCenterWall2.geom', geometryDir);
  const point3 = { x: 648, y: 398 };
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('draw3DCenterWall3.geom', geometryDir);
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Wall');
  // await expect(page).toHaveCanvasSnapshot("draw3DCenterWall1.png", {
  //   maxDiffPixels: 960,
  // });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_158
 * @description check user able to draw a wall on the ground plane by using space object type in 3D
 * @steps
 *  1 Enter Url 2 Login 3 Create Project 4 Select Draw Tool 5 Select Object type as wall 6 Draw wall wall on the ground plane in 3D
 * @expected User should be able to draw wall on the ground plane
 */
test('TC_DT_158', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.locator('#canvas').click({
    position: {
      x: 329,
      y: 479
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 595,
      y: 395
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 599,
      y: 401
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 339,
      y: 485
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 332,
      y: 480
    }
  });

  const point = { x: 470, y: 403 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('draw3DWallUsingSpace.geom', geometryDir);
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Wall');
  // await expect(page).toHaveCanvasSnapshot("draw3DWallUsingSpace1.png", {
  //   maxDiffPixels: 960,
  // });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_159
 * @description check user able to draw a wall on the upper storey plane by using space object type in 3D
 * @steps
 *  1 Enter Url 2 Login 3 Create Project 4 Select Draw Tool 5 Select Object type as wall 6 Draw wall wall on the upper storey plane in 3D
 * @expected User should be able to draw wall on the upper storey plane
 */
test('TC_DT_159', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.locator('#canvas').click({
    position: {
      x: 390,
      y: 461
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 606,
      y: 384
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 617,
      y: 396
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 400,
      y: 465
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 393,
      y: 461
    }
  });

  const point = { x: 454, y: 411 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0(
    'draw3DWallUsingSpaceUpperStorey.geom',
    geometryDir
  );
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Wall');
  // await expect(page).toHaveCanvasSnapshot(
  //   "draw3DWallUsingSpaceUpperStorey.png",
  //   {
  //     maxDiffPixels: 960,
  //   }
  // );
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});
// TC_DT_160;
test('draw3DWallinGreenBlueAxes', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'Wall' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 472,
      y: 446
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 479,
      y: 525
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 585,
      y: 517
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 582,
      y: 433
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 472,
      y: 443
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  const point = { x: 519, y: 484 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('draw3DWallinGreenBlueAxes.geom', geometryDir);
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Wall');
  // await expect(page).toHaveCanvasSnapshot("draw3DWallinGreenBlueAxes.png", {
  //   maxDiffPixels: 960,
  // });
  await page.locator('#canvas').click({
    position: {
      x: 519,
      y: 484
    }
  });
  await page.locator("//*[@alt='delete_icon']").click();
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_182
 * @description Check user able to Draw slab by using slab Object type or not
 * @steps
 *  1 Enter Url 2 Login 3 Create Project 4 Draw slab
 * @expected User should be able to Draw slab, by using object type asslab
 */
test('TC_DT_182', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 425,
      y: 444
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 607,
      y: 386
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 693,
      y: 480
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 489,
      y: 554
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 431,
      y: 448
    }
  });
  const point = { x: 555, y: 447 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('draw3DSlabUsingSlabType.geom', geometryDir);
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Roof');
  await expect(page).toHaveCanvasSnapshot('draw3DSlabUsingSlabType.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_183
 * @description Check that the user is able to draw default thickness 150 mm slab value using slab Object type or not
 * @steps
 *  1 Enter Url 2 Login 3 Create Project 4 Select Draw Line tool 5 Select Object type as Slab 6 Draw Slab thickness value (150mm)
 * @expected user should be able to draw the default thickness value of 150mm for the slab
 */
test('TC_DT_183', async () => {
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);

  await page.locator('#canvas').click({
    position: {
      x: 428,
      y: 450
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 465,
      y: 530
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 668,
      y: 453
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 610,
      y: 401
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 429,
      y: 444
    }
  });
  const point = { x: 591, y: 457 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('draw3DSlabWithDefaultThickness.geom', geometryDir);
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Roof');
  await expect(page).toHaveCanvasSnapshot('draw3DSlabWithDefaultThickness.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_184
 * @description Check user able to draw orthogonal slab, using object type as slab
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw line 4 Select Object type as slab 6 Draw orthogonal slab
 * @expected User should be able to draw orthogonal slab
 */
test('TC_DT_184', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 520,
      y: 419
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 325,
      y: 492
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 365,
      y: 604
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 493,
      y: 557
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 445,
      y: 483
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 546,
      y: 453
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 522,
      y: 421
    }
  });
  const point = { x: 401, y: 512 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('draw3DOrthogonalSlab.geom', geometryDir);
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Roof');
  await expect(page).toHaveCanvasSnapshot('draw3DOrthogonalSlab.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});
