# HTML

**HyperText Markup Language** (**HTML**) is an [XML](./xml) based language for
representing documents. It is used to render websites in the browser. An example
is shown below

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Title</title>
  </head>
  <body>
    <h1>My Heading</h1>
    <p>My paragraph.</p>
  </body>
</html>
```

## Script tag

The `<script>` tag can be used for executing JavaScript as part of a document.
It can either be fetched as an external file
`<script src="javascript.js"></script>` or as inline

```html
<script>
  const text = "my-log";
  console.log(text);
</script>
```

## Style tag

The `<style>` tag can be used for adding CSS in a document. Similar to the
`<script>` tag it can be fetched as an external file or written inline.
