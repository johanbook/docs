# SOLID

**SOLID** is a set of principles that help attaining clean code. The first principle is [single responsibility](./srp.md). The remaining principles are described in this document.

## Open / closed principle

The **open / closed principle** (**OCP**) states that modules should be open for extension but closed for modification. One can see this as that one should not need to modify the source code of a module when extending it. One example of how to accomplish this is the strategy pattern.


## Liskov substitution principle

The **Liskov substitution principle** (**LSP**)

## Interface Segregation Principle

The **Interface Segregation Principle** (**ISP**) is about that implementations should not need to implements parts of interfaces that do not make sense for them. 

```ts
interface Bird {
  eat(): void;
  fly(): void;
}
```

```ts
class Ostrich implements Bird {
  eat() { /* ... */ }
  fly() { 
   /* Is not applicable */
  }
}
```

## Dependency Inversion Principle

Dependency injection (DIP) states that high-level modules should not depend on low-level modules but instead should rely on abstractions. The abstractions should not depend on details. This allows for easier testing and helps SRP. This promotes dependency injection. It drives towards loose coupling.

IoC containers
Automatic vs code configuration. Automatic code might scan the assembly. Alternative through XML/JSON, neat as it does not require recompilation but is not type safe.

## Cohesion and coupling

High cohesion and low couping, easier to perform changes.
