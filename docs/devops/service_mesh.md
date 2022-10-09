# Service mesh

A **Service Mesh** is an infrastructure layer that is responsible for service
discovery and which services as are allowed to communicate with each other. This
is crucial in micro-service architectures.

A service mesh often offers some form of name resolution in queries, alleviating
individual services needing to know the IP addresses of other services.

## Sidecars

Containers are often accompanied by **sidecars**.

## Other

A service mesh can enable e.g. [mTLS](../network/protocols/tls/README.md#mtls)
without needing any implementation in the application itself.
