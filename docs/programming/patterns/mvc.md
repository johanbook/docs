# MVC

**Model View Controller** (**MVC**) is a design pattern that separates an
application into model, view and controller. The controller handles incoming
user events and interacts with the model. The model manipulates the data (and
performs business logic) and trigger events in the view. This means that both
the controller and view are dependent on the model. This did not fully account
for e.g. handling databases etc.

MVC is intended for a fullstack application.
