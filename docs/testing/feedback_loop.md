# Feedback Loop

The feedback loop is an important factor during development. With a too long
feedback loop developers might lose focus. Things that create short feedback
loops are:

- **Fast tests** Expensive operations should be mocked. If testing expensive
  operations they should have their own test suit that can run in a remote
  [CI/CD](../devops/ci_cd) pipeline.
- **Interactive tests** Developers should be able to run a test watchdog and be
  able to single out tests. This should preferable be integrated on an IDE
  level.
- **Isolated services** If developing in the microservice paradigm, it is
  crucial that services can run in isolation for development and interaction. It
  should not be needed to spin up a whole stack.
