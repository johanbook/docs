# Coverage

**Coverage** is a measure of how much of a codebase is covered during
[automated tests](../README.md). This allows one to triangulate the code to find
areas in need of testing. Coverage is generated when the tests are run and can
be divided into e.g. statements, functions, lines and branches.

## Code instrumentation

In order to generate a coverage report, one first needs to instrument the target
code. This is typically an automatic process that converts a code

```ts
const arr = [1, 2, 3];

for (item of arr) {
  console.log(arr);
}
```

to

```ts
const coverage = { line1: 0, line2: 0 };

coverage["line1"]++;
const arr = [1, 2, 3];

for (item of arr) {
  coverage["line2"]++;
  console.log(arr);
}
```

When the instrumented code has been tested, one can parse the coverage object to
calculate the total coverage.
