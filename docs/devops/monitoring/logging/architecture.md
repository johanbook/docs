# Logging architecture

**Logging architecture** is typically tightly integrated into the infrastructure
of a software system. However, here we will discuss some general components.

## Log aggregator

The log aggregator consolidates, indexes and stores logs. It typically receives
logs from multiple different input streams. The log aggregator often uses a time
series database.

## Visualizer

The visualizer is a UI for querying logs from the aggregator. They typically
supports some form of bespoke query language for the log aggregator.

## Scraper

The scraper is responsible for transmitting logs from the application to the log
aggregator. How this is done depends on the underlying system. In a
[Docker](../../docker.md) microservice architecture one typically logs to STDOUT
and STDERR which is captured and forwarded to the aggregator by a Docker plugin.
