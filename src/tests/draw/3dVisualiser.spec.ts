import { expect, test } from '../../common/fixtures';
import { Page } from '@playwright/test';
import { initProject, configure2DProjectForTestV0 } from '../../common/project';
import { clearCanvas } from '../../common/canvas';
import { createGeometryDir, getGeometry, getSnaptrudeDS } from '../../common/geometry';

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
* @id TC_DT_281
* @description Check user able to draw (Wall/Beam) visualizer that displays the object's default height and thickness in 3D
1. Wall
2. Beam

*
* @steps
* 1.Create project
* 2.Draw Object in 3D (Wall and Beam)
*
*
* @expected user should be able to draw (Wall/Beam)visualizer that displays the object's default height and thickness in 3D
*/
test('3DVisualiserWalAndBeam', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'Wall' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 398,
      y: 477
    }
  });
  await page.mouse.move(398, 477);
  await page.mouse.move(589, 487);
  await expect(page).toHaveCanvasSnapshot('Wall3DVisualiser.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Beam' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 398,
      y: 477
    }
  });
  await page.mouse.move(398, 477);
  await page.mouse.move(589, 487);
  await expect(page).toHaveCanvasSnapshot('Beam3DVisualiser.png', {
    maxDiffPixels: 960
  });
});

/**
* @id TC_DT_282
* @description Drawing the wall in 3D, Check user able to see the visualisers for all modes of draw walls
1. Centere Wall (Reference line in middle)
2. External Wall (Reference line at top)
3. Internal Wall (Reference line at bottom )
4. Free-Form Wall
*
* @steps
* 1.Create project
* 2.Draw Wall in 3D (All Modes of draw wall)
*
*
* @expected User should be able to see the visualisers for all modes of draw walls
*/
test('3DVisualiserWallTypes', async () => {
  await page.getByRole('img', { name: 'Wall' }).click();
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.locator('#canvas').click({
    position: {
      x: 391,
      y: 461
    }
  });
  await page.mouse.move(393, 462);
  await page.mouse.move(598, 452);
  await expect(page).toHaveCanvasSnapshot('3DVisualiserCenterWall.png', {
    maxDiffPixels: 960
  });
  await page.locator('#canvas').press('Escape');
  await page.getByRole('img', { name: 'External' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 400,
      y: 515
    }
  });
  await page.mouse.move(401, 516);
  await page.mouse.move(658, 484);
  await expect(page).toHaveCanvasSnapshot('3DVisualiserExternalWall.png', {
    maxDiffPixels: 960
  });
  await page.locator('#canvas').press('Escape');
  await page.getByRole('img', { name: 'Internal' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 489,
      y: 541
    }
  });
  await page.mouse.move(490, 537);
  await page.mouse.move(719, 486);
  await expect(page).toHaveCanvasSnapshot('3DVisualiserInternalWall.png', {
    maxDiffPixels: 960
  });
  await page.locator('#canvas').press('Escape');
  await page.getByRole('img', { name: 'Free Form' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 454,
      y: 490
    }
  });
  await page.mouse.move(454, 490);
  await page.mouse.move(687, 486);
  await expect(page).toHaveCanvasSnapshot('3DVisualiserFreeFormWall.png', {
    maxDiffPixels: 960
  });
});

/**
 * @id TC_DT_283
 * @description Drawing the Circular bim objects in 3D, Check user able to see the same visualiser for circular type of object
 *
 * @steps
 * 1.Create project
 * 2.Draw circular Object in 3D (Type of object)
 *
 *
 * @expected User should be able to see the same visualisers for the Object in 3D (Wall and Beam)
 */
test('3DVisualiserCircularObject', async () => {
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('img', { name: 'drawCircle' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 532,
      y: 494
    }
  });
  await page.mouse.move(532, 494);
  await page.mouse.move(622, 551);
  await expect(page).toHaveCanvasSnapshot('3DVisualiserCircularObject.png', {
    maxDiffPixels: 960
  });
  await page.locator('#canvas').press('Escape');
  await page.getByRole('img', { name: 'Wall' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 534,
      y: 487
    }
  });
  await page.mouse.move(534, 487);
  await page.mouse.move(603, 526);
  await expect(page).toHaveCanvasSnapshot('3DVisualiserCircularObject2.png', {
    maxDiffPixels: 960
  });
});

/**
 * @id TC_DT_284
 * @description Check user able to draw a Space (Line) mass by entering numerical input value and pressing enter key
 *
 * @steps
 * 1 Create project
 * 2 Click design tab
 * 3. Draw Mass
 * 4 Select Draw tool
 * 5  Draw a mass by entering numerical input value +Enter Key
 *
 * @expected User should be able to draw a Space (Line) mass by entering numerical input value and pressing enter key
 */
test('drawSpaceMassByNumericalInput', async () => {
  await page.getByRole('img', { name: 'Space' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 362,
      y: 243
    }
  });

  await page.mouse.move(603, 238);
  await page.keyboard.type('6000');
  await page.locator('#canvas').press('Enter');
  await page.mouse.move(596, 443);
  await page.keyboard.type('6000');
  await page.locator('#canvas').press('Enter');
  await page.mouse.move(356, 438);
  await page.keyboard.type('6000');
  await page.locator('#canvas').press('Enter');
  await page.mouse.move(367, 245);
  await page.keyboard.type('6000');
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'pointer' }).click();
  await expect(page).toHaveCanvasSnapshot('LineMassNumericalInput.png', {
    maxDiffPixels: 960
  });
  const point = {
    x: 495,
    y: 372
  };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('Numerical_InputSpaceMass.geom', geometryDir);
  let component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
});

/**
 * @id TC_DT_285
 * @description Check user able to draw a Space (Line) mass by entering length  input and angle line, pressing enter key
 *
 * @steps
 * 1 Create project
 * 2 Click design tab
 * 3. Draw Mass
 * 4 Select Draw tool
 * 5  Draw a mass by entering input length +Enter Key
 *
 * @expected User should be able to draw a Space (Line) mass by entering length input and angle line pressing enter key
 */
test('drawSpaceMassByAngleInput', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 473,
      y: 305
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 678,
      y: 306
    }
  });
  await page.mouse.move(563, 378);
  await page.locator('#canvas').press('Tab');
  await page.keyboard.type('25');
  await page.locator('#canvas').press('Enter');
  await page.locator('#canvas').click({
    position: {
      x: 474,
      y: 306
    }
  });
  await expect(page).toHaveCanvasSnapshot('LineMassAngleInput.png', {
    maxDiffPixels: 960
  });
  const point = {
    x: 523,
    y: 319
  };
  const actualGeometry = await getGeometry(page, point);
  await expect(actualGeometry).toHaveGeometryV0('LineMassAngleInput.geom', geometryDir);
  let component = await getSnaptrudeDS(page, point);
  expect(component.type).toBe('Mass');
});

/**
* @id TC_DT_306
* @description Verify that the user able to comment the drawn space mass in 2D/3D
1. Draw Space Mass
2. Draw Arc Mass
3. Draw Circle Mass
*
* @steps
* 1. Create Project
* 2.Select Draw Line/Arc/Circle tool
* 3.Select Object  Mass Type  as space
* 4.Draw a masses
* 5.comment the drawn mass in 2D/3D
*
* @expected user should be able to comment the drawn space mass in 2D/3D
*/
test('drawSpaceAddComments', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 237,
      y: 215
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 228,
      y: 330
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 231,
      y: 361
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 378,
      y: 357
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 384,
      y: 210
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 242,
      y: 215
    }
  });
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 584,
      y: 265
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 693,
      y: 262
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 638,
      y: 198
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 591,
      y: 259
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 631,
      y: 239
    }
  });
  await page.getByRole('img', { name: 'drawCircle' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 538,
      y: 389
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 567,
      y: 436
    }
  });
  await page.getByText('Collaborate').click();
  await page.getByRole('img', { name: 'commentmode' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 314,
      y: 237
    }
  });
  await page.locator("//*[text()='Add a comment']");
  await page.getByRole('combobox').fill('Space Mass');
  await page.locator('svg').first().click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.getByRole('img', { name: 'commentmode' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 675,
      y: 227
    }
  });
  await page.locator("//*[text()='Add a comment']");
  await page.getByRole('combobox').fill('Arc Mass');
  await page.locator('#canvas').click({
    position: {
      x: 551,
      y: 413
    }
  });
  await page.locator("//*[text()='Add a comment']");
  await page.getByRole('combobox').fill('Circle Mass');
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.getByRole('img', { name: 'commentmode' }).click();
  await expect(page).toHaveCanvasSnapshot('drawSpaceAddComments.png', {
    maxDiffPixels: 960
  });
});

/**
* @id TC_DT_307
* @description Verify that the user able to Undo/Redo the drawn space mass in 2D/3D
1. Draw Space Mass
2. Draw Arc Mass
3. Draw Circle Mass
*
* @steps
* 1. Create Project
* 2.Select Draw Line/Arc/Circle tool
* 3.Select Object  Mass Type  as space
* 4.Draw a masses
* 5.Undo/Redo the drawn mass in 2D/3D
*
* @expected user should be able to Undo/Redo the drawn space mass in 2D/3D
*/
test('drawMassAndCheckUndoRedo', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 223,
      y: 222
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 217,
      y: 346
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 361,
      y: 344
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 361,
      y: 224
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 224,
      y: 223
    }
  });
  await page.getByRole('img', { name: 'Undo' }).click();
  await page.getByRole('img', { name: 'Redo' }).click();
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 507,
      y: 247
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 621,
      y: 246
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 599,
      y: 307
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 509,
      y: 246
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 546,
      y: 278
    }
  });
  await page.getByRole('img', { name: 'Undo' }).click();
  await page.getByRole('img', { name: 'Redo' }).click();
  await page.getByRole('img', { name: 'drawCircle' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 461,
      y: 461
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 512,
      y: 504
    }
  });
  await page.getByRole('img', { name: 'Undo' }).click();
  await page.getByRole('img', { name: 'Redo' }).click();
  await page.getByRole('img', { name: 'Select' }).click();
  await page.getByRole('img', { name: 'storeySelector' }).click();
  await page.getByText('Storey').first().click();
  await page.getByRole('img', { name: 'pointer' }).first().click();
  await page.getByRole('img', { name: 'delete_icon' }).click();
  await page.getByText('Design').click();
  await expect(page).toHaveCanvasSnapshot('BeforeUndo.png', {
    maxDiffPixels: 960
  });
  await page.getByRole('img', { name: 'Undo' }).click();
  await expect(page).toHaveCanvasSnapshot('AfterUndo.png', {
    maxDiffPixels: 960
  });
  const point1 = {
    x: 323,
    y: 244
  };
  const point2 = {
    x: 523,
    y: 281
  };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('drawMassAndCheckUndoRedo1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('drawMassAndCheckUndoRedo2.geom', geometryDir);
  let component = await getSnaptrudeDS(page, point1);
  expect(component.type).toBe('Mass');
});

/**
* @id TC_DT_308
* @description Verify that the user able to lock/unlock the drawn space mass in 2D/3D
1. Draw Space Mass
2. Draw Arc Mass
3. Draw Circle Mass
*
* @steps
* 1. Create Project
* 2.Select Draw Line/Arc/Circle tool
* 3.Select Object  Mass Type  as space
* 4.Draw a masses
* 5.lock/unlock the drawn mass in 2D/3D
*
* @expected user should be able to lock/unlock the drawn space mass in 2D/3D
*/
test('drawMassAndCheckLockUnlock', async () => {
  await page.locator('#canvas').click({
    position: {
      x: 216,
      y: 225
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 213,
      y: 350
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 351,
      y: 345
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 351,
      y: 232
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 213,
      y: 228
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 256,
      y: 250
    }
  });
  await page.getByRole('img', { name: 'Lock', exact: true }).click();
  await page.locator('#canvas').press('Escape');
  const point = { x: 292, y: 249 };
  let component1 = await getSnaptrudeDS(page, point);
  expect(component1.isLocked).toBeTruthy();
  await page.getByRole('img', { name: 'copy' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 292,
      y: 249
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 507,
      y: 253
    }
  });
  await page.getByRole('img', { name: 'Unlock' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.getByRole('img', { name: 'arc' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 480,
      y: 267
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 593,
      y: 267
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 555,
      y: 205
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 487,
      y: 263
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 528,
      y: 233
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 539,
      y: 214
    }
  });
  await page.getByRole('img', { name: 'Lock', exact: true }).click();
  await page.locator('#canvas').press('Escape');
  const Point = { x: 521, y: 216 };
  let component2 = await getSnaptrudeDS(page, Point);
  expect(component2.isLocked).toBeTruthy();
  await page.getByRole('img', { name: 'rotate' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 521,
      y: 216
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 648,
      y: 226
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.getByRole('img', { name: 'Unlock' }).click();
  await page.getByRole('img', { name: 'drawCircle' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 510,
      y: 379
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 555,
      y: 416
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 523,
      y: 347
    }
  });
  await page.getByRole('img', { name: 'Lock', exact: true }).click();
  await page.getByRole('img', { name: 'move', exact: true }).click();
  await page.locator('#canvas').click({
    position: {
      x: 513,
      y: 354
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 643,
      y: 368
    }
  });
  await page.getByRole('img', { name: 'Unlock' }).click();
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 716,
      y: 230
    }
  });
  const point1 = {
    x: 305,
    y: 248
  };
  const point2 = {
    x: 570,
    y: 226
  };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('drawMassAndCheckLockUnlock1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('drawMassAndCheckLockUnlock2.geom', geometryDir);
  await expect(page).toHaveCanvasSnapshot('drawMassAndCheckLockUnlock.png', {
    maxDiffPixels: 960
  });

  // NOTE: ClearCanvas will not run on locked objects so we need to unlock them first
  await page.locator('body').press('Meta+a');
  await page.getByRole('img', { name: 'Unlock' }).click();
});

/**
* @id TC_DT_309
* @description Verify that the user able to place the door/Window on the drawn wall in 2D/3D

*
* @steps
* 1. Create Project
* 2.Select Draw Line/Arc tool
* 3.Select Object type as wall
* 4.Draw a wall
* 5.place the Door/Window on the drawn wall in 2D/3D
*
*
* @expected user should be able to place the door/Window on the drawn wall in 2D/3D

*/
test('drawWallandPlaceDoorWindow', async () => {
  await page.getByRole('img', { name: 'Wall' }).click();
  await page.getByRole('img', { name: 'Centre' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 296,
      y: 212
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 288,
      y: 402
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 495,
      y: 404
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 492,
      y: 210
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 294,
      y: 213
    }
  });
  await page.getByRole('img', { name: 'doors' }).click();
  await page.locator('#door-singleDoor-list-item-4').click();
  await page.locator('#canvas').click({
    position: {
      x: 383,
      y: 399
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 378,
      y: 488
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 740,
      y: 239
    }
  });
  await page.getByRole('img', { name: 'windows' }).click();
  await page.locator('#window-fixedWindow-list-item-4').click();
  await page.locator('#canvas').click({
    position: {
      x: 392,
      y: 210
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 396,
      y: 268
    }
  });
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 741,
      y: 187
    }
  });
  await expect(page).toHaveCanvasSnapshot('drawWallandPlaceDoorWindow1.png', {
    maxDiffPixels: 960
  });
  const point1 = {
    x: 465,
    y: 402
  };
  const point2 = {
    x: 494,
    y: 312
  };
  const point3 = {
    x: 444,
    y: 210
  };
  const point4 = {
    x: 294,
    y: 293
  };
  const actualGeometry1 = await getGeometry(page, point1);
  await expect(actualGeometry1).toHaveGeometryV0('drawWallandPlaceDoorWindow1.geom', geometryDir);
  const actualGeometry2 = await getGeometry(page, point2);
  await expect(actualGeometry2).toHaveGeometryV0('drawWallandPlaceDoorWindow2.geom', geometryDir);
  const actualGeometry3 = await getGeometry(page, point3);
  await expect(actualGeometry3).toHaveGeometryV0('drawWallandPlaceDoorWindow3.geom', geometryDir);
  const actualGeometry4 = await getGeometry(page, point4);
  await expect(actualGeometry3).toHaveGeometryV0('drawWallandPlaceDoorWindow4.geom', geometryDir);
  let component = await getSnaptrudeDS(page, point1);
  expect(component.type).toBe('Wall');
});
