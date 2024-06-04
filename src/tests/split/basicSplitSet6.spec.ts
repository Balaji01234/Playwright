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

//Split mass_011
test('Split mass_011', async () => {
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 347,
      y: 257
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 337,
      y: 398
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 359,
      y: 322
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 539,
      y: 400
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 434,
      y: 426
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 532,
      y: 256
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 531,
      y: 310
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 350,
      y: 261
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 398,
      y: 236
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 409,
      y: 234
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 436,
      y: 318
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 425,
      y: 296
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 459,
      y: 362
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 451,
      y: 361
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 505,
      y: 416
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 489,
      y: 391
    }
  });

  const point = { x: 409, y: 369 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('DrawSplitMass11' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('DrawSplitMass11' + '.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  const point1 = { x: 480, y: 311 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('DrawSplitMass11.1' + '.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
});

//Split mass_012
test('Split mass_012', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 356,
      y: 245
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 550,
      y: 262
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 555,
      y: 353
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 569,
      y: 311
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 358,
      y: 356
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 360,
      y: 249
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 377,
      y: 284
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 457,
      y: 244
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 451,
      y: 350
    }
  });
  const point = { x: 409, y: 303 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('DrawSplitMass12' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('DrawSplitMass12' + '.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  const point1 = { x: 522, y: 310 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('DrawSplitMass12.1' + '.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
});

//Split mass_013
test('Split mass_013', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 354,
      y: 224
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 344,
      y: 392
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 509,
      y: 394
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 429,
      y: 374
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 518,
      y: 230
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 350,
      y: 223
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 413,
      y: 240
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 357,
      y: 304
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 511,
      y: 300
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 427,
      y: 336
    }
  });
  const point = { x: 441, y: 355 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('DrawSplitMass13' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('DrawSplitMass13' + '.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  const point1 = { x: 458, y: 267 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('DrawSplitMass13.1' + '.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
});

//Split mass_014
test('Split mass_014', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 319,
      y: 352
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 319,
      y: 226
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 540,
      y: 233
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 528,
      y: 356
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 322,
      y: 347
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 387,
      y: 224
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 391,
      y: 351
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 492,
      y: 227
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 492,
      y: 358
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 387,
      y: 293
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 494,
      y: 296
    }
  });
  const point = { x: 343, y: 304 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('DrawSplitMass14' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('DrawSplitMass14' + '.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  const point1 = { x: 433, y: 249 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('DrawSplitMass14.1' + '.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  const point2 = { x: 448, y: 328 };
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('DrawSplitMass14.2' + '.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point2)).toBe('Mass');
  const point3 = { x: 522, y: 284 };
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('DrawSplitMass14.3' + '.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point3)).toBe('Mass');
});

//Split mass_015
test('Split mass_015', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 352,
      y: 387
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 339,
      y: 227
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 576,
      y: 230
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 584,
      y: 385
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 348,
      y: 384
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 581,
      y: 380
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 355,
      y: 226
    }
  });
  const point = { x: 433, y: 347 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('DrawSplitMass15' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('DrawSplitMass15' + '.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  const point1 = { x: 506, y: 278 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('DrawSplitMass15.1' + '.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
});

//Split mass_016
test('Split mass_016', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 338,
      y: 216
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 343,
      y: 393
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 516,
      y: 395
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 516,
      y: 329
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 404,
      y: 324
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 402,
      y: 215
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 338,
      y: 223
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 342,
      y: 329
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 406,
      y: 326
    }
  });
  const point = { x: 370, y: 259 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('DrawSplitMass16' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('DrawSplitMass16' + '.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  const point1 = { x: 388, y: 373 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('DrawSplitMass16.1' + '.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
});

//Split mass_017
test('Split mass_017', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 472,
      y: 290
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 383,
      y: 294
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 431,
      y: 224
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 517,
      y: 217
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 546,
      y: 276
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 560,
      y: 470
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 465,
      y: 471
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 478,
      y: 292
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 475,
      y: 290
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 555,
      y: 289
    }
  });
  const point = { x: 494, y: 254 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('DrawSplitMass17' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('DrawSplitMass17' + '.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  const point1 = { x: 529, y: 376 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('DrawSplitMass17.1' + '.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
});

//Split mass_018
test('Split mass_018', async () => {
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 374,
      y: 245
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 480,
      y: 243
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 448,
      y: 185
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 375,
      y: 254
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 387,
      y: 346
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 380,
      y: 247
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 477,
      y: 246
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 431,
      y: 296
    }
  });
  const point = { x: 439, y: 242 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('DrawSplitMass18' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('DrawSplitMass18' + '.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  const point1 = { x: 441, y: 329 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('DrawSplitMass18.1' + '.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
});

//Split mass_019
test('Split mass_019', async () => {
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 306,
      y: 268
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 373,
      y: 265
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 337,
      y: 228
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 464,
      y: 271
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 455,
      y: 252
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 449,
      y: 347
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 460,
      y: 350
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 353,
      y: 345
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 351,
      y: 364
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 297,
      y: 321
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 287,
      y: 334
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 309,
      y: 272
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 252,
      y: 264
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 413,
      y: 237
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 389,
      y: 323
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 396,
      y: 311
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 390,
      y: 387
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 371,
      y: 352
    }
  });
  const point = { x: 325, y: 299 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('DrawSplitMass19' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('DrawSplitMass19' + '.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  const point1 = { x: 468, y: 308 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('DrawSplitMass19.1' + '.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
});

//Split mass_020
test('Split mass_020', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 324,
      y: 255
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 530,
      y: 241
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 542,
      y: 376
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 545,
      y: 364
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 329,
      y: 378
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 322,
      y: 258
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 315,
      y: 261
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 393,
      y: 255
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 426,
      y: 309
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 473,
      y: 377
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 441,
      y: 373
    }
  });
  const point = { x: 335, y: 296 };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('DrawSplitMass20' + '.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('DrawSplitMass20' + '.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point)).toBe('Mass');
  const point1 = { x: 500, y: 300 };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('DrawSplitMass20.1' + '.geom', geometryDir);
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
});
