import { Page } from 'playwright';
import { Canvas } from './canvas';
import { TestInfo } from '@playwright/test';
import { createGeometryDir } from './geometry';

declare module 'playwright' {
  interface Page {
    canvas: Canvas;
  }
}

export async function sTrudePage(page: Page, testInfo: TestInfo) {
  const geometryDir = await createGeometryDir(testInfo.project.testDir, testInfo.titlePath[0]);
  page.canvas = new Canvas({ page, geometryDir });
  return page;
}

export { Page };
