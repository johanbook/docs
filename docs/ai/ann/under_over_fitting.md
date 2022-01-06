# Under- and overfitting

If the complexity of a model does not match the problem one might run into
under- or overfitting.

Underfitting can happen when a model is not complex enough to solve the problem.
An indication of this is poor performance (e.g. low classification accuracy).

Overfitting is when a model is too complex and is capable of learning each data
point in the training data rather than learning to generalize. It is recognized
by excellent training metrics but poor validation metrics. There are various
tools to counter overtraining, such as data augmentation.

## Dropout

Dropout is an approach to mitigate overtraining. One randomly picks a set of
nodes that are inactive during the training period. New nodes are picked after
each update and during inferring all nodes are active.

Dropout can be used during inference to create ensemble machines. The mean of
the predictions is a good estimate for the true prediction and the variance is a
measure of uncertainty. However, fine-tuning the used drop-out rate during
inference becomes rather challenging and directly affects the given measure of
uncertainty.
