# ACID

**ACID** is an abbreviation for describing desirable properties of a database
transaction.

## Atomicity

**Atomicity** is a transaction involving several operations all fail or all
succeed such that data integrity is maintained.

## Consistency

**Consistency** means that the database is updated directly after a transaction
and that invariants are respected. If there is an error in a transaction, the
database will be rolled back. This is in contrast to eventual consistency where
a database will update at some after the transaction, but not necessarily
directly.

## Isolation

**Isolation** means that although queries are run in parallel they behave as if
serial. This requires a mean of concurrency control, such as [MVCC](./mvcc.md).

### Isolation levels

There are different isolation levels.

Different isolation levels are applicable for different use cases. For example,
for storing metrics, a dirty read isolation level is often sufficient is there
high-density reads and often low-density reads with some tolerance for
deviations in the read results.

## Durability

**Durability** means that committed changes to the database are permanent, even
in case of system failure.
