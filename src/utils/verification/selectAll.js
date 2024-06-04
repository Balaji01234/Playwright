async function selectAll(page) {
  // Get the dimensions of the viewport
  const viewport = await page.viewportSize();

  // Define the start and end points for the drag operation
  const startPoint = { x: 0, y: 50 };
  const endPoint = { x: viewport.width, y: viewport.height };

  // Perform the drag and select operation
  await page.getByRole("img", { name: "pointer" }).click();

  await page.mouse.move(startPoint.x, startPoint.y);
  await page.mouse.down();
  await page.mouse.move(endPoint.x, endPoint.y);
  await page.mouse.up();

  // Return the start and end points
  return { start: startPoint, end: endPoint };
}

module.exports = selectAll;
