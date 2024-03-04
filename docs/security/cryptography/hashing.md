# Hashing

A **hash function** is a function $f: A \mapsto B$ which is one-to-one and
creates a chaotic system. There are several types of hashing algorithms, each
suitable for different use-cases. For example, for checking a password hash one
would want a slow and cryptographically secure algorithm while a faster for
checksums.

One can increase work factor if computational hardware improves.

## Conditions for a good hash function

A good hash function should satisfy:

- **Uniform output**. The output distribution should be approximately uniform,
  meaning there is no region in the output space with a higher probability for
  collisions than other regions. This can be done via a Chi-square test.
- **Avalanche test**. Changing a single bit in the output should create a large
  change in output.

## Algorithms

### SHA

**Secure Hashing Algorithm** (**SHA**) is a set of hashing algorithms.

#### SHA1

**SHA1** is not considered secure.

#### SHA512

Also known as `sha512crypt`. Is default for mos Linux systems.

### MD

**Messsage Digest** (**MD**) is a family of hashing algorithms.

#### MD5

**MD5** is not considered secure. It has a 128-bit hash (16 bytes). Can be used
for checksums.

### bcrypt

**bcrypt** is a password hashing algorithm. It is based on the bluefish cipher
and incorporates a work factor. This makes it more difficult to brute-force
using e.g. parellelized attacks (which GPUs otherwise are efficient with). It
also incorporates salt by default.

### scrypt

**scrypt** is a hashing algorithm.

### argon2

**argon2** is a hashing algorithm.

### NTLM

**New Technology LAN Manager** (**NTLM**) is a hash format commonly used for
Windows authentication. NTLM is a variant of MD4 and might look identical to
MD4/MD5.

### MurmurHash

**MurmurHash** is a non-cryptographically secure hash that can be used for hash
lookups.
