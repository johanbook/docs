# SQL

**Structured Query Language** (**SQL**) is a language for querying and modifying
a database.

## Create table

```sql
CREATE TABLE person (
  social_security_number integer PRIMARY KEY,
  name varchar(255),
  address varchar(255),
);
```

## Adding a row

```sql
INSERT INTO person (social_security_number, name, address)
VALUES (123, 'Erik', 'My Street 123')
```

## Updating a row

```sql
UPDATE person
SET name = 'Erik'
WHERE social_security_number = 1234;
```

## Deleting a row

```sql
DELETE FROM person
WHERE social_security_number = 1234;
```
