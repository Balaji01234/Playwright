// @ts-check
import "dotenv/config";
import { defineConfig, devices, FullConfig } from "@playwright/test";
import { testPlanFilter } from "allure-playwright/dist/testplan";

// @ts-ignore
const storageState = process.env.AUTH_FILE;

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: "src/tests",
  globalSetup: "./global-setup",
  /* Custom snapshot dir */
  snapshotPathTemplate: 'testData/{testFileDir}/snapshots/{arg}{ext}',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  grep: testPlanFilter(),
  reporter: [["line"], ["allure-playwright"]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    launchOptions: {
      args: [
        '--ignore-gpu-blocklist',
        '--use-gl=angle',
        '--use-angle=gl-egl',
      ],
    },
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.TEST_URL ?? process.env.AUTOMATION_URL,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    video: 'on-first-retry',
    actionTimeout: 30000,
  },
  timeout: 150000,

  /* Configure projects for major browsers */
  projects: [
    {
      name: "setup auth",
      use: { ...devices["Desktop Chrome"] },
      testMatch: "auth.setup.ts",
      testDir: "src/tests/setup",
    },
    {
      name: "setup snaptrude folders",
      use: {
        ...devices["Desktop Chrome"],
        storageState,
      },
      testMatch: "folder.setup.ts",
      testDir: "src/tests/setup",
    },
    {
      name: "draw",
      use: {
        ...devices["Desktop Chrome"],
        storageState,
      },
      testMatch: 'draw/*.spec.ts',
    },
    {
      name: 'edit',
      use: {
        ...devices["Desktop Chrome"],
        storageState,
      },
      testMatch: 'edit/*.spec.ts',
    },
    {
      name: 'indicator',
      use: {
        ...devices["Desktop Chrome"],
        storageState,
      },
      testMatch: 'indicators/*.spec.ts',
    },
    {
      name: 'userflow',
      use: {
        ...devices["Desktop Chrome"],
        storageState,
      },
      testMatch: 'userflows/**/*.spec.ts',
    },
    {
      name: 'split',
      use: {
        ...devices["Desktop Chrome"],
        storageState,
      },
      testMatch: 'split/*.spec.ts',
    },
    {
      name: 'autocomplete',
      use: {
        ...devices["Desktop Chrome"],
        storageState,
      },
      testMatch: 'autocomplete/*.spec.ts',
    },
    {
      name: 'dashboard',
      use: {
        ...devices["Desktop Chrome"],
        storageState,
      },
      testMatch: 'dashboard/*.spec.ts',
    },
    {
      name: 'areaProgram',
      use: {
        ...devices["Desktop Chrome"],
        storageState,
      },
      testMatch: 'areaProgram/*.spec.ts',
    },
    {
      name: 'importFlow',
      use: {
        ...devices["Desktop Chrome"],
        storageState,
      },
      testMatch: 'importFlow/*.spec.ts',
    },
    {
      name: 'groups',
      use: {
        ...devices["Desktop Chrome"],
        storageState,
      },
      testMatch: 'groups/*.spec.ts',
    },
    {
      name: 'erase',
      use: {
        ...devices["Desktop Chrome"],
        storageState,
      },
      testMatch: 'erase/*.spec.ts',
    },
    {
      name: 'objectToLibrary',
      use: {
        ...devices["Desktop Chrome"],
        storageState,
      },
      testMatch: 'objectToLibrary/*.spec.ts',
    },
    {
      name: 'offSetMode',
      use: {
        ...devices["Desktop Chrome"],
        storageState,
      },
      testMatch: 'offSetMode/*.spec.ts',
    },
    {
      name: 'dashboardRedesignTeams',
      use: {
        ...devices["Desktop Chrome"],
        storageState,
      },
      testMatch: 'dashboardRedesignTeams/*.spec.ts',
    },
    {
      name: 'createBuilding',
      use: {
        ...devices["Desktop Chrome"],
        storageState,
      },
      testMatch: 'createBuilding/*.spec.ts',
    },
    {
      name: 'addVertex',
      use: {
        ...devices["Desktop Chrome"],
        storageState,
      },
      testMatch: 'addVertex/*.spec.ts',
    },
    {
      name: 'flip',
      use: {
        ...devices["Desktop Chrome"],
        storageState,
      },
      testMatch: 'flip/*.spec.ts',
    },
  ],
});
