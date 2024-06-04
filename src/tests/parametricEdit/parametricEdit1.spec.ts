import { expect, test } from '../../common/fixtures';
import { Page } from '@playwright/test';
import { sTrudePage } from '../../common/page';
import { initProject, configure2DProjectForTestV0 } from '../../common/project';
import { clearCanvas, selectAll } from '../../common/canvas';
import { setCameraPosition } from '../../common/camera';

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
  await page.evaluate(() => {
    store.exposed.ComponentTestIdGenerator.reset();
  });
});

test.afterEach(async () => {
  await clearCanvas(page);
  await setCameraPosition(page, camPos3D);

});

test.afterAll(async () => {
  await page.close();
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
 * @id PARAMETRIC EDIT_0001
 * @description Check user can able to push/pull edit on  linear mass edge in 3D or not.
 *
 * @steps
 * 1.Create project
	* 2.Select mass
	* 3.Draw linear mass
	* 4.Select push/pull edit tool
	* 5.push/pull edit on mass edge
 *
 * @expected Users should be able to perform push/pull edits on linear mass edges in 2D.
 */
test('PARAMETRIC EDIT_0001', async () => {
await page.canvas.click(296, 219);
await page.canvas.click(611, 210);
await page.canvas.click(610, 397);
await page.canvas.click(524, 395);
await page.canvas.click(514, 511);
await page.canvas.click(294, 509);
await page.canvas.click(295, 225);
await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
await page.waitForTimeout(300)
const localCamPos3D = {
    position: {
      _x: 137.35682500663052,
      _y: 59.60986652752064,
      _z: -76.85391659373948
    },
    alpha: -0.5235987755982983,
    beta: 1.0471975511965974,
    radius: 49.76572988664951,
    target: {
      _x: 100.03252759164337,
      _y: 34.72700158419587,
      _z: -55.30472343388304
    },
    isOrtho: false,
    orthoLeft: -100.68109107036206,
    orthoRight: 100.68109107036206,
    orthoBottom: -56.63311372707866,
    orthoTop: 56.63311372707866
  };
  await setCameraPosition(page, localCamPos3D);
  await page.locator('#pushpull').click();
  await page.canvas.click(600, 346);
  await page.canvas.click(602, 181);
 await expect(page).toHaveCanvasSnapshot('tc_td_01.png', { maxDiffPixels: 960 });
  await expect(component.type).toBe("Mass")
  const count = await getComponentCount()
  await expect (count).toBe(1)

});

/**
 * @id PARAMETRIC EDIT_0002
 * @description Check user can able to push/pull edit on  angular mass edge in 2D or not.
 *
 * @steps
 * 1.Create project
	* 2.Select mass
	* 3.Draw angular mass
	* 4.Select push/pull edit tool
	* 5.push/pull edit on mass edge
 *
 * @expected Users should be able to perform push/pull edits on angular mass edges in 2D.
 */
test('PARAMETRIC EDIT_0002', async () => {
await page.canvas.click(218, 366);
await page.canvas.click(373, 222);
await page.canvas.click(507, 230);
await page.canvas.click(577, 362);
await page.canvas.click(574, 522);
await page.canvas.click(461, 527);
await page.canvas.click(460, 367);
await page.canvas.click(212, 358);
await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
await page.waitForTimeout(300)
const localCamPos3D = {
    position: {
      _x: 120.12091896916964,
      _y: 59.54266029939498,
      _z: -75.17997997635695
    },
    alpha: -0.5235987755982983,
    beta: 1.0471975511965979,
    radius: 92.29079949011431,
    target: {
      _x: 50.90281935158389,
      _y: 13.39726055433783,
      _z: -35.21689152934954
    },
    isOrtho: false,
    orthoLeft: -75.92912082510803,
    orthoRight: 75.92912082510803,
    orthoBottom: -42.71013046412327,
    orthoTop: 42.71013046412327
  };
  await setCameraPosition(page, localCamPos3D);
  await page.getByRole('img', { name: 'pushpull' }).click();
  await page.canvas.click(663, 424);
  await page.canvas.click(617, 229);
  await expect(page).toHaveCanvasSnapshot('edit_0002.png', { maxDiffPixels: 960 });
  const component = await page.canvas.getComponent({x: 632, y: 387});
  await expect(component.geometry).toMatchGeometry('edit_0002.geom');
  await expect (component.type).toBe("Mass")
});

/**
 * @id PARAMETRIC EDIT_0003
 * @description Check user can able to push/pull edit on  arc mass edge in 2D or not.
 *
 * @steps
 * 1.Create project
	* 2.Select mass
	* 3.Draw arc mass
	* 4.Select push/pull edit tool
	* 5.push/pull edit on mass edge
 *
 * @expected Users should be able to perform push/pull edits on arc mass edges in 2D.
 */
test('PARAMETRIC EDIT_0003', async () => {
await page.getByRole('img', { name: 'arc' }).click();
await page.canvas.click(357, 240);
await page.canvas.click(577, 243);
await page.canvas.click(476, 194);
await page.canvas.click(566, 434);
await page.canvas.click(546, 370);
await page.canvas.click(357, 444);
await page.canvas.click(387, 462);
await page.canvas.click(361, 245);
await page.canvas.click(399, 330);
await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
await page.waitForTimeout(300);
const localCamPos3D = {
    position: {
      _x: 154.98002972033805,
      _y: 104.42884447164924,
      _z: -80.11902524178011
    },
    alpha: -0.5235987755982983,
    beta: 1.0471975511965972,
    radius: 155.9009501413811,
    target: {
      _x: 38.05431711430225,
      _y: 26.478369400958623,
      _z: -12.611933593496598
    },
    isOrtho: false,
    orthoLeft: -142.00147044959581,
    orthoRight: 142.00147044959581,
    orthoBottom: -79.87582712789765,
    orthoTop: 79.87582712789765
  };
  await setCameraPosition(page, localCamPos3D);
  await page.getByRole('img', { name: 'pushpull' }).click();
  await page.canvas.click(587, 527);
  await page.canvas.click(581, 365);
  await expect(page).toHaveCanvasSnapshot('edit_0003.png', { maxDiffPixels: 960 });
  const component = await page.canvas.getComponent({x: 567, y: 436});
  await expect(component.geometry).toMatchGeometry('edit_0003.geom');
  await expect(component.type).toBe("Mass");
});

/**
 * @id PARAMETRIC EDIT_0004
 * @description Check user can able to push/pull edit on  arc+linear mass edge in 2D or not.
 *
 * @steps
 * 1.Create project
	* 2.Select mass
	* 3.Draw linear+arc mass
	* 4.Select push/pull edit tool
	* 5.push/pull edit on mass edge
 *
 * @expected Users should be able to perform push/pull edits on linear+arc mass edges in 2D.
 */
test('PARAMETRIC EDIT_0004', async () => {
  await page.getByRole('img', { name: 'arc' }).click();
  await page.canvas.click(419, 238);
  await page.canvas.click(650, 242);
  await page.canvas.click(535, 158);
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.canvas.click(647, 460);
  await page.getByRole('img', { name: 'arc' }).click();
  await page.canvas.click(411, 457);
  await page.canvas.click(529, 537);
  await page.getByRole('img', { name: 'draw', exact: true }).click();
  await page.canvas.click(416, 238);
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300)
  const localCamPos3D = {
      position: {
        _x: 176.02375858115315,
        _y: 109.26967050794667,
        _z: -81.18934849200438
      },
      alpha: -0.5235987755982983,
      beta: 1.0471975511965976,
      radius: 180.51366418299878,
      target: {
        _x: 40.638510443904,
        _y: 19.012838416447263,
        _z: -3.0246390356594377
      },
      isOrtho: false,
      orthoLeft: -152.57252192943847,
      orthoRight: 152.57252192943847,
      orthoBottom: -85.82204358530913,
      orthoTop: 85.82204358530913
    };
    await setCameraPosition(page, localCamPos3D);
    await page.getByRole('img', { name: 'pushpull' }).click();
    await page.canvas.click(542, 514);
    await page.canvas.click(515, 284);
    await expect(page).toHaveCanvasSnapshot('edit_0004.png', { maxDiffPixels: 960 });
    const component = await page.canvas.getComponent({x: 593, y: 397});
    await expect(component.geometry).toMatchGeometry('edit_0004.geom');
    await expect(component.type).toBe("Mass")
});

/**
 * @id PARAMETRIC EDIT_0005
 * @description Check user can able to push/pull edit on  circular mass or not.
 *
 * @steps
 * 1.Create project
	* 2.Select mass
	* 3.Draw circular mass
	* 4.Select push/pull edit tool
	* 5.push/pull edit on mass edge
 *
 * @expected Users should be able to perform push/pull edits on circular mass edges in 2D.
 */
test('PARAMETRIC EDIT_0005', async () => {
await page.getByRole('img', { name: 'drawCircle' }).click();
await page.canvas.click(448, 390);
await page.canvas.click(538, 470);
await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
await page.waitForTimeout(300)
const localCamPos3D = {
    position: {
      _x: 145.55441487940394,
      _y: 93.90322350369162,
      _z: -82.21041297966194
    },
    alpha: -0.5235987755982983,
    beta: 1.0471975511965979,
    radius: 155.25691575445222,
    target: {
      _x: 29.11172806356472,
      _y: 16.27476562646552,
      _z: -14.982196401373983
    },
    isOrtho: false,
    orthoLeft: -129.2521250368228,
    orthoRight: 129.2521250368228,
    orthoBottom: -72.70432033321282,
    orthoTop: 72.70432033321282
  };
  await setCameraPosition(page, localCamPos3D);
  await page.getByRole('img', { name: 'pushpull' }).click();
  await page.canvas.click(570, 515);
  await page.canvas.click(593, 270);
  await page.getByRole('img', { name: 'pushpull' }).click();
  await expect(page).toHaveCanvasSnapshot('edit_0005.png', { maxDiffPixels: 960 });
  const component = await page.canvas.getComponent({x: 562, y: 316});
  await expect(component.geometry).toMatchGeometry('edit_0005.geom');
  await expect(component.type).toBe("Mass")
});

/**
 * @id PARAMETRIC EDIT_0006
 * @description Check user can able to push/pull edit on  copied linear mass edge in 2D or not 
 *
 * @steps
 * 1.Create project
	* 2.Select mass
	* 3.Draw linear mass
	* 4.Copy the mass
	* 4.Select push/pull edit tool
	* 5.push/pull edit on copied mass edge
 *
 * @expected Users should be able to perform push/pull edits on copied linear mass edges in 2D.
 */
test('PARAMETRIC EDIT_0006', async () => {
await page.canvas.click(267, 231);
await page.canvas.click(271, 334);
await page.canvas.click(391, 338);
await page.canvas.click(391, 418);
await page.canvas.click(488, 422);
await page.canvas.click(475, 233);
await page.canvas.click(266, 226);
await page.getByRole('img', { name: 'copy' }).click();
await page.canvas.click(443, 338);
await page.canvas.click(741, 346);
await page.canvas.click(526, 386);
await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
await page.waitForTimeout(300)
const localCamPos3D = {
    position: {
      _x: 123.56162882006393,
      _y: 54.37333250651443,
      _z: -92.67491186451007
    },
    alpha: -0.9898705043869782,
    beta: 1.1138664785893788,
    radius: 82.69644082612056,
    target: {
      _x: 82.83382931514332,
      _y: 17.888076146093958,
      _z: -30.636425897253858
    },
    isOrtho: false,
    orthoLeft: -76.25097860130077,
    orthoRight: 76.25097860130077,
    orthoBottom: -42.89117546323168,
    orthoTop: 42.89117546323168
  };
  await setCameraPosition(page, localCamPos3D);
  await page.getByRole('img', { name: 'pushpull' }).click();
  await page.canvas.click(717, 459);
  await page.canvas.click(734, 186);
  await expect(page).toHaveCanvasSnapshot('edit_0006.png', { maxDiffPixels: 960 });
  const component = await page.canvas.getComponent({x: 698, y: 332});
  await expect(component.geometry).toMatchGeometry('edit_0006.geom');
  await expect(component.type).toBe("Mass")
});


/**
 * @id PARAMETRIC EDIT_0007
 * @description Check user can able to push/pull edit on  copied angled linear mass edge in 2D or not 
 *
 * @steps
 * 1.Create project
	* 2.Select mass
	* 3.Draw angular mass
	* 4.Copy the mass
	* 4.Select push/pull edit tool
	* 5.push/pull edit on copied mass edge
 *
 * @expected Users should be able to perform push/pull edits on copied angular mass edges in 2D.
 */
test('PARAMETRIC EDIT_0007', async () => {
  await page.canvas.click(162, 377);
  await page.canvas.click(291, 252);
  await page.canvas.click(416, 245);
  await page.canvas.click(474, 360);
  await page.canvas.click(475, 514);
  await page.canvas.click(352, 514);
  await page.canvas.click(354, 374);
  await page.canvas.click(167, 374);
  await page.getByRole('img', { name: 'copy' }).click();
  await page.canvas.click(326, 351);
  await page.canvas.click(722, 348);
  await page.canvas.click(558, 434);
  await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
  await page.waitForTimeout(300)
  const localCamPos3D = {
    position: {
      _x: 149.9510917557914,
      _y: 65.712140533433,
      _z: -131.60973757314596
    },
    alpha: -0.8563939664339549,
    beta: 1.2553727048437222,
    radius: 136.4075524030024,
    target: {
      _x: 64.99054231571591,
      _y: 23.395895802026672,
      _z: -33.640044181515606
    },
    isOrtho: false,
    orthoLeft: -113.00169660453481,
    orthoRight: 113.00169660453481,
    orthoBottom: -63.56345434005083,
    orthoTop: 63.56345434005083
  };
  await setCameraPosition(page, localCamPos3D);
  await page.getByRole('img', { name: 'pushpull' }).click();
  await page.canvas.click(790, 516);
  await page.canvas.click(801, 295);
  await expect(page).toHaveCanvasSnapshot('edit_0007.png', { maxDiffPixels: 960 });
  const component = await page.canvas.getComponent({x: 787, y: 422});
  await expect(component.geometry).toMatchGeometry('edit_0007.geom');
  await expect(component.type).toBe("Mass")
  const count = await getComponentCount()
  await expect (count).toBe(2)
});

/**
 * @id PARAMETRIC EDIT_0008
 * @description Check user can able to push/pull edit on  copied arc mass edge in 2D or not 
 *
 * @steps
 * 1.Create project
	* 2.Select mass
	* 3.Draw arc mass
	* 4.Copy the mass
	* 4.Select push/pull edit tool
	* 5.push/pull edit on copied mass edge
 *
 * @expected Users should be able to perform push/pull edits on copied arc mass edges in 2D.
 */
test('PARAMETRIC EDIT_0008', async () => {
await page.getByRole('img', { name: 'arc' }).click();
await page.canvas.click(258, 270);
await page.canvas.click(479, 264);
await page.canvas.click(373, 218);
await page.canvas.click(476, 449);
await page.canvas.click(457, 418);
await page.canvas.click(256, 453);
await page.canvas.click(362, 517);
await page.canvas.click(260, 266);
await page.canvas.click(290, 364);
await page.getByRole('img', { name: 'copy' }).click();
await page.canvas.click(379, 354);
await page.canvas.click(725, 366);
await page.canvas.click(546, 433);
await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
await page.waitForTimeout(300)
const localCamPos3D = {
    position: {
      _x: 126.31816794963616,
      _y: 84.66744128230289,
      _z: -141.5053591151118
    },
    alpha: -1.0428670507753361,
    beta: 1.1798974029407199,
    radius: 136.891427554061,
    target: {
      _x: 62.56145888814143,
      _y: 32.50911278326461,
      _z: -32.17167832267225
    },
    isOrtho: false,
    orthoLeft: -115.58541695667428,
    orthoRight: 115.58541695667428,
    orthoBottom: -65.01679703812928,
    orthoTop: 65.01679703812928
  };
  await setCameraPosition(page, localCamPos3D);
  await page.getByRole('img', { name: 'pushpull' }).click();
  await page.canvas.click(732, 530);
  await page.canvas.click(766, 314);
  await expect(page).toHaveCanvasSnapshot('edit_0008.png', { maxDiffPixels: 960 });
  const component = await page.canvas.getComponent({x: 794, y: 383});
  await expect(component.geometry).toMatchGeometry('edit_0008.geom');
  await expect(component.type).toBe("Mass")
  const count = await getComponentCount()
  await expect (count).toBe(2)
});

/**
 * @id PARAMETRIC EDIT_0009
 * @description Check user can able to push/pull edit on  copied arc+linear mass edge in 2D or not 
 *
 * @steps
 * 1.Create project
	* 2.Select mass
	* 3.Draw linear+arc mass
	* 4.Copy the mass
	* 4.Select push/pull edit tool
	* 5.push/pull edit on copied mass edge
 *
 * @expected Users should be able to perform push/pull edits on copied linear+arc mass edges in 2D.
 */
test('PARAMETRIC EDIT_0009', async () => {
await page.getByRole('img', { name: 'arc' }).click();
await page.canvas.click(221, 242);
await page.canvas.click(446, 250);
await page.canvas.click(359, 159);
await page.locator('#draw').click();
await page.canvas.click(442, 446);
await page.getByRole('img', { name: 'arc' }).click();
await page.canvas.click(226, 438);
await page.canvas.click(326, 521);
await page.getByRole('img', { name: 'draw', exact: true }).click();
await page.canvas.click(231, 243);
await page.getByRole('img', { name: 'copy' }).click();
await page.canvas.click(390, 251);
await page.canvas.click(661, 256);
await page.canvas.click(466, 404);
await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
await page.waitForTimeout(3000)
const localCamPos3D = {
    position: {
      _x: 113.54557000753601,
      _y: 73.5323138598139,
      _z: -117.3142784279201
    },
    alpha: -1.1198972905086075,
    beta: 1.0927724118695854,
    radius: 116.54391538491028,
    target: {
      _x: 68.45158087693486,
      _y: 19.91914118670782,
      _z: -24.176509110322286
    },
    isOrtho: false,
    orthoLeft: -97.41957398764224,
    orthoRight: 97.41957398764224,
    orthoBottom: -54.79851036804876,
    orthoTop: 54.79851036804876
  };
  await setCameraPosition(page, localCamPos3D);

  await page.getByRole('img', { name: 'pushpull' }).click();
  await page.canvas.click(704, 482);
  await page.canvas.click(667, 322);
  await expect(page).toHaveCanvasSnapshot('edit_0009.png', { maxDiffPixels: 960 });
const component = await page.canvas.getComponent({x: 688, y: 365});
  await expect(component.geometry).toMatchGeometry('edit_0009.geom');
  await expect(component.type).toBe("Mass")
  const count = await getComponentCount()
  await expect (count).toBe(2)
});

/**
 * @id PARAMETRIC EDIT_0010
 * @description Check user can able to push/pull edit on  copied circular mass or not 
 *
 * @steps
 * 1.Create project
	* 2.Select mass
	* 3.Draw circular mass
	* 4.Copy the mass
	* 4.Select push/pull edit tool
	* 5.push/pull edit on copied mass edge
 *
 * @expected Users should be able to perform push/pull edits on copied circular mass edges in 2D.
 */
test('PARAMETRIC EDIT_0010', async () => {
await page.getByRole('img', { name: 'drawCircle' }).click();
await page.canvas.click(223, 356);
await page.canvas.click(303, 444);
await page.getByRole('img', { name: 'copy' }).click();
await page.canvas.click(258, 348);
await page.canvas.click(614, 353);
await page.canvas.click(429, 468);
await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
await page.waitForTimeout(3000)
const localCamPos3D = {
    position: {
      _x: 102.23372187351715,
      _y: 83.43382586637436,
      _z: -134.21407735917086
    },
    alpha: -1.1137475687698597,
    beta: 1.124965449220943,
    radius: 129.7158014667511,
    target: {
      _x: 50.58534451171962,
      _y: 27.49937468291835,
      _z: -29.1904065184479
    },
    isOrtho: false,
    orthoLeft: -111.0823713384293,
    orthoRight: 111.0823713384293,
    orthoBottom: -62.48383387786648,
    orthoTop: 62.48383387786648
  };
  await setCameraPosition(page, localCamPos3D);
  await page.getByRole('img', { name: 'pushpull' }).click();
  await page.canvas.click(746, 531);
  await page.canvas.click(702, 235);
  await expect(page).toHaveCanvasSnapshot('edit_0010.png', { maxDiffPixels: 960 });
  const component = await page.canvas.getComponent({x: 782, y: 355});
  await expect(component.geometry).toMatchGeometry('edit_0010.geom');
  await expect(component.type).toBe("Mass")
  const count = await getComponentCount()
  await expect (count).toBe(2)
});

/**
 * @id PARAMETRIC EDIT_0011
 * @description Check user can able to push/pull edit on  storey copied linear mass edge in 2D or not.
 *
 * @steps
 * 1.Create project
	* 2.Select mass
	* 3.Draw linear mass
	* 4.Storey Copy the mass
	* 4.Select push/pull edit tool
	* 5.push/pull edit on Storey copied mass edge
 *
 * @expected Users should be able to perform push/pull edits on storey copied linear mass edges in 2D.
 */
test('PARAMETRIC EDIT_0011', async () => {
await page.canvas.click(259, 246);
await page.canvas.click(268, 464);
await page.canvas.click(630, 457);
await page.canvas.click(631, 250);
await page.canvas.click(259, 250);
await page.getByRole('img', { name: 'pointer' }).click();
await page.canvas.click(385, 353);
await page.locator('#add-storey').getByRole('img', { name: 'storey_down' }).click();
await page.getByRole('button', { name: 'Copy selection above' }).click();
await page.getByRole('img', { name: 'pointer' }).click();
await page.canvas.click(211, 271);
await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
await page.waitForTimeout(300)
const localCamPos3D = {
    position: {
      _x: 119.19941575573624,
      _y: 56.40104554052198,
      _z: -110.62036801452123
    },
    alpha: -1.008082471266797,
    beta: 1.2805865692678133,
    radius: 86.37873972494782,
    target: {
      _x: 75.04473317443359,
      _y: 31.683491229228537,
      _z: -40.615416821888104
    },
    isOrtho: false,
    orthoLeft: -103.5239941900809,
    orthoRight: 103.5239941900809,
    orthoBottom: -58.232246731920505,
    orthoTop: 58.232246731920505
  };
  await setCameraPosition(page, localCamPos3D);
  await page.getByRole('img', { name: 'pointer' }).click();
  await page.canvas.click(566, 508);
  await page.getByRole('button', { name: 'Make Unique' }).click();
  await page.getByRole('img', { name: 'pushpull' }).click();
  await page.canvas.click(583, 425);
  await page.canvas.click(563, 185);
  await expect(page).toHaveCanvasSnapshot('edit_0011.png', { maxDiffPixels: 960 });
  const component = await page.canvas.getComponent({x: 597, y: 292});
  await expect(component.geometry).toMatchGeometry('edit_0011.geom');
  await expect(component.type).toBe("Mass")
  const count = await getComponentCount()
  await expect(count).toBe(2)
});

/**
 * @id PARAMETRIC EDIT_0012
 * @description Check user can able to push/pull edit on  storey copied angled linear mass edge in 2D or not 
 *
 * @steps
 * 1.Create project
	* 2.Select mass
	* 3.Draw angular mass
	* 4.Storey Copy the mass
	* 4.Select push/pull edit tool
	* 5.push/pull edit on Storey copied mass edge
 *
 * @expected Users should be able to perform push/pull edits on storey copied angular mass edges in 2D.
 */
test('PARAMETRIC EDIT_0012', async () => {
await page.canvas.click(318, 390);
await page.canvas.click(454, 241);
await page.canvas.click(598, 242);
await page.canvas.click(685, 376);
await page.canvas.click(671, 573);
await page.canvas.click(530, 576);
await page.canvas.click(530, 394);
await page.canvas.click(319, 384);
await page.getByRole('img', { name: 'pointer' }).click();
await page.canvas.click(495, 301);
await page.locator('#add-storey').getByRole('img', { name: 'storey_down' }).click();
await page.getByRole('button', { name: 'Copy selection above' }).click();
await page.canvas.click(238, 256);
await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
await page.waitForTimeout(300)
const localCamPos3D = {
    position: {
      _x: 116.36886075404782,
      _y: 90.36650030289763,
      _z: -138.19692532618564
    },
    alpha: -1.2004676607197542,
    beta: 1.0720732652836307,
    radius: 129.983875054351,
    target: {
      _x: 75.05509771631245,
      _y: 28.194624155788595,
      _z: -31.7843387860798
    },
    isOrtho: false,
    orthoLeft: -110.60051993784461,
    orthoRight: 110.60051993784461,
    orthoBottom: -62.212792465037595,
    orthoTop: 62.212792465037595
  };
  await setCameraPosition(page, localCamPos3D);
  await page.canvas.click(587, 479);
  await page.getByRole('button', { name: 'Make Unique' }).click();
  await page.getByRole('img', { name: 'pushpull' }).click();
  await page.canvas.click(608, 413);
  await page.canvas.click(602, 209);
  await expect(page).toHaveCanvasSnapshot('edit_0012.png', { maxDiffPixels: 960 });
  const component = await page.canvas.getComponent({x: 559, y: 354});
  await expect(component.geometry).toMatchGeometry('edit_0012.geom');
  await expect(component.type).toBe("Mass")
  const count = await getComponentCount()
  await expect(count).toBe(2)
});


/**
 * @id PARAMETRIC EDIT_0013
 * @description Check user can able to push/pull edit on storey copied arc mass edge in 2D or not 
 *
 * @steps
 * 1.Create project
	* 2.Select mass
	* 3.Draw arc mass
	* 4.Storey Copy the mass
	* 4.Select push/pull edit tool
	* 5.push/pull edit on Storey copied mass edge
 *
 * @expected Users should be able to perform push/pull edits on storey copied arc mass edges in 2D.
 */
test('PARAMETRIC EDIT_0013', async () => {
await page.getByRole('img', { name: 'arc' }).click();
await page.canvas.click(352, 264);
await page.canvas.click(609, 263);
await page.canvas.click(486, 206);
await page.canvas.click(610, 464);
await page.canvas.click(574, 374);
await page.canvas.click(349, 460);
await page.canvas.click(475, 515);
await page.canvas.click(356, 267);
await page.canvas.click(385, 312);
await page.getByRole('img', { name: 'pointer' }).click();
await page.canvas.click(438, 371);
await page.locator('#add-storey').getByRole('img', { name: 'storey_down' }).click();
await page.getByRole('button', { name: 'Copy selection above' }).click();
await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
await page.waitForTimeout(300)
const localCamPos3D = {
    position: {
      _x: 144.76290997459307,
      _y: 58.41606123764425,
      _z: -79.73879530322259
    },
    alpha: -0.39607959145369787,
    beta: 1.2511151279901762,
    radius: 88.71836482648904,
    target: {
      _x: 67.0599372108215,
      _y: 30.53507948807382,
      _z: -47.24499377372006
    },
    isOrtho: false,
    orthoLeft: -101.52307208486769,
    orthoRight: 101.52307208486769,
    orthoBottom: -57.10672804773807,
    orthoTop: 57.10672804773807
  };
  await setCameraPosition(page, localCamPos3D);
  await page.getByRole('button', { name: 'Make Unique' }).click();
  await page.getByRole('img', { name: 'pushpull' }).click();
  await page.canvas.click(677, 418);
  await page.canvas.click(674, 242);
  await expect(page).toHaveCanvasSnapshot('edit_0013.png', { maxDiffPixels: 960 });
  const component = await page.canvas.getComponent({x: 631, y: 335});
  await expect(component.geometry).toMatchGeometry('edit_0013.geom');
  await expect(component.type).toBe("Mass")
  const count = await getComponentCount()
  await expect(count).toBe(2)
});

/**
 * @id PARAMETRIC EDIT_0014
 * @description Check user can able to push/pull edit on storey copied arc+linear mass edge in 2D or not 
 *
 * @steps
 * 1.Create project
	* 2.Select mass
	* 3.Draw linear+arc mass
	* 4.Storey Copy the mass
	* 4.Select push/pull edit tool
	* 5.push/pull edit on Storey copied mass edge
 *
 * @expected Users should be able to perform push/pull edits on storey copied linear+arc mass edges in 2D.
 */
test('PARAMETRIC EDIT_0014', async () => {
await page.getByRole('img', { name: 'arc' }).click();
await page.canvas.click(393, 292);
await page.canvas.click(639, 290);
await page.canvas.click(598, 218);
await page.getByRole('img', { name: 'draw', exact: true }).click();
await page.canvas.click(645, 466);
await page.getByRole('img', { name: 'arc' }).click();
await page.canvas.click(398, 468);
await page.canvas.click(518, 558);
await page.getByRole('img', { name: 'draw', exact: true }).click();
await page.canvas.click(394, 293);
await page.getByRole('img', { name: 'pointer' }).click();
await page.canvas.click(492, 331);
await page.locator('#add-storey').getByRole('img', { name: 'storey_down' }).click();
await page.getByRole('button', { name: 'Copy selection above' }).click();
await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
await page.waitForTimeout(300)
await page.getByRole('button', { name: 'Make Unique' }).click();
const localCamPos3D = {
    position: {
      _x: 158.0323894803536,
      _y: 55.568927639440346,
      _z: -89.21509932302584
    },
    alpha: -0.5776908199870769,
    beta: 1.324339129899496,
    radius: 111.78461653750033,
    target: {
      _x: 67.21720220481403,
      _y: 28.296862927985355,
      _z: -30.015126849055214
    },
    isOrtho: false,
    orthoLeft: -95.65612404225455,
    orthoRight: 95.65612404225455,
    orthoBottom: -53.80656977376818,
    orthoTop: 53.80656977376818
  };
  await setCameraPosition(page, localCamPos3D);
  await page.getByRole('img', { name: 'pushpull' }).click();
  await page.canvas.click(577, 410);
  await page.canvas.click(569, 239);
  await expect(page).toHaveCanvasSnapshot('edit_0014.png', { maxDiffPixels: 960 });
  const component = await page.canvas.getComponent({x: 493, y: 350});
  await expect(component.geometry).toMatchGeometry('edit_0014.geom');
  await expect(component.type).toBe("Mass")
  const count = await getComponentCount()
  await expect(count).toBe(2);
});

/**
 * @id PARAMETRIC EDIT_0015
 * @description Check user can able to push/pull edit on storey copied circular mass edge in 2D or not 
 *
 * @steps
 * 1.Create project
	* 2.Select mass
	* 3.Draw circular mass
	* 4.Storey Copy the mass
	* 4.Select push/pull edit tool
	* 5.push/pull edit on Storey copied mass edge
 *
 * @expected Users should be able to perform push/pull edits on storey copied circular mass edges in 2D.
 */
test('PARAMETRIC EDIT_0015', async () => {
await page.getByRole('img', { name: 'drawCircle' }).click();
await page.canvas.click(420, 350);
await page.canvas.click(513, 467);
await page.locator('#pointer').click();
await page.canvas.click(458, 310);
await page.locator('#add-storey').getByRole('img', { name: 'storey_down' }).click();
await page.getByRole('button', { name: 'Copy selection above' }).click();
await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
await page.waitForTimeout(300);
await page.getByRole('button', { name: 'Make Unique' }).click();
const localCamPos3D = {
    position: {
      _x: 145.6833447545642,
      _y: 66.00052846992719,
      _z: -103.7760142710406
    },
    alpha: -0.5821007935673688,
    beta: 1.2811483869262292,
    radius: 116.6258911246411,
    target: {
      _x: 52.322654132843894,
      _y: 32.69044231215449,
      _z: -42.32832849351247
    },
    isOrtho: false,
    orthoLeft: -103.11459468627704,
    orthoRight: 103.11459468627704,
    orthoBottom: -58.00195951103084,
    orthoTop: 58.00195951103084
  };
  await setCameraPosition(page, localCamPos3D);
await page.getByRole('img', { name: 'pushpull' }).click();
await page.canvas.click(686, 428);
  await page.canvas.click(670, 219);
await expect(page).toHaveCanvasSnapshot('edit_0015.png', { maxDiffPixels: 960 });
const component = await page.canvas.getComponent({x: 744, y: 327});
  await expect(component.geometry).toMatchGeometry('edit_0015.geom');
  await expect(component.type).toBe("Mass")
  const count = await getComponentCount()
  await expect(count).toBe(2);
});