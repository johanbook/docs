# Regexp

**Regular expressions**, or **regexp** for short, is a type of expressions for
string matching. An example is

```regexp
^coder$
```

which would only match the word `coder`.

## Evil regexp

When writing regexps, one should be aware that there exist regexps designed to
use an unproportional amount of CPU. Such a regexp is called an **evil regexp**.
One needs to be extra aware of this if allowing user defined regexps.

There are regexp implementations that set a max number of iterations per regexp
evaluation to stop this attack vector.
