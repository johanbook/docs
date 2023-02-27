# Automated testing

**Automated testing** is a testing approach where one uses automated tests,
typically by writing bespoke tests as part of the source code. Automated tests
are a typically a form of [white-box testing](../README.md#white-box-testing).

## The anatomy of a test

The anatomy of an automated test can be broken down into the following stages:

1. Setup
2. Arrange
3. Interaction
4. Assertions
5. Teardown

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
