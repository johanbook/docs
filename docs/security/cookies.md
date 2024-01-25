# Cookies

**Cookies** are pieces of data stored in web browser and forwarded with each
request when visiting a web site for a given domain. Some attributes of cookies
are

- **HttpOnly** meaning the cookie cannot be read by JavaScript in the browser.
- **SameSite** no CORS.
- **Secure** the cookie is only transmitted over HTTPS.

## Tracking cookies

One special type of cookies is third party cookies, also known as tracking
cookies. There are cookies delivered to a website from another domain through an
iframe (or image). This allows the third party to create a browser-persistent ID
which allows tracking of the user.

Tracking cookies will be phased out during 2024.
