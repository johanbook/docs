# Docker Swarm

:::danger

Docker swarm has been deprecated and should not be used for new projects

:::

**Docker swarm** allows one run a swarm of Docker containers. It is similar to
Docker compose, but more suitable to deployment as it features
[orchestration](./README.md) and cluster management. It is not as full-fledged
(and as complicated) as Kubernetes.

## Logging

[Logs](../monitoring/logging/README.md) are sent to the daemon log (Docker logs)
and container logs (logs from the containers).
