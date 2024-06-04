import { expect, test } from '../../common/fixtures';
import { Page } from '@playwright/test';
import { deleteTeams } from './teamsCommon';

let page: Page;

test.beforeAll(async ({ browser }, testInfo) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('dashboard/');
  await page.waitForSelector('.dashboard-is-ready', { state: 'attached', timeout: 60000 });
  await deleteTeams(page);
});

test.afterAll(async () => {
  await deleteTeams(page);
  await page.close();
});

/**
   * @id TC_TD_048
   * @description "Check after click on Team Members, it will navigate to the team members page"

   * @steps
   * 1.Launch url
   * 2.Login to Account
   * 3.Create Team
   * 4.Click Team members
   
   * @expected "After click on  team memebers, it will navigate to the team members setting page."
   */
test('TC_TD_048', async () => {
  await expect(page.locator("((//*[text()='Teams'])//..//img)")).toBeVisible({
    timeout: 10000
  });
  await page.locator("((//*[text()='Teams'])//..//img)").click();
  await page.getByPlaceholder('Enter name of your team').fill('team 1');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByPlaceholder('Email, separated by commas.').click();
  await page.getByPlaceholder('Email, separated by commas.').fill('test28@trackd.com');
  await page.getByRole('button', { name: 'Send Invites' }).click();
  await page.getByRole('link', { name: 'team Settings' }).click();
  await page.getByRole('button', { name: 'Team Members Team Members' }).click();
  await expect(page.locator("//button[contains(text(),'Team Members')]")).toBeVisible({
    timeout: 10000
  });
  await expect(
    page.locator("(//input[@placeholder='Search projects or folders']//..//..//..//..//..)[1]")
  ).toHaveScreenshot('tc_td_048.png', {
    maxDiffPixelRatio: 0.01,
    timeout: 15000
  });
  await page.locator("//img[@alt='logo']").click();
});

/**
   * @id TC_TD_049
   * @description ""Check the Below fiels are present in  team members page
   *1.Add Team member[Button]
   *2.Search project or Folders
   *3.Custom Roles"

   * @steps
   * 1.Launch url
   * 2.Login to Account
   * 3.Create Team
   * 4.Click Team members
   
   * @expected "After click on  team members, All the fields should present"
   */
test('TC_TD_049', async () => {
  await expect(page.locator("((//*[text()='Teams'])//..//img)")).toBeVisible({
    timeout: 10000
  });
  await page.locator("((//*[text()='Teams'])//..//img)").click();
  await page.getByPlaceholder('Enter name of your team').fill('team1');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByPlaceholder('Email, separated by commas.').click();
  await page.getByPlaceholder('Email, separated by commas.').fill('test28@trackd.com');
  await page.getByRole('button', { name: 'Send Invites' }).click();
  await page.getByRole('link', { name: 'team Settings' }).click();
  await expect(page.locator("//input[@placeholder='Search projects or folders']")).toBeVisible({
    timeout: 10000
  });
  await expect(page.locator("//input[@placeholder='Search projects or folders']")).toHaveScreenshot(
    'tc_td_049_1.png',
    {
      maxDiffPixelRatio: 0.01,
      timeout: 15000
    }
  );
  await expect(page.locator("//img[@alt='Custom Roles']")).toBeVisible({
    timeout: 10000
  });
  await expect(
    page.locator("(//input[@placeholder='Search projects or folders']//..//..//..//..//..)[1]")
  ).toHaveScreenshot('tc_td_049_2.png', {
    maxDiffPixelRatio: 0.01,
    timeout: 15000
  });
  await expect(page.locator("//button[contains(text(),'Add Team Member')]")).toBeVisible({
    timeout: 10000
  });
  await page.locator("//img[@alt='logo']").click();
});

/**
   * @id TC_TD_050
   * @description "Check user able to invite team members by clicking 'Add team members plus button'"
   * 
   * @steps
   * 1.Launch url
   * 2.Login to Account
   * 3.Create Team
   * 4.Click Team members
   
   * @expected "User should able to add team members"
   *
   */
test('TC_TD_050', async () => {
  await expect(page.locator("((//*[text()='Teams'])//..//img)")).toBeVisible({
    timeout: 10000
  });
  await page.locator("((//*[text()='Teams'])//..//img)").click();
  await page.getByPlaceholder('Enter name of your team').fill('team2');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByPlaceholder('Email, separated by commas.').fill('test28@trackd.com');
  await page.getByRole('button', { name: 'Send Invites' }).click();
  await page.getByRole('link', { name: 'team Settings' }).click();
  await expect(
    page.locator("(//input[@placeholder='Search projects or folders']//..//..//..//..//..)[1]")
  ).toHaveScreenshot('tc_td_050_1.png', {
    maxDiffPixelRatio: 0.01,
    timeout: 10000
  });
  await page.getByRole('button', { name: 'Add Team Member' }).click();
  await page.getByPlaceholder('Email, separated by commas.').fill('test22@trackd.com');
  await page.getByRole('button', { name: 'Send Invites' }).click();
  await expect(page.locator("//div[contains(text(),'test28@trackd.com')]")).toBeVisible({
    timeout: 10000
  });
  await expect(
    page.locator("(//*[text()='Invite Team Members']//..//..//..//..)[1]")
  ).not.toBeVisible({
    timeout: 10000
  });
  await expect(
    page.locator("(//input[@placeholder='Search projects or folders']//..//..//..//..//..)[1]")
  ).toHaveScreenshot('tc_td_050_2.png', {
    maxDiffPixelRatio: 0.01,
    timeout: 10000
  });
  await page.locator("//img[@alt='logo']").click();
});

/**
 * @id TC_TD_051
 * @description After click on invite team members check whether it is navigated to'invite team members tab'
 *
 * @steps
 * 1.Launch url
 * 2.Login to Account
 * 3.Create Team
 * 4.Click Team members
 *
 * @expected After click on team members tab it should navigate team members page
 */
test('TC_TD_051', async () => {
  await expect(page.locator("((//*[text()='Teams'])//..//img)")).toBeVisible({
    timeout: 10000
  });
  await page.locator("((//*[text()='Teams'])//..//img)").click();
  await page.getByPlaceholder('Enter name of your team').fill('team33');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByPlaceholder('Email, separated by commas.').fill('test28@trackd.com');
  await page.getByRole('button', { name: 'Send Invites' }).click();
  await page.getByRole('link', { name: 'team Settings' }).click();
  await expect(page.getByRole('button', { name: 'Add Team Member' })).toBeVisible({
    timeout: 10000
  });
  await page.getByRole('button', { name: 'Add Team Member' }).click();
  await expect(page.locator("(//*[text()='Invite Team Members']//..//..//..//..)[1]")).toBeVisible({
    timeout: 10000
  });
  await expect(
    page.locator("(//*[text()='Invite Team Members']//..//..//..//..)[1]")
  ).toHaveScreenshot('tc_td_051.png', {
    maxDiffPixelRatio: 0.01,
    timeout: 10000
  });
  await page.getByRole('button', { name: 'close' }).click();
  await page.locator("//img[@alt='logo']").click();
});

/**
 * @id TC_TD_052
 * @description Verify whether the user can enter multiple emails separated by commas.
 *
 * @steps
 * 1.Launch url
 * 2.Login to Account
 * 3.Create Team
 * 4.Click Team members
 *
 * @expected User should able to enter email
 */
test('TC_TD_052', async () => {
  await expect(page.locator("((//*[text()='Teams'])//..//img)")).toBeVisible({
    timeout: 10000
  });
  await page.locator("((//*[text()='Teams'])//..//img)").click();
  await page.getByPlaceholder('Enter name of your team').fill('team2');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByPlaceholder('Email, separated by commas.').fill('test7@trackd.com');
  await page.getByRole('button', { name: 'Send Invites' }).click();
  await page.getByRole('link', { name: 'team Settings' }).click();
  await page.getByRole('button', { name: 'Add Team Member' }).click();
  await expect(page.locator("(//*[text()='Invite Team Members']//..//..//..//..)[1]")).toBeVisible({
    timeout: 10000
  });
  await page
    .getByPlaceholder('Email, separated by commas.')
    .fill('test30@trackd.com,test26@trackd.com,test27@trackd.com');
  await expect(page.locator("//*[@placeholder='Email, separated by commas.']")).toBeVisible({
    timeout: 10000
  });
  await expect(
    page.locator("(//*[text()='Invite Team Members']//..//..//..//..)[1]")
  ).toHaveScreenshot('tc_td_052.png', {
    maxDiffPixelRatio: 0.01,
    timeout: 10000
  });
  await page.getByRole('button', { name: 'close' }).click();
  await page.locator("//img[@alt='logo']").click();
});

/**
   * @id TC_TD_053
   * @description "Check invite teammembers are shown below the team members page'"
   * 
   * @steps
   * 1.Launch url
   * 2.Login to Account
   * 3.Create Team
   * 4.Click Team members
   
   * @expected "User should able to see the invited team members below the team member page"
   *
   */
test('TC_TD_053', async () => {
  await expect(page.locator("((//*[text()='Teams'])//..//img)")).toBeVisible({
    timeout: 10000
  });
  await page.locator("((//*[text()='Teams'])//..//img)").click();
  await page.getByPlaceholder('Enter name of your team').fill('team25');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByPlaceholder('Email, separated by commas.').fill('test28@trackd.com');
  await page.getByRole('button', { name: 'Send Invites' }).click();
  await page.getByRole('link', { name: 'team Settings' }).click();
  await page.getByRole('button', { name: 'Add Team Member' }).click();
  await expect(page.locator("(//*[text()='Invite Team Members']//..//..//..//..)[1]")).toBeVisible({
    timeout: 10000
  });
  await page
    .getByPlaceholder('Email, separated by commas.')
    .fill('test30@trackd.com,test26@trackd.com,test27@trackd.com');
  await page.getByRole('button', { name: 'Send Invites' }).click();
  await expect(
    page.locator("(//*[text()='Invite Team Members']//..//..//..//..)[1]")
  ).not.toBeVisible({
    timeout: 10000
  });
  await expect(
    page.locator("(//input[@placeholder='Search projects or folders']//..//..//..//..//..)[1]")
  ).toHaveScreenshot('tc_td_053.png', {
    maxDiffPixelRatio: 0.01,
    timeout: 10000
  });
  await page.locator("//img[@alt='logo']").click();
});

/**
   * @id TC_TD_054
   * @description "Check before joining a team pending invitation showing or not'"
   * 
   * @steps
   * 1.Launch url
   * 2.Login to Account
   * 3.Create Team
   * 4.Click Team members
   
   * @expected "Before joining a team pending invitation should be shown "
   *
   */

test('TC_TD_054', async () => {
  await expect(page.locator("((//*[text()='Teams'])//..//img)")).toBeVisible({
    timeout: 10000
  });
  await page.locator("((//*[text()='Teams'])//..//img)").click();
  await page.getByPlaceholder('Enter name of your team').fill('team4');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByPlaceholder('Email, separated by commas.').fill('test27@trackd.com');
  await page.getByRole('button', { name: 'Send Invites' }).click();
  await page.getByRole('link', { name: 'team Settings' }).click();
  await expect(page.locator("//div[contains(text(),'Pending Invitation')]")).toBeVisible({
    timeout: 10000
  });
  await expect(
    page.locator("(//input[@placeholder='Search projects or folders']//..//..//..//..//..)[1]")
  ).toHaveScreenshot('tc_td_054.png', {
    maxDiffPixelRatio: 0.01,
    timeout: 10000
  });
  await page.locator("//img[@alt='logo']").click();
});

/**
 * @id TC_TD_055
 * @description Check admin able to change the role for the invited team members
 *
 * @steps
 * 1.Launch url
 * 2.Login to Account
 * 3.Create Team
 * 4.Click Team members
 *
 * @expected Admin should abl to change the permissions for a invited teammembers
 */
test('TC_TD_055', async () => {
  await expect(page.locator("((//*[text()='Teams'])//..//img)")).toBeVisible({
    timeout: 10000
  });
  await page.locator("((//*[text()='Teams'])//..//img)").click();
  await page.getByPlaceholder('Enter name of your team').fill('team4');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByPlaceholder('Email, separated by commas.').fill('test28@trackd.com');
  await page.getByRole('button', { name: 'Send Invites' }).click();
  await page.getByRole('link', { name: 'team Settings' }).click();
  await page.getByRole('button', { name: 'Viewer chevron-down' }).click();
  await page.getByText('Creator').nth(1).click();
  await expect(page.locator("(//*[contains(text(),'Creator')])[2]")).toBeVisible({
    timeout: 10000
  });
  await expect(
    page.locator("(//input[@placeholder='Search projects or folders']//..//..//..//..//..)[1]")
  ).toHaveScreenshot('tc_td_055.png', {
    maxDiffPixelRatio: 0.01,
    timeout: 10000
  });
  await page.locator("//img[@alt='logo']").click();
});

/**
   * @id TC_TD_056
   * @description ""After click cancel invitation After click on delete team, check the below fields are present
   *1.Are you sure u want remove from team?
   *2. They may not be able to acces team's flies and folders anymore
   *3. Remove button"
   * 
   * @steps
   * 1.Launch url
   * 2.Login to Account
   * 3.Create Team
   * 4.Click Team members
   
   * @expected "After click on  cancel invitation, All the fields should present "
   *
   */
test('TC_TD_056', async () => {
  await expect(page.locator("((//*[text()='Teams'])//..//img)")).toBeVisible({
    timeout: 10000
  });
  await page.locator("((//*[text()='Teams'])//..//img)").click();
  await page.getByPlaceholder('Enter name of your team').fill('team5');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByPlaceholder('Email, separated by commas.').fill('test27@trackd.com');
  await page.getByRole('button', { name: 'Send Invites' }).click();
  await page.getByRole('link', { name: 'team Settings' }).click();
  await page.locator("(//img[@alt='chevron-down'])[2]").click();
  await page.getByText('Cancel Invitation').click();
  await expect(page.locator("//div[contains(text(),'Remove ‘test27@trackd.com’')]")).toBeVisible({
    timeout: 10000
  });
  await expect(page.locator("((//*[text()='Remove'])//..//..//..//div)[1]")).toHaveScreenshot(
    'tc_td_056.png',
    {
      maxDiffPixelRatio: 0.01,
      timeout: 15000
    }
  );
  await page.getByRole('button', { name: 'close' }).click();
  await page.locator("//img[@alt='logo']").click();
});

/**
   * @id TC_TD_057
   * @description "After clicking on remove button check whether the team is removed from team members tab"
   * 
   * @steps
   * 1.Launch url
   * 2.Login to Account
   * 3.Create Team
   * 4.Click Remove button
   
   * @expected "After clicking remove team member it should be removed from the team members tab "
   *
   */
test('TC_TD_057', async () => {
  await expect(page.locator("((//*[text()='Teams'])//..//img)")).toBeVisible({
    timeout: 10000
  });
  await page.locator("((//*[text()='Teams'])//..//img)").click();
  await page.getByPlaceholder('Enter name of your team').fill('team6');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByPlaceholder('Email, separated by commas.').fill('test28@trackd.com');
  await page.getByRole('button', { name: 'Send Invites' }).click();
  await page.getByRole('link', { name: 'team Settings' }).click();
  await expect(
    page.locator("(//input[@placeholder='Search projects or folders']//..//..//..//..//..)[1]")
  ).toHaveScreenshot('tc_td_057_1.png', {
    maxDiffPixelRatio: 0.01,
    timeout: 10000
  });
  await page.locator("(//img[@alt='chevron-down'])[2]").click();
  await page.getByText('Cancel Invitation').click();
  await page.getByRole('button', { name: 'Remove' }).click();
  await expect(
    page.locator("//div[contains(text(),'‘test28@trackd.com’ has been removed from the team.')]")
  ).toBeVisible({ timeout: 10000 });
  await expect(
    page.locator("(//input[@placeholder='Search projects or folders']//..//..//..//..//..)[1]")
  ).toHaveScreenshot('tc_td_057_2.png', {
    maxDiffPixelRatio: 0.01,
    timeout: 10000
  });
  await page.locator("//img[@alt='logo']").click();
});
