# journalctl

**journalctl** is a journaling system that is part of [systemd](./systemd.md).

## Follow logs

To follow logs from a unit do

```sh
journalctl -fu <unit>
```

## Only logs for current boot

To show logs for current boot run

```sh
journalctl -b
```
