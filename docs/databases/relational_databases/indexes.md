# Indexes

A **database index** is an index to more quickly search a table. The index uses
a tree-like data structure, avoiding the need for full-table scans. However,
adding an index to a table requires the index to be updated when the table is
updated. This causes slower writes and a higher memory consumption. See the
example below for how to create an index.

```sql
CREATE TABLE person (
  name varchar(255),
  address varchar(255),
);

CREATE INDEX idx_person_name
ON person (name);
```

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
