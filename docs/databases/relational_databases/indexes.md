# Indexes

A **database index** is an index to more quickly search a table. It behaves like
a tree.

One can index a specific column for faster search speeds in exchange for slower
writes and more memory consumption. Using indexes avoids full-table scans.

```sql
CREATE TABLE person (
  name varchar(255),
  address varchar(255),
);

CREATE INDEX idx_person_name
ON person (name);
```

Note that adding an index will make updating that table slower as the index
needs to be updated as well.

## Multi-column indexes

**Multi-column indexes** is an index that works on multiple columns. This is
useful if searching often on multiple columns simultaneously. Such an index can
be created using:

```sql
CREATE TABLE person (
  first_name varchar(255) NOT NULL,
  last_name  varchar(255) NOT NULL,
);

CREATE INDEX idx_person_name
ON person (first_name, last_name);
```
