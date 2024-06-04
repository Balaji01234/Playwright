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
  await page.waitForTimeout(500);
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

    //const { absoluteBrepPath } = getAbsolutePath(relBrepPath);

    // saveToFile(mesh, absoluteBrepPath);
    //let baseMesh = readFromFile(absoluteBrepPath);

    //compareBrep(mesh, baseMesh);

    await expect(page).toHaveCanvasSnapshot(Screenshotpath + '.png', {
      maxDiffPixels: 960
    });
  }
}

test('splitmass Copy Nonunique rotate', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 215,
      y: 348
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 215,
      y: 226
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 396,
      y: 236
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 398,
      y: 354
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 219,
      y: 347
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 277,
      y: 226
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 281,
      y: 350
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.waitForTimeout(100);
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 246,
      y: 272
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 499,
      y: 280
    }
  });
  await page.getByRole('img', { name: 'copy' }).click();
  await page.waitForTimeout(100);
  await page.locator('#canvas').press('Escape');
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'rotate' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 335,
      y: 272
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 437,
      y: 279
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 231,
      y: 264
    }
  });
  await page.getByRole('img', { name: 'rotate' }).click();
  await page.locator('body').press('Escape');
  await page.waitForTimeout(100);
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 277,
      y: 257
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 390,
      y: 249
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await verfication(page, 'splitmass21', 'splitmass21');
});

test('splitmass Copy unique rotate', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 300,
      y: 403
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 302,
      y: 284
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 484,
      y: 289
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 490,
      y: 402
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 301,
      y: 401
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 371,
      y: 282
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 373,
      y: 401
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 303,
      y: 344
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 483,
      y: 341
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 447,
      y: 299
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 764,
      y: 301
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 581,
      y: 373
    }
  });
  await page.getByRole('img', { name: 'rotate' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 442,
      y: 321
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 556,
      y: 327
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 302,
      y: 313
    }
  });
  await page.getByRole('img', { name: 'rotate' }).click();
  await page.locator('body').press('Escape');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 739,
      y: 287
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 745,
      y: 340
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await verfication(page, 'splitmass22', 'splitmass22');
});

// TODO: fix flaky test
test.skip('splitmass Copy op rotate', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 194,
      y: 350
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 196,
      y: 199
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 445,
      y: 201
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 444,
      y: 356
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 196,
      y: 350
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 272,
      y: 199
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 268,
      y: 348
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 363,
      y: 199
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 364,
      y: 349
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 194,
      y: 269
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 446,
      y: 267
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 400,
      y: 223
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 708,
      y: 218
    }
  });
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('body').press('Control+a');
  await page.getByRole('button', { name: 'Make Unique' }).click();
  await page.getByRole('img', { name: 'rotate' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 419,
      y: 246
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 480,
      y: 240
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 343,
      y: 254
    }
  });
  await page.getByRole('img', { name: 'rotate' }).click();
  await page.locator('body').press('Escape');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.waitForTimeout(50);
  await page.locator('#canvas').click({
    position: {
      x: 257,
      y: 185
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 337,
      y: 180
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await verfication(page, 'splitmass23', 'splitmass23');
});

// TODO: fix flaky test
test.skip('splitmass Copy Nonunique flip', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 235,
      y: 375
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 238,
      y: 229
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 488,
      y: 229
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 415,
      y: 298
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 456,
      y: 373
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 237,
      y: 373
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 236,
      y: 299
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 417,
      y: 298
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.waitForTimeout(100);
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 375,
      y: 250
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 688,
      y: 247
    }
  });
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'flipX', exact: true }).click();
  await page.getByRole('img', { name: 'flipXY' }).click();
  await page.locator('body').press('Escape');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 382,
      y: 233
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 378,
      y: 298
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await verfication(page, 'splitmass24', 'splitmass24');
});

test('splitmass Copy unique flip', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 148,
      y: 347
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 152,
      y: 202
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 351,
      y: 218
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 347,
      y: 278
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 289,
      y: 278
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 288,
      y: 347
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 152,
      y: 347
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 287,
      y: 273
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 151,
      y: 267
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 306,
      y: 240
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 646,
      y: 233
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 431,
      y: 308
    }
  });
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'flipX', exact: true }).click();
  await page.getByRole('img', { name: 'flipXY' }).click();
  await page.locator('body').press('Escape');

  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 288,
      y: 201
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 291,
      y: 268
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await verfication(page, 'splitmass25', 'splitmass25');
});

test('splitmass Copy op flip', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 207,
      y: 386
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 211,
      y: 250
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 400,
      y: 261
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 394,
      y: 321
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 463,
      y: 326
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 463,
      y: 379
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 214,
      y: 384
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 399,
      y: 314
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 205,
      y: 316
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 315,
      y: 268
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 668,
      y: 263
    }
  });
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('#canvas').press('Control+a');
  await page.getByRole('button', { name: 'Make Unique' }).click();
  await page.getByRole('img', { name: 'flipX', exact: true }).click();
  await page.getByRole('img', { name: 'flipXY' }).click();
  await page.locator('body').press('Escape');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 343,
      y: 249
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 336,
      y: 314
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 719,
      y: 315
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 724,
      y: 389
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await verfication(page, 'splitmass26', 'splitmass26');
});

// TODO: fix flaky test
test.skip('splitmass Copy Nonunique editlength', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 189,
      y: 367
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 193,
      y: 244
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 387,
      y: 251
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 385,
      y: 366
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 188,
      y: 369
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 281,
      y: 245
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 284,
      y: 366
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.waitForTimeout(100);
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 354,
      y: 264
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 661,
      y: 260
    }
  });
  await page.getByRole('img', { name: 'copy' }).click();
  await page.getByRole('img', { name: 'verticalResize' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 348,
      y: 238
    }
  });

  await page.keyboard.type('4000');
  await page.locator('#canvas').press('Enter');
  await page.locator('#canvas').press('Escape');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.waitForTimeout(100);
  await page.locator('#canvas').click({
    position: {
      x: 189,
      y: 303
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 251,
      y: 304
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await verfication(page, 'splitmass27', 'splitmass27');
});

test('splitmass Copy unique editlength', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 163,
      y: 366
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 165,
      y: 226
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 415,
      y: 237
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 413,
      y: 363
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 160,
      y: 370
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 282,
      y: 227
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 277,
      y: 371
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 379,
      y: 256
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 780,
      y: 252
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 549,
      y: 359
    }
  });
  await page.getByRole('img', { name: 'copy' }).click();
  await page.getByRole('img', { name: 'verticalResize' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 379,
      y: 220
    }
  });

  await page.keyboard.type('6000');
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'verticalResize' }).click();
  await page.locator('body').press('Escape');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 303,
      y: 230
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 306,
      y: 363
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await verfication(page, 'splitmass28', 'splitmass28');
});

test('splitmass Copy op editlength', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 231,
      y: 334
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 228,
      y: 202
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 423,
      y: 206
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 428,
      y: 340
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 229,
      y: 339
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 233,
      y: 273
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 335,
      y: 271
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 334,
      y: 199
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 306,
      y: 267
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 302,
      y: 344
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 383,
      y: 225
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 660,
      y: 229
    }
  });
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('body').press('Control+a');
  await page.getByRole('button', { name: 'Make Unique' }).click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 336,
      y: 267
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 341,
      y: 339
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('body').press('Escape');
  await verfication(page, 'splitmass29', 'splitmass29');
});

// TODO: fix flaky test
test.skip('splitmass Copy Nonunique Add vertex', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 195,
      y: 342
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 190,
      y: 229
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 357,
      y: 237
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 370,
      y: 347
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 200,
      y: 349
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 280,
      y: 233
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 279,
      y: 340
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('body').press('Control+a');
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 299,
      y: 247
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 590,
      y: 252
    }
  });
  await page.getByRole('img', { name: 'copy' }).click();
  await page.getByRole('img', { name: 'addLayer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 227,
      y: 228
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 278,
      y: 230
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 280,
      y: 288
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 360,
      y: 281
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 278,
      y: 284
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 355,
      y: 287
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('body').press('Escape');
  await verfication(page, 'splitmass30', 'splitmass30');
});
