import { test as cleanup } from '../../common/fixtures';
import { Page } from '@playwright/test';

let page: Page;

cleanup.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
});

cleanup.beforeEach(async () => {
  cleanup.setTimeout(60000000);
  await page.goto('/dashboard');
});

cleanup.afterAll(async () => {
  await page.close();
});

cleanup.skip('Delete Folders', async () => {
  let elementExists = true;

  while (elementExists) {
    try {
      await page.hover('#dragDrop_folder_0');
      await page
        .locator('#dragDrop_folder_0')
        .getByRole('button', { name: 'more options' })
        .click();
      await page.locator('#dragDrop_folder_0').getByText('Delete').click();
      await page.getByRole('button', { name: 'Delete' }).click();
    } catch (error) {
      elementExists = false;
      console.log('No more folders found.');
    }
  }
});

cleanup.skip('Delete Projects', async () => {
  const firstProjectCard = page.locator(`[id^="project-card-"]`).nth(0);

  let elementExists = true;

  while (elementExists) {
    try {
      await firstProjectCard.hover();
      await firstProjectCard.getByRole('button', { name: 'folder', exact: true }).click();
      await firstProjectCard.getByText('Delete').click();
      await page.getByRole('button', { name: 'Delete' }).click();
    } catch (error) {
      elementExists = false;
      console.log('No more projects found.');
    }
  }
});

cleanup.skip('Delete templates', async () => {
  let elementExists = true;
  const firstTemplateCard = page.locator(`[id^="project-card-"]`).nth(0);
  await page.locator('#templates').click();
  while (elementExists) {
    try {
      await firstTemplateCard.hover();
      await firstTemplateCard.getByRole('button', { name: 'folder', exact: true }).click();
      await firstTemplateCard.getByText('Delete').click();
      await page.getByRole('button', { name: 'Delete' }).click();
    } catch (error) {
      elementExists = false;
      console.log('No more projects found.');
    }
  }
});

cleanup.skip('Delete Teams', async () => {
  let teamExists = true;
  const firstTeam = page.locator(`[id^="team-"]`).nth(0);

  while (teamExists) {
    try {
      await firstTeam.click();
      await page.locator('#team-action-menu').click();
      await page.getByText('Delete Team').click();
      await page.getByPlaceholder('Type ‘delete’ here').fill('delete');
      await page.getByRole('button', { name: 'Delete' }).click();
    } catch (error) {
      teamExists = false;
      console.log('No more teams found.');
    }
  }
});
