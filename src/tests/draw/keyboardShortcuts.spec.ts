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
 * @id TC_DT_271
 * @description Verify that the user can draw a mass by pressing the shortcut key "A" as Draw tool.
 *
 * @steps
 * 1 Create project
 * 2 Click design tab
 * 3 clicking "A" Draw tool icon
 * 4  Draw Arc Mass
 *
 * @expected User should be able to draw a mass by pressing the shortcut key "A" as Arc tool.
 */
test('TC_DT_271', async () => {
  await page.keyboard.press('A');
  await page.locator('#canvas').click({
    position: {
      x: 414,
      y: 254
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 568,
      y: 258
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 533,
      y: 208
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 573,
      y: 354
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 617,
      y: 346
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 419,
      y: 365
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 429,
      y: 397
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 412,
      y: 254
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 361,
      y: 306
    }
  });
  const point = { x: 498, y: 232 };
  await expect(page).toHaveCanvasSnapshot('TC_DT_271.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('TC_DT_271.geom', geometryDir);
});

/**
 * @id TC_DT_272
 * @description Verify that the user can  Edit/Push/Pull drawn mass by pressing the shortcut key "P" as  Edit/Push/Pull tool.
 *
 * @steps
 * 1 Create project
 * 2 Click design tab
 * 3. Draw Mass
 * 3 clicking "P" as Edit/Push/Pull tool icon
 * 4  Edit/Push/Pull the Drawn mass
 *
 * @expected user should be able to  Edit/Push/Pull drawn mass by pressing the shortcut key "P" as  Edit/Push/Pull
 */
test('TC_DT_272', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 294,
      y: 188
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 296,
      y: 375
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
      x: 447,
      y: 308
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 392,
      y: 313
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 398,
      y: 264
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 353,
      y: 258
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 358,
      y: 213
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 326,
      y: 207
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 326,
      y: 186
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 288,
      y: 192
    }
  });
  await page.keyboard.press('P');
  await page.locator('#canvas').click({
    position: {
      x: 339,
      y: 214
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 338,
      y: 236
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 373,
      y: 263
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 374,
      y: 293
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 450,
      y: 341
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 511,
      y: 338
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 379,
      y: 295
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 379,
      y: 274
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 391,
      y: 292
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 436,
      y: 290
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 354,
      y: 251
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 385,
      y: 260
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 324,
      y: 211
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 351,
      y: 213
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 380,
      y: 377
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 385,
      y: 409
    }
  });
  await expect(page).toHaveCanvasSnapshot('TC_DT_272.png', {
    maxDiffPixels: 960
  });
  const point = { x: 321, y: 311 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('TC_DT_272.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
});

/**
 * @id TC_DT_273
 * @description Verify that the user Copy/ Array a drawn mass by pressing the shortcut key "C" as Copy/ Array tool.
 *
 * @steps
 * 1 Create project
 * 2 Click design tab
 * 3. Draw Mass
 * 3 clicking "C" as Copy/Array tool icon
 * 4  Copy/Array the Drawn mass
 *
 * @expected user should be able to  Copy/Array drawn mass by pressing the shortcut key "C" as  Copy/Array
 */
test('TC_DT_273', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 290,
      y: 227
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 295,
      y: 383
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 492,
      y: 378
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 482,
      y: 233
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 292,
      y: 233
    }
  });
  await page.keyboard.press('C');
  await page.locator('#canvas').click({
    position: {
      x: 418,
      y: 267
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 675,
      y: 266
    }
  });
  const point1 = { x: 337, y: 265 };
  const point2 = { x: 609, y: 258 };
  await expect(page).toHaveCanvasSnapshot('TC_DT_273.png', {
    maxDiffPixels: 960
  });
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('TC_DT_273_1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('TC_DT_273_2.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
});

/**
 * @id TC_DT_274
 * @description Verify that the user can Rotate a drawn mass by pressing the shortcut key "Q" as Rotate tool.
 *
 * @steps
 * 1 Create project
 * 2 Click design tab
 * 3. Draw Mass
 * 3 clicking "Q" as Rotate tool icon
 * 4  Rotate the Drawn mass
 *
 * @expected user should be able to Rotate the drawn mass by pressing the shortcut key "Q" as Rotate tool
 */
test('TC_DT_274', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 304,
      y: 216
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 291,
      y: 397
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 468,
      y: 385
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 309,
      y: 211
    }
  });
  await page.keyboard.press('Q');
  await page.locator('#canvas').click({
    position: {
      x: 344,
      y: 320
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 509,
      y: 318
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 339,
      y: 165
    }
  });
  const point = { x: 389, y: 267 };
  await expect(page).toHaveCanvasSnapshot('TC_DT_274.png', {
    maxDiffPixels: 960
  });
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('TC_DT_274.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
});

/**
 * @id TC_DT_275
 * @description Verify that the user is pressing the esc button, which causes the user to reverse one step back while drawing.
 *
 * @steps
 * 1.Create project
 * 2.Click design tab
 * 3.Draw Mass
 * 4.Click esc key
 *
 * @expected user is pressing the esc button, which causes the user to reverse one step back while drawing.
 */
test('TC_DT_275', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 285,
      y: 223
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 283,
      y: 414
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 517,
      y: 411
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 507,
      y: 219
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 286,
      y: 221
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 516,
      y: 222
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 760,
      y: 223
    }
  });
  await page.locator('#canvas').press('Escape');
  await page.locator('#canvas').press('Escape');
  const point = { x: 352, y: 271 };
  await expect(page).toHaveCanvasSnapshot('TC_DT_275.png', {
    maxDiffPixels: 960
  });
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('TC_DT_275.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
});

/**
* @id TC_DT_276
* @description Drawing the object in 2D, Check user able to see the same visualiser for
1. Space Mass
2. Ceiling
3. Floor
4. Slab
5. Column
6. Mass
*
* @steps
* 1.Create project
* 2.Draw Object in 2D (Ceiling, Floor, Slab, column and mass)
*
*
* @expected User should be able to see the same visualisers for the Object in 2D (Ceiling, Floor, Slab, column and mass)
*/
test('TC_DT_276', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 367,
      y: 242
    }
  });
  await page.mouse.move(366, 245);
  await page.mouse.move(376, 414);
  await expect(page).toHaveCanvasSnapshot('TC_DT_276_1.png', {
    maxDiffPixels: 960
  });
  await page.locator('#canvas').click({
    position: {
      x: 367,
      y: 401
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 521,
      y: 398
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 516,
      y: 340
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 439,
      y: 346
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 446,
      y: 244
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 366,
      y: 242
    }
  });
  await page.getByRole('img', { name: 'Wall' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 625,
      y: 200
    }
  });
  await page.mouse.move(625, 200);
  await page.mouse.move(791, 197);
  await expect(page).toHaveCanvasSnapshot('TC_DT_276_2.png', {
    maxDiffPixels: 960
  });
  await page.locator('#canvas').click({
    position: {
      x: 791,
      y: 197
    }
  });
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 631,
      y: 270
    }
  });
  await page.mouse.move(631, 270);
  await page.mouse.move(641, 423);
  await expect(page).toHaveCanvasSnapshot('TC_DT_276_3.png', {
    maxDiffPixels: 960
  });
  await page.locator('#canvas').click({
    position: {
      x: 641,
      y: 423
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 798,
      y: 412
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 793,
      y: 269
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 629,
      y: 278
    }
  });
  await page.getByRole('img', { name: 'Column' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 139,
      y: 162
    }
  });
  await page.mouse.move(139, 162);
  await page.mouse.move(138, 293);
  await expect(page).toHaveCanvasSnapshot('TC_DT_276_4.png', {
    maxDiffPixels: 960
  });
  await page.locator('#canvas').click({
    position: {
      x: 138,
      y: 293
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 246,
      y: 285
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 242,
      y: 227
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 299,
      y: 222
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 295,
      y: 158
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 140,
      y: 172
    }
  });
  await page.getByRole('img', { name: 'Ceiling' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 135,
      y: 362
    }
  });
  await page.mouse.move(135, 362);
  await page.mouse.move(125, 482);
  await expect(page).toHaveCanvasSnapshot('TC_DT_276_5.png', {
    maxDiffPixels: 960
  });
  await page.locator('#canvas').click({
    position: {
      x: 125,
      y: 482
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 273,
      y: 471
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 161,
      y: 426
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 165,
      y: 366
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 131,
      y: 366
    }
  });
  await page.getByRole('img', { name: 'Floor' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 405,
      y: 461
    }
  });
  await page.mouse.move(405, 461);
  await page.mouse.move(553, 475);
  await expect(page).toHaveCanvasSnapshot('TC_DT_276_6.png', {
    maxDiffPixels: 960
  });
  await page.locator('#canvas').click({
    position: {
      x: 553,
      y: 475
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 547,
      y: 563
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 400,
      y: 558
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 406,
      y: 463
    }
  });
  await page.getByRole('img', { name: 'Mass' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 700,
      y: 459
    }
  });
  await page.mouse.move(700, 459);
  await page.mouse.move(861, 478);
  await expect(page).toHaveCanvasSnapshot('TC_DT_276_7.png', {
    maxDiffPixels: 960
  });
  await page.locator('#canvas').click({
    position: {
      x: 861,
      y: 478
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 853,
      y: 562
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 704,
      y: 463
    }
  });
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
* @id TC_DT_277
* @description Drawing the object in 2D, Check user able to see the same visualiser for
1. Wall
2. Beam
*
* @steps
* 1.Create project
* 2.Draw Object in 2D (Wall and Beam)
*
*
* @expected User should be able to see the same visualisers for the Object in 2D (Wall and Beam)
*/
test('TC_DT_277', async () => {
  await page.getByRole('img', { name: 'Wall' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 215,
      y: 188
    }
  });
  await page.mouse.move(215, 188);
  await page.mouse.move(379, 201);
  await expect(page).toHaveCanvasSnapshot('TC_DT_277_1.png', {
    maxDiffPixels: 960
  });
  await page.locator('#canvas').click({
    position: {
      x: 379,
      y: 201
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 369,
      y: 317
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 212,
      y: 316
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 220,
      y: 192
    }
  });
  await page.getByRole('img', { name: 'Beam' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 615,
      y: 185
    }
  });
  await page.mouse.move(615, 185);
  await page.mouse.move(792, 204);
  await expect(page).toHaveCanvasSnapshot('TC_DT_277_2.png', {
    maxDiffPixels: 960
  });
  await page.locator('#canvas').click({
    position: {
      x: 792,
      y: 204
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 797,
      y: 316
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 620,
      y: 319
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 614,
      y: 185
    }
  });
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
* @id TC_DT_278
* @description Drawing the wall in 2D, Check user able to see the visualisers for all modes of draw walls
1. Centere Wall (Reference line in middle)
2. External Wall (Reference line at top)
3. Internal Wall (Reference line at bottom )
4. Free- Form Wall
*
* @steps
* 1.Create project
* 2.Draw Wall in 2D (All Modes of draw wall)
*
*
* @expected User should be able to see the visualisers for all modes of draw walls
*/
test('TC_DT_278', async () => {
  await page.getByRole('img', { name: 'Wall' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 443,
      y: 252
    }
  });
  await page.mouse.move(443, 252);
  await page.mouse.move(422, 419);
  await expect(page).toHaveCanvasSnapshot('TC_DT_278_1.png', {
    maxDiffPixels: 960
  });
  await page.locator('#canvas').click({
    position: {
      x: 422,
      y: 419
    }
  });
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'External' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 544,
      y: 190
    }
  });
  await page.mouse.move(544, 190);
  await page.mouse.move(705, 201);
  await expect(page).toHaveCanvasSnapshot('TC_DT_278_2.png', {
    maxDiffPixels: 960
  });
  await page.locator('#canvas').click({
    position: {
      x: 705,
      y: 201
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 708,
      y: 263
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 541,
      y: 259
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 542,
      y: 193
    }
  });
  await page.getByRole('img', { name: 'Internal' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 544,
      y: 339
    }
  });
  await page.mouse.move(544, 339);
  await page.mouse.move(553, 463);
  await expect(page).toHaveCanvasSnapshot('TC_DT_278_3.png', {
    maxDiffPixels: 960
  });
  await page.locator('#canvas').click({
    position: {
      x: 553,
      y: 463
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 633,
      y: 460
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 630,
      y: 343
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 540,
      y: 340
    }
  });
  await page.getByRole('img', { name: 'Free Form' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 716,
      y: 333
    }
  });
  await page.mouse.move(716, 333);
  await page.mouse.move(704, 456);
  await expect(page).toHaveCanvasSnapshot('TC_DT_278_4.png', {
    maxDiffPixels: 960
  });
  await page.locator('#canvas').click({
    position: {
      x: 704,
      y: 456
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 799,
      y: 455
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 794,
      y: 392
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 748,
      y: 391
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 742,
      y: 330
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 718,
      y: 330
    }
  });
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
 * @id TC_DT_279
 * @description Drawing the Circular bim objects in 2D, Check user able to see the same visualiser for circular type of object
 *
 * @steps
 * 1.Create project
 * 2.Draw circular Object in 2D (Type of object)
 *
 *
 * @expected User should be able to see the same visualisers for the Object in 2D (Wall and Beam)
 */
test('TC_DT_279', async () => {
  await page.getByRole('img', { name: 'drawCircle' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 505,
      y: 267
    }
  });
  await page.mouse.move(505, 267);
  await page.mouse.move(536, 320);
  await expect(page).toHaveCanvasSnapshot('TC_DT_279_1.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Wall' }).click();
  await page.locator('#canvas').press('Escape');
  await page.locator('#canvas').click({
    position: {
      x: 543,
      y: 304
    }
  });
  await page.mouse.move(544, 303);
  await page.mouse.move(573, 355);
  await expect(page).toHaveCanvasSnapshot('TC_DT_279_2.png', {
    maxDiffPixels: 960
  });
  await page.locator('#canvas').press('Escape');
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 536,
      y: 315
    }
  });
  await page.mouse.move(536, 314);
  await page.mouse.move(594, 395);
  await expect(page).toHaveCanvasSnapshot('TC_DT_279_3.png', {
    maxDiffPixels: 960
  });
  await page.locator('#canvas').press('Escape');
  await page.getByRole('img', { name: 'Column' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 489,
      y: 266
    }
  });
  await page.mouse.move(488, 266);
  await page.mouse.move(519, 314);
  await expect(page).toHaveCanvasSnapshot('TC_DT_279_4.png', {
    maxDiffPixels: 960
  });
  await page.locator('#canvas').press('Escape');
  await page.getByRole('img', { name: 'Beam' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 504,
      y: 306
    }
  });
  await page.mouse.move(504, 306);
  await page.mouse.move(525, 383);
  await expect(page).toHaveCanvasSnapshot('TC_DT_279_5.png', {
    maxDiffPixels: 960
  });
  await page.locator('#canvas').press('Escape');
  await page.getByRole('img', { name: 'Ceiling' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 517,
      y: 274
    }
  });
  await page.mouse.move(517, 274);
  await page.mouse.move(520, 329);
  await expect(page).toHaveCanvasSnapshot('TC_DT_279_6.png', {
    maxDiffPixels: 960
  });
  await page.locator('#canvas').press('Escape');
  await page.getByRole('img', { name: 'Floor' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 577,
      y: 276
    }
  });
  await page.mouse.move(577, 276);
  await page.mouse.move(606, 346);
  await expect(page).toHaveCanvasSnapshot('TC_DT_279_7.png', {
    maxDiffPixels: 960
  });
  await page.locator('#canvas').press('Escape');
  await page.getByRole('img', { name: 'Mass' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 500,
      y: 292
    }
  });
  await page.mouse.move(501, 291);
  await page.mouse.move(521, 348);
  await expect(page).toHaveCanvasSnapshot('TC_DT_279_8.png', {
    maxDiffPixels: 960
  });
});

/**
* @id TC_DT_280
* @description Check user able to draw a space mass visualizer that displays the object's default height and thickness in 3D
1. Space (Line, Arc) Mass
2. Ceiling
3. Floor
4. Slab
5. Column
6. Mass
*
* @steps
* 1.Create project
* 2.Draw Object in 3D (Space, Ceiling, Floor, Slab, column and mass)
*
*
* @expected The user should be able to draw a space mass visualizer that displays the object's default height and thickness in 3D (ceiling, floor, slab, column, and mass).
*/
test('TC_DT_280', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.getByRole('img', { name: 'Space' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 433,
      y: 459
    }
  });
  await page.mouse.move(433, 459);
  await page.mouse.move(577, 418);
  await expect(page).toHaveCanvasSnapshot('TC_DT_280_1.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 432,
      y: 500
    }
  });
  await page.mouse.move(432, 500);
  await page.mouse.move(553, 461);
  await expect(page).toHaveCanvasSnapshot('TC_DT_280_2.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Column' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 420,
      y: 504
    }
  });
  await page.mouse.move(420, 502);
  await page.mouse.move(593, 438);
  await expect(page).toHaveCanvasSnapshot('TC_DT_280_3.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Beam' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 341,
      y: 499
    }
  });
  await page.mouse.move(341, 499);
  await page.mouse.move(532, 449);
  await expect(page).toHaveCanvasSnapshot('TC_DT_280_4.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Ceiling' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 355,
      y: 491
    }
  });
  await page.mouse.move(357, 489);
  await page.mouse.move(514, 430);
  await expect(page).toHaveCanvasSnapshot('TC_DT_280_5.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Floor' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 366,
      y: 497
    }
  });
  await page.mouse.move(366, 497);
  await page.mouse.move(566, 422);
  await expect(page).toHaveCanvasSnapshot('TC_DT_280_6.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Mass' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 400,
      y: 526
    }
  });
  await page.mouse.move(400, 526);
  await page.mouse.move(559, 473);
  await expect(page).toHaveCanvasSnapshot('TC_DT_280_7.png', {
    maxDiffPixels: 960
  });
});
