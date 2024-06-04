import * as path from 'path';
import { expect, test } from '../../common/fixtures';
import { Page } from '@playwright/test';
import { sTrudePage } from '../../common/page';
import { initProject, configure2DProjectForTest, configure2DProjectForTestV0 } from '../../common/project';
import { clearCanvas, selectAll } from '../../common/canvas';
import { createGeometryDir, getGeometry, getSnaptrudeDS } from '../../common/geometry';
import { reset2DCameraVersion0, setCameraPosition } from '../../common/camera';

//let camPos2D;

//let camPos3D;

const camPos3D = {
  position: {
    _x: 109.11920087683933,
    _y: 72.74613391789288,
    _z: -62.999999999999936
  },
  alpha: -0.5235987755982983,
  beta: 1.0471975511965976,
  radius: 145.49226783578573,
  target: { _x: 0, _y: 0, _z: 0 },
  isOrtho: false,
  orthoLeft: -130.66713034926278,
  orthoRight: 130.66713034926278,
  orthoBottom: -73.50026082146032,
  orthoTop: 73.50026082146032
};

let page: Page;
let geometryDir: string;

test.beforeAll(async ({ browser }, testInfo) => {
  const context = await browser.newContext();
  page = await sTrudePage(await context.newPage(), testInfo);
  await initProject(page, testInfo);
});

test.beforeEach(async () => {
  await configure2DProjectForTestV0(page);
  //await setCameraPosition(page, camPos2D);
  await page.evaluate(() => {
    store.exposed.ComponentTestIdGenerator.reset();
  });
});

test.afterEach(async () => {
  // await clearCanvas(page);
});

test.afterAll(async () => {
  // await page.close();
});

async function getComponentCount() {
  await selectAll(page);
  const count = await page.evaluate(() => {
    // @ts-ignore
    return store.selectionStack.length;
  });
  return count;
}

/**
 * @id PARAMETRIC EDIT_0031
 * @description Check user can able to edit on  straight edge on mass in 2D or not.
 *
 * @steps
 * 1.Create project
	* 2.Select mass
	* 3.Draw linear mass
	* 4.Select edit tool
	* 5.edit on mass straight edge
 *
 * @expected Users should be able to edit the straight edge on mass in 2D.
 */
test('PARAMETRIC EDIT_0031', async () => {
await page.canvas.click(248, 282);
await page.canvas.click(240, 574);
await page.canvas.click(443, 572);
await page.canvas.click(445, 429);
await page.canvas.click(581, 424);
await page.canvas.click(579, 278);
await page.canvas.click(250, 278);
await page.getByRole('img', { name: 'edit' }).click();
await page.canvas.click(442, 282);
await page.canvas.click(442, 202);
await page.canvas.click(583, 275);
await page.canvas.click(679, 275);
await expect(page).toHaveCanvasSnapshot('parametricEdit_0031.png', { maxDiffPixels: 960 });
const component = await page.canvas.getComponent({x: 533, y: 311});
  await expect(component.geometry).toMatchGeometry('parametricEdit_0031.geom');
  await expect(component.type).toBe("Mass")
});

/**
 * @id PARAMETRIC EDIT_0032
 * @description Check user can able to edit on  angled edge in 2D or not.
 *
 * @steps
 * 1.Create project
	* 2.Select mass
	* 3.Draw angular mass
	* 4.Select edit tool
	* 5.edit on mass angled edge
 *
 * @expected Users should be able to edit the angular edge on mass in 2D.
 */
test('PARAMETRIC EDIT_0032', async () => {
await page.canvas.click(251, 385);
await page.canvas.click(426, 213);
await page.canvas.click(587, 215);
await page.canvas.click(681, 374);
await page.canvas.click(687, 566);
await page.canvas.click(505, 571);
await page.canvas.click(509, 385);
await page.canvas.click(246, 386);
await page.getByRole('img', { name: 'edit' }).click();
await page.canvas.click(637, 290);
await page.canvas.click(674, 272);
await page.canvas.click(271, 359);
await page.canvas.click(327, 360);
await expect(page).toHaveCanvasSnapshot('parametricEdit_0032.png', { maxDiffPixels: 960 });
const component = await page.canvas.getComponent({x: 549, y: 302});
  await expect(component.geometry).toMatchGeometry('parametricEdit_0032.geom');
  await expect(component.type).toBe("Mass")
});

/**
 * @id PARAMETRIC EDIT_0033
 * @description Check user can able to edit on  arc edge in 2D or not.
 *
 * @steps
 * 1.Create project
	* 2.Select mass
	* 3.Draw arc mass
	* 4.Select edit tool
	* 5.edit on mass arc edge
 *
 * @expected Users should be able to edit the arc edge on mass in 2D.
 */
test('PARAMETRIC EDIT_0033', async () => {
await page.getByRole('img', { name: 'arc' }).click();
await page.canvas.click(312, 274);
await page.canvas.click(550, 273);
await page.canvas.click(434, 214);
await page.canvas.click(542, 434);
await page.canvas.click(528, 396);
await page.canvas.click(326, 458);
await page.canvas.click(432, 510);
await page.canvas.click(310, 282);
await page.canvas.click(346, 364);
await page.getByRole('img', { name: 'edit' }).click();
await page.canvas.click(450, 212);
await page.canvas.click(530, 130);
await page.canvas.click(510, 310);
  await page.canvas.click(582, 313);
  await expect(page).toHaveCanvasSnapshot('parametricEdit_0033.png', { maxDiffPixels: 960 });
await page.canvas.click(743, 362);
const component = await page.canvas.getComponent({x: 531, y: 308});
  await expect(component.geometry).toMatchGeometry('parametricEdit_0033.geom');
  await expect(component.type).toBe("Mass")
});

/**
 * @id PARAMETRIC EDIT_0034
 * @description Check user can able to edit on  straight+arc mass edge in 2D or not.
 *
 * @steps
 * 1.Create project
	* 2.Select mass
	* 3.Draw linear+arc mass
	* 4.Select edit tool
	* 5.edit on mass straight+arc edge
 *
 * @expected Users should be able to edit the straight+arc edge on mass in 2D.
 */
test('PARAMETRIC EDIT_0034', async () => {
await page.canvas.click(326, 478);
await page.canvas.click(318, 268);
await page.getByRole('img', { name: 'arc' }).click();
await page.canvas.click(544, 265);
await page.canvas.click(434, 158);
await page.getByRole('img', { name: 'draw', exact: true }).click();
await page.canvas.click(537, 479);
await page.getByRole('img', { name: 'arc' }).click();
await page.canvas.click(328, 471);
await page.canvas.click(436, 590);
await page.getByRole('img', { name: 'edit' }).click();
await page.canvas.click(541, 354);
await page.canvas.click(649, 361);
await page.canvas.click(474, 635);
await page.canvas.click(476, 572);
await page.canvas.click(327, 351);
  await page.canvas.click(519, 364);
await expect(page).toHaveCanvasSnapshot('parametricEdit_0034.png', { maxDiffPixels: 960 });
const component = await page.canvas.getComponent({x: 563, y: 312});
  await expect(component.geometry).toMatchGeometry('parametricEdit_0034.geom');
  await expect(component.type).toBe("Mass")
});

/**
 * @id PARAMETRIC EDIT_0035
 * @description Check user can able to edit on  vertices mass in 2D/3D or not.
 *
 * @steps
 * 1.Create project
	* 2.Select mass
	* 3.Draw circular mass
	* 4.Select edit tool
	* 5.edit on mass vertices
 *
 * @expected Users should be able to edit the vertices on mass in 2D.
 */
test('PARAMETRIC EDIT_0035', async () => {
await page.getByRole('img', { name: 'drawCircle' }).click();
await page.canvas.click(514, 366);
await page.canvas.click(641, 487);
await page.getByRole('img', { name: 'edit' }).click();
await page.canvas.click(422, 514);
await page.canvas.click(359, 567);
await page.canvas.click(690, 363);
await page.canvas.click(494, 364);
await expect(page).toHaveCanvasSnapshot('parametricEdit_0035.png', { maxDiffPixels: 960 });
const component = await page.canvas.getComponent({x: 386, y: 410});
  await expect(component.geometry).toMatchGeometry('parametricEdit_0035.geom');
  await expect(component.type).toBe("Mass")
});

/**
 * @id PARAMETRIC EDIT_0036
 * @description Check user can able to edit on copied straight edge on mass in 2D or not.
 *
 * @steps
 * 1.Create project
	* 2.Select mass
	* 3.Draw linear mass
	* 4.Select edit tool
	* 5.edit on copied mass straight edge
 *
 * @expected Users should be able to edit the straight edge on copied mass in 2D.
 */
test('PARAMETRIC EDIT_0036', async () => {
await page.canvas.click(227, 270);
await page.canvas.click(239, 487);
await page.canvas.click(98, 495);
await page.canvas.click(98, 599);
await page.canvas.click(341, 596);
await page.canvas.click(331, 372);
await page.canvas.click(518, 378);
await page.canvas.click(517, 273);
await page.canvas.click(228, 272);
await page.getByRole('img', { name: 'copy' }).click();
await page.canvas.click(273, 382);
await page.canvas.click(642, 379); await page.getByRole('img', { name: 'edit' }).click();
await page.canvas.click(516, 318);
await page.canvas.click(412, 335);
await page.canvas.click(674, 599);
  await page.canvas.click(662, 548);
await expect(page).toHaveCanvasSnapshot('parametricEdit_0036.png', { maxDiffPixels: 960 });
const component = await page.canvas.getComponent({x: 722, y: 322});
  await expect(component.geometry).toMatchGeometry('parametricEdit_0036.geom');
  const count = await getComponentCount()
  await expect (count).toBe(2)
  await expect(component.type).toBe("Mass");
});

/**
 * @id PARAMETRIC EDIT_0037
 * @description Check user can able to edit on copied  angled edge in 2D or not.
 *
 * @steps
 * 1.Create project
	* 2.Select mass
	* 3.Draw angular mass
	* 4.Select edit tool
	* 5.edit on copied mass angled edge
 *
 * @expected Users should be able to edit the angular edge on copied mass in 2D.
 */
test('PARAMETRIC EDIT_0037', async () => {
await page.canvas.click(239, 350);
await page.canvas.click(358, 221);
await page.canvas.click(507, 230);
await page.canvas.click(625, 347);
await page.canvas.click(623, 482);
await page.canvas.click(497, 483);
await page.canvas.click(495, 366);
await page.canvas.click(353, 365);
await page.canvas.click(347, 490);
await page.canvas.click(233, 493);
await page.canvas.click(240, 357);

const localCamPos2D = {
    position: {
      _x: 126.66524967363796,
      _y: 904.4335423381837,
      _z: -43.70251156960874
    },
    alpha: -1.5707963267948966,
    beta: 0,
    radius: 898.5275197538224,
    target: {
      _x: 126.66524967363796,
      _y: 5.906022584361267,
      _z: -43.61265881763335
    },
    isOrtho: true,
    orthoLeft: -107.9794545580778,
    orthoRight: 76.55072714784619,
    orthoBottom: -56.075961741324704,
    orthoTop: 47.722265468257554
  };
  await setCameraPosition(page, localCamPos2D);
await page.getByRole('img', { name: 'copy' }).click();
await page.canvas.click(289, 233);
await page.canvas.click(649, 235);
await page.getByRole('img', { name: 'edit' }).click();
await page.canvas.click(644, 200);
await page.canvas.click(617, 254);
await page.canvas.click(500, 408);
await page.canvas.click(570, 525);
await expect(page).toHaveCanvasSnapshot('parametricEdit_0037.png', { maxDiffPixels: 960 });
const component = await page.canvas.getComponent({x: 673, y: 303});
  await expect(component.geometry).toMatchGeometry('parametricEdit_0037.geom');
  const count = await getComponentCount()
  await expect (count).toBe(2)
  await expect(component.type).toBe("Mass");
});