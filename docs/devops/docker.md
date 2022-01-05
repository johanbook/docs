# Docker

**Docker** is a technology that allows running virtual machines that share
[kernel processes](../unix/kernel).

## Container info

Note that since kernel processes are shared running e.g. `uname` inside a
container will resolve to host details. If the container is Linux-based, try
`cat /etc/os-release`.
