# Optimizers

An **optimizer** is an algorithm for optimizing a function. The most basic one
is gradient, which can be formulated as

$$
\omega_{n+1} = \omega_n - \alpha \nabla f(x).
$$

The parameter $\alpha$ is known as the learning rate and can be updated
dynamically with a [learning rate scheduler](./learning_rate_schedulers.md).

Some other common optimizers are

- AdaBound
- Adam
- SGD
- YellowFin
