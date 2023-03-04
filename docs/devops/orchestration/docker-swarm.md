# Docker Swarm

:::danger

Docker swarm has been deprecated and should not be used for new projects

:::

**Docker swarm** is a distributed orchestration tool for
[Docker](../containerization/docker.md), similar to
[Docker compose](./docker-compose.md), but more suitable for production
deployments as it features cluster management. It is not as full-fledged as
Kubernetes.

## Logging

[Logs](../monitoring/logging/README.md) for Docker swarm itself is sent to the
system log and can be viewed with standard tools (e.g.
[journalctl](../../unix/tools/journalctl.md).

Log to STDOUT/STDERR from the containers are contained in the Docker log.
