# Singleton

**Singleton** is a creational design pattern where there should only exist one
global instance of an entity. One common usage is for application settings.

```ts
public class Singleton {
  private static Singleton instance = new Singleton();

  private Singleton() {}

  private Singleton getInstance() {
    return instance;
  }
}
```
