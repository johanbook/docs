# Permissions and ownerships

Every file on a Linux system belongs to a user and a group. Different
permissions are applied to the owning user, the owning group and everyone else.
This wiki will explain what permissions and ownerships are applied and how to
change them.

## Ownership

A file or a directory has an owner and a group. These can be changed through

```sh
chown <user>:<group> <file
```

## Permissions

The permissions in Linux is done on a user, group and other basis. Each of these
has permissions for read, write and execute. These can be seen using `ls`.

```sh
> ls -l
drwxr-xr-x 2 book book 40 Nov 29 21:42 directory
-rw-r--r-- 1 book book  0 Nov 29 21:42 file
```

One can change these permissions using the `chmod` tool. For example, to make it
readable by only the current user use

```sh
chmod 400 <file>
```

Where

- **0** is no permission
- **1** is execute (`x`)
- **2** is write (`w`)
- **4** is read (`r`)

One can also use `chmod` in symbolic mode. There is user (`u`), group (`g`),
other (`o`) and all (`a`).

```sh
chmod o-rw+x,u+x myfile
```

## Special permissions

There are some special permissions called SUID, SGID and the sticky bit. The
SUID bit signals that a file should be executed with the permissions of the
owner. The SGID bit is the equivalent but on a group level. The sticky bit (`t`)
signals that files may only be deleted by root or owner.
