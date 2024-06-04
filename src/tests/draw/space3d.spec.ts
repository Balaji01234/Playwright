import { expect, test } from '../../common/fixtures';
import { Page } from '@playwright/test';
import { configure2DProjectForTestV0, initProject } from '../../common/project';
import { clearCanvas } from '../../common/canvas';
import { createGeometryDir, getGeometry, getSnaptrudeDSType } from '../../common/geometry';
import { setCameraPosition } from '../../common/camera';

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
 * @id TC_DT_121
 * @description check user able to draw a mass on blue-green axes in 3D by using space object type
 * @steps
 *  1 Enter Url 2 Login 3 Create Project 4 Select Draw Tool 5 Select Object type as space 6 Draw space mass on blue-green axes in 3D
 * @expected User should be able to draw mass on the blue-green axes in 3D
 */
test('TC_DT_121', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByText('Space', { exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 640,
      y: 364
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 624,
      y: 496
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 522,
      y: 549
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 483,
      y: 421
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 642,
      y: 396
    }
  });
  const point = { x: 544, y: 375 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab41' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab41' + '.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_123
 * @description Check user able to draw orthogonal/Line mass on the ground plane by using space object type in 3D
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw line 4 Select Object type as Space 6 Draw orthogonal/ Line mass
 * @expected User should be able to draw orthogonal/Line mass on the ground plane
 */
test('TC_DT_123', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'storey_down' }).nth(1).click();
  await page.getByRole('button', { name: 'Create new storey below' }).click();
  await page.getByText('Space', { exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 482,
      y: 474
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 559,
      y: 557
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 656,
      y: 517
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 618,
      y: 471
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 548,
      y: 501
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 513,
      y: 456
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 484,
      y: 470
    }
  });
  const point = { x: 557, y: 441 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab42' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab42' + '.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_124
 * @description Check user able to draw Angled mass on the ground plane by using space object type in 3D
 * @steps
 *  1 Enter Url 2 Login 3 Create Project 4 Select Draw Tool 5 Select Object type as Space 6 Draw Angled Mass
 * @expected User should be to draw Angular Mass
 */
test('TC_DT_124', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'storey_down' }).nth(1).click();
  await page.getByRole('button', { name: 'Create new storey below' }).click();
  await page.getByText('Space', { exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 577,
      y: 479
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 502,
      y: 483
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 554,
      y: 435
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 616,
      y: 446
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 637,
      y: 473
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 643,
      y: 583
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 575,
      y: 580
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 577,
      y: 480
    }
  });
  const point = { x: 600, y: 420 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab43' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab43' + '.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_125
 * @description Check user able to Draw two edge Arc mass on the ground plane by using space object type in 3D
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw ARC tool 4 Select Object type as Space 5 Draw two edge ARC Mass
 * @expected User should be able to draw two edge Arc mass on the ground plane
 */
test('TC_DT_125', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'arc' }).click();
  await page.getByText('Space', { exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 418,
      y: 475
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 502,
      y: 473
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 502,
      y: 449
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 418,
      y: 482
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 434,
      y: 542
    }
  });
  const point = { x: 471, y: 414 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab44' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab44' + '.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_126
 * @description Check user able to Draw semicircle Arc mass on the ground plane by using space object type in 3D
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw ARC tool 4 Select Object type as Space 5 Draw semi-circle ARC Mass
 * @expected User should be able to draw semi - circleArc mass on the ground plane
 */
test('TC_DT_126', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 497,
      y: 453
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 625,
      y: 492
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 635,
      y: 458
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 495,
      y: 456
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 530,
      y: 468
    }
  });
  const point = { x: 580, y: 392 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab45' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab45' + '.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_127
 * @description Check user able to Draw multiple- edge Arc mass on the ground plane by using space object type in 3D
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw ARC tool 4 Select Object type as Space 5 Draw multiple edge ARC Mass
 * @expected User should be able to draw multiple edge Arc mass on the ground plane
 */
// TODO : Test case is failing due to shakeCam function in AA
test.skip('TC_DT_127', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 477,
      y: 459
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 539,
      y: 461
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 536,
      y: 444
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 596,
      y: 464
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 572,
      y: 443
    }
  });
  // await page.locator("#canvas").click({
  //   position: {
  //     x: 592,
  //     y: 453,
  //   },
  // });
  await page.locator('#canvas').click({
    position: {
      x: 571,
      y: 495
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 599,
      y: 518
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 473,
      y: 466
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 434,
      y: 511
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 523,
      y: 409
    }
  });
  const point = { x: 523, y: 409 };
  const actualGeometry = await getGeometry(page, point);
  await page.waitForTimeout(300);

  await expect(actualGeometry).toHaveGeometryV0('Drawtab46' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab46' + '.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_128
 * @description Check user able to Draw Line + Arc mass on the ground plane by using space object type in 3D
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw ARC/Line tool 4 Select Object type as Space 5 Draw Line + ARC Mass
 * @expected User should be able to draw Line + Arc mass on the ground plane
 */
//TODO: Arc drawing is inaccurate. Need to rewrite.
test.skip('TC_DT_128', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
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
  await page.waitForTimeout(300);
  await setCameraPosition(page, camPos);
  await page.locator('#canvas').click({
    position: {
      x: 444,
      y: 464
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 633,
      y: 451
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 644,
      y: 420
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 680,
      y: 442
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 456,
      y: 422
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 445,
      y: 464
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 420,
      y: 457
    }
  });
  const point = { x: 530, y: 430 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab47' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab47' + '.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

/**
 * @id TC_DT_129
 * @description Check user able to Draw different shape of line + Arc combination mass on the ground plane by using space object type in 3D
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw Line/ARC tool 4 Select Object type as Space 5 Draw different shape of Line + ARC combination Mass
 * @expected user should be able to Draw different shape of line + Arc combination mass on the ground plane
 */
// TODO : Test case is failing due to shakeCam function in AA
test.skip('TC_DT_129', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();

  await page.waitForTimeout(300);

  await page.evaluate(() => {
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
      orthoBottom: -109.35362188077963,
      orthoTop: 109.35362188077963
    };

    // @ts-ignore
    store.exposed.automationCamera.setCamera(camPos);
  });

  await page.locator('#canvas').click({
    position: {
      x: 535,
      y: 406
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 447,
      y: 436
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();

  await page.locator('#canvas').click({
    position: {
      x: 453,
      y: 498
    }
  });

  await page.locator('#canvas').click({
    position: {
      x: 390,
      y: 495
    }
  });

  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 557,
      y: 546
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 670,
      y: 505
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();

  await page.locator('#canvas').click({
    position: {
      x: 626,
      y: 406
    }
  });

  await page.locator('#canvas').click({
    position: {
      x: 731,
      y: 418
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();

  await page.locator('#canvas').click({
    position: {
      x: 533,
      y: 409
    }
  });
  const point = { x: 533, y: 409 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab48' + '.geom', geometryDir);

  await page.waitForTimeout(1000);

  await page.evaluate(() => {
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
      orthoBottom: -109.35362188077963,
      orthoTop: 109.35362188077963
    };

    // @ts-ignore
    store.exposed.automationCamera.setCamera(camPos);
  });

  await expect(page).toHaveCanvasSnapshot('Drawtab48' + '.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});
