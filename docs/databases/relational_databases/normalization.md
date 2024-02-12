# Normalization

## Normal Forms

### 1NF

- The database should not convey information through row order.
- Columns should have a single data type.
- Tables should have primary keys.
- No repeating groups. That means one should not group items like a text field
  with `1 gold, 3 silver, 6 bronze`. That makes it hard to query .e.g which
  player has the most gold.

### 2NF

### 3NF

A non-key attribute may not depend on another non-key attribute. For example,
you should not have two columns `player_rating` and `player_level` in same table
if `player_rating` is computing from `player_level`.

It means that every non-key attributes in a table should depend on only the
primary key of the table.

### 4NF

Multivalued

### 5NF

The table should not possible to think of a as a join of two other tables. If
so, the table in question should not exist.
