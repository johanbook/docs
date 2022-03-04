# TCP

**Transmission Control Protocol** (**TCP**), also known as TCP/IP, is a protocol
built on top of the [IP protocol](./ip) that supports bidirectional
communication (in contrast to [UDP](./udp)). It guarantees that data arrives in
order.

## Sequence numbers

Each transmitted package has a sequence number in its package header, allowing
the receiver to rearrange the received packages in their original order. This
sequence number also serves as an identifier for an open connection from a given
IP, considering a single IP can have multiple connections. To establish a
connection both parties must know each other's Initial Sequence Number (ISN) for
the connection. This is established by the three-way handshake.

## The three-way handshake

To establish a TCP connection both parties need ISNs. This is accomplished in
three steps

1. The client sends a synchronization request (SYN) containing an ISN.
2. The host answers with a combined message, an acknowledgement of the received
   SYN request (an ACK) and a SYN request with its own ISN.
3. Client answers with an ACK when the remote's SYN is received.

## Windowing

TCP was developed with post-world war scenarios in mind. It builds on the
assumption that network nodes may be flaky at best. Therefore, the number of
packages sent during a communication usually starts as 1, and then increases
exponentially if every transmission if successful. If a transmission fails, it
resets back to 1.

## Utils

On Linux one can monitor TCP traffic on an interface using the `tcpdump` tool.
