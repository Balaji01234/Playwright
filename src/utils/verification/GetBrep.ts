import { Page } from '@playwright/test';
import { selectAll } from '../../common/canvas';

async function getBrep(
  page,
  dragPos0?: { x: number; y: number },
  dragPos1?: { x: number; y: number }
) {
  await page.getByRole('img', { name: 'pointer' }).click();

  // Define the area to drag around
  if (dragPos0 && dragPos1) {
    await dragMouse(page, dragPos0, dragPos1);
  } else {
    await selectAll(page);
  }

  // setting mesh to be the currentBrep
  let mesh = await page.evaluate(() => {
    // @ts-ignore
    return store.selectionStack[0]?.getSnaptrudeDS()?.brep;
  });

  await page.mouse.click(0, 50);

  return mesh;
}

async function dragMouse(
  page,
  startPoint?: { x: number; y: number },
  endPoint?: { x: number; y: number }
) {
  if (startPoint && endPoint) {
    // Move the mouse to the start point
    await page.mouse.move(startPoint.x, startPoint.y);
    // Press the mouse button down
    await page.mouse.down();
    // Move the mouse to the end point with the button held down
    await page.mouse.move(endPoint.x, endPoint.y);
    // Release the mouse button
    await page.mouse.up();
  }
}

export { getBrep, dragMouse };
