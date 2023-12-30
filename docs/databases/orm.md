# ORM

An **Object-Relational Mapping** (**ORM**) is a technique for querying and
mutating relational data from an object oriented paradigm. It acts as an
abstracting layer on top of the database layer. This allows the database type to
be more easily swapped out if the need would arise.

## Session

In order to interact with the database via the ORM one uses a session.

## Drawbacks

Using an ORM comes with multiple potential drawbacks:

- SQL queries are abstracted away meaning they are harder to inspect.
- Suboptimal SQL queries might be generated compared to what a person would
  write by hand.
