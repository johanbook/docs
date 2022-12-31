# cURL

**cURL** is a tool for sending network requests from within a shell. It supports
e.g. [HTTP](../../network/protocols/http/README.md),
[FTP](../../network/protocols/ftp.md) and [SMB](../../network/protocols/smb.md).

## HTTP POST with text payload

To send a [JSON](../../programming/data_formats/json.md) payload

```sh
curl -X POST localhost
   -H "Content-Type: application/json"
   -d '{"productId": 123456, "quantity": 100}'
```

## HTTP POST with binary payload

To send a binary payload (using HTTP multipart form data encoding)

```sh
curl -X POST localhost
   -F file=@my-file
```
