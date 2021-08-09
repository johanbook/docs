# Buffer Overflow

Buffer overflow is a vulnerability where the buffer of one entity overflows into
another. This vulnerability is most prevalent in languages where memory
allocation is explicitly handled by the user, such as C and C++.

Here is an example:

```c
#include<string.h>
#include<stdio.h>

int main() {
  char password[4];
  int authenticated = 0;
  printf("\nEnter password:\n");
  scanf("%s", password);

  if (!strcmp(password, "abcd")) {
    authenticated = 1;
  }

  if (authenticated) {
    printf("\nAccess granted!");
  } else {
    printf("\nAccess denied!");
  }
}
```

As modern C compilers have some built in protections against overflow, this
program would have to be compiled as `gcc -fno-stack-protector -o vuln vuln.c`.
When running the program, access is granted for the password `abcd` but also for
any string that is longer than four characters. And that my friends is buffer
overflow.
