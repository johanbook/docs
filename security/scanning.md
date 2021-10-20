# Scanning

I will here show some examples of how to use the tool `nmap` to scan networks
and hosts.

## Local network router IP

To scan a local network we first need to find the network IP. Use `route -n` to
find your router. It is the gateway with a destination of `0.0.0.0`.
Alternatively, one can the IP one's own computer with `ip addr`.

## Ping scans

You can begin by a ping scan, also known as a ping sweep, to find the active IP
addresses in the network.

```sh
nmap -sn <target>
```

This will perform a ICMP ping sweep.

## Scanning ports

Given an IP we scan its ports and what they are running using
`nmap -sV <target>`. Add `-O` for OS detection.

NB: Mobile devices typically do not expose any ports.
