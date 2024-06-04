export async function deleteTeams(page) {
  const teams = await page.locator("//*[@id='drop_team_root']");
  const teamscount = await teams.count();
  if (teamscount != 0) {
    for (let i = 1; i <= teamscount; i++) {
      await page.locator("//*[contains(text(),'workspace')]").first().click();
      await page.locator("//*[@id='drop_team_root']").first().click();
      await page.locator("((//*[text()='New Project'])//..//..//..//button)[1]").click();
      await page.getByText('Delete Team').click();
      await page.getByPlaceholder('Type ‘delete’ here').click();
      await page.getByPlaceholder('Type ‘delete’ here').fill('delete');
      await page.getByRole('button', { name: 'Delete' }).click();
      await page.locator("//img[@alt='logo']").click();
    }
  }
}
