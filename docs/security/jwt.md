# JWT

A **JSON Web Token** (**JWT**) is a [JSON](../programming/data_formats/json)
encoded string that contains one or several claims. JWTs are signed and can be
used to communicate authentication or authorization. As these tokens are base64
encoded they are also URL-safe.

## Structure

A JWT consists of three base64 encoded JSON parts delimited by periods. It has a
header, payload (claims) and a signature. The header contains algorithm and
token type. The payload can be something like

```js
{
  sub: "my-user-id", // subject, can be e.g. user id
  name: "my-name", // custom claim
  iat: 14328 // issued at
}
```

A JWT section can be identified by the prefix `eyJ` which is an encoding of `{"`.

## Security

Since a JWT is signed, any tampering with it will invalidate it. However, since
JWT are meant to be public they should contain no sensitive data. They should
typically be short-lived.

If the JWT signing secret is cracked, the system using JWTs is also compromised.
It is is therefore important to have many bits of entropy when generating a
signing secret.
