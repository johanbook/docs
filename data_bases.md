# Databases

## Relational databases

A relational database imposes a relational structure on its data. This structure
is described in schemas. Most relational databases support Structured Query
Language (SQL).

### ACID

- **Atomicity**. A transaction involving several entities fail all or succeed
  all.
- **Consistency**. Database is updated directly after a transaction. If there is
  an error in a transaction, the database will be rolled back. This is in
  contrast to eventual consistency where a database will update at some after
  the transaction, but not necessariy directly.
- **Isolation**. Although queries are run in parallell they behave as if serial.
- **Durability**. Changes to the database are permanent.

### Indexes

One can index a columb for faster search speeds in exchange for slower writes
and more memory consumption. It is usefu for e.g caching.

## Non-relational databases

A non-relational database (often referred to as NoSQL).

### Key-Value storage

Stores value by keys.

## Blob store

Blob (binary large object) is unstructured data, in contrast to JSON. Does not
fit into a SQL database. As of writing this, Google Cloud Storage and Amazon S3
offers this. Usually behaves like a key-value store.

## Time series database

Handles time-series data. Often used for monitoring.

## Graph database

Uses a graph model.

## Spatial database

For storing spatial data, such as points on a map.

## Shards

The data of a database server can be divided into different shards which can be
shared across several different databases.
