#!/bin/bash

# Function to display usage
function usage() {
echo -e "\033[1;33mUsage:\033[0m $0 [OPTIONS]"
echo -e "\nThis script runs Playwright tests based on the provided options."
echo -e "\n\033[1;33mOptions:\033[0m"
echo -e "  \033[1;32m-a\033[0m                     Run all tests"
echo -e "  \033[1;32m-s suite\033[0m               Run a particular test suite"
echo -e "  \033[1;32m-t test\033[0m                Run a particular test or a set of tests"
echo -e "  \033[1;32m-g regex\033[0m               Run all tests matching the regular expression"
echo -e "  \033[1;32m-f path/fileName.txt\033[0m   Run list of tests provided in the file"
echo -e "  \033[1;32m-l\033[0m                     List all tests"
echo -e "  \033[1;32m-l -s\033[0m                  List the names of test suites available"
echo -e "  \033[1;32m-h\033[0m                     Display this help message"
echo -e "\n\033[1;33mNote:\033[0m All Playwright command line options are supported by autotest.sh. For more documentation, refer to https://playwright.dev/docs/test-cli\n"
exit 1
}

# Check if no options were passed
if ((  $# == 0 )); then
    usage
fi

# Check if npx and playwright are installed
if ! command -v npx &> /dev/null
then
    echo "npx could not be found. Please install it."
    exit
fi

if ! npx playwright --version &> /dev/null
then
    echo "Playwright could not be found. Please install it."
    exit
fi


# Handle options
case $1 in
    -a)
        npx playwright test
        ;;
    -s)
        shift
        npx playwright test /$1
        ;;
    -g)
        shift
        npx playwright test -g $1
        ;;
    -f)
        shift
        tests=""
        # Ensure the file ends with a newline
        [[ $(tail -c1 "$1") && -f "$1" ]] && echo >> "$1"
        while IFS= read -r line
        do
            test=$(echo ${line} | awk -F' › ' '{print $2}')
            tests="$tests $test"
        done < $1
        npx playwright test $tests
        ;;
    -l)
        shift
        if [[ $1 == "-s" ]]; then
            echo -e "List of test suites:\n"
            for dir in src/tests/*/ ; do
               echo "  $(basename $dir)"
            done
        elif [[ -n $1 ]]; then
            npx playwright test /$1 --list
        else
            npx playwright test --list
        fi
        ;;

    -t)
        shift
        npx playwright test $@
        ;;

    -h)
        usage
        ;;
    *)
        npx playwright test $@
        ;;
esac
