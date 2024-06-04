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
 * @id Autocomplete_0031
 * @description Verify the user is able to autocomplete line (mass/slab) through vertices/edge or not after Edit length.
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass/slab
 * 3.Draw a line mass/slab
 * 4.Edit length
 * 5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line (mass/slab) through vertices/edge, after edit length.
 */
test('Autocomplete_0031', async () => {
  test.setTimeout(350000);
  await page.locator('#canvas').click({
    position: {
      x: 148,
      y: 245
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 150,
      y: 295
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 208,
      y: 291
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 206,
      y: 240
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 149,
      y: 239
    }
  });
  await page.getByRole('img', { name: 'verticalResize' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 172,
      y: 237
    }
  });
  await page.keyboard.type('2500');
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 210,
      y: 267
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 269,
      y: 271
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 271,
      y: 210
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 180,
      y: 204
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 178,
      y: 242
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 207,
      y: 293
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 210,
      y: 351
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 117,
      y: 350
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 118,
      y: 298
    }
  });

  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 369,
      y: 215
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 370,
      y: 261
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 423,
      y: 261
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 419,
      y: 217
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 367,
      y: 215
    }
  });
  await page.getByRole('img', { name: 'verticalResize' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 378,
      y: 215
    }
  });
  await page.keyboard.type('2500');
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 427,
      y: 237
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 475,
      y: 238
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 473,
      y: 188
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 393,
      y: 187
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 391,
      y: 211
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 424,
      y: 261
    }
  });

  await page.locator('#canvas').click({
    position: {
      x: 427,
      y: 313
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 368,
      y: 311
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 367,
      y: 261
    }
  });
  await expect(page).toHaveCanvasSnapshot('Autocomplete_0031.png', {
    maxDiffPixels: 960
  });

  const point = { x: 169, y: 268 };
  const point1 = { x: 223, y: 231 };
  const point3 = { x: 397, y: 232 };
  const point4 = { x: 450, y: 205 };

  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Autocomplete31' + '.geom', geometryDir);
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('Autocomplete31.1' + '.geom', geometryDir);
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('Autocomplete31.3' + '.geom', geometryDir);
  const actualGeometry4 = await getGeometry(page, point4);
  await expect(actualGeometry4).toHaveGeometryV0('Autocomplete31.4' + '.geom', geometryDir);

  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point3)).toBe('Roof');
  expect(await getSnaptrudeDSType(page, point4)).toBe('Roof');
});

/**
 * @id Autocomplete_0032
 * @description Verify the user is able to autocomplete arc (mass/slab) through vertices/edge or not after Edit length.
 *
 * @steps
 *1.Create project
 *2.Select draw mass/slab
 *3.Draw a arc mass/slab
 *4.Edit length
 *5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for arc (mass/slab) through vertices/edge, after edit length.
 */
test('Autocomplete_0032', async () => {
  test.setTimeout(350000);
  await page.getByRole('img', { name: 'Space' }).click();
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 143,
      y: 183
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 233,
      y: 181
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 189,
      y: 170
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 236,
      y: 261
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 239,
      y: 220
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 142,
      y: 266
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 193,
      y: 269
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 141,
      y: 184
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 137,
      y: 223
    }
  });
  await page.getByRole('img', { name: 'verticalResize' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 187,
      y: 167
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 185,
      y: 172
    }
  });
  await page.keyboard.type('3000');
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 235,
      y: 179
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 327,
      y: 185
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 283,
      y: 164
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 329,
      y: 261
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 334,
      y: 211
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 232,
      y: 257
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 280,
      y: 267
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 280,
      y: 266
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 283,
      y: 342
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 297,
      y: 303
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 188,
      y: 346
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 237,
      y: 353
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 186,
      y: 272
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 182,
      y: 306
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 459,
      y: 178
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 545,
      y: 181
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 502,
      y: 167
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 549,
      y: 240
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 558,
      y: 205
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 464,
      y: 239
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 505,
      y: 251
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 459,
      y: 179
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 446,
      y: 213
    }
  });
  await page.getByRole('img', { name: 'verticalResize' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 496,
      y: 167
    }
  });
  await page.keyboard.type('3000');
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 542,
      y: 174
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 627,
      y: 172
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 578,
      y: 155
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 625,
      y: 237
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 634,
      y: 208
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 545,
      y: 239
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 588,
      y: 249
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 584,
      y: 247
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 587,
      y: 317
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 599,
      y: 280
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 502,
      y: 315
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 548,
      y: 326
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 500,
      y: 250
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 490,
      y: 282
    }
  });

  await page.getByRole('img', { name: 'Space' }).click();

  await expect(page).toHaveCanvasSnapshot('Autocomplete32.png', {
    maxDiffPixels: 960
  });

  const point = { x: 181, y: 212 };
  const point2 = { x: 268, y: 213 };
  const point3 = { x: 239, y: 295 };
  const point4 = { x: 478, y: 209 };
  const point5 = { x: 593, y: 211 };

  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Autocomplete32' + '.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('Autocomplete32.2' + '.geom', geometryDir);
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('Autocomplete32.3' + '.geom', geometryDir);
  const actualGeometry4 = await getGeometry(page, point4);
  await expect(actualGeometry4).toHaveGeometryV0('Autocomplete32.4' + '.geom', geometryDir);
  const actualGeometry5 = await getGeometry(page, point5);
  await expect(actualGeometry5).toHaveGeometryV0('Autocomplete32.5' + '.geom', geometryDir);

  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point3)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point4)).toBe('Roof');
  expect(await getSnaptrudeDSType(page, point5)).toBe('Roof');
});

/**
 * @id Autocomplete_0033
 * @description Verify the user is able to autocomplete line+ arc (mass/slab) through vertices/edge or not after Edit length.
 *
 * @steps
 *1.Create project
 *2.Select draw mass/slab
 *3.Draw a line+arc mass/slab
 *4.Edit length
 *5.Autocomplete by vertices/edges
 *
 * @expected Autocomplete should work for line+arc (mass/slab) through vertices/edge, after edit length.
 */
test('Autocomplete_0033', async () => {
  test.setTimeout(350000);
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 143,
      y: 194
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 218,
      y: 196
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 181,
      y: 172
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 215,
      y: 252
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 146,
      y: 259
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 179,
      y: 271
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 144,
      y: 195
    }
  });
  await page.getByRole('img', { name: 'verticalResize' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 171,
      y: 173
    }
  });
  await page.keyboard.type('3000');
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 222,
      y: 191
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 293,
      y: 187
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 254,
      y: 158
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 290,
      y: 255
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 217,
      y: 255
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 257,
      y: 268
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 254,
      y: 269
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 262,
      y: 339
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 179,
      y: 332
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 222,
      y: 342
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 186,
      y: 273
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 180,
      y: 304
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 374,
      y: 177
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 451,
      y: 176
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 413,
      y: 156
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 454,
      y: 242
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 377,
      y: 236
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 416,
      y: 258
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 374,
      y: 178
    }
  });
  await page.getByRole('img', { name: 'verticalResize' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 412,
      y: 157
    }
  });
  await page.keyboard.type('3000');
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 451,
      y: 177
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 525,
      y: 178
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 485,
      y: 147
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 523,
      y: 240
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 453,
      y: 241
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 489,
      y: 257
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 485,
      y: 257
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 491,
      y: 320
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 410,
      y: 327
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 451,
      y: 340
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 411,
      y: 257
    }
  });

  await page.getByRole('img', { name: 'Space' }).click();

  await expect(page).toHaveCanvasSnapshot('Autocomplete33.png', {
    maxDiffPixels: 960
  });

  const point = { x: 176, y: 215 };
  const point1 = { x: 251, y: 218 };
  const point2 = { x: 222, y: 292 };
  const point3 = { x: 413, y: 205 };
  const point4 = { x: 481, y: 208 };
  const point5 = { x: 447, y: 286 };

  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Autocomplete33' + '.geom', geometryDir);
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('Autocomplete33.1' + '.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('Autocomplete33.2' + '.geom', geometryDir);
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('Autocomplete33.3' + '.geom', geometryDir);
  const actualGeometry4 = await getGeometry(page, point4);
  await expect(actualGeometry4).toHaveGeometryV0('Autocomplete33.4' + '.geom', geometryDir);
  const actualGeometry5 = await getGeometry(page, point5);
  await expect(actualGeometry5).toHaveGeometryV0('Autocomplete33.5' + '.geom', geometryDir);

  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point3)).toBe('Roof');
  expect(await getSnaptrudeDSType(page, point4)).toBe('Roof');
  expect(await getSnaptrudeDSType(page, point5)).toBe('Roof');
});

/**
* @id Autocomplete_0034
* @description Verify the user is able to autocomplete line+ arc (mass/slab) through vertices/edge or not after Edit length.
*
* @steps
*
*1.Create project
*2.Select draw mass/slab
*3.Draw a line mass/slab
*4.push/pull edit in 3D
*5.Autocomplete by vertices/edges

* @expected Autocomplete should work for line (mass/slab) through vertices/edge, after puhs/pull edit.
*/
test.skip('Autocomplete_0034', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();

  await page.locator('#canvas').click({
    position: {
      x: 507,
      y: 416
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 621,
      y: 387
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 659,
      y: 435
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 556,
      y: 482
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 510,
      y: 419
    }
  });
  await page.getByRole('img', { name: 'pushpull' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 524,
      y: 419
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 492,
      y: 431
    }
  });

  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 666,
      y: 426
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 732,
      y: 490
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 567,
      y: 551
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 520,
      y: 487
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 545,
      y: 523
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 476,
      y: 546
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 489,
      y: 577
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 572,
      y: 553
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'delete_icon' }).click();

  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 509,
      y: 441
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 630,
      y: 400
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 691,
      y: 462
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 556,
      y: 515
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 514,
      y: 440
    }
  });
  await page.getByRole('img', { name: 'pushpull' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 597,
      y: 435
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 593,
      y: 423
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 560,
      y: 491
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 595,
      y: 553
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 733,
      y: 501
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 699,
      y: 449
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 538,
      y: 465
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 450,
      y: 496
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 497,
      y: 563
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 591,
      y: 532
    }
  });
  await page.getByRole('img', { name: 'Space' }).click();

  await expect(page).toHaveCanvasSnapshot('Autocomplete34' + '.png', {
    maxDiffPixels: 960
  });

  const point = { x: 583, y: 430 };
  const point1 = { x: 535, y: 511 };
  const point2 = { x: 614, y: 503 };

  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Autocomplete34' + '.geom', geometryDir);
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('Autocomplete34.1' + '.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('Autocomplete34.2' + '.geom', geometryDir);

  expect(await getSnaptrudeDSType(page, point)).toBe('Roof');
  expect(await getSnaptrudeDSType(page, point1)).toBe('Roof');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Roof');

  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
});

/**
* @id Autocomplete_0035
* @description Verify the user is able to autocomplete arc (mass/slab) through vertices/edge or not after push/pull Edit.
*
* @steps
*
*1.Create project
*2.Select draw mass/slab
*3.Draw a arc mass/slab
*4.push/pull Edit
*5.Autocomplete by vertices/edges

* @expected Autocomplete should work for arc (mass/slab) through vertices/edge, after push/pull edit.
*/
test.skip('Autocomplete_0035', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();

  await page.locator('.sc-gHjxMi > div:nth-child(2)').click();
  await page.locator('#canvas').click({
    position: {
      x: 530,
      y: 413
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 646,
      y: 384
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 589,
      y: 385
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 692,
      y: 432
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 659,
      y: 413
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 604,
      y: 478
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 635,
      y: 445
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 534,
      y: 416
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 563,
      y: 429
    }
  });
  await page.getByRole('img', { name: 'pushpull' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 554,
      y: 395
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 539,
      y: 405
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 566,
      y: 484
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 504,
      y: 416
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 462,
      y: 464
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 579,
      y: 470
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 625,
      y: 502
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 619,
      y: 501
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 682,
      y: 435
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 688,
      y: 458
    }
  });

  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'delete_icon' }).click();

  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();

  await page.getByRole('img', { name: 'Space' }).click();
});

/**
* @id Autocomplete_0036
* @description Verify the user is able to autocomplete line+arc (mass/slab) through vertices/edge or not after push/pull Edit.
*
* @steps
*
*1.Create project
*2.Select draw mass/slab
*3.Draw a line+arc mass/slab
*4.push/pullEdit
*5.Autocomplete by vertices/edges

* @expected Autocomplete should work for line+arc (mass/slab) through vertices/edge, after push/pull edit.
*/
test.skip('Autocomplete_0036', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 450,
      y: 436
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 592,
      y: 395
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 666,
      y: 480
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 684,
      y: 435
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 503,
      y: 534
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 454,
      y: 436
    }
  });
  await page.getByRole('img', { name: 'pushpull' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 470,
      y: 449
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 441,
      y: 450
    }
  });
  await page.locator('.sc-gHjxMi > div').first().click();
  await page.locator('#canvas').click({
    position: {
      x: 421,
      y: 438
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 312,
      y: 472
    }
  });
  await page.locator('.sc-gHjxMi > div:nth-child(2)').click();
  await page.locator('#canvas').click({
    position: {
      x: 315,
      y: 541
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 286,
      y: 529
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 393,
      y: 561
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 384,
      y: 568
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 480,
      y: 547
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 518,
      y: 532
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 523,
      y: 529
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 581,
      y: 574
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 658,
      y: 533
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 672,
      y: 544
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 614,
      y: 494
    }
  });

  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.getByRole('img', { name: 'Space' }).click();
});

/**
* @id Autocomplete_0037
* @description Verify the user is able to autocomplete line (mass/slab) through vertices/edge or not after move
*
* @steps
*
*1.Create project
*2.Select draw mass/slab
*3.Draw a line mass/slab
*4.Move
*5.Autocomplete by vertices/edges

* @expected Autocomplete should work for line (mass/slab) through vertices/edge, after move
*/
test('Autocomplete_0037', async () => {
  test.setTimeout(350000);
  await page.locator('#canvas').click({
    position: {
      x: 118,
      y: 155
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 120,
      y: 234
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 215,
      y: 239
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 212,
      y: 155
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 118,
      y: 157
    }
  });
  await page.getByRole('img', { name: 'move', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 175,
      y: 186
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 224,
      y: 186
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 266,
      y: 234
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 335,
      y: 235
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 341,
      y: 160
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 266,
      y: 161
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 210,
      y: 237
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 217,
      y: 300
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 260,
      y: 308
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 257,
      y: 237
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 476,
      y: 157
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 481,
      y: 230
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 574,
      y: 229
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 570,
      y: 159
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 479,
      y: 158
    }
  });
  await page.getByRole('img', { name: 'move', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 524,
      y: 182
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 597,
      y: 192
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 645,
      y: 156
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 745,
      y: 159
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 741,
      y: 236
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 647,
      y: 229
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 598,
      y: 231
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 603,
      y: 293
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 650,
      y: 288
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 648,
      y: 237
    }
  });

  await expect(page).toHaveCanvasSnapshot('Autocomplete_0037.png', {
    maxDiffPixels: 960
  });

  const point = { x: 208, y: 199 };
  const point2 = { x: 659, y: 201 };
  const point3 = { x: 239, y: 295 };

  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Autocomplete37' + '.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('Autocomplete37.2' + '.geom', geometryDir);
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('Autocomplete37.3' + '.geom', geometryDir);

  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Roof');
  expect(await getSnaptrudeDSType(page, point3)).toBe('Mass');
});

/**
* @id Autocomplete_0038
* @description Verify the user is able to autocomplete arc (mass/slab) through vertices/edge or not after move
*
* @steps
*
*1.Create project
*2.Select draw mass/slab
*3.Draw a arc mass/slab
*4.Move
*5.Autocomplete by vertices/edges

* @expected Autocomplete should work for arc (mass/slab) through vertices/edge, after move
*/
test('Autocomplete_0038', async () => {
  test.setTimeout(350000);
  await page.getByRole('img', { name: 'Space' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 114,
      y: 145
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 119,
      y: 227
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 206,
      y: 239
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 164,
      y: 216
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 212,
      y: 149
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 197,
      y: 180
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 115,
      y: 150
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 163,
      y: 158
    }
  });
  await page.getByRole('img', { name: 'move', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 160,
      y: 180
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 227,
      y: 179
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 181,
      y: 231
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 270,
      y: 227
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 214,
      y: 257
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 178,
      y: 188
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 98,
      y: 180
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 144,
      y: 205
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 106,
      y: 115
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 106,
      y: 137
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 182,
      y: 116
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 173,
      y: 105
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 183,
      y: 143
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 174,
      y: 135
    }
  });
  await page.getByText('Slab').click();
  await page.locator('#canvas').click({
    position: {
      x: 373,
      y: 149
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 372,
      y: 227
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 381,
      y: 182
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 458,
      y: 225
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 415,
      y: 220
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 454,
      y: 158
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 453,
      y: 174
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 372,
      y: 154
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 422,
      y: 155
    }
  });
  await page.getByRole('img', { name: 'move', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 407,
      y: 182
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 464,
      y: 183
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 430,
      y: 224
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 510,
      y: 227
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 470,
      y: 245
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 434,
      y: 187
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 361,
      y: 148
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 390,
      y: 187
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 365,
      y: 228
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 359,
      y: 211
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 423,
      y: 225
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 393,
      y: 244
    }
  });

  await page.getByRole('img', { name: 'Space' }).click();

  await expect(page).toHaveCanvasSnapshot('Autocomplete38' + '.png', {
    maxDiffPixels: 960
  });

  const point = { x: 221, y: 186 };
  const point1 = { x: 137, y: 155 };
  const point2 = { x: 491, y: 193 };
  const point3 = { x: 459, y: 234 };

  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Autocomplete38' + '.geom', geometryDir);
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('Autocomplete38.1' + '.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('Autocomplete38.2' + '.geom', geometryDir);
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('Autocomplete38.3' + '.geom', geometryDir);

  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Roof');
  expect(await getSnaptrudeDSType(page, point3)).toBe('Roof');
});

/**
* @id Autocomplete_0039
* @description Verify the user is able to autocomplete line+arc (mass/slab) through vertices/edge or not after move
*
* @steps
*
*1.Create project
*2.Select draw mass/slab
*3.Draw a line+arc mass/slab
*4.Move
*5.Autocomplete by vertices/edges

* @expected Autocomplete should work for line+arc (mass/slab) through vertices/edge, after move
*/
test('Autocomplete_0039', async () => {
  test.setTimeout(350000);

  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 131,
      y: 182
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 231,
      y: 186
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 181,
      y: 154
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 234,
      y: 257
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 147,
      y: 267
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 190,
      y: 279
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 131,
      y: 186
    }
  });
  await page.getByRole('img', { name: 'move', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 195,
      y: 193
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 268,
      y: 202
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 304,
      y: 180
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 391,
      y: 185
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 353,
      y: 157
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 392,
      y: 262
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 303,
      y: 256
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 352,
      y: 275
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 262,
      y: 280
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 260,
      y: 344
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 338,
      y: 346
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 299,
      y: 368
    }
  });

  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 342,
      y: 274
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 473,
      y: 181
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 572,
      y: 188
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 522,
      y: 162
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 575,
      y: 257
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 476,
      y: 250
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 523,
      y: 274
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 470,
      y: 183
    }
  });
  await page.getByRole('img', { name: 'move', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 529,
      y: 217
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 565,
      y: 217
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 605,
      y: 183
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 691,
      y: 180
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 647,
      y: 159
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 692,
      y: 259
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 605,
      y: 254
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 651,
      y: 271
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 560,
      y: 274
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 557,
      y: 347
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 645,
      y: 350
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 600,
      y: 363
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 641,
      y: 269
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 645,
      y: 307
    }
  });

  await page.getByRole('img', { name: 'Space' }).click();

  await expect(page).toHaveCanvasSnapshot('Autocomplete39' + '.png', {
    maxDiffPixels: 960
  });

  const point = { x: 264, y: 215 };
  const point1 = { x: 352, y: 221 };
  const point2 = { x: 539, y: 221 };
  const point3 = { x: 644, y: 219 };

  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Autocomplete39' + '.geom', geometryDir);
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('Autocomplete39.1' + '.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('Autocomplete39.2' + '.geom', geometryDir);
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('Autocomplete39.3' + '.geom', geometryDir);

  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Roof');
  expect(await getSnaptrudeDSType(page, point3)).toBe('Roof');
});

/**
* @id Autocomplete_0040
* @description Verify the user is able to autocomplete line+arc (mass/slab) through vertices/edge or not after move
*
* @steps
*
*1.Create project
*2.Select draw mass/slab
*3.Draw a line+arc mass/slab
*4.Move
*5.Autocomplete by vertices/edges

* @expected Autocomplete should work for line+arc (mass/slab) through vertices/edge, after move
*/
test('Autocomplete_0040', async () => {
  test.setTimeout(350000);
  await page.locator('#canvas').click({
    position: {
      x: 108,
      y: 145
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 96,
      y: 249
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 228,
      y: 254
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 222,
      y: 149
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 111,
      y: 148
    }
  });
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 167,
      y: 183
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 173,
      y: 390
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 227,
      y: 452
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 341,
      y: 457
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 342,
      y: 349
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 225,
      y: 356
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 165,
      y: 457
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 171,
      y: 545
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 283,
      y: 544
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 278,
      y: 456
    }
  });
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 425,
      y: 153
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 431,
      y: 238
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 522,
      y: 238
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 521,
      y: 156
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 426,
      y: 155
    }
  });
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 467,
      y: 193
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 468,
      y: 395
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 520,
      y: 437
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 626,
      y: 438
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 635,
      y: 355
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 524,
      y: 358
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 470,
      y: 438
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 480,
      y: 523
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 576,
      y: 520
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 573,
      y: 440
    }
  });

  await page.getByRole('img', { name: 'Space' }).click();

  await expect(page).toHaveCanvasSnapshot('Autocomplete40' + '.png', {
    maxDiffPixels: 960
  });

  const point = { x: 171, y: 401 };
  const point1 = { x: 265, y: 399 };
  const point2 = { x: 453, y: 394 };
  const point3 = { x: 550, y: 406 };

  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Autocomplete40' + '.geom', geometryDir);
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('Autocomplete40.1' + '.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('Autocomplete40.2' + '.geom', geometryDir);
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('Autocomplete40.3' + '.geom', geometryDir);

  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Roof');
  expect(await getSnaptrudeDSType(page, point3)).toBe('Roof');
});
