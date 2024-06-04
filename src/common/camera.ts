import { Page } from '@playwright/test';

export async function reset3DCameraVersion0(page: Page) {
  // reset camera pos to version 0
  await page.evaluate(() => {
    // @ts-ignore
    store.scene.activeCamera.alpha = -0.5763752205911841;
    // @ts-ignore
    store.scene.activeCamera.beta = 1.1738300217757494;
    // @ts-ignore
    store.scene.activeCamera.radius = 258.65034312755125;
    // @ts-ignore
    store.scene.activeCamera.target.x = 0;
    // @ts-ignore
    store.scene.activeCamera.target.y = 0;
    // @ts-ignore
    store.scene.activeCamera.target.z = 0;
  });
}

export async function reset2DCameraVersion0(page: Page) {
  await page.evaluate(() => {
    const d1 = 56.568542494923804;
    // @ts-ignore
    store.newScene.activeCamera.orthoTop = (store.canvas.height * d1) / 1000;
    // @ts-ignore
    store.newScene.activeCamera.orthoBottom = (-store.canvas.height * d1) / 1000;
    // @ts-ignore
    store.newScene.activeCamera.orthoRight = (store.canvas.width * d1) / 1000;
    // @ts-ignore
    store.newScene.activeCamera.orthoLeft = (-store.canvas.width * d1) / 1000;
    // @ts-ignore
    store.scene.activeCamera.target.x = 80;
    // @ts-ignore
    store.scene.activeCamera.target.y = 0;
    // @ts-ignore
    store.scene.activeCamera.target.z = -40;
  });
}

export async function setCameraPosition(page: Page, pos: any) {
  await page.evaluate((pos) => {
    // @ts-ignore
    store.exposed.automationCamera.setCamera(pos);
  }, pos);
}
