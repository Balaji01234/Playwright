import os
import re
from tabulate import tabulate
import glob


def extract_test_results(log):
    results = re.findall(r"\b(\d+) (passed|failed|flaky|did not run)\b", log)
    return {result[1]: int(result[0]) for result in results}

def read_and_process_log(file):
    if os.path.exists(file):
        with open(file, "r") as f:
            return f.read()
    return ""

def run_test_suite(file):
    log_content = read_and_process_log(file)
    if not log_content:
        return None, None, None

    suite_name = file.split("_run_logs.txt")[0].replace('_', ' ').capitalize()
    results = extract_test_results(log_content)
    total_tests = sum(results.values())
    failed_tests = extract_failed_tests(log_content)

    return {
        'Test Suite': suite_name,
        'Failed': results.get('failed', 0),
        'Passed': results.get('passed', 0),
        'Flaky': results.get('flaky', 0),
        'Did Not Run': results.get('did not run', 0),
        'Total Tests': total_tests,
    }, failed_tests, f"\n\nRunning the following test suite: {suite_name}\n{log_content}"

def combine_artifacts():
    os.makedirs("combined_artifacts", exist_ok=True)
    os.system("cp allure-results/* combined_artifacts/")

def generate_and_save_table(table_data, file_path):
    table_headers = ['Test Suite', 'Failed', 'Passed', 'Flaky', 'Did Not Run', 'Total Tests']

    # Calculate totals for each column
    total_failed = sum(result['Failed'] for result in table_data)
    total_passed = sum(result['Passed'] for result in table_data)
    total_flaky = sum(result['Flaky'] for result in table_data)
    total_did_not_run = sum(result['Did Not Run'] for result in table_data)
    total_tests = sum(result['Total Tests'] for result in table_data)
    
    # Append the totals row to the table data
    totals_row = {'Test Suite': 'Total', 'Failed': total_failed, 'Passed': total_passed,
                  'Flaky': total_flaky, 'Did Not Run': total_did_not_run, 'Total Tests': total_tests}
    table_data.append(totals_row)

    table = tabulate(table_data, headers="keys", tablefmt='grid')



    with open(file_path, "a") as file:
        file.write("\n\nTest Results Summary:\n")
        file.write(table)

def append_logs(logs, file_path):
    with open(file_path, "a") as file:
        file.write(logs)

def extract_failed_tests(log):
    failed_sections = re.findall(r'(\d+ failed.*?)(?=\d+ (passed|flaky|did not run|$)|$)', log, re.DOTALL)
    failed_tests = []
    for section in failed_sections:
        tests = re.findall(r'(\[.*\] › .* › .*)', section[0])
        failed_tests.extend(tests)
    return failed_tests

def append_failed_tests(failed_tests, file_path):
    with open(file_path, "w") as file:
        file.write("\n".join(failed_tests))

def main():
    combine_artifacts()

    table_data = []
    all_logs = ""
    all_failed_tests = []

    for file in glob.glob("*_run_logs.txt"):
        suite_results, failed_tests, logs = run_test_suite(file)
        if suite_results:
            table_data.append(suite_results)
            all_logs += logs
            all_failed_tests.extend(failed_tests)

    generate_and_save_table(table_data, "read-me.txt")
    append_logs("\n\nFailed Tests:\n" + "\n".join(all_failed_tests), "read-me.txt")
    append_logs(all_logs, "read-me.txt")

    append_failed_tests(all_failed_tests, "failedTests.txt")

    # Check if any failed tests and set PIPELINE_RESULT accordingly
    failed_tests_count = sum(result['Failed'] for result in table_data)
    if failed_tests_count > 0:
        os.environ["PIPELINE_RESULT"] = "failed"
    else:
        os.environ["PIPELINE_RESULT"] = "passed"

        # Write the PIPELINE_RESULT to a file
    with open("pipeline_result.txt", "w") as file:
     file.write(os.environ["PIPELINE_RESULT"])


if __name__ == "__main__":
    main()
