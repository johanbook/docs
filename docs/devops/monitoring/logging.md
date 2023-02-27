# Logging

**Logging** is crucial to understand and debug system behavior. A logging system
can be divided into several different components discussed below.

## Log aggregator

The log aggregator consolidates, indexes and stores logs. It typically receives
logs from multiple different input streams. The log aggregator often uses a time
series database.

## Visualizer

The visualizer is a UI for querying logs from the aggregator.

## Scraper

The scraper is responsible for transmitting logs from the application to the log
aggregator. How this is done depends on the underlying system. In a
[Docker](../docker) microservice architecture one typically logs to STDOUT and
STDERR which is captured and forwarded to the aggregator by a Docker plugin.

## Logging best practices

Avoid logging sensative data (see GDPR).

## Log levels

Common log levels are:

- **Trace** is common events.
- **Debug** is information that potentially could be useful when debugging the
  system
- **Info** is valuable information.
- **Warn** is someting that might be an issue but is not a problem for the
  system.
- **Error** is a specific system functinality that does not work. Should be
  investigated but not neccesarily right away.
- **Fatal / Critical** is a major error that prevents the system from working.
  Should be investigated as soon as possible.

Trace and debug is often something that is activated on demand.
