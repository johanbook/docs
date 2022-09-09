# Systemd

**Systemd** is an init system for Linux. An example service configuration looks
like this

```sh
[Unit]
Description=My program

[Service]
type=forking
ExecStart=/usr/bin/python /home/guest/my-program.py

[Install]
WantedBy=multi-user.target
```
