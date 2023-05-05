# CQRS

**Command Query Responsibility Segregation** (**CQRS**) is a design pattern
where system operations are classified either as queries or commands. A query is
a read-only action while a command will mutate the application state. There
should never be an operation that does both.

### CQS

A related, but less strict design pattern, is **Command Query Segregation**
(**CQS**) which enforces separation of commands and queries but without the need
for separation of data models.
