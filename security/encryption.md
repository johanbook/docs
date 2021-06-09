# Encryption

Data is encrypted using keys. One can use either symmetric encryption (same key
for encryption and decryption) or asymmetric encryption (different key for
encryption and decryption). For asymmetric encryption the key pair is called
private and public key.

## Digital Signature

One can create a signature by encrypting a hash with a private key. The hash can
then be decrypted with corresponding public key and hash used to verify whatever
was signed. Such a signature can be juridically binding.

### Certificate

Contains time of validity, purpose, public key of entity and encryption method.

There are different levels of certificates. Level 1 which is only verification
that the one is owning the domain, level 2 which requires proof of owning brand
and level 3 where CEO have identified in person.
