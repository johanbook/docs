# Digital signature

A **digital signature** is a signature that can be used to verify the integrity
of a piece of data. A signature is created by encryption the [hash](./hashing)
of the data with one's private key. The signature can then be decrypted with
corresponding public key and hash used to verify whatever was signed. If
something is signed the receiving part can be confirm the message has not been
tampered with and is in fact from the sender.

Such a signature can be juridically binding.
