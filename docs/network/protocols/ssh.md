# SSH

**Secure SHell** (**SSH**) is a cryptographic [TCP](./tcp) shell, commonly
running on port 22. SSH relies on
[public key encryption](../../security/cryptography/encryption), where RSA is
common. It is used for running secure shells on remote machines.

## Configuring a SSH client

:::info

This info relies on the `openssh` implementation.

:::

Start by generating a key pair. This can be done using

```sh
ssh-keygen -C "my-comment"
```

This creates a public key in `~/.ssh/id_rsa` unless specified otherwise. The
content of this file should be uploaded to the target server.

If having multiple keys or non-standard names, a SSH config is needed. This file
resides in `~/.ssh/config` (create it if it does not exist). The file should
consist of multiple entries of the form:

```sh
Host <name>
  HostName <hostname>
  IdentityFile <path-private-key>
```

## Configuring a SSH server

:::info

This info relies on the `openssh` implementation.

:::

Install a SSH server, such as `OpenSSH`. The service should be enabled and
started.

### Server configurations

The server settings are usually stored in `/etc/ssh/sshd_config`. One example
configuration

```conf
Port <PORT>
PasswordAuthentication no
AllowUsers <USER>
```

### Authorized keys

Public keys need to be added manually in the file
`/home/<USER>/.ssh/authorized_keys`.

## Best practices

- Run SSH on a non-default high-numbered port to avoid automatic scans and
  exploits.
- Set a key phrase for your SSH keys in case they keys are compromised.
