# dhcpcd

**DHCPC Daemon** (**dhcpcd**) is a Linux [daemon](../daemon.md) for handling
[DHCPC](../../network/protocols/dhcp.md) queries. The configurations of the
daemon are typically found in `/etc/dhcpcd`.

## Static IP

To request a static IP with dhcpcd, use the following configuration:

```sh
interface <INTERFACE>
static ip_address=<CIDR_IP_ADDRESS>
static routers=<IP_ADDRESS>
static domain_name_servers=<NAME_SERVER>
```

## resolvconf

To see the current nameserver on a system using resolvconf, do
`cat /etc/resolv.conf`.
