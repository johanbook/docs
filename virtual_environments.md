# Virtual environments

## 2020-06-01

When you build software you will need an interpreter or compiler
(depending on what language you are using) and often a ton of dependencies.
However, a dependency from one project might interfere with dependencies from
another project (if they use different versions). Therefore it is a good habit
of using an isolated environment for each project.This is called a virtual
environment. For Python there a few common approaches.

### Venv

`venv` creates a virtual environment for you and binds it to the current folder
you are in. This is neat if you are working on multiple projects simultaneously.

### Conda

Conda is a virtual environment I am personally not much of a fan of.

### Pipenv

a
