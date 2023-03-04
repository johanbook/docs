# Defense in Depth

If running a microservice system, instead of relying only on on global
authentication happening in the API gateway, each service should need to
authenticate when communicating with any other service ([zero trust](./ztn.md))
