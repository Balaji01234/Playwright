import { expect, test } from '../../common/fixtures';
import { Page } from '@playwright/test';
import { initProject, configure2DProjectForTestV0 } from '../../common/project';
import { clearCanvas } from '../../common/canvas';
import { createGeometryDir, getGeometry, getSnaptrudeDS } from '../../common/geometry';
import path, { resolve } from 'node:path';
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
 * @id TC_API_022
 * @description Check if files are imported correctly without any data loss
 *
 * @steps
 * 1.Launch the URL
 * 2..Login to the application
 * 3.Create project
 * 4.Click import
 * 5.Click CSV
 * 6.Select file from file explorer
 * 7.Click import
 *
 * @expected  files are imported correctly without any data loss
 */
/*Default storey height is incorrect while running in pipeline*/
test('TC_API_022', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  await page.waitForSelector("//*[text()='CSV Import']", {
    state: 'attached',
    timeout: 60000
  });
  const filePath = './testData/areaProgram/inputData/TemplateCheck.csv';
  await page.locator('#importInput').setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_022_1.png', { maxDiffPixels: 960 });
  const point = { x: 685, y: 241 };
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 685,
      y: 241
    }
  });
  const objectProperties = await page.locator("(//*[@id='object_properties_panel']//section)[1]");
  await expect(objectProperties).toHaveScreenshot('tc_api_022_2.png', {
    maxDiffPixels: 960,
    timeout: 25000
  });
  const labelname = await page.locator("//*[text()='Label']//..//input");
  const footprintarea = await page.locator("(//*[text()='Footprint Area']//..//p)[2]");
  await expect(labelname).toHaveValue('Bedroom');
  await expect(footprintarea).toHaveText('10');
  await page.locator('#canvas').click({
    position: {
      x: 685,
      y: 241
    }
  });
  const componet = await getSnaptrudeDS(page, point);
  await expect(componet.type).toBe('Mass');
  await expect(componet.storey).toBe(1);
  await page.mouse.move(369, 182);
});

/**
* @id TC_API_024
* @description If unit of measurement is not filled ,check  the import will automatically take the units of the snaptrude file from project settings.
*
* @steps
* 1.Create project
* 2.Click import
* 3.Click CSV
* 4.Select file from file explorer
* 5.Click import
*
* @expected If unit of measurement is not filled ,the import will automatically take the units of the snaptrude file from project settings.

*/
test('TC_API_024', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  await page.waitForSelector("//*[text()='CSV Import']", {
    state: 'attached',
    timeout: 60000
  });
  const filePath = './testData/areaProgram/inputData/Measurement.csv';
  await page.locator('#importInput').setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'Settings' }).click();
  const units = await page.locator("(//*[text()='Units']//..//..)[1]");
  await units.hover();
  await expect(units).toHaveScreenshot('tc_api_024_1.png', { maxDiffPixels: 960 });
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_024_2.png', { maxDiffPixels: 960 });
  await page.locator('#canvas').click({
    position: {
      x: 598,
      y: 247
    }
  });
  const unitOfLength = await page.locator("(//*[@id='object_properties_panel']//section)[1]");
  await expect(unitOfLength).toHaveScreenshot('tc_api_024_3.png', {
    maxDiffPixels: 960,
    timeout: 15000
  });
  await page.locator('#canvas').click({
    position: {
      x: 598,
      y: 247
    }
  });
  await page.mouse.move(369, 182);
});

/**
* @id TC_API_025
* @description If ‘count’ field is empty,check the  import will occur with default count set to 1.

*
* @steps
* 1.Create project
* 2.Click import
* 3.Click CSV
* 4.Select file from file explorer
* 5.Click import
*
* @expected If ‘count’ field is empty, the  import will occur with default count set to 1.

*/
test('TC_API_025', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  await page.waitForSelector("//*[text()='CSV Import']", {
    state: 'attached',
    timeout: 60000
  });
  const filePath = './testData/areaProgram/inputData/Mass_count.csv';
  await page.locator('#importInput').setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_025.png', { maxDiffPixels: 960 });
  await page.getByRole('img', { name: 'pointer' }).click();
  const point = { x: 624, y: 259 };
  const componet = await getSnaptrudeDS(page, point);
  await expect(componet.type).toBe('Mass');
  await expect(componet.storey).toBe(1);
  await page.mouse.move(369, 182);
});

/**
* @id TC_API_026
* @description If color field is missing ,check the  Mass will be imported with default grey material.

*
* @steps
* 1.Create project
* 2.Click import
* 3.Click CSV
* 4.Select file from file explorer
* 5.Click import
*
* @expected If color field is missing , the  Mass will be imported with default grey material.

*/
test('TC_API_026', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  await page.waitForSelector("//*[text()='CSV Import']", {
    state: 'attached',
    timeout: 60000
  });
  const filePath = './testData/areaProgram/inputData/color.csv';
  await page.locator('#importInput').setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_026.png', { maxDiffPixels: 960 });
  await clearCanvas(page);
  await page.mouse.move(369, 182);
});

/**
* @id TC_API_027
* @description If area per unit is missing check the Mass will not get imported

*
* @steps
* 1.Create project
* 2.Click import
* 3.Click CSV
* 4.Select file from file explorer
* 5.Click import
*
* @expected If area per unit is missing, the Mass will not get imported

*/
test('TC_API_027', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  await page.waitForSelector("//*[text()='CSV Import']", {
    state: 'attached',
    timeout: 60000
  });
  const filePath = './testData/areaProgram/inputData/area_per_unit_missing.csv';
  await page.locator('#importInput').setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  const successImport = await page.locator("(//*[text()='Import Successful']//..//..)[1]");
  await page.mouse.move(0, 0);
  await expect(successImport).toHaveScreenshot('tc_api_027_1.png', {
    maxDiffPixels: 960,
    timeout: 8000
  });
  await page.getByRole('button', { name: 'Done' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_027_2.png');
});

/**
* @id TC_API_028
* @description if the unit of project is in mm and If unit of measurement is not filled in csv ,check  the import will automatically take the units of the snaptrude file as m2 from project settings.

*
* @steps
* 1.Create project
* 2.Click import
* 3.Click CSV
* 4.Select file from file explorer
* 5.Click import
*
* @expected if the unit of project is in mm and If unit of measurement is not filled in csv ,  the import will automatically take the units of the snaptrude file as m2 from project settings.

*/
test('TC_API_028', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  await page.waitForSelector("//*[text()='CSV Import']", {
    state: 'attached',
    timeout: 60000
  });
  const filePath = './testData/areaProgram/inputData/mm.csv';
  await page.locator('#importInput').setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'Settings' }).click();
  const units = await page.locator("(//*[text()='Units']//..//..)[1]");
  await units.hover();
  await expect(units).toHaveScreenshot('tc_api_028_1.png', { maxDiffPixels: 960, timeout: 8000 });
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 589,
      y: 262
    }
  });
  const unitOfLength = await page.locator("(//*[@id='object_properties_panel']//section)[1]");
  await expect(unitOfLength).toHaveScreenshot('tc_api_028_2.png', {
    maxDiffPixels: 960,
    timeout: 25000
  });
  await page.locator('#canvas').click({
    position: {
      x: 589,
      y: 262
    }
  });
  await expect(page).toHaveCanvasSnapshot('tc_api_028_3.png', { maxDiffPixels: 960 });
});

/**
* @id TC_API_029
* @description if the unit of project is in cm and If unit of measurement is not filled in csv ,check  the import will automatically take the units of the snaptrude file as m2  from project settings.

*
* @steps
* 1.Create project
* 2.Click import
* 3.Click CSV
* 4.Select file from file explorer
* 5.Click import
*
* @expected if the unit of project is in cm and If unit of measurement is not filled in csv ,  the import will automatically take the units of the snaptrude file as m2 from project settings.

*/
test('TC_API_029', async () => {
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.getByText('Millimeters').click();
  await page.getByText('Centimeters').click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  await page.waitForSelector("//*[text()='CSV Import']", {
    state: 'attached',
    timeout: 60000
  });
  const filePath = './testData/areaProgram/inputData/mm.csv';
  await page.locator('#importInput').setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'Settings' }).click();
  const units = await page.locator("(//*[text()='Units']//..//..)[1]");
  await units.hover();
  await expect(units).toHaveScreenshot('tc_api_029_1.png', { maxDiffPixels: 960 });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 713,
      y: 284
    }
  });
  const unitOfLength = await page.locator("(//*[@id='object_properties_panel']//section)[1]");
  await expect(unitOfLength).toHaveScreenshot('tc_api_029_2.png', {
    maxDiffPixels: 960,
    timeout: 25000
  });
  await page.locator('#canvas').click({
    position: {
      x: 713,
      y: 284
    }
  });
  await expect(page).toHaveCanvasSnapshot('tc_api_029_3.png', { maxDiffPixels: 960 });
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.getByText('Centimeters').click();
  await page.getByText('Millimeters').click();
});

/**
* @id TC_API_030
* @description if the unit of project is in m and If unit of measurement is not filled in csv ,check  the import will automatically take the units of the snaptrude file as m2 from project settings.

*
* @steps
* 1.Create project
* 2.Click import
* 3.Click CSV
* 4.Select file from file explorer
* 5.Click import
*
* @expected if the unit of project is in m and If unit of measurement is not filled in csv , the import will automatically take the units of the snaptrude file as m2 from project settings.

*/
test('TC_API_030', async () => {
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.getByText('Millimeters').click();
  await page.getByText('Metres').click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  await page.waitForSelector("//*[text()='CSV Import']", {
    state: 'attached',
    timeout: 60000
  });
  const filePath = './testData/areaProgram/inputData/m.csv';
  await page.locator('#importInput').setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'Settings' }).click();
  const units = await page.locator("(//*[text()='Units']//..//..)[1]");
  await units.hover();
  await expect(units).toHaveScreenshot('tc_api_030_1.png', { maxDiffPixels: 960 });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 713,
      y: 284
    }
  });
  const unitOfLength = await page.locator("(//*[@id='object_properties_panel']//section)[1]");
  await expect(unitOfLength).toHaveScreenshot('tc_api_030_2.png', {
    maxDiffPixels: 960,
    timeout: 25000
  });
  await page.locator('#canvas').click({
    position: {
      x: 713,
      y: 284
    }
  });
  await expect(page).toHaveCanvasSnapshot('tc_api_030_3.png', { maxDiffPixels: 960 });
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.getByText('Metres').click();
  await page.getByText('Millimeters').click();
  await page.locator('#project-settings-button').click();
});

/**
* @id TC_API_031
* @description if the unit of project is in ft and If unit of measurement is not filled in csv ,check  the import will automatically take the units of the snaptrude file as ft2 from project settings.

*
* @steps
* 1.Create project
* 2.Click import
* 3.Click CSV
* 4.Select file from file explorer
* 5.Click import
*
* @expected if the unit of project is in m and If unit of measurement is not filled in csv , the import will automatically take the units of the snaptrude file as m2  from project settings.

*/
test('TC_API_031', async () => {
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.getByText('Millimeters').click();
  await page.getByText('Feet-inches').click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  await page.waitForSelector("//*[text()='CSV Import']", {
    state: 'attached',
    timeout: 60000
  });
  const filePath = './testData/areaProgram/inputData/ft.csv';
  await page.locator('#importInput').setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'Settings' }).click();
  const units = await page.locator("(//*[text()='Units']//..//..)[1]");
  await units.hover();
  await expect(units).toHaveScreenshot('tc_api_031_1.png', { maxDiffPixels: 960 });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 713,
      y: 284
    }
  });
  const unitOfLength = await page.locator("(//*[@id='object_properties_panel']//section)[1]");
  await expect(unitOfLength).toHaveScreenshot('tc_api_031_2.png', {
    maxDiffPixels: 960,
    timeout: 15000
  });
  await page.locator('#canvas').click({
    position: {
      x: 713,
      y: 284
    }
  });
  await expect(page).toHaveCanvasSnapshot('tc_api_031_3.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.getByText('Feet-inches').click();
  await page.getByText('Millimeters').click();
  await page.getByRole('img', { name: 'Settings' }).click();
});

/**
 * @id TC_API_032
 * @description if the unit of project is in inches and If unit of measurement is not filled in csv ,check  the import will automatically take the units of the snaptrude file as sqft from project settings.
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 *
 * @expected if the unit of project is in inches and If unit of measurement is not filled in csv ,check  the import will automatically take the units of the snaptrude file as sqft from project settings.
 */
test('TC_API_032', async () => {
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.getByText('Millimeters').click();
  await page.getByText('Inches').first().click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  await page.waitForSelector("//*[text()='CSV Import']", {
    state: 'attached',
    timeout: 60000
  });
  const filePath = './testData/areaProgram/inputData/in.csv';
  await page.locator('#importInput').setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'Settings' }).click();
  const units = await page.locator("(//*[text()='Units']//..//..)[1]");
  await units.hover();
  await expect(units).toHaveScreenshot('tc_api_032_1.png', { maxDiffPixels: 960, timeout: 15000 });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 713,
      y: 284
    }
  });
  const unitOfLength = await page.locator("(//*[@id='object_properties_panel']//section)[1]");
  await expect(unitOfLength).toHaveScreenshot('tc_api_032_2.png', {
    maxDiffPixels: 960,
    timeout: 15000
  });
  await page.locator('#canvas').click({
    position: {
      x: 713,
      y: 284
    }
  });
  await expect(page).toHaveCanvasSnapshot('tc_api_032_3.png', { maxDiffPixels: 960 });
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.getByText('Inches').click();
  await page.getByText('Millimeters').click();
  await page.getByRole('img', { name: 'Settings' }).click();
});

/**
* @id TC_API_033
* @description if the unit of project is in ft and If unit of measurement is not filled in csv ,check  the import will automatically take the units of the snaptrude file as ft2 from project settings.

*
* @steps
* 1.Create project
* 2.Click import
* 3.Click CSV
* 4.Select file from file explorer
* 5.Click import
*
* @expected if the unit of project is in ft and If unit of measurement is not filled in csv ,check  the import will automatically take the units of the snaptrude file as sqft from project settings.

*/
test('TC_API_033', async () => {
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.getByText('Millimeters').click();
  await page.getByText('Feet-Inches').first().click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  await page.waitForSelector("//*[text()='CSV Import']", {
    state: 'attached',
    timeout: 60000
  });
  const filePath = './testData/areaProgram/inputData/ft.csv';
  await page.locator('#importInput').setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_033_1.png');
  await page.getByRole('img', { name: 'Settings' }).click();
  const units = await page.locator("(//*[text()='Units']//..//..)[1]");
  await units.hover();
  await expect(units).toHaveScreenshot('tc_api_033_2.png', { maxDiffPixels: 960, timeout: 15000 });
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 647,
      y: 414
    }
  });
  const unitOfLength = await page.locator("(//*[@id='object_properties_panel']//section)[1]");
  await expect(unitOfLength).toHaveScreenshot('tc_api_033_3.png', {
    maxDiffPixels: 960,
    timeout: 15000
  });
  await page.locator('#canvas').click({
    position: {
      x: 647,
      y: 414
    }
  });
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.getByText('Feet-Inches').first().click();
  await page.getByText('Millimeters').click();
  await page.getByRole('img', { name: 'Settings' }).click();
});

/**
 * @id TC_API_034
 * @description Check if Space column is not filled in the mass still gets uploaded with label as 'default'
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 *
 * @expected if Space column is not filled in the mass should gets uploaded with label as 'default'
 */
test('TC_API_034', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  await page.waitForSelector("//*[text()='CSV Import']", {
    state: 'attached',
    timeout: 60000
  });
  const filePath = './testData/areaProgram/inputData/space_column.csv';
  await page.locator('#importInput').setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 615,
      y: 244
    }
  });
  const label = await page.locator("(//*[text()='Label'])//..//input");
  await expect(label).toHaveValue('default');
  const label1 = await page.locator("(//*[@id='object_properties_panel']//section)[1]");
  await expect(label1).toHaveScreenshot('tc_api_034_1.png', { maxDiffPixels: 960, timeout: 15000 });
  await page.locator('#canvas').click({
    position: {
      x: 615,
      y: 244
    }
  });
  await expect(page).toHaveCanvasSnapshot('tc_api_034_2.png', { maxDiffPixels: 960 });
});
