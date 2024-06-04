import { expect, test } from '../../common/fixtures';
import { getBrep } from '../../utils/verification/GetBrep';
import { Page } from '@playwright/test';
import { initProject, configure2DProjectForTestV0 } from '../../common/project';
import { clearCanvas } from '../../common/canvas';

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
    //   // inputs for the relative paths
    //   let relBrepPath = "../../../testData/split/brep/" + filepath + ".brep";

    //   const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

    //   // saveToFile(mesh, absoluteBrepPath);
    //   let baseMesh = readFromFile(absoluteBrepPath);

    //   compareBrep(mesh, baseMesh);

    await expect(page).toHaveCanvasSnapshot(Screenshotpath + '.png', {
      maxDiffPixels: 960
    });
  }
}

test('Splitmass Edit Parametric', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 485,
      y: 409
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 487,
      y: 280
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 633,
      y: 287
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 636,
      y: 408
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 484,
      y: 407
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 488,
      y: 351
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 637,
      y: 355
    }
  });
  await page.getByRole('img', { name: 'edit' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 556,
      y: 277
    }
  });

  await page.locator('#canvas').click({
    position: {
      x: 556,
      y: 290
    }
  });
  await page.waitForTimeout(100);
  await page.keyboard.type('500');
  await page.waitForTimeout(100);
  await page.locator('#canvas').press('Enter');
  await page.locator('#canvas').press('Escape');
  await verfication(page, 'splitmass11', 'splitmass11');
});

test('Splitmass Copy (Nonunique)', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 156,
      y: 328
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 153,
      y: 212
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 388,
      y: 229
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 387,
      y: 322
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 160,
      y: 322
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 237,
      y: 213
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 233,
      y: 329
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 318,
      y: 242
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 600,
      y: 241
    }
  });
  await page.getByRole('img', { name: 'copy' }).click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 238,
      y: 269
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 388,
      y: 271
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 329,
      y: 282
    }
  });

  await page.locator('#canvas').click({
    position: {
      x: 313,
      y: 303
    }
  });
  await verfication(page, 'splitmass12', 'splitmass12');
});

test('Split Copy (Make unique)', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 277,
      y: 366
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 276,
      y: 251
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 506,
      y: 256
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 509,
      y: 361
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 276,
      y: 355
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 275,
      y: 304
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 503,
      y: 304
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 434,
      y: 274
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 750,
      y: 271
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 551,
      y: 336
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 708,
      y: 310
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 704,
      y: 366
    }
  });

  await page.locator('#canvas').press('Escape');
  await verfication(page, 'splitmass13', 'splitmass13');
});
test('Splitmass copy op makeunique', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 251,
      y: 308
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 251,
      y: 221
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 370,
      y: 221
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 369,
      y: 310
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 250,
      y: 306
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 306,
      y: 217
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 307,
      y: 308
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 339,
      y: 243
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 494,
      y: 240
    }
  });
  await page.locator('#canvas').press('Escape');
  await page.locator('#canvas').press('Control+a');
  await page.getByRole('button', { name: 'Make Unique' }).click();

  await page.locator('#canvas').press('Escape');
  await verfication(page, 'splitmass14', 'splitmass14');
});

test('Splitmass Copy (Nonunique) edit', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 349,
      y: 412
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 341,
      y: 277
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 629,
      y: 294
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 636,
      y: 409
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 354,
      y: 412
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 488,
      y: 276
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 491,
      y: 413
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 519,
      y: 324
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 830,
      y: 320
    }
  });
  await page.getByRole('img', { name: 'edit' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 729,
      y: 272
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 730,
      y: 235
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 869,
      y: 277
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 874,
      y: 235
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 663,
      y: 318
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 802,
      y: 316
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 887,
      y: 233
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 891,
      y: 414
    }
  });

  await page.locator('#canvas').press('Escape');
  await verfication(page, 'splitmass15', 'splitmass15');
});
test('Splitmass Copy (Make unique) edit', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 136,
      y: 343
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 139,
      y: 232
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 390,
      y: 234
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 387,
      y: 337
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 139,
      y: 350
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 211,
      y: 230
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 210,
      y: 348
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 304,
      y: 231
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 304,
      y: 346
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 319,
      y: 269
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 665,
      y: 261
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 521,
      y: 349
    }
  });
  await page.getByRole('img', { name: 'edit' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 522,
      y: 233
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 522,
      y: 206
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 599,
      y: 227
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 595,
      y: 182
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 687,
      y: 229
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 686,
      y: 156
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 484,
      y: 276
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 560,
      y: 275
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 558,
      y: 238
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 646,
      y: 238
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 648,
      y: 203
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 738,
      y: 204
    }
  });
  await page.locator('#canvas').press('Escape');
  await verfication(page, 'splitmass16', 'splitmass16');
});

test('Splitmass Make unique in OP edit', async () => {
  await page.waitForTimeout(100);
  await page.locator('#canvas').click({
    position: {
      x: 199,
      y: 370
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 197,
      y: 250
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 467,
      y: 280
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 468,
      y: 369
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 198,
      y: 371
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 281,
      y: 251
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 282,
      y: 371
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 376,
      y: 251
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 372,
      y: 370
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('body').press('Control+a');
  await page.getByRole('button', { name: 'Make Unique' }).click();
  await page.getByRole('img', { name: 'edit' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 418,
      y: 251
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 422,
      y: 190
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 467,
      y: 279
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 526,
      y: 279
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 377,
      y: 290
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 527,
      y: 290
    }
  });

  await page.locator('#canvas').press('Escape');
  await verfication(page, 'splitmass17', 'splitmass17');
});

test('Splitmass Copy (Nonunique) move', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 227,
      y: 375
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 223,
      y: 259
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 405,
      y: 265
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 418,
      y: 381
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 231,
      y: 377
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 283,
      y: 259
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 283,
      y: 372
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 287,
      y: 314
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 405,
      y: 319
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.waitForTimeout(100);
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'move', exact: true }).click();
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 386,
      y: 280
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 731,
      y: 272
    }
  });
  await page.locator('#canvas').press('Escape');
  await page.waitForTimeout(100);
  await page.getByRole('img', { name: '>' }).nth(1).click();
  await page.getByRole('img', { name: 'selectAll' }).click();
  await page.getByRole('img', { name: '>' }).nth(1).click();
  await page.getByRole('img', { name: 'move', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 639,
      y: 283
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 630,
      y: 202
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 688,
      y: 182
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 694,
      y: 293
    }
  });
  await page.locator('#canvas').press('Escape');
  await page.locator('#canvas').press('Escape');
  await verfication(page, 'splitmass18', 'splitmass18');
});
test('Splitmass Copy (Make unique) move', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 279,
      y: 343
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 279,
      y: 250
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 438,
      y: 258
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 441,
      y: 347
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 273,
      y: 341
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 335,
      y: 249
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 332,
      y: 342
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.waitForTimeout(100);
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 390,
      y: 265
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 650,
      y: 260
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 519,
      y: 352
    }
  });
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('body').press('Escape');
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'move', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 629,
      y: 274
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 694,
      y: 218
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 665,
      y: 237
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 766,
      y: 237
    }
  });
  await page.locator('#canvas').press('Escape');
  await verfication(page, 'splitmass19', 'splitmass19');
});

test('Splitmass Make unique in OP move', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 237,
      y: 374
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 221,
      y: 236
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 464,
      y: 258
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 463,
      y: 371
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 240,
      y: 373
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 300,
      y: 232
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 306,
      y: 373
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.waitForTimeout(100);
  await page.locator('body').press('Control+a');
  await page.getByRole('button', { name: 'Make Unique' }).click();
  await page.getByRole('button', { name: 'Make Unique' }).press('Control+a');
  await page.getByRole('img', { name: 'move', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 418,
      y: 285
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 585,
      y: 281
    }
  });
  await page.locator('body').press('Escape');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 636,
      y: 305
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 802,
      y: 303
    }
  });

  await page.getByRole('img', { name: 'draw', exact: true }).click();

  await page.waitForTimeout(100);
  await verfication(page, 'splitmass20', 'splitmass20');
});
