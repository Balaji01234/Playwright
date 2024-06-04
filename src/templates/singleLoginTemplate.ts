// NOTE: This template is for using a single login and logout across multiple test cases. do not add a {page} prop to the callback func on tests, this will open a new instance of browser. Refer to Userflow-9 for example. and refer to Userflow-11 to persist a drawing across tests.

import { test, expect } from "@playwright/test";
import Login from "../utils/verification/Login";
import checkDraw from "../utils/verification/checkDraw";
import selectAndDelete from "../utils/environment/selectAndDelete";
import Logout from "../utils/verification/Logout";

test.describe("Suite-template", () => {
  let context;
  let page;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await browser.newPage();
    await Login({ page });
  });

  test.beforeEach(async () => {
    await checkDraw(page);
    await page.evaluate(() => {
      // @ts-ignore
      return store.exposed.autoSaveConfig.disableToasts();
    });
  });

  test.afterEach(async () => {
    await selectAndDelete(page);
  });

  test.afterAll(async () => {
    await Logout({ page });
  });

  test("test-template", async () => {
    // add test here
  });
});
