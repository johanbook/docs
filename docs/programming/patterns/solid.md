# SOLID

**SOLID** is a set of principles that helps ataining clean code. The first principle is [single responsibility](./srp.md). The remaining principles are described in this document.

## Open / closed principle

The **open / closed principle** (**OCP**)

modules should be open for extension but closed for modification

You do not need to change the source code of a module when extending it

Strategy pattern

## Liskov substitution principle

The **Liskov substitution principle** (**LSP**)

## Interface Segregation Principle

The **Interface Segregation Principle** (**ISP**)

Implementations shuld not have to implement parts o finterfaces that don't make sense for them.

Clients should not be forced to implement interfaces that does not make sense for them.

## Dependency Inversion Principle

Dependency injection (DIP) states that high-level modules should not depend on low-level modules but instead should rely on abstractions. The abstractions should not depend on details. This allows for easier testing and helps SRP. This promotes dependency injection. It drives towards loose coupling.

IoC containers
Automatic vs code configuration. Automatic code might scan the assembly. Alternative through XML/JSON, neat as it does not require recompilation but is not type safe.

## Cohesion and coupling

High cohesion and low couping, easier to perform changes.
