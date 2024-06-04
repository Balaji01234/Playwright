import { expect, test } from '../../common/fixtures';
import { Page } from '@playwright/test';
import { sTrudePage } from '../../common/page';
import { initProject, configure2DProjectForTest } from '../../common/project';
import { clearCanvas } from '../../common/canvas';
let page: Page;

test.beforeAll(async ({ browser }, testInfo) => {
  const context = await browser.newContext();
  page = await sTrudePage(await context.newPage(), testInfo);
  await initProject(page, testInfo);
});

test.beforeEach(async () => {
  test.setTimeout(180000);
  await configure2DProjectForTest(page);
  await page.evaluate(() => {
    store.exposed.ComponentTestIdGenerator.reset();
  });
});

test.afterEach(async () => {
  await clearCanvas(page);
});
test.afterAll(async () => {
  await page.close();
});

/**
 * @id TC_OFF_036
 * @description Check  whether the junction mode of  Intersection
(Fragmented)is appeared or not  
 *
 * @steps
 * 1. Create Project 
	* 2. Click Design tab 
	* 3.Select Draw tool 
	* 4.Select Space
 *
 * @expected The junction mode of Intersection 
(Fragmented)should appeared
 */
test('TC_OFF_036', async () => {
  await page.getByRole('img', { name: 'Space' }).click();
  await page.getByRole('img', { name: 'Centre' }).click();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('1500');
  await page.getByRole('spinbutton').press('Enter');
  await expect(page.locator("//input[@type='checkbox']")).not.toBeChecked();
  await page.canvas.click(406, 246);
  await page.canvas.click(605, 320);
  await page.canvas.click(609, 215);
  await page.canvas.click(403, 318);
  await page.canvas.click(405, 249);
  await page.getByRole('img', { name: 'External' }).click();
  await page.canvas.click(396, 383);
  await page.canvas.click(627, 431);
  await page.canvas.click(622, 370);
  await page.canvas.click(397, 489);
  await page.canvas.click(393, 396);
  await page.getByRole('img', { name: 'Internal' }).click();
  await page.canvas.click(418, 559);
  await page.canvas.click(640, 619);
  await page.canvas.click(638, 535);
  await page.canvas.click(420, 598);
  await page.canvas.click(420, 562);
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.canvas.click(804, 390);
  await expect(page).toHaveCanvasSnapshot('tc_off_036.png', { maxDiffPixels: 960 });
  const component1 = await page.canvas.getComponent({ x: 401, y: 284 });
  await expect(component1.geometry).toMatchGeometry('tc_off_036.geom');
  const component2 = await page.canvas.getComponent({ x: 612, y: 250 });
  await expect(component2.geometry).toMatchGeometry('tc_off_036.geom');
  const component3 = await page.canvas.getComponent({ x: 534, y: 250 });
  await expect(component3.geometry).toMatchGeometry('tc_off_036.geom');
  const component4 = await page.canvas.getComponent({ x: 406, y: 425 });
  await expect(component4.geometry).toMatchGeometry('tc_off_036.geom');
  const component5 = await page.canvas.getComponent({ x: 643, y: 392 });
  await expect(component5.geometry).toMatchGeometry('tc_off_036.geom');
  const component6 = await page.canvas.getComponent({ x: 516, y: 409 });
  await expect(component6.geometry).toMatchGeometry('tc_off_036.geom');
  const component7 = await page.canvas.getComponent({ x: 406, y: 568 });
  await expect(component7.geometry).toMatchGeometry('tc_off_036.geom');
  const component8 = await page.canvas.getComponent({ x: 627, y: 556 });
  await expect(component8.geometry).toMatchGeometry('tc_off_036.geom');
  const component9 = await page.canvas.getComponent({ x: 541, y: 569 });
  await expect(component9.geometry).toMatchGeometry('tc_off_036.geom');
  await expect(component1.type).toBe('Mass');
  await expect(component2.type).toBe('Mass');
  await expect(component3.type).toBe('Mass');
  await expect(component4.type).toBe('Mass');
  await expect(component5.type).toBe('Mass');
  await expect(component6.type).toBe('Mass');
  await expect(component7.type).toBe('Mass');
  await expect(component8.type).toBe('Mass');
  await expect(component9.type).toBe('Mass');
});

/**
 * @id TC_OFF_037
 * @description Check  whether the junction mode of  Intersection
(Fragmented)is appeared or not  
 *
 * @steps
 * 1. Create Project 
	* 2. Click Design tab 
	* 3.Select Draw tool 
	* 4.Select Space
 *
 * @expected The junction mode of Intersection 
(Fragmented)should appeared
 */
test('TC_OFF_037', async () => {
  await page.getByRole('img', { name: 'Space' }).click();
  await page.getByRole('img', { name: 'Centre' }).click();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('1500');
  await page.getByRole('spinbutton').press('Enter');
  await expect(page.locator("//input[@type='checkbox']")).not.toBeChecked();
  await page.canvas.click(350, 319);
  await page.canvas.click(521, 252);
  await page.getByRole('img', { name: 'arc' }).click();
  await page.canvas.click(538, 375);
  await page.canvas.click(590, 307);
  await page.canvas.click(357, 235);
  await page.canvas.click(430, 331);
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'External' }).click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.canvas.click(659, 338);
  await page.canvas.click(788, 259);
  await page.getByRole('img', { name: 'arc' }).click();
  await page.canvas.click(837, 366);
  await page.canvas.click(867, 280);
  await page.canvas.click(651, 259);
  await page.canvas.click(713, 348);
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'Internal' }).click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.canvas.click(562, 543);
  await page.canvas.click(706, 455);
  await page.getByRole('img', { name: 'arc' }).click();
  await page.canvas.click(741, 553);
  await page.canvas.click(793, 481);
  await page.canvas.click(553, 431);
  await page.canvas.click(626, 519);
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'arc', exact: true }).click();
  await page.canvas.click(804, 390);
  await expect(page).toHaveCanvasSnapshot('tc_off_037.png', { maxDiffPixels: 960 });
  const component1 = await page.canvas.getComponent({ x: 453, y: 293 });
  await expect(component1.geometry).toMatchGeometry('tc_off_037.geom');
  const component2 = await page.canvas.getComponent({ x: 586, y: 280 });
  await expect(component2.geometry).toMatchGeometry('tc_off_037.geom');
  const component3 = await page.canvas.getComponent({ x: 453, y: 337 });
  await expect(component3.geometry).toMatchGeometry('tc_off_037.geom');
  const component4 = await page.canvas.getComponent({ x: 677, y: 274 });
  await expect(component4.geometry).toMatchGeometry('tc_off_037.geom');
  const component5 = await page.canvas.getComponent({ x: 861, y: 297 });
  await expect(component5.geometry).toMatchGeometry('tc_off_037.geom');
  const component6 = await page.canvas.getComponent({ x: 749, y: 303 });
  await expect(component6.geometry).toMatchGeometry('tc_off_037.geom');
  const component7 = await page.canvas.getComponent({ x: 656, y: 467 });
  await expect(component7.geometry).toMatchGeometry('tc_off_037.geom');
  const component8 = await page.canvas.getComponent({ x: 773, y: 453 });
  await expect(component8.geometry).toMatchGeometry('tc_off_037.geom');
  const component9 = await page.canvas.getComponent({ x: 564, y: 454 });
  await expect(component9.geometry).toMatchGeometry('tc_off_037.geom');
  await expect(component1.type).toBe('Mass');
  await expect(component2.type).toBe('Mass');
  await expect(component3.type).toBe('Mass');
  await expect(component4.type).toBe('Mass');
  await expect(component5.type).toBe('Mass');
  await expect(component6.type).toBe('Mass');
  await expect(component7.type).toBe('Mass');
  await expect(component8.type).toBe('Mass');
  await expect(component9.type).toBe('Mass');
});

/**
 * @id TC_OFF_038
 * @description Check  whether the junction mode of  Complete Loop
(Fragmented)is appeared or not  
 *
 * @steps
 * 1. Create Project 
	* 2. Click Design tab 
	* 3.Select Draw tool 
	* 4.Select Space
 *
 * @expected The junction mode of Complete Loop 
(Fragmented)should appeared
 */
test('TC_OFF_038', async () => {
  await page.getByRole('img', { name: 'Space' }).click();
  await page.getByRole('img', { name: 'Centre' }).click();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('1500');
  await page.getByRole('spinbutton').press('Enter');
  await page.getByRole('checkbox').check();
  await expect(page.locator("//input[@type='checkbox']")).toBeChecked();
  await page.canvas.click(406, 246);
  await page.canvas.click(605, 320);
  await page.canvas.click(609, 215);
  await page.canvas.click(403, 318);
  await page.canvas.click(405, 249);
  await page.getByRole('img', { name: 'External' }).click();
  await page.canvas.click(396, 383);
  await page.canvas.click(627, 431);
  await page.canvas.click(622, 370);
  await page.canvas.click(397, 489);
  await page.canvas.click(393, 396);
  await page.getByRole('img', { name: 'Internal' }).click();
  await page.canvas.click(418, 559);
  await page.canvas.click(640, 619);
  await page.canvas.click(638, 535);
  await page.canvas.click(420, 598);
  await page.canvas.click(420, 562);
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.canvas.click(804, 390);
  await expect(page).toHaveCanvasSnapshot('tc_off_038.png', { maxDiffPixels: 960 });
  const component1 = await page.canvas.getComponent({ x: 398, y: 284 });
  await expect(component1.geometry).toMatchGeometry('tc_off_038.geom');
  const component2 = await page.canvas.getComponent({ x: 609, y: 262 });
  await expect(component2.geometry).toMatchGeometry('tc_off_038.geom');
  const component3 = await page.canvas.getComponent({ x: 509, y: 272 });
  await expect(component3.geometry).toMatchGeometry('tc_off_038.geom');
  const component4 = await page.canvas.getComponent({ x: 406, y: 426 });
  await expect(component4.geometry).toMatchGeometry('tc_off_038.geom');
  const component5 = await page.canvas.getComponent({ x: 641, y: 408 });
  await expect(component5.geometry).toMatchGeometry('tc_off_038.geom');
  const component6 = await page.canvas.getComponent({ x: 511, y: 422 });
  await expect(component6.geometry).toMatchGeometry('tc_off_038.geom');
  const component7 = await page.canvas.getComponent({ x: 402, y: 590 });
  await expect(component7.geometry).toMatchGeometry('tc_off_038.geom');
  const component8 = await page.canvas.getComponent({ x: 622, y: 554 });
  await expect(component8.geometry).toMatchGeometry('tc_off_038.geom');
  const component9 = await page.canvas.getComponent({ x: 535, y: 581 });
  await expect(component9.geometry).toMatchGeometry('tc_off_038.geom');
  await expect(component1.type).toBe('Mass');
  await expect(component2.type).toBe('Mass');
  await expect(component3.type).toBe('Mass');
  await expect(component4.type).toBe('Mass');
  await expect(component5.type).toBe('Mass');
  await expect(component6.type).toBe('Mass');
  await expect(component7.type).toBe('Mass');
  await expect(component8.type).toBe('Mass');
  await expect(component9.type).toBe('Mass');
});

/**
 * @id TC_OFF_039
 * @description Check  whether the junction mode of  Complete Loop
(Fragmented)is appeared or not  
 *
 * @steps
 * 1. Create Project 
	* 2. Click Design tab 
	* 3.Select Draw tool 
	* 4.Select Space
 *
 * @expected The junction mode of Complete Loop 
(Fragmented)should appeared
 */
test('TC_OFF_039', async () => {
  await page.getByRole('img', { name: 'Space' }).click();
  await page.getByRole('img', { name: 'Centre' }).click();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('1500');
  await page.getByRole('spinbutton').press('Enter');
  await page.getByRole('checkbox').check();
  await expect(page.locator("//input[@type='checkbox']")).toBeChecked();
  await page.canvas.click(334, 332);
  await page.canvas.click(413, 220);
  await page.canvas.click(469, 329);
  await page.canvas.click(414, 435);
  await page.canvas.click(333, 330);
  await page.getByRole('img', { name: 'External' }).click();
  await page.canvas.click(674, 334);
  await page.canvas.click(727, 215);
  await page.canvas.click(803, 333);
  await page.canvas.click(742, 428);
  await page.canvas.click(673, 332);
  await page.getByRole('img', { name: 'Internal' }).click();
  await page.canvas.click(522, 479);
  await page.canvas.click(578, 368);
  await page.canvas.click(645, 483);
  await page.canvas.click(583, 574);
  await page.canvas.click(519, 481);
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.canvas.click(814, 525);
  await expect(page).toHaveCanvasSnapshot('tc_off_039.png', { maxDiffPixels: 960 });
  const component1 = await page.canvas.getComponent({ x: 391, y: 235 });
  await expect(component1.geometry).toMatchGeometry('tc_off_039.geom');
  const component2 = await page.canvas.getComponent({ x: 429, y: 255 });
  await expect(component2.geometry).toMatchGeometry('tc_off_039.geom');
  const component3 = await page.canvas.getComponent({ x: 373, y: 371 });
  await expect(component3.geometry).toMatchGeometry('tc_off_039.geom');
  const component4 = await page.canvas.getComponent({ x: 454, y: 351 });
  await expect(component4.geometry).toMatchGeometry('tc_off_039.geom');
  const component5 = await page.canvas.getComponent({ x: 717, y: 291 });
  await expect(component5.geometry).toMatchGeometry('tc_off_039.geom');
  const component6 = await page.canvas.getComponent({ x: 772, y: 300 });
  await expect(component6.geometry).toMatchGeometry('tc_off_039.geom');
  const component7 = await page.canvas.getComponent({ x: 717, y: 376 });
  await expect(component7.geometry).toMatchGeometry('tc_off_039.geom');
  const component8 = await page.canvas.getComponent({ x: 782, y: 360 });
  await expect(component8.geometry).toMatchGeometry('tc_off_039.geom');
  const component9 = await page.canvas.getComponent({ x: 559, y: 371 });
  await expect(component9.geometry).toMatchGeometry('tc_off_039.geom');
  const component10 = await page.canvas.getComponent({ x: 622, y: 388 });
  await expect(component10.geometry).toMatchGeometry('tc_off_039.geom');
  const component11 = await page.canvas.getComponent({ x: 528, y: 535 });
  await expect(component11.geometry).toMatchGeometry('tc_off_039.geom');
  const component12 = await page.canvas.getComponent({ x: 634, y: 532 });
  await expect(component12.geometry).toMatchGeometry('tc_off_039.geom');
  await expect(component1.type).toBe('Mass');
  await expect(component2.type).toBe('Mass');
  await expect(component3.type).toBe('Mass');
  await expect(component4.type).toBe('Mass');
  await expect(component5.type).toBe('Mass');
  await expect(component6.type).toBe('Mass');
  await expect(component7.type).toBe('Mass');
  await expect(component8.type).toBe('Mass');
  await expect(component9.type).toBe('Mass');
  await expect(component10.type).toBe('Mass');
  await expect(component11.type).toBe('Mass');
  await expect(component12.type).toBe('Mass');
});

/**
 * @id TC_OFF_040
 * @description Check  whether the junction mode of  Complete Loop
(Fragmented)is appeared or not  
 *
 * @steps
 * 1. Create Project 
	* 2. Click Design tab 
	* 3.Select Draw tool 
	* 4.Select Space
 *
 * @expected The junction mode of Complete Loop 
(Fragmented)should appeared
 */
test('TC_OFF_040', async () => {
  await page.getByRole('img', { name: 'Space' }).click();
  await page.getByRole('img', { name: 'Centre' }).click();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('1500');
  await page.getByRole('spinbutton').press('Enter');
  await page.getByRole('checkbox').check();
  await expect(page.locator("//input[@type='checkbox']")).toBeChecked();
  await page.getByRole('img', { name: 'arc' }).click();
  await page.canvas.click(374, 307);
  await page.canvas.click(502, 302);
  await page.canvas.click(437, 259);
  await page.canvas.click(442, 371);
  await page.canvas.click(526, 384);
  await page.canvas.click(371, 310);
  await page.canvas.click(350, 384);
  await page.getByRole('img', { name: 'External' }).click();
  await page.canvas.click(640, 322);
  await page.canvas.click(758, 312);
  await page.canvas.click(695, 249);
  await page.canvas.click(711, 383);
  await page.canvas.click(799, 392);
  await page.canvas.click(639, 315);
  await page.canvas.click(618, 397);
  await page.getByRole('img', { name: 'Internal' }).click();
  await page.canvas.click(522, 497);
  await page.canvas.click(635, 497);
  await page.canvas.click(581, 453);
  await page.canvas.click(574, 559);
  await page.canvas.click(671, 575);
  await page.canvas.click(523, 495);
  await page.canvas.click(487, 579);
  await page.getByRole('img', { name: 'arc' }).click();
  await page.canvas.click(853, 545);
  await expect(page).toHaveCanvasSnapshot('tc_off_040.png', { maxDiffPixels: 960 });
  const component1 = await page.canvas.getComponent({ x: 386, y: 284 });
  await expect(component1.geometry).toMatchGeometry('tc_off_040.geom');
  const component2 = await page.canvas.getComponent({ x: 347, y: 363 });
  await expect(component2.geometry).toMatchGeometry('tc_off_040.geom');
  const component3 = await page.canvas.getComponent({ x: 542, y: 350 });
  await expect(component3.geometry).toMatchGeometry('tc_off_040.geom');
  const component4 = await page.canvas.getComponent({ x: 702, y: 254 });
  await expect(component4.geometry).toMatchGeometry('tc_off_040.geom');
  const component5 = await page.canvas.getComponent({ x: 779, y: 360 });
  await expect(component5.geometry).toMatchGeometry('tc_off_040.geom');
  const component6 = await page.canvas.getComponent({ x: 617, y: 358 });
  await expect(component6.geometry).toMatchGeometry('tc_off_040.geom');
  const component7 = await page.canvas.getComponent({ x: 559, y: 443 });
  await expect(component7.geometry).toMatchGeometry('tc_off_040.geom');
  const component8 = await page.canvas.getComponent({ x: 684, y: 539 });
  await expect(component8.geometry).toMatchGeometry('tc_off_040.geom');
  const component9 = await page.canvas.getComponent({ x: 474, y: 515 });
  await expect(component9.geometry).toMatchGeometry('tc_off_040.geom');
  await expect(component1.type).toBe('Mass');
  await expect(component2.type).toBe('Mass');
  await expect(component3.type).toBe('Mass');
  await expect(component4.type).toBe('Mass');
  await expect(component5.type).toBe('Mass');
  await expect(component6.type).toBe('Mass');
  await expect(component7.type).toBe('Mass');
  await expect(component8.type).toBe('Mass');
  await expect(component9.type).toBe('Mass');
});

/**
 * @id TC_OFF_041
 * @description Check  whether the junction mode of Orthogonal
(fragmented) is appeared or not  
 *
 * @steps
 * 1. Create Project
	* 2. Click Design tab
	* 3.Select Draw tool 
	* 4.Select Slab
 *
 * @expected The junction mode of Orthogonal 
(fragmented) should appeared
 */
test('TC_OFF_041', async () => {
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.getByRole('img', { name: 'Centre' }).click();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('1500');
  await page.getByRole('spinbutton').press('Enter');
  await expect(page.locator("//input[@type='checkbox']")).not.toBeChecked();
  await page.canvas.click(340, 242);
  await page.canvas.click(461, 245);
  await page.canvas.click(470, 349);
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'External' }).click();
  await page.canvas.click(589, 231);
  await page.canvas.click(721, 231);
  await page.canvas.click(721, 349);
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'Internal' }).click();
  await page.canvas.click(345, 411);
  await page.canvas.click(477, 407);
  await page.canvas.click(473, 514);
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.canvas.click(673, 433);
  await expect(page).toHaveCanvasSnapshot('tc_off_041.png', { maxDiffPixels: 960 });
  const component1 = await page.canvas.getComponent({ x: 410, y: 244 });
  await expect(component1.geometry).toMatchGeometry('tc_off_041.geom');
  const component2 = await page.canvas.getComponent({ x: 458, y: 309 });
  await expect(component2.geometry).toMatchGeometry('tc_off_041.geom');
  const component3 = await page.canvas.getComponent({ x: 658, y: 247 });
  await expect(component3.geometry).toMatchGeometry('tc_off_041.geom');
  const component4 = await page.canvas.getComponent({ x: 709, y: 304 });
  await expect(component4.geometry).toMatchGeometry('tc_off_041.geom');
  const component5 = await page.canvas.getComponent({ x: 430, y: 387 });
  await expect(component5.geometry).toMatchGeometry('tc_off_041.geom');
  const component6 = await page.canvas.getComponent({ x: 497, y: 456 });
  await expect(component6.geometry).toMatchGeometry('tc_off_041.geom');
  await expect(component1.type).toBe('Roof');
  await expect(component2.type).toBe('Roof');
  await expect(component3.type).toBe('Roof');
  await expect(component4.type).toBe('Roof');
  await expect(component5.type).toBe('Roof');
  await expect(component6.type).toBe('Roof');
});

/**
 * @id TC_OFF_042
 * @description Check  whether the junction mode of Orthogonal
(Continuous) is appeared or not  
 *
 * @steps
 * 1. Create Project
	* 2. Click Design tab
	* 3.Select Draw tool 
	* 4.Select Slab
 *
 * @expected the junction mode of Orthogonal 
(Continuous) should appeared
 */
test('TC_OFF_042', async () => {
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.getByRole('img', { name: 'Centre' }).click();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('1500');
  await page.getByRole('spinbutton').press('Enter');
  await page.getByRole('checkbox').check();
  await expect(page.locator("//input[@type='checkbox']")).toBeChecked();
  await page.canvas.click(340, 242);
  await page.canvas.click(461, 245);
  await page.canvas.click(470, 349);
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'External' }).click();
  await page.canvas.click(589, 231);
  await page.canvas.click(721, 231);
  await page.canvas.click(721, 349);
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'Internal' }).click();
  await page.canvas.click(345, 411);
  await page.canvas.click(477, 407);
  await page.canvas.click(473, 514);
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.canvas.click(673, 433);
  await expect(page).toHaveCanvasSnapshot('tc_off_042.png', { maxDiffPixels: 960 });
  const component1 = await page.canvas.getComponent({ x: 420, y: 236 });
  await expect(component1.geometry).toMatchGeometry('tc_off_042.geom');
  const component2 = await page.canvas.getComponent({ x: 660, y: 247 });
  await expect(component2.geometry).toMatchGeometry('tc_off_042.geom');
  const component3 = await page.canvas.getComponent({ x: 476, y: 396 });
  await expect(component3.geometry).toMatchGeometry('tc_off_042.geom');
  await expect(component1.type).toBe('Roof');
  await expect(component2.type).toBe('Roof');
  await expect(component3.type).toBe('Roof');
});

/**
 * @id TC_OFF_043
 * @description undefined
 *
 * @steps
 * 1. Create Project
	* 2. Click Design tab
	* 3.Select Draw tool 
	* 4.Select Slab
 *
 * @expected the junction mode of Obtuse Angle
(Fragmented)should appeared
 */
test('TC_OFF_043', async () => {
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.getByRole('img', { name: 'Centre' }).click();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('1500');
  await page.getByRole('spinbutton').press('Enter');
  await expect(page.locator("//input[@type='checkbox']")).not.toBeChecked();
  await page.canvas.click(330, 230);
  await page.canvas.click(424, 229);
  await page.canvas.click(461, 316);
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'External' }).click();
  await page.canvas.click(585, 223);
  await page.canvas.click(691, 222);
  await page.canvas.click(729, 298);
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'Internal' }).click();
  await page.canvas.click(333, 407);
  await page.canvas.click(461, 400);
  await page.canvas.click(505, 498);
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.canvas.click(673, 433);
  await expect(page).toHaveCanvasSnapshot('tc_off_043.png', { maxDiffPixels: 960 });
  const component1 = await page.canvas.getComponent({ x: 371, y: 228 });
  await expect(component1.geometry).toMatchGeometry('tc_off_043.geom');
  const component2 = await page.canvas.getComponent({ x: 438, y: 270 });
  await expect(component2.geometry).toMatchGeometry('tc_off_043.geom');
  const component3 = await page.canvas.getComponent({ x: 624, y: 236 });
  await expect(component3.geometry).toMatchGeometry('tc_off_043.geom');
  const component4 = await page.canvas.getComponent({ x: 694, y: 246 });
  await expect(component4.geometry).toMatchGeometry('tc_off_043.geom');
  const component5 = await page.canvas.getComponent({ x: 395, y: 388 });
  await expect(component5.geometry).toMatchGeometry('tc_off_043.geom');
  const component6 = await page.canvas.getComponent({ x: 494, y: 443 });
  await expect(component6.geometry).toMatchGeometry('tc_off_043.geom');
  await expect(component1.type).toBe('Roof');
  await expect(component2.type).toBe('Roof');
  await expect(component3.type).toBe('Roof');
  await expect(component4.type).toBe('Roof');
  await expect(component5.type).toBe('Roof');
  await expect(component6.type).toBe('Roof');
});

/**
 * @id TC_OFF_044
 * @description Check  whether the junction mode of Obtuse Angle
(Continuous)is appeared or not  
 *
 * @steps
 * 1. Create Project
	* 2. Click Design tab
	* 3.Select Draw tool 
	* 4.Select Slab
 *
 * @expected The junction mode of Obtuse Angle 
(Continuous)should appeared
 */
test('TC_OFF_044', async () => {
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.getByRole('img', { name: 'Centre' }).click();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('1500');
  await page.getByRole('spinbutton').press('Enter');
  await page.getByRole('checkbox').check();
  await expect(page.locator("//input[@type='checkbox']")).toBeChecked();
  await page.canvas.click(330, 230);
  await page.canvas.click(424, 229);
  await page.canvas.click(461, 316);
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'External' }).click();
  await page.canvas.click(585, 223);
  await page.canvas.click(691, 222);
  await page.canvas.click(729, 298);
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'Internal' }).click();
  await page.canvas.click(333, 407);
  await page.canvas.click(461, 400);
  await page.canvas.click(505, 498);
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.canvas.click(673, 433);
  await expect(page).toHaveCanvasSnapshot('tc_off_044.png', { maxDiffPixels: 960 });
  const component1 = await page.canvas.getComponent({ x: 408, y: 226 });
  await expect(component1.geometry).toMatchGeometry('tc_off_044.geom');
  const component2 = await page.canvas.getComponent({ x: 675, y: 231 });
  await expect(component2.geometry).toMatchGeometry('tc_off_044.geom');
  const component3 = await page.canvas.getComponent({ x: 458, y: 388 });
  await expect(component3.geometry).toMatchGeometry('tc_off_044.geom');
  await expect(component1.type).toBe('Roof');
  await expect(component2.type).toBe('Roof');
  await expect(component3.type).toBe('Roof');
});

/**
 * @id TC_OFF_045
 * @description Check  whether the junction mode of Acute Angle
(Fragmented)is appeared or not  
 *
 * @steps
 * 1. Create Project
	* 2. Click Design tab
	* 3.Select Draw tool 
	* 4.Select Slab
 *
 * @expected The junction mode of Acute Angle
(Fragmented)is appeared
 */
test('TC_OFF_045', async () => {
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.getByRole('img', { name: 'Centre' }).click();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('1500');
  await page.getByRole('spinbutton').press('Enter');
  await expect(page.locator("//input[@type='checkbox']")).not.toBeChecked();
  await page.canvas.click(348, 242);
  await page.canvas.click(474, 235);
  await page.canvas.click(383, 353);
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'External' }).click();
  await page.canvas.click(635, 229);
  await page.canvas.click(766, 228);
  await page.canvas.click(677, 349);
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'Internal' }).click();
  await page.canvas.click(347, 419);
  await page.canvas.click(463, 414);
  await page.canvas.click(390, 513);
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.canvas.click(673, 433);
  await expect(page).toHaveCanvasSnapshot('tc_off_045.png', { maxDiffPixels: 960 });
  const component1 = await page.canvas.getComponent({ x: 405, y: 238 });
  await expect(component1.geometry).toMatchGeometry('tc_off_045.geom');
  const component2 = await page.canvas.getComponent({ x: 456, y: 266 });
  await expect(component2.geometry).toMatchGeometry('tc_off_045.geom');
  const component3 = await page.canvas.getComponent({ x: 681, y: 247 });
  await expect(component3.geometry).toMatchGeometry('tc_off_045.geom');
  const component4 = await page.canvas.getComponent({ x: 736, y: 262 });
  await expect(component4.geometry).toMatchGeometry('tc_off_045.geom');
  const component5 = await page.canvas.getComponent({ x: 438, y: 403 });
  await expect(component5.geometry).toMatchGeometry('tc_off_045.geom');
  const component6 = await page.canvas.getComponent({ x: 416, y: 482 });
  await expect(component6.geometry).toMatchGeometry('tc_off_045.geom');
  await expect(component1.type).toBe('Roof');
  await expect(component2.type).toBe('Roof');
  await expect(component3.type).toBe('Roof');
  await expect(component4.type).toBe('Roof');
  await expect(component5.type).toBe('Roof');
  await expect(component6.type).toBe('Roof');
});

/**
 * @id TC_OFF_046
 * @description Check  whether the junction mode of Acute Angle
(Continuous)is appeared or not  
 *
 * @steps
 * 1. Create Project
	* 2. Click Design tab
	* 3.Select Draw tool 
	* 4.Select Slab
 *
 * @expected The junction mode of Acute Angle 
(Continuous)should appeared
 */
test('TC_OFF_046', async () => {
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.getByRole('img', { name: 'Centre' }).click();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('1500');
  await page.getByRole('spinbutton').press('Enter');
  await page.getByRole('checkbox').check();
  await expect(page.locator("//input[@type='checkbox']")).toBeChecked();
  await page.canvas.click(348, 242);
  await page.canvas.click(474, 235);
  await page.canvas.click(383, 353);
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'External' }).click();
  await page.canvas.click(635, 229);
  await page.canvas.click(766, 228);
  await page.canvas.click(677, 349);
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'Internal' }).click();
  await page.canvas.click(347, 419);
  await page.canvas.click(463, 414);
  await page.canvas.click(390, 513);
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.canvas.click(673, 433);
  await expect(page).toHaveCanvasSnapshot('tc_off_046.png', { maxDiffPixels: 960 });
  const component1 = await page.canvas.getComponent({ x: 436, y: 241 });
  await expect(component1.geometry).toMatchGeometry('tc_off_046.geom');
  const component2 = await page.canvas.getComponent({ x: 722, y: 239 });
  await expect(component2.geometry).toMatchGeometry('tc_off_046.geom');
  const component3 = await page.canvas.getComponent({ x: 469, y: 408 });
  await expect(component3.geometry).toMatchGeometry('tc_off_046.geom');
  await expect(component1.type).toBe('Roof');
  await expect(component2.type).toBe('Roof');
  await expect(component3.type).toBe('Roof');
});

/**
 * @id TC_OFF_047
 * @description Check  whether the junction mode of Extremely Short Edges
(Fragmented)is appeared or not  
 *
 * @steps
 * 1. Create Project
	* 2. Click Design tab
	* 3.Select Draw tool 
	* 4.Select Slab
 *
 * @expected The junction mode of Extremely Short Edges 
(Fragmented)should appeared
 */
test('TC_OFF_047', async () => {
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.getByRole('img', { name: 'Centre' }).click();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('1500');
  await page.getByRole('spinbutton').press('Enter');
  await expect(page.locator("//input[@type='checkbox']")).not.toBeChecked();
  await page.canvas.click(434, 251);
  await page.canvas.click(334, 257);
  await page.canvas.click(339, 271);
  await page.canvas.click(430, 319);
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'External' }).click();
  await page.canvas.click(751, 253);
  await page.canvas.click(634, 260);
  await page.canvas.click(633, 266);
  await page.canvas.click(756, 309);
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'Internal' }).click();
  await page.canvas.click(426, 441);
  await page.canvas.click(330, 442);
  await page.canvas.click(323, 480);
  await page.canvas.click(421, 543);
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.canvas.click(673, 433);
  await expect(page).toHaveCanvasSnapshot('tc_off_047.png', { maxDiffPixels: 960 });
  const component1 = await page.canvas.getComponent({ x: 354, y: 251 });
  await expect(component1.geometry).toMatchGeometry('tc_off_047.geom');
  const component2 = await page.canvas.getComponent({ x: 382, y: 298 });
  await expect(component2.geometry).toMatchGeometry('tc_off_047.geom');
  const component3 = await page.canvas.getComponent({ x: 329, y: 277 });
  await expect(component3.geometry).toMatchGeometry('tc_off_047.geom');
  const component4 = await page.canvas.getComponent({ x: 695, y: 239 });
  await expect(component4.geometry).toMatchGeometry('tc_off_047.geom');
  const component5 = await page.canvas.getComponent({ x: 624, y: 267 });
  await expect(component5.geometry).toMatchGeometry('tc_off_047.geom');
  const component6 = await page.canvas.getComponent({ x: 699, y: 302 });
  await expect(component6.geometry).toMatchGeometry('tc_off_047.geom');
  const component7 = await page.canvas.getComponent({ x: 400, y: 450 });
  await expect(component7.geometry).toMatchGeometry('tc_off_047.geom');
  const component8 = await page.canvas.getComponent({ x: 341, y: 476 });
  await expect(component8.geometry).toMatchGeometry('tc_off_047.geom');
  const component9 = await page.canvas.getComponent({ x: 410, y: 510 });
  await expect(component9.geometry).toMatchGeometry('tc_off_047.geom');
  await expect(component1.type).toBe('Roof');
  await expect(component2.type).toBe('Roof');
  await expect(component3.type).toBe('Roof');
  await expect(component4.type).toBe('Roof');
  await expect(component5.type).toBe('Roof');
  await expect(component6.type).toBe('Roof');
});

/**
 * @id TC_OFF_048
 * @description Check  whether the junction mode of Extremely Short Edges
(Continuous)is appeared or not  
 *
 * @steps
 * 1. Create Project
	* 2. Click Design tab
	* 3.Select Draw tool 
	* 4.Select Slab
 *
 * @expected The junction mode of Extremely Short Edges 
(Continuous)should appeared
 */
test('TC_OFF_048', async () => {
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.getByRole('img', { name: 'Centre' }).click();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('1500');
  await page.getByRole('spinbutton').press('Enter');
  await page.getByRole('checkbox').check();
  await expect(page.locator("//input[@type='checkbox']")).toBeChecked();
  await page.canvas.click(462, 260);
  await page.canvas.click(354, 268);
  await page.canvas.click(455, 331);
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'External' }).click();
  await page.canvas.click(788, 272);
  await page.canvas.click(700, 279);
  await page.canvas.click(782, 327);
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'Internal' }).click();
  await page.canvas.click(471, 423);
  await page.canvas.click(335, 432);
  await page.canvas.click(452, 520);
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.canvas.click(673, 433);
  await expect(page).toHaveCanvasSnapshot('tc_off_048.png', { maxDiffPixels: 960 });
  const component1 = await page.canvas.getComponent({ x: 393, y: 253 });
  await expect(component1.geometry).toMatchGeometry('tc_off_048.geom');
  const component2 = await page.canvas.getComponent({ x: 664, y: 263 });
  await expect(component2.geometry).toMatchGeometry('tc_off_048.geom');
  const component3 = await page.canvas.getComponent({ x: 392, y: 433 });
  await expect(component3.geometry).toMatchGeometry('tc_off_048.geom');
  await expect(component1.type).toBe('Roof');
  await expect(component2.type).toBe('Roof');
  await expect(component3.type).toBe('Roof');
});

/**
 * @id TC_OFF_049
 * @description Check  whether the junction mode of  Line + Arc
(Fragmented)is appeared or not  
 *
 * @steps
 * 1. Create Project
	* 2. Click Design tab
	* 3.Select Draw tool 
	* 4.Select Slab
 *
 * @expected The junction mode of Line + Arc 
(Fragmented)should appeared
 */
test('TC_OFF_049', async () => {
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.getByRole('img', { name: 'Centre' }).click();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('1500');
  await page.getByRole('spinbutton').press('Enter');
  await expect(page.locator("//input[@type='checkbox']")).not.toBeChecked();
  await page.canvas.click(340, 246);
  await page.canvas.click(435, 239);
  await page.getByRole('img', { name: 'arc' }).click();
  await page.canvas.click(508, 318);
  await page.canvas.click(465, 310);
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'External' }).click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.canvas.click(634, 230);
  await page.canvas.click(732, 236);
  await page.getByRole('img', { name: 'arc' }).click();
  await page.canvas.click(819, 295);
  await page.canvas.click(772, 292);
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'Internal' }).click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.canvas.click(340, 449);
  await page.canvas.click(450, 450);
  await page.getByRole('img', { name: 'arc' }).click();
  await page.canvas.click(537, 506);
  await page.canvas.click(473, 499);
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'arc', exact: true }).click();
  await page.canvas.click(673, 433);
  await expect(page).toHaveCanvasSnapshot('tc_off_049.png', { maxDiffPixels: 960 });
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  const component1 = await page.canvas.getComponent({ x: 366, y: 251 });
  await expect(component1.geometry).toMatchGeometry('tc_off_049.geom');
  const component2 = await page.canvas.getComponent({ x: 447, y: 299 });
  await expect(component2.geometry).toMatchGeometry('tc_off_049.geom');
  const component3 = await page.canvas.getComponent({ x: 677, y: 248 });
  await expect(component3.geometry).toMatchGeometry('tc_off_049.geom');
  const component4 = await page.canvas.getComponent({ x: 741, y: 287 });
  await expect(component4.geometry).toMatchGeometry('tc_off_049.geom');
  const component5 = await page.canvas.getComponent({ x: 400, y: 427 });
  await expect(component5.geometry).toMatchGeometry('tc_off_049.geom');
  const component6 = await page.canvas.getComponent({ x: 497, y: 493 });
  await expect(component6.geometry).toMatchGeometry('tc_off_049.geom');
  await expect(component1.type).toBe('Roof');
  await expect(component2.type).toBe('Roof');
  await expect(component3.type).toBe('Roof');
  await expect(component4.type).toBe('Roof');
  await expect(component5.type).toBe('Roof');
  await expect(component6.type).toBe('Roof');
});

/**
 * @id TC_OFF_050
 * @description Check  whether the junction mode of  Line + Arc
(Continuous)is appeared or not  
 *
 * @steps
 * 1. Create Project
	* 2. Click Design tab
	* 3.Select Draw tool 
	* 4.Select Slab
 *
 * @expected The junction mode of Line + Arc 
(Continuous)should appeared
 */
test('TC_OFF_050', async () => {
  await page.getByRole('img', { name: 'Slab' }).click();
  await page.getByRole('img', { name: 'Centre' }).click();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('1500');
  await page.getByRole('spinbutton').press('Enter');
  await page.getByRole('checkbox').check();
  await expect(page.locator("//input[@type='checkbox']")).toBeChecked();
  await page.canvas.click(340, 246);
  await page.canvas.click(435, 239);
  await page.getByRole('img', { name: 'arc' }).click();
  await page.canvas.click(508, 318);
  await page.canvas.click(465, 310);
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'External' }).click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.canvas.click(634, 230);
  await page.canvas.click(732, 236);
  await page.getByRole('img', { name: 'arc' }).click();
  await page.canvas.click(819, 295);
  await page.canvas.click(772, 292);
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'Internal' }).click();
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.canvas.click(340, 449);
  await page.canvas.click(450, 450);
  await page.getByRole('img', { name: 'arc' }).click();
  await page.canvas.click(537, 506);
  await page.canvas.click(473, 499);
  await page.locator('#canvas').press('Enter');
  await page.getByRole('img', { name: 'arc', exact: true }).click();
  await page.canvas.click(673, 433);
  await expect(page).toHaveCanvasSnapshot('tc_off_050.png', { maxDiffPixels: 960 });
  const component1 = await page.canvas.getComponent({ x: 392, y: 240 });
  await expect(component1.geometry).toMatchGeometry('tc_off_050.geom');
  const component2 = await page.canvas.getComponent({ x: 700, y: 242 });
  await expect(component2.geometry).toMatchGeometry('tc_off_050.geom');
  const component3 = await page.canvas.getComponent({ x: 446, y: 436 });
  await expect(component3.geometry).toMatchGeometry('tc_off_050.geom');
  await expect(component1.type).toBe('Roof');
  await expect(component2.type).toBe('Roof');
  await expect(component3.type).toBe('Roof');
});
