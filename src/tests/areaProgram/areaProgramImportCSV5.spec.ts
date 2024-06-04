import { expect, test } from '../../common/fixtures';
import { Page } from '@playwright/test';
import { initProject, configure2DProjectForTestV0, toggle2D } from '../../common/project';
import { clearCanvas, selectAll } from '../../common/canvas';
import { createGeometryDir, getGeometry } from '../../common/geometry';
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
 * @id TC_API_061
 * @description check the spaces count are reflected correctly on the canvas
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 *
 *
 * @expected The spaces count are reflected correctly on the canvas
 */
test('TC_API_061', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/Area-1.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_061.png');
  await selectAll(page);
  const count = await page.locator(locators.mass_count);
  await expect(count).toHaveText('5');
  await page.keyboard.press('Escape');
});

/**
 * @id TC_API_062
 * @description Check the user will upload the csv file multiple times in a same project
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 * 6.Click import
 * 6.Click CSV .
 * 7.Click import
 *
 * @expected The user should upload the csv file multiple times in a same project
 */
test('TC_API_062', async () => {
  const name: string[] = ['Area-1', 'Area-2', 'Area-3'];
  for (let i = 0; i < name.length; i++) {
    await page.getByText('Import').click();
    await page.getByText('CSVView Upload Tips.csv').click();
    const filePath = './testData/areaProgram/inputData/' + name[i] + '.csv';
    await page.locator(locators.csvImport).setInputFiles(filePath);
    await page.getByRole('button', { name: 'Import' }).click();
    const import_popup = await page.locator(locators.import_popup);
    await expect(import_popup).toHaveScreenshot('tc_api_062_success_' + (i + 1) + '.png', {
      maxDiffPixels: 960,
      timeout: 15000
    });
    await page.getByRole('button', { name: 'Done' }).click();
    await page.getByRole('img', { name: 'pointer' }).click();
    await expect(page).toHaveCanvasSnapshot('tc_api_062_' + (i + 1) + '.png', {
      maxDiffPixels: 960
    });
  }
  await selectAll(page);
  const count = await page.locator(locators.mass_count);
  await expect(count).toHaveText('15');
  await page.keyboard.press('Escape');
});

/**
* @id TC_API_063
* @description After upload mutiple csv file,Check the model gets uploaded in a blank space on canvas.

*
* @steps
* 1.Create project
* 2.Click import
* 3.Click CSV
* 4.Select file from file explorer
* 5.Click import
* 6.Click import
* 6.Click CSV .
* 7.Click import
*
* @expected After upload mutiple csv file,the model should gets uploaded in a blank space on canvas.

*/
test('TC_API_063', async () => {
  const name: string[] = ['Area-4', 'Area-5', 'Area-6'];
  for (let i = 0; i < name.length; i++) {
    await page.getByText('Import').click();
    await page.getByText('CSVView Upload Tips.csv').click();
    const filePath = './testData/areaProgram/inputData/' + name[i] + '.csv';
    await page.locator(locators.csvImport).setInputFiles(filePath);
    await page.getByRole('button', { name: 'Import' }).click();
    await page.getByRole('button', { name: 'Done' }).click();
    await page.getByRole('img', { name: 'pointer' }).click();
    await expect(page).toHaveCanvasSnapshot('tc_api_063_' + (i + 1) + '.png', {
      maxDiffPixels: 960
    });
  }
  await selectAll(page);
  const count = await page.locator(locators.mass_count);
  await expect(count).toHaveText('9');
  await page.keyboard.press('Escape');
});

/**
* @id TC_API_064
* @description if multiple CSV files are uploaded with same name on both CSV files ,check  one CSV file will act as one group and the other as another group on snaptrude.
*
* @steps
* 1.Create project
* 2.Click import
* 3.Click CSV
* 4.Select file from file explorer
* 5.Click import
* 6.Click import
* 6.Click CSV .
* 7.Click import
*
* @expected if multiple CSV files are uploaded with same name on both CSV files ,one CSV file will act as one group and the other as another group on snaptrude.

*/
test('TC_API_064', async () => {
  const name: string[] = ['Area-6', 'Area-6'];
  for (let i = 0; i < name.length; i++) {
    await page.getByText('Import').click();
    await page.getByText('CSVView Upload Tips.csv').click();
    const filePath = './testData/areaProgram/inputData/' + name[i] + '.csv';
    await page.locator(locators.csvImport).setInputFiles(filePath);
    await page.getByRole('button', { name: 'Import' }).click();
    await page.getByRole('button', { name: 'Done' }).click();
    await page.getByRole('img', { name: 'pointer' }).click();
    await expect(page).toHaveCanvasSnapshot('tc_api_064_' + (i + 1) + '.png', {
      maxDiffPixels: 960
    });
  }
  await page.getByRole('img', { name: 'Areas' }).click();
  await page.getByRole('button', { name: 'Change chart type' }).click();
  await page.getByText('BY ROOM').click();
  await page.getByText('BY ROOM').click();
  const chart = await page.locator(locators.chart_img);
  await expect(chart).toHaveScreenshot('tc_api_064_3.png', { maxDiffPixels: 960, timeout: 15000 });
  await page.getByRole('img', { name: 'Areas' }).click();
  await page.locator('#canvas').dblclick({
    position: {
      x: 619,
      y: 157
    }
  });
  await page.waitForTimeout(300);
  await page.keyboard.type('Bedroom');
  await page.locator('#canvas').press('Enter');
  const x: number[] = [600, 683, 607];
  const y: number[] = [137, 142, 219];
  const x1: number[] = [594, 680, 591];
  const y1: number[] = [468, 468, 563];
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
  for (let i = 0; i < x1.length; i++) {
    await page.locator('#canvas').click({
      position: {
        x: x1[i],
        y: y1[i]
      }
    });
    const label_name = await page.locator(locators.label);
    await expect(label_name).toHaveValue('Dining');
  }
  await page.locator('#canvas').click({
    position: {
      x: 591,
      y: 563
    }
  });
  await page.getByRole('img', { name: 'Areas' }).click();
  await chart.hover();
  await expect(chart).toHaveScreenshot('tc_api_064_4.png', { maxDiffPixels: 960, timeout: 15000 });
  await page.getByRole('img', { name: 'Areas' }).click();
  await selectAll(page);
  const count = await page.locator(locators.mass_count);
  await expect(count).toHaveText('6');
  await page.keyboard.press('Escape');
});

/**
 * @id TC_API_065
 * @description if multiple CSV files are uploaded with same name on both CSV files.  one CSV file will act as one group and the other as another group on snaptrude. check the Masses from one CSV file will not affect the other.
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 * 6.Click import
 * 6.Click CSV .
 * 7.Click import
 *
 * @expected if multiple CSV files are uploaded with same name on both CSV files.  one CSV file will act as one group and the other as another group on snaptrude. the Masses from one CSV file will not affect the other.
 */
test('TC_API_065', async () => {
  const name: string[] = ['Area-7', 'Area-7'];
  for (let i = 0; i < name.length; i++) {
    await page.getByText('Import').click();
    await page.getByText('CSVView Upload Tips.csv').click();
    const filePath = './testData/areaProgram/inputData/' + name[i] + '.csv';
    await page.locator(locators.csvImport).setInputFiles(filePath);
    await page.getByRole('button', { name: 'Import' }).click();
    await page.getByRole('button', { name: 'Done' }).click();
    await page.getByRole('img', { name: 'pointer' }).click();
    await expect(page).toHaveCanvasSnapshot('tc_api_065_' + (i + 1) + '.png', {
      maxDiffPixels: 960
    });
  }
  await page.getByRole('img', { name: 'edit' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 577,
      y: 206
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 581,
      y: 240
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 538,
      y: 188
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 514,
      y: 185
    }
  });
  await page.getByRole('img', { name: 'addLayer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 561,
      y: 206
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 568,
      y: 241
    }
  });
  await page.getByRole('img', { name: 'edit' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 589,
      y: 243
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 587,
      y: 296
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 543,
      y: 244
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 553,
      y: 183
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_065_3.png', { maxDiffPixels: 960 });
  let x: number[] = [554, 674];
  let y: number[] = [565, 550];
  for (let i = 0; i < x.length; i++) {
    await page.locator('#canvas').click({
      position: {
        x: x[i],
        y: y[i]
      }
    });
    const footPrintarea = await page.locator(locators.area);
    await expect(footPrintarea).toHaveText('1');
  }
  await page.keyboard.press('Escape');
});

/**
* @id TC_API_066
* @description if the user delete the previously created masses and then uploads multiple CSV into the same project,Check the Masses from one CSV file will not affect the other.


*
* @steps
* 1.Create project
* 2.Click import
* 3.Click CSV
* 4.Select file from file explorer
* 5.Click import
* 6.Click import
* 6.Click CSV .
* 7.Click import
*
* @expected if the user delete the previously created masses and then uploads multiple CSV into the same project, the Masses from one CSV file will not affect the other.


*/
test('TC_API_066', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 173,
      y: 150
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 169,
      y: 219
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 248,
      y: 214
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 245,
      y: 258
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 216,
      y: 259
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 218,
      y: 301
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 306,
      y: 291
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 306,
      y: 224
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 260,
      y: 151
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 179,
      y: 154
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 423,
      y: 197
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 529,
      y: 197
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 484,
      y: 157
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 519,
      y: 296
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 514,
      y: 266
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 424,
      y: 293
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 468,
      y: 323
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 421,
      y: 194
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 438,
      y: 226
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 292,
      y: 415
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 469,
      y: 412
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 475,
      y: 503
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 494,
      y: 483
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 295,
      y: 498
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 288,
      y: 413
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 261,
      y: 437
    }
  });
  await page.getByRole('img', { name: 'drawCircle' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 627,
      y: 237
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 637,
      y: 286
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 602,
      y: 339
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 616,
      y: 504
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 765,
      y: 494
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 759,
      y: 435
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 661,
      y: 435
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 662,
      y: 394
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 627,
      y: 392
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 629,
      y: 338
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 602,
      y: 341
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_066.png');
  await selectAll(page);
  await page.getByRole('img', { name: 'delete_icon' }).click();
  await page.mouse.move(544, 350);
  const name: string[] = ['Area-8', 'Area-9'];
  for (let i = 0; i < name.length; i++) {
    await page.getByText('Import').click();
    await page.getByText('CSVView Upload Tips.csv').click();
    const filePath = './testData/areaProgram/inputData/' + name[i] + '.csv';
    await page.locator(locators.csvImport).setInputFiles(filePath);
    await page.getByRole('button', { name: 'Import' }).click();
    await page.getByRole('button', { name: 'Done' }).click();
    await page.getByRole('img', { name: 'pointer' }).click();
    await expect(page).toHaveCanvasSnapshot('tc_api_066_' + (i + 1) + '.png', {
      maxDiffPixels: 960
    });
  }
  await selectAll(page);
  const count = await page.locator(locators.mass_count);
  await expect(count).toHaveText('4');
  await page.locator('#canvas').press('Escape');
});

/**
 * @id TC_API_067
 * @description Check the user able to draw next to the uploaded csv masses
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 * 6.Click draw
 *
 * @expected the user able to draw next to the uploaded csv masses
 */
test('TC_API_067', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/Area-10.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_067_1.png', { maxDiffPixels: 960 });
  await selectAll(page);
  const count = await page.locator(locators.mass_count);
  await expect(count).toHaveText('3');
  await page.locator('#canvas').press('Escape');
  await page.getByRole('img', { name: 'zoomOut' }).click();
  for (let i = 0; i < 10; i++) {
    await page.locator('#canvas').click({
      position: {
        x: 628,
        y: 360
      }
    });
  }
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 657,
      y: 379
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 657,
      y: 454
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 742,
      y: 452
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 741,
      y: 418
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 689,
      y: 414
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 689,
      y: 380
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 657,
      y: 380
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 564,
      y: 486
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 567,
      y: 554
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 644,
      y: 558
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 603,
      y: 575
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 638,
      y: 513
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 598,
      y: 507
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 593,
      y: 487
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 570,
      y: 488
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  const point1 = { x: 667, y: 414 };
  const point2 = { x: 618, y: 533 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('tc_api_067_1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('tc_api_067_2.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('tc_api_067_2.png', { maxDiffPixels: 960 });
  await page.locator('#canvas').press('Escape');
  await selectAll(page);
  const count2 = await page.locator(locators.mass_count);
  await expect(count2).toHaveText('5');
  await page.locator('#canvas').press('Escape');
  await reset2DCameraVersion0(page);
});

/**
* @id TC_API_068
* @description Check user able to perform the following actions after import csv
1.select
2.delete
3.Hide/show
4.Undo/Redo
5.lock/unlock  the spaces
*
* @steps
* 1.Create project
* 2.Click import
* 3.Click CSV
* 4.Select file from file explorer
* 5.Click import
*
*
* @expected user able to perform the actions after import csv
*/
test('TC_API_068', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/Area-11.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await selectAll(page);
  await expect(page).toHaveCanvasSnapshot('tc_api_068_1.png', { maxDiffPixels: 960 });
  await page.getByRole('img', { name: 'delete_icon' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_068_2.png', { maxDiffPixels: 960 });
  await page.getByRole('img', { name: 'Undo' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_068_3.png', { maxDiffPixels: 960 });
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'Bulb0' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_068_4.png', { maxDiffPixels: 960 });
  await page.getByRole('img', { name: 'Bulb', exact: true }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_068_5.png', { maxDiffPixels: 960 });
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'Lock', exact: true }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_068_6.png', { maxDiffPixels: 960 });
  await page.getByRole('img', { name: 'edit' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 579,
      y: 254
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 559,
      y: 412
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 560,
      y: 570
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 772,
      y: 358
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 771,
      y: 217
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await selectAll(page);
  await page.getByRole('img', { name: 'Unlock' }).click();
  await page.locator('#canvas').press('Escape');
});

/**
 * @id TC_API_069
 * @description Check user  able to capture, save and export the csv masses as a part of views
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 * 6.Click views tab
 * 7.Click save scene
 *
 *
 * @expected  user  able to capture, save and export the csv masses as a part of views
 */
test('TC_API_069', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/Area-11.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.getByText('Views').click();
  await page.getByRole('img', { name: 'snapshot' }).click();
  await page.getByRole('img', { name: 'Views' }).click();
  await page.waitForTimeout(1000);
  await page.locator("//*[@alt='>']").first().click({ force: true });
  await page.getByText('Export Views').click();
  const export_views = await page.locator("(//*[text()='Export Views']//..//..//..)[1]");
  await page.locator("(//*[text()='Select All']//..//div)[2]").click();
  await page.getByRole('button', { name: 'Export' }).click();
  await expect(export_views).not.toBeVisible({
    timeout: 60000
  });
  await page
    .locator("(((//*[text()='Views'])[2]//..//..//..//div//img)[1]//..//.//..//..)[1]")
    .hover();
  await page.getByRole('img', { name: 'deleteIcon' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_069.png', { maxDiffPixels: 960 });
});

/**
 * @id TC_API_070
 * @description Check the user able to  copy- paste the spaces in same storey and across different storeys or not .
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
 * @expected  the user able to  copy- paste the spaces  in same storey and across different storeys.
 */
test('TC_API_070', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/Area-12.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_070_1.png', { maxDiffPixels: 960 });
  await page.getByRole('img', { name: 'zoomOut' }).click();
  for (let i = 0; i < 10; i++) {
    await page.locator('#canvas').click({
      position: {
        x: 648,
        y: 338
      }
    });
  }
  await page.getByRole('img', { name: 'zoomOut' }).click();
  await selectAll(page);
  await page.locator('#canvas').press('Control+c');
  await page.locator('#canvas').press('Control+v');
  await page.waitForTimeout(1000);
  await page.locator('#canvas').click({
    position: {
      x: 831,
      y: 331
    }
  });
  await expect(page).toHaveCanvasSnapshot('tc_api_070_2.png', { maxDiffPixels: 960 });
  await page.getByRole('img', { name: 'storey_down' }).first().click();
  await page.getByRole('button', { name: 'Create new storey above' }).click();
  await page.getByText('2', { exact: true }).click();
  await page.locator('#canvas').press('Control+v');
  await page.locator('#canvas').press('Escape');
  await page.locator('#canvas').press('Control+v');
  await page.waitForTimeout(1000);
  await page.locator('#canvas').press('Escape');
  await page.locator('#canvas').click({
    position: {
      x: 831,
      y: 331
    }
  });
  await expect(page).toHaveCanvasSnapshot('tc_api_070_3.png', { maxDiffPixels: 960 });
  await clearCanvas(page);
  await page.getByText('1', { exact: true }).last().click();
  await reset2DCameraVersion0(page);
});
