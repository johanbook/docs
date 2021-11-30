# FIFO

A **First In First Out Special File** (**FIFO**) is a named pipe. They can be
accessed as part of the filesystem. For example,

```sh
mkfifo my-pipe
ls > my-pipe
```

Open another terminal in the same directory and do `cat < my-pipe` and voila the
content is piped between the terminals. They also show up using `ls`.
