# Types of databases

There are different types of databases that suits for different problem types.
Databases are usually divided into relational and non-relational databases.

## Relational Databases

A **relational database** imposes a relational structure on its data. This
structure is described in schemas. Most relational databases support
[SQL](./relational_databases/sql.md).

## Non-relational Databases

A **non-relational database** (often referred to as a **NoSQL database**) is
database that does not require relational data. NoSQL is suitable for
heterogeneous data where this no natural relations (such as random documents).

### Key-Value Storage

A **key-value storage** is a database that store values by keys. This is
suitable for cache or system configurations (used in e.g. `etcd`).

### Blob store

A **blob store** is a database designed to store Blobs (binary large object),
which is unstructured data, in contrast e.g. to
[JSON](../programming/data_formats/json.md). Blob stores usually behaves
similarly like key-value stores.

## Other Types

Some other specialized data bases are:

- **Time series database** Handles time-series data. Often used for e.g.
  [monitoring](../devops/monitoring/README.md).
- **Graph database** Uses a graph model.
- **Spatial database** For storing spatial data, such as points on a map.
