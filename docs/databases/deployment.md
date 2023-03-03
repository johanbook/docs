# Deployment

**Database deployment** needs some different considerations than
[deployment](../devops/deployment/README.md) of other applications as databases
need access to read- and writable memory, which can be challenging when scaling
horizontally.

## Sharding

**Sharding** is a database architecture where data is divided into multiple
different shards (table are split using horizontal partitions) in order to
support horizontal scaling. Each shard is typically run its own machine, meaning
if one machine goes down, only parts of the data are exposed.

A sharded database architecture can be implemented by routing users to different
shards based on some deterministic condition, such as first letter of their last
name.

One risk of using sharded databases, apart from being more challenging to work
with, is that the shards may become unbalanced.

It is difficult to go from a shareded architecture to unsharded one.
