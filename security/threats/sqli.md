# SQL Injection

An SQLI (SQL Injection) attack is when an attacker injects queries into a
database which then is executed. This can happen if user input is not correctly
sanitized and can by e.g. if one gets a server error upon entering `'` into a
form. An example of a SQL injection attack is

```sql
'; DROP TABLE *--`
```

Note that this might change depending on what database language is used.

One can also do a second order injection, where e.g. a username with unescaped
characters is stored and the SQL injection attack runs when e.g. the user
changes password.
