# Dependency injection

**Dependency injection** is a pattern where an entity gets its dependencies
injected, typically via a function call. This helps with inversion of control.

One relies on the concepts of

- **Interface** An interface is a contract of what API an entity should expose.
- **Services** A service consumes dependencies by declaring what interfaces the
  dependencies should fulfill.
- **Injectors** An injection is an entity responsible for creating and injection
  the dependencies needed by a service.
