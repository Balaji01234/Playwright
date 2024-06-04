import 'dotenv/config';
import { test as setup } from '@playwright/test';

const shouldSkip = process.env.SKIP_SETUP === 'true';

(shouldSkip ? setup.skip : setup)('Login and save authentication', async ({ page }) => {
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;
  const authFile = process.env.AUTH_FILE;
  await page.goto('/');
  await page.getByPlaceholder('username@company.com').fill(email);
  await page.locator('input[type="password"]').fill(password);
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.locator('button >> text="New Project"').waitFor({ state: 'visible', timeout: 10000 });
  await page.context().storageState({ path: authFile });
  await page.close();
});
