# yekniro-routine-sandbox

YekNiro's internal test repository for the AI scheduler's controlled live test (C-SCHED v2, migration 0764,
A-SCHED-2 G7). Private. It holds no customer data, no secret and no deployment: a trivial module and its tests.

- `npm test` runs the tests with Node's own runner (no dependencies).
- One test fails on purpose (`a fractional cent rounds half up`): `totalWithTax` truncates instead of rounding. The
  controlled test queues ONE internal-engineering job for this repository; the session that claims it receives a
  one-repository credential from YekNiro, pushes a branch that fixes the function, and YekNiro opens the one pull request.
- `.github/workflows/ci.yml` runs the tests on every push and pull request (copy `workflow-ci.yml` there).
