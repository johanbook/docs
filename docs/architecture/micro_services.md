# Microservices architecture

A **microservices architecture** is a style of architecture for a software
system where an application is split into multiple independent services, each
having its separate deployable. This is in contrast to the traditional monolith.

A microservice architecture offers several advantages:

- Services can be developed independently. This also means services can use the
  programming language that suits their task best instead of being confined to
  one overarching language.
- Individual services can be scaled as needed instead of needing to scale the
  whole application.

However, it also introduces some drawbacks

- Higher complexity in setting up and maintaining infrastructure and devops.
- Inter-service calls are more expensive than local procedure calls which are
  used in a monolith.

## Common types of micro-services

Some common types of microservices are the following:

- **Backend**
- **Cache**
- **Database** which adds a shared persistence layer. See
  [types of databases](../databases/types_of_databases.md).
- **Frontend** a UI application. It is often bundled with a file server.
- **Gateway** which handles e.g. system wide ingress and egress.
- **Search indexer** which indexes database entities to speed up e.g. text
  search queries.
