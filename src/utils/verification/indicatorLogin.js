async function indicatorLogin({ page }) {
  await page.goto("http://localhost:3000/dashboard");
  await page
    .getByPlaceholder("username@company.com")
    .fill("ansh@snaptrude.com");
  await page.getByPlaceholder("username@company.com").press("Tab");
  await page.locator('input[type="password"]').fill("anshpatel");
  await page.locator('input[type="password"]').press("Enter");

  await page.getByRole("button", { name: "Create a Project" }).click();
  // await page.waitForTimeout(1000);
  await page.getByRole("button", { name: "Create", exact: true }).click();
}

module.exports = indicatorLogin;
