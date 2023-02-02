# Automated testing

**Automated testing** is a testing approach where one uses automated tests,
typically by writing bespoke tests as part of the source code. Automated tests
are a typically a form of [white-box testing](../README.md#white-box-testing).

## The anatomy of a test

The anatomy of an automated test can be broken down into the following stages:

1. Setup
2. Interaction
3. Assertions
4. Teardown

An example of this structure is shown below.

```py
def test_my_function_returns_numbers():
  # Setup
  my_function = maybe_function_reference

  # Interaction
  value = my_function(1)

  # Assertions
  assert type(value) is int
  assert value == 2
```

## Best practices

Some best practices are

- Tests should be independent of each other

## Tools

In order to create efficient tests, one need a set of different tools, typically
including:

- **Test runner** (e.g. jest, mocha, pytest) is a program responsible for
  finding tests and executing them.
- **Assertion library** (e.g. chai) is a library with assertions.
- **Mock framework** (e.g. sinon) is framework for mocking, stubbing and spying.

## Utilities

To facilitate testing one commonly employs different tools. Here are a few
common ones.

### Mocks

A mock is a replacement for a function or object where the details of its
implementation typically can be decided during runtime. The mock will also
record all calls on it allowing for direct test assertions on the mock.

### Spies

One can spy on an object or function to how it is called but without altering
its implementation.

### Stub

An object with predefined responses, which is in contrast to a mock that is
configured during runtime. They usually do not respond to calls that do not
match predefined responses.
