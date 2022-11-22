# URL

A **Uniform Resource Locator** (**URL**) is an address to some resource. It also
includes information on how that resource should be accessed (via its protocol).

## Anatomy of a URL

The URL `http://localhost:8080/alpha?bravo=charlie#delta` consists of the
following parts;

- **schema** (`http`), also known as protocol. It specifies what protocol should
  be used to access the resource. Some common examples are
  [HTTP](./protocols/http/README.md) and [SSH](./protocols/ssh.md).
- **host** (`localhost`), also known as hostname. In terms of
  [DNS](../network/protocols/dns.md), this corresponds to the domain.
- **port** (`8080`), the port the resource can be found at. If omitted the
  protocol default port is used.
- **path** (`/alpha`) path to the resource.
- **query** (`?bravo=charlie`) is key-value pairs data. There is no agreed on
  standard on how exactly the data should be represented (especially for nested
  values). It is typically
  [percent encoded](../programming/encodings.md#percent-encoding).
- **fragment** (`#delta`) adds additional information about the resource. When
  the resource is a [HTML](../programming/data_formats/html.md) document, the
  fragment can correspond to a section shown on the page.

There are some additional terms

- **netloc** (`localhost:8080`), the hostname and port. This is also sometimes
  sloppily called host. It can also be called authority.
