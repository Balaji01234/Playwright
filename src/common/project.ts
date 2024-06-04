import * as path from 'path';
import { expect, TestInfo } from '@playwright/test';
import { clearCanvas } from './canvas';
import { reset2DCameraVersion0 } from './camera';
import { createSnaptrudeProject, getSnaptrudeFolderContent } from './api';
import { Page } from './page';

export async function initProject(page: Page, testInfo: TestInfo) {
  let floorKey = null;
  const projectName = testInfo.project.name;
  const suiteName = path.basename(testInfo.titlePath[0]) ?? 'Untitled';

  const folders = await getFoldersFromLocalStorage(page);
  const snaptrudeFolder = folders[projectName];
  if (snaptrudeFolder) {
    const snaptrudeProject =
      snaptrudeFolder['projects'][suiteName] ??
      (await getSnaptrudeFolderContent(page, snaptrudeFolder.id, 'projects'))[suiteName];
    if (snaptrudeProject) {
      floorKey = snaptrudeProject['key'];
    } else {
      const result = await createSnaptrudeProject(page, suiteName, snaptrudeFolder['id']);
      floorKey = result['project']['key'];
    }
  }
  // const floorKey = await getFloorKey(page, projectName);
  if (!floorKey) {
    throw new Error('Could not get floor key. Did you run auth.setup.ts and folder.setup.ts?');
  }
  await page.route(/.*intercom.*/, (route) => route.abort());
  await page.goto(`/model/${floorKey}`);
  await page.waitForSelector('.project-is-ready', {
    state: 'attached',
    timeout: 60000
  });
  await page.locator('.toast').waitFor({ state: 'detached' });
  await page.locator('#project-settings-button').click();
  const imperialUnit = page.getByText('Feet-inches').first();

  if (await imperialUnit?.isVisible()) {
    await imperialUnit.click();
    await page.getByText('Millimeters').click();
  }
  await page.locator('#project-settings-button').click();

  await page.evaluate(() => {
    // @ts-ignore
    store.exposed.ptaa.isDisabled = true;
    // @ts-ignore
    store.isInstructorDisabled = true;
    // @ts-ignore
    store.exposed.autoSaveConfig.disableToasts();
    // @ts-ignore
    store.exposed.autoSaveConfig.disable();
    if (window['Intercom']) {
      window['Intercom']('shutdown');
      delete window['Intercom'];
    }
    // delete intercom elements
    document.getElementById('intercom-frame')?.remove();
    document.getElementById('intercom-container')?.remove();
    document.getElementById('intercom-css-container')?.remove();
    document.querySelector('.intercom-lightweight-app')?.remove();
  });
}

/**
 * @deprecated use configure2DProjectForTest in new tests
 */
export async function configure2DProjectForTestV0(page: Page) {
  await clearCanvas(page);
  await toggle2D(page);
  await ensureDrawMode(page);
  await reset2DCameraVersion0(page);
  await resetProjectWithAutoSaveDisabled(page);
}

export async function configure2DProjectForTest(page: Page) {
  await clearCanvas(page);
  await toggle2D(page);
  await ensureDrawMode(page);
  await resetProjectWithAutoSaveDisabled(page);
}

export async function ensureDrawMode(page: Page) {
  await page.getByText('Design').click();
  let drawingMode = await page.evaluate(() => {
    // @ts-ignore
    return store.ACTIVE_EVENT.event === 'drawingMode';
  });
  if (!drawingMode) {
    // If the div is not attached, perform the click operation
    await page.getByRole('img', { name: 'draw', exact: true }).click();
    // explicit wait to ensure switching to drawing mode
    await page.waitForTimeout(300);
  }

  drawingMode = await page.evaluate(() => {
    // @ts-ignore
    return store.ACTIVE_EVENT.event === 'drawingMode';
  });
  expect(drawingMode).toBeTruthy();
}

export async function toggle2D(page) {
  const isTwoDimension = await page.evaluate(() => {
    // @ts-ignore
    return store.$scope.isTwoDimension;
  });
  if (!isTwoDimension) {
    await page.getByRole('img', { name: 'Toggle 2d<->3d' }).click();
    await page.waitForTimeout(300);
  }
}

export async function getFoldersFromLocalStorage(page: Page) {
  const storageState = await page.context().storageState();
  const snaptrudeFolders = storageState['origins'][0]['localStorage'].find(
    (item) => item.name == 'snaptrudeFolders'
  );

  if (!snaptrudeFolders) {
    throw new Error(
      'Could not find snaptrudeFolders in local storage, did you run folder.setup.ts?'
    );
  }
  return JSON.parse(snaptrudeFolders['value']);
}

export async function resetProjectWithAutoSaveDisabled(page: Page) {
  await page.evaluate(() => {
    // @ts-ignore
    store.exposed.autoSaveConfig.disable();
    // @ts-ignore
    store.exposed.resetReduxStore();
  });
}

export async function enableAutoSave(page: Page) {
  await page.evaluate(() => {
    // @ts-ignore
    store.exposed.autoSaveConfig.enable();
  });
}
