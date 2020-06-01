# Deployment
Once an application is ready for production it is time for deployment. There are tons of different deployment strategies, but here is an overview of the most common ones.

#### Linux server
The oldschool hosting option is to run one's own bare metal Linux server. This gives you full control but it does require you to manually perform maintainance on the server such as security updates and installation of new versions of your software. It is not playing as nicely with CI/CD as Cloud Foundry and Kubernetes.

#### Cloud foundry
Cloud Foundry is a technology for automatically building apps ready for deployment directly from source code. The Cloud Foundry service analyzes your code to see what language it is and then employs a suiting buildpack (a script for compiling the app). It then configures the app, does some health checks and deploys it. Examples of providers of Cloud Foundry are: Heroku, IBM and [].

#### Kubernetes
Kubernetes is a technology mainly for deploying Docker images and does load balancing, handling worker nodes and all for you.

