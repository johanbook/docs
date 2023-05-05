# Configuration

All software needs some form of configuration. Configurations can be divided
into static configurations and dynamic ones.

## Types

### Static configuration

Static configuration are those that are hardcoded / embedded into an
application. They are safer but have longer turn-around. They are typically also
covered by tests.

### Dynamic configuration

Dynamic configurations on the other hand are typically set at application
runtime. This means that the configurations might not be covered by test and
faulty configurations might bring the application down.

## Providers

There are multiple types of configuration providers, such as
[vaults](./secrets.md) or environmental variables.

## Concerns

When deciding on how configurations are used one need to look at the functional
requirements of the system, i.e. what is the target uptime and how long should
it take for a configuration change to be deployed.
