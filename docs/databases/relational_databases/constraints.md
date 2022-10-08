# Constraints

**Database constraints** are rules for relational databases for ensuring
database integrity. The constraints are checked before a transaction and if the
check fails the transaction will not be persisted.

## Primary key

A **primary key** is unique non-null id for a row. It will create an
[index](./indexes.md) for the column. For example,

```sql
CREATE TABLE person (
  social_security_number integer PRIMARY KEY,
  name varchar(255),
  address varchar(255),
);
```

Note that a primary key is not mandatory.

### Multi-column primary keys

**Multi-column primary keys**, also known as **composite primary keys**, are
when multiple columns are used as primary keys, as shown in the example below.
Multi-column primary keys are useful for table used to connect other tables,
e.g. primary keys are also foreign keys.

```sql
CREATE TABLE reservation (
  name varchar(255),
  day date,
  day_time time,
  number_of_people integer,
  PRIMARY KEY (name, day, day_time)
);

```

## Foreign key

A **foreign key** refers to a primary key of another table, as shown in the
example below. With this constraint, it will not be possible to insert a record
into `car` where the owner's social security number does not exist.

```sql
CREATE TABLE person (
  social_security_number integer PRIMARY KEY,
  name varchar(255),
);

CREATE TABLE car (
 number_plate varchar(6) PRIMARY KEY,
 owner_social_security_number integer,
 FOREIGN KEY (owner_social_security_number) REFERENCES person(social_security_number)
);
```

## Not null

A column can be either nullable or non-nullable. When declared, columns are
nullable by default. To create non-nullable columns, one can use the `NOT NULL`
keyword as shown below:

```sql
CREATE TABLE person (
  social_security_number integer PRIMARY KEY,
  name varchar(255) NOT NULL,
);
```

## Unique

Columns can be unique.

```sql
CREATE TABLE person (
  social_security_number integer PRIMARY KEY,
  name varchar(255) UNIQUE,
);
```

## Default

Columns can be assigned a default value;

```sql
CREATE TABLE dog (
  name varchar(255) DEFAULT "ruffy",
);
```

## Check

It is possible to impose custom validation checks using the `CHECK` keyword.

```sql
CREATE TABLE dog (
  name varchar(255),
  age integer,
  CHECK (age<40)
);
```

Note that the syntax may differ depending on the database system.
