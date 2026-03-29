[**datalayer-helper**](../README.md)

***

# Function: setCookie()

> **setCookie**(`name`, `value`, `seconds?`, `path?`): `void`

Sets a cookie or overwrites it if it already
exists with the specified name and value.
(by default, the lifetime is set to 30 minutes)

## Parameters

### name

`string`

The name of the cookie

### value

`string`

The value of the cookie

### seconds?

`number` = `1800`

Duration in seconds the cookie should be stored

### path?

`string` = `'/'`

The path of the cookie

## Returns

`void`
