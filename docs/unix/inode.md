# Inode

**Inodes** (believed to come from **index nodes**) is a data structure used to
map file and directories of a system to its physical hard drive. A Unix system
has a table of inodes where every node has a unique inode number. Each inode
contains metadata about a file or directory, including block address and size,
[permissions](./permissions) and timestamps.

The number of free inodes in a directory can be inspected using `df`

```sh
> df -i <target>
Filesystem       Inodes   IUsed    IFree IUse% Mounted on
/dev/nvme0n1p3 61300736 6611276 54689460   11% /
```

One can also the see inode numbers using `ls` by setting the `-i` flag and find
files via inode number (`find -inum <inode number>`).

## Hard links

A hard link is a pointer to an inode. This means that the link is still valid
even if the target is moved or renamed. This is in contrast to soft links.
