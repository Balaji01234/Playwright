import { expect, test } from '../../common/fixtures';
import readFromFile from '../../utils/verification/ReadFromFile';
import { getBrep } from '../../utils/verification/GetBrep';
import compareBrep from '../../utils/verification/CompareBrep';
import { Page } from '@playwright/test';
import { initProject, configure2DProjectForTestV0 } from '../../common/project';
import { clearCanvas } from '../../common/canvas';

const getAbsolutePath = require('../../utils/verification/GetAbsolutePath');

let page: Page;

test.beforeAll(async ({ browser }, testInfo) => {
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

async function verfication(page: Page, filepath: string, Screenshotpath: string) {
  let mesh = await getBrep(page);

  expect(mesh).toBeDefined();

  if (mesh) {
    // inputs for the relative paths
    let relBrepPath = '../../../testData/split/brep/' + filepath + '.brep';

    const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

    // saveToFile(mesh, absoluteBrepPath);
    let baseMesh = readFromFile(absoluteBrepPath);

    compareBrep(mesh, baseMesh);

    await expect(page).toHaveCanvasSnapshot(Screenshotpath + '.png', {
      maxDiffPixels: 960
    });
  }
}

test('splitmass Copy (unique)Add vertex', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 195,
      y: 314
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 192,
      y: 197
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 355,
      y: 201
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 358,
      y: 315
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 190,
      y: 312
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 274,
      y: 195
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 269,
      y: 317
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 319,
      y: 255
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 606,
      y: 249
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 461,
      y: 314
    }
  });
  await page.getByRole('img', { name: 'copy' }).click();
  await page.getByRole('img', { name: 'addLayer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 236,
      y: 247
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 235,
      y: 195
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 277,
      y: 257
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 311,
      y: 195
    }
  });
  await page.getByRole('img', { name: 'addLayer' }).click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 236,
      y: 197
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 236,
      y: 251
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 277,
      y: 243
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 314,
      y: 194
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 317,
      y: 255
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 277,
      y: 248
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('body').press('Escape');
  await verfication(page, 'splitmass31', 'splitmass31');
});

test('splitmass Copy (op)Add vertex', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 183,
      y: 343
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 180,
      y: 195
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 406,
      y: 206
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 404,
      y: 336
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 187,
      y: 336
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 183,
      y: 254
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 405,
      y: 260
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 317,
      y: 253
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 313,
      y: 347
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('body').press('Control+a');
  await page.getByRole('button', { name: 'Make Unique' }).click();
  await page.getByRole('img', { name: 'addLayer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 244,
      y: 281
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 248,
      y: 249
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 249,
      y: 340
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 249,
      y: 343
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 250,
      y: 251
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 244,
      y: 343
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await verfication(page, 'splitmass32', 'splitmass32');
});

test('splitmass Copy (Nonunique)remove vertex', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 280,
      y: 347
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 286,
      y: 224
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 486,
      y: 234
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 494,
      y: 286
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 522,
      y: 287
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 523,
      y: 340
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 284,
      y: 340
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 282,
      y: 283
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 485,
      y: 284
    }
  });
  await page.getByRole('img', { name: 'addLayer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 396,
      y: 253
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 380,
      y: 224
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 382,
      y: 284
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 431,
      y: 286
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 435,
      y: 346
    }
  });
  await page.getByRole('img', { name: 'removeLayer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 380,
      y: 261
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 382,
      y: 222
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 381,
      y: 286
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 432,
      y: 286
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 379,
      y: 225
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 378,
      y: 280
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 417,
      y: 288
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 418,
      y: 345
    }
  });
  await verfication(page, 'splitmass33', 'splitmass33');
});

test('splitmass Copy (unique)remove vertex', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 189,
      y: 378
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 182,
      y: 230
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 403,
      y: 238
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 404,
      y: 376
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 189,
      y: 375
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 190,
      y: 305
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 402,
      y: 303
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 248,
      y: 231
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 252,
      y: 298
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 343,
      y: 227
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 343,
      y: 297
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 312,
      y: 260
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 676,
      y: 255
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 480,
      y: 319
    }
  });
  await page.getByRole('img', { name: 'addLayer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 247,
      y: 263
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 295,
      y: 320
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 293,
      y: 299
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 289,
      y: 378
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 289,
      y: 252
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 341,
      y: 266
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 249,
      y: 266
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 340,
      y: 270
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 298,
      y: 300
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 291,
      y: 381
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('body').press('Escape');
  await verfication(page, 'splitmass34', 'splitmass34');
});

test('splitmass Copy (op)remove vertex', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 171,
      y: 384
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 172,
      y: 210
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 425,
      y: 212
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 424,
      y: 382
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 173,
      y: 393
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 265,
      y: 209
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 266,
      y: 381
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 267,
      y: 261
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 426,
      y: 269
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 374,
      y: 225
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 750,
      y: 230
    }
  });
  await page.getByRole('button', { name: 'Make Unique' }).click();
  await page.getByRole('img', { name: 'copy' }).click();
  await page.getByRole('img', { name: 'addLayer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 343,
      y: 229
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 347,
      y: 209
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 343,
      y: 261
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 342,
      y: 388
    }
  });
  await page.getByRole('img', { name: 'removeLayer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 341,
      y: 230
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 345,
      y: 206
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 342,
      y: 263
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 341,
      y: 263
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 341,
      y: 382
    }
  });
  await page.locator('body').press('Escape');
  await verfication(page, 'splitmass35', 'splitmass35');
});

// TODO Fix this test
test.skip('splitmass Copy (Nonunique)apply material', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 247,
      y: 349
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 252,
      y: 198
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 473,
      y: 209
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 480,
      y: 343
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 252,
      y: 351
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 251,
      y: 274
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 361,
      y: 277
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 358,
      y: 348
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 365,
      y: 272
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 473,
      y: 274
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 381,
      y: 227
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 692,
      y: 234
    }
  });
  await page.getByRole('img', { name: 'copy' }).click();
  await page.getByRole('img', { name: 'materials' }).click();
  await page.locator('[data-tooltip-id="3"]').click();
  await page.locator('#canvas').click({
    position: {
      x: 686,
      y: 230
    }
  });
  await page.getByRole('img', { name: 'materials' }).click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 624,
      y: 202
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 625,
      y: 273
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('body').press('Escape');
  await verfication(page, 'splitmass36', 'splitmass36');
});

// TODO: Fix the test
test.skip('splitmass Copy (makeunique)apply material', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 215,
      y: 336
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 216,
      y: 210
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 384,
      y: 200
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 383,
      y: 330
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 214,
      y: 331
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 382,
      y: 263
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 505,
      y: 264
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 502,
      y: 397
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 316,
      y: 392
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 318,
      y: 334
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 447,
      y: 317
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 831,
      y: 310
    }
  });
  await page.getByRole('img', { name: 'copy' }).click();
  await page.getByRole('button', { name: 'Make Unique' }).click();
  await page.getByRole('button', { name: 'Make Unique' }).press('Escape');
  await page.getByRole('img', { name: 'close' }).click();
  await page.getByRole('img', { name: 'materials' }).click();
  await page.waitForTimeout(2000);
  await page.locator('//p[text()="Concrete"]').click();
  await page.waitForTimeout(2000);
  await page.locator('[data-tooltip-id="6"]').click();
  await page.locator('#canvas').click({
    position: {
      x: 292,
      y: 272
    }
  });
  await page.locator('[data-tooltip-id="7"]').click();
  await page.locator('#canvas').click({
    position: {
      x: 445,
      y: 359
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 289,
      y: 208
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 295,
      y: 334
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 436,
      y: 260
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 445,
      y: 398
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await verfication(page, 'splitmass38', 'splitmass38');
});

test('rotate the mass after split', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 246,
      y: 340
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 241,
      y: 227
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 439,
      y: 240
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 367,
      y: 294
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 429,
      y: 333
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 247,
      y: 338
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.getByRole('img', { name: 'rotate' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 307,
      y: 274
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 476,
      y: 280
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 186,
      y: 281
    }
  });
  await page.getByRole('img', { name: 'rotate' }).click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 285,
      y: 208
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 285,
      y: 318
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await verfication(page, 'splitmass39', 'splitmass39');
});

test('Flip the mass after split', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 282,
      y: 239
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 516,
      y: 242
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 446,
      y: 327
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 513,
      y: 376
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 279,
      y: 358
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 285,
      y: 244
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'flipX', exact: true }).click();
  await page.getByRole('img', { name: 'flipXY' }).click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 413,
      y: 236
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 411,
      y: 362
    }
  });
  await page.locator('#canvas').press('Escape');
  await verfication(page, 'splitmass40', 'splitmass40');
});

// TODO: Fix the test
test.skip('splitmass Copy (unique)apply material', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 216,
      y: 375
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 210,
      y: 274
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 327,
      y: 234
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 432,
      y: 279
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 440,
      y: 372
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 329,
      y: 408
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 214,
      y: 382
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 330,
      y: 242
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 330,
      y: 407
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 380,
      y: 294
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 672,
      y: 291
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 533,
      y: 385
    }
  });
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('body').press('Escape');
  await page.locator('[alt="close"]').first().click();
  await page.getByRole('img', { name: 'materials' }).click();
  await page.locator('[data-tooltip-id="3"]').click();
  await page.locator('#canvas').click({
    position: {
      x: 296,
      y: 335
    }
  });
  await page.locator('[data-tooltip-id="2"]').click();
  await page.locator('#canvas').click({
    position: {
      x: 371,
      y: 318
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 216,
      y: 323
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 333,
      y: 325
    }
  });
  await page.locator('#canvas').press('Escape');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await verfication(page, 'splitmass37', 'splitmass37');
});
