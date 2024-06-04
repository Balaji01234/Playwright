async function threeDCamera(page) {
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

module.exports = threeDCamera;
