# Threats

There are many types of threats but typically an attacker wishes to

- gain access to a system they are not part of (authentication)
- gain access to resources they are not allowed to access (authorization)

First, let us consider what threats there actually are. Attacks can generally be
categorized as the following;

## Brute force attacks

A brute force attack consist of trying a vast amount of different passwords in
order to gain access to a system.

## Denial of service

DoS (Denial of Service). A target is flooded with requests, causing it either
slow down answering legitimate requests or going down completely. These attacks
can be both fast and slow.

There also ADoS (Amplified Denial of Service) attacks where one uses a server to
amplify the attack.

## SQL Injection

If input is not sanitized and run as a query in a database, a hacker can inject
SQL into the database. One can detect that characters have not been escaped if
one gets a server error upon entering `'` into a form. An example of a SQL
injection attack is

```sql
'; DROP TABLE *--`
```

Note that this might change depending on what database language is used. One can
also do a second order injection, where e.g. a username with unescaped
characters is stored and the SQL injection attack runs when e.g. the user
changes password.

## XSS

XSS (Cross site scripting). If an input is not correctly sanitized, a hacker can
inject HTML script tags in there and hence run JavaScript in the client. This
can be used for e.g. cookie stealing. An XSS attack can be performed by
injecting the following into a form:

```html
<script>
  alert("XSS");
</script>
```

## CSRF

CSRF (Cross Site Request Forgery). If one's website includes a form and the
website does not check the origin of the incoming request to that form, then it
is possible to forge a request. This means that a malicious site can upon
loading send a request to our website where the user is authenticated. It can
request for e.g. the deletion of that user account. This can be resolved by
including a CSRF token.
