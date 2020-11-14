# Testing

In order to have confidence in that the code we write works as expected, it's a
good practice to write tests. The most basic test is to just execute a function
(or instantiate an object) and then check the result is expected.

Another form of testing is DOM-testing, in where one renders a DOM and runs
assertions against it.

- **Test runner** (e.g. jest, mocha, pytest) is a program responsible for
  finding tests and executing them.
- **Assertion library** (chai) a library with assertions.
- **Mock framework** (sinon) framework for mocking, stubbing and spying.
