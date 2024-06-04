import { expect, test } from '../../common/fixtures';
import { Page } from '@playwright/test';
import { initProject, ensureDrawMode, configure2DProjectForTestV0 } from '../../common/project';
import { clearCanvas } from '../../common/canvas';
import { setCameraPosition } from '../../common/camera';
import {
  createGeometryDir,
  getGeometry,
  getSnaptrudeDS,
  getSnaptrudeDSType
} from '../../common/geometry';

const camPos = {
  position: {
    _x: 80,
    _y: 904.4335288897887,
    _z: -40.090443352888975
  },
  alpha: -1.5707963267948966,
  beta: 0,
  radius: 904.4375288897487,
  target: {
    _x: 80,
    _y: -0.0039999999600013325,
    _z: -39.9999996
  },
  isOrtho: true,
  orthoLeft: -72.40773439350247,
  orthoRight: 72.40773439350247,
  orthoBottom: -40.72935059634514,
  orthoTop: 40.72935059634514
};

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
 * @id Split mass_055
 * @description After Drawn Floor, Check user able to split the drawn a Floor on the blank canvas, by Selecting a Floor as object type.
 * @steps
 *  1. Create Project
 *  2.Select Object type as floor
 *  3.Draw (Line/ARC) floor
 *  4. Split the floor by selecting the object type as floor
 *   a. split the line floor using draw tool
 *   b. Split the arc floor using Arc tool
 * @expected user should be able to split the drawn floor on the blank canvas, by Selecting floor as object type.
 */
test('Split mass_055', async () => {
  await page.getByRole('img', { name: 'Floor' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 269,
      y: 316
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 276,
      y: 203
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 459,
      y: 216
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 455,
      y: 313
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 270,
      y: 316
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 365,
      y: 202
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 363,
      y: 316
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 633,
      y: 221
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 719,
      y: 215
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 669,
      y: 179
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 716,
      y: 289
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 754,
      y: 271
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 676,
      y: 320
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 707,
      y: 333
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 605,
      y: 296
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 604,
      y: 311
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 629,
      y: 227
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 574,
      y: 232
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 603,
      y: 298
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 661,
      y: 262
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 638,
      y: 270
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 715,
      y: 223
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 691,
      y: 262
    }
  });
  const point = { x: 412, y: 246 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('split_mass_055.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('split_mass_055.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Floor');
  const point1 = { x: 645, y: 231 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('split_mass_055_1.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Floor');
  const point2 = { x: 681, y: 301 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('split_mass_055_2.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point2)).toBe('Floor');
});

/**
 * @id Split mass_056
 * @description After Drawn Facade element, Check user able to split the drawn a Facade element on the blank canvas, by Selecting a Facade element as object type.
 * @steps
 *  1. Create Project
 *  2.Select Object type as facade element
 *  3.Draw (Line/ARC) facade element
 *  4. Split the facade element by selecting the object type as facade element
 *   a. split the line facade element using draw tool
 *   b. Split the arc facade element using Arc tool
 * @expected user should be able to split the drawn facade element on the blank canvas, by Selecting facade element as object type.
 */
test('Split mass_056', async () => {
  await page.getByRole('img', { name: 'Mass' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 220,
      y: 337
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 223,
      y: 206
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 398,
      y: 215
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 401,
      y: 312
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 213,
      y: 315
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 299,
      y: 202
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 289,
      y: 317
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 578,
      y: 233
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 671,
      y: 240
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 619,
      y: 198
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 664,
      y: 339
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 698,
      y: 325
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 587,
      y: 336
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 589,
      y: 352
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 517,
      y: 314
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 518,
      y: 307
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 577,
      y: 232
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 525,
      y: 234
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 515,
      y: 304
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 607,
      y: 289
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 596,
      y: 284
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 668,
      y: 240
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 642,
      y: 284
    }
  });
  const point = { x: 357, y: 267 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('split_mass_056.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('split_mass_056.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  const point1 = { x: 578, y: 247 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('split_mass_056_1.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  const point2 = { x: 611, y: 319 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('split_mass_056_2.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point2)).toBe('Mass');
});

/**
 * @id Split mass_057
 * @description After Drawn Furniture, Check user able to split the drawn a Furniture on the blank canvas, by Selecting a Furniture as object type.
 * @steps
 *  1. Create Project
 *  2.Select Object type as furniture
 *  3.Draw (Line/ARC) furniture
 *  4. Split the furniture by selecting the object type as furniture
 *   a. split the line furniture using draw tool
 *   b. Split the arc furniture using Arc tool
 * @expected user should be able to split the drawn furniture on the blank canvas, by Selecting furniture as object type.
 */
test('Split mass_057', async () => {
  await page.getByRole('img', { name: 'Mass' }).click();
  await page.getByText('Facade element').click();
  await page.locator('.option >> text=Furniture').click();
  await page.locator('#canvas').click({
    position: {
      x: 252,
      y: 324
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 253,
      y: 221
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 438,
      y: 221
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 432,
      y: 318
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 254,
      y: 324
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 255,
      y: 267
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 437,
      y: 263
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 576,
      y: 287
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 659,
      y: 282
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 604,
      y: 237
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 658,
      y: 356
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 695,
      y: 358
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 571,
      y: 344
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 556,
      y: 363
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 576,
      y: 285
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 492,
      y: 289
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 571,
      y: 338
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 661,
      y: 291
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 610,
      y: 338
    }
  });
  const point = { x: 356, y: 244 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('split_mass_057.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('split_mass_057.png', {
    maxDiffPixels: 960
  });
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
  expect(component.massType).toBe('Furniture');
  const point1 = { x: 572, y: 314 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('split_mass_057_1.geom', geometryDir);
  const component1 = await getSnaptrudeDS(page, point1);
  expect(component1.type).toBe('Mass');
  expect(component1.massType).toBe('Furniture');
  const point2 = { x: 610, y: 400 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('split_mass_057_2.geom', geometryDir);
  const component2 = await getSnaptrudeDS(page, point2);
  expect(component2.type).toBe('Mass');
  expect(component2.massType).toBe('Furniture');
});

/**
 * @id Split mass_058
 * @description After Drawn Pergola, Check user able to split the drawn a Pergola on the blank canvas, by Selecting a Pergola as object type.
 * @steps
 *  1. Create Project
 *  2.Select Object type as pergola
 *  3.Draw (Line/ARC) pergola
 *  4. Split the pergola by selecting the object type as pergola
 *   a. split the line pergola using draw tool
 *   b. Split the Arc pergola using Arc tool
 * @expected user should be able to split the drawn pergola on the blank canvas, by Selecting pergola as object type.
 */
test('Split mass_058', async () => {
  test.setTimeout(350000);
  await page.getByRole('img', { name: 'Mass' }).click();
  await page.getByText('Facade element').click();
  await page.locator('.option >> text=Pergola').click();
  await page.locator('#canvas').click({
    position: {
      x: 271,
      y: 348
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 269,
      y: 238
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 369,
      y: 242
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 370,
      y: 273
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 420,
      y: 277
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 421,
      y: 240
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 468,
      y: 240
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 470,
      y: 355
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 276,
      y: 348
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 368,
      y: 273
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 368,
      y: 348
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 608,
      y: 264
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 700,
      y: 270
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 647,
      y: 212
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 684,
      y: 329
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 732,
      y: 335
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 630,
      y: 357
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 653,
      y: 377
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 581,
      y: 331
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 572,
      y: 347
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 606,
      y: 267
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 561,
      y: 274
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 578,
      y: 327
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 701,
      y: 265
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 616,
      y: 269
    }
  });
  const point = { x: 417, y: 308 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('split_mass_058.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('split_mass_058.png', {
    maxDiffPixels: 960
  });
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
  expect(component.massType).toBe('Pergola');
  const point1 = { x: 591, y: 271 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('split_mass_058_1.geom', geometryDir);
  const component1 = await getSnaptrudeDS(page, point1);
  expect(component1.type).toBe('Mass');
  expect(component1.massType).toBe('Pergola');
  const point2 = { x: 655, y: 340 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('split_mass_058_2.geom', geometryDir);
  const component2 = await getSnaptrudeDS(page, point2);
  expect(component2.type).toBe('Mass');
  expect(component2.massType).toBe('Pergola');
});

/**
 * @id Split mass_059
 * @description After Drawn Generic, Check user able to split the drawn a Generic on the blank canvas, by Selecting a Generic as object type.
 * @steps
 *  1. Create Project
 *  2.Select Object type as generic
 *  3.Draw (Line/ARC) generic
 *  4. Split the generic by selecting the object type as generic
 *   a. split the line generic using draw tool
 *   b. Split the arc generic using Arc tool
 * @expected user should be able to split the drawn generic on the blank canvas, by Selecting generic as object type.
 */
test('Split mass_059', async () => {
  test.setTimeout(200000);
  await page.getByRole('img', { name: 'Mass' }).click();
  await page.getByText('Facade element').click();
  await page.locator('.option >> text=Generic').click();
  await page.locator('#canvas').click({
    position: {
      x: 264,
      y: 335
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 266,
      y: 262
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 342,
      y: 231
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 420,
      y: 269
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 422,
      y: 331
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 349,
      y: 357
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 266,
      y: 335
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 341,
      y: 238
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 342,
      y: 356
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 608,
      y: 264
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 700,
      y: 270
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 647,
      y: 212
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 684,
      y: 329
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 732,
      y: 335
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 630,
      y: 357
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 653,
      y: 377
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 581,
      y: 331
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 572,
      y: 347
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 606,
      y: 267
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 561,
      y: 274
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 578,
      y: 327
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 701,
      y: 265
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 616,
      y: 269
    }
  });
  const point = { x: 373, y: 272 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('split_mass_059.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('split_mass_059.png', {
    maxDiffPixels: 960
  });
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
  expect(component.massType).toBe('Generic mass');
  const point1 = { x: 591, y: 271 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('split_mass_059_1.geom', geometryDir);
  const component1 = await getSnaptrudeDS(page, point1);
  expect(component1.type).toBe('Mass');
  expect(component1.massType).toBe('Generic mass');
  const point2 = { x: 655, y: 340 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('split_mass_059_2.geom', geometryDir);
  const component2 = await getSnaptrudeDS(page, point2);
  expect(component2.type).toBe('Mass');
  expect(component2.massType).toBe('Generic mass');
});

/**
 * @id Split mass_060
 * @description After Drawn Beam, Check user able to split the drawn a Beam on the blank canvas, by Selecting a Beam as object type.
 * @steps
 *  1. Create Project
 *  2.Select Object type as beam
 *  3.Draw (Line/ARC) beam
 *  4. Split the beam by selecting the object type as beam
 *   a. split the line beam using draw tool
 *   b. Split the arc beam using Arc tool
 * @expected user should be able to split the drawn beam on the blank canvas, by Selecting beam as object type.
 */
test('Split mass_060', async () => {
  await page.getByRole('img', { name: 'Beam' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 318,
      y: 188
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 307,
      y: 371
    }
  });
  await page.locator('#canvas').press('Enter');
  await page.locator('#canvas').click({
    position: {
      x: 279,
      y: 259
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 365,
      y: 262
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 528,
      y: 263
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 692,
      y: 259
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 582,
      y: 171
    }
  });
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 612,
      y: 190
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 614,
      y: 130
    }
  });
  await page.locator('#canvas').press('Enter');
  const point = { x: 317, y: 210 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('split_mass_060.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('split_mass_060.png', {
    maxDiffPixels: 960
  });
  const component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
  expect(component.massType).toBe('Beam');
  const point1 = { x: 566, y: 172 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('split_mass_060_1.geom', geometryDir);
  const component1 = await getSnaptrudeDS(page, point1);
  expect(component1.type).toBe('Mass');
  expect(component1.massType).toBe('Beam');
});

/**
 * @id Split mass_061
 * @description After Drawn Wall, Check user able to split the drawn a Wall on the blank canvas, by Selecting a Wall as object type.
 * @steps
 *  1. Create Project
 *  2.Select Object type as Wall
 *  3.Draw (Line/ARC) Wall
 *  4. Split the Wall by selecting the object type as Wall
 *   a. split the line Wall using draw tool
 *   b. Split the arc Wall using Arc tool
 * @expected user should be able to split the drawn Wall on the blank canvas, by Selecting Wall as object type.
 */
test('Split mass_061', async () => {
  await page.getByText('Wall').click();
  await page.locator('#canvas').click({
    position: {
      x: 290,
      y: 197
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 275,
      y: 387
    }
  });
  await page.locator('#canvas').press('Enter');
  await page.locator('#canvas').click({
    position: {
      x: 268,
      y: 276
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 311,
      y: 270
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 436,
      y: 224
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 546,
      y: 229
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 496,
      y: 170
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 434,
      y: 230
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 433,
      y: 323
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 499,
      y: 151
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 492,
      y: 196
    }
  });
  const point = { x: 290, y: 237 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('split_mass_061.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('split_mass_061.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Wall');
  const point1 = { x: 451, y: 183 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('split_mass_061_1.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Wall');
});

/**
 * @id Split mass_062
 * @description Check user able to split the drawn (Line/Arc) mass by entering numerical input value and pressing enter key
 * @steps
 *  1 Create project
 *  2 Click design tab
 *  3. Draw (Line/Arc)Mass
 *  4. Split the mass by entering numerical input value +Enter Key
 *   a. split the line Wall using draw tool
 *   b. Split the arc Wall using Arc tool
 * @expected User should be able to split the drawn mass by entering numerical input value and pressing enter key
 */
test('Split mass_062', async () => {
  await page.getByRole('img', { name: 'Space' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 441,
      y: 356
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 445,
      y: 236
    }
  });
  await page.mouse.move(521, 236);
  await page.keyboard.type('9000');
  await page.locator('#canvas').press('Enter');
  await expect(page).toHaveCanvasSnapshot('split_mass_062.png', {
    maxDiffPixels: 960
  });
  await page.locator('#canvas').click({
    position: {
      x: 745,
      y: 357
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 439,
      y: 358
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 179,
      y: 253
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 311,
      y: 249
    }
  });
  await page.mouse.move(239, 204);
  await page.keyboard.type('2000');
  await page.locator('#canvas').press('Enter');
  await expect(page).toHaveCanvasSnapshot('split_mass_062_1.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'pointer' }).click();
});

/**
 * @id Split mass_063
 * @description After changing the Width values in OPP, Check that user able to split the drawn mass 1. Draw Space Mass 2. Draw Arc Mass 3. Draw Circle Mass
 * @steps
 *  1. Create Project
 *  2.Select Draw Line/Arc
 *  3.Select Object Mass Type as space
 *  4.Draw a masses
 *  5.Change the Width value in OPP
 *  6. Split the mass
 *   a. split the line mass using draw tool
 *   b. Split the arc mass using Arc tool
 * @expected After changing the Width values in OPP, user should be able to split the drawn mass
 */
test('Split mass_063', async () => {
  await page.getByRole('img', { name: 'Settings' }).click();
  await page
    .locator('div')
    .filter({ hasText: /^Dimension Snap$/ })
    .getByRole('textbox')
    .click();
  await page
    .locator('div')
    .filter({ hasText: /^Dimension Snap$/ })
    .getByRole('textbox')
    .fill('500.00');
  await page.getByRole('img', { name: 'Settings' }).click();

  await page.locator('#canvas').click({
    position: {
      x: 298,
      y: 366
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 301,
      y: 251
    }
  });
  await page.mouse.move(388, 248);
  await page.keyboard.type('5000');
  await page.locator('#canvas').press('Enter');
  await page.locator('#canvas').click({
    position: {
      x: 458,
      y: 362
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 298,
      y: 366
    }
  });
  await expect(page).toHaveCanvasSnapshot('split_mass_063.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 584,
      y: 277
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 731,
      y: 275
    }
  });
  await page.mouse.move(653, 205);
  await page.keyboard.type('1500');
  await expect(page).toHaveCanvasSnapshot('split_mass_063_1.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'pointer' }).click();
});

/**
 * @id Split mass_063.1
 * @description After changing the Width values in OPP, Check that user able to split the drawn mass 1. Draw Space Mass 2. Draw Arc Mass 3. Draw Circle Mass
 * @steps
 *  1. Create Project
 *  2.Select Draw Line/Arc
 *  3.Select Object Mass Type as space
 *  4.Draw a masses
 *  5.Change the Width value in OPP
 *  6. Split the mass
 *   a. split the line mass using draw tool
 *   b. Split the arc mass using Arc tool
 * @expected After changing the Width values in OPP, user should be able to split the drawn mass
 */
test('Split mass_063.1', async () => {
  test.setTimeout(350000);

  await page.getByRole('img', { name: 'Settings' }).click();
  await page
    .locator('div')
    .filter({ hasText: /^Dimension Snap$/ })
    .getByRole('textbox')
    .click();
  await page
    .locator('div')
    .filter({ hasText: /^Dimension Snap$/ })
    .getByRole('textbox')
    .fill('500.00');
  await page.getByRole('img', { name: 'Settings' }).click();

  await page.locator('#canvas').click({
    position: {
      x: 190,
      y: 296
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 190,
      y: 195
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 343,
      y: 199
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 342,
      y: 295
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 186,
      y: 298
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 275,
      y: 284
    }
  });
  await page
    .locator('div')
    .filter({ hasText: /^Widthmm$/ })
    .getByRole('textbox')
    .fill('5000');
  await page
    .locator('div')
    .filter({ hasText: /^Widthmm$/ })
    .getByRole('textbox')
    .press('Enter');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 257,
      y: 195
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 259,
      y: 294
    }
  });
  await page.locator('#canvas').press('Escape');
  const point = { x: 310, y: 247 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('split_mass_063.1.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  const point1 = { x: 203, y: 251 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('split_mass_063.1_1.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  await setCameraPosition(page, camPos);
  await page.locator('#canvas').press('Escape');
  await expect(page).toHaveCanvasSnapshot('split_mass_063.1.1.png', {
    maxDiffPixels: 960
  });
});
