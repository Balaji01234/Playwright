import 'dotenv/config';
import { test as setup } from '@playwright/test';
import { createSnaptrudeFolder, getSnaptrudeFolderContent } from '../../common/api';

const shouldSkip = process.env.SKIP_SETUP === 'true';

(shouldSkip ? setup.skip : setup)('Setup snaptrude folders', async ({ page }, testInfo) => {
  const snaptrudeFolders = await getSnaptrudeFolderContent(page, 'root', 'folders');
  const testProjects = testInfo.config.projects;

  for (let i = 0; i < testProjects.length; i++) {
    const project = testProjects[i];
    if (project.testDir.endsWith('setup')) continue;
    if (!snaptrudeFolders[project.name]) {
      snaptrudeFolders[project.name] = await createSnaptrudeFolder(page, project.name);
    }
    snaptrudeFolders[project.name]['projects'] = await getSnaptrudeFolderContent(
      page,
      snaptrudeFolders[project.name]['id'],
      'projects'
    );
  }

  // go to any snaptrude page. /plans is lightweight.
  await page.goto('/dashboard/profile/plans');
  await page.evaluate((folders) => {
    window.localStorage.setItem('snaptrudeFolders', JSON.stringify(folders));
  }, snaptrudeFolders);
  await page.context().storageState({ path: process.env.AUTH_FILE });
  await page.close();
});
