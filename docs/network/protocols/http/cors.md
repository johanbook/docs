# CORS

**Cross Origins Resource Sharing** (**CORS**) is a policy that cross origin
requests are blocked by the web browser unless the server explicitly allows the
origin in a `Access-Control-Allow Origin` header. This is a security feature as
the browser can not trust that requests from scripts are intended by the user
(and many such requests would also by authenticated due to cookie being sent
along with the request).

A server can allow CORS from all origins by adding this header to its responses:

```txt
Access-Control-Allow-Origin: *
```

## Preflight

For some CORS requests, a preflight request is sent using the `OPTIONS` ver with
the `Access-Control-Request-Method`, `Access-Control-Request-Headers`, and
`Origin` headers.

One can test a preflight request using curl

```sh
 curl -X OPTIONS -H "Origin: <ORIGIN>" <URL>
```
