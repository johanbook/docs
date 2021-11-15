# IT Security

When we want to guarantee the security of a system we can use the CIA triad. The
triad consists of confidentiality, integrity and availability.

- **Confidentiality**
- **Integrity**
- **Availability**

## Authentication

Authentication (or AuthN for short) is to confirm that an entity is what it
claims to be. Can use username/password, MFA or some certificates.

In context of HTTP API, failing authentication gives a `401 Unauthorized` status
code, while failing authorization gives a `403 Forbidden` status code.

## Authorization

Authorization (or AuthZ for short) is to deduce what privileges an entity has.

## Vulnerabilities

Some common types of vulnerabilities are documented [here](vulnerabilities).
