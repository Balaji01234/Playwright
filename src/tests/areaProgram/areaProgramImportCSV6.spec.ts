import { expect, test } from '../../common/fixtures';
import { Page } from '@playwright/test';
import { initProject, configure2DProjectForTestV0 } from '../../common/project';
import { clearCanvas, selectAll } from '../../common/canvas';
import { createGeometryDir, getGeometry, getSnaptrudeDS } from '../../common/geometry';
import { reset2DCameraVersion0 } from '../../common/camera';

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
  await page.reload();
  await page.waitForSelector('.project-is-ready', {
    state: 'attached',
    timeout: 60000
  });
});

test.afterAll(async () => {
  await page.close();
});

const locators = {
  csvImport: "(//input[@type='file'])[2]",
  objectProp: '(//*[@id="object_properties_panel"]//section)[1]',
  areasTab: "//*[@id='area-sidebar']",
  label: "//*[text()='Label']//..//input",
  mass_count: "//p[text()='Count']//..//div//p",
  chart_img: "((//*[@id='area-sidebar']//..//..)//div)[4]",
  import_popup: "(//*[text()='Import Successful']//..//..)[1]",
  area: "(//*[text()='Footprint Area']//..//p)[2]"
};

/**
 * @id TC_API_071
 * @description Check the user able to  copy- paste the spaces across projects.
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 * 6.Press(Ctrl+C)
 * 7.Press(Ctrl+V)
 *
 *
 * @expected the user able to  copy- paste the spaces across projects.
 */
test('TC_API_071', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/tc_api_071.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_071_1.png', { maxDiffPixels: 960 });
  await selectAll(page);
  await page.locator('#canvas').press('Control+c');
  await page.locator('#canvas').press('Escape');
  await page.locator("//*[@alt='snaptrude']").click();
  await page.reload();
  await page.waitForSelector('.dashboard-is-ready', { state: 'attached', timeout: 60000 });
  const existing_project = page.locator("//*[@value='TC_API_071']").count();
  if ((await existing_project) === 0) {
    await page.locator("//button[text()='New Project']").click();
    await page.locator("//*[@id='create-project-name']").fill('TC_API_071');
    await page.locator("//button[text()='Create']").click();
    await page.waitForSelector('.project-is-ready', {
      state: 'attached',
      timeout: 60000
    });
  }
  if ((await existing_project) !== 0) {
    await page.locator("//*[@value='TC_API_071']").click();
    await page.waitForSelector('.project-is-ready', {
      state: 'attached',
      timeout: 60000
    });
  }
  await clearCanvas(page);
  await reset2DCameraVersion0(page);
  await page.waitForTimeout(300);
  await page.locator('#canvas').press('Control+v');
  await page.evaluate(() => {
    store.exposed.automationCamera.setCamera({
      position: {
        _x: 31.803789710998217,
        _y: 904.4335378750847,
        _z: -29.89508772958236
      },
      alpha: -1.5707963267948966,
      beta: 0,
      radius: 898.5294586362947,
      target: {
        _x: 31.803789710998217,
        _y: 5.904079238789905,
        _z: -29.80523478371873
      },
      isOrtho: true,
      orthoLeft: -83.43525008575354,
      orthoRight: 213.1567841457533,
      orthoBottom: -105.59011682215001,
      orthoTop: 61.24290243307266
    });
  });
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 225,
      y: 332
    }
  });
  await page.waitForTimeout(300);
  await page.locator('#canvas').press('Escape');
  await expect(page).toHaveCanvasSnapshot('tc_api_071_2.png', { maxDiffPixels: 960 });
  await clearCanvas(page);
  await page.locator("//a//*[@alt='snaptrude']").click({ force: true });
  await page.waitForTimeout(500);
  const pointer1 = await page.locator("//*[@alt='pointer']").count();
  if (pointer1 === 1) {
    await page.locator("//*[@alt='snaptrude']").click({ force: true });
  }
  await page.waitForSelector("//*[@value='TC_API_071']", {
    state: 'attached',
    timeout: 60000
  });
  await page.locator("//*[@value='TC_API_071']").hover();
  await page.locator("//*[@value='TC_API_071']//..//..//..//..//button//img").click();
  await page
    .locator("(//*[@value='TC_API_071']//..//..//..//..//button//..//..)//*[text()='Delete']")
    .click();
  await page.locator("//button[text()='Delete']").click();
  await page.waitForSelector("//*[@value='areaProgramImportCSV6.spec.ts']", {
    state: 'attached',
    timeout: 60000
  });
  await page.locator("//*[@value='areaProgramImportCSV6.spec.ts']").click();
  await page.waitForSelector('.project-is-ready', {
    state: 'attached',
    timeout: 60000
  });
  await clearCanvas(page);
});

/**
 * @id TC_API_072
 * @description Check user able to  measure distances on the imported spaces With snaps  in 2D & 3D
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 * 6.Click measuring tape
 *
 *
 * @expected user able to  measure distances on the imported spaces With snaps  in 2D & 3D
 */
test('TC_API_072', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/tc_api_072.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_072_1.png', { maxDiffPixels: 960 });
  await page.getByText('Measure').click();
  await page.getByRole('img', { name: 'scale' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 416,
      y: 254
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 620,
      y: 255
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 624,
      y: 204
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 654,
      y: 462
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 868,
      y: 463
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 853,
      y: 546
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 413,
      y: 256
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 412,
      y: 466
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 357,
      y: 461
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 867,
      y: 257
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 868,
      y: 466
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 906,
      y: 459
    }
  });
  await expect(page).toHaveCanvasSnapshot('tc_api_072_2.png', { maxDiffPixels: 960 });
});

/**
 * @id TC_API_073
 * @description After import,Check user able to comments on the object  in both 2D&3D
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 *
 *
 *
 * @expected After import, user able to comments on the object  in both 2D&3D
 */
/* Comments tab is not loaded properly, verification is yet to add*/
test.skip('TC_API_073', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/tc_api_073.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.getByText('Collaborate').click();
  await page.getByRole('img', { name: 'commentmode' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 557,
      y: 203
    }
  });
  await page.getByRole('combobox').fill('Mass 1');
  await page.locator('path').first().click();
  await page.locator('#canvas').click({
    position: {
      x: 688,
      y: 198
    }
  });
  await page.getByRole('combobox').fill('Mass 2');
  await page.locator('path').first().click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.getByRole('img', { name: 'Comments' }).click();
});

/**
 * @id TC_API_074
 * @description Check user can draw by snapping to this mass, in 2D and in 3D
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 * 6.Click draw
 *
 *
 * @expected user can draw by snapping to this mass, in 2D and in 3D
 */
test('TC_API_074', async () => {
  test.setTimeout(350000);
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/tc_api_074.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_074_1.png', { maxDiffPixels: 960 });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 626,
      y: 375
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 726,
      y: 371
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 724,
      y: 465
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 629,
      y: 472
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 633,
      y: 539
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 815,
      y: 522
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 821,
      y: 467
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 727,
      y: 467
    }
  });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 315,
      y: 407
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 209,
      y: 428
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 246,
      y: 575
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 378,
      y: 532
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 815,
      y: 184
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 887,
      y: 187
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 885,
      y: 346
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 815,
      y: 351
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 624,
      y: 182
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 627,
      y: 131
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 467,
      y: 132
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 465,
      y: 183
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 461,
      y: 184
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 417,
      y: 190
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 414,
      y: 298
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 464,
      y: 298
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 907,
      y: 464
    }
  });
  await expect(page).toHaveCanvasSnapshot('tc_api_074_2.png', { maxDiffPixels: 960 });
  const point1 = { x: 440, y: 285 };
  const point2 = { x: 519, y: 171 };
  const point3 = { x: 868, y: 312 };
  const point4 = { x: 689, y: 435 };
  const point5 = { x: 691, y: 508 };
  const point6 = { x: 553, y: 590 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('tc_api_074_1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('tc_api_074_2.geom', geometryDir);
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('tc_api_074_3.geom', geometryDir);
  const actualGeometry4 = await getGeometry(page, point4);
  await expect(actualGeometry4).toHaveGeometryV0('tc_api_074_4.geom', geometryDir);
  const actualGeometry5 = await getGeometry(page, point5);
  await expect(actualGeometry5).toHaveGeometryV0('tc_api_074_5.geom', geometryDir);
  const actualGeometry6 = await getGeometry(page, point6);
  await expect(actualGeometry6).toHaveGeometryV0('tc_api_074_6.geom', geometryDir);
  await selectAll(page);
  const count = await page.locator(locators.mass_count);
  await expect(count).toHaveText('9');
  await page.locator('#canvas').press('Escape');
  await page.getByRole('img', { name: 'Space' }).click();
  await reset2DCameraVersion0(page);
});

/**
 * @id TC_API_075
 * @description Check user able to Draw masses, walls, slabs and other objects snapping to vertices of imported masses
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 * 6.Click draw
 *
 *
 * @expected user able to Draw masses, walls, slabs and other objects snapping to vertices of imported masses
 */
test('TC_API_075', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/tc_api_075.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_075_1.png', { maxDiffPixels: 960 });
  await page.evaluate(() => {
    store.exposed.automationCamera.setCamera({
      position: {
        _x: 11.224955558776855,
        _y: 907.5239748274867,
        _z: -11.315117405073996
      },
      alpha: -1.5707963267948966,
      beta: 0,
      radius: 895.7128173033287,
      target: {
        _x: 11.224955558776855,
        _y: 11.81115752415792,
        _z: -11.225546123343664
      },
      isOrtho: true,
      orthoLeft: -34.758643055119705,
      orthoRight: 35.79372212070635,
      orthoBottom: -19.086448895298272,
      orthoTop: 20.59925651610388
    });
  });
  await page.getByRole('img', { name: 'Space' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 747,
      y: 262
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 836,
      y: 265
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 828,
      y: 369
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 745,
      y: 370
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 744,
      y: 487
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 893,
      y: 485
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 892,
      y: 366
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 839,
      y: 367
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 522,
      y: 262
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 521,
      y: 196
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 744,
      y: 200
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 744,
      y: 263
    }
  });
  await page.getByRole('img', { name: 'Wall' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 516,
      y: 488
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 459,
      y: 488
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 462,
      y: 262
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 518,
      y: 258
    }
  });
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'pointer' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_075_2.png', { maxDiffPixels: 960 });
  const point1 = { x: 461, y: 421 };
  const point2 = { x: 597, y: 220 };
  const point3 = { x: 804, y: 345 };
  const point4 = { x: 780, y: 455 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('tc_api_075_1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('tc_api_075_2.geom', geometryDir);
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('tc_api_075_3.geom', geometryDir);
  const actualGeometry4 = await getGeometry(page, point4);
  await expect(actualGeometry4).toHaveGeometryV0('tc_api_075_4.geom', geometryDir);
  await selectAll(page);
  const count = await page.locator(locators.mass_count);
  await expect(count).toHaveText('7');
  await page.locator('#canvas').press('Escape');
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
 * @id TC_API_076
 * @description Check monochrome, orthographic and hidden line mode to work as expected for these masses also
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 * 6.Click views
 * 7.Click settings
 *
 *
 * @expected monochrome, orthographic and hidden line mode to work as expected for these masses also
 */
test('TC_API_076', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/tc_api_076.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_076_1.png', { maxDiffPixels: 960 });
  await page.getByText('Views').click();
  await page.getByRole('img', { name: 'settings', exact: true }).click();
  await page
    .locator('div')
    .filter({ hasText: /^Monochrome$/ })
    .locator('div')
    .nth(1)
    .click();
  await expect(page).toHaveCanvasSnapshot('tc_api_076_2.png', { maxDiffPixels: 960 });
  await page
    .locator('div')
    .filter({ hasText: /^Monochrome$/ })
    .locator('div')
    .nth(1)
    .click();
  await page
    .locator('div')
    .filter({ hasText: /^Hidden Line$/ })
    .locator('div')
    .nth(1)
    .click();
  await expect(page).toHaveCanvasSnapshot('tc_api_076_3.png', { maxDiffPixels: 960 });
  await page
    .locator('div')
    .filter({ hasText: /^Hidden Line$/ })
    .locator('div')
    .nth(1)
    .click();
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.evaluate(() => {
    store.exposed.automationCamera.setCamera({
      position: {
        _x: 84.27568671507747,
        _y: 64.88502274372101,
        _z: -70.33067655528595
      },
      alpha: -0.855083115595483,
      beta: 1.0714865412893981,
      radius: 106.40210968174785,
      target: {
        _x: 22.98297818097835,
        _y: 13.937596054357385,
        _z: 0.1602628554822232
      },
      isOrtho: false,
      orthoLeft: -87.29737968205397,
      orthoRight: 87.29737968205397,
      orthoBottom: -49.10477607115536,
      orthoTop: 49.10477607115536
    });
  });
  await page
    .locator('div')
    .filter({ hasText: /^Orthographic$/ })
    .locator('div')
    .nth(1)
    .click();
  await expect(page).toHaveCanvasSnapshot('tc_api_076_4.png', { maxDiffPixels: 960 });
  await page
    .locator('div')
    .filter({ hasText: /^Orthographic$/ })
    .locator('div')
    .nth(1)
    .click();
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.getByRole('img', { name: 'settings', exact: true }).click();
});

/**
 * @id TC_API_077
 * @description Check user able to storey copy (CTRL+up) the imported masses
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 *
 *
 *
 * @expected user able to storey copy (CTRL+up) the imported masses
 */
test('TC_API_077', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/tc_api_077.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').press('Control+A');
  await page.locator('#canvas').press('Control+ArrowUp');
  await page.locator('#canvas').press('Escape');
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.evaluate(() => {
    store.exposed.automationCamera.setCamera({
      position: {
        _x: 84.08314582052867,
        _y: 56.83130995599879,
        _z: -74.6068491316255
      },
      alpha: -0.8144248396814092,
      beta: 1.1808097085454357,
      radius: 101.47999422488571,
      target: {
        _x: 19.668069362501427,
        _y: 18.25104779636127,
        _z: -6.339356688420992
      },
      isOrtho: false,
      orthoLeft: -83.67312189026848,
      orthoRight: 83.67312189026848,
      orthoBottom: -47.06613106327602,
      orthoTop: 47.06613106327602
    });
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 371,
      y: 560
    }
  });
  const point = { x: 620, y: 419 };
  const component = await getSnaptrudeDS(page, point);
  await expect(component.storey).toBe(2);
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 841,
      y: 547
    }
  });
  await expect(page).toHaveCanvasSnapshot('tc_api_077.png', { maxDiffPixels: 960 });
  await page.getByText('2', { exact: true }).click();
  await clearCanvas(page);
  await page.locator('p').filter({ hasText: '1' }).click();
});

/**
 * @id TC_API_078
 * @description Check user able to storey copy above and below the imported masses
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 *
 *
 *
 * @expected  user able to storey copy above and below the imported masses
 */
test('TC_API_078', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/tc_api_078.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').press('Control+A');
  await page.getByRole('img', { name: 'storey_down' }).first().click();
  await page.getByRole('button', { name: 'Copy selection above' }).click();
  await page.getByRole('img', { name: 'storey_down' }).nth(1).click();
  await page.getByRole('button', { name: 'Copy selection below' }).click();
  await page.locator('#canvas').press('Escape');
  await page.mouse.move(516, 371);
  await expect(page).toHaveCanvasSnapshot('tc_api_078.png', { maxDiffPixels: 960 });
  await page.getByText('2', { exact: true }).click();
  const point = { x: 509, y: 324 };
  const component = await getSnaptrudeDS(page, point);
  await expect(component.storey).toBe(2);
  await clearCanvas(page);
  await page.getByText('-1', { exact: true }).click();
  const component1 = await getSnaptrudeDS(page, point);
  await expect(component1.storey).toBe(-1);
  await clearCanvas(page);
  await page.locator('p').filter({ hasText: /^1$/ }).click();
  const component2 = await getSnaptrudeDS(page, point);
  await expect(component2.storey).toBe(1);
  await clearCanvas(page);
  await page.mouse.move(541, 285);
});

/**
 * @id TC_API_079
 * @description Check user able to apply / remove material on the imported mass
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 * 6.Click material tab
 *
 *
 * @expected user able to apply / remove material on the imported mass
 */
test('TC_API_079', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/tc_api_079.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_079_1.png', { maxDiffPixels: 960 });
  await page.getByRole('img', { name: 'materials' }).click();
  await page
    .locator(
      '[id="material-colors-list-item-https\\:\\/\\/automationapi\\.snaptru\\.de\\/media\\/media\\/materials\\/RAL_1026_DeAaB25\\.jpg-RAL\\ 1026"]'
    )
    .click();
  await page.locator('#canvas').click({
    position: {
      x: 558,
      y: 363
    }
  });
  await page.getByRole('img', { name: 'materials' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_079_2.png', { maxDiffPixels: 960 });
  const point = { x: 558, y: 363 };
  const component = await getSnaptrudeDS(page, point);
  await page.getByRole('img', { name: 'materials' }).click();
  await page.getByRole('img', { name: 'removeMaterial' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 419,
      y: 376
    }
  });
  await page.getByRole('img', { name: 'materials' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 995,
      y: 509
    }
  });
  await expect(page).toHaveCanvasSnapshot('tc_api_079_3.png', { maxDiffPixels: 960 });
});

/**
 * @id TC_API_080
 * @description Check user able to apply / remove material on the mass by face or object
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 * 6.Click material tab
 *
 *
 * @expected user able to apply / remove material on the mass by face or object
 */
/* 3D snapshot was failing in pipeline at the ratio of 0.01 but passing in local and docker executions */
test.skip('TC_API_080', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/tc_api_079.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.evaluate(() => {
    store.exposed.automationCamera.setCamera({
      position: {
        _x: 85.08015494992125,
        _y: 38.086328747219326,
        _z: -72.72111545569423
      },
      alpha: -0.817251388673885,
      beta: 1.3173783543266373,
      radius: 124.58170417717248,
      target: {
        _x: 2.5603741492710093,
        _y: 6.8519235051294665,
        _z: 15.230568561577801
      },
      isOrtho: false,
      orthoLeft: -93.87739691688245,
      orthoRight: 93.87739691688245,
      orthoBottom: -52.80603576574637,
      orthoTop: 52.80603576574637
    });
  });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_080_1.png', { maxDiffPixels: 960 });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.getByRole('img', { name: 'materials' }).click();
  await page
    .locator(
      '[id="material-colors-list-item-https\\:\\/\\/automationapi\\.snaptru\\.de\\/media\\/media\\/materials\\/RAL_3017_eAVfadb\\.jpg-RAL_3017_eAVfadb"]'
    )
    .click();
  await page.locator('#canvas').click({
    position: {
      x: 653,
      y: 472
    }
  });
  await page.getByRole('img', { name: 'materials' }).click();
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_080_2.png', { maxDiffPixels: 960 });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.getByRole('img', { name: 'materials' }).click();
  await page.getByRole('img', { name: 'removeMaterial' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 653,
      y: 472
    }
  });
  await page.getByRole('img', { name: 'materials' }).click();
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_080_3.png', { maxDiffPixels: 960 });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.getByRole('img', { name: 'materials' }).click();
  await page.locator("(//*[text()='Object']//..//div)[2]").click();
  await page
    .locator(
      '[id="material-colors-list-item-https\\:\\/\\/automationapi\\.snaptru\\.de\\/media\\/media\\/materials\\/RAL_2003_1RfJW6f\\.jpg-RAL_2003_1RfJW6f"]'
    )
    .click();
  await page.locator('#canvas').click({
    position: {
      x: 653,
      y: 472
    }
  });
  await page.getByRole('img', { name: 'materials' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_080_4.png', { maxDiffPixels: 960 });
  await page.getByRole('img', { name: 'materials' }).click();
  await page.getByRole('img', { name: 'removeMaterial' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 653,
      y: 472
    }
  });
  await page.getByRole('img', { name: 'materials' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_080_5.png', { maxDiffPixels: 960 });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
});

/**
 * @id TC_API_048
 * @description If the user upload the infomation in CSV as wrong ( .i,e User might type in a text instead of a numerical value in say ‘count') , Masses should not get imported onto the canvas.
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 *
 * @expected If the user upload the infomation in CSV as wrong ( .i,e User might type in a text instead of a numerical value in say ‘count') , Masses should not get imported onto the canvas.
 */
test('TC_API_048', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/invalidCount.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await expect(page.locator(locators.import_popup)).toHaveScreenshot('tc_api_048_1.png', {
    maxDiffPixels: 960,
    timeout: 15000
  });
  await page.getByRole('button', { name: 'Done' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_048_2.png', { maxDiffPixels: 960 });
});
