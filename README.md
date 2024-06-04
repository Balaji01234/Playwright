# playwrighttesting
<hr/>
Automated tests for Snaptrude React App.
<hr/>

### Steps to run locally
```
npm i
npx playwright install chromium
chmod u+x autotest.sh

// To run all tests
./autotest.sh -a

// To run specific test suite
./autotest.sh -s [test suite]

// For more details
./autotest.sh -h
```

### Steps to run in docker (to replicate CI env)
- Inside the `playwrighttesting` repo execute the  following commands
```
docker run --rm --network host -v "$(pwd)":/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.40.0-alpha-nov-15-2023-jammy /bin/bash
npm ci
npx playwright install --with-deps
npx playwright test --workers 1 --retries 0 [test name...]
```

<hr/>