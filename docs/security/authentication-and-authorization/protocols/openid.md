# OpenID

**OpenID** is an authentication protocol that uses an identity provider.

## OpenID Connect

Since, OAuth does not support authentication, OpenID Connect (OIDC) was
introduced. It is built on top of OAuth.

OIDC introduces the concept of an ID token, which is a [JWT](../../jwt.md) token
identifying a user. Possessing an ID token is proof of authentication, which
does not apply for an access token since those can be obtained in multiple ways.
In contrast to an access token, the id token is meant to be understood by the
client.

As of 2021, the recommendation is to use Proof Key for Code Exchange (PKCE).
