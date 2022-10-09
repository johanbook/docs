# Types of Tests

Tests can be divided into several different categories.

## Unit Tests

A **unit test** tests one aspect / functionality of an object and nothing more.
Unit tests should be fast and any time-consuming or external processes are
typically mocked. You typically end up with many unit tests but as long as tests
are useful, then the more the better.

## End-To-End Tests

An **end-to-end** test (or **e2e** test for short) tests a system the exact same
way an end user would interact with it. For example, if the service consists of
a stack with a frontend UI one needs to spin up a scripted browser and run tests
from there.

## Integration Tests

An **integration tests** how several components interact. In contrast to a unit
test, you can test a longer user flow that would be unsuitable for a unit test.
Such a flow could for example be to register a user, confirm email and check
that login works. The different between integration tests and end-to-end tests
is that integration tests do not require spinning up the whole system and one
can use mocks.
