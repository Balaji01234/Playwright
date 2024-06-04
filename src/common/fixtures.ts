import { join } from 'path';
import { expect as baseExpect, Page } from '@playwright/test';
import { getCanvasSnapshotUrl } from './canvas';
import {
  compareGeometry,
  compareGeometryV2,
  getGeometryFromFile,
  saveGeometry,
  type Geometry,
  type GeometryOld
} from './geometry';

export { test } from '@playwright/test';

export const expect = baseExpect.extend({
  async toHaveCanvasSnapshot(page: Page, name: string, options?: object) {
    let pass = null;
    let matcherResult = null;

    options ??= {
      maxDiffPixelRatio: 0.01
    };

    try {
      await page.waitForTimeout(300);
      const canvas = page.locator('canvas');
      await baseExpect(canvas).toHaveId('canvas');
      const context = page.context();
      const canvasPage = await context.newPage();
      const snapshotUrl = await getCanvasSnapshotUrl(page);
      await canvasPage.goto(snapshotUrl);
      await baseExpect(canvasPage).toHaveScreenshot(name, options);
      await canvasPage.close();
      pass = true;
    } catch (err: any) {
      matcherResult = err.matcherResult;
      pass = false;
    }

    return {
      pass,
      name: 'toHaveCanvasSnapshot',
      message: () => matcherResult?.message,
      actual: matcherResult?.actual,
      expected: matcherResult?.expected
    };
  },

  /**
   * @deprecated Use toMatchGeometry
   */
  async toHaveGeometryV0(actualGeometry: GeometryOld, name: string, dir: string) {
    let pass: boolean;
    let matcherResult: any;
    try {
      const geometryPath = join(dir, name);
      const expectedGeometry = await getGeometryFromFile(geometryPath);

      if (!expectedGeometry) {
        await saveGeometry(actualGeometry, geometryPath);
        matcherResult = {
          message: () => `No geometry file found. Writing actual at ${geometryPath}`,
          actual: undefined,
          expected: geometryPath
        };
        pass = false;
      } else {
        compareGeometry(actualGeometry, expectedGeometry);
        pass = true;
      }
    } catch (e: any) {
      matcherResult = { message: () => e.toString() };
      pass = false;
    }

    return {
      message: () => `Geometry comparison failed\n${matcherResult?.message()}`,
      pass,
      name: 'toHaveGeometry',
      actual: matcherResult?.actual,
      expected: matcherResult?.expected
    };
  },

  async toMatchGeometry(actualGeometry: Geometry & { dir: string }, name: string) {
    let pass: boolean;
    let matcherResult: any;
    try {
      const geometryPath = join(actualGeometry.dir, name);
      const expectedGeometry = await getGeometryFromFile(geometryPath);
      // updating geometry only makes sense when the geometry file already exists.
      const updateGeometry = process.env.UPDATE_GEOMETRY === 'true' && !!expectedGeometry;

      if (expectedGeometry && !updateGeometry) {
        compareGeometryV2(actualGeometry, expectedGeometry);
        pass = true;
      } else {
        let saveGeometryMessage: string;
        if (updateGeometry && expectedGeometry) {
          Object.keys(actualGeometry).forEach((id) => {
            expectedGeometry[id] = actualGeometry[id];
          });
          await saveGeometry(expectedGeometry, geometryPath);
          saveGeometryMessage = `Updating geometry file at ${geometryPath}`;
          pass = true;
        } else if (!expectedGeometry) {
          await saveGeometry(actualGeometry, geometryPath);
          saveGeometryMessage = `No geometry file found. Writing actual at ${geometryPath}`;
          pass = false;
        } else {
          saveGeometryMessage = 'Unknown state reached while saving geometry!';
          pass = false;
        }
        matcherResult = {
          message: () => saveGeometryMessage,
          actual: undefined,
          expected: geometryPath
        };
      }
    } catch (e: any) {
      matcherResult = { message: () => e.toString() };
      pass = false;
    }

    return {
      pass,
      name: 'toMatchGeometry',
      actual: matcherResult?.actual,
      expected: matcherResult?.expected,
      message: () => `Geometry comparison failed\n${matcherResult?.message()}`
    };
  }
});
