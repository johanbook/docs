# Debugging

**Debugging** is the process of inspecting an application to find and fix bugs.
When debugging a production application, one often also uses
[logs](../devops/monitoring/logging/README.md).

## Debugger

**Debugger** is a custom tools for debugging, often distributed as part of a
language's SDK. For example, there is `gdb` which is the GNU Debugger for
debugging binary applications. There is also `pdb` which is the official Python
debugger.

A debugger typically allows one to set breakpoints where the application is
stopped and its state can inspected and modified.

## Breakpoints

A **breakpoint** is a point in the code where the debugger will pause. Many
debuggers support conditional breakpoints where the debugger only pauses if
certain conditions are met.
