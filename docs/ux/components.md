# Components

When designing UI, there are recurring components (see
[atomic design](./atomic_design.md)). Note that the names of these components
can vary. I aim to follow the practices of
[Material Design](https://m3.material.io/components).

## Accordion

An **acordion** is a collapsible card. It should be used for information that
can be ignored.

Accordions should be avoided inside other accordions.

## Badge

A **badge** is a component for displaying additional information next to another
component.

## Breadcrumbs

A set of hierarchical navigation links.

## Buttons

A **button** is a component that can be pressed. Buttons typically comes in the
following variants depending on how much of the user's attention they are
intended to draw:

- **Primary**
- **Secondary**
- **Tertiary**

Colors are typically

- Primary
- Secondary
- Success
- Error
- Warning

Best practices is to disable a button while it is loading. It is also
recommended to show a spinner inside (or next to) the button while it is
loading.

## Card

A **card** is a section for some dedicated content.

## Drawer

A sidebar that can be opened and closed. Typically used to display navigation or
supporting content.

## List

A list is for displaying data. In contrast to a table, it is now column based.
For filtering, one tends to use a separate textfield where one can enter filter
queries.

## Modal window

A **modal window** is a component that overlays all other UI in order to get the
user's attention.

One should be careful if implementing a modal inside another modal.

## Navigation bar

A **navigation bar** is a component for quickly navigating between multiple
pages.

## Skeleton

A **skeleton** is a placeholder for another component while that component is
loading. Skeletons should be used for components which layout cannot be fully
determined until data is loaded. An example case would a list where one cannot
know the number of elements until the data is fetched.

## Slider

A **slider** is a component for entering a bounded incremental value.

## Snackbar

A **snackbar**, sometimes called a **toast**, is a small bar that pops up in a
corner to display a message. Typically exists in the following variants:

- Info
- Success
- Error
- Warning

Generally, snackbar should not be noticed but not be too distracting. If it is
something that requires user input (such as acknowledgement) one should instead
use a modal.

## Table

A **table** is a component for displaying data in columns. It typically supports
filtering and sorting on a column basis.

This is in contrast to a list.

## Tooltip

A **tooltip** is a component for displaying additional information when another
component is focused.
