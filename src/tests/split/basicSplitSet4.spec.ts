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
    // //inputs for the relative paths
    // let relBrepPath = "../../../testData/split/brep/" + filepath + ".brep";
    //
    // const { absoluteBrepPath } = getAbsolutePath(relBrepPath);
    //
    // //  saveToFile(mesh, absoluteBrepPath);
    // let baseMesh = readFromFile(absoluteBrepPath);
    //
    // compareBrep(mesh, baseMesh);

    await expect(page).toHaveCanvasSnapshot(Screenshotpath + '.png', {
      maxDiffPixels: 960
    });
  }
}

test('Splitmass draw in 2D', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 227,
      y: 260
    }
  });

  await page.locator('#canvas').click({
    position: {
      x: 230,
      y: 176
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 351,
      y: 178
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 356,
      y: 264
    }
  });

  await page.locator('#canvas').click({
    position: {
      x: 230,
      y: 262
    }
  });

  await page.locator('#canvas').click({
    position: {
      x: 285,
      y: 176
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 287,
      y: 257
    }
  });
  await verfication(page, 'splitmass1', 'splitmass1');
});

test.skip('Splitmass draw in 3D', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);

  await page.getByRole('img', { name: 'zoomOut' }).click();

  for (let i = 0; i < 15; i++) {
    await page.locator('#canvas').click({
      position: {
        x: 545,
        y: 305
      }
    });
  }

  await page.getByText('Design').click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();

  await page.locator('#canvas').click({
    position: {
      x: 465,
      y: 524
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 422,
      y: 443
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 516,
      y: 405
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 553,
      y: 467
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 459,
      y: 512
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 460,
      y: 388
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 505,
      y: 455
    }
  });

  await page.locator('#canvas').press('Escape');
  await verfication(page, 'splitmass2', 'splitmass2');

  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
});

// TODO: Fix the test
test.skip('singlemass into multiple mass', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 206,
      y: 330
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 218,
      y: 188
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 376,
      y: 194
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 376,
      y: 331
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 205,
      y: 327
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 210,
      y: 250
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 375,
      y: 255
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 491,
      y: 336
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 498,
      y: 150
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 696,
      y: 158
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 707,
      y: 334
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 488,
      y: 337
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 591,
      y: 153
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 590,
      y: 336
    }
  });

  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 285,
      y: 232
    }
  });
  await page.getByText('Change Object Type').click();
  await page.getByText('Beam').click();
  await page.locator('#canvas').click({
    position: {
      x: 324,
      y: 290
    }
  });
  await page.waitForTimeout(100);
  await page.getByText('Change Object Type').click();
  await page.getByText('Column').click();
  await page.locator('#canvas').click({
    position: {
      x: 547,
      y: 251
    }
  });
  await page.getByText('Change Object Type').click();
  await page.getByText('Furniture').click();
  await page.locator('#canvas').click({
    position: {
      x: 641,
      y: 292
    }
  });
  await page.getByText('Change Object Type').click();
  await page.locator('#scrollable-dropdown-Mass-6').getByText('Mass').click();

  await page.locator('#canvas').press('Escape');

  await page.waitForTimeout(100);
  await verfication(page, 'splitmass3', 'splitmass3');
});

test('differentshapemass', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 586,
      y: 275
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 581,
      y: 150
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 726,
      y: 157
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 729,
      y: 272
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 586,
      y: 272
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 668,
      y: 226
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 585,
      y: 208
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 731,
      y: 206
    }
  });

  await page.locator('#canvas').press('Escape');
  await page.waitForTimeout(100);
  await verfication(page, 'splitmass4', 'splitmass4');
});

test('Select drawn masses from Storey selection', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 208,
      y: 362
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 205,
      y: 245
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 377,
      y: 250
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 383,
      y: 365
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 207,
      y: 364
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 208,
      y: 301
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 375,
      y: 295
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.getByRole('img', { name: '>' }).nth(1).click();
  await page.getByRole('img', { name: 'selectAll' }).click();
  await page.getByRole('img', { name: '>' }).nth(1).click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 293,
      y: 303
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 293,
      y: 360
    }
  });
  await page.waitForTimeout(100);
  await page.locator('#canvas').press('Escape');
  await page.waitForTimeout(100);
  await verfication(page, 'splitmass5', 'splitmass5');
});

test('Update label names', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 586,
      y: 275
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 581,
      y: 150
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 726,
      y: 157
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 729,
      y: 272
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 586,
      y: 272
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 668,
      y: 226
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 585,
      y: 208
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 731,
      y: 206
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 654,
      y: 213
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 654,
      y: 273
    }
  });

  await page.getByRole('img', { name: 'draw', exact: true }).click();

  await page.locator('#canvas').dblclick({
    position: {
      x: 648,
      y: 168
    }
  });
  await page.waitForTimeout(100);
  await page.keyboard.type('commonroom');
  await page.waitForTimeout(100);
  await page.locator('#canvas').press('Enter');
  await page.locator('#canvas').dblclick({
    position: {
      x: 620,
      y: 233
    }
  });
  await page.waitForTimeout(100);
  await page.keyboard.type('bathroom');
  await page.waitForTimeout(100);
  await page.locator('#canvas').press('Enter');
  await page.locator('#canvas').dblclick({
    position: {
      x: 702,
      y: 248
    }
  });
  await page.waitForTimeout(100);
  await page.keyboard.type('bedroom');
  await page.waitForTimeout(100);
  await page.locator('#canvas').press('Enter');

  await page.locator('#canvas').press('Escape');
  await page.waitForTimeout(100);
  await verfication(page, 'splitmass6', 'splitmass6');
});

test('Spilt the masses using edit', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 290,
      y: 304
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 286,
      y: 171
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 449,
      y: 181
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 461,
      y: 306
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 296,
      y: 307
    }
  });
  await page.getByRole('img', { name: 'edit' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 366,
      y: 172
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 370,
      y: 143
    }
  });

  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 365,
      y: 146
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 361,
      y: 304
    }
  });

  await verfication(page, 'splitmass7', 'splitmass7');
});

test('Spilt the masses using edit move tool', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 409,
      y: 388
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 409,
      y: 263
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 557,
      y: 273
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 557,
      y: 384
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 407,
      y: 389
    }
  });
  await page.getByRole('img', { name: 'move', exact: true }).click();
  await page.locator('#canvas').dblclick({
    position: {
      x: 484,
      y: 261
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 487,
      y: 226
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 408,
      y: 305
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 562,
      y: 305
    }
  });

  await verfication(page, 'splitmass8', 'splitmass8');
});

test('Splitmass Edit the vertexes', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 409,
      y: 388
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 409,
      y: 263
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 557,
      y: 273
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 557,
      y: 384
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 407,
      y: 389
    }
  });

  await page.getByRole('img', { name: 'edit' }).click();

  await page.locator('#canvas').click({
    position: {
      x: 562,
      y: 261
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 611,
      y: 263
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 560,
      y: 384
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 618,
      y: 382
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 505,
      y: 265
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 516,
      y: 387
    }
  });
  await verfication(page, 'splitmass9', 'splitmass9');
});

test('Splitmass Edit the Edges', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 409,
      y: 388
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 409,
      y: 263
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 557,
      y: 273
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 557,
      y: 384
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 407,
      y: 389
    }
  });

  await page.getByRole('img', { name: 'edit' }).click();

  await page.locator('#canvas').click({
    position: {
      x: 480,
      y: 258
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 480,
      y: 228
    }
  });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 412,
      y: 346
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 559,
      y: 348
    }
  });
  await verfication(page, 'splitmass10', 'splitmass10');
});
