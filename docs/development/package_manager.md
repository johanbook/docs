# Package manager

A **package manager** is a tool for installing software, typically from an
external repository. Most Unix systems and programming languages offer a native
package manager. For example, Python has `pip`, Nodejs has `npm` and Ubuntu has
`apt`. As most software projects use some form of external packages, a package
manager is facilities one's workflow.

## Dependency declaration

A package manager typically declares dependencies in some configuration file,
which may or may not support wildcard-like syntax. For example, a `npm`
dependency declaration might look like

```json
{
  "name": "node-web-crawler",
  "version": "1.0.0",
  "description": "",
  "dependencies": {
    "@types/uuid": "^8.3.1",
    "chalk": "^4.1.0",
    "commander": "^6.2.0",
    "jsdom": "^16.4.0",
    "node-fetch": "^2.6.1",
    "uuid": "^8.3.1"
  }
}
```

Some package managers support declaring dependencies by type, commonly as
development dependencies and production dependencies.

## Global dependencies

A **global dependency** is package that exists system-wide, which is in contrast
to a project dependency that only should be accessible from within the project.
It is important that project dependencies are installed as project dependencies
and not global dependencies in order to avoid version conflicts (and to allow
reproducibility).

Examples of suitable candidates for global dependencies are system tools and
project scaffolding tools.

## Lock files

A **lock file** is a file used maintained by a package manager that tracks exact
package version, hash and implicit dependencies, which might be things that are
inferred by the package manager. A lock file is crucial for guaranteeing
reproducibility and dependency integrity. If the package manager allows any
wildcard-like syntax in the package declaration, then a lock file is a
requirement.
