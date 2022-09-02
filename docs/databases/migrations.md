# Migrations

**Database migrations** happens when one needs to import data or alter the
schema of an already existing database.

## Schema alteration

Schema alterations typically happens in conjunction with deploying new versions
of the software. One approach is to view the database schemas as a state machine
and database migrations as traversing between different states. For each needed
transition, one creates a migration script that contains the necessary commands
for executing the state change.

Although the migration scripts typically are written in an [ORM](./orm.md), here
is an example in SQL:

```sql
-- Add new table
CREATE TABLE newTable (id: int);

-- Add address to person table
ALTER TABLE person
ADD Address varchar(255);
```

## Importing data

Sometimes data needs to be imported into the database, for example if syncing to
an external system. This can cause performance issues, especially when handling
big data.

If downtime is allowed, it can be faster to disable constraints on integrity
while importing data and later rebuilding it.
