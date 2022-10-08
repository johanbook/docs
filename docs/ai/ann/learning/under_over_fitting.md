# Under- and overfitting

**Underfitting** and **overfitting** are problems that can occur if the
complexity of the model does not match the problem. Both problems show up as
poor performance on any validation data.

## Underfitting

**Underfitting** happens when a model is not complex enough to solve a given
problem. An indication of this is poor performance (e.g. low classification
accuracy).

## Overfitting

**Overfitting** is when a model is too complex and is capable of learning each
data point in the training data rather than learning to generalize. It is
recognized by excellent training metrics but poor validation metrics. There are
various techniques to counter overtraining, such as data augmentation.

## Dropout

**Dropout** is an approach to mitigate overtraining. One randomly picks a set of
nodes that are inactive during the training period. New nodes are picked after
each update and during inferring all nodes are active.

Dropout can be used during inference to create ensemble machines. The mean of
the predictions is a good estimate for the true prediction and the variance is a
measure of uncertainty. However, fine-tuning the used drop-out rate during
inference becomes rather challenging and directly affects the given measure of
uncertainty.
