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
