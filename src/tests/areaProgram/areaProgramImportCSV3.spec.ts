import { expect, test } from '../../common/fixtures';
import { Page } from '@playwright/test';
import { initProject, configure2DProjectForTestV0 } from '../../common/project';
import { clearCanvas, selectAll } from '../../common/canvas';
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

const locators = {
  csvImport: "(//input[@type='file'])[2]",
  objectProp: '(//*[@id="object_properties_panel"]//section)[1]',
  areasTab: "//*[@id='area-sidebar']",
  label: "//*[text()='Label']//..//input",
  mass_count: "//p[text()='Count']//..//div//p"
};

/**
 * @id TC_API_036
 * @description Check if dimensions working correctly. for imported Space type objects in all units.
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 *
 * @expected  dimensions should working correctly. for imported Space type objects in all units.
 */
/*Default storey height is incorrect while running in pipeline*/
test.skip('TC_API_036', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/mm1.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_036_1.png');
  await page.locator('#canvas').click({
    position: {
      x: 574,
      y: 269
    }
  });
  const objectProperties = await page.locator(locators.objectProp);
  await expect(objectProperties).toBeVisible();
  await page.waitForSelector(locators.label, {
    state: 'attached',
    timeout: 60000
  });
  await expect(objectProperties).toHaveScreenshot('tc_api_036_2.png', { timeout: 15000 });
  await page.getByRole('img', { name: 'delete_icon' }).click();
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.getByText('Millimeters').click();
  await page.getByText('Centimeters').click();
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.mouse.move(574, 269);
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath1 = './testData/areaProgram/inputData/cm1.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath1);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_036_3.png');
  await page.locator('#canvas').click({
    position: {
      x: 574,
      y: 269
    }
  });
  await expect(objectProperties).toBeVisible();
  await expect(objectProperties).toHaveScreenshot('tc_api_036_4.png', { timeout: 25000 });
  await page.getByRole('img', { name: 'delete_icon' }).click();
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.getByText('Centimeters').click();
  await page.getByText('Metres').click();
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.mouse.move(574, 269);
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath2 = './testData/areaProgram/inputData/m1.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath2);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_036_5.png');
  await page.locator('#canvas').click({
    position: {
      x: 574,
      y: 269
    }
  });
  await expect(objectProperties).toBeVisible();
  await expect(objectProperties).toHaveScreenshot('tc_api_036_6.png', { timeout: 25000 });
  await page.getByRole('img', { name: 'delete_icon' }).click();
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.getByText('Metres').click();
  await page.getByText('Inches', { exact: true }).click();
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.mouse.move(574, 269);
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath3 = './testData/areaProgram/inputData/sqin.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath3);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_036_7.png');
  await page.locator('#canvas').click({
    position: {
      x: 574,
      y: 269
    }
  });
  await expect(objectProperties).toBeVisible();
  await expect(objectProperties).toHaveScreenshot('tc_api_036_8.png', { timeout: 25000 });
  await page.getByRole('img', { name: 'delete_icon' }).click();
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.getByText('Inches', { exact: true }).click();
  await page.getByText('Feet-inches').click();
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.mouse.move(574, 269);
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath4 = './testData/areaProgram/inputData/feet.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath4);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_036_9.png');
  await page.locator('#canvas').click({
    position: {
      x: 574,
      y: 269
    }
  });
  await expect(objectProperties).toBeVisible();
  await expect(objectProperties).toHaveScreenshot('tc_api_036_10.png', { timeout: 25000 });
  await page.getByRole('img', { name: 'delete_icon' }).click();
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.getByText('Feet-inches').click();
  await page.getByText('Millimeters').click();
  await page.getByRole('img', { name: 'Settings' }).click();
});

/**
 * @id TC_API_037
 * @description Check the spaces are created as squares, with area close to and less (but not exactly the same) as the inputted area- (spaces with whole number dimensions as per the unit )
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 *
 * @expected Check the spaces are created as squares, with area close to and less (but not exactly the same) as the inputted area- (spaces with whole number dimensions as per the unit)
 */
test('TC_API_037', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/square_mass.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.mouse.move(497, 256);
  await expect(page).toHaveCanvasSnapshot('tc_api_037.png');
  const point1 = { x: 541, y: 294 };
  const point2 = { x: 734, y: 286 };
  const point3 = { x: 573, y: 476 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('tc_api_037_1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('tc_api_037_3.geom', geometryDir);
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('tc_api_037_3.geom', geometryDir);
  await page.mouse.move(720, 468);
  await selectAll(page);
  const count = await page.locator(locators.mass_count);
  await expect(count).toHaveText('3');
  await page.keyboard.press('Escape');
});

/**
 * @id TC_API_038
 * @description Check after import ,the spaces are organized by color code
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 *
 * @expected Afer import the Spaces are organized by color code
 */
test('TC_API_038', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/color_check.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_038.png');
  await selectAll(page);
  const count = await page.locator(locators.mass_count);
  await expect(count).toHaveText('10');
  await page.keyboard.press('Escape');
});

/**
 * @id TC_API_039
 * @description After import check the masses will upload in storey 1
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 *
 * @expected After import the masses should get upload in storey 1
 */
test('TC_API_039', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/storey_check.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  const storey1 = await page.locator("//p[text()='1']");
  await expect(storey1).toBeVisible();
  await expect(storey1).toHaveCSS('color', 'rgb(236, 28, 69)');
  await page.getByRole('img', { name: 'pointer' }).click();
  const point = { x: 595, y: 247 };
  const component = await getSnaptrudeDS(page, point);
  expect(component.storey).toBe(1);
  await expect(page).toHaveCanvasSnapshot('tc_api_039.png');
  await selectAll(page);
  const count = await page.locator(locators.mass_count);
  await expect(count).toHaveText('5');
  await page.keyboard.press('Escape');
});

/**
* @id TC_API_040
* @description After import check the spaces are organized by color code, and by size, with some amount of clear distance between all  the masses without over lapping in Storey1

*
* @steps
* 1.Create project
* 2.Click import
* 3.Click CSV
* 4.Select file from file explorer
* 5.Click import
*
* @expected After import , the spaces are organized by color code, and by size, with some amount of clear distance between all  the masses without over lapping in Storey1

*/
test('TC_API_040', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/space_check.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  const point = { x: 616, y: 123 };
  const component = await getSnaptrudeDS(page, point);
  expect(component.storey).toBe(1);
  const storey1 = await page.locator("//p[text()='1']").first();
  await expect(storey1).toBeVisible();
  await expect(storey1).toHaveCSS('color', 'rgb(236, 28, 69)');
  await expect(page).toHaveCanvasSnapshot('tc_api_040.png');
  await selectAll(page);
  const count = await page.locator(locators.mass_count);
  await expect(count).toHaveText('20');
  await page.keyboard.press('Escape');
});

/**
* @id TC_API_041
* @description Check All spaces with the same name act as copies of each other.

*
* @steps
* 1.Create project
* 2.Click import
* 3.Click CSV
* 4.Select file from file explorer
* 5.Click import
*
* @expected All spaces with the same name should act as copies of each other.

*/
test('TC_API_041', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/label_name1.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  let x: number[] = [565, 700, 571, 695, 533];
  let y: number[] = [178, 176, 328, 320, 458];
  for (let i = 0; i < x.length; i++) {
    await page.locator('#canvas').click({
      position: {
        x: x[i],
        y: y[i]
      }
    });
    const label_name = await page.locator(locators.label);
    await expect(label_name).toHaveValue('Block A');
  }
  await page.locator('#canvas').click({
    position: {
      x: 533,
      y: 458
    }
  });
  await expect(page).toHaveCanvasSnapshot('tc_api_041.png');
  await page.mouse.move(571, 328);
  await page.mouse.move(726, 508);
  await selectAll(page);
  const count = await page.locator(locators.mass_count);
  await expect(count).toHaveText('5');
  await page.keyboard.press('Escape');
});

/**
 * @id TC_API_042
 * @description If the user edit the spaces with same name check all the spaces with that name got editted
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 * 6.Click edit
 *
 * @expected If the user edit the spaces with same name check all the spaces with that name got editted
 */
test('TC_API_042', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/label_edit.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').dblclick({
    position: {
      x: 509,
      y: 296
    }
  });
  await page.waitForTimeout(300);
  await page.keyboard.type('Bedroom');
  await page.locator('#canvas').press('Enter');
  let x: number[] = [477, 705];
  let y: number[] = [400, 392];
  for (let i = 0; i < x.length; i++) {
    await page.locator('#canvas').click({
      position: {
        x: x[i],
        y: y[i]
      }
    });
    const label_name = await page.locator(locators.label);
    await expect(label_name).toHaveValue('Bedroom');
  }
  await page.locator('#canvas').click({
    position: {
      x: 705,
      y: 300
    }
  });
  await page.mouse.move(477, 400);
  await expect(page).toHaveCanvasSnapshot('tc_api_042_1.png');
  await page.mouse.move(705, 392);
  await expect(page).toHaveCanvasSnapshot('tc_api_042_2.png');
  await page.mouse.move(688, 564);
  await selectAll(page);
  const count = await page.locator(locators.mass_count);
  await expect(count).toHaveText('2');
  await page.keyboard.press('Escape');
});

/**
 * @id TC_API_043
 * @description After import, Check the colour matches the Hex  code given in the CSV
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 *
 * @expected After import the colour should  matches the Hex  code given in the CSV
 */
test('TC_API_043', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/hex_code.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await selectAll(page);
  const count = await page.locator(locators.mass_count);
  await expect(count).toHaveText('5');
  await page.keyboard.press('Escape');
  await expect(page).toHaveCanvasSnapshot('tc_api_043.png');
});

/**
 * @id TC_API_044
 * @description After import, Check the spaces are imported at the bottom right quadrant
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 *
 * @expected After import, the spaces should imported at the bottom right quadrant
 */
test('TC_API_044', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/quadrant_check.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_044.png');
  await selectAll(page);
  const count = await page.locator(locators.mass_count);
  await expect(count).toHaveText('10');
  await page.keyboard.press('Escape');
});

/**
* @id TC_API_045
* @description The masses are already drawn in canvas, if the Area Program is imported mid way through a project  check the Spaces are generated in an empty space on canvas, and the camera moves to the newly imported spaces both in 2D/3D views.

*
* @steps
* 1.Create project
* 2.Click import
* 3.Click CSV
* 4.Select file from file explorer
* 5.Click import
*
* @expected The masses are already drawn in canvas, if the Area Program is imported mid way through a project  the Spaces should generated in an empty space on canvas, and the camera moves to the newly imported spaces in both 2D/3D views.

*/
test('TC_API_045', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 191,
      y: 181
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 192,
      y: 337
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 316,
      y: 329
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 314,
      y: 257
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 238,
      y: 258
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 241,
      y: 185
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 190,
      y: 187
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 479,
      y: 178
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 476,
      y: 324
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 651,
      y: 320
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 648,
      y: 176
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 483,
      y: 178
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 565,
      y: 179
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 564,
      y: 135
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 721,
      y: 141
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 714,
      y: 271
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 646,
      y: 274
    }
  });
  await page.getByRole('img', { name: 'drawCircle' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 372,
      y: 424
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 406,
      y: 462
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 540,
      y: 397
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 533,
      y: 498
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 636,
      y: 496
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 626,
      y: 527
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 641,
      y: 394
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 545,
      y: 402
    }
  });
  await page.mouse.move(702, 487);
  await page.getByRole('img', { name: 'pointer' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_045.png');
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/quadrant_check.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_045_1.png');
  await selectAll(page);
  const count = await page.locator(locators.mass_count);
  await expect(count).toHaveText('15');
  await page.keyboard.press('Escape');
});
