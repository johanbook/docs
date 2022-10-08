# Types of databases

A **database** is a service dedicated to storing and retrieving data. A database
typically has the following attributes

- **Persistence** Data is persisted through program failures.
- **Concurrency** Support many concurrent read and writes.

which are requirements in many production environments that need to story any
form of data (such as user accounts).

Databases are usually divided into relational and non-relational databases.

## Relational Databases

A relational database imposes a relational structure on its data. This structure
is described in schemas. Most relational databases support
[SQL](./relational_databases/sql.md).

## Non-relational Databases

A non-relational database (often referred to as NoSQL) is database that does not
require relational data. NoSQL is suitable for heterogeneous data where this no
natural relations (such as random documents).

### Key-Value Storage

A key-value storage is a database that store values by keys. This is suitable
for cache or system configurations (used in e.g. `etcd`).

### Blob store

Blob (binary large object) is unstructured data, in contrast to JSON. Does not
fit into a SQL database. As of writing this, Google Cloud Storage and Amazon S3
offers this. Usually behaves like a key-value store.

## Other Types

Some other specialized data bases are:

- **Time series database** Handles time-series data. Often used for monitoring.
- **Graph database** Uses a graph model.
- **Spatial database** For storing spatial data, such as points on a map.
