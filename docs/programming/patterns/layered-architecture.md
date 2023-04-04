# Layered architecture

**Layered architecture** is a design pattern to achieve separation of concerns.
The code functionality is divided into several separate layers, such as domain,
application, client and infrastructure.

The standard layers are the following

- **Application layer** exposes the business layer to the presentation layer. In
  [CQRS](./cqsr.md), this is where command and query handlers would be
  implemented.
- **Business layer** contains the domain/business logic.
- **Data access layer**, or **persistence layer**, is responsible for
  communication with the database. It also handles communication with external
  services.
- **Presentation layer** is the layer responsible for communicating with the end
  system. For a REST API, this would correspond to the HTTP controllers.

  The dependencies of the layer can be showed as:

  ```mermaid
  flowchart TD
    A[Presentation] -->B
    B[Application]-->C
    C[Business]-->D[Data access]
  ```
