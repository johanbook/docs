# cURL

**cURL** is a tool for sending e.g.
[HTTP](../../network/protocols/http/README.md) requests from within a shell.

## POST with payload

To send a [JSON](../../programming/data_formats/json.md) payload

```sh
curl -X POST localhost
   -H "Content-Type: application/json"
   -d '{"productId": 123456, "quantity": 100}'
```
