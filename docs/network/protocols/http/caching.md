# HTTP Caching

The [HTTP](./README.md) caching functionality works by using the following
headers:

- [ETags](./etag.md)
- `Cache-Control` header
- `Last-Modified` header

All HTTP calls a browser makes are first checked against the browser's cache to
see if there is a valid response. If found the response is returned and the
request is never carried out over the network.
