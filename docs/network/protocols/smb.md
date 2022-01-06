# SMB

**Server Message Block** (**SMB**) is a [TCP](./tcp) protocol for interacting
with shared network resources, such as printers. One common software for using
SMB is Samba.

## Enumeration

For enumeration one can use the `enum4linux` or `smbmap` tools.

```sh
enum4linux -a <ip>
```

For connection one can use `smbclient`.
