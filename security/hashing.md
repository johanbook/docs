# Hashing

A hash function is a function `f: A -> B` which is one-to-one and creates a
chaotic system There are several types of hashing algorithms, each suitable for
different use-cases. For example, for checking a password hash one would want a
slow and cryptographically secure algorithm while a faster one can be used for
e.g. checksums.

One can increase work factor if computational hardware improves.

## SHA

Secuare Hashing Algorithm (SHA) is a set of hasing algorithms.

### SHA1

SHA1 is not considered secure.

### SHA512

Also known as `sha512crypt`. Is default for mos Linux systems.

## MD

### MD5

MD5 is not considered secure. It has a 128-bit hash (16 bytes). Can be used for
checksums.

## bcrypt

bcrypt is a password hashing algorithm. It is based on the bluefish cipher and
incorporates a work factor. This makes it more difficult to brute-force using
e.g. parellelized attacks (which GPUs otherwise are efficient with). It also
incorporates salt by default.

## scrypt

scrypt is a hashing algorithm.

## argon2

argon2 is a hashing algorithm.

## NTLM

New Technology LAN Manager (NTLM) is a hash format commonly used for Windows
authentication. NTLM is a variant of MD4 and might look identical to MD4/MD5.
