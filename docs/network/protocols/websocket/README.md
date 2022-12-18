# WebSocket

**WebSocket** is a [TCP](../tcp.md) protocol, which in contrast to
[HTTP](../http/README.md) is bidirectional.

## HTTP Handshake

To upgrade to WebSocket from a HTTP connection, there is a HTTP connection as
follows:

```txt
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
Origin: http://example.com
```

and

```txt
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: HSmrc0sMlYUkAGmm5OPpG2HaGWk=
Sec-WebSocket-Protocol: chat
```
