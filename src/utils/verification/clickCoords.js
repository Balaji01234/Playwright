async function clickCoords(page, coordinates, delay) {
  for (let i = 0; i < coordinates.length; i++) {
    await page.locator("#canvas").click({
      position: coordinates[i],
    });
    await page.waitForTimeout(delay);
  }
}

module.exports = clickCoords;
