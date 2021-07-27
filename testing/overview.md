# Testing

In order to have confidence in that the code we write works as expected, it's a
good practice to write tests. The most basic test is to just execute a function
(or instantiate an object) and then check that the result is as expected.

Here are some useful tool types for testing:

- **Test runner** (e.g. jest, mocha, pytest) is a program responsible for
  finding tests and executing them.
- **Assertion library** (chai) a library with assertions.
- **Mock framework** (sinon) framework for mocking, stubbing and spying.

## Testing HTML

Testing web applications is tricky since they are based in HTML (testing GUI is
general difficult). One approach to this is DOM-testing, in where one renders a
DOM and runs assertions against it. In order to have fast tests one want to
avoid running them inside a browser - even if it's headless. One could instead
use something like JSDOM.

## Mocks

A mock is a replacement for a function or object where the details of its
implementation typically can be decided during runtime. The mock will also
record all calls on it allowing for direct test assertions on the mock.

## Spies

One can spy on an object or function to how it's called but keeping the
implementation intact.

## Stub

An object with predefined responses, which is in contrast to a mock that is
configured during runtime. They usually do not respond to calls that do not
match predefined responses.
