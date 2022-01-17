# Random numbers

**Random numbers** are vital to cryptography in order to create unguessable
keys. Creating cryptographically secure random numbers however is a difficult.

## PRNG

**Pseudorandom Number Generators** (**PRNG**s) are generators that produce
numbers that seem random but are not. A PRNG produces the same sequence of
pseudorandom numbers given the same input data (which is called a _seed_). PRGNs
are useful in systems where both randomness and reproducibility are needed, such
as e.g. for software tests, simulations and procedural generation in games.

A common type of PRNGs are Linear Congruent Generators (LCG). They are defined
by

$$
x_{n+1} = ax_n + k \; \mathrm{mod}\; n
$$

where $x_0$ is the seed.

There are cryptographically secure PRNGs.

## True Random Numbers

Numbers that are truly random can be generated using hardware. One approach is
to rely on quantum phenomena.
