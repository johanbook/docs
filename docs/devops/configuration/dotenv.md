# Dotenv

A **Dotenv** file is a shell file often having the name `.env` (or
`.env.production`). The file contain configurations for environment variables
which later can be read by various applications. A file could for example
contain

```sh
AWS_SECRET=aws-secret
S3_URL=s3://my-s3-url
```

This can be imported in a shell on Unix systems by running `source .env`.

It is an approach to configuration (and sometimes
[secret management](./secrets.md)). Dotenv files are typically not tracked by
VCS. It is well suited for managing secrets for local development.
