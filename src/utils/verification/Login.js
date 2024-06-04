import 'dotenv/config';

export default async function Login({ page }) {
  const url = process.env.TEST_URL || process.env.AUTOMATION_URL;
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;

  await page.goto(url);
  await Promise.race(
      [
        page.getByPlaceholder("username@company.com"),
        page.waitForSelector('button >> text="Create a Project"', {
          timeout: 60000,
        })
      ]
  );

  if (page.url().endsWith('login')) {
    await page.getByPlaceholder("username@company.com").fill(email);
    await page.getByPlaceholder("username@company.com").press("Tab");
    await page.locator('input[type="password"]').fill(password);
    await page.locator('input[type="password"]').press("Enter");
  }

  await page.click('button >> text="Create a Project"');

  // await page.waitForTimeout(1000);
  await page.getByRole("button", { name: "Create", exact: true }).click();

  await page.waitForSelector(".project-is-ready", {
    state: "attached",
    timeout: 60000,
  });

  await page.waitForTimeout(1000);

  await page.evaluate(() => {
    // @ts-ignore
    store.isInstructorDisabled = true;
  });

  const setting = await page.getByRole("img", { name: "Settings" });

  const feetInches = await page.locator('text="Feet-inches"').first();
  let millimeters = await page.getByText("Millimeters");

  await setting.click();

  if (feetInches) {
    // Check if the element is visible before clicking
    let isVisible = await feetInches.isVisible();
    if (isVisible) {
      await feetInches.click();

      let millimeters = await page.getByText("Millimeters");
      await millimeters.click();
      await setting.click();
    } else {
      await setting.click();
    }
  }

  // Check if the div is attached to the DOM
  const draw = await page.$(".sc-rPWID.dDJegX");

  if (!draw) {
    // If the div is not attached, perform the click operation
    await page.getByRole("img", { name: "draw", exact: true }).click();
  }

  await page
    .frameLocator('iframe[name="intercom-launcher-frame"]')
    .getByTestId("launcher-with-badge-cutout-none")
    .click();
  await page
    .frameLocator('iframe[name="intercom-launcher-frame"]')
    .getByTestId("launcher-with-badge-cutout-none")
    .click();
}

module.exports = Login;