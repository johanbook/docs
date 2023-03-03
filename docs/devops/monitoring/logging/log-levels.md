# Log levels

**Log levels** are used to categorize [logs](./README.md). The established log
levels are:

- **Trace** is common events, used for tracing the code. See
  [tracing](../tracing.md).
- **Debug** is information that potentially could be useful when debugging the
  system. For example diagnostic information.
- **Info** is valuable information, such as the progress of the application.
- **Warn** is someting that might be an issue but is not a problem for the
  system.
- **Error** is a specific system functinality that does not work. Should be
  investigated but not neccesarily right away.
- **Fatal / Critical** is a major error that prevents the system from working.
  Should be investigated as soon as possible.

Trace and debug is often something that is activated on demand.
