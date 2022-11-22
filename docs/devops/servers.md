# Servers

A **server** is a service that listens and reacts to incoming requests, as part
of the client-server paradigm. This page will discuss the different approaches
for underlying technologies for a server.

## Pre-fork worker

Server spins up workers as their own processes. Pre-fork means that this is done
in-before hand. This suits non-thread safe frameworks.

## Threads

A threaded server will spin up several threads to handle incoming requests. This
is suitable for thread-safe languages.

## Event loop

An event loop-based server run using an
[asynchronous event loop](../programming/asynchronicity). This approach
typically scales well for handling non-blocking requests.
