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

test.afterEach(async () => {
  await deleteTeams(page);
});

test.afterAll(async () => {
  await page.close();
});

/**
   * @id TC_TD_058
   * @description "Check admin able to create custom role field by click plus button"
   * 
   * @steps
   * 1.Launch url
   * 2.Login to Account
   * 3.Create Team
   * 4.Click custom role
   
   * @expected "User should able create custom role field"
   *
   */
test('TC_TD_058', async () => {
  await expect(page.locator("((//*[text()='Teams'])//..//img)")).toBeVisible({
    timeout: 10000
  });
  await page.locator("((//*[text()='Teams'])//..//img)").click();
  await page.getByPlaceholder('Enter name of your team').fill('team6');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByPlaceholder('Email, separated by commas.').fill('test28@trackd.com');
  await page.getByRole('button', { name: 'Send Invites' }).click();
  await page.getByRole('link', { name: 'team Settings' }).click();
  await page.getByRole('button', { name: 'Custom Roles Custom Roles' }).click();
  await page.getByRole('button', { name: 'Create Custom Role' }).click();
  await expect(page.locator("//div[contains(text(),'Create Custom Role')]")).toBeVisible({
    timeout: 10000
  });
  await expect(
    page.locator("(//div[contains(text(),'Create Custom Role')]//..//..)[1]")
  ).toHaveScreenshot('tc_td_058_1.png', {
    maxDiffPixelRatio: 0.01,
    timeout: 10000
  });
  await page.getByPlaceholder('Enter role name').click();
  await page.getByPlaceholder('Enter role name').fill('team');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await expect(page.locator("//span[contains(text(),'Team')]")).toBeVisible({
    timeout: 10000
  });
  await expect(page.locator("((//*[text()='Custom Roles'])//..//..//../thead)")).toHaveScreenshot(
    'tc_td_058_2.png',
    {
      maxDiffPixelRatio: 0.01,
      timeout: 10000
    }
  );
  await page.getByRole('link', { name: 'logo' }).click();
});

/**
   * @id TC_TD_059
   * @description "Check after creating custom role, user able to change the custom role in team members tab"
   * 
   * @steps
   * 1.Launch url
   * 2.Login to Account
   * 3.Create Team
   * 
   
   * @expected "Admin should able to change permissions"
   *
   */
test('TC_TD_059', async () => {
  await expect(page.locator("((//*[text()='Teams'])//..//img)")).toBeVisible({
    timeout: 10000
  });
  await page.locator("((//*[text()='Teams'])//..//img)").click();
  await page.getByPlaceholder('Enter name of your team').fill('team7');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await page.getByPlaceholder('Email, separated by commas.').fill('test28@trackd.com');
  await page.getByRole('button', { name: 'Send Invites' }).click();
  await page.getByRole('link', { name: 'team Settings' }).click();
  await page.getByRole('button', { name: 'Custom Roles Custom Roles' }).click();
  await page.locator("//button[contains(text(),'Create Custom Role')]").click();
  await page.getByPlaceholder('Enter role name').click();
  await page.getByPlaceholder('Enter role name').fill('team');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await page.getByRole('button', { name: 'Team Members Team Members' }).click();
  await page.locator("(//img[@alt='chevron-down'])[2]").click();
  await page.locator("(//div[contains(text(),'Team')])[3]").click();
  await expect(page.locator("(//div[contains(text(),'Team')])[3]")).toBeVisible({
    timeout: 10000
  });
  await expect(page.locator("((//*[text()='test28@trackd.com'])//..//..)[1]")).toHaveScreenshot(
    'tc_td_059.png',
    {
      maxDiffPixelRatio: 0.01,
      timeout: 60000
    }
  );
  await page.locator("//img[@alt='logo']").click();
});

/**
   * @id TC_TD_060
   * @description "Verify if it added in team member role drop down "
   * 
   * @steps
   * 1.Launch url
   * 2.Login to Account
   * 3.Create Team
   * 
   
   * @expected ""Added custom role should be added in the team drop down""
   *
   */
test('TC_TD_060', async () => {
  await expect(page.locator("((//*[text()='Teams'])//..//img)")).toBeVisible({
    timeout: 10000
  });
  await page.locator("((//*[text()='Teams'])//..//img)").click();
  await page.getByPlaceholder('Enter name of your team').fill('team7');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByPlaceholder('Email, separated by commas.').fill('test28@trackd.com');
  await page.getByRole('button', { name: 'Send Invites' }).click();
  await page.getByRole('link', { name: 'team Settings' }).click();
  await page.getByRole('button', { name: 'Custom Roles Custom Roles' }).click();
  await page.getByRole('button', { name: 'Create Custom Role' }).click();
  await page.getByPlaceholder('Enter role name').click();
  await page.getByPlaceholder('Enter role name').fill('team');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await page.getByRole('button', { name: 'Team Members Team Members' }).click();
  await page.locator("(//img[@alt='chevron-down'])[2]").click();
  await page.locator("(//div[contains(text(),'Team')])[3]").click();
  await page.locator("(//img[@alt='chevron-down'])[2]").click();
  await expect(page.locator("((//*[text()='Editor'])[2]//..//..//..)[1]")).toHaveScreenshot(
    'tc_td_060.png',
    {
      maxDiffPixelRatio: 0.01,
      timeout: 60000
    }
  );
  await page.locator("//img[@alt='logo']").click();
});

/**
   * @id TC_TD_061
   * @description ""After click on Team members check admin able to change the permission to the below fields 
   *1.Cancel Invitation
   *2.Admin
   *3.Creator
   *4.Editor
   *5.Viewer
   *6.Change in to created  custome role "

   * @steps
   * 1.Launch url
   * 2.Login to Account
   * 3.Create Team
   * 4.Click Team members
   
   * @expected "After click on Team member , the below fields are present."
   *
   */
test('TC_TD_061', async () => {
  await expect(page.locator("((//*[text()='Teams'])//..//img)")).toBeVisible({
    timeout: 10000
  });
  await page.locator("((//*[text()='Teams'])//..//img)").click();
  await page.getByPlaceholder('Enter name of your team').fill('team');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await page.getByPlaceholder('Email, separated by commas.').click();
  await page.getByPlaceholder('Email, separated by commas.').fill('test28@trackd.com');
  await page.getByRole('button', { name: 'Send Invites' }).click();
  await page.getByRole('link', { name: 'team Settings' }).click();
  await expect(page.locator("(//div[contains(text(),'Viewer')])[2]")).toBeVisible({
    timeout: 10000
  });
  await expect(page.locator("((//*[text()='test28@trackd.com'])//..//..)[1]")).toHaveScreenshot(
    'tc_td_061_1.png',
    {
      maxDiffPixelRatio: 0.01,
      timeout: 10000
    }
  );
  await page.locator("(//img[@alt='chevron-down'])[2]").click();
  await page.locator("(//div[contains(text(),'Creator')])[2]").click();
  await expect(page.locator("(//div[contains(text(),'Creator')])[2]")).toBeVisible({
    timeout: 10000
  });
  await expect(page.locator("((//*[text()='test28@trackd.com'])//..//..)[1]")).toHaveScreenshot(
    'tc_td_061_2.png',
    {
      maxDiffPixelRatio: 0.01,
      timeout: 10000
    }
  );
  await page.locator("(//img[@alt='chevron-down'])[2]").click();
  await page.locator("(//div[contains(text(),'Editor')])[2]").click();
  await expect(page.locator("(//div[contains(text(),'Editor')])[2]")).toBeVisible({
    timeout: 10000
  });
  await expect(page.locator("((//*[text()='test28@trackd.com'])//..//..)[1]")).toHaveScreenshot(
    'tc_td_061_3.png',
    {
      maxDiffPixelRatio: 0.01,
      timeout: 10000
    }
  );
  await page.locator("(//img[@alt='chevron-down'])[2]").click();
  await page.locator("(//div[contains(text(),'Admin')])[3]").click();
  await expect(page.locator("(//div[contains(text(),'Admin')])[3]")).toBeVisible({
    timeout: 10000
  });
  await expect(page.locator("((//*[text()='test28@trackd.com'])//..//..)[1]")).toHaveScreenshot(
    'tc_td_061_4.png',
    {
      maxDiffPixelRatio: 0.01,
      timeout: 10000
    }
  );
  await page.locator("(//img[@alt='chevron-down'])[2]").click();
  await expect(page.locator("(//div[contains(text(),'Cancel Invitation')])")).toBeVisible({
    timeout: 10000
  });
  await page.locator("(//div[contains(text(),'Cancel Invitation')])").click();
  await expect(page.locator("((//*[text()='Remove'])//..//..//..//div)[1]")).toHaveScreenshot(
    'tc_td_061_5.png',
    {
      maxDiffPixelRatio: 0.01,
      timeout: 10000
    }
  );
  await page.getByRole('button', { name: 'close' }).click();
  await page.locator("//img[@alt='logo']").click();
});

/**
   * @id TC_TD_062
   * @description "After changing the role for added team members 'settings updated' toast pop-up is shown"
   * 
   * @steps
   * 1.Launch url
   * 2.Login to Account
   * 3.Create Team's project
   * 4.Click Settings
   
   * @expected "After changing the role for added team members 'settings updated' toast pop-up should be shown."
   *
   */
test('TC_TD_062', async () => {
  await expect(page.locator("((//*[text()='Teams'])//..//img)")).toBeVisible({
    timeout: 10000
  });
  await page.locator("((//*[text()='Teams'])//..//img)").click();
  await page.getByPlaceholder('Enter name of your team').fill('team1');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await page.getByPlaceholder('Email, separated by commas.').fill('test28@trackd.com');
  await page.getByRole('button', { name: 'Send Invites' }).click();
  await page.getByRole('link', { name: 'team Settings' }).click();
  await page.getByRole('button', { name: 'Custom Roles Custom Roles' }).click();
  await page.locator("//button[contains(text(),'Create Custom Role')]").click();
  await page.getByPlaceholder('Enter role name').fill('team');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await page.getByRole('button', { name: 'Team Members Team Members' }).click();
  await page.locator("((//*[text()='test28@trackd.com'])//..//img)[1]").click();
  await page.locator("(//div[contains(text(),'Creator')])[2]").click();
  await expect(page.locator("//div[contains(text(),'Setting updated')]")).toBeVisible({
    timeout: 10000
  });
  await expect(page.locator("//div[contains(text(),'Setting updated')]")).toHaveScreenshot(
    'tc_td_062.png',
    {
      maxDiffPixelRatio: 0.01,
      timeout: 80000
    }
  );
  await page.getByRole('link', { name: 'logo' }).click();
  await page.locator("//img[@alt='logo']").click();
});

/**
   * @id TC_TD_063
   * @description "After click on Project name Check the user able to see the create project button near to new folder button"
   * 
   * @steps
   * 1.Launch url
   * 2.Login to Account
   * 3.Create Team
   
   * @expected "user should able to see the create project button near to new folder button."
   *
   */
test('TC_TD_063', async () => {
  await expect(page.locator("((//*[text()='Teams'])//..//img)")).toBeVisible({
    timeout: 10000
  });
  await page.locator("((//*[text()='Teams'])//..//img)").click();
  await page.getByPlaceholder('Enter name of your team').fill('team2');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await page.getByRole('button', { name: 'close' }).click();
  await page.getByText('Projects').click();
  await expect(page.locator("//button[contains(text(),'New Project')]")).toBeVisible({
    timeout: 10000
  });
  await expect(page.locator("(//*[text()='New folder'])//..//..//div")).toHaveScreenshot(
    'tc_td_063.png',
    {
      maxDiffPixelRatio: 0.01,
      timeout: 10000
    }
  );
  await page.locator("//img[@alt='logo']").click();
});

/**
   * @id TC_TD_064
   * @description "Check user able to click the Create project button or not"
   * 
   * @steps
   * 1.Launch url
   * 2.Login to Account
   * 3.Create Team
   * 4.Click create project button
   
   * @expected "user able to click the Create project button."
   *
   */
test('TC_TD_064', async () => {
  await expect(page.locator("((//*[text()='Teams'])//..//img)")).toBeVisible({
    timeout: 10000
  });
  await page.locator("((//*[text()='Teams'])//..//img)").click();
  await page.getByPlaceholder('Enter name of your team').fill('team3');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await page.getByRole('button', { name: 'close' }).click();
  await page.getByText('Projects').click();
  await page.getByRole('button', { name: 'New Project' }).click();
  await expect(page.locator("//input[@placeholder='Enter the name of the project']")).toBeVisible({
    timeout: 10000
  });
  await expect(page.locator("((//*[text()='New project'])//..//..//../div)[1]")).toHaveScreenshot(
    'tc_td_064.png',
    {
      maxDiffPixelRatio: 0.01,
      timeout: 10000
    }
  );
  await page.getByRole('button', { name: 'close' }).click();
  await page.locator("//img[@alt='logo']").click();
});

/**
   * @id TC_TD_065
   * @description "After click on create project button check the user will navigate to the create new project or not"
   * 
   * @steps
   * 1.Launch url
   * 2.Login to Account
   * 3.Create Team
   * Click create project button
   
   * @expected "After click on create project button , the user will navigate to the create new project ."
   *
   */
test('TC_TD_065', async () => {
  await expect(page.locator("((//*[text()='Teams'])//..//img)")).toBeVisible({
    timeout: 10000
  });
  await page.locator("((//*[text()='Teams'])//..//img)").click();
  await page.getByPlaceholder('Enter name of your team').fill('team4');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await page.getByRole('button', { name: 'close' }).click();
  await page.getByText('Projects').click();
  await page.getByRole('button', { name: 'New Project' }).click();
  await expect(page.locator("//input[@placeholder='Enter the name of the project']")).toBeVisible({
    timeout: 10000
  });
  await expect(page.locator("((//*[text()='New project'])//..//..//../div)[1]")).toHaveScreenshot(
    'tc_td_065.png',
    {
      maxDiffPixelRatio: 0.01,
      timeout: 10000
    }
  );
  await page.getByRole('button', { name: 'close' }).click();
  await page.locator("//img[@alt='logo']").click();
});

/**
   * @id TC_TD_066
   * @description "After click on create project button  ,Check whether ""Create new project"" page with all required fields
   *1.Name of the project
   *2.Enter the name of the project field
   *3.Set units as mm,cm,m,in,ft-in
   *4.Create project button
   *5.Close icon
   *6. Unit is set to milimeter (this can be changed later) - text shows.""
   * 
   * @steps
   * 1.Launch url
   * 2.Login to Account
   * 3.Create Team
   * Click create project button
   
   * @expected "After click on create project button  , "Create new project" page with all required fields should present."
   *
   */
test('TC_TD_066', async () => {
  await expect(page.locator("((//*[text()='Teams'])//..//img)")).toBeVisible({
    timeout: 10000
  });
  await page.locator("((//*[text()='Teams'])//..//img)").click();
  await page.getByPlaceholder('Enter name of your team').fill('team4');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await page.getByRole('button', { name: 'close' }).click();
  await page.getByText('Projects').click();
  await page.getByRole('button', { name: 'New Project' }).click();
  await expect(page.locator("//input[@placeholder='Enter the name of the project']")).toBeVisible({
    timeout: 10000
  });
  await expect(page.locator("//*[text()='Units']")).toBeVisible({
    timeout: 10000
  });
  await expect(page.locator("//button[contains(text(),'Create')]")).toBeVisible({
    timeout: 10000
  });
  await expect(page.locator("((//*[text()='New project'])//..//..//../div)[1]")).toHaveScreenshot(
    'tc_td_066.png',
    {
      maxDiffPixelRatio: 0.01,
      timeout: 15000
    }
  );
  await page.getByRole('button', { name: 'close' }).click();
  await page.locator("//img[@alt='logo']").click();
});

/**
   * @id TC_TD_067
   * 
   * @description "Check after click the unit as mm, check Unit is set to Millimeter
   *Check after click the unit as cm, check Unit is set to Centimeter
   *Check after click the unit as m, check Unit is set to Meter
   *Check after click the unit as in, check Unit is set to inch
   *Check after click the unit as ft-in, check Unit is set to Feet-inch"
   * 
   * @steps
   * 1.Launch url
   * 2.Login to Account
   * 3.Create Team
   * 4.Click create project button
   * 5.Set the unit as mm
   
   * @expected ""after click the unit as mm, check Unit is set to Millimeter
   *after click the unit as cm, check Unit is set to Centimeter
   *after click the unit as m, check Unit is set to Meter
   *after click the unit as in, check Unit is set to inch
   *after click the unit as ft-in, check Unit is set to Feet-inch"
   *
   */
test('TC_TD_067', async () => {
  await expect(page.locator("((//*[text()='Teams'])//..//img)")).toBeVisible({
    timeout: 10000
  });
  await page.locator("((//*[text()='Teams'])//..//img)").click();
  await page.getByPlaceholder('Enter name of your team').fill('team5');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await page.getByRole('button', { name: 'close' }).click();
  await page.getByText('Projects').click();
  await page.getByRole('button', { name: 'New Project' }).click();
  await expect(page.locator("//div[contains(text(),'mm')]")).toBeVisible({
    timeout: 10000
  });
  await page.getByText('mm').click();
  await expect(page.locator("((//*[text()='New project'])//..//..//div)[7]")).toHaveScreenshot(
    'tc_td_067_1.png',
    {
      maxDiffPixelRatio: 0.01,
      timeout: 10000
    }
  );
  await page.getByText('cm').click();
  await expect(page.locator("//div[contains(text(),'cm')]")).toBeVisible({
    timeout: 10000
  });
  await expect(page.locator("((//*[text()='New project'])//..//..//div)[7]")).toHaveScreenshot(
    'tc_td_067_2.png',
    {
      maxDiffPixelRatio: 0.01,
      timeout: 10000
    }
  );
  await expect(page.locator("(//div[contains(text(),'m')])[14]")).toBeVisible({
    timeout: 10000
  });
  await page.getByText('m', { exact: true }).click();
  await expect(page.locator("((//*[text()='New project'])//..//..//div)[7]")).toHaveScreenshot(
    'tc_td_067_3.png',
    {
      maxDiffPixelRatio: 0.01,
      timeout: 10000
    }
  );
  await expect(page.locator("(//div[contains(text(),'in')])[4]")).toBeVisible({
    timeout: 10000
  });
  await page.getByText('in', { exact: true }).click();
  await expect(page.locator("((//*[text()='New project'])//..//..//div)[7]")).toHaveScreenshot(
    'tc_td_067_4.png',
    {
      maxDiffPixelRatio: 0.01,
      timeout: 10000
    }
  );
  await expect(page.locator("//div[contains(text(),'ft-in')]")).toBeVisible({
    timeout: 10000
  });
  await page.getByText('ft-in').click();
  await expect(page.locator("((//*[text()='New project'])//..//..//div)[7]")).toHaveScreenshot(
    'tc_td_067_5.png',
    {
      maxDiffPixelRatio: 0.01,
      timeout: 10000
    }
  );
  await page.getByRole('button', { name: 'close' }).click();
  await page.locator("//img[@alt='logo']").click();
});

/**
   * @id TC_TD_068
   * @description "Check the user able to enter the project name in the create new project page"
   * 
   * @steps
   * 1.Launch url
   * 2.Login to Account
   * 3.Create Team
   * Click create project button
   
   * @expected "the user should able to enter the project name in the create new project page"
   *
   */
test('TC_TD_068', async () => {
  await expect(page.locator("((//*[text()='Teams'])//..//img)")).toBeVisible({
    timeout: 10000
  });
  await page.locator("((//*[text()='Teams'])//..//img)").click();
  await page.getByPlaceholder('Enter name of your team').fill('team6');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await page.getByRole('button', { name: 'close' }).click();
  await page.getByText('Projects').click();
  await page.getByRole('button', { name: 'New Project' }).click();
  await page.getByPlaceholder('Enter the name of the project').fill('teams');
  await expect(page.locator("//input[@placeholder='Enter the name of the project']")).toBeVisible({
    timeout: 10000
  });
  await expect(page.locator("((//*[text()='New project'])//..//..//div)[5]")).toHaveScreenshot(
    'tc_td_068.png',
    {
      maxDiffPixelRatio: 0.01,
      timeout: 10000
    }
  );
  await page.getByRole('button', { name: 'close' }).click();
  await page.locator("//img[@alt='logo']").click();
});

/**
   * @id TC_TD_069
   * @description "Check user able to select the unit as mm,cm,m,in,ft-in"
   * 
   * @steps
   * 1.Launch url
   * 2.Login to Account
   * 3.Create Team
   * Click create project button
   
   * @expected "user should able to select the unit as mm,cm,m,in,ft-in"
   *
   */
test('TC_TD_069', async () => {
  await expect(page.locator("((//*[text()='Teams'])//..//img)")).toBeVisible({
    timeout: 10000
  });
  await page.locator("((//*[text()='Teams'])//..//img)").click();
  await page.getByPlaceholder('Enter name of your team').fill('team7');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await page.getByRole('button', { name: 'close' }).click();
  await page.getByText('Projects').click();
  await page.getByRole('button', { name: 'New Project' }).click();
  await page.getByText('mm').click();
  await expect(page.locator("((//*[text()='New project'])//..//..//div)[8]")).toHaveScreenshot(
    'tc_td_069_1.png',
    {
      maxDiffPixelRatio: 0.01,
      timeout: 10000
    }
  );
  await page.getByText('cm').click();
  await expect(page.locator("((//*[text()='New project'])//..//..//div)[8]")).toHaveScreenshot(
    'tc_td_069_2.png',
    {
      maxDiffPixelRatio: 0.01,
      timeout: 10000
    }
  );
  await page.getByText('m', { exact: true }).click();
  await expect(page.locator("((//*[text()='New project'])//..//..//div)[8]")).toHaveScreenshot(
    'tc_td_069_3.png',
    {
      maxDiffPixelRatio: 0.01,
      timeout: 10000
    }
  );
  await page.getByText('in', { exact: true }).click();
  await expect(page.locator("((//*[text()='New project'])//..//..//div)[8]")).toHaveScreenshot(
    'tc_td_069_4.png',
    {
      maxDiffPixelRatio: 0.01,
      timeout: 10000
    }
  );
  await page.getByText('ft-in').click();
  await expect(page.locator("((//*[text()='New project'])//..//..//div)[8]")).toHaveScreenshot(
    'tc_td_069_5.png',
    {
      maxDiffPixelRatio: 0.01,
      timeout: 10000
    }
  );
  await page.getByRole('button', { name: 'close' }).click();
  await page.locator("//img[@alt='logo']").click();
});

/**
   * @id TC_TD_070
   * @description "After click on create project button check the user able to create the new project "
   * 
   * @steps
   * 1.Launch url
   * 2.Login to Account
   * 3.Create Team
   * Click create project button
   
   * @expected "After click on create project button  the user able to create the new project "
   *
   */
test('TC_TD_070', async () => {
  await expect(page.locator("((//*[text()='Teams'])//..//img)")).toBeVisible({
    timeout: 10000
  });
  await page.locator("((//*[text()='Teams'])//..//img)").click();
  await page.getByPlaceholder('Enter name of your team').fill('team8');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await page.getByRole('button', { name: 'close' }).click();
  await page.getByText('Projects').click();
  await page.getByRole('button', { name: 'New Project' }).click();
  await page.getByPlaceholder('Enter the name of the project').fill('teams');
  await page.getByText('cm').click();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.waitForSelector('.project-is-ready', {
    state: 'attached',
    timeout: 60000
  });
  await expect(page.locator("//*[@alt='draw']")).toBeVisible({
    timeout: 10000
  });
  await expect(page).toHaveCanvasSnapshot('tc_td_070.png', {
    maxDiffPixels: 960
  });
  await page.locator("//img[@alt='snaptrude']").click();
  await page.locator("//img[@alt='logo']").click();
});
