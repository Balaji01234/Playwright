async function toggle2D(page) {
  const isTwoDimension = await page.evaluate(() => store.$scope.isTwoDimension);
  if (!isTwoDimension) {
    await page.getByRole("img", { name: "Toggle 2d<->3d" }).click();
  }
}

module.exports = toggle2D;
