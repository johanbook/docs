# Docker compose

**Docker compose** is an orchestration tool for
[Docker](../containerization/docker.md). The desired services and their state
are specified in a manifest often named `docker-compose.yaml`, for example

```yaml
version: "3.9"

services:
  traefik:
  minio:
    image: "minio/minio"
    command:
      - "server"
      - "/data"
      - "--console-address"
      - ":9001"
```

The stack is started by running `docker-compose up` in the same folder as the
manifest.
