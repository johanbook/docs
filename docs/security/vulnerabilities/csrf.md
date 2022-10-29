# CSRF

**Cross Site Request Forgery** (**CSRF** or **XSRF**) is an attack where one
website sends requests as if where another site. This is especially a problem if
authentication is handled by cookies.

## Example

Consider the following [HTML](../../programming/data_formats/html.md):

```html
<body onload="document.forms[0].submit()">
  <form action="the-victim.com/do-stuff" method="POST">
    <input type="submit" value="View cats" />
  </form>
</body>
```

When a user visits this page, he is directed to `the-victim.com/do-stuff` with a
`POST` request in where the browser also adds the cookies of that site.

The attacker's site can also be embedded in an iframe on another site with the
same effect.

## Countermeasures

### Anti-CSRF Tokens

This can be mitigated by introducing a CSRF token, which is randomized every
time the site is served. This token must then be verified before the action is
executed.

Anti-CSRF tokens are mainly meant for server-side render sites, and is more
difficult to apply to a client-rendered SPA. However, one can instead transmit
it in a custom HTTP header.

### SameSite cookies

By using the `SameSite` attribute in authentication cookies it impedes these
attacks as cookies are not included CORS requests.
