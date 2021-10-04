# SSH

**SSH** (Secure SHell) is shell that is run over TCP.

## Configuring SSH

Generate a private public key pair using (assuming you have `openssh` installed)

```sh
ssh-keygen -C "my-comment"
```

Upload the public key (the one with the `.pub` extension). Create a
`~/.ssh/config` file and add

```sh
Host <host>
  IdentityFile <path-private-key>
```
