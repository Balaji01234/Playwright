import { expect, test } from '../../common/fixtures';
import { Page } from '@playwright/test';
import {
  initProject,
  configure2DProjectForTestV0,
  resetProjectWithAutoSaveDisabled
} from '../../common/project';
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

test.afterAll(async () => {
  await page.close();
});

/**
 * @id Autocomplete_0061
 * @description Verify the user is able to autocomplete line (mass/slab) through vertices/edge or not after Edit length.
 *
 * @steps
 * 1.Create project
 *2.Select draw mass/slab
 *3.Draw a line+arc mass/slab
 *4.Undo/redo
 *5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line+arc (mass/slab) through vertices/edge, after undo/redo
 */

test('Autocomplete_0061', async () => {
  test.setTimeout(350000);
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 228,
      y: 259
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 350,
      y: 260
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 289,
      y: 230
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 355,
      y: 351
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 229,
      y: 347
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 228,
      y: 261
    }
  });
  await page.getByRole('img', { name: 'Undo' }).click();
  await page.getByRole('img', { name: 'Redo' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 226,
      y: 256
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 183,
      y: 250
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 187,
      y: 184
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 410,
      y: 181
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 411,
      y: 259
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 351,
      y: 261
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 226,
      y: 316
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 186,
      y: 315
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 185,
      y: 406
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 413,
      y: 402
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 289,
      y: 438
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 417,
      y: 315
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 351,
      y: 312
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 604,
      y: 246
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 726,
      y: 240
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 663,
      y: 218
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 730,
      y: 337
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 603,
      y: 329
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 603,
      y: 249
    }
  });
  await page.locator('.sc-zCnOb > div > .sc-bvZiua').first().click();
  await page.locator('div:nth-child(2) > .sc-bvZiua').first().click();
  await page.locator('#canvas').click({
    position: {
      x: 602,
      y: 247
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 537,
      y: 239
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 539,
      y: 163
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 803,
      y: 163
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 801,
      y: 244
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 724,
      y: 243
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 604,
      y: 303
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 536,
      y: 302
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 545,
      y: 392
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 801,
      y: 389
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 667,
      y: 433
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 795,
      y: 302
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 726,
      y: 302
    }
  });
  await page.getByRole('img', { name: 'Space' }).click();

  await expect(page).toHaveCanvasSnapshot('Autocomplete61.png', {
    maxDiffPixels: 960
  });
  const point = { x: 292, y: 287 };
  const point1 = { x: 298, y: 386 };
  const point3 = { x: 665, y: 283 };
  const point4 = { x: 675, y: 183 };

  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Autocomplete61.geom', geometryDir);
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('Autocomplete61.1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, point3);
  await expect(actualGeometry2).toHaveGeometryV0('Autocomplete61.2.geom', geometryDir);
  const actualGeometry3 = await getGeometry(page, point4);
  await expect(actualGeometry3).toHaveGeometryV0('Autocomplete61.3.geom', geometryDir);

  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point3)).toBe('Roof');
  expect(await getSnaptrudeDSType(page, point4)).toBe('Roof');
});

/**
 * @id Autocomplete_0062
 * @description Verify the user is able to autocomplete line+arc (mass/slab) through vertices/edge or not after delete and undo
 *
 * @steps
 *1.Create project
 *2.Select draw mass/slab
 *3.Draw a line+arc mass/slab
 *4.Delete and Undo
 *5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line+arc (mass/slab) through vertices/edge, after delete and undo
 */

test('Autocomplete_0062', async () => {
  test.setTimeout(350000);

  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 245,
      y: 258
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 382,
      y: 253
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 309,
      y: 224
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 385,
      y: 340
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 248,
      y: 333
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 245,
      y: 261
    }
  });
  await page.keyboard.press('Control+a');

  await page.getByRole('img', { name: 'delete_icon' }).click();
  await page.getByRole('img', { name: 'Undo' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 243,
      y: 256
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 174,
      y: 253
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 180,
      y: 168
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 461,
      y: 164
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 464,
      y: 256
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 381,
      y: 256
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 246,
      y: 299
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 175,
      y: 302
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 181,
      y: 396
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 458,
      y: 392
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 312,
      y: 445
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 455,
      y: 302
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 382,
      y: 300
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 660,
      y: 241
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 782,
      y: 232
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 722,
      y: 203
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 785,
      y: 308
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 659,
      y: 312
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 661,
      y: 243
    }
  });

  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 741,
      y: 254
    }
  });

  await page.getByRole('img', { name: 'delete_icon' }).click();
  await page.getByRole('img', { name: 'Undo' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 741,
      y: 254
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();

  await page.locator('#canvas').click({
    position: {
      x: 659,
      y: 239
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 592,
      y: 244
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 593,
      y: 167
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 863,
      y: 176
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 860,
      y: 248
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 782,
      y: 242
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 659,
      y: 276
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 591,
      y: 276
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 598,
      y: 386
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 861,
      y: 382
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 729,
      y: 419
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 855,
      y: 279
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 782,
      y: 271
    }
  });

  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 697,
      y: 248
    }
  });
  await page.getByRole('img', { name: 'Space' }).click();

  await expect(page).toHaveCanvasSnapshot('Autocomplete62.png', {
    maxDiffPixels: 960
  });
  const point = { x: 312, y: 293 };
  const point1 = { x: 318, y: 374 };
  const point2 = { x: 741, y: 254 };
  const point3 = { x: 811, y: 178 };

  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Autocomplete62.geom', geometryDir);
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('Autocomplete62.1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('Autocomplete62.2.geom', geometryDir);
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('Autocomplete62.3.geom', geometryDir);

  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Roof');
  expect(await getSnaptrudeDSType(page, point3)).toBe('Roof');
});

/**
 * @id Autocomplete_0063
 * @description Verify the user is able to autocomplete line+arc (mass/slab) through vertices/edge or not after hide/unhide
 *
 * @steps
 *1.Create project
 *2.Select draw mass/slab
 *3.Draw a line+arc mass/slab
 *4.hide/unhide
 *5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line+arc (mass/slab) through vertices/edge, after hide/unhide
 */

test('Autocomplete_0063', async () => {
  test.setTimeout(350000);

  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 219,
      y: 225
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 339,
      y: 229
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 278,
      y: 197
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 339,
      y: 313
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 220,
      y: 312
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 219,
      y: 227
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 278,
      y: 249
    }
  });
  await page.getByRole('img', { name: 'Bulb0' }).click();
  await page.getByRole('img', { name: 'Bulb', exact: true }).click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 216,
      y: 224
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 153,
      y: 221
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 158,
      y: 138
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 451,
      y: 150
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 446,
      y: 226
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 343,
      y: 226
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 217,
      y: 268
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 155,
      y: 271
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 150,
      y: 379
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 454,
      y: 365
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 294,
      y: 443
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 460,
      y: 269
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 338,
      y: 266
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 664,
      y: 211
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 784,
      y: 210
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 718,
      y: 172
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 786,
      y: 284
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 665,
      y: 285
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 663,
      y: 211
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 722,
      y: 231
    }
  });
  await page.getByRole('img', { name: 'Bulb0' }).click();
  await page.getByRole('img', { name: 'Bulb', exact: true }).click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 662,
      y: 209
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 599,
      y: 206
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 600,
      y: 146
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 866,
      y: 138
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 867,
      y: 209
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 784,
      y: 209
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 665,
      y: 281
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 597,
      y: 284
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 603,
      y: 369
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 867,
      y: 371
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 727,
      y: 411
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 863,
      y: 287
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 782,
      y: 283
    }
  });
  await page.getByRole('img', { name: 'Space' }).click();

  await expect(page).toHaveCanvasSnapshot('Autocomplete63.png', {
    maxDiffPixels: 960
  });
  const point = { x: 274, y: 258 };
  const point1 = { x: 322, y: 171 };
  const point2 = { x: 697, y: 238 };
  const point3 = { x: 714, y: 338 };

  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Autocomplete63.geom', geometryDir);
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('Autocomplete63.1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('Autocomplete63.2.geom', geometryDir);
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('Autocomplete63.3.geom', geometryDir);

  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Roof');
  expect(await getSnaptrudeDSType(page, point3)).toBe('Roof');
});

/**
 * @id Autocomplete_0064
 * @description Verify the user is able to autocomplete line+arc (mass/slab) through vertices/edge or not after lock the existing mass
 *
 * @steps
 *1..Create project
 *2.Select draw mass/slab
 *3.Draw a line+arc mass/slab
 *4.Lock the existing mass
 *5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line+arc (mass/slab) through vertices/edge, after  lock the existing mass
 */

test('Autocomplete_0064', async () => {
  test.setTimeout(350000);

  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 187,
      y: 240
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 263,
      y: 242
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 223,
      y: 205
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 264,
      y: 313
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 183,
      y: 306
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 187,
      y: 241
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 230,
      y: 254
    }
  });
  await page.getByRole('img', { name: 'Lock', exact: true }).click();
  await page.getByRole('img', { name: 'Unlock' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 226,
      y: 257
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 187,
      y: 236
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 130,
      y: 232
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 134,
      y: 155
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 327,
      y: 165
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 325,
      y: 241
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 262,
      y: 229
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 187,
      y: 274
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 131,
      y: 274
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 133,
      y: 357
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 330,
      y: 351
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 222,
      y: 385
    }
  });
  await page.locator('.sc-gHjxMi > div').first().click();
  await page.locator('#canvas').click({
    position: {
      x: 324,
      y: 278
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 264,
      y: 276
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 518,
      y: 233
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 612,
      y: 232
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 563,
      y: 210
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 609,
      y: 317
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 518,
      y: 312
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 517,
      y: 237
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 573,
      y: 258
    }
  });
  await page.getByRole('img', { name: 'Lock', exact: true }).click();
  await page.getByRole('img', { name: 'Unlock' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 580,
      y: 259
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 516,
      y: 233
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 473,
      y: 235
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 472,
      y: 152
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 687,
      y: 164
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 686,
      y: 235
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 609,
      y: 235
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 518,
      y: 272
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 473,
      y: 270
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 474,
      y: 354
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 680,
      y: 349
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 572,
      y: 385
    }
  });
  await page.locator('.sc-gHjxMi > div').first().click();
  await page.locator('#canvas').click({
    position: {
      x: 682,
      y: 273
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 613,
      y: 274
    }
  });
  await page.getByRole('img', { name: 'Space' }).click();

  await expect(page).toHaveCanvasSnapshot('Autocomplete64.png', {
    maxDiffPixels: 960
  });
  const point = { x: 219, y: 265 };
  const point1 = { x: 216, y: 355 };
  const point2 = { x: 589, y: 260 };
  const point3 = { x: 616, y: 197 };

  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Autocomplete64.geom', geometryDir);
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('Autocomplete64.1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('Autocomplete64.2.geom', geometryDir);
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('Autocomplete64.3.geom', geometryDir);

  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Roof');
  expect(await getSnaptrudeDSType(page, point3)).toBe('Roof');
});

/**
 * @id Autocomplete_0065
 * @description Verify the user is able to autocomplete line+arc (mass/slab) through vertices/edge or not after change the units in PP
 *
 * @steps
 *1.Create project
 *2.Select draw mass/slab
 *3.Draw a line+arc mass/slab
 *4.Change the units in PP
 *5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line+arc (mass/slab) through vertices/edge, after Change the units in PP
 */

test('Autocomplete_0065', async () => {
  test.setTimeout(350000);

  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 209,
      y: 231
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 294,
      y: 233
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 250,
      y: 205
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 295,
      y: 303
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 212,
      y: 301
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 209,
      y: 232
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.getByRole('img', { name: 'Settings' }).click();
  await page
    .locator('div')
    .filter({ hasText: /^UnitsMillimeters$/ })
    .getByRole('img')
    .click();
  await page.getByText('Centimeters').click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 208,
      y: 232
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 158,
      y: 228
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 160,
      y: 154
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 367,
      y: 167
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 371,
      y: 230
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 290,
      y: 233
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 207,
      y: 267
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 161,
      y: 263
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 154,
      y: 352
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 368,
      y: 345
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 262,
      y: 381
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 370,
      y: 272
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 290,
      y: 269
    }
  });

  await page.getByRole('img', { name: 'Slab' }).click();
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 523,
      y: 227
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 620,
      y: 230
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 569,
      y: 199
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 617,
      y: 298
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 520,
      y: 303
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 523,
      y: 232
    }
  });
  await page.getByRole('img', { name: 'Settings' }).click();
  await page
    .locator('div')
    .filter({ hasText: /^UnitsCentimeters$/ })
    .getByRole('img')
    .click();
  await page.getByText('Inches', { exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 522,
      y: 231
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 457,
      y: 229
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 459,
      y: 153
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 708,
      y: 160
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 704,
      y: 227
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 620,
      y: 229
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 522,
      y: 266
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 460,
      y: 268
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 456,
      y: 349
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 708,
      y: 352
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 577,
      y: 393
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 708,
      y: 267
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 618,
      y: 268
    }
  });
  await page.getByRole('img', { name: 'Space' }).click();
  await expect(page).toHaveCanvasSnapshot('Autocomplete65.png', {
    maxDiffPixels: 960
  });
  const point = { x: 245, y: 255 };
  const point1 = { x: 288, y: 180 };
  const point2 = { x: 577, y: 237 };
  const point3 = { x: 593, y: 327 };

  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Autocomplete65.geom', geometryDir);
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('Autocomplete65.1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('Autocomplete65.2.geom', geometryDir);
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('Autocomplete65.3.geom', geometryDir);

  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Roof');
  expect(await getSnaptrudeDSType(page, point3)).toBe('Roof');
});

/**
 * @id Autocomplete_0066
 * @description Verify the user is able to autocomplete line+arc (mass/slab) through vertices/edge or not after Change tolerance in PP
 *
 * @steps
 *1.Create project
 *2.Select draw mass/slab
 *3.Draw a line+arc mass/slab
 *4.Change tolerance in PP
 *5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line+arc (mass/slab) through vertices/edge, after Change tolerance in PP
 */

test('Autocomplete_0066', async () => {
  test.setTimeout(350000);
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 194,
      y: 199
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 275,
      y: 205
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 234,
      y: 182
    }
  });
  await page.locator('.sc-gHjxMi > div').first().click();
  await page.locator('#canvas').click({
    position: {
      x: 277,
      y: 265
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 195,
      y: 260
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 194,
      y: 202
    }
  });

  await page.locator('#project-settings-button').click();
  //BUG: resetReduxStore changes resets the unit type but the tolerance in UI is not changed.
  //Hack: Click on the unit and set it to the same value again then tolerance should update.
  await page
    .locator('div')
    .filter({ hasText: /^UnitsMillimeters$/ })
    .getByRole('img')
    .click();
  await page.locator('.selected >> text=Millimeters').click();
  await page.locator('.selected-option >> text=0.00').click();
  await page.getByText('0.000', { exact: true }).click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 193,
      y: 200
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 136,
      y: 197
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 136,
      y: 136
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 355,
      y: 148
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 350,
      y: 200
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 280,
      y: 198
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 194,
      y: 234
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 135,
      y: 236
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 130,
      y: 305
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 357,
      y: 300
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 243,
      y: 338
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 353,
      y: 236
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 278,
      y: 230
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 497,
      y: 203
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 612,
      y: 196
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 549,
      y: 173
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 615,
      y: 263
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 501,
      y: 264
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 498,
      y: 202
    }
  });
  await page.locator('#project-settings-button').click();
  await page.locator('.selected-option >> text=0.000').click();
  await page.getByText('0.0000', { exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 495,
      y: 197
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 434,
      y: 197
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 433,
      y: 144
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 699,
      y: 143
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 696,
      y: 193
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 612,
      y: 201
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 496,
      y: 230
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 434,
      y: 233
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 437,
      y: 300
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 694,
      y: 304
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 564,
      y: 355
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 695,
      y: 226
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 612,
      y: 230
    }
  });
  await page.getByRole('img', { name: 'Space' }).click();
  await expect(page).toHaveCanvasSnapshot('Autocomplete66.png', {
    maxDiffPixels: 960
  });
  const point = { x: 232, y: 222 };
  const point1 = { x: 275, y: 163 };
  const point2 = { x: 537, y: 213 };
  const point3 = { x: 553, y: 297 };

  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Autocomplete66.geom', geometryDir);
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('Autocomplete66.1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('Autocomplete66.2.geom', geometryDir);
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('Autocomplete66.3.geom', geometryDir);

  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Roof');
  expect(await getSnaptrudeDSType(page, point3)).toBe('Roof');
});

/**
 * @id Autocomplete_0067
 * @description Verify the user is able to autocomplete line+arc (mass/slab) through vertices/edge or not after enable/disable the dimensions snap in PP
 *
 * @steps
 *1.Create project
 *2.Select draw mass/slab
 *3.Draw a line+arc mass/slab
 *4.enable/disable the dimensions snap in PP
 *5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line+arc (mass/slab) through vertices/edge, after enable/disable the dimensions snap in PP
 */

test('Autocomplete_0067', async () => {
  test.setTimeout(350000);

  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 176,
      y: 221
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 260,
      y: 227
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 216,
      y: 196
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 260,
      y: 290
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 175,
      y: 291
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 177,
      y: 221
    }
  });
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.locator('.sc-eYozgo').first().click();
  await page.locator('.sc-hPmHAF').first().click();
  await page.locator('#canvas').click({
    position: {
      x: 176,
      y: 221
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 131,
      y: 226
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 139,
      y: 148
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 333,
      y: 152
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 333,
      y: 222
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 259,
      y: 220
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 176,
      y: 253
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 133,
      y: 257
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 132,
      y: 339
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 332,
      y: 339
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 230,
      y: 370
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 333,
      y: 256
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 260,
      y: 254
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 504,
      y: 221
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 593,
      y: 219
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 549,
      y: 196
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 593,
      y: 285
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 503,
      y: 291
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 503,
      y: 222
    }
  });
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.locator('.sc-eYozgo').first().click();
  await page.locator('.sc-hPmHAF').first().click();
  await page.locator('#canvas').click({
    position: {
      x: 504,
      y: 220
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 444,
      y: 217
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 443,
      y: 147
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 670,
      y: 153
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 669,
      y: 220
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 593,
      y: 220
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 503,
      y: 256
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 442,
      y: 259
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 449,
      y: 336
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 670,
      y: 337
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 554,
      y: 371
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 671,
      y: 255
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 593,
      y: 254
    }
  });
  await page.getByRole('img', { name: 'Space' }).click();

  await expect(page).toHaveCanvasSnapshot('Autocomplete67.png', {
    maxDiffPixels: 960
  });
  const point = { x: 202, y: 258 };
  const point1 = { x: 226, y: 174 };
  const point2 = { x: 582, y: 274 };
  const point3 = { x: 599, y: 353 };

  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Autocomplete67.geom', geometryDir);
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('Autocomplete67.1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('Autocomplete67.2.geom', geometryDir);
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('Autocomplete67.3.geom', geometryDir);

  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Roof');
  expect(await getSnaptrudeDSType(page, point3)).toBe('Roof');
});

/**
 * @id Autocomplete_0068
 * @description Verify the user is able to autocomplete line+arc (mass/slab) through vertices/edge or not after enable/disable the angle snap in PP
 *
 * @steps
 *1.Create project
 *2.Select draw mass/slab
 *3.Draw a line+arc mass/slab
 *4.enable/disable the angle snap in PP
 *5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line+arc (mass/slab) through vertices/edge, after enable/disable the angle snap in PP
 */
test('Autocomplete_0068', async () => {
  test.setTimeout(350000);

  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 176,
      y: 202
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 267,
      y: 204
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 221,
      y: 183
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 271,
      y: 270
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 180,
      y: 267
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 177,
      y: 204
    }
  });
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.locator('div:nth-child(4) > .sc-hPmHAF > .sc-eYozgo').click();
  await page.locator('div:nth-child(4) > .sc-hPmHAF > .sc-eYozgo').click();
  await page.locator('#canvas').click({
    position: {
      x: 175,
      y: 204
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 118,
      y: 199
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 119,
      y: 130
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 367,
      y: 134
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 367,
      y: 201
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 266,
      y: 205
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 177,
      y: 267
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 114,
      y: 271
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 118,
      y: 334
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 365,
      y: 333
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 235,
      y: 363
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 370,
      y: 274
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 269,
      y: 270
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 546,
      y: 199
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 643,
      y: 198
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 592,
      y: 181
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 642,
      y: 273
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 547,
      y: 272
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 544,
      y: 202
    }
  });
  await page.getByRole('img', { name: 'Settings' }).click();
  await page.locator('div:nth-child(4) > .sc-hPmHAF > .sc-eYozgo').click();
  await page.locator('div:nth-child(4) > .sc-hPmHAF > .sc-eYozgo').click();
  await page.locator('#canvas').click({
    position: {
      x: 545,
      y: 199
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 482,
      y: 206
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 482,
      y: 129
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 711,
      y: 128
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 713,
      y: 200
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 640,
      y: 202
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 545,
      y: 271
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 482,
      y: 273
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 485,
      y: 335
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 710,
      y: 334
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 598,
      y: 358
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 707,
      y: 270
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 645,
      y: 273
    }
  });
  await page.getByRole('img', { name: 'Space' }).click();

  await expect(page).toHaveCanvasSnapshot('Autocomplete68.png', {
    maxDiffPixels: 960
  });
  const point = { x: 218, y: 230 };
  const point1 = { x: 249, y: 155 };
  const point2 = { x: 612, y: 226 };
  const point3 = { x: 583, y: 305 };

  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Autocomplete68.geom', geometryDir);
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('Autocomplete68.1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('Autocomplete68.2.geom', geometryDir);
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('Autocomplete68.3.geom', geometryDir);

  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Roof');
  expect(await getSnaptrudeDSType(page, point3)).toBe('Roof');
});

/**
 * @id Autocomplete_0069
 * @description Verify the user is able to autocomplete line+arc (mass/slab) through vertices/edge or not after enable/disable the parallel snap in PP
 *
 * @steps
 *1.Create project
 *2.Select draw mass/slab
 *3.Draw a line+arc mass/slab
 *4.enable/disable the parallel snap in PP
 *5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line+arc (mass/slab) through vertices/edge, after enable/disable the parallel snap in PP
 */

test('Autocomplete_0069', async () => {
  test.setTimeout(350000);

  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 169,
      y: 208
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 249,
      y: 212
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 210,
      y: 177
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 251,
      y: 268
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 167,
      y: 269
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 170,
      y: 207
    }
  });
  await page.getByRole('img', { name: 'Settings' }).click();
  await page
    .locator('div')
    .filter({ hasText: /^Parallel Snap$/ })
    .locator('div')
    .nth(3)
    .click();
  await page
    .locator('div')
    .filter({ hasText: /^Parallel Snap$/ })
    .locator('div')
    .nth(2)
    .click();
  await page.locator('#canvas').click({
    position: {
      x: 170,
      y: 208
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 114,
      y: 205
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 113,
      y: 140
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 317,
      y: 144
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 311,
      y: 210
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 249,
      y: 207
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 167,
      y: 238
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 114,
      y: 238
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 117,
      y: 299
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 317,
      y: 294
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 212,
      y: 322
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 317,
      y: 235
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 251,
      y: 233
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 471,
      y: 206
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 568,
      y: 205
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 518,
      y: 172
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 569,
      y: 268
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 470,
      y: 267
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 471,
      y: 213
    }
  });
  await page.getByRole('img', { name: 'Settings' }).click();
  await page
    .locator('div')
    .filter({ hasText: /^Parallel Snap$/ })
    .locator('div')
    .nth(3)
    .click();
  await page
    .locator('div')
    .filter({ hasText: /^Parallel Snap$/ })
    .locator('div')
    .nth(3)
    .click();
  await page.locator('#canvas').click({
    position: {
      x: 472,
      y: 208
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 415,
      y: 210
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 418,
      y: 139
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 638,
      y: 139
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 635,
      y: 207
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 571,
      y: 207
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 471,
      y: 235
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 413,
      y: 239
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 418,
      y: 300
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 637,
      y: 301
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 525,
      y: 336
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 641,
      y: 238
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 569,
      y: 239
    }
  });
  await page.getByRole('img', { name: 'Space' }).click();

  await expect(page).toHaveCanvasSnapshot('Autocomplete69.png', {
    maxDiffPixels: 960
  });
  const point = { x: 213, y: 223 };
  const point1 = { x: 256, y: 158 };
  const point2 = { x: 532, y: 228 };
  const point3 = { x: 568, y: 145 };

  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Autocomplete69.geom', geometryDir);
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('Autocomplete69.1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('Autocomplete69.2.geom', geometryDir);
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('Autocomplete69.3.geom', geometryDir);

  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Roof');
  expect(await getSnaptrudeDSType(page, point3)).toBe('Roof');
});

/**
 * @id Autocomplete_0070
 * @description Verify the user is able to autocomplete line+arc (mass/slab) through vertices/edge or not after enable/disable the orthogonal snap in PP
 *
 * @steps
 *1.Create project
 *2.Select draw mass/slab
 *3.Draw a line+arc mass/slab
 *4.enable/disable the orthogonal snap in PP
 *5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line+arc (mass/slab) through vertices/edge, after enable/disable the orthogonal snap in PP
 */

test('Autocomplete_0070', async () => {
  test.setTimeout(350000);

  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 159,
      y: 241
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 248,
      y: 239
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 204,
      y: 215
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 247,
      y: 311
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 160,
      y: 314
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 161,
      y: 245
    }
  });
  await page.getByRole('img', { name: 'Settings' }).click();
  await page
    .locator('div')
    .filter({ hasText: /^Orthogonal Snap$/ })
    .locator('div')
    .nth(2)
    .click();
  await page
    .locator('div')
    .filter({ hasText: /^Orthogonal Snap$/ })
    .locator('div')
    .nth(3)
    .click();
  await page.locator('#canvas').click({
    position: {
      x: 157,
      y: 238
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 97,
      y: 241
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 98,
      y: 161
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 323,
      y: 163
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 326,
      y: 240
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 247,
      y: 243
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 157,
      y: 276
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 94,
      y: 279
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 103,
      y: 365
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 318,
      y: 364
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 210,
      y: 412
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 319,
      y: 274
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 251,
      y: 276
    }
  });

  await page.getByRole('img', { name: 'Slab' }).click();
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 499,
      y: 241
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 572,
      y: 240
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 535,
      y: 216
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 573,
      y: 307
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 502,
      y: 309
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 502,
      y: 240
    }
  });
  await page.getByRole('img', { name: 'Settings' }).click();
  await page
    .locator('div')
    .filter({ hasText: /^Orthogonal Snap$/ })
    .locator('div')
    .nth(3)
    .click();
  await page
    .locator('div')
    .filter({ hasText: /^Orthogonal Snap$/ })
    .locator('div')
    .nth(2)
    .click();
  await page.locator('#canvas').click({
    position: {
      x: 500,
      y: 238
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 447,
      y: 242
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 449,
      y: 159
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 643,
      y: 160
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 640,
      y: 239
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 573,
      y: 241
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 499,
      y: 275
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 449,
      y: 272
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 451,
      y: 365
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 642,
      y: 362
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 544,
      y: 396
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 644,
      y: 277
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 573,
      y: 275
    }
  });

  await page.getByRole('img', { name: 'Space' }).click();

  await expect(page).toHaveCanvasSnapshot('Autocomplete70.png', {
    maxDiffPixels: 960
  });
  const point = { x: 202, y: 271 };
  const point1 = { x: 235, y: 187 };
  const point2 = { x: 533, y: 257 };
  const point3 = { x: 549, y: 356 };

  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Autocomplete70.geom', geometryDir);
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('Autocomplete70.1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('Autocomplete70.2.geom', geometryDir);
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('Autocomplete70.3.geom', geometryDir);

  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Roof');
  expect(await getSnaptrudeDSType(page, point3)).toBe('Roof');
});
