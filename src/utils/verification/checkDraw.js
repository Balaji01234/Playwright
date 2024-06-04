const { expect } = require("@playwright/test");

async function checkDraw(page) {
  await page.getByText("Design").click();
  // Check if the div is attached to the DOM
  let draw = await page.evaluate(() => {
    // @ts-ignore
    return store.ACTIVE_EVENT.event === "drawingMode";
  });

  if (!draw) {
    // If the div is not attached, perform the click operation
    await page.getByRole("img", { name: "draw", exact: true }).click();
  }
  await page.getByRole("img", { name: "draw", exact: true }).click();
  await page.getByRole("img", { name: "draw", exact: true }).click();
}

module.exports = checkDraw;
