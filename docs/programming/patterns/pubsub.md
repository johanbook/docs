# Pub/Sub

The **Publish–subscribe pattern** (**Pub/Sub**) is a architectural microservice
pattern where instead of having two components depend on each other one uses a
message queue that the components that publish and subscribe to.

## Dead letter exchange

If a message outlives its TTL, queue is full etc, it will end up in the dead
letter exchange.
