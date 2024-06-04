import { expect, test } from '../../common/fixtures';
import { Page } from '@playwright/test';
import { initProject, configure2DProjectForTestV0, enableAutoSave } from '../../common/project';
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
 * @id TC_API_081
 * @description Check after apply material space with same lable name will  reflect the changes
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
 * @expected after apply material space with same lable name will  reflect the changes
 */
test('TC_API_081', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/tc_api_081.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.getByRole('img', { name: 'materials' }).click();
  await page.locator('p').filter({ hasText: 'Concrete' }).click();
  await page
    .locator(
      '[id="material-concrete-list-item-https\\:\\/\\/automationapi\\.snaptru\\.de\\/media\\/media\\/materials\\/Concrete_Stained\\.jpg-Concrete_Stained"]'
    )
    .click();
  await page.locator('#canvas').click({
    position: {
      x: 542,
      y: 291
    }
  });
  await page.getByRole('img', { name: 'materials' }).click();
  const x: number[] = [497, 696, 546];
  const y: number[] = [316, 313, 491];
  for (let i = 0; i < x.length; i++) {
    await page.locator('#canvas').click({
      position: {
        x: x[i],
        y: y[i]
      }
    });
    const labelname = await page.locator(locators.label);
    await expect(labelname).toHaveValue('Yard');
  }
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 797,
      y: 494
    }
  });
  await expect(page).toHaveCanvasSnapshot('tc_api_081.png', { maxDiffPixels: 960 });
});

/**
 * @id TC_API_082
 * @description Check user able to split the imported mass or not
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
 * @expected user able to split the imported mass or not
 */
test('TC_API_082', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/tc_api_082.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 542,
      y: 185
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 546,
      y: 346
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 465,
      y: 267
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 540,
      y: 267
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 548,
      y: 265
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 634,
      y: 222
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 812,
      y: 454
    }
  });
  await expect(page).toHaveCanvasSnapshot('tc_api_082.png', { maxDiffPixels: 960 });
  const x: number[] = [475, 475, 558, 585];
  const y: number[] = [244, 324, 224, 327];
  for (let i = 0; i < x.length; i++) {
    const point = { x: x[i], y: y[i] };
    const actualGeometry = await getGeometry(page, point);
    await expect(actualGeometry).toHaveGeometryV0('tc_api_082_' + (i + 1) + '.geom', geometryDir);
  }
});

/**
 * @id TC_API_083
 * @description Check the Automate - “create building” is  supported on imported masses or not
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 * 6.Click automate tab
 * 7.Click create building
 *
 *
 * @expected the Automate - “create building” is  supported on imported masses
 */
test('TC_API_083', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/tc_api_083.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator("//*[text()='Automate']").click();
  await page.getByRole('img', { name: 'autoResize' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.evaluate(() => {
    store.exposed.automationCamera.setCamera({
      position: {
        _x: 67.32108615196398,
        _y: 46.34854157013529,
        _z: -39.745290507900584
      },
      alpha: -0.5235987755982983,
      beta: 1.0471975511965974,
      radius: 74.93856161449223,
      target: {
        _x: 11.117164941094806,
        _y: 8.879260762889146,
        _z: -7.295941467292792
      },
      isOrtho: false,
      orthoLeft: -61.5175739086787,
      orthoRight: 61.5175739086787,
      orthoBottom: -34.60363532363177,
      orthoTop: 34.60363532363177
    });
  });
  await page.locator('#canvas').click({
    position: {
      x: 317,
      y: 515
    }
  });
  await expect(page).toHaveCanvasSnapshot('tc_api_083.png', { maxDiffPixels: 960 });
});

/**
 * @id TC_API_084
 * @description Check the user able to change the size of an imported mass through object properties
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 * 6.Click object properties
 *
 *
 * @expected the user able to change the size of an imported mass through object properties
 */
/*Existing Bug: ST-2523 - changing in object properties of imported masses, it doesn't reflect on the other masses */
test.skip('TC_API_084', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/tc_api_084.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_084_1.png', { maxDiffPixels: 960 });
});

/**
 * @id TC_API_085
 * @description Check the user able to change the length ,width , height of the imported mass through object properties
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 * 6.Click object properties
 *
 *
 * @expected the user able to change the length ,width , height of the imported mass through object properties
 */
/*Existing Bug: ST-2523 - changing in object properties of imported masses, it doesn't reflect on the other masses */
test.skip('TC_API_085', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/tc_api_085.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 463,
      y: 405
    }
  });
  await page
    .locator('div')
    .filter({ hasText: /^Lengthmm$/ })
    .getByRole('textbox')
    .dblclick();
  await page
    .locator('div')
    .filter({ hasText: /^Lengthmm$/ })
    .getByRole('textbox')
    .fill('4000');
  await page
    .locator('div')
    .filter({ hasText: /^Lengthmm$/ })
    .getByRole('textbox')
    .press('Enter');
});

/**
 * @id TC_API_086
 * @description if the user able to change the length ,width , height of the imported mass through object properties,Check it will  reflects the changes on the mass with same lable name
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 * 6.Click object properties
 *
 *
 * @expected if the user able to change the length ,width , height of the imported mass through object properties, it will  reflects the changes on the mass with same lable name
 */
/*Existing Bug: ST-2523 - changing in object properties of imported masses, it doesn't reflect on the other masses */
test.skip('TC_API_086', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/tc_api_086.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 463,
      y: 405
    }
  });
  await page
    .locator('div')
    .filter({ hasText: /^Lengthmm$/ })
    .getByRole('textbox')
    .dblclick();
  await page
    .locator('div')
    .filter({ hasText: /^Lengthmm$/ })
    .getByRole('textbox')
    .fill('6000');
  await page
    .locator('div')
    .filter({ hasText: /^Lengthmm$/ })
    .getByRole('textbox')
    .press('Enter');
});

/**
 * @id TC_API_087
 * @description If the user selects a storey using the filter selection, check if all imported masses gets selected.
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 * 6.Click Storey in filter selection
 *
 *
 * @expected If the user selects a storey using the filter selection,  all imported masses gets selected.
 */
test('TC_API_087', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/tc_api_087.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.getByRole('img', { name: 'Select' }).click();
  await page.getByRole('img', { name: 'storeySelector' }).click();
  await page.getByText('Storey 1').click();
  await expect(page).toHaveCanvasSnapshot('tc_api_087.png', { maxDiffPixels: 960 });
  const count = await page.locator(locators.mass_count);
  await expect(count).toHaveText('5');
  await page.locator('#canvas').press('Escape');
  await page.getByRole('img', { name: 'Select' }).first().click();
});

/**
 * @id TC_API_088
 * @description Check if user is able to autocomplete masses to one or more imported mass edges.
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 * 6.Click draw tool
 *
 *
 * @expected user should able to autocomplete masses to one or more imported mass edges.
 */
test('TC_API_088', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/tc_api_088.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.evaluate(() => {
    store.exposed.automationCamera.setCamera({
      position: {
        _x: 6.968503952026367,
        _y: 908.0049056198874,
        _z: -7.058713891402749
      },
      alpha: -1.5707963267948966,
      beta: 0,
      radius: 896.1938963839771,
      target: {
        _x: 6.968503952026367,
        _y: 11.81100923591032,
        _z: -6.969094501764351
      },
      isOrtho: true,
      orthoLeft: -14.409331803914602,
      orthoRight: 14.78279777229844,
      orthoBottom: -8.36200684007816,
      orthoTop: 8.058566046541676
    });
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 637,
      y: 266
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 634,
      y: 186
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 810,
      y: 187
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 817,
      y: 370
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 720,
      y: 376
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 825,
      y: 430
    }
  });
  await expect(page).toHaveCanvasSnapshot('tc_api_088.png', { maxDiffPixels: 960 });
  const x: number[] = [608, 776];
  const y: number[] = [408, 323];
  for (let i = 0; i < x.length; i++) {
    const point = { x: x[i], y: y[i] };
    const actualGeometry = await getGeometry(page, point);
    await expect(actualGeometry).toHaveGeometryV0('tc_api_088_' + (i + 1) + '.geom', geometryDir);
  }
  await selectAll(page);
  const count = await page.locator(locators.mass_count);
  await expect(count).toHaveText('2');
  await page.locator('#canvas').press('Escape');
});

/**
 * @id TC_API_089
 * @description After csv import check the masses as visible in half tone in the upper storey and user able to snap to while drawing fresh masses on the upper storey
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
 * @expected After csv import , the masses is visible in half tone in the upper storey and user able to snap to while drawing fresh masses on the upper storey
 */
test('TC_API_089', async () => {
  test.setTimeout(350000);
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/tc_api_089.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.evaluate(() => {
    store.exposed.automationCamera.setCamera({
      position: {
        _x: 80,
        _y: 904.4335243676011,
        _z: -40.09044335243676
      },
      alpha: -1.5707963267948966,
      beta: 0,
      radius: 904.4335243676011,
      target: {
        _x: 80,
        _y: 0,
        _z: -40
      },
      isOrtho: true,
      orthoLeft: -72.40773439350247,
      orthoRight: 72.40773439350247,
      orthoBottom: -40.72935059634514,
      orthoTop: 40.72935059634514
    });
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await selectAll(page);
  await page.getByRole('img', { name: 'move', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 93,
      y: 131
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 428,
      y: 314
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 785,
      y: 477
    }
  });
  await page.getByRole('img', { name: 'storey_down' }).first().click();
  await page.getByRole('button', { name: 'Create new storey above' }).click();
  await page.getByText('2', { exact: true }).click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.mouse.move(318, 234);
  await page.mouse.move(314, 159);
  await expect(page).toHaveCanvasSnapshot('tc_api_089_1.png', { maxDiffPixels: 960 });
  await page.mouse.move(318, 234);
  await expect(page).toHaveCanvasSnapshot('tc_api_089_2.png', { maxDiffPixels: 960 });
  await page.mouse.move(314, 312);
  await expect(page).toHaveCanvasSnapshot('tc_api_089_3.png', { maxDiffPixels: 960 });
  await page.locator('#canvas').click({
    position: {
      x: 314,
      y: 427
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 318,
      y: 565
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 471,
      y: 560
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 463,
      y: 511
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 407,
      y: 508
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 403,
      y: 477
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 357,
      y: 470
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 355,
      y: 430
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 316,
      y: 427
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 715,
      y: 232
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 720,
      y: 386
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 819,
      y: 379
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 808,
      y: 290
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 897,
      y: 285
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 835,
      y: 232
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 711,
      y: 232
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 125,
      y: 231
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 243,
      y: 238
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 187,
      y: 192
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 249,
      y: 392
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 218,
      y: 343
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 129,
      y: 382
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 175,
      y: 423
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 130,
      y: 231
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 140,
      y: 273
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 641,
      y: 432
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 644,
      y: 574
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 832,
      y: 565
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 830,
      y: 473
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 863,
      y: 519
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 788,
      y: 435
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 646,
      y: 431
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 854,
      y: 126
    }
  });
  await expect(page).toHaveCanvasSnapshot('tc_api_089_4.png', { maxDiffPixels: 960 });
  const x: number[] = [158, 335, 716, 519];
  const y: number[] = [257, 503, 509, 316];
  for (let i = 0; i < x.length; i++) {
    const point = { x: x[i], y: y[i] };
    const actualGeometry = await getGeometry(page, point);
    await expect(actualGeometry).toHaveGeometryV0('tc_api_089_' + (i + 1) + '.geom', geometryDir);
  }
  await selectAll(page);
  const count = await page.locator(locators.mass_count);
  await expect(count).toHaveText('4');
  await page.locator('#canvas').press('Escape');
  await clearCanvas(page);
  await page.locator('p').filter({ hasText: /^1$/ }).click();
});

/**
 * @id TC_API_090
 * @description Check if move - X, Y  & Z axis works with a numerical input. If moved vertically, check if the storey gets re-assigned.. Do a create building on these masses and check for expected behavior.
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
 * @expected move - X, Y  & Z axis works with a numerical input. If moved vertically,  the storey should  gets re-assigned.
 */
test('TC_API_090', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/tc_api_090.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.evaluate(() => {
    store.exposed.automationCamera.setCamera({
      position: {
        _x: 80,
        _y: 904.4335243676011,
        _z: -40.09044335243676
      },
      alpha: -1.5707963267948966,
      beta: 0,
      radius: 904.4335243676011,
      target: {
        _x: 80,
        _y: 0,
        _z: -40
      },
      isOrtho: true,
      orthoLeft: -72.40773439350247,
      orthoRight: 72.40773439350247,
      orthoBottom: -40.72935059634514,
      orthoTop: 40.72935059634514
    });
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.evaluate(() => {
    store.exposed.automationCamera.setCamera({
      position: {
        _x: 147.13779229614357,
        _y: 108.03686885717514,
        _z: -84.21610143489288
      },
      alpha: -0.5235987755982983,
      beta: 1.0471975511965979,
      radius: 169.74502465900682,
      target: {
        _x: 19.829023801888425,
        _y: 23.164356527671742,
        _z: -10.714349674535015
      },
      isOrtho: false,
      orthoLeft: -152.82918207536792,
      orthoRight: 152.82918207536792,
      orthoBottom: -85.96641491739446,
      orthoTop: 85.96641491739446
    });
  });
  await expect(page).toHaveCanvasSnapshot('tc_api_090_1.png', { maxDiffPixels: 960 });
  await page.getByRole('img', { name: 'move' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 597,
      y: 477
    }
  });
  await page.mouse.move(596, 459);
  await page.waitForTimeout(300);
  await page.locator('#canvas').type('6000');
  await page.locator('#canvas').press('Enter');
  await expect(page).toHaveCanvasSnapshot('tc_api_090_2.png', { maxDiffPixels: 960 });
  const point = { x: 610, y: 346 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('tc_api_090.geom', geometryDir);
  const component = await getSnaptrudeDS(page, point);
  await expect(component.storey).toBe(3);
  await page.locator("//*[@data-tooltip-id='storey-3']").click();
  await clearCanvas(page);
  await page.locator('p').filter({ hasText: '1' }).click();
});

/**
 * @id TC_API_091
 * @description After csv import click on areas tab and check for correctness of areas in the detail areas section . Ensure the BUA , Carpet area and the FAR is accounted for all the imported masses.
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 * 6.Click area tab
 *
 *
 * @expected After csv import click on areas tab . the BUA , Carpet area and the FAR is accounted for all the imported masses.
 */
test('TC_API_091', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/tc_api_091.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.evaluate(() => {
    store.exposed.automationCamera.setCamera({
      position: {
        _x: 100.02140007019041,
        _y: 904.433528860252,
        _z: -35.52860420720022
      },
      alpha: -1.5707963267948966,
      beta: 0,
      radius: 898.5301721170571,
      target: {
        _x: 100.02140007019041,
        _y: 5.903356743194877,
        _z: -35.43875118998851
      },
      isOrtho: true,
      orthoLeft: -162.25820800083835,
      orthoRight: 162.1393294398723,
      orthoBottom: -109.80498168796369,
      orthoTop: 72.66863312243609
    });
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_091_1.png', { maxDiffPixels: 960 });
  await page.getByRole('img', { name: 'Areas' }).click();
  await page.getByText('Storey(1)').click();
  const areas = await page.locator("((//*[text()='Total']//..)//..//button//..//..//..//..)[1]");
  await expect(areas).toHaveScreenshot('tc_api_091_2.png', { maxDiffPixels: 960, timeout: 15000 });
  await page.getByRole('img', { name: 'Areas' }).click();
  await selectAll(page);
  const count = await page.locator(locators.mass_count);
  await expect(count).toHaveText('9');
  await page.locator('#canvas').press('Escape');
});

/**
 * @id TC_API_092
 * @description After csv import,click on areas tab and check for correctness of areas in the all existing charts- By FAR, By storeyx2, by room, efficiency.
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 * 6.Click area tab
 *
 *
 * @expected After csv import,click on areas tab and areas in the all existing charts- By FAR, By storeyx2, by room, efficiency should updated correctly.
 */
test('TC_API_092', async () => {
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/tc_api_092.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.evaluate(() => {
    store.exposed.automationCamera.setCamera({
      position: {
        _x: 86.345703125,
        _y: 904.4335333529042,
        _z: -20.827221514071073
      },
      alpha: -1.5707963267948966,
      beta: 0,
      radius: 898.5304429213945,
      target: {
        _x: 86.345703125,
        _y: 5.903090431509668,
        _z: -20.737368469778936
      },
      isOrtho: true,
      orthoLeft: -132.15543779214158,
      orthoRight: 86.65580209757861,
      orthoBottom: -67.66470538539626,
      orthoTop: 55.41661705257138
    });
  });
  await expect(page).toHaveCanvasSnapshot('tc_api_092_1.png', { maxDiffPixels: 960 });
  await page.getByRole('img', { name: 'Areas' }).click();
  await page.mouse.move(588, 123);
  const chart = await page.locator(locators.chart_img);
  await expect(chart).toHaveScreenshot('tc_api_092_2.png', { maxDiffPixels: 960, timeout: 15000 });
  await page.getByRole('button', { name: 'Change chart type' }).click();
  const area_chart: string[] = [
    "//*[text()='EFFICIENCY']",
    "(//*[text()='BY STOREY'])[1]",
    "(//*[text()='BY STOREY'])[2]",
    "//*[text()='BY ROOM']"
  ];
  for (let i = 0; i < area_chart.length; i++) {
    await page.getByRole('button', { name: 'Change chart type' }).click();
    await page.locator(area_chart[i]).click();
    await page.getByRole('button', { name: 'Add to Dashboard' }).click();
    await page.waitForSelector("((//*[@id='area-sidebar']//..//..)//div)[4]", {
      state: 'attached',
      timeout: 10000
    });
    await expect(chart).toHaveScreenshot('tc_api_092_' + (i + 3) + '.png', {
      maxDiffPixels: 960,
      timeout: 15000
    });
    if (i != 2) {
      await expect(page.locator("//*[text()='40 sq.m']")).toBeVisible();
    }
  }
  await page.getByRole('img', { name: 'Areas' }).click();
});

/**
 * @id TC_API_093
 * @description After save As, check to see if the imported masses is still in its old position.
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 * 6.Click save as
 *
 *
 * @expected After save As,the imported masses is still in its old position.
 */
test('TC_API_093', async () => {
  await enableAutoSave(page);
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/tc_api_093.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_093_1.png', { maxDiffPixels: 960 });
  await page.locator('#canvas').click({
    position: {
      x: 600,
      y: 436
    }
  });
  const point = { x: 600, y: 436 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('tc_api_93_1.geom', geometryDir);
  await page.getByText('areaProgramI...').click();
  await page.getByText('Save As', { exact: true }).click();
  await page.getByPlaceholder('Save as project name').click();
  await page.getByPlaceholder('Save as project name').press('Control+a');
  await page.getByPlaceholder('Save as project name').fill('TC_API_093');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Save' }).click();
  const page1 = await page1Promise;
  await page1.waitForSelector('.project-is-ready', {
    state: 'attached',
    timeout: 60000
  });
  await expect(page1).toHaveCanvasSnapshot('tc_api_093_2.png', { maxDiffPixels: 960 });
  const point1 = { x: 600, y: 436 };
  const actualGeometry1 = await getGeometry(page1, point1);
  await expect(actualGeometry1).toHaveGeometryV0('tc_api_93_2.geom', geometryDir);
  await clearCanvas(page1);
  await page1.close();
  await clearCanvas(page);
  await page.evaluate(() => {
    // @ts-ignore
    store.exposed.autoSaveConfig.disable();
  });
});

/**
 * @id TC_API_094
 * @description After refreshing, check to see if the imported masses is still in its old position.
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 * 6.Click refresh
 *
 *
 * @expected After refreshing,  the imported masses is still in its old position.
 */
test('TC_API_094', async () => {
  await enableAutoSave(page);
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/tc_api_094.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_094_1.png', { maxDiffPixels: 960 });
  const point1 = { x: 562, y: 440 };
  const point2 = { x: 704, y: 445 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('tc_api_94_1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('tc_api_94_2.geom', geometryDir);
  await page.reload();
  await page.waitForSelector('.project-is-ready', {
    state: 'attached',
    timeout: 60000
  });
  await expect(page).toHaveCanvasSnapshot('tc_api_094_2.png', { maxDiffPixels: 960 });
  const actualGeometry3 = await getGeometry(page, point1);
  await expect(actualGeometry3).toHaveGeometryV0('tc_api_94_3.geom', geometryDir);
  const actualGeometry4 = await getGeometry(page, point2);
  await expect(actualGeometry4).toHaveGeometryV0('tc_api_94_4.geom', geometryDir);
  await page.locator('#canvas').press('Escape');
  await clearCanvas(page);
  await page.evaluate(() => {
    // @ts-ignore
    store.exposed.autoSaveConfig.disable();
  });
});

/**
 * @id TC_API_095
 * @description After reopen the project, check to see if the imported masses is still in its old position.
 *
 * @steps
 * 1.Create project
 * 2.Click import
 * 3.Click CSV
 * 4.Select file from file explorer
 * 5.Click import
 * 6.Reopen the project
 *
 *
 * @expected After reopen the project,  the imported masses is still in its old position.
 */
test('TC_API_095', async () => {
  await enableAutoSave(page);
  await page.getByText('Import').click();
  await page.getByText('CSVView Upload Tips.csv').click();
  const filePath = './testData/areaProgram/inputData/tc_api_095.csv';
  await page.locator(locators.csvImport).setInputFiles(filePath);
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await expect(page).toHaveCanvasSnapshot('tc_api_095_1.png', { maxDiffPixels: 960 });
  await page.getByRole('link', { name: 'snaptrude' }).click();
  await page.reload();
  await page.waitForSelector("//*[@value='areaProgramImportCSV7.spec.ts']", {
    state: 'attached',
    timeout: 60000
  });
  await page.locator("//*[@value='areaProgramImportCSV7.spec.ts']").click();
  await page.waitForSelector('.project-is-ready', {
    state: 'attached',
    timeout: 60000
  });
  await expect(page).toHaveCanvasSnapshot('tc_api_095_2.png', { maxDiffPixels: 960 });
  await clearCanvas(page);
  await page.evaluate(() => {
    // @ts-ignore
    store.exposed.autoSaveConfig.disable();
  });
});
