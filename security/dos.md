# Denial of service

DoS (Denial of Service). A target is flooded with requests, causing it either
slow down answering legitimate requests or going down completely. These attacks
can be both fast and slow.

## DDos

Multiple computers simultaneously DoS a target. Often used with bot nets.

## ADos

There also ADoS (Amplified Denial of Service) attacks where one uses a server to
amplify the attack.

## Slow Loris

The Slow Loris attack attempts to keep a HTTP connection open with a server. It
does this by sending a HTTP request but omitting the carriage return indicating
the end of the request. Then the attacker periodically sends additional data in
the same connection such that the server never closes it.

This is especially severe in synchronous server where a new thread is opened for
each concurrent connection.
