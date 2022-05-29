# CQRS

**Command Query Responsibility Segregation** (**CQRS**) is a design pattern
where system operations are classified either as queries or commands. A query is
a read-only action while a command will mutate the application state. There
should never be an operation that does both.

An example of this is queries and mutations in GraphQL.
