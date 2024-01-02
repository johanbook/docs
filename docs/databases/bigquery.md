# BigQuery

**BigQuery** is a relational database for large data. This document contains
some info on how it differentiates towards other databases. For general SQL, see
[this page](./relational_databases/sql.md).

## Arrays

An array is a list of objects with the same schema, such as `[1, 2, 3]` or
`["A", "B", "C"]`. The data type can also be structs - an data structure that is
discussed later.

### Unnesting

As arrays are a data type and not tables, they cannot be queried and one cannot
use e.g. the `WHERE` keyword. For example

```sql
SELECT [1,2,3] AS myValue;
```

will return

```json
[
  {
    "myValue": [1, 2, 3]
  }
]
```

Using `UNNEST` the array becomes a table we can query and manipulate like so by
transforming each array item into a separate row:

```sql
SELECT * FROM UNNEST([1,2,3,10]) AS myValue
WHERE myValue < 5;
```

```json
[
  {
    "myValue": "1"
  },
  {
    "myValue": "2"
  },
  {
    "myValue": "3"
  }
]
```

## Structs

A **struct** is a custom data type that used to handle nested data. A struct can
be created like

```sql
SELECT STRUCT(1 AS myValue) AS myStruct;
```

which produces

```json
[
  {
    "myStruct": {
      "myValue": 1
    }
  }
]
```
