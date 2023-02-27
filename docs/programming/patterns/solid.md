# SOLID

**SOLID** is a set of principles that help attaining clean code. The first principle is [single responsibility](./srp.md). The remaining principles are described in this document.

## Open / closed principle

The **open / closed principle** (**OCP**) states that modules should be open for extension but closed for modification. One can see this as that one should not need to modify the source code of a module when extending it. One example of how to accomplish this is the strategy pattern.


## Liskov substitution principle

The **Liskov substitution principle** (**LSP**)

## Interface Segregation Principle

The **Interface Segregation Principle** (**ISP**) is about that implementations should not need to implements parts of interfaces that do not make sense for them.  For example, consider the following interface:

```ts
interface Bird {
  eat(): void;
  fly(): void;
}
```

If we implement this interface for a bird that cannot fly, this will leave one method with an unexpected result, such as

```ts
class Ostrich implements Bird {
  eat() { /* ... */ }
  fly() { 
   throw new Error("Bird cannot fly");
  }
}
```

To come around this, interfaces should have a single responsibilty and kept as small as possible.

## Dependency Inversion Principle

The **dependency inversion principle** (**DIP**) states that high-level modules should not depend on low-level modules but instead should rely on abstractions. The abstractions should not depend on details. This allows for easier testing and helps SRP. This promotes dependency injection. It drives towards loose coupling.

## Cohesion and coupling

High cohesion and low couping, easier to perform changes.
