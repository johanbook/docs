# HTTP

HTTP (Hyper Text Transport Protocol) is a network protocol for transferring
hypertext over [TCP](tcp). Hypertext itself is text containing hyperlinks, or
simply links, that link to other content, typically using the URI scheme. The
protocol is both stateless and response-request based. All responses and
requests are encoded in the TCP body. An HTTP connection is established on top
of TCP and an HTTP status code is recieved, e.g. `HTTP/1.1 200 OK`. HTTP itself
is a stateless protocol (which suits well with REST).

An example request can look like this

```
GET /
HTTP/1.1
Host: www.example.com
where on the answer could be

HTTP/1.1 200 OK
Date: Mon, 23 May 2005 22:38:34 GMT
Content-Type: text/html;
charset=UTF-8
Content-Length: 155
Last-Modified: Wed, 08 Jan 2003 23:11:55
GMTServer: Apache/1.3.3.7 (Unix) (Red-Hat/Linux)
ETag:"3f80f-1b6-3e1cb03b"
Accept-Ranges: bytes
Connection: close
<html>
  <head>
    <title>An Example Page</title>
  </head>
  <body>
    <p>
      Hello World, this is a very simple HTML document.
    </p>
  </body>
</html>
```

The HTML content are typically gzipped.

## Methods

- **DELETE** Delete a resource.
- **GET** Get a resource.
- **HEAD** Get oresource headers only. Useful to e.g. validate a cached resource.
- **PATCH** Modify a resource.
- **POST** Create a resource.
- **PUT** Replace a resource.

Some less common ones

- **CONNECT**
- **OPTIONS**
- **TRACE**

## HTTPS

HTTPS is an encrypted variant of HTTP.
