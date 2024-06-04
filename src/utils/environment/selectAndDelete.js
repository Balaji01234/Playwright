const selectAll = require("../../utils/verification/selectAll");

async function selectAndDelete(page) {
  // Access the store object from the page
  let queueLength = await page.evaluate(
    () => store.exposed.AutoSave.getQueue().length
  );

  // Wait until the queue is empty
  while (queueLength > 0) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second
    queueLength = await page.evaluate(
      () => store.exposed.AutoSave.getQueue().length
    ); // Update the queue length
  }

  await selectAll(page);
  await selectAll(page);
  await page.getByRole("img", { name: "delete_icon" }).click();
}

module.exports = selectAndDelete;
