async function Logout({ page }) {
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
  await page.close();
  // await page.getByRole("link", { name: "snaptrude" }).click({ delay: 10 });
  // await page.getByRole("link", { name: "avatar Ansh" }).click();
  // await page.getByText("Logout").click();
}

module.exports = Logout;
