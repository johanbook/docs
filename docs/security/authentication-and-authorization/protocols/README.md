# Protocols

In this document we will look into some different standards for authentication
and authorization. Note that OpenID and OAuth are protocols for letting a third
party access your resources.

First let's introduce some terminology:

- **Single Sign-On** A process where a user signs in once to access all services
  in a system. The user should not need to enter credentials again. Can be
  implemented with domain-wide cookies (assuming the whole system is contained
  to a single domain).
