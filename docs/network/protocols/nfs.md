# NFS

**Network File System** (**NFS**) is a protocol for mounting file systems over a
network. It is typically run on port 2049. They can be used for e.g. storage
synchronization in distributed systems.

## Enumeration

The shares in a NFS service can be enumerated using `showmount`.

## Mounting

You can mount a NFS share using

```sh
sudo mount -t nfs <IP>:<SHARE> <MOUNT_POINT>
```

## Best practices

- NFS shares should be hosted on a separate disc or partition to not affect the
  host system. Otherwise an attacker can flood the system with uploads which
  might disrupt or bring it down.
