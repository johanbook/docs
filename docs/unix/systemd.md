# Systemd

**Systemd** is an init system for Linux. An example service configuration looks
like this

```sh
[Unit]
Description=Prometheus exporter for Sensehat

[Service]
type=forking
ExecStart=/usr/bin/python /home/book/sensehat-prometheus-explorer/server.py

[Install]
WantedBy=multi-user.target
```
