// utils/snapshot.ts

import * as path from 'path';

export function getScreenshotPath(moduleName: string, testName: string, snapshotName: string): string {
  const snapshotDir = path.join(__dirname, '..', 'testData', moduleName, 'screenshots', testName);
  return path.join(snapshotDir, `${snapshotName}.png`);
}
