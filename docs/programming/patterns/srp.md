# Single Responsibility Principle

The **Single Responsibility Principle** (**SRP**) is a principle that states
that a module should only have one reason to change. This means that code with
high cohesion should put together, or simply put, code that change together
should be together.

SRP helps creating clean code and enforces precise names and focused classes.

It is similar to the [Unix principle](./unix-principle.md).

## Flag arguments

A flag argument is a sign that a function does more than one thing. Then the
single responsibility of this function should be to delegate the work to other
functions.
