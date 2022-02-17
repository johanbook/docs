# Servers

There are different technologies that web servers use.

## Pre-fork worker

Server spins up workers as their own processes. Pre-fork means that this is done
in-before hand. This suits non-thread safe frameworks.

## Threads

One can run different threads that handle incoming load.

## Async

One can use an [asynchronous event loop](../programming/asynchronicity).
