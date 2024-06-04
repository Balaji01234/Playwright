import { expect, test } from '../../common/fixtures';
import { Page } from '@playwright/test';

let page: Page;

test.beforeAll(async ({ browser }, testInfo) => {
  const context = await browser.newContext();
  page = await context.newPage();
});

test.beforeEach(async () => {
  test.setTimeout(600000);
  await page.goto('/dashboard');
});

test.afterAll(async () => {
  await page.close();
});

/**
 * @id TC_TD_111
 * @description Check the user able to see the notification icon on the dashboard near to account profile picture
 *
 * @steps
 * 1.Launch url
 * 2.Login to Account
 *
 * @expected User should able to see the notification icon on the dashboard near to account profile picture
 */
test('TC_TD_111', async () => {
  await page.waitForSelector("//*[@alt='bell']", {
    state: 'attached',
    timeout: 60000
  });

  await page.getByRole('button', { name: 'bell' }).nth(1).isVisible();

  await expect(page.locator("//*[@alt='bell']")).toHaveScreenshot('TC_TD_111.png', {
    maxDiffPixels: 960
  });
});

/**
 * @id TC_TD_112
 * @description Check user able to click the Notification icon or not
 *
 * @steps
 * 1.Launch url
 * 2.Login to Account
 * 3.Click the notification icon
 *
 * @expected User should able to click the Notification icon
 */
test('TC_TD_112', async () => {
  await page.waitForSelector("//*[@alt='bell']", {
    state: 'attached',
    timeout: 60000
  });

  await page.getByRole('button', { name: 'bell' }).nth(1).click();

  await expect(page.locator("//*[@alt='bell']")).toHaveScreenshot('TC_TD_112.png', {
    maxDiffPixels: 960
  });
});

/**
 * @id TC_TD_113
 * @description After click on notification icon,Check the below text are present or not
 *1. Notification [bell Logo]
 *2. You dont have any notification yet [Text]
 *
 * @steps
 * 1.Launch url
 * 2.Login to Account
 * 3.Click the notification icon
 *
 * @expected After click on notificationicon below text should be visible
 */
test('TC_TD_113', async () => {
  await page.waitForSelector("//*[@alt='bell']", {
    state: 'attached',
    timeout: 60000
  });

  await page.getByRole('button', { name: 'bell' }).nth(1).click();
  await page.locator('.sc-fmWeOZ').isVisible();
  await page.getByText('You don’t have any').isVisible();
  await expect(page.locator("(//*[@placement='bottomLeft'])[1]")).toHaveScreenshot(
    'TC_TD_113.png',
    {
      maxDiffPixels: 960
    }
  );
});

/**
 * @id TC_TD_114
 * @description After click on notification icon check the user able to see the notifications in the prompt tab right side corner or not
 *
 * @steps
 * 1.Launch url
 * 2.Login to Account
 * 3.Click the notification icon
 *
 * @expected After click on notification icon ,the  user should be able to see the notifications in the prompt tab
 */
test('TC_TD_114', async () => {
  await page.waitForSelector("//*[@alt='bell']", {
    state: 'attached',
    timeout: 60000
  });
  await page.getByRole('button', { name: 'bell' }).nth(1).click();
  await page.locator('.sc-fmWeOZ').isVisible();
  await page.getByText('You don’t have any').isVisible();
  await expect(page.locator("(//*[@placement='bottomLeft'])[1]")).toHaveScreenshot(
    'TC_TD_114.png',
    {
      maxDiffPixels: 960
    }
  );
});
