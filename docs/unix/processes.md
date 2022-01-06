# Processes

In Unix there is a concept of **processes**. All processes have one parent
except for the top-most process (aka the **init process**).

You can view all processes by running

```sh
ps -ef
```

## Process adoption

If a process terminates, then its children are adopted by its parent.
