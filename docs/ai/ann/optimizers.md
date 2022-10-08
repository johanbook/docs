# Optimizers

An **optimizer** is an algorithm for optimizing a function, such as an
[ANN](./ann.md). This is commonly done as an iterative process using the
function first and second order derivatives.

## Gradient Descent

**Gradient Descent** is an intuitive optimizer where one traverses the function
landscape in the opposite direction of the function derivate $\nabla f$. Let
$\omega$ denote the set of parameters that are to be optimized. Then $\omega$
can be iteratively updated as

$$
\omega_{n+1} = \omega_n - \alpha \nabla f(x).
$$

The parameter $\alpha$ is known as the learning rate and determines the
convergence speed. Higher values lead to faster convergence but poorer
precision. To use the advantage of both large ans mall learning rates, one can
use a [learning rate scheduler](./learning_rate_schedulers.md).

The inherent problem with gradient descent is that is only guarantees
convergence to a local optima (or saddle point), but not any global optima.
Therefore, for any realistic purposes, one needs to go for any other optimizing
algorithm.

### Momentum

**Momentum** is a method for speeding up gradient descent convergence by
increasing the learning rate when the derivative keeps the same sign and
decreasing it when the sign changes.

## Stochastic Gradient Descent

**Stochastic Gradient Descent** (**SGD**) is a version of gradient descent that
combats the problem of global convergence. Instead of calculating the derivative
of the whole dataset, it is instead calculated based on one randomly picked
datapoint from one's dataset. This introduces some stochasticity into the
process, allowing the algorithm to escape local minima. It also greatly eases
the computational burden of the algorithm.

## Adam

**Adaptive Movement estimation** (**Adam**) is another popular optimizer.

## Other optimizers

Some other common optimizers are

- AdaBound
- YellowFin
