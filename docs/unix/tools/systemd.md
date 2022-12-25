# Systemd

**Systemd** is a suite of tools, including an init system, for Linux. The
systemd ecosystem builds on the concept of units. To see the system units, run
`systemctl status`.

A service can be started using

```sh
systemctl start bluetooth.service
```

## Enabling a service on system startup

To enable a service on system startup, run

```sh
systemctl enable bluetooth.service
```

## Configuring a unit

One can easily configure one's own systemd units. Create a new file
`my-service.service` in `/etc/systemd/system` containing the following TOML-like
configurations:

```toml
[Unit]
Description=My program

[Service]
Type=forking
ExecStart=/usr/bin/python /home/guest/my-program.py
WorkingDirectory=/srv/www/

[Install]
WantedBy=multi-user.target
```

There available types are `simple`, `exec`, `forking`, `oneshot`, `dbus`,
`notify` and `idle`.

To see logs for your unit, use [journalctl](./journalctl.md) like
`journalctl -u my-service.service`.
