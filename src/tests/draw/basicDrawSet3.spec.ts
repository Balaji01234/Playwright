import { expect, test } from '../../common/fixtures';
import { Page } from '@playwright/test';
import { configure2DProjectForTestV0, initProject } from '../../common/project';
import { clearCanvas } from '../../common/canvas';
import { setCameraPosition } from '../../common/camera';
import { createGeometryDir, getGeometry, getSnaptrudeDS } from '../../common/geometry';

const camPos = {
  position: {
    _x: 109.11920087683933,
    _y: 72.74613391789288,
    _z: -62.999999999999936
  },
  alpha: -0.5235987755982983,
  beta: 1.0471975511965976,
  radius: 145.49226783578573,
  target: {
    _x: 0,
    _y: 0,
    _z: 0
  },
  isOrtho: false,
  orthoLeft: -130.66713034926278,
  orthoRight: 130.66713034926278,
  orthoBottom: -73.50026082146032,
  orthoTop: 73.50026082146032
};

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
 * @id TC_DT_131
 * @description Check user able to draw orthogonal/Line mass on the upper storey plane by using space object type in 3D
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw line 4 Select Object type as Space 6 Draw orthogonal/ Line mass
 * @expected User should be able to draw orthogonal/Line mass on the upper storey plane
 */
test('TC_DT_131', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.locator('#canvas').click({
    position: {
      x: 632,
      y: 406
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 444,
      y: 474
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 498,
      y: 585
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 622,
      y: 537
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 564,
      y: 461
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 651,
      y: 426
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 635,
      y: 407
    }
  });
  const point = { x: 552, y: 519 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('draw3DOrthogonalMass.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('draw3DOrthogonalMass.png', {
    maxDiffPixels: 960
  });
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_132
 * @description Check user able to draw Angled mass on the upper storey plane by using space object type in 3D
 * @steps
 *  1 Enter Url 2 Login 3 Create Project 4 Select Draw Tool 5 Select Object type as Space 6 Draw Angled Mass
 * @expected User should be able to draw Angular Floor
 */
// TODO Identify issue with the test case
test.skip('TC_DT_132', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await setCameraPosition(page, camPos);
  await page.locator('#canvas').click({
    position: {
      x: 640,
      y: 442
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 521,
      y: 456
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 566,
      y: 508
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 418,
      y: 567
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 445,
      y: 621
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 605,
      y: 563
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 666,
      y: 482
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 643,
      y: 442
    }
  });
  const point = { x: 541, y: 536 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('draw3DAngledMass.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('draw3DAngledMass.png', {
    maxDiffPixels: 960
  });
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_133
 * @description Check user able to Draw two edge Arc mass on the upper storey plane by using space object type in 3D
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw ARC tool 4 Select Object type as Space 5 Draw two edge ARC Mass
 * @expected User should be able to draw two edge Arc mass on the upper storey plane
 */
test('TC_DT_133', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 480,
      y: 486
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 584,
      y: 457
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 568,
      y: 438
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 486,
      y: 484
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 591,
      y: 542
    }
  });
  const point = { x: 561, y: 492 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('draw3DtwoEdgeArcMass.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('draw3DtwoEdgeArcMass.png', {
    maxDiffPixels: 960
  });
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_134
 * @description Check user able to Draw semicircle Arc mass on the upper storey plane by using space object type in 3D
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw ARC tool 4 Select Object type as Space 5 Draw semi-circle ARC Mass
 * @expected User should be able to draw semi - circleArc mass on the upper storey plane
 */
test('TC_DT_134', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 479,
      y: 532
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 631,
      y: 479
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 485,
      y: 461
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 480,
      y: 527
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 518,
      y: 493
    }
  });
  const point = { x: 540, y: 465 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('draw3DSemiCircleArcMass.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('draw3DSemiCircleArcMass.png', {
    maxDiffPixels: 960
  });
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_135
 * @description Check user able to Draw multiple- edge Arc mass on the upper storey plane by using space object type in 3D
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw ARC tool 4 Select Object type as Space 5 Draw multiple edge ARC Mass
 * @expected User should be able to draw multiple edge Arc mass on the upper storey plane
 */
// TODO Identify issue with the test case
test.skip('TC_DT_135', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 447,
      y: 460
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 550,
      y: 425
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 523,
      y: 422
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 564,
      y: 468
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 650,
      y: 439
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 498,
      y: 543
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 514,
      y: 540
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 447,
      y: 462
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 358,
      y: 491
    }
  });
  const point = { x: 533, y: 473 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('draw3DMultipleEdgeArcMass.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('draw3DMultipleEdgeArcMass.png', {
    maxDiffPixels: 960
  });
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_136
 * @description Check user able to Draw Line + Arc mass on the upper storey plane by using space object type in 3D
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw ARC/Line tool 4 Select Object type as Space 5 Draw Line + ARC Mass
 * @expected User should be able to draw Line + Arc mass on the upper storey plane
 */
test('TC_DT_136', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.locator('#canvas').click({
    position: {
      x: 493,
      y: 456
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 554,
      y: 582
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 497,
      y: 451
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 668,
      y: 447
    }
  });
  const point = { x: 654, y: 504 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('draw3DLinePlusArcMass.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('draw3DLinePlusArcMass.png', {
    maxDiffPixels: 960
  });
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_137
 * @description Check user able to Draw different shape of line + Arc combination mass on the upper storey plane by using space object type in 3D
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw Line/ARC tool 4 Select Object type as Space 5 Draw different shape of Line + ARC combination Mass
 * @expected user should be able to Draw different shape of line + Arc combination mass on the upper storey plane
 */
// TODO Identify issue with the test case
test.skip('TC_DT_137', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.locator('#canvas').click({
    position: {
      x: 404,
      y: 471
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 555,
      y: 426
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 584,
      y: 463
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 605,
      y: 439
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 428,
      y: 512
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 405,
      y: 467
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 396,
      y: 486
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 560,
      y: 535
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 631,
      y: 504
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 677,
      y: 550
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 633,
      y: 531
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 604,
      y: 580
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 559,
      y: 535
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 589,
      y: 543
    }
  });
  const point = { x: 476, y: 446 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('draw3DdifferentLinePlusArcMass.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('draw3DdifferentLinePlusArcMass.png', {
    maxDiffPixels: 960
  });
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});
//TC_DT_138
test('TC_DT_138', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'Wall' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 594,
      y: 418
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 398,
      y: 480
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 483,
      y: 613
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 611,
      y: 558
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 571,
      y: 498
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 644,
      y: 474
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 599,
      y: 419
    }
  });
  const point = { x: 531, y: 542 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('draw3DOrthogonalWall.geom', geometryDir);
  // await expect(page).toHaveCanvasSnapshot("draw3DOrthogonalWall.png", {
  //   maxDiffPixels: 960,
  // });
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Wall');
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_139
 * @description Check user able to draw orthogonal/Line wall on the ground plane by using wall object type in 3D
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw line 4 Select Object type as Wall 6 Draw orthogonal/ Line wall
 * @expected User should be able to draw orthogonal/Line wall on the ground plane
 */
test('TC_DT_139', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'Wall' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 386,
      y: 502
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 487,
      y: 472
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 469,
      y: 444
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 558,
      y: 437
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 574,
      y: 502
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 413,
      y: 554
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 384,
      y: 507
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 672,
      y: 510
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 630,
      y: 589
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 774,
      y: 620
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 841,
      y: 561
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 848,
      y: 485
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 778,
      y: 440
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 753,
      y: 496
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 681,
      y: 509
    }
  });
  const point = { x: 499, y: 488 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('draw3DAngledWall.geom', geometryDir);
  // await expect(page).toHaveCanvasSnapshot("draw3DAngledWall.png", {
  //   maxDiffPixels: 960,
  // });
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Wall');
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_140
 * @description Check user able to draw Angled wall on the ground plane by using wall object type in 3D
 * @steps
 *  1 Enter Url 2 Login 3 Create Project 4 Select Draw Tool 5 Select Object type as Wall 6 Draw Angled wall
 * @expected User should be able to draw Angular wall
 */
test('TC_DT_140', async () => {
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
  const point = { x: 723, y: 522 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('draw3DSemiCircleArcWall.geom', geometryDir);
  // await expect(page).toHaveCanvasSnapshot("draw3DSemiCircleArcWall.png", {
  //   maxDiffPixels: 960,
  // });
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Wall');
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});
