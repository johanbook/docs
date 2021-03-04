# Web authentication

For authentication and authorization in general, see
[this document](auth_flows).

Let us consider authentication for a web application. It can either be stateful
(with cookies and server-side sessions) or stateless (using [JWT](jwt), OAuth or
similar).

## Cookie-based

- Does not work if cookies is disabled
- CORS issues

If one is running multiple web servers, one will need a sticky session.

## Token-based

Decouples backend and frontend. Often requires that JavaScript is enabled.

### Stateful

One can have a stateful token-based approach.

## Additional measures

If using a session-based approach, one can store IP and confirm that it matches.
