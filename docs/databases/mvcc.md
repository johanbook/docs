# MVCC

**Multiversion Concurrency Control** (**MVCC**) is a currency control for
databases that relies on version-control rather strict locks to
[transaction isolation](./acid.md#isolation) in databases. This allows
non-blocking implementations of isolation levels which might otherwise be an
issue in lock-based databases, especially for long transactions.

Each user sees a snapshot of the database.
