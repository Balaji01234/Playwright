async function twoDCamera(page) {
  // reset camera pos to version 0
  await page.evaluate(() => {
    const d1 = 56.568542494923804;

    store.newScene.activeCamera.orthoTop = (store.canvas.height * d1) / 1000;
    store.newScene.activeCamera.orthoBottom =
      (-store.canvas.height * d1) / 1000;
    store.newScene.activeCamera.orthoRight = (store.canvas.width * d1) / 1000;
    store.newScene.activeCamera.orthoLeft = (-store.canvas.width * d1) / 1000;

    store.scene.activeCamera.target.x = 80;
    store.scene.activeCamera.target.y = 0;
    store.scene.activeCamera.target.z = -40;
  });
}

module.exports = twoDCamera;
