# bluetoothctl

**bluetoothctl** is a tool for interacting with
[bluetooth](../../network/protocols/bluetooth.md) devices.

## Enabling Bluetooth

Begin by starting the bluetooth service. For [systemd](./systemd.md), this can
be done as

```sh
sudo systemctl start bluetooth.service
```

Further, check `rfkill` to make sure bluetooth is not blocked.

Lastly, enter a bluetoothctl shell and run

```sh
power on
agent on
```

## Pairing a device

Enter a bluetoothctl shell and

1. Run `scan on` to start scanning for devices
2. Run `pair <id>` when device is identified

## Connecting to a paired device

To connect to a paired device, enter a bluetoothctl shell by executing
`bluetoothctl` and run

```sh
connect <id>
```
