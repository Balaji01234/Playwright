import { expect, test } from '../../common/fixtures';
import set3DCameraPositionToVersion0 from '../../utils/environment/set3DCameraPositionToVersion0';
import { Page } from '@playwright/test';
import { configure2DProjectForTestV0, ensureDrawMode, initProject } from '../../common/project';

test.describe('basicIndicators', () => {
  let page: Page;

  test.beforeAll(async ({ browser }, testInfo) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await initProject(page, testInfo);
  });

  test.beforeEach(async () => {
    await configure2DProjectForTestV0(page);
  });

  test.afterEach(async () => {
    await ensureDrawMode(page);
    // exit draw mode
    await page.getByRole('img', { name: 'draw', exact: true }).click();
  });

  test.afterAll(async () => {
    await page.close();
  });

  // TODO identify the issue with the test
  test.skip('greenline', async () => {
    let delay = 1000;

    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();

    await page.waitForTimeout(300);

    await set3DCameraPositionToVersion0(page);

    await page.waitForTimeout(100);

    await page.locator('#canvas').click({
      position: {
        x: 352,
        y: 450
      },
      delay: delay
    });
    await page.locator('#canvas').click({
      position: {
        x: 500,
        y: 409
      },
      delay: delay
    });
    await page.locator('#canvas').click({
      position: {
        x: 557,
        y: 460
      },
      delay: delay
    });

    await page.waitForTimeout(300);

    await page.mouse.move(393, 510, { steps: 5 });

    await page.waitForTimeout(1000);

    await expect(page).toHaveCanvasSnapshot('3d-greenLineSnapshot.png', {
      maxDiffPixels: 960
    });

    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
    await page.waitForTimeout(300);
  });

  test('indicator-dashed', async () => {
    let delay = 10;

    await page.locator('#canvas').click({
      position: {
        x: 652,
        y: 499
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 652,
        y: 255
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 409,
        y: 255
      }
    });

    await page.waitForTimeout(300);

    await page.mouse.move(409, 498, { steps: 5 });

    await page.waitForTimeout(1000);

    await expect(page).toHaveCanvasSnapshot('indicator-dashedSnapshot.png', {
      maxDiffPixels: 960
    });
  });

  test('indicator-blue', async () => {
    let delay = 10;

    await page.mouse.move(585, 508, { steps: 5 });

    await page.locator('#canvas').click({
      position: {
        x: 266,
        y: 212
      },
      delay: delay
    });
    await page.locator('#canvas').click({
      position: {
        x: 584,
        y: 211
      },
      delay: delay
    });
    await page.waitForTimeout(300);

    await page.mouse.move(585, 508, { steps: 5 });

    await page.waitForTimeout(1000);

    await expect(page).toHaveCanvasSnapshot('indicator-blueSnapshot.png', {
      maxDiffPixels: 960
    });
  });

  test('indicator-parallel', async () => {
    let delay = 10;

    await page.locator('#canvas').click({
      position: {
        x: 255,
        y: 214
      },
      delay: delay
    });
    await page.locator('#canvas').click({
      position: {
        x: 604,
        y: 215
      },
      delay: delay
    });
    await page.locator('#canvas').click({
      position: {
        x: 707,
        y: 396
      },
      delay: delay
    });

    await page.waitForTimeout(300);

    await page.mouse.move(410, 394);

    await page.waitForTimeout(300);

    await page.mouse.move(370, 394);

    await page.waitForTimeout(100);

    await expect(page).toHaveCanvasSnapshot('indicator-parallelSnapshot.png', {
      maxDiffPixels: 960
    });
  });

  test('indicator-two', async () => {
    await page.locator('#canvas').click({
      position: {
        x: 273,
        y: 243
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 553,
        y: 243
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 554,
        y: 452
      }
    });

    await page.waitForTimeout(300);

    await page.mouse.move(273, 243, { steps: 5 });

    await page.mouse.move(272, 346, { steps: 5 });

    await page.waitForTimeout(100);

    await expect(page).toHaveCanvasSnapshot('indicator-twoSnapshot.png', {
      maxDiffPixels: 960
    });
  });

  test('angles-90deg', async () => {
    let delay = 10;

    await page.locator('#canvas').click({
      position: {
        x: 224,
        y: 193
      },
      delay: delay
    });
    await page.locator('#canvas').click({
      position: {
        x: 414,
        y: 195
      },
      delay: delay
    });

    await page.waitForTimeout(300);

    await page.mouse.move(417, 401, { steps: 5 });

    await page.waitForTimeout(1000);

    await expect(page).toHaveCanvasSnapshot('Angle-90degSnapshot.png', {
      maxDiffPixels: 960
    });
  });

  test('angles-60deg', async () => {
    let delay = 10;

    await page.locator('#canvas').click({
      position: {
        x: 288,
        y: 212
      },
      delay: delay
    });
    await page.locator('#canvas').click({
      position: {
        x: 496,
        y: 212
      },
      delay: delay
    });

    await page.waitForTimeout(300);

    await page.mouse.move(391, 391, { steps: 5 });

    await page.waitForTimeout(1000);
    await expect(page).toHaveCanvasSnapshot('Angle-60degSnapshot.png', {
      maxDiffPixels: 960
    });
  });

  test('angles-45deg', async () => {
    let delay = 10;

    await page.locator('#canvas').click({
      position: {
        x: 324,
        y: 385
      },
      delay: delay
    });
    await page.locator('#canvas').click({
      position: {
        x: 540,
        y: 387
      },
      delay: delay
    });

    await page.waitForTimeout(300);

    await page.mouse.move(323, 171, { steps: 5 });

    await page.waitForTimeout(1000);
    await expect(page).toHaveCanvasSnapshot('Angle-45degSnapshot.png', {
      maxDiffPixels: 960
    });
  });

  test('angles-180deg', async () => {
    let delay = 10;

    await page.locator('#canvas').click({
      position: {
        x: 295,
        y: 432
      },
      delay: delay
    });
    await page.locator('#canvas').click({
      position: {
        x: 504,
        y: 431
      },
      delay: delay
    });

    await page.waitForTimeout(300);

    await page.mouse.move(712, 433, { steps: 5 });

    await page.waitForTimeout(1000);
    await expect(page).toHaveCanvasSnapshot('Angle-180degSnapshot.png', {
      maxDiffPixels: 960
    });
  });
  test('angles-120deg', async () => {
    let delay = 10;

    await page.locator('#canvas').click({
      position: {
        x: 261,
        y: 406
      },
      delay: delay
    });
    await page.locator('#canvas').click({
      position: {
        x: 470,
        y: 405
      },
      delay: delay
    });

    await page.waitForTimeout(300);

    await page.mouse.move(574, 226, { steps: 5 });

    await page.waitForTimeout(1000);
    await expect(page).toHaveCanvasSnapshot('Angle-120degSnapshot.png', {
      maxDiffPixels: 960
    });
  });
  test('angles-135deg', async () => {
    let delay = 10;

    await page.locator('#canvas').click({
      position: {
        x: 292,
        y: 432
      },
      delay: delay
    });
    await page.locator('#canvas').click({
      position: {
        x: 501,
        y: 433
      },
      delay: delay
    });

    await page.waitForTimeout(300);

    await page.mouse.move(648, 284, { steps: 5 });

    await page.waitForTimeout(1000);
    await expect(page).toHaveCanvasSnapshot('Angle-135degSnapshot.png', {
      maxDiffPixels: 960
    });
  });
});
