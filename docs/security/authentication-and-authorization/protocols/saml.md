# SAML

**Security Assertion Markup Language** (**SAML**) is an authentication and
authorization standard. In SAML there are

- **User Agent (UA)** Typically the user's web browser.
- **Service Provider (SP)** The service that we want to access.
- **Identity Provider (IDP)** The service that federates identities.

The service provider must trust the identity provider.

When the UA interacts with the IDP it creates a SAML assertion which is sent to
the UA which in turn sends it to the SP.

The configurations often reside in an
[XML](../../../programming/data_formats/xml.md) file.

SAML was not initially designed for the web and has been retrofitted for it
afterwards. It is also quite verbose.
