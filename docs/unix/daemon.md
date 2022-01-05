# Daemon

**Daemon** is a process running in the background, not expecting interaction.
Daemon processes traditionally has the suffix `d`. Daemons often has the
[init process](./processes) as parent (which can be accomplished via adopting).
For example, the [Docker](../devops/docker) daemon is called `dockerd`.
