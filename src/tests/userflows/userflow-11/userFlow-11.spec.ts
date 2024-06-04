import { test, expect } from '@playwright/test';
import Login from '../../../utils/verification/Login.js';
import Logout from '../../../utils/verification/Logout.js';
import readFromFile from '../../../utils/verification/ReadFromFile.js';
import { getBrep } from '../../../utils/verification/GetBrep.js';
import { dragMouse } from '../../../utils/verification/GetBrep.js';
import compareBrep from '../../../utils/verification/CompareBrep.js';
import dragCoords from '../../../utils/verification/dragCoords.js';
import compareMatrix from '../../../utils/verification/compareMatrix.js';
import saveToFile from '../../../utils/verification/saveToFile.js';
import getMatrix from '../../../utils/verification/getMatrix.js';
import checkDraw from '../../../utils/verification/checkDraw.js';
import selectAndDelete from '../../../utils/environment/selectAndDelete.js';
import baseBuilding from './baseBuilding.js';
const getAbsolutePath = require('../../../utils/verification/GetAbsolutePath');
const selectAll = require('../../../utils/verification/selectAll');

// Legacy tests. Do not run.
test.describe.skip('userflow-11', () => {
  let context;
  let page;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await browser.newPage();
    await Login({ page });
    await baseBuilding(page);
  });

  test.beforeEach(async () => {
    await checkDraw(page);
    await page.evaluate(() => {
      // @ts-ignore
      return store.exposed.autoSaveConfig.disable();
    });

    await page.evaluate(() => {
      // @ts-ignore
      return store.exposed.autoSaveConfig.disableToasts();
    });
  });

  test.afterEach(async () => {
    await page.reload();
    await page.waitForSelector('.project-is-ready', { state: 'attached' });
    // await page.waitForTimeout(1000);
    await page.getByRole('img', { name: 'Views' }).click();
    await page.locator('.sc-cDJyZ').click();
    await page.getByRole('img', { name: 'Views' }).click();
  });

  test.afterAll(async () => {
    await Logout({ page });
  });

  test.skip('edit', async () => {
    await page.getByRole('img', { name: 'edit' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 494,
        y: 182
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 634,
        y: 189
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 493,
        y: 220
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 490,
        y: 184
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 537,
        y: 289
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 522,
        y: 257
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 533,
        y: 391
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 531,
        y: 337
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 416,
        y: 416
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 329,
        y: 439
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 593,
        y: 569
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 583,
        y: 535
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 729,
        y: 321
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 677,
        y: 321
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 729,
        y: 484
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 679,
        y: 479
      }
    });
    await page.getByRole('img', { name: 'pointer' }).click();

    // Now you can use these start and end points in your dragMouse function

    let mesh = await getBrep(page);

    await page.waitForTimeout(300);

    expect(mesh).toBeDefined();

    if (mesh) {
      // inputs for the relative paths
      let relBrepPath = '../../../testData/userflow/brep/UF-11-edit.brep';

      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(mesh, absoluteBrepPath);
      let baseMesh = readFromFile(absoluteBrepPath);

      compareBrep(mesh, baseMesh);

      await expect(page).toHaveScreenshot('UF-11-edit.png', {
        maxDiffPixels: 960
      });
    }
  });

  test.skip('editLength', async () => {
    await page.getByRole('img', { name: 'verticalResize' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 331,
        y: 293
      }
    });

    await page.keyboard.type('8000');

    await page.keyboard.press('Enter');

    await page.locator('#canvas').click({
      position: {
        x: 214,
        y: 342
      }
    });
    await page.waitForTimeout(1000);

    await page.locator('#canvas').press('Tab');
    await page.keyboard.type('5000');
    await page.locator('#canvas').press('Enter');

    await page.locator('#canvas').click({
      position: {
        x: 545,
        y: 222
      }
    });

    await page.waitForTimeout(1000);

    await page.locator('#canvas').press('Tab');

    await page.waitForTimeout(1000);

    await page.keyboard.type('6000');

    await page.waitForTimeout(1000);

    await page.locator('#canvas').press('Enter');

    await page.waitForTimeout(1000);

    await page.locator('#canvas').click({
      position: {
        x: 571,
        y: 359
      }
    });

    await page.waitForTimeout(1000);

    await page.keyboard.type('4000');

    await page.waitForTimeout(1000);

    await page.locator('#canvas').press('Enter');

    await page.getByRole('img', { name: 'pointer' }).click();

    // Now you can use these start and end points in your dragMouse function

    let mesh = await getBrep(page);

    await page.waitForTimeout(300);

    expect(mesh).toBeDefined();

    if (mesh) {
      // inputs for the relative paths
      let relBrepPath = '../../../testData/userflow/brep/UF-11-editLength.brep';

      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(mesh, absoluteBrepPath);
      let baseMesh = readFromFile(absoluteBrepPath);

      compareBrep(mesh, baseMesh);

      await expect(page).toHaveScreenshot('UF-11-editLength.png', {
        maxDiffPixels: 960
      });
    }
  });

  test.skip('copy and rotate', async () => {
    await page.getByRole('img', { name: 'zoomOut' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 794,
        y: 492
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 794,
        y: 492
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 794,
        y: 492
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 794,
        y: 492
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 794,
        y: 492
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 896,
        y: 582
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 896,
        y: 582
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 896,
        y: 582
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 896,
        y: 582
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 896,
        y: 582
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 896,
        y: 582
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 896,
        y: 582
      }
    });
    await page.getByRole('img', { name: 'copy' }).click();
    await page.locator('body').press('Meta+a');
    await page.locator('#canvas').click({
      position: {
        x: 785,
        y: 491
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 572,
        y: 488
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 668,
        y: 477
      }
    });
    // add 2
    await page.locator('#canvas').press('Enter');
    await page.locator('#canvas').press('Meta+a');
    await page.getByRole('img', { name: 'rotate' }).click();

    await page.locator('#canvas').click({
      position: {
        x: 585,
        y: 454
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 543,
        y: 449
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 587,
        y: 489
      }
    });

    await page.getByRole('img', { name: 'pointer' }).click();

    // Now you can use these start and end points in your dragMouse function

    let mesh = await getBrep(page);

    await page.waitForTimeout(300);

    expect(mesh).toBeDefined();

    if (mesh) {
      // inputs for the relative paths
      let relBrepPath = '../../../testData/userflow/brep/UF-11-copy+rotate.brep';

      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(mesh, absoluteBrepPath);
      let baseMesh = readFromFile(absoluteBrepPath);

      compareBrep(mesh, baseMesh);

      await expect(page).toHaveScreenshot('UF-11-copy+rotate.png', {
        maxDiffPixels: 960
      });
    }

    let transMatrix = await getMatrix(page);

    expect(transMatrix).toBeDefined();

    if (transMatrix) {
      let relBrepPath = '../../../testData/userflow/matrix/UF-11-copy+rotate.mx';
      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(transMatrix, absoluteBrepPath);

      let baseMatrix = readFromFile(absoluteBrepPath);

      compareMatrix(transMatrix, baseMatrix);
    }
  });

  test.skip('create-building+door', async () => {
    await page.locator('#canvas').press('Meta+a');
    await page.getByText('Automate', { exact: true }).click();
    await page.getByRole('img', { name: 'autoResize' }).click();
    await page.getByRole('img', { name: 'doors' }).click();
    await page.waitForTimeout(1000);
    await page.locator('#canvas').click({
      position: {
        x: 414,
        y: 423
      }
    });
    await page.waitForTimeout(100);

    await page.locator('#canvas').click({
      position: {
        x: 492,
        y: 417
      }
    });
    await page.waitForTimeout(100);

    await page.locator('#canvas').click({
      position: {
        x: 573,
        y: 417
      }
    });
    await page.waitForTimeout(100);

    await page.locator('#canvas').click({
      position: {
        x: 571,
        y: 249
      }
    });
    await page.waitForTimeout(100);

    await page.locator('#canvas').click({
      position: {
        x: 493,
        y: 176
      }
    });
    await page.waitForTimeout(100);

    await page.locator('#canvas').click({
      position: {
        x: 261,
        y: 331
      }
    });
    await page.waitForTimeout(100);

    await page.locator('#canvas').click({
      position: {
        x: 730,
        y: 186
      }
    });
    await page.waitForTimeout(100);

    await page.getByRole('img', { name: 'doors' }).click();
    await page.waitForTimeout(100);

    await page.getByRole('img', { name: 'doors' }).click();
    await page.waitForTimeout(1000);

    await page.getByText('2 Shutter').click();
    await page.waitForTimeout(1000);

    await page.locator('#door-doubleDoor-list-item-1').click();
    await page.waitForTimeout(100);

    await page.locator('#canvas').click({
      position: {
        x: 730,
        y: 518
      }
    });
    await page.waitForTimeout(100);

    await page.locator('#canvas').click({
      position: {
        x: 259,
        y: 445
      }
    });
    await page.waitForTimeout(100);

    await page.getByRole('list').locator('p').filter({ hasText: 'Sliding' }).click();
    await page.waitForTimeout(1000);

    await page.locator('#door-sliding2-list-item-4').click();
    await page.waitForTimeout(100);

    await page.locator('#canvas').click({
      position: {
        x: 730,
        y: 391
      }
    });
    await page.waitForTimeout(100);

    await page.locator('p').filter({ hasText: 'Garage' }).click();
    await page.waitForTimeout(1000);

    await page.locator('#door-garage-list-item-1').click();
    await page.waitForTimeout(100);

    await page.locator('#canvas').click({
      position: {
        x: 341,
        y: 289
      }
    });
    await page.waitForTimeout(100);

    await page.getByRole('img', { name: 'pointer' }).click();

    // Now you can use these start and end points in your dragMouse function

    let mesh = await getBrep(page);

    await page.waitForTimeout(300);

    expect(mesh).toBeDefined();

    if (mesh) {
      // inputs for the relative paths
      let relBrepPath = '../../../testData/userflow/brep/UF-11-door.brep';

      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(mesh, absoluteBrepPath);
      let baseMesh = readFromFile(absoluteBrepPath);

      compareBrep(mesh, baseMesh);

      await selectAll(page);

      await expect(page).toHaveScreenshot('UF-11-door.png', {
        maxDiffPixels: 960
      });

      await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();

      await page.waitForTimeout(500);

      await expect(page).toHaveScreenshot('UF-11-door-3D.png', {
        maxDiffPixels: 960
      });
    }
  });

  test.skip('window', async () => {
    await page.getByRole('img', { name: 'pointer' }).click();
    await page.locator('body').press('Meta+a');
    await page.getByText('Automate', { exact: true }).click();
    await page.getByRole('img', { name: 'autoResize' }).click();

    await page.getByRole('img', { name: 'windows' }).click();

    await page.waitForTimeout(1000);
    await page.locator('#canvas').click({
      position: {
        x: 734,
        y: 185
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 734,
        y: 213
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 734,
        y: 241
      }
    });
    await page.getByRole('img', { name: 'windows' }).click();
    await page.getByRole('img', { name: 'windows' }).click();

    await page.waitForTimeout(1000);

    await page.locator('p').filter({ hasText: 'Casement' }).click();

    await page.locator('#window-casementSingle-list-item-4').click();
    await page.locator('#canvas').click({
      position: {
        x: 728,
        y: 299
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 729,
        y: 346
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 733,
        y: 384
      }
    });

    await page.waitForTimeout(1000);

    await page.getByRole('list').getByText('2 Shutter').click();

    await page.locator('#window-casementDouble-list-item-3').click();
    await page.locator('#canvas').click({
      position: {
        x: 728,
        y: 477
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 729,
        y: 536
      }
    });

    await page.waitForTimeout(1000);

    await page.getByRole('list').locator('[id="\\32 "]').click();

    await page.locator('#window-sliding2-list-item-3').click();
    await page.locator('#canvas').click({
      position: {
        x: 690,
        y: 562
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 617,
        y: 567
      }
    });
    await page.locator('#canvas').click({
      position: {
        x: 547,
        y: 571
      }
    });

    await page.waitForTimeout(1000);

    await page.getByRole('list').locator('[id="\\34 "]').click();

    await page.locator('#window-pivot2-list-item-3').click();
    await page.locator('#canvas').click({
      position: {
        x: 318,
        y: 497
      }
    });

    await page.waitForTimeout(1000);

    await page.locator('p').filter({ hasText: 'Top Hung' }).click();

    await page.locator('#window-topHungWindow-list-item-3').click();
    await page.locator('#canvas').click({
      position: {
        x: 259,
        y: 452
      }
    });

    await page.getByRole('img', { name: 'pointer' }).click();

    // Now you can use these start and end points in your dragMouse function

    let mesh = await getBrep(page);

    await page.waitForTimeout(300);

    expect(mesh).toBeDefined();

    if (mesh) {
      // inputs for the relative paths
      let relBrepPath = '../../../testData/userflow/brep/UF-11-window.brep';

      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(mesh, absoluteBrepPath);
      let baseMesh = readFromFile(absoluteBrepPath);

      compareBrep(mesh, baseMesh);

      await selectAll(page);

      await expect(page).toHaveScreenshot('UF-11-window.png', {
        maxDiffPixels: 960
      });
    }
  });

  test.skip('furniture', async () => {
    // redo
    await page.getByRole('img', { name: 'pointer' }).click();
    await page.locator('body').press('Meta+a');
    await page.getByText('Automate', { exact: true }).click();
    await page.getByRole('img', { name: 'autoResize' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('img', { name: 'furniture' }).click();
    await page.waitForTimeout(1000);
    await page
      .locator(
        '[id="furniture-living-list-item-https\\:\\/\\/api\\.snaptru\\.de\\/media\\/media\\/objects\\/coffeetable_petal\\.babylon\\.png-coffeetable_petal"]'
      )
      .click();
    await page.locator('#canvas').click({
      position: {
        x: 642,
        y: 305
      }
    });
    await page
      .locator(
        '[id="furniture-living-list-item-https\\:\\/\\/api\\.snaptru\\.de\\/media\\/media\\/objects\\/Barcelonachaire\\.babylon\\.png-Barcelonachaire"]'
      )
      .click();
    await page.locator('#canvas').click({
      position: {
        x: 274,
        y: 306
      }
    });
    await page
      .locator(
        '[id="furniture-living-list-item-https\\:\\/\\/api\\.snaptru\\.de\\/media\\/media\\/objects\\/sofa_4m\\.babylon\\.png-sofa_4m"]'
      )
      .click();
    await page.locator('#canvas').click({
      position: {
        x: 687,
        y: 240
      }
    });
    await page
      .locator(
        '[id="furniture-living-list-item-https\\:\\/\\/api\\.snaptru\\.de\\/media\\/media\\/objects\\/3_seater-olive_green-wooden_arm\\.babylon\\.png-3_seater-olive_green-wooden_arm"]'
      )
      .click();
    await page.locator('#canvas').click({
      position: {
        x: 539,
        y: 551
      }
    });
    await page.locator('p').filter({ hasText: 'Balcony' }).click();
    await page
      .locator(
        '[id="furniture-balcony-list-item-https\\:\\/\\/api\\.snaptru\\.de\\/media\\/media\\/objects\\/Rustic_Wooden-Study_Table-1200_x_600_iREVqNm\\/Rustic_Wooden-Study_Table-1200_x_600_iREVqNm\\.babylon\\.png-Rustic_Wooden-Study_Table-1200_x_600_iREVqNm"]'
      )
      .click();
    await page.locator('#canvas').click({
      position: {
        x: 598,
        y: 427
      }
    });
    await page
      .locator('p')
      .filter({ hasText: /^Office$/ })
      .click();
    await page
      .locator(
        '[id="furniture-office-list-item-https\\:\\/\\/api\\.snaptru\\.de\\/media\\/media\\/objects\\/Ergonomic_meshed_armless_office_chair_HvDY4Lz\\/Ergonomic_meshed_armless_office_chair_HvDY4Lz\\.babylon\\.png-Ergonomic_meshed_armless_office_chair_HvDY4Lz"]'
      )
      .click();
    await page.locator('#canvas').click({
      position: {
        x: 596,
        y: 399
      }
    });
    await page.locator('p').filter({ hasText: 'Reception' }).click();
    await page
      .locator(
        '[id="furniture-reception-list-item-https\\:\\/\\/api\\.snaptru\\.de\\/media\\/media\\/objects\\/Curved_panelled_reception\\.babylon\\.png-Curved_panelled_reception"]'
      )
      .click();
    await page.locator('#canvas').click({
      position: {
        x: 388,
        y: 443
      }
    });

    await page.locator('p').filter({ hasText: 'Bathroom' }).click();
    await page
      .locator(
        '[id="furniture-bathroom-list-item-https\\:\\/\\/api\\.snaptru\\.de\\/media\\/media\\/objects\\/Classic_Pedestal_Wash_Basin-900_x_600\\.babylon\\.png-Classic_Pedestal_Wash_Basin-900_x_600"]'
      )
      .click();
    await page.locator('#canvas').click({
      position: {
        x: 282,
        y: 481
      }
    });
    await page
      .locator(
        '[id="furniture-bathroom-list-item-https\\:\\/\\/api\\.snaptru\\.de\\/media\\/media\\/objects\\/wc1\\.babylon\\.png-wc1"]'
      )
      .click();
    await page.locator('#canvas').click({
      position: {
        x: 338,
        y: 482
      }
    });
    await page
      .locator(
        '[id="furniture-bathroom-list-item-https\\:\\/\\/api\\.snaptru\\.de\\/media\\/media\\/objects\\/bathtub2\\.babylon\\.png-bathtub2"]'
      )
      .click();
    await page.locator('#canvas').click({
      position: {
        x: 386,
        y: 475
      }
    });
    await page.getByRole('img', { name: 'staircases' }).click();
    await page.locator('#staircase-straight-list-item-5').click();
    await page.locator('#canvas').click({
      position: {
        x: 723,
        y: 497
      }
    });
    await page.locator('#staircase-straight-list-item-6').click();
    await page.locator('#canvas').click({
      position: {
        x: 710,
        y: 449
      }
    });
    await page.locator('p').filter({ hasText: 'Dog - legged' }).click();
    await page.locator('#canvas').click({
      position: {
        x: 566,
        y: 225
      }
    });

    await page.getByRole('img', { name: 'pointer' }).click();

    // Now you can use these start and end points in your dragMouse function

    let mesh = await getBrep(page);

    await page.waitForTimeout(300);

    expect(mesh).toBeDefined();

    if (mesh) {
      // inputs for the relative paths
      let relBrepPath = '../../../testData/draw/brep/UF-11-furniture.brep';

      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(mesh, absoluteBrepPath);
      let baseMesh = readFromFile(absoluteBrepPath);

      compareBrep(mesh, baseMesh);

      await expect(page).toHaveScreenshot('UF-11-furniture.png', {
        maxDiffPixels: 960
      });
    }
  });

  test.skip('storey-basement', async () => {
    await page.getByRole('img', { name: 'pointer' }).click();
    await page.locator('body').press('Meta+a');
    await page.getByText('Automate', { exact: true }).click();
    await page.getByRole('img', { name: 'autoResize' }).click();
    await page.locator('body').press('Meta+a');
    await page.getByRole('img', { name: 'storey_down' }).first().click();
    await page.getByRole('spinbutton').click();
    await page.getByRole('spinbutton').fill('2');
    await page.getByRole('button', { name: 'Copy selection above' }).click();
    await page.getByRole('img', { name: 'storey_down' }).nth(1).click();
    await page.getByRole('button', { name: 'Copy selection below' }).click();
    await page.getByText('-2', { exact: true }).click();
    await page.getByText('-1', { exact: true }).click();
    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();

    await page.waitForTimeout(1000);

    await page.getByRole('img', { name: 'pointer' }).click();

    // Now you can use these start and end points in your dragMouse function

    await selectAll(page);

    let mesh = await getBrep(page);

    await page.waitForTimeout(300);

    expect(mesh).toBeDefined();

    if (mesh) {
      // inputs for the relative paths
      let relBrepPath = '../../../testData/userflow/brep/UF-11-storey-basement.brep';

      const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

      // saveToFile(mesh, absoluteBrepPath);
      let baseMesh = readFromFile(absoluteBrepPath);

      compareBrep(mesh, baseMesh);

      await expect(page).toHaveScreenshot('UF-11-storey-basement.png', {
        maxDiffPixels: 960
      });
    }
  });
});
