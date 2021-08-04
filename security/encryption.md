# Encryption

Encryption is the act of obscuring data such that only a receiving part can
properly understand it.

Encrypted can be done using keys. There is symmetric encryption (same key for
encryption and decryption) and asymmetric encryption (different key for
encryption and decryption). For asymmetric encryption the key pair is called
private and public key.

## Digital Signature

One can create a signature by encrypting a hash with a private key. The
signature can then be decrypted with corresponding public key and hash used to
verify whatever was signed. If something is signed the receiving part can be
confirm the message has not been tampered with and is in fact from the sender.

Such a signature can be juridically binding.

### Certificate

Contains time of validity, purpose, public key of entity and encryption method.

There are different levels of certificates. Level 1 which is only verification
that the one is owning the domain, level 2 which requires proof of owning brand
and level 3 where CEO have identified in person.

## Encryption Algorithms

Here are some encryption algorithms.

### AES

Advanced Encryption Standard (AES) is a symmetric key algorithm. It is a block
cipher.

### RSA

RSA is a asymmetric key algorithm.

### One Time Pad

One Time Pad (OTP) is an uncrackable symmetric key algorithm. The encryption key
must be generated anew for each new message and should be at least as large as
the message.

### Caesar Cipher

A Caesar Cipher is a substitution cipher where one shifts letters. One example
is ROT13 where one shifts 13 letters. ROT13 is its own inverse (due to the
English alphabet has 26 letters).
