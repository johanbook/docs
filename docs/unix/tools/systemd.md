# Systemd

**Systemd** is a suite of tools, including an init system, for Linux. A service
can be started using

```sh
systemctl start bluetooth.service
```

## Configuring a unit

An example service configuration looks like this

```sh
[Unit]
Description=My program

[Service]
type=forking
ExecStart=/usr/bin/python /home/guest/my-program.py

[Install]
WantedBy=multi-user.target
```
