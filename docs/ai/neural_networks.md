# Artificial neural networks

An **Artificial Neural Network** (**ANN**) is a network of nodes, where every
connection can have different strengths. In mathematical terms, a single node
$y$ be expressed as

$$
y = \phi\left(\sum_i \omega_i x_i\right)
$$

where $\phi$ is the activation function of the node, $x_i$ its inputs and
$\omega_i$ the weights. The network is trained by optimizing $y$ via $\omega$.

## Optimizers

The most common ones are SGD and Adam.

## Convolutional neural networks

When it comes to analyzing images, networks known as Convolutional Neural
Networks (CNN) is the best. A convolutional layer consisting of a kernel with
learnable weights. This allows the network to learn local features without
needing an absurd amount of complexity.

One architecture is VGG, named after Visual Geometry Group, that stacks very
many convolutional layers on top of each other.

## Under- and overfitting

The complexity of the architecture one chooses must match the problem, otherwise
one will run into something called under- and overfitting. Underfitting is when
the model is not complex enough to solve the problem and is indicating of poor
performance (e.g. low classification accuracy). On the contrary, overfitting is
when a model is too complex and is capable of learning each data point in the
training data rather than learning to generalize. Overtraining is recognized by
satisfying training metrics but poor validation metrics. There are various tools
to counter overtraining, such as data augmentation.

As mentioned earlier, one of greatest problems of the training process is
overtraining. One approach to mitigate this, is to randomly pick a set of nodes
that are inactive during the training period. New nodes are picked after each
update and during inferring all nodes are active. This approach, known as
dropout, has shown to significantly decrease overtraining. On a side-note, it
was recently patented by Google.

Dropout can also be used during inference to create ensemble machines. The mean
of the predictions is a good estimate for the true prediction and the variance
is a measure of uncertainty. However, fine-tuning the used drop-out rate during
inference becomes rather challenging and directly affects the given measure of
uncertainty.

## Data processing and augmentation

To achieve top-notch performance it is of utter importance that one treats the
data properly.
