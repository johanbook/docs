# Dependency injection

**Dependency injection** (**DI**) is a pattern where an entity gets its
dependencies injected, typically via a function call. This helps with inversion
of control.

One relies on the concepts of

- **Interface** An interface is a contract of what API an entity should expose.
- **Services** A service consumes dependencies by declaring what interfaces the
  dependencies should fulfill.
- **Injectors** An injection is an entity responsible for creating and injection
  the dependencies needed by a service.

## IoC containers

An **Inversion of Control container**, or an **IoC container**, is a framework
for implementing dependency injection. This can either be done fully
automatically, e.g. by scanning the program assembly or done manually be in-code
configuration or through external XML/JSON configuration. The latter is not type
safe, but allows for changing injected dependencies without recompiling the
program.
