import set3DCameraPositionToVersion0 from "../environment/set3DCameraPositionToVersion0";

async function ClickCoordinates(page, actions, DELAY) {
  for (let action of actions) {
    if (action === "edit") {
      await page.getByRole("img", { name: "edit" }).click();
    } else if (action === "slab") {
      await page.getByRole("img", { name: "Slab" }).click();
    } else if (action === "drawVoid") {
      await page.getByRole("img", { name: "drawVoid" }).click();
    } else if (action === "toggle 2d<->3d") {
      await page.getByRole("img", { name: "Toggle 2d<->3d" }).click();
      await set3DCameraPositionToVersion0(page);
    } else if (action === "pushpull") {
      await page.getByRole("img", { name: "pushpull" }).click({ delay: 100 });
    } else if (action === "move") {
      await page.getByRole("img", { name: "move", exact: true }).click();
    } else if (action === "rotate") {
      await page.getByRole("img", { name: "rotate" }).click({ delay: 300 });
    } else if (action === "pointer") {
      await page.getByRole("img", { name: "pointer" }).click();
    } else {
      await page.locator("#canvas").click({
        position: action,
        delay: DELAY,
      });
    }
  }
}

module.exports = ClickCoordinates;
