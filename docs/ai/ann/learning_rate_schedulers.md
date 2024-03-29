# Learning rate schedulers

A **learning rate scheduler** is an adaptable learning rate which can be used
when [optimizing](./optimizers.md) an [ANN](./ann.md). This is useful as the
learning rate is likely the one hyperparameter that is the most difficult to
set. By performing a range test one can establish a range of suitable learning
rates. From this one can construct a learning rate scheduler, such as CLR
(Cyclic Learning Rate) or a plateau scheduler.

## Warm starts

**Warm starts** is when one start training a model that is already pre-trained.
This might shorten otherwise long training times. The network does not even need
to be pre-trained on the same type of domain of data.
