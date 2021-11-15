# ETag

An **ETag** (or **Entity Tag**) is a HTTP header used with caching. If a HTTP
resource changes its ETag should also change.

## Weak ETags

Weak Etags has a `W/` prefix and can be used to guarantee that two resources are
semantically the same. This is in contrast to strong ETags that can be used for
byte-per-byte guarantees.
