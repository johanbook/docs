# Basics of IT security

First off, we want to distinguish between authentication and authorization.
Authentication is confirming that an entity is the one it claims to be while
authorization is deducing what privileges that entity has. In context of HTTP
API, failing authentication gives a `401 Unauthorized` status code, while
failing authorization gives a `403 Forbidden` status code.
