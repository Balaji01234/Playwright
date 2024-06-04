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
 * @id TC_DT_201
 * @description Check user able to draw Column circle
 * @steps
 *  1 Enter Url 2 Login 3 Create Project 4 Select Draw Circle tool 5 Select Object type as Column 6 Draw Column circle
 * @expected User should be able to draw Column circle
 */
test('TC_DT_201', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.getByRole('img', { name: 'drawCircle' }).click();
  await page.getByRole('img', { name: 'Column' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 538,
      y: 437
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 563,
      y: 469
    }
  });
  const Point = { x: 535, y: 423 };
  const actualGeometry = await getGeometry(page, Point);
  await expect(page).toHaveCanvasSnapshot('tc_dt_201.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
});

/**
 * @id TC_DT_202
 * @description Check user able to Draw Beam by using Beam Object type or not
 * @steps
 *  1 Enter Url 2 Login 3 Create Project 4 Draw Beam
 * @expected User should able to Draw Beam, by using object type asBeam
 */
test('TC_DT_202', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.getByRole('img', { name: 'Beam' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 454,
      y: 443
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 626,
      y: 391
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 699,
      y: 480
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 511,
      y: 531
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 455,
      y: 450
    }
  });
  const point1 = { x: 644, y: 506 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('tc_dt_202_1.geom', geometryDir);
  const point2 = { x: 690, y: 454 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('tc_dt_202_2.geom', geometryDir);
  const point3 = { x: 493, y: 435 };
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('tc_dt_202_3.geom', geometryDir);
  const point4 = { x: 500, y: 511 };
  const actualGeometry4 = await getGeometry(page, point4);
  await expect(actualGeometry4).toHaveGeometryV0('tc_dt_202_4.geom', geometryDir);
  const component = await getSnaptrudeDS(page, point1);
  expect(component.massType).toBe('Beam');
  await expect(page).toHaveCanvasSnapshot('tc_dt_202.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
});

/**
 * @id TC_DT_203
 * @description Check that the user is able to draw default thickness 300 mm beam value using beam Object type or not
 * @steps
 *  1 Enter Url 2 Login 3 Create Project 4 Select Draw Line tool 5 Select Object type as Beam 6 Draw Beam thickness value (300mm)
 * @expected user should be able to draw the default thickness value of 300mm for the Beam
 */
test('TC_DT_203', async () => {
  await page.getByRole('img', { name: 'Beam' }).click();
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 603,
      y: 400
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 424,
      y: 465
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 473,
      y: 588
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 700,
      y: 505
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 600,
      y: 403
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 577,
      y: 560
    }
  });
  const beamThicknes = await page.getByRole('spinbutton').first();
  await expect(beamThicknes).toHaveAttribute('value', '300.00');
  await page.locator('#canvas').click({
    position: {
      x: 577,
      y: 560
    }
  });
  const point1 = { x: 577, y: 560 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('tc_dt_203_1.geom', geometryDir);
  const point2 = { x: 664, y: 468 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('tc_dt_203_2.geom', geometryDir);
  const point3 = { x: 569, y: 412 };
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('tc_dt_203_3.geom', geometryDir);
  const point4 = { x: 467, y: 543 };
  const actualGeometry4 = await getGeometry(page, point4);
  await expect(actualGeometry4).toHaveGeometryV0('tc_dt_203_4.geom', geometryDir);
  const component = await getSnaptrudeDS(page, point1);
  expect(component.massType).toBe('Beam');
  await expect(page).toHaveCanvasSnapshot('tc_dt_203.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
});

/**
 * @id TC_DT_204
 * @description Check that the user is able to draw default height 600 mm beam value using beam Object type or not
 * @steps
 *  1 Enter Url 2 Login 3 Create Project 4 Select Draw Line tool 5 Select Object type as Beam 6 Draw Beam default height value (600mm)
 * @expected user should be able to draw the default height value of 600mm for the Beam
 */
test('TC_DT_204', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.getByRole('img', { name: 'Beam' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 415,
      y: 455
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 579,
      y: 401
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 564,
      y: 515
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 419,
      y: 468
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 466,
      y: 444
    }
  });
  const beamHeight = await page.getByRole('spinbutton').nth(1);
  await expect(beamHeight).toHaveAttribute('value', '600.00');
  await page.locator('#canvas').click({
    position: {
      x: 466,
      y: 444
    }
  });
  const point1 = { x: 537, y: 508 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('tc_dt_204_1.geom', geometryDir);
  const point2 = { x: 538, y: 421 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('tc_dt_204_2.geom', geometryDir);
  const point3 = { x: 575, y: 490 };
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('tc_dt_204_3.geom', geometryDir);
  const component = await getSnaptrudeDS(page, point1);
  expect(component.massType).toBe('Beam');
  await expect(page).toHaveCanvasSnapshot('tc_dt_204.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
});

/**
 * @id TC_DT_205
 * @description Check user able to draw straight Beam, using object type as Beam
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw line 4 Select Object type as Beam 6 Draw Straight Beam
 * @expected User should be able to draw straight Beam
 */
test('TC_DT_205', async () => {
  await page.getByRole('img', { name: 'Beam' }).click();
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 389,
      y: 484
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 568,
      y: 429
    }
  });
  await page.locator('#canvas').press('Enter');
  const Point = { x: 427, y: 478 };
  const actualGeometry = await getGeometry(page, Point);
  await expect(actualGeometry).toHaveGeometryV0('tc_dt_205.geom', geometryDir);
  const component = await getSnaptrudeDS(page, Point);
  expect(component.massType).toBe('Beam');
  await expect(page).toHaveCanvasSnapshot('tc_dt_205.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
});

/**
 * @id TC_DT_206
 * @description Check user able to draw Angular Beam , using object type as Beam
 * @steps
 *  1 Enter Url 2 Login 3 Create Project 4 Select Draw Tool 5 Select Object type as Beam 6 Draw Angular Beam
 * @expected User should able to draw Angular Beam
 */
test('TC_DT_206', async () => {
  await page.getByRole('img', { name: 'Beam' }).click();
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 406,
      y: 458
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 575,
      y: 403
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 467,
      y: 571
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 406,
      y: 462
    }
  });
  const point1 = { x: 501, y: 534 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('tc_dt_206_1.geom', geometryDir);
  const point2 = { x: 423, y: 485 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('tc_dt_206_2.geom', geometryDir);
  const point3 = { x: 452, y: 446 };
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('tc_dt_206_3.geom', geometryDir);
  const component = await getSnaptrudeDS(page, point1);
  expect(component.massType).toBe('Beam');
  await expect(page).toHaveCanvasSnapshot('tc_dt_206.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
});

/**
 * @id TC_DT_207
 * @description Check user able to Draw two edge Arc Beam , using object type as Beam
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw ARC tool 4 Select Object type as Beam 5 Draw two edge ARC Beam
 * @expected User should be able to draw two edge Arc Beam
 */
//Existing Bug - ST-1405
test.skip('TC_DT_207', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.getByRole('img', { name: 'arc' }).click();
  await page.getByRole('img', { name: 'Beam' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 406,
      y: 467
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 524,
      y: 433
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 442,
      y: 426
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 411,
      y: 462
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 465,
      y: 439
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 613,
      y: 473
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 730,
      y: 460
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 640,
      y: 432
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 609,
      y: 472
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 636,
      y: 449
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator("//*[@alt='Select']").click();
  await page.getByRole('img', { name: 'storeySelector' }).click();
  await page.getByText('Storey').first().click();
  const beamCount = await page.locator("(//p[text()='Count']//..//p)").nth(2);
  if (await beamCount.isVisible) {
    const beamCountText = await beamCount.textContent();
    if (beamCountText == '4') {
      console.log('Beam Count', beamCountText);
    } else {
      test.fail();
    }
  } else {
    test.fail();
  }
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
});

/**
 * @id TC_DT_208
 * @description Check user able to Draw semicircle Beam Arc, using object type as Beam
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw ARC tool 4 Select Object type as Beam 5 Draw semi-circle Beam ARC
 * @expected User should be able to draw semi - circle Beam Arc
 */
//Existing Bug - ST-1405
test.skip('TC_DT_208', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.getByRole('img', { name: 'arc' }).click();
  await page.getByRole('img', { name: 'Beam' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 423,
      y: 471
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 591,
      y: 446
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 486,
      y: 423
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 417,
      y: 473
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 443,
      y: 468
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 671,
      y: 520
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 786,
      y: 500
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 707,
      y: 475
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 676,
      y: 520
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 715,
      y: 491
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator("//*[@alt='Select']").click();
  await page.getByRole('img', { name: 'storeySelector' }).click();
  await page.getByText('Storey').first().click();
  const beamCount = await page.locator("(//p[text()='Count']//..//p)").nth(2);
  if (await beamCount.isVisible) {
    const beamCountText = await beamCount.textContent();
    if (beamCountText == '4') {
      console.log('Beam Count', beamCountText);
    } else {
      test.fail();
    }
  } else {
    test.fail();
  }
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
});

/**
 * @id TC_DT_209
 * @description Check user able to Draw multiple- edge Beam Arc
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw ARC tool 4 Select Object type as Beam 5 Draw multiple edge Beam ARC
 * @expected User should be able to draw multiple edge Beam Arc
 */ test('TC_DT_209', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.getByRole('img', { name: 'arc' }).click();
  await page.getByRole('img', { name: 'Beam' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 414,
      y: 476
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 511,
      y: 454
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 470,
      y: 432
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 594,
      y: 461
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 609,
      y: 441
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 528,
      y: 511
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 570,
      y: 519
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 416,
      y: 480
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 409,
      y: 514
    }
  });
  const point1 = { x: 563, y: 525 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('tc_dt_209_1.geom', geometryDir);
  const point2 = { x: 481, y: 532 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('tc_dt_209_2.geom', geometryDir);
  const point3 = { x: 458, y: 432 };
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('tc_dt_209_3.geom', geometryDir);
  const point4 = { x: 559, y: 419 };
  const actualGeometry4 = await getGeometry(page, point4);
  await expect(actualGeometry4).toHaveGeometryV0('tc_dt_209_4.geom', geometryDir);
  const component = await getSnaptrudeDS(page, point1);
  expect(component.massType).toBe('Beam');
  await expect(page).toHaveCanvasSnapshot('tc_dt_209.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
});

/**
 * @id TC_DT_210
 * @description Check user able to Draw Line + Arc Beam
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw ARC/Line tool 4 Select Object type as Beam 5 Draw Line + ARC Beam
 * @expected User should be able to draw Line + Arc Beam
 */
//Existing Bug - ST-1405
test.skip('TC_DT_210', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.getByRole('img', { name: 'arc' }).click();
  await page.getByRole('img', { name: 'Beam' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 540,
      y: 415
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 616,
      y: 470
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 530,
      y: 471
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 535,
      y: 410
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 253,
      y: 496
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 373,
      y: 462
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 251,
      y: 492
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 351,
      y: 537
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator("//*[@alt='Select']").click();
  await page.getByRole('img', { name: 'storeySelector' }).click();
  await page.getByText('Storey').first().click();
  const beamCount = await page.locator("(//p[text()='Count']//..//p)").nth(2);
  if (await beamCount.isVisible) {
    const beamCountText = await beamCount.textContent();
    if (beamCountText == '4') {
      console.log('Beam Count', beamCountText);
    } else {
      test.fail();
    }
  } else {
    test.fail();
  }
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
});
