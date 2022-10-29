# SQL Injection

**SQL Injection** (**SQLI**) is a command injection attack where one injects
unwanted [SQL](../../databases/relational_databases/sql.md) queries into a
database where they are executed. This attack vector can arise when user input
is not properly sanitized.

## Examples

Assume we have a website with a field where users can search for products. The
backend will use the user input to build a SQL query like so:

```py
sqlQuery = """
  SELECT name, description FROM products
  WHERE name='{search_query}';
""".format(search_query=user_input)
```

However, if a malicious users would enters `x' OR true;--` in the search field,
the SQL query turns into

```sql
SELECT name, description FROM products
WHERE name='x' OR true;--';
```

Although the fact that the user can query the system for all its products might
seem harmless, the fact that a user can craft their own SQL queries is dangerous
as it might allow them to query other sensitive information and even modify the
database.

### Injecting batched statements

Since SQL supports batched statements that can be exploited. In the previous
example, if a user injected `x'; DROP TABLE *;--`, the query would have become

```sql
SELECT name, description FROM products
WHERE name='x'; DROP TABLE *;--'
```

### Bypassing login forms

SQLI attacks can be used on login forms. Typically when logging in, a SQL query
of the form below is constructed.

```sql
sqlQuery = """
  SELECT * FROM users
  WHERE username='{username}'
  AND password='{password}';
""".format(username=username, password=password)
```

Assume a user enters `' OR ''='` for both the username and password. Then the
query executed query would become

```sql
SELECT * FROM users
WHERE username='' OR ''=''
AND password='' OR ''='';
```

which would match all user records. Depending on the implementation of the
application, it could log you in as the first matched user.

## Enumeration

There are several ways of detecting SQLI vulnerabilities, which also varies
depending on which underlying database the system is using.

One way to enumerate SQLI is by using a fuzzing tool like `sqlmap`. This tool
will fuzz all parameters on an [HTML](../../programming/data_formats/html.md)
page and in case of a vulnerability, it is sometimes capable of fully mapping
the database.

## Countermeasures

Dynamically constructed SQL queries should **always** be sanitized. It is also
recommended to use an [ORM](../../databases/orm.md) and following best practices
for that framework.

## Second Order Injection

A second order injection is when e.g. a username with unescaped characters is
stored and the SQL injection attack runs when e.g. the user changes password.
