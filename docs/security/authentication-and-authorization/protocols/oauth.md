# OAuth

**OAuth** is an authorization protocol where the authorization is provided by an
**identity provider**. This alleviates the client site from storing any user
passwords. It also constitutes the magic behind social logins.

To better understand OAuth, we will introduce some core terminology.

- **Client** A service that wants to access the resource server on behalf of a
  user.
- **Resource server** The owner of the desired resource.
- **Authorization server** Authorizes the client to access the resource server.

To accomplish this, two kinds of tokens are introduced;

- **Access token** A token specifying authorization for a user, but does not
  contain identifying information. It declares what scopes can be accessed.
  Access tokens are typically meant to be understood by resource server only.
- **Refresh token** A token used for obtaining an access token.
