import { expect, test } from '../../common/fixtures';
import { Page } from '@playwright/test';
import { initProject, configure2DProjectForTestV0 } from '../../common/project';
import { clearCanvas, selectAll } from '../../common/canvas';
import { createGeometryDir, getGeometry } from '../../common/geometry';

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
  mass_count: "//p[text()='Count']//..//div//p",
  chart_img: "((//*[@id='area-sidebar']//..//..)//div)[4]"
};

/**
 * @id TC_API_046
 * @description After import check the chart get displayed in the area tab with each color in chat corresponding to CSV import object colors
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 * 6.Click area tab
 *
 * @expected After import ,the chart get displayed in the area tab with each color in chat corresponding to CSV import object colors
 */
test('TC_API_046', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/color_chart.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.getByRole('img', { name: 'Areas' }).click();
  await page.getByRole('button', { name: 'Change chart type' }).click();
  const color_chart = await page.getByText('BY COLOR');
  await expect(color_chart).toBeVisible();
  await page.getByText('BY COLOR').click();
  await page.getByRole('button', { name: 'Add to Dashboard' }).click();
  await page.waitForSelector("((//*[@id='area-sidebar']//..//..)//div)[4]", {
    state: 'attached',
    timeout: 10000
  });
  const chart = await page.locator(locators.chart_img);
  await expect(chart).toHaveScreenshot('tc_api_046_1.png', { maxDiffPixels: 960, timeout: 15000 });
  await page.getByRole('img', { name: 'Areas' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_046_2.png', { maxDiffPixels: 960 });
});

/**
 * @id TC_API_047
 * @description Check the chart get divides spaces by colour
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 * 6.Click area tab
 *
 * @expected Check the chart get divides spaces by colour
 */
test('TC_API_047', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/color_chart - 2.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.getByRole('img', { name: 'Areas' }).click();
  await page.locator("//button[text()='Change chart type']").click({ force: true });
  const color_chart = await page.getByText('BY COLOR');
  await expect(color_chart).toBeVisible();
  await color_chart.click();
  await page.waitForSelector("((//*[@id='area-sidebar']//..//..)//div)[4]", {
    state: 'attached',
    timeout: 10000
  });
  const chart = await page.locator(locators.chart_img);
  const chartbar_1 = await page.locator(
    "(//*[local-name()='svg'])[2]//../*[local-name()='path'][1]"
  );
  await expect(chartbar_1).toHaveScreenshot('tc_api_047_1.png', {
    maxDiffPixels: 960,
    timeout: 15000
  });
  const chartbar_2 = await page.locator(
    "(//*[local-name()='svg'])[2]//../*[local-name()='path'][2]"
  );
  await expect(chartbar_2).toHaveScreenshot('tc_api_047_2.png', {
    maxDiffPixels: 960,
    timeout: 15000
  });
  const chartbar_3 = await page.locator(
    "(//*[local-name()='svg'])[2]//../*[local-name()='path'][3]"
  );
  await expect(chartbar_3).toHaveScreenshot('tc_api_047_3.png', {
    maxDiffPixels: 960,
    timeout: 15000
  });
  const chartbar_4 = await page.locator(
    "(//*[local-name()='svg'])[2]//../*[local-name()='path'][4]"
  );
  await expect(chartbar_4).toHaveScreenshot('tc_api_047_4.png', {
    maxDiffPixels: 960,
    timeout: 15000
  });
  await expect(chart).toHaveScreenshot('tc_api_047_5.png', {
    maxDiffPixels: 960,
    timeout: 15000
  });
  await page.getByRole('img', { name: 'Areas' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_047_6.png', {
    maxDiffPixels: 960
  });
});

/**
 * @id TC_API_049
 * @description If the units selected in the csv is metric and the project to which it is being uploaded in is in imperial, check the user will get a pop of "updating the project units on areas project units"
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 *
 * @expected If the units selected in the csv is metric and the project to which it is being uploaded in is in imperial,  the user get a pop of "updating the project units on areas project units"
 */
test('TC_API_049', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/Imperial.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).first().click();
  await expect(page.locator("//*[text()='Alert']")).toBeVisible();
  await expect(page.locator("((//*[text()='Alert']//..//..)//..//div)[6]")).toContainText(
    ' have been converted to sq.m.'
  );
  const import_alert = await page.locator("(//*[text()='Alert']//..//..)[1]");
  await expect(import_alert).toHaveScreenshot('tc_api_049_1.png', {
    maxDiffPixels: 960,
    timeout: 15000
  });
  await page.getByRole('button', { name: 'I understand' }).click();
});

/**
* @id TC_API_050
* @description If the units selected in the csv is metric and the project to which it is being uploaded in is in imperial,check it Allow user where masses get created as per CSV areas.

*
* @steps
* 1.Create project
* 2.Click import
* 3.Click CSV
* 4.Select file from file explorer
* 5.Click import
*
* @expected If the units selected in the csv is metric and the project to which it is being uploaded in is in imperial, it Allow user where masses get created as per CSV areas.

*/
/* Bug: ST-4251 - The alert message should contains sqft but it shows sqm and need to add verification*/
test.skip('TC_API_050', async () => {
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.getByText('Millimeters').click();
  await page.getByText('Feet-inches').click();
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/meter.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'I understand' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 574,
      y: 203
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 745,
      y: 207
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 532,
      y: 343
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 739,
      y: 317
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 517,
      y: 483
    }
  });
});

/**
* @id TC_API_051
* @description If the units selected in the csv is metric and the project to which it is being uploaded in is in imperial,. Allow users to proceed anyway where masses get created as per CSV areas. check the Users can manually change the project units later.

*
* @steps
* 1.Create project
* 2.Click import
* 3.Click CSV
* 4.Select file from file explorer
* 5.Click import
* 6.Click setting
* 7.Change the unit
*
* @expected If the units selected in the csv is metric and the project to which it is being uploaded in is in imperial,. Allow users to proceed anyway where masses get created as per CSV areas. the users should manually change the project units later.

*/
test('TC_API_051', async () => {
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.getByText('Millimeters').click();
  await page.getByText('Feet-inches').click();
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/meter.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await expect(page.locator("//*[text()='Alert']")).toBeVisible();
  await page.getByRole('button', { name: 'I understand' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 549,
      y: 257
    }
  });
  const objprop = await page.locator(locators.objectProp);
  await expect(objprop).toHaveScreenshot('tc_api_051_1.png', {
    maxDiffPixels: 960,
    timeout: 15000
  });
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.getByText('Feet-inches').click();
  await page.getByText('Metres').click();
  await page.getByRole('img', { name: 'Settings' }).click();
  const objprop1 = await page.locator(locators.objectProp);
  await expect(objprop1).toHaveScreenshot('tc_api_051_2.png', {
    maxDiffPixels: 960,
    timeout: 15000
  });
  await page.keyboard.press('Escape');
  await page.mouse.move(549, 257);
  await expect(page).toHaveCanvasSnapshot('tc_api_051_3.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.getByText('Metres').click();
  await page.getByText('Millimeters').click();
});

/**
 * @id TC_API_052
 * @description Check after import lables are showing for every space
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 *
 * @expected Check after import lables are showing for every space
 */
test('TC_API_052', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/label_name.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  let x: number[] = [607, 679];
  let y: number[] = [164, 163];
  for (let i = 0; i < x.length; i++) {
    await page.locator('#canvas').click({
      position: {
        x: x[i],
        y: y[i]
      }
    });
    const label_name = await page.locator(locators.label);
    await expect(label_name).toHaveValue('Kitchen');
  }
  let x1: number[] = [609, 682, 595];
  let y1: number[] = [288, 283, 333];
  for (let i = 0; i < x1.length; i++) {
    await page.locator('#canvas').click({
      position: {
        x: x1[i],
        y: y1[i]
      }
    });
    const label_name = await page.locator(locators.label);
    await expect(label_name).toHaveValue('Bedroom');
  }
  let x2: number[] = [573, 665, 608, 678];
  let y2: number[] = [504, 516, 564, 566];

  for (let i = 0; i < x2.length; i++) {
    await page.locator('#canvas').click({
      position: {
        x: x2[i],
        y: y2[i]
      }
    });
    const label_name = await page.locator(locators.label);
    await expect(label_name).toHaveValue('Dining');
  }
  await page.locator('#canvas').click({
    position: {
      x: 678,
      y: 566
    }
  });
  await page.locator('#canvas').press('Control+a');
  await page.waitForSelector("//p[text()='Count']//..//div//p", {
    state: 'attached',
    timeout: 60000
  });
  const count = await page.locator(locators.mass_count);
  await expect(count).toHaveText('9');
  await page.keyboard.press('Escape');
  await expect(page).toHaveCanvasSnapshot('tc_api_052.png', {
    maxDiffPixels: 960
  });
});
/**
 * @id TC_API_053
 * @description  if there are multiple spaces with the same label, but different area  check it will created as two separate masses with their own properties
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 *
 * @expected  if there are multiple spaces with the same label, but different area, it will created as two separate masses with their own properties
 */
test('TC_API_053', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/different_area.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 608,
      y: 221
    }
  });
  const objprop = await page.locator(locators.objectProp);
  await expect(objprop).toHaveScreenshot('tc_api_053_1.png', {
    maxDiffPixels: 960,
    timeout: 15000
  });
  const label_name1 = await page.locator(locators.label);
  await expect(label_name1).toHaveValue('Kitchen');
  await page.locator('#canvas').click({
    position: {
      x: 638,
      y: 444
    }
  });
  await expect(objprop).toHaveScreenshot('tc_api_053_2.png', {
    maxDiffPixels: 960,
    timeout: 15000
  });
  const label_name2 = await page.locator(locators.label);
  await expect(label_name2).toHaveValue('Kitchen');
  await page.locator('#canvas').press('Escape');
});
/**
 * @id TC_API_054
 * @description  if there are multiple spaces with the same label, but different area will created as two separate masses with their own properties ,check if the user edit the particular space only got edited
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 * 6.Click edit tool
 *
 * @expected  if there are multiple spaces with the same label, but different area will created as two separate masses with their own properties ,  the user edit the particular space only got edited
 */
test('TC_API_054', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/different_area.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_054_1.png', {
    maxDiffPixels: 960
  });
  const point1 = { x: 672, y: 459 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('tc_api_054_1.geom', geometryDir);
  await page.getByRole('img', { name: 'edit' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 679,
      y: 198
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 743,
      y: 191
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 643,
      y: 125
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 639,
      y: 170
    }
  });
  const actualGeometry2 = await getGeometry(page, point1);
  await expect(actualGeometry2).toHaveGeometryV0('tc_api_054_2.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('tc_api_054_2.png', {
    maxDiffPixels: 960
  });
});

/**
* @id TC_API_055
* @description  if there are multiple spaces with the same label, but different area will created as two separate masses with their own properties ,check if the user make the following changes will reflects only on that particular space
1.Move
2.Edit
3.Copy/array
4.Rotate
5.Flip
6.Edit length
*
* @steps
* 1.Create project
* 2.Click import
* 3.Click CSV
* 4.Select file from file explorer
* 5.Click import
*
*
* @expected  if there are multiple spaces with the same label, but different area will created as two separate masses with their own properties , the user make the changes will reflects only on that particular space

*/
test('TC_API_055', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/area1.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_055_1.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'move', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 584,
      y: 170
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 730,
      y: 167
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  const point1 = { x: 717, y: 179 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('tc_api_055_1.geom', geometryDir);
  await page.getByRole('img', { name: 'rotate' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 759,
      y: 193
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 606,
      y: 198
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 762,
      y: 300
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  const point2 = { x: 725, y: 204 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('tc_api_055_2.geom', geometryDir);
  await page.getByRole('img', { name: 'edit' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 838,
      y: 182
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 814,
      y: 182
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 767,
      y: 264
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 766,
      y: 214
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  const point3 = { x: 722, y: 189 };
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('tc_api_055_3.geom', geometryDir);
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 736,
      y: 150
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 555,
      y: 160
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  const point4 = { x: 561, y: 195 };
  const actualGeometry4 = await getGeometry(page, point4);
  await expect(actualGeometry4).toHaveGeometryV0('tc_api_055_4.geom', geometryDir);
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 780,
      y: 189
    }
  });
  await page.getByRole('img', { name: 'flipX', exact: true }).click();
  await page.getByRole('img', { name: 'flipXY' }).click();
  await page.getByRole('img', { name: 'verticalResize' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 811,
      y: 160
    }
  });
  await page.keyboard.type('3400');
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 727,
      y: 186
    }
  });
  const point5 = { x: 561, y: 195 };
  const actualGeometry5 = await getGeometry(page, point5);
  await expect(actualGeometry5).toHaveGeometryV0('tc_api_055_5.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('tc_api_055_2.png', {
    maxDiffPixels: 960
  });
});

/**
 * @id TC_API_058
 * @description check the spaces are taking the lable names accurately
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 *
 *
 * @expected The spaces should take the lable names accurately
 */
test('TC_API_058', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/label_name_1.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  let x: number[] = [477, 575, 506];
  let y: number[] = [227, 230, 307];
  for (let i = 0; i < x.length; i++) {
    await page.locator('#canvas').click({
      position: {
        x: x[i],
        y: y[i]
      }
    });
    const label_name = await page.locator(locators.label);
    await expect(label_name).toHaveValue('Kitchen');
  }
  let x1: number[] = [719, 785, 713];
  let y1: number[] = [233, 230, 314];
  for (let i = 0; i < x.length; i++) {
    await page.locator('#canvas').click({
      position: {
        x: x1[i],
        y: y1[i]
      }
    });
    const label_name = await page.locator(locators.label);
    await expect(label_name).toHaveValue('Bedroom');
  }
  let x2: number[] = [503, 585, 514];
  let y2: number[] = [454, 457, 536];
  for (let i = 0; i < x.length; i++) {
    await page.locator('#canvas').click({
      position: {
        x: x2[i],
        y: y2[i]
      }
    });
    const label_name = await page.locator(locators.label);
    await expect(label_name).toHaveValue('Dining');
  }
  await page.locator('#canvas').click({
    position: {
      x: 514,
      y: 536
    }
  });
  await page.locator('#canvas').press('Control+a');
  await page.waitForSelector("//p[text()='Count']//..//div//p", {
    state: 'attached',
    timeout: 60000
  });
  const count = await page.locator(locators.mass_count);
  await expect(count).toHaveText('9');
  await page.keyboard.press('Escape');
  await page.mouse.move(762, 440);
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_058.png', {
    maxDiffPixels: 960
  });
});

/**
 * @id TC_API_059
 * @description check the spaces are taking the area values accurately,
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 *
 *
 * @expected The spaces are taking the area values accurately,
 */
test('TC_API_059', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/label_name_1.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  let x: number[] = [477, 575, 506, 719, 785, 713, 503, 585, 514];
  let y: number[] = [227, 230, 307, 233, 230, 314, 454, 457, 536];
  for (let i = 0; i < x.length; i++) {
    await page.locator('#canvas').click({
      position: {
        x: x[i],
        y: y[i]
      }
    });
    const footPrintarea = await page.locator("(//*[text()='Footprint Area']//..//p)[2]");
    await expect(footPrintarea).toHaveText('10');
  }
  await page.locator('#canvas').press('Control+a');
  const count = await page.locator(locators.mass_count);
  await expect(count).toHaveText('9');
  await page.keyboard.press('Escape');
  await page.mouse.move(762, 440);
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_059.png', {
    maxDiffPixels: 960
  });
});

/**
 * @id TC_API_060
 * @description if the user approximating the areas, check how much deviation there is between actual area and the space created on canvas.
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 *
 *
 * @expected if the user approximating the areas, check how much deviation there is between actual area and the space created on canvas.
 */
test('TC_API_060', async () => {
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.getByText('Millimeters').click();
  await page.getByText('Metres').click();
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/approx_area.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 621,
      y: 184
    }
  });
  const footPrintarea1 = await page.locator("(//*[text()='Footprint Area']//..//p)[2]");
  await expect(footPrintarea1).toHaveText('97.54');
  await page.locator('#canvas').click({
    position: {
      x: 633,
      y: 434
    }
  });
  const footPrintarea2 = await page.locator("(//*[text()='Footprint Area']//..//p)[2]");
  await expect(footPrintarea2).toHaveText('99.19');
  await page.locator('#canvas').click({
    position: {
      x: 633,
      y: 434
    }
  });
  await page.mouse.move(845, 459);
  await page.locator('#canvas').click({
    position: {
      x: 845,
      y: 459
    }
  });
  await expect(page).toHaveCanvasSnapshot('tc_api_060.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.getByText('Metres').click();
  await page.getByText('Millimeters').click();
  await page.getByRole('img', { name: 'Settings' }).click();
});

/**
 * @id TC_API_056
 * @description  if the user upload  a very large CSV ,check the file is getting delay to upload(not more than 10-15 sec) to upload
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 *
 *
 * @expected  if the user upload  a very large CSV , the file is getting  upload not more than 10-15 sec to upload
 */
/*  Bug Id: ST-4249,ST-4250 -The file is not getting upload within 15 secs and "Model is being uploaded please wait" is not showing*/
test.skip('TC_API_056', async () => {
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.getByText('Millimeters').click();
  await page.getByText('Metres').click();
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/AP 3 - Sheet1.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click({ force: true });
  await page
    .locator("//*[text()='Import Successful']")
    .waitFor({ state: 'visible', timeout: 15000 });
  await page.getByRole('button', { name: 'Done' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_056.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.getByText('Metres').click();
  await page.getByText('Millimeters').click();
  await page.getByRole('img', { name: 'Settings' }).click();
});
