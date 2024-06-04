import { expect, test } from '../../common/fixtures';
import { Page } from '@playwright/test';
import { initProject, configure2DProjectForTestV0 } from '../../common/project';
import { clearCanvas } from '../../common/canvas';
import { createGeometryDir } from '../../common/geometry';

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
 * @id TC_API_001
 * @description Check user able to see the CSV import in the import page
 *
 * @steps
 * 1.Launch the URL
 * 2..Login to the application
 * 3.Create project
 * 4.Click import
 *
 * @expected User should able to see the CSV import in the import page
 */
test('TC_API_001', async () => {
  await page.getByText('Import').click();
  const csvlocator = await page.getByText('CSVView Upload Tips.csv');
  await expect(csvlocator).toBeVisible();
  await expect(csvlocator).toHaveScreenshot('tc_api_001.png', {
    maxDiffPixels: 960,
    timeout: 15000
  });
  await page.locator("(//*[text()='Import'])[2]//..//img").click();
});

/**
 * @id TC_API_002
 * @description Check the user able to click the CSV import in the import page
 *
 * @steps
 * 1.Launch the URL
 * 2..Login to the application
 * 3.Create project
 * 4.Click import
 * 5.Click CSV
 *
 * @expected User should able to click the CSV import in the import page
 */
test('TC_API_002', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const csvImport = await page.locator("//*[@id='drop-target']");
  await expect(csvImport).toBeVisible();
  await expect(csvImport).toHaveScreenshot('tc_api_002.png', {
    maxDiffPixels: 960,
    timeout: 15000
  });
  await page.locator("//*[text()='CSV Import']//..//img").click();
});

/**
 * @id TC_API_004
 * @description Check user able to import the CSV file by browse files
 *
 * @steps
 * 1.Launch the URL
 * 2..Login to the application
 * 3.Create project
 * 4.Click import
 * 5.Click CSV
 * 6.Click browse file
 *
 * @expected User should able to import the CSV file by browse files
 */
test('TC_API_004', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  await page.waitForSelector("//*[text()='CSV Import']", { state: 'attached', timeout: 60000 });
  const filePath = './testData/areaProgram/inputData/AreaProgramTemplate.csv';
  await page.locator('#importInput').setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'I understand' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 627,
      y: 224
    }
  });
  const labelname = await page.locator("//*[text()='Label']//..//input");
  const footprintarea = await page.locator("//p[text()='Footprint Area']//..//div//p");
  await page.waitForTimeout(1000);
  await expect(labelname).toHaveValue('Bedroom');
  await expect(footprintarea).toContainText('100');
  await expect(page).toHaveCanvasSnapshot('tc_api_004.png', { maxDiffPixels: 960 });
});

/**
* @id TC_API_007
* @description Check the below fields are present in the CSV upload page
* 
1.Steps to follow while importing a CSV file: [text]
2.Step1:[Text]
3.Download theTemplate.csv file.[link]
4.Step2:[Text]
5. Add your data to the import.csv file and make sure younfollow the prescribed template.[Text]
6.Step3[Text]
7.Drag and drop the final CSV file here.[Text]
8.Back [Button]
9.Browse CSV file[Button]
*
* @steps
* 1.Launch the URL
* 2..Login to the application
* 3.Create project
* 4.Click import
* 5.Click CSV
*
* @expected all fields should  present in the CSV upload page
*/
test('TC_API_007', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  await page.waitForSelector("//*[text()='CSV Import']", { state: 'attached', timeout: 60000 });
  const csv_import = await page.locator("//*[@id='drop-target']");
  const stepstofollow = await page.locator("//*[contains(text(),'Steps to follow while')]");
  const downloadTemplate = await page.locator("//*[text()='Template.csv']");
  const step2text = await page.locator("//*[contains(text(),'Add your data to the Import.csv')]");
  const step3text = await page.locator("//*[contains(text(),'Drag and drop the final CSV')]");
  const backbutton = await page.locator("//*[text()='Back']");
  const browsebutton = await page.locator("//button//*[text()='Browse CSV File']");
  await expect(stepstofollow).toBeVisible();
  await expect(downloadTemplate).toBeVisible();
  await expect(step2text).toBeVisible();
  await expect(step3text).toBeVisible();
  await expect(backbutton).toBeTruthy();
  await expect(browsebutton).toBeTruthy();
  await expect(csv_import).toHaveScreenshot('tc_api_007_1.png', {
    maxDiffPixels: 960,
    timeout: 15000
  });
  await expect(backbutton).toHaveScreenshot('tc_api_007_2.png', {
    maxDiffPixels: 960,
    timeout: 15000
  });
  await expect(browsebutton).toHaveScreenshot('tc_api_007_3.png', {
    maxDiffPixels: 960,
    timeout: 15000
  });
  await page.getByRole('dialog').getByRole('img').first().click();
});

/**
 * @id TC_API_008
 * @description Check user able to click the back button and Browse CSV button in CSV import page
 *
 * @steps
 * 1.Launch the URL
 * 2..Login to the application
 * 3.Create project
 * 4.Click import
 * 5.Click CSV
 *
 * @expected User able to click the back button and Browse CSV button in CSV import page
 */
test('TC_API_008', async () => {
  await page.getByText('Import').first().click();
  await page.getByText('CSVView Upload Tips.csv').click();
  await page.waitForSelector("//*[text()='CSV Import']", { state: 'attached', timeout: 60000 });
  const backbutton = await page.locator("(//*[@id='importInput']//..//div)[1]");
  const browsebutton = await page.locator("(//*[@id='importInput']//..//div)[1]");
  const backbutton1 = await page.locator("//*[text()='Back']");
  const browsebutton1 = await page.locator("//*[text()='Browse CSV File']");
  const importpage = await page.locator("//*[@id='drop-target']");
  await expect(backbutton1).toBeTruthy();
  await expect(backbutton).toHaveScreenshot('tc_api_008_1.png', {
    maxDiffPixels: 960,
    timeout: 15000
  });
  await backbutton1.click();
  await expect(importpage).toBeTruthy();
  await expect(importpage).toHaveScreenshot('tc_api_008_2.png', {
    maxDiffPixels: 960,
    timeout: 15000
  });
  await page.getByText('CSVView Upload Tips.csv').click();
  await expect(browsebutton1).toBeTruthy();
  await expect(browsebutton).toHaveScreenshot('tc_api_008_3.png', {
    maxDiffPixels: 960,
    timeout: 15000
  });
  await page.getByRole('dialog').getByRole('img').first().click();
});

/**
 * @id TC_API_009
 * @description After click on back button check it will navigate to the main import page and not cancel the process.
 *
 * @steps
 * 1.Launch the URL
 * 2..Login to the application
 * 3.Create project
 * 4.Click import
 * 5.Click CSV
 * 6.Click back button.
 *
 * @expected After click on back it will navigate to the main import page and not cancel the process.
 */
test('TC_API_009', async () => {
  await page.getByText('Import').first().click();
  await page.getByText('CSVView Upload Tips.csv').click();
  await page.waitForSelector("//*[text()='CSV Import']", { state: 'attached', timeout: 60000 });
  const backbutton = await page.locator("//*[text()='Back']");
  const importpage = await page.locator("//*[@id='drop-target']");
  await expect(backbutton).toBeTruthy();
  await expect(backbutton).toHaveScreenshot('tc_api_009_1.png', {
    maxDiffPixels: 960,
    timeout: 15000
  });
  await backbutton.click();
  await expect(importpage).toBeTruthy();
  await expect(importpage).toHaveScreenshot('tc_api_009_2.png', {
    maxDiffPixels: 960,
    timeout: 15000
  });
  await page.locator("(//*[text()='Import'])[2]//..//img").click();
});

/**
 * @id TC_API_010
 * @description After Select the file from file explorer check it will navigate to the upload CSV page
 *
 * @steps
 * 1.Launch the URL
 * 2..Login to the application
 * 3.Create project
 * 4.Click import
 * 5.Click CSV
 * 6.Select file from file explorer
 *
 * @expected After Select the file from file explorer it should  navigate to the upload CSV page
 */
test('TC_API_010', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  await page.waitForSelector("//*[text()='CSV Import']", { state: 'attached', timeout: 60000 });
  const filePath = './testData/areaProgram/inputData/AreaProgramTemplate.csv';
  await page.locator('#importInput').setInputFiles(filePath);
  const csvimport = await page.locator("//*[@id='importInput']//..//div").first();
  await expect(csvimport).toHaveScreenshot('tc_api_010.png', {
    maxDiffPixels: 960,
    timeout: 15000
  });
  const csv_text = await page.getByText('CSV Import');
  await expect(csv_text).toBeVisible();
  await page.getByRole('dialog').getByRole('img').first().click();
});

/**
* @id TC_API_011
* @description Check the below field are present in the upload CSV page

1.CSV
2.Tickmark
3.Unit is set to sq.m if the unit as m
4.Unit is set to sq.m if the unit as cm
5.Unit is set to sq.m if the unit as mm
6.Unit is set to ft2 if the unit as ft
7.Unit is set to ft2 if the unit as inches
7.Back[Button]
8.Imort [Button]
*
* @steps
* 1.Launch the URL
* 2..Login to the application
* 3.Create project
* 4.Click import
* 5.Click CSV
* 6.Select file from file explorer
*
* @expected all the field should present in the upload CSV page
*/
test('TC_API_011', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  await page.waitForSelector("//*[text()='CSV Import']", { state: 'attached', timeout: 60000 });
  const filePath = './testData/areaProgram/inputData/AreaProgramTemplate.csv';
  await page.locator('#importInput').setInputFiles(filePath);
  const csv = await page.locator("(//*[text()='CSV']//..//..//div)[4]");
  await expect(csv).toHaveScreenshot('tc_api_011.png', { maxDiffPixels: 960, timeout: 15000 });
  const csvfile = await page.locator("//*[contains(text(),'.csv')]");
  await expect(csvfile).toBeVisible();
  const tick = await page.locator("//*[contains(text(),'.csv')]//..//..//div//img");
  await expect(tick).toBeTruthy();
  const backbutton = await page.locator("//*[text()='Back']");
  await expect(backbutton).toBeTruthy();
  const import_btn = await page.locator("//button//div[text()='Import']");
  await expect(import_btn).toBeTruthy();
  await page.getByRole('dialog').getByRole('img').first().click();
});

/**
 * @id TC_API_012
 * @description Check after import csv , the user will get the successfuli message or not
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
 * @expected After import csv , the user should  get the successfull message
 */
test('TC_API_012', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  await page.waitForSelector("//*[text()='CSV Import']", { state: 'attached', timeout: 60000 });
  const filePath = './testData/areaProgram/inputData/Template.csv';
  await page.locator('#importInput').setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  const importsuccess = await page.locator("//*[text()='Import Successful']");
  await expect(importsuccess).toBeVisible();
  const import_success_tab = await page
    .locator("(//*[text()='Import Successful']//..//..//div)[4]")
    .first();
  await expect(import_success_tab).toHaveScreenshot('tc_api_012.png', {
    maxDiffPixels: 960,
    timeout: 15000
  });
  await page.getByRole('dialog').getByRole('img').first().click();
});

/**
* @id TC_API_013
* @description Check the below fields are present in the successful page
1.successfully imported Total Built-up Area with unit from CSV file name into the canvas[text].
2.Dont show it again[button]
3.Understood[button]
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
* @expected All fields should present in the successful page
*/

test('TC_API_013', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  await page.waitForSelector("//*[text()='CSV Import']", { state: 'attached', timeout: 60000 });
  const filePath = './testData/areaProgram/inputData/Template.csv';
  await page.locator('#importInput').setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  const importsuccess = await page.locator("//*[text()='Import Successful']");
  await expect(importsuccess).toContainText('Import Successful');
  const importtext = await page.locator(
    "//*[text()='Successfully imported Total Built-up Area of 0  from ']"
  );
  await expect(importtext).toContainText('Successfully imported Total Built-up Area of 0  from');
  const done_btn = await page.locator("//button//*[text()='Done']");
  await expect(done_btn).toBeVisible();
  const import_success_tab = await page
    .locator("(//*[text()='Import Successful']//..//..//div)[4]")
    .first();
  await expect(import_success_tab).toHaveScreenshot('tc_api_013.png', {
    maxDiffPixels: 960,
    timeout: 15000
  });
  await page.getByRole('dialog').getByRole('img').first().click();
});

/**
 * @id TC_API_014
 * @description Check after click on "understood" will close the window. There should not be any animation to the import section.
 *
 * @steps
 * 1.Launch the URL
 * 2..Login to the application
 * 3.Create project
 * 4.Click import
 * 5.Click CSV
 * 6.Select file from file explorer
 * 7.Click import
 * 8.Click understood
 *
 * @expected After click on "understood" will close the window and does not shows the animation to the file section.
 */
test('TC_API_014', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  await page.waitForSelector("//*[text()='CSV Import']", { state: 'attached', timeout: 60000 });
  const filePath = './testData/areaProgram/inputData/import_success.csv';
  await page.locator('#importInput').setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.locator("//button//*[text()='Done']").click();
  const importsuccess = await page.locator("//*[text()='Import Successful']");
  await expect(importsuccess).not.toBeVisible();
  await expect(page).toHaveCanvasSnapshot('tc_api_014.png', {
    maxDiffPixels: 960
  });
});
