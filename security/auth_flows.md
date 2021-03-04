# Authentication and authorization flows

As discussed in the [introduction to IT security](basics), one differentiates
between authentication and authorization. In this document we will look into
methods for authentication and authorization. For web authentication, see
[this document](web_authentication).

## Standards

There are several established standard to handle this. Here are some of the most
common ones.

### SAML

Security Assertion Markup Language (SAML) is an authentication and authorization
standard. It uses XML.

### OAuth

OAuth is an authorization protocol where the authorization is provided by an
identity provider. This alleviates the client site from storing any user
passwords. It is also the magic behind social logins.

To better understand OAuth, we will introduce some core terminology.

- **Client** a service that wants to access the resource server on behalf of a
  user.
- **Resource server** is the owner of the desired resource.
- **Authorization server** authorizes the client to access the resource server.

To accomplish this, two kinds of tokens are introduced;

- **Access token** a token specifying authorization for a user, but does not
  contain identifying information. It declares what scopes can be accessed.
  Access tokens are typically meant to be understood by resource server only.
- **Refresh token** a token used for obtaining an access token.

## OpenID

OpenID is an authentication protocol.

#### OIDC

Since, OAuth does not support authentication, OpenID Connect (OIDC) was
introduced. It is built on top of OAuth.

OIDC introduces the concept of an ID token, which is a [JWT](jwt) token
identifying a user. Possessing an ID token is proof of authentication, which
does not apply for an access token since those can be obtained in multiple ways.
In contrast to an access token, the id token is meant to be understood by the
client.

As of 2021, the recommendation is to use Proof Key for Code Exchange (PKCE).
