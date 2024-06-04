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
 * @id Autocomplete_0001
 * @description Verify the user is able to autocomplete the line mass through vertices or not.
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass
 * 3.Draw a line mass
 * 4.Autocomplete through vertices
 *
 * @expected Autocomplete should done through vertices on line mass.
 */
test('autocomplete_0001', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 268,
      y: 234
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 425,
      y: 234
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 441,
      y: 379
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 272,
      y: 367
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 272,
      y: 230
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 425,
      y: 230
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 530,
      y: 239
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 506,
      y: 420
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 269,
      y: 408
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 272,
      y: 384
    }
  });
  const point1 = { x: 401, y: 346 };
  const point2 = { x: 468, y: 379 };
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry1).toHaveGeometryV0('autocompleteonlinemass1.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('autocompleteonlinemass2.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('autocompleteonlinemass1.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Mass');
});

/**
 * @id Autocomplete_0002
 * @description Verify the user is able to autocomplete the arc mass through vertices or not.
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass
 * 3.Draw a arc mass
 * 4.Autocomplete through vertices
 *
 * @expected Autocomplete on arc mass should done through vertices.
 */
test('autocomplete_0002', async () => {
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 270,
      y: 287
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 406,
      y: 287
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 391,
      y: 244
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 320,
      y: 353
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 368,
      y: 380
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 279,
      y: 285
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 260,
      y: 315
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 272,
      y: 283
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 330,
      y: 355
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 248,
      y: 397
    }
  });
  const point1 = { x: 363, y: 252 };
  const point2 = { x: 280, y: 364 };
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry1).toHaveGeometryV0('autocompleteonarcmass1.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('autocompleteonarcmass2.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('autocompleteonarcmass2.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Mass');
});

/**
 * @id Autocomplete_0003
 * @description Verify the user is able to autocomplete the line+arc mass through vertices or not.
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass
 * 3.Draw a line+arc mass
 * 4.Autocomplete through vertices
 *
 * @expected Autocomplete should done through vertices on line+arc mass.
 */
test('autocomplete_0003', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 237,
      y: 245
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 437,
      y: 254
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 443,
      y: 369
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 469,
      y: 331
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 277,
      y: 369
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 235,
      y: 252
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 275,
      y: 287
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 276,
      y: 372
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 278,
      y: 490
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 437,
      y: 483
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 420,
      y: 519
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 437,
      y: 366
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 400,
      y: 408
    }
  });
  const point1 = { x: 441, y: 333 };
  const point2 = { x: 400, y: 408 };
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry1).toHaveGeometryV0('autocompleteonlinearcmass1.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('autocompleteonlinearcmass2.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('autocompleteonlinearcmass3.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Mass');
});

/**
 * @id Autocomplete_0004
 * @description Verify the user is able to autocomplete the line mass through any point on the edge or not
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass
 * 3.Draw a line mass
 * 4.Autocomplete any point on edge
 *
 * @expected Autocomplete should done through any point of edge on line mass.
 */
test('autocomplete_0004', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 223,
      y: 207
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 361,
      y: 209
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 358,
      y: 352
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 226,
      y: 351
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 218,
      y: 208
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 363,
      y: 276
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 494,
      y: 276
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 484,
      y: 433
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 289,
      y: 425
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 289,
      y: 356
    }
  });

  const point1 = { x: 342, y: 252 };
  const point2 = { x: 447, y: 355 };
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry1).toHaveGeometryV0('autocompleteonlinemassedge1.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('autocompleteonlinemass2edge.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('autocompleteonlinemassedge4.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Mass');
});

/**
 * @id Autocomplete_0005
 * @description Verify the user is able to autocomplete the arc mass through any point on the edge or not
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass
 * 3.Draw a arc mass
 * 4.Autocomplete any point on edge
 *
 * @expected Autocomplete should done through anyone point of edge on arc mass.
 */
test('autocomplete_0005', async () => {
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 257,
      y: 292
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 343,
      y: 291
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 311,
      y: 252
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 326,
      y: 369
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 345,
      y: 371
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 261,
      y: 288
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 232,
      y: 323
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 309,
      y: 255
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 384,
      y: 321
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 417,
      y: 286
    }
  });

  const point1 = { x: 357, y: 326 };
  const point2 = { x: 398, y: 281 };
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry1).toHaveGeometryV0('autocompleteonArcmassedge1.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('autocompleteonArcmass2edge.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('autocompleteonarcmassedge4.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Mass');
});

/**
 * @id Autocomplete_0006
 * @description Verify the user is able to autocomplete the line+arc mass through any point on the edge or not.
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass
 * 3.Draw a line+arc mass
 * 4.Autocomplete any point on edge
 *
 * @expected Autocomplete should done through anypoint of edge on line+arc mass.
 */
test('autocomplete_0006', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 214,
      y: 247
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 205,
      y: 334
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 355,
      y: 324
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 341,
      y: 351
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 359,
      y: 246
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 366,
      y: 246
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 215,
      y: 246
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 282,
      y: 242
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 398,
      y: 159
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 371,
      y: 158
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 476,
      y: 223
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 484,
      y: 223
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 390,
      y: 267
    }
  });

  const point1 = { x: 253, y: 306 };
  const point2 = { x: 446, y: 186 };
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry1).toHaveGeometryV0(
    'autocompleteonlineArcmassedge1.geom',
    geometryDir
  );
  await expect(actualGeometry2).toHaveGeometryV0(
    'autocompleteonlineArcmass2edge.geom',
    geometryDir
  );
  await expect(page).toHaveCanvasSnapshot('autocompleteonlinearcmassedge5.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Mass');
});

/**
 * @id Autocomplete_0007
 * @description Verify the user is able to autocomplete the line mass through any point on multiple edge or not.
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass
 * 3.Draw a line mass
 * 4.Autocomplete any point on multiple edge
 *
 * @expected Autocomplete should done through any point on multiple edge on line mass.
 */
test('autocomplete_0007', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 180,
      y: 228
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 312,
      y: 230
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 303,
      y: 383
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 174,
      y: 379
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 116,
      y: 312
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 183,
      y: 232
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 311,
      y: 287
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 445,
      y: 282
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 441,
      y: 431
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 276,
      y: 430
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 269,
      y: 390
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 377,
      y: 283
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 384,
      y: 207
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 517,
      y: 209
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 511,
      y: 333
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 444,
      y: 329
    }
  });

  const point1 = { x: 235, y: 296 };
  const point2 = { x: 421, y: 323 };
  const point3 = { x: 487, y: 239 };
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry1).toHaveGeometryV0('multipleedgelinemass1.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('multipleedgelinemass2.geom', geometryDir);
  await expect(actualGeometry3).toHaveGeometryV0('multipleedgelinemass3.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('multipleedgelinemass7.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point3)).toBe('Mass');
});

/**
 * @id Autocomplete_0008
 * @description Verify the user is able to autocomplete the arc mass through any point on the multiple edge or not.
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass
 * 3.Draw a arc mass
 * 4.Autocomplete any point on multiple edge
 *
 * @expected Autocomplete should done through any point on multiple edge on line mass.
 */
test('autocomplete_0008', async () => {
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 225,
      y: 292
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 335,
      y: 292
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 335,
      y: 266
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 335,
      y: 364
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 362,
      y: 358
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 240,
      y: 363
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 257,
      y: 396
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 225,
      y: 288
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 196,
      y: 306
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 316,
      y: 236
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 382,
      y: 318
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 419,
      y: 288
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 377,
      y: 349
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 425,
      y: 277
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 450,
      y: 304
    }
  });
  const point1 = { x: 313, y: 354 };
  const point2 = { x: 412, y: 251 };
  const point3 = { x: 447, y: 331 };
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry1).toHaveGeometryV0('multipleedgearcmass1.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('multipleedgearcmass2.geom', geometryDir);
  await expect(actualGeometry3).toHaveGeometryV0('multipleedgearcmass3.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('multipleedgearcmass8.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point3)).toBe('Mass');
});

/**
 * @id Autocomplete_0009
 * @description Verify the user is able to autocomplete the line+arc mass through any point on the multiple edge or not.
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass
 * 3.Draw a line+arc mass
 * 4.Autocomplete any point on multiple edge
 *
 * @expected Autocomplete should done through any point on multiple edge on line mass.
 */
test('autocomplete_0009', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 264,
      y: 277
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 251,
      y: 379
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 365,
      y: 376
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 345,
      y: 413
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 368,
      y: 284
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 267,
      y: 278
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 317,
      y: 273
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 321,
      y: 211
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 297,
      y: 219
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 413,
      y: 207
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 409,
      y: 333
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 365,
      y: 334
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 384,
      y: 208
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 382,
      y: 169
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 469,
      y: 172
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 430,
      y: 137
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 466,
      y: 287
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 489,
      y: 281
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 415,
      y: 294
    }
  });

  const point1 = { x: 304, y: 391 };
  const point2 = { x: 379, y: 247 };
  const point3 = { x: 443, y: 213 };
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry1).toHaveGeometryV0('multipleedgelinearcmass9.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('multipleedgelinearcmass99.geom', geometryDir);
  await expect(actualGeometry3).toHaveGeometryV0('multipleedgelinemass3.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('multipleedgelinemass9.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point3)).toBe('Mass');
});

/**
 * @id Autocomplete_0010
 * @description Verify the user is able to autocomplete the line mass through vertices/edge or not in different storeys
 *
 * @steps
 * 1.Create project
 * 2.Select draw mass
 * 3.Draw a line+arc mass
 * 4.Storey copy
 * 5.Autocomplete any point on edge
 *
 * @expected Autocomplete should done through vertices on line mass in different storeys.
 */
test('autocomplete_0010', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 297,
      y: 258
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 290,
      y: 427
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 524,
      y: 438
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 520,
      y: 262
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 291,
      y: 257
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 510,
      y: 388
    }
  });
  await page.locator('#canvas').press('Control+ArrowUp');
  await page.getByText('2', { exact: true }).click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 409,
      y: 258
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 411,
      y: 153
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 656,
      y: 157
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 646,
      y: 423
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 518,
      y: 428
    }
  });

  const point1 = { x: 613, y: 343 };
  const point2 = { x: 363, y: 407 };
  const actualGeometry1 = await getGeometry(page, point1);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry1).toHaveGeometryV0('Storeylinemass1.geom', geometryDir);
  await expect(actualGeometry2).toHaveGeometryV0('storeylinemass2.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('storeylinemass10.png', {
    maxDiffPixels: 960
  });
  expect(await getSnaptrudeDSType(page, point1)).toBe('Mass');
  expect(await getSnaptrudeDSType(page, point2)).toBe('Mass');
});
