# SOLID

**SOLID** is a set of principles to help attaining clean code. The first
principle is [the single responsibility](./srp.md). The remaining principles are
described in this document.

## Open / closed principle

The **open / closed principle** (**OCP**) states that modules should be open for
extension but closed for modification. One can see this as that one should not
need to modify the source code of a module when extending it. One example of how
to accomplish this is the strategy pattern.

## Liskov substitution principle

The **Liskov substitution principle** (**LSP**) states that a subclass should be
substitutable for the classes they were derived from. A classic example of this
is trying to model a square as deriving from a rectangle - it makes sense in the
real world but not in a program. For instance see the rectangle class below:

```ts
class Rectangle {
  height: number;
  width: number;

  setHeight(height: number): void {
    this.height = height;
  }

  setWidth(width: number): void {
    this.width = width;
  }
}
```

If we derive a square class from the rectangle one as done below, we end up some
oddities when setting width and height.

```ts
class Square extends Rectangle {
  setHeight(height: number): void {
    this.height = height;
    this.width = height;
  }

  setWidth(width: number): void {
    this.height = width;
    this.width = width;
  }
}
```

## Interface Segregation Principle

The **Interface Segregation Principle** (**ISP**) is about that implementations
should not need to implements parts of interfaces that do not make sense for
them. For example, consider the following interface:

```ts
interface Bird {
  eat(): void;
  fly(): void;
}
```

If we implement this interface for a bird that cannot fly, this will leave one
method with an unexpected result, such as

```ts
class Ostrich implements Bird {
  eat() {
    /* ... */
  }
  fly() {
    throw new Error("Bird cannot fly");
  }
}
```

To come around this, interfaces should have a single responsibilty and kept as
small as possible.

## Dependency Inversion Principle

The **dependency inversion principle** (**DIP**) states that high-level modules
should not depend on low-level modules but instead should rely on abstractions.
The abstractions should not depend on details. This allows for easier testing
and helps SRP. This promotes [dependency injection](./dependency_injection.md).
It drives towards loose coupling.

## Cohesion and coupling

One related concept is the one of cohesion and coupling. Cohesion means that
files that are changed together are bundled together and coupling describes how
those modules are linked. This means that a system with high cohesion and low
coupling is easier to change compared to a system that does not have those
properties.
