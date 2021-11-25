# SMB

**Server Message Block** (**SMB**) is a protocol that can be used for e.g.
printers. One common software for using SMB is Samba.

## Enumeration

For enumeration one can use the `enum4linux` or `smbmap` tools.

```sh
enum4linux -a <ip>
```

For connection one can use `smbclient`.
