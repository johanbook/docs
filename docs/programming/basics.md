# Basics

This page will discuss some basic concepts in programming.

## First-class functions

First-class functions is kind of when a function can be used as a variable. A
function that returns another function is called a higher order function. A
language that support first-class functions allows for callbacks. A callback
with captured variables is known as a closure. A closure has access to the
environment in which it was created.

## Mutability

Objects either be **mutable** or **immutable** where a mutable object can be
changed while an immutable cannot. For example, a string variable is typically
immutable,

```python
s1 = 'seven dogs sleep'
s2 = s1
s2 += ' but the cat is awake'
```

When changing `s2` a new string object is instantiated and hence making no
change to `s1`.

## Idempotence

Idempotence is a mathematical concept. Consider the function $f$ and its
composite $f \circ f$, then it is idempotent if $f \circ f (x) = f(x)$.

Statements can be idempotent. Variable assignments are an typical example of
this. Another example is GET and PUT in the
[HTTP](../network/protocols/http/README.md) methods (while POST and DELETE are
not).

## Memoization

**Memoization** is the concept of caching the results of expensive function
calls. This does introduce a processing-memory trade-of.

## DRY

**DRY** is an acronym that stands for **Don't Repeat Yourself**. This gives
minimal code that is easier to maintain.

It is important to identify where DRY is applicable and where it is not. For
example, if two pieces of code are utterly similar but fulfill rather different
purposes one should think carefully before DRYing it up.
