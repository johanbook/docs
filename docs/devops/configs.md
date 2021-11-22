# Configuration

All software needs some form of configuration. Configurations can be divided
into static configurations and dynamic ones.

## Static configuration

Static configuration are those that are hardcoded / embedded into an
application. They are safer but have longer turn-around. They are typically also
covered by tests.

## Dynamic configuration

Dynamic configurations on the other hand are typically set in an application
runtime. This means that the configurations might not be covered by test and
faulty configurations might bring down the application.
