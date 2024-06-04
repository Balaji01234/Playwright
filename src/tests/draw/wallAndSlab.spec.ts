import { expect, test } from '../../common/fixtures';
import { Page } from '@playwright/test';
import { initProject, configure2DProjectForTestV0 } from '../../common/project';
import { clearCanvas } from '../../common/canvas';
import { createGeometryDir, getGeometry, getSnaptrudeDSType } from '../../common/geometry';

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
 * @id TC_DT_018
 * @description Check user able to draw a wall using wall object type or not
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw line /Draw circle tool 4 Select Object type as Wall 5 Draw wall
 * @expected User should be able to Draw wall by using wall as Object type
 */
test('TC_DT_018', async () => {
  await page.getByRole('img', { name: 'drawCircle' }).click();
  await page.getByRole('img', { name: 'Wall' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 409,
      y: 233
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 451,
      y: 280
    }
  });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  const point = { x: 357, y: 197 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab11' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab11' + '.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Wall');
});

/**
 * @id TC_DT_019
 * @description Check After selecting wall object type Wall type and draw mode dropdown showing or not
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw line / Draw circle tool 4 Select Object type as Wall 5 Draw wall 6 Select wall Draw Mode
 * @expected Wall type and draw mode dropdown should show correctly after selecting wall type
 */
test('TC_DT_019', async () => {
  await page.getByRole('img', { name: 'drawCircle' }).click();
  await page.getByRole('img', { name: 'Wall' }).click();
  await page.getByText('Brick with plaster & paint').click();
  await page.getByText('Exposed concrete').click();
  await page.locator('#canvas').click({
    position: {
      x: 376,
      y: 254
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 455,
      y: 305
    }
  });
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  const point = { x: 297, y: 202 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab12' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab12' + '.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Wall');
});

/**
 * @id TC_DT_026
 * @description Check user able to draw orthogonal line wall using wall object type or not
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw line 4 Select Object type as Wall 6 Draw orthogonal line wall
 * @expected User should be able to draw orthogonal line wall using Object type as wall
 */
test('TC_DT_026', async () => {
  //  await page.getByText('Wall').click();
  await page.locator('#canvas').click({
    position: {
      x: 381,
      y: 201
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 367,
      y: 378
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 558,
      y: 380
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 562,
      y: 294
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 458,
      y: 290
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 457,
      y: 200
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 384,
      y: 198
    }
  });
  const point = { x: 388, y: 346 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab13' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab13' + '.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Wall');
});

/**
 * @id TC_DT_027
 * @description Check user able to draw Angular line wall using object type as wall
 * @steps
 *  1 Enter Url 2 Login 3 Create Project 4 Select Draw Tool 5 Select Object type as wall 6 Draw Angular shape of line mass
 * @expected User should be able to draw Angular shape of line wall using object type as wall
 */
test('TC_DT_027', async () => {
  await page.getByRole('img', { name: 'Wall' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 464,
      y: 268
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 396,
      y: 267
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 437,
      y: 206
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 520,
      y: 214
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 552,
      y: 266
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 555,
      y: 435
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 470,
      y: 418
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 462,
      y: 268
    }
  });
  const point = { x: 465, y: 362 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab14' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab14' + '.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Wall');
});

/**
 * @id TC_DT_055
 * @description Check user able to Draw slab by using slab Object type or not
 * @steps
 *  1 Enter Url 2 Login 3 Create Project 4 Draw slab
 * @expected User should be able to Draw slab, by using object type as Slab
 */
test('TC_DT_055', async () => {
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 373,
      y: 344
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 379,
      y: 272
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 467,
      y: 274
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 468,
      y: 342
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 377,
      y: 343
    }
  });
  const point = { x: 422, y: 299 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab15' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab15' + '.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Roof');
});

/**
 * @id TC_DT_056
 * @description Check user able to draw orthogonal slab, using object type as slab
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw line 4 Select Object type as slab 6 Draw orthogonal slab
 * @expected User should be able to draw orthogonal slab
 */
test('TC_DT_056', async () => {
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 337,
      y: 197
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 318,
      y: 385
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 531,
      y: 392
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 531,
      y: 295
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 408,
      y: 291
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 407,
      y: 198
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 335,
      y: 193
    }
  });
  const point = { x: 413, y: 324 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab16' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab16' + '.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Roof');
});

/**
 * @id TC_DT_057
 * @description Check user able to draw Angular slab , using object type as slab
 * @steps
 *  1 Enter Url 2 Login 3 Create Project 4 Select Draw Tool 5 Select Object type as slab 6 Draw Angular slab
 * @expected User should be able to draw Angular slab
 */
test('TC_DT_057', async () => {
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 396,
      y: 288
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 319,
      y: 282
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 361,
      y: 219
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 449,
      y: 220
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 493,
      y: 285
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 488,
      y: 489
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 391,
      y: 480
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 395,
      y: 289
    }
  });
  const point = { x: 442, y: 354 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab17' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab17' + '.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Roof');
});

/**
 * @id TC_DT_060
 * @description Check user able to Draw multiple-edge slab Arc
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw ARC tool 4 Select Object type as slab 5 Draw multiple edge slab ARC
 * @expected User should be able to draw multiple edge slab Arc
 */
test('TC_DT_060', async () => {
  await page.getByRole('img', { name: 'arc' }).click();
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 263,
      y: 231
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 343,
      y: 230
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 342,
      y: 200
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 423,
      y: 227
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 416,
      y: 208
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 419,
      y: 283
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 443,
      y: 286
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 311,
      y: 286
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 311,
      y: 323
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 262,
      y: 240
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 229,
      y: 258
    }
  });
  const point = { x: 353, y: 267 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab18' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab18' + '.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Roof');
});

/**
 * @id TC_DT_061
 * @description Check user able to Draw Line + Arc slab
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw ARC/Line tool 4 Select Object type as slab 5 Draw Line + ARC slab
 * @expected User should be able to draw Line + Arc slab
 */
test('TC_DT_061', async () => {
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 309,
      y: 203
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 547,
      y: 217
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 549,
      y: 290
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 603,
      y: 250
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 545,
      y: 374
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 574,
      y: 366
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 307,
      y: 372
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 311,
      y: 299
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 259,
      y: 335
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 306,
      y: 206
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 280,
      y: 208
    }
  });
  const point = { x: 410, y: 293 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab19' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab19' + '.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Roof');
});

/**
 * @id TC_DT_062
 * @description Check user able to Draw different shape of line + Arc combination slab
 * @steps
 *  1 Create project 2 Click design tab 3 Select Draw Line/ARC tool 4 Select Object type as slab 5 Draw different shape of Line + ARC combination slab
 * @expected user should be able to Draw different shape of line + Arc combination slab
 */
test('TC_DT_062', async () => {
  await page.getByText('Column').click();
  await page.locator('#canvas').click({
    position: {
      x: 298,
      y: 349
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 299,
      y: 228
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 497,
      y: 241
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 492,
      y: 350
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 297,
      y: 349
    }
  });

  await page.locator('#canvas').click({
    position: {
      x: 414,
      y: 271
    }
  });
  const point = { x: 414, y: 271 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Drawtab20' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('Drawtab20' + '.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
});
