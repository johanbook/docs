# ACID

**ACID** is abbreviation for describing desirable properties of a database

- **Atomicity**. A transaction involving several entities fail all or succeed
  all.
- **Consistency**. Database is updated directly after a transaction. If there is
  an error in a transaction, the database will be rolled back. This is in
  contrast to eventual consistency where a database will update at some after
  the transaction, but not necessarily directly.
- **Isolation**. Although queries are run in parallel they behave as if serial.
- **Durability**. Changes to the database are permanent.
