# scp

**secure copy** (**scp**) is a tool for copying files over
[SSH](../../network/protocols/ssh.md) which is available in most Linux systems.

To copy a file to a remote destination, give `scp` a local file and a remote
[URL](../../network/url.md) like so:

```sh
scp <file> <user>@<host>:<path>
```
