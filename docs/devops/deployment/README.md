# Deployment

**Deployment** is when the source code of an application (and sometimes its
[configurations](../configuration/README.md)) are deployed to server.

Once an application is ready for production it is time for deployment. First we
need to consider if we need an active server or we are interested in deploying
only static files (which would be the case when deploying a webpage).

There are different deployment strategies, but here is an overview of a few
different ones.

## Linux server

The old school hosting option is to roll your own Linux server. This gives you
full control but requires you to manually perform maintenance such as security
updates. It is not playing as nicely with [CI/CD](../ci_cd) as e.g. Cloud
Foundry.

## Cloud foundry

**Cloud Foundry** is a technology for building and deploying apps directly from
source code. A Cloud Foundry service analyzes your code to see what language it
is and then employs a suiting buildpack (a script for compiling the app). It
then configures the app, does some health checks and deploys it.

## Docker Swarm

:::danger

Docker swarm has been deprecated and should not be used for new projects

:::

**Docker swarm** allows one run a swarm of Docker containers. It is similar to
Docker compose, but more suitable to deployment as it features
[orchestration](../orchestration) and cluster management. It is not as
full-fledged (and as complicated) as Kubernetes.

### Logging

Logs are sent to the daemon log (Docker logs) and container logs (logs from the
containers).

## Kubernetes

[Kubernetes](../orchestration/kubernetes/README.md) is a technology mainly for
deploying Docker images and does load balancing, handling worker nodes and all
for you.

## Serverless

**Serverless** means that one has no specific dedicated server but rather a pool
of resources. A task is handled as a job that is queued and given to a machine
once available. This adds a risk for overhead but one only pays for the actual
usage. It's also more scalable.
