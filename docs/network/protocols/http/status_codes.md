# Status codes

There are different **status codes** in the [HTTP protocol](./README.md).

## 100 - Information

- **101** Switch protocol.

## 200 - Successes

- **200** is a success.
- **201** the resource was created.
- **204** same as a 200 but the request contains no content. I use this status
  code for most successes.

## 300 - Redirects

- **301** Resource has been moved permanently.
- **302** the resource can be found temporarily at location specified in the
  `Location` header.
- **304** Resource has been modified and cached version can be used. This can be
  used in conjunction with [ETags](./etag).

## 400 - Client errors

- **400** Server could not understand the request.
- **401** Authentication required.
- **403** Insufficient permissions.
- **404** The requested resource was not found.
- **405** HTTP method not allowed.
- **418** I am a teapot. This is a joke status code. I like to use it in unit
  tests.

## 500 - Server errors

- **500** Server encountered an unexpected error.
