# CSRF

CSRF (Cross Site Request Forgery) is an attack where one website sends requests
as if where another site. This is especially a problem if authenticated is
handled by cookies. Assume there is a site serving the following HTML;

```html
<body onload="document.forms[0].submit()">
  <form action="the-victim.com/do-stuff" method="POST">
    <input type="submit" value="View cats" />
  </form>
</body>
```

When a user visits this page, he is directed to `the-victim.com/do-stuff` with a
`POST` request in where the browser also adds the cookies of that site.

This can be mitigated by introducing a CSRF token, which is randomized every
time the site is served. This token must then be verified before the action is
executed.
