# SSH

**Secure SHell** (**SSH**) is a cryptographic [TCP](./tcp) shell typically
running on port 22. SSH relies on
[public key encryption](../../security/cryptography/encryption), where RSA is
common.

## Configuring SSH client

Generate a private public key pair using (assuming you have `openssh` installed)

```sh
ssh-keygen -C "my-comment"
```

Upload the public key (the one with the `.pub` extension). Create a
`~/.ssh/config` file and add

```sh
Host <name>
  HostName <hostname>
  IdentityFile <path-private-key>
```

## Configuring SSH server

Install a SSH server, such as `OpenSSH`. The service should be enabled and
started. The daemon settings are usually stored in `/etc/ssh/sshd_config`.

## Best practices

- Run SSH on a non-default high-numbered port to avoid automatic scans and
  exploits.
- Set a key phrase for your SSH keys in case they keys are compromised.
