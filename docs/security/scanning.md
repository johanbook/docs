# Scanning

This document will discuss different scanning techniques and demonstrate how to
perform them using the tool `nmap`.

## Local network IP address

To scan a network one need its IP address. To find the address of the local
network, one can use `route -n` to find the router. It is the gateway with a
destination of `0.0.0.0`. Alternatively, one can see the address of one's own
computer with `ip addr`.

## Ping sweeps

One quick way of finding active devices on a network is through a
[ICMP](/docs/network/icmp) ping sweep. This will send an ICMP package to each
assignable IP address in a given network. According to RFC every device must
respond to ICMP, meaning that one has efficient way of detecting devices.
However, some devices (e.g. Microsoft Windows hosts) do not respond to ICMP
making them impossible to detect through such a ping sweep.

The command for running a ping sweep with `nmap` is

```sh
nmap -sn <target>
```

## Port scans

In order to find active services on a host one can run a port scan. One
typically attempts to complete a TCP handshake with each port of interest. Since
closed ports must respond with the TCP `RST` flag this gives reliable
information on port status. If there is no response there is likely some
firewall that filters incoming traffic.

Here are some different TCP scanning techniques

- **ACK** Complete TCP handshake.
- **SYN** Initiate TCP handshake but send `RST` instead of `ACK` as response to
  `SYN-ACK`.

These scan types does not initiate with a `SYN` but that still assumes the
connection is reset if the port is closed. The purpose of the different scans
are IDS and firewall detection.

- **Null** Send a package without any flags at all.
- **Fin** Set the `FIN` flag meaning the transmission is finished.
- **Xmas** Sends a deformed data package.

We can run a TCP (ACK) port scan with service fingerprinting using

```sh
nmap -sV <target>
```

NB: Mobile devices typically do not expose any ports.

[UDP](/docs/network/udp) port scans are more difficult since there is no
expected response from an open port, making it impossible to differentiate
between an open port and a filtered one.
