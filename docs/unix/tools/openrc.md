# OpenRC

**OpenRC** is an alternative init system to [systemd](./systemd.md).

## rc-service

To add a new service

```sh
rc-update add docker
```

To check that it is enabled run

```sh
rc-status
```

## Restarting a service

To restart eg the [ssh](../../network/protocols/ssh.md) daemon run

```sh
service sshd restart
```
