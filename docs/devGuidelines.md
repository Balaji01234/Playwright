## Rules to follow while writing test cases

* Keep test file names short. Ideally it should be the functionality the test cases are, well, testing.
* If multiple functionality are being tested then give a generic name like `basicDrawSet1.spec.ts`. Note: It's just an example. Don't use the prefix `basic` for a set of complex test cases.
* Limit the number of test cases per file to 10 (+/- 2);
* Do not use `test.describe` block.
* Use uppercase test ID as test name.
* Use lowercase test ID as filename for files created or used inside a test case. If (and only if) there are multiple files of the same type (say `.png` files), then add a numeric suffix.
* In case we need a variable to store some data before creating/using the file, then the said variable must have the same suffix as the file name.
* Example scenarios for file names (and corresponding variable names).
  1. We have a single screenshot (png) file.
     **Expected file name**: `tc_dt_001.png`
     **Expected variable name (if any)**: `const screenshot`
  2. We have three screenshot files:
     Expected file names: `tc_dt_001_1.png`, `tc_dt_001_2.png`, `tc_dt_001_3.png`
     Expected variable names: `const screenshot1`, `const screenshot2`, `const screenshot3`
     Not expected: `tc_dt_001.png`, `tc_dt_001_1.png`. If there are multiple files of same type then suffix is a must.
* Every test case must be preceded by a comment block describing the test case and its expected result.
* Every test case must be followed by an empty new line.
* All variable names must start with a lowercase letter.

## Directory Structure

**src/tests**

* Contains broad test categories. Every directory inside may or may not correspond to a playwright project defined in `playwright.config.ts`. It's not a hard requirement to create a separate folder for a playwright project. Though try to create it whenever possible.
    * When adding a new test suite in playwright config (and possibly its test directory), use the `testMatch` option to match test files inside the directory, rather than using project specific `testDir` option. The reason being, having a constant `testDir` (in our case it is `src/tests`) makes it easy to create our custom `snapshot` and `geometries` directory.
* The `setup` directory contains code to login to the account specified in the `.env` file and create Snaptrude folders for every playwright project defined.
    * The tests inside `setup` directory need to be run **manually**. Only once. Therefore, it can't be added as a project dependency or in global setup.

**testData**

* This directory contains the expected snapshots and mesh geometries for all test cases.

**autotest.sh**

* Helper script to run tests locally. Use `./autotest.sh -h` for more details.

**bitbucket-pipeline.yml**

* For bitbucket.

**combine_artifacts.py**

* For last step in bitbucket pipeline. It generates the final test report.

**env.template**

* All environment variable that are to be used must be declared here.

**.env**

* Devs should copy/rename `env.template` to `.env` and use their own specific values.

**global-setup.ts**

* Currently, it creates an empty `user.json` within `playwright/.auth` directory. This path is used for saved authentication (in `auth.setup.ts`) and an empty file ensures no CI step fails due to absence of `user.json`.

**playwright.config.ts**

* Playwright config.

<hr/>

## Naming convention

* For multiple words, use camel-case formatting consistently across file names, directory names, and code, unless a particular program requires a different naming convention.

<hr/>

## Exposed locators for testing purpose

| No. | Locator name                                        | Locator description                                                                 |
|----|-----------------------------------------------------|-------------------------------------------------------------------------------------|
| 1  | @class='model-exported'                             |                                                                                     |
| 2  | @class='views-exported'                             |                                                                                     |
| 3  | @class='image-uploaded'                             |                                                                                     |
| 4  | @class='cad-uploaded'                               |                                                                                     |
| 5  | @class='model-uploaded'                             |                                                                                     |
| 6  | @class='pdf-uploaded'                               |                                                                                     |
| 7  | @class='materials-uploaded'                         |                                                                                     |
| 8  | @class='doors-uploaded'                             |                                                                                     |
| 9  | @class='windows-uploaded'                           |                                                                                     |
| 10 | @class='furniture-uploaded'                         |                                                                                     |
| 11 | save-as-complete                                    |                                                                                     |
| 12 | dashboard-is-ready                                  | dashboard is loaded                                                                 |
| 13 | project-is-ready                                    | project is loaded.                                                                  |
| 14 | `store.exposed.autoSaveConfig.disableToasts()`      | disable toasts.                                                                     |
| 15 | `store.exposed.automationFeedback.isModelLoaded()`  | type: boolean - whether model on furniture, door, window is loaded                  |
| 16 | `store.exposed.automationFeedback.flush()`          | type: boolean - reset the value of isModelLoaded                                    |
| 17 | `store.exposed.automationFeedback.setModelLoaded()` | type: void - setter function for setting model to true when the model has loaded.   |
| 18 | `store.exposed.automationCamera.getCamera()`        | prints current camera positions that can be copy pasted into the test file directly.|
| 19 | `store.exposed.automationCamera.setCamera()`        | setter for setting camera positions to the result of getCamera()                    |
