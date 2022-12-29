# SMB

**Server Message Block** (**SMB**) is a [TCP](./tcp) protocol for sharing
resources over a network, such as files or printer devices. By default, it runs
on ports 139 and 445. SMB uses a client-server model and allows for exposing
shares on a system, similar to [FTP](./ftp.md).

SMB is widely is shipped as part of the Windows OS and can be used for
Windows/Unix interaction. One can natively expose a folder on a given network on
a Windows system.

## Security

SMB is a main attack vector for intrusion attempts.

## Enumeration

For enumeration one can use the `enum4linux` or `smbmap` tools.

```sh
enum4linux -a <ip>
```

## Connecting to a SMB share

To connect to a SMB share one can use e.g. the `smbclient` tool.
