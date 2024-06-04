import { Page } from '@playwright/test';
import { type Point, type Geometry, clearSelection, selectArea, selectMesh } from './geometry';

const resurrect = require('resurrect-js');

export type Component = {
  geometry: Geometry;
  type: string;
  massType: string;
};

export async function getCanvasSnapshotUrl(page: Page): Promise<string> {
  const canvas = page.locator('canvas');
  return await canvas.evaluate((c: HTMLCanvasElement) => {
    return new Promise((resolve) => {
      c.toBlob((blob) => {
        resolve(window.URL.createObjectURL(blob));
      });
    });
  });
}

export async function selectAll(page: Page) {
  await page.locator('#canvas').press('Meta+a');
  await page.waitForTimeout(100);
}

export async function clearCanvas(page: Page) {
  await selectAll(page);
  await page.getByRole('img', { name: 'delete_icon' }).click();
}

export class Canvas {
  private readonly page: Page;
  private readonly geometryDir: string;

  constructor(params: { page: Page; geometryDir: string }) {
    this.page = params.page;
    this.geometryDir = params.geometryDir;
  }

  async click(x: number, y: number) {
    await this.page.locator('#canvas').click({ position: { x, y } });
  }

  async dblclick(x: number, y: number) {
    await this.page.locator('#canvas').dblclick({ position: { x, y } });
  }

  async getComponent(start: Point, end?: Point): Promise<Component> {
    if (!end) {
      await selectMesh(this.page, start);
    } else {
      await selectArea(this.page, start, end);
    }
    let component = await this.page.evaluate(() => {
      // @ts-ignore
      const selection = store.selectionStack[0];
      const snaptrudeDS = selection.getSnaptrudeDS();
      const component = {
        geometry: {
          [snaptrudeDS.internal.testId]: {
            brep: snaptrudeDS.brep,
            matrix: JSON.stringify(selection.getWorldMatrix())
          }
        },
        type: snaptrudeDS.type,
        massType: snaptrudeDS.massType
      };

      //@ts-ignore
      const prevState = store.resurrect.revive;
      // @ts-ignore
      store.resurrect.revive = false;
      // @ts-ignore
      const stringifiedComp = store.resurrect.stringify(component);
      // @ts-ignore
      store.resurrect.revive = prevState;

      return stringifiedComp;
    });
    component = new resurrect().resurrect(component);
    Object.defineProperty(component.geometry, 'dir', {
      value: this.geometryDir,
      enumerable: false
    });

    await clearSelection(this.page);
    return component;
  }
}
