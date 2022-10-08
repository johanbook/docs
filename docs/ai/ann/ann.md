# Basics

An **Artificial Neural Network** (**ANN**) is a computational graph, that is a
network of nodes where every connection can have different strengths. In
mathematical terms a single node $y$ be expressed as

$$
y = \phi\left(\sum_i \omega_i x_i\right)
$$

where $\phi$ is the activation function of the node, $x_i$ its inputs and
$\omega_i$ the weights. The network is trained by optimizing $y$ via $\omega$
using an [optimizer](./optimizers).

## Bayesian Neural Network

A **Bayesian neural network** is an ANN that uses a probability distribution for
the weights instead of point estimates. This will yield networks that can be
sampled but will also increase the number of parameters that needs to be
trained.
