# Networking

This document will outline some relevant info for networking in Linux.

## Hosts

The file `/etc/hosts` contains name resolutions used instead of query the local
name server. This file can look like

```sh
127.0.0.1	localhost
::1		localhost
```

## DNS

The DNS name server is set in `/etc/resolv.conf`. This is typically the default
gateway. The file might look like

```sh
search dance.com everybody.dance.com
options ndots:1
nameserver 192.168.0.1
```

The `search` directive will trigger lookups for a query `<query>.dance.com` and
`<query>.everybody.dance.com`. The `ndots` directive indicates that a query
should be tested without search options if having more dots than 1 otherwise
search directive is applied first.

## Interfaces

The system will have different network interface, for example a loopback
configured on 127.0.0.1. The various interface can be seen by running
`ip link show`.
