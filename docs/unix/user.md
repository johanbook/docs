# Users and groups

Linux systems use **users** and **groups** to handle
[IAM](../security/authentication-and-authorization/iam.md).

## Management using CLI

The easiest (and recommended) way of managing users and groups is via the CLI.
For example, a new user can be created using

```sh
sudo useradd --create-home <name>
sudo passwd <name>
```

Use `userdel` for deleting an account.

## Config files

All users are stored in `/etc/passwd`, which might look something like

```sh
root:x:0:0::/root:/bin/bash
bin:x:1:1::/:/usr/bin/nologin
daemon:x:2:2::/:/usr/bin/nologin
...
```

However, the hashed passwords are stored in `/etc/shadow`.

Groups are stored in `/etc/group`.
