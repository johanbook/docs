# Single Responsibility Principle

The **Single Responsibility Principle** (**SRP**) is a principle that states
that a module should only ever have one reason to change. This can also be
considered that a module, piece of code or a system should only have one
responsibility. It can be expressed as "should do one thing only and do it
well".

It is similar to the Unix principle.

## Flag arguments

A flag argument is a sign that a function does more than one thing. Then the
single responsibility of this function should be to delegate the work to other
functions.

High cohesion

One class should have only one reason to change.

Identify things that are chanigng for different reasons.

Group together things that change for the same reason.

SR{P requires precise names, focused classes.
