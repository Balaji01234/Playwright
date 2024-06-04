import { expect, test } from '../../common/fixtures';
import { Page } from '@playwright/test';
import { initProject, configure2DProjectForTestV0 } from '../../common/project';
import { clearCanvas } from '../../common/canvas';
import {
  createGeometryDir,
  getGeometry,
  getSnaptrudeDS,
  getSnaptrudeDSType
} from '../../common/geometry';
import { setCameraPosition } from '../../common/camera';

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
 * @id Split mass_064
 * @description After changing the Length values in OPP, Check that user able to split the drawn mass 1. Draw Space Mass 2. Draw Arc Mass 3. Draw Circle Mass
 *
 * @steps
 * 1.Create Project
 * 2.Select Draw Line/Arc tool
 * 3.Select Object  Mass Type as space
 * 4.Draw a masses
 * 5.Change the Length value in OPP
 * 6.Split the mass
 * a.split the line mass using draw tool
 * b.Split he Arc mass using Arc tool
 *
 * @expected After changing the Length values in OPP, user should be able to split the drawn mass
 */
test('Split mass_064', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 279,
      y: 343
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 270,
      y: 222
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 459,
      y: 223
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 457,
      y: 338
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 278,
      y: 342
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 393,
      y: 244
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
    .fill('5000');
  await page
    .locator('div')
    .filter({ hasText: /^Lengthmm$/ })
    .getByRole('textbox')
    .press('Enter');
  await page.locator('body').press('Escape');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 365,
      y: 196
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 372,
      y: 373
    }
  });
  const point = { x: 439, y: 295 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('split_mass_064.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('split_mass_064.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  const point1 = { x: 336, y: 282 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('split_mass_064_1.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
});

/**
   * @id Split mass_065
   * @description After changing the height values in OPP, Check that user able to split the drawn mass
   1. Draw Space Mass
   2. Draw Arc Mass
   3. Draw Circle Mass
   *
   * @steps
   *1. Create Project
   *2.Select Draw Line/Arc
   *3.Select Object  Mass Type as space
   *4.Draw a masses
   *5.Change the height value in OPP
   *6.Split the mass
   *a.split the line mass using draw tool
   *b.Split he Arc mass using Arc tool
   *
   * @expected After changing the height values in OPP, user should be able to split the drawn mass
   */
test('Split mass_065', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 210,
      y: 361
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 215,
      y: 252
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 318,
      y: 257
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 318,
      y: 272
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 387,
      y: 273
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 395,
      y: 360
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 212,
      y: 363
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 370,
      y: 344
    }
  });
  await page
    .locator('div')
    .filter({ hasText: /^Heightmm$/ })
    .getByRole('textbox')
    .dblclick();
  await page
    .locator('div')
    .filter({ hasText: /^Heightmm$/ })
    .getByRole('textbox')
    .fill('5000');
  await page
    .locator('div')
    .filter({ hasText: /^Heightmm$/ })
    .getByRole('textbox')
    .press('Enter');
  await page.locator('body').press('Escape');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 319,
      y: 272
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 323,
      y: 364
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 577,
      y: 245
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 691,
      y: 249
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 635,
      y: 190
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 739,
      y: 301
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 758,
      y: 280
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 663,
      y: 337
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 675,
      y: 351
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 597,
      y: 307
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 591,
      y: 323
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 578,
      y: 250
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 553,
      y: 261
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 693,
      y: 309
    }
  });
  await page
    .locator('div')
    .filter({ hasText: /^Heightmm$/ })
    .getByRole('textbox')
    .dblclick();
  await page
    .locator('div')
    .filter({ hasText: /^Heightmm$/ })
    .getByRole('textbox')
    .fill('5000');
  await page
    .locator('div')
    .filter({ hasText: /^Heightmm$/ })
    .getByRole('textbox')
    .press('Enter');
  await page.locator('body').press('Escape');
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 593,
      y: 317
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 653,
      y: 274
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 652,
      y: 288
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 742,
      y: 294
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 706,
      y: 262
    }
  });
  const point = { x: 358, y: 350 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('split_mass_065.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('split_mass_065.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  const point1 = { x: 636, y: 309 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('split_mass_065_1.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
});

/**
   * @id Split mass_066
   * @description After changing the label name in OPP, Check that user able to split the drawn mass
   1. Draw Space Mass
   2. Draw Arc Mass
   3. Draw Circle Mass
   *
   * @steps
   *1. Create Project
   *2.Select Draw Line/Arc/Circle tool
   *3.Select Object  Mass Type as space
   *4.Draw a masses
   *5.Change the label name  in OPP
   *6.  Split the mass
   *a. split the line mass using draw tool
   *b. Split he Arc mass using Arc tool
   *
   * @expected After changing the label name in OPP, user should be able to split the drawn mass
   */
test('Split mass_066', async () => {
  const camPos = {
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
  };
  await setCameraPosition(page, camPos);
  await page.locator('#canvas').click({
    position: {
      x: 209,
      y: 362
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 204,
      y: 231
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 342,
      y: 242
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 344,
      y: 207
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 462,
      y: 210
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 463,
      y: 356
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 207,
      y: 362
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 405,
      y: 320
    }
  });
  await page
    .locator('div')
    .filter({ hasText: /^Label$/ })
    .getByRole('textbox')
    .dblclick();
  await page
    .locator('div')
    .filter({ hasText: /^Label$/ })
    .getByRole('textbox')
    .fill('Mass');
  await page
    .locator('div')
    .filter({ hasText: /^Label$/ })
    .getByRole('textbox')
    .press('Enter');
  await page.locator('body').press('Escape');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 341,
      y: 234
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 345,
      y: 361
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 610,
      y: 258
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 724,
      y: 247
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 663,
      y: 197
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 742,
      y: 353
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 776,
      y: 331
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 681,
      y: 367
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 688,
      y: 403
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 558,
      y: 348
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 571,
      y: 383
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 579,
      y: 291
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 564,
      y: 291
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 609,
      y: 260
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 569,
      y: 243
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 649,
      y: 319
    }
  });
  await page
    .locator('div')
    .filter({ hasText: /^Label$/ })
    .getByRole('textbox')
    .dblclick();
  await page
    .locator('div')
    .filter({ hasText: /^Label$/ })
    .getByRole('textbox')
    .fill('Mass');
  await page
    .locator('div')
    .filter({ hasText: /^Label$/ })
    .getByRole('textbox')
    .press('Enter');
  await page.locator('body').press('Escape');
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 577,
      y: 292
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 649,
      y: 300
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 624,
      y: 281
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 682,
      y: 355
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 699,
      y: 325
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 691,
      y: 264
    }
  });
  await page
    .locator('div')
    .filter({ hasText: /^Label$/ })
    .getByRole('textbox')
    .dblclick();
  await page
    .locator('div')
    .filter({ hasText: /^Label$/ })
    .getByRole('textbox')
    .fill('Slab');
  await page
    .locator('div')
    .filter({ hasText: /^Label$/ })
    .getByRole('textbox')
    .press('Enter');
  await page.locator('body').press('Escape');
  const point = { x: 306, y: 287 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('split_mass_066.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('split_mass_066.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  const point1 = { x: 687, y: 256 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('split_mass_066_1.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  const point2 = { x: 448, y: 244 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('split_mass_066_2.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point2)).toBe('Mass');
});

/**
 * @id Split mass_067
 * @description After splitting the mass in2D/3D, check by Double clicking on the mass that the user can update the label name on the splitted mass
 *1. Draw Space Mass
 *2. Draw Arc Mass
 *3. Draw Circle Mass
 *
 * @steps
 *1. Create Project
 *2.Select Draw Line/Arc
 *3.Select Object  Mass Type as space
 *4.Draw a masses
 *5.  Split the mass
 *a. split the line mass using draw tool
 *b. Split he Arc mass using Arc tool
 *6.Change the label name on canvas
 *by double clicking on the splittedmass
 *
 * @expected After splitting the mass in2D/3D, by Double clicking on the mass that the user should be able toupdate the label name on the splitted mass
 */
test('Split mass_067', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 258,
      y: 289
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 263,
      y: 182
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 411,
      y: 180
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 407,
      y: 288
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 265,
      y: 287
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 331,
      y: 180
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 343,
      y: 288
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 522,
      y: 211
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 626,
      y: 203
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 563,
      y: 157
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 611,
      y: 311
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 659,
      y: 293
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 543,
      y: 287
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 536,
      y: 296
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 520,
      y: 212
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 491,
      y: 216
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 546,
      y: 284
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 586,
      y: 247
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 575,
      y: 248
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 624,
      y: 210
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 606,
      y: 250
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 583,
      y: 173
    }
  });
  await page.locator('#canvas').dblclick({
    position: {
      x: 583,
      y: 173
    }
  });
  await page.waitForTimeout(500);
  await page.keyboard.type('bal');
  await page.locator('#canvas').press('Enter');
  await page.locator('#canvas').dblclick({
    position: {
      x: 363,
      y: 263
    }
  });
  await page.waitForTimeout(100);
  await page.keyboard.type('bal');
  await page.locator('#canvas').press('Enter');
  await page.locator('#canvas').press('Escape');
  await expect(page).toHaveCanvasSnapshot('split_mass_067.png', {
    maxDiffPixels: 960
  });
  const point1 = { x: 555, y: 205 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('split_mass_067.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  const point2 = { x: 305, y: 245 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('split_mass_067_1.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point2)).toBe('Mass');
});

/**
 * @id Split mass_068
 * @description After Flip(X) the mas in 2D/3D, Check that user able to split the drawn mass
 *1. Draw Space Mass
 *2. Draw Arc Mass
 *3. Draw Circle Mass
 *
 * @steps
 *1. Create Project
 *2.Select Draw Line/Arc/Circle tool
 *3.Select Object  Mass Type as space
 *4.Draw a masses
 *5.Flip (x)  drawn mass in 2D/3D
 *6.  Split the mass
 *a. split the line mass using draw tool
 *b. Split he Arc mass using Arc tool
 *
 * @expected After Flip(X) the mas in 2D/3D, user should be able to split the drawn mass
 */
test('splitMass_068', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 193,
      y: 351
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 189,
      y: 230
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 286,
      y: 238
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 286,
      y: 262
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 369,
      y: 257
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 367,
      y: 346
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 197,
      y: 348
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 287,
      y: 258
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 289,
      y: 349
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 450,
      y: 201
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 538,
      y: 195
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 490,
      y: 156
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 529,
      y: 266
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 563,
      y: 246
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 474,
      y: 280
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 499,
      y: 306
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 427,
      y: 249
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 432,
      y: 271
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 450,
      y: 205
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 415,
      y: 205
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 431,
      y: 251
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 490,
      y: 233
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 465,
      y: 249
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 539,
      y: 199
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 515,
      y: 201
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.getByRole('img', { name: 'drawCircle' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 460,
      y: 414
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 509,
      y: 462
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 390,
      y: 412
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 536,
      y: 411
    }
  });
  const point = { x: 270, y: 289 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('splitmass_068.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('splitmass_068.png', {
    maxDiffPixels: 960
  });
  const point1 = { x: 461, y: 227 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('splitmass_068_1.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'flipX', exact: true }).click();
  await page.locator("//img[@alt='delete_icon']").click();
  await page.locator("//img[@alt='Toggle 2d<->3d']").click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 536,
      y: 431
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 568,
      y: 487
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 657,
      y: 451
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 613,
      y: 406
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 540,
      y: 429
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 572,
      y: 343
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 618,
      y: 402
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 418,
      y: 462
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 485,
      y: 450
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 446,
      y: 435
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 505,
      y: 495
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 511,
      y: 457
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 442,
      y: 487
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 469,
      y: 503
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 413,
      y: 460
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 415,
      y: 476
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 403,
      y: 392
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 473,
      y: 374
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 444,
      y: 400
    }
  });
  await page.getByRole('img', { name: 'drawCircle' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 617,
      y: 549
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 642,
      y: 581
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 600,
      y: 447
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 628,
      y: 512
    }
  });
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'flipX', exact: true }).click();
  await page.locator("//img[@alt='Toggle 2d<->3d']").click();
});

/**
 * @id Split mass_069
 * @description After Flip(Z) the mas in 2D/3D, Check that user able to split the drawn mass
 *1. Draw Space Mass
 *2. Draw Arc Mass
 *3. Draw Circle Mass
 *
 * @steps
 *1. Create Project
 *2.Select Draw Line/Arc
 *3.Select Object  Mass Type as space
 *4.Draw a masses
 *5.Flip (Z)  drawn mass in 2D/3D
 *6.  Split the mass
 *a. split the line mass using draw tool
 *b. Split he Arc mass using Arc tool
 *
 * @expected After Flip(Z) the mas in 2D/3D, user should be able to split the drawn mass
 */
test('splitMass_069', async () => {
  test.setTimeout(350000);
  await page.locator('#canvas').click({
    position: {
      x: 160,
      y: 281
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 157,
      y: 193
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 229,
      y: 195
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 231,
      y: 169
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 324,
      y: 173
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 328,
      y: 283
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 163,
      y: 281
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 231,
      y: 192
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 226,
      y: 282
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 395,
      y: 180
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 486,
      y: 180
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 436,
      y: 141
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 491,
      y: 252
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 539,
      y: 211
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 432,
      y: 290
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 475,
      y: 289
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 390,
      y: 240
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 398,
      y: 282
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 399,
      y: 179
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 362,
      y: 194
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 389,
      y: 240
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 449,
      y: 216
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 436,
      y: 238
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 490,
      y: 180
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 451,
      y: 196
    }
  });
  await page.getByRole('img', { name: 'drawCircle' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 299,
      y: 354
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 338,
      y: 394
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 244,
      y: 352
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 357,
      y: 351
    }
  });
  const point = { x: 275, y: 239 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('splitmass_069.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('splitmass_069.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  const point1 = { x: 433, y: 195 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('splitmass_069_1.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  const point2 = { x: 471, y: 251 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('splitmass_069_2.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point2)).toBe('Mass');
  await page.locator('body').press('Control+a');
  await page.locator("//img[@alt='flipXY']").click();
  await page.locator("//img[@alt='delete_icon']").click();
  await page.locator("//img[@alt='Toggle 2d<->3d']").click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 522,
      y: 434
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 581,
      y: 514
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 688,
      y: 469
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 625,
      y: 400
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 522,
      y: 432
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 548,
      y: 404
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 655,
      y: 361
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 329,
      y: 508
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 427,
      y: 485
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 367,
      y: 464
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 440,
      y: 530
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 451,
      y: 503
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 357,
      y: 545
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 403,
      y: 574
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 324,
      y: 505
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 294,
      y: 536
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 312,
      y: 432
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 433,
      y: 463
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 363,
      y: 460
    }
  });
  await page.getByRole('img', { name: 'drawCircle' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 651,
      y: 550
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 673,
      y: 576
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 612,
      y: 488
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 696,
      y: 464
    }
  });
  await page.locator('body').press('Control+a');
  await page.locator("//img[@alt='flipXY']").click();
  await page.locator("//img[@alt='Toggle 2d<->3d']").click();
});

/**
 * @id Split mass_070
 * @description After move the mass in 2D/3D, Check that user able to split the drawn mass
 *1. Draw Space Mass
 *2. Draw Arc Mass
 *3. Draw Circle Mass
 *
 * @steps
 *1. Create Project
 *2.Select Draw Line/Arctool
 *3.Select Object  Mass Type as space
 *4.Draw a masses
 *5.move the  drawn mass in 2D/3D
 *6. Split the mass
 *a. split the line mass using draw tool
 *b. Split he Arc mass using Arc tool
 *
 * @expected After move the mas in 2D/3D, user should be able to split the drawn mass
 */
test('splitMass_070', async () => {
  test.setTimeout(350000);
  await page.locator('#canvas').click({
    position: {
      x: 186,
      y: 279
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 182,
      y: 175
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 286,
      y: 179
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 289,
      y: 275
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 194,
      y: 278
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 371,
      y: 187
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 463,
      y: 185
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 418,
      y: 156
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 471,
      y: 270
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 495,
      y: 234
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 404,
      y: 294
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 442,
      y: 310
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 358,
      y: 253
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 361,
      y: 287
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 372,
      y: 192
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 336,
      y: 212
    }
  });
  await page.getByRole('img', { name: 'drawCircle' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 261,
      y: 324
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 282,
      y: 355
    }
  });
  await page.getByRole('img', { name: 'drawCircle' }).click();
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'move', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 261,
      y: 210
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 306,
      y: 288
    }
  });
  await page.getByRole('img', { name: 'move', exact: true }).click();
  await page.locator('body').press('Escape');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 232,
      y: 304
    }
  });
  await page.locator('#canvas').press('Escape');
  await page.locator('#canvas').click({
    position: {
      x: 227,
      y: 303
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 330,
      y: 301
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 414,
      y: 265
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 472,
      y: 314
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 443,
      y: 310
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 512,
      y: 346
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 515,
      y: 332
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 270,
      y: 404
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 345,
      y: 404
    }
  });
  const point = { x: 294, y: 281 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('splitmass_070.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('splitmass_070.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  const point1 = { x: 485, y: 281 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('splitmass_070_1.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  const point2 = { x: 434, y: 353 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('splitmass_070_2.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point2)).toBe('Mass');
  await page.locator('body').press('Control+a');
  await page.locator("//img[@alt='delete_icon']").click();
  await page.locator("//img[@alt='Toggle 2d<->3d']").click();
  await page.locator('#canvas').click({
    position: {
      x: 541,
      y: 419
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 580,
      y: 474
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 666,
      y: 436
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 606,
      y: 383
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 541,
      y: 413
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 398,
      y: 469
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 466,
      y: 454
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 424,
      y: 441
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 497,
      y: 497
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 514,
      y: 471
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 406,
      y: 490
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 445,
      y: 516
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 399,
      y: 468
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 384,
      y: 471
    }
  });
  await page.getByRole('img', { name: 'drawCircle' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 551,
      y: 519
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 570,
      y: 553
    }
  });
  await page.getByRole('img', { name: 'drawCircle' }).click();
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'move' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 430,
      y: 393
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 421,
      y: 424
    }
  });
  await page.getByRole('img', { name: 'move' }).click();
  await page.locator('body').press('Escape');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 573,
      y: 360
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 622,
      y: 419
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 488,
      y: 498
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 600,
      y: 471
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 376,
      y: 430
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 383,
      y: 454
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 406,
      y: 439
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator("//img[@alt='Toggle 2d<->3d']").click();
});

/**
 * @id Split mass_071
 * @description After adding the vertex the mass in 2D/3D, Check that user able to split the drawn mass
 *1. Draw Space Mass
 *2. Draw Arc Mass
 *3. Draw Circle Mass
 *
 * @steps
 *1. Create Project
 *2.Select Draw Line/Arctool
 *3.Select Object  Mass Type as space
 *4.Draw a masses
 *5.adding the vertex the  drawn mass in 2D/3D
 *6.  Split the mass
 *a. split the line mass using draw tool
 *b. Split he Arc mass using Arc tool
 *
 * @expected After adding the vertex the mas in 2D/3D, user should be able to split the drawn mass
 */
test('splitMass_071', async () => {
  test.setTimeout(350000);
  await page.locator('#canvas').click({
    position: {
      x: 189,
      y: 272
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 194,
      y: 168
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 315,
      y: 164
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 315,
      y: 275
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 188,
      y: 270
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 414,
      y: 187
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 507,
      y: 189
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 464,
      y: 146
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 517,
      y: 276
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 546,
      y: 234
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 438,
      y: 310
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 478,
      y: 318
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 379,
      y: 247
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 371,
      y: 288
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 415,
      y: 185
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 359,
      y: 201
    }
  });
  await page.getByRole('img', { name: 'drawCircle' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 254,
      y: 391
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 312,
      y: 432
    }
  });
  await page.getByRole('img', { name: 'addLayer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 243,
      y: 168
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 252,
      y: 274
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 455,
      y: 239
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 460,
      y: 149
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 438,
      y: 309
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 361,
      y: 200
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 384,
      y: 301
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 546,
      y: 228
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 264,
      y: 223
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 249,
      y: 167
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 247,
      y: 274
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 183,
      y: 399
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 329,
      y: 398
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 373,
      y: 247
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 461,
      y: 210
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 450,
      y: 246
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 468,
      y: 155
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 454,
      y: 164
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  const point = { x: 214, y: 216 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('splitmass_071.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('splitmass_071.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  const point1 = { x: 494, y: 267 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('splitmass_071_1.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  const point2 = { x: 283, y: 227 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('splitmass_071_2.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point2)).toBe('Mass');
});

/**
 * @id Split mass_072
 * @description After removing the vertex on the mass in 2D/3D, Check that user able to split the drawn mass
 *1. Draw Space Mass
 *2. Draw Arc Mass
 *
 * @steps
 *1. Create Project
 *2.Select Draw Line/Arctool
 *3.Select Object  Mass Type as space
 *4.Draw a masses
 *5.removing the vertex the  drawn mass in 2D/3D
 *6.  Split the mass
 *a. split the line mass using draw tool
 *b. Split he Arc mass using Arc tool
 *
 * @expected After removing the vertex the mas in 2D/3D, user should be able to split the drawn mass
 */
test('splitMass_072', async () => {
  test.setTimeout(450000);
  await page.locator('#canvas').click({
    position: {
      x: 187,
      y: 305
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 181,
      y: 198
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 343,
      y: 205
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 346,
      y: 307
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 186,
      y: 303
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 474,
      y: 214
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 574,
      y: 217
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 524,
      y: 162
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 597,
      y: 306
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 630,
      y: 259
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 499,
      y: 319
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 543,
      y: 356
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 468,
      y: 268
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 447,
      y: 301
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 476,
      y: 216
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 436,
      y: 218
    }
  });
  await page.getByRole('img', { name: 'addLayer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 263,
      y: 250
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 266,
      y: 196
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 262,
      y: 304
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 541,
      y: 277
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 522,
      y: 166
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 558,
      y: 351
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 452,
      y: 319
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 623,
      y: 245
    }
  });
  await page.getByRole('img', { name: 'removeLayer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 315,
      y: 216
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 267,
      y: 195
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 265,
      y: 302
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 538,
      y: 251
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 450,
      y: 317
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 621,
      y: 247
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 559,
      y: 351
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 523,
      y: 158
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 270,
      y: 200
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 266,
      y: 301
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 461,
      y: 266
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 532,
      y: 251
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 521,
      y: 268
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 602,
      y: 299
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 590,
      y: 266
    }
  });
  const point = { x: 305, y: 249 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('splitmass_072.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('splitmass_072.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  const point1 = { x: 500, y: 229 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('splitmass_072_1.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  const point2 = { x: 532, y: 311 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('splitmass_072_2.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point2)).toBe('Mass');
});

/**
 * @id Split mass_073
 * @description After rotate the mass in 2D/3D, Check that user able to split the drawn mass
 *1. Draw Space Mass
 *2. Draw Arc Mass
 *
 * @steps
 *1. Create Project
 *2.Select Draw Line/Arctool
 *3.Select Object  Mass Type as space
 *4.Draw a masses
 *5.rotate the  drawn mass in 2D/3D
 *6.  Split the mass
 *a. split the line mass using draw tool
 *b. Split he Arc mass using Arc tool
 *
 * @expected After rotate the mas in 2D/3D, user should be able to split the drawn mass
 */
test('splitMass_073', async () => {
  test.setTimeout(350000);
  await page.locator('#canvas').click({
    position: {
      x: 185,
      y: 363
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 177,
      y: 236
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 346,
      y: 236
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 348,
      y: 357
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 180,
      y: 366
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 488,
      y: 258
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 574,
      y: 252
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 533,
      y: 206
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 600,
      y: 344
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 626,
      y: 301
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 520,
      y: 373
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 569,
      y: 392
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 442,
      y: 311
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 450,
      y: 356
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 485,
      y: 255
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 434,
      y: 255
    }
  });
  await page.getByRole('img', { name: 'rotate' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 232,
      y: 299
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 127,
      y: 296
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 239,
      y: 191
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 528,
      y: 298
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 677,
      y: 291
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 397,
      y: 320
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 167,
      y: 326
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 295,
      y: 323
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 483,
      y: 346
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 540,
      y: 286
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 532,
      y: 319
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 615,
      y: 269
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 561,
      y: 252
    }
  });
  const point = { x: 238, y: 318 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('splitmass_073.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('splitmass_073.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  const point1 = { x: 238, y: 381 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('splitmass_073_1.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  const point2 = { x: 507, y: 260 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('splitmass_073_2.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point2)).toBe('Mass');
  await page.locator('body').press('Control+a');
  await page.locator("//img[@alt='delete_icon']").click();
  await page.locator("//img[@alt='Toggle 2d<->3d']").click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 508,
      y: 431
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 568,
      y: 519
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 666,
      y: 470
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 588,
      y: 393
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 516,
      y: 434
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 258,
      y: 535
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 392,
      y: 505
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 341,
      y: 487
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 428,
      y: 535
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 437,
      y: 517
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 346,
      y: 549
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 354,
      y: 571
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 270,
      y: 544
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 263,
      y: 565
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'rotate' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 564,
      y: 393
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 652,
      y: 519
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 852,
      y: 356
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 512,
      y: 362
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 539,
      y: 421
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 726,
      y: 406
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 809,
      y: 432
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 760,
      y: 435
    }
  });
  await page.locator("//img[@alt='Toggle 2d<->3d']").click();
});
