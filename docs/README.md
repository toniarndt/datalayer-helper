# datalayer-helper

## Table of contents

### Variables

- [version](README.md#version)

### Functions

- [clearDatalayer](README.md#cleardatalayer)
- [cloneDatalayer](README.md#clonedatalayer)
- [combine](README.md#combine)
- [decodeBase64](README.md#decodebase64)
- [deleteCookie](README.md#deletecookie)
- [encodeBase64](README.md#encodebase64)
- [flattenDatalayer](README.md#flattendatalayer)
- [fromString](README.md#fromstring)
- [getCookie](README.md#getcookie)
- [getCookies](README.md#getcookies)
- [getDatalayer](README.md#getdatalayer)
- [getQueryParameter](README.md#getqueryparameter)
- [getValue](README.md#getvalue)
- [log](README.md#log)
- [setCookie](README.md#setcookie)
- [setDebug](README.md#setdebug)
- [setValue](README.md#setvalue)
- [toString](README.md#tostring)
- [useDatalayer](README.md#usedatalayer)

## Variables

### version

• `Const` **version**: ``"1.0.0"``

The version of the library

## Functions

### clearDatalayer

▸ **clearDatalayer**(): `void`

Deletes the content of the datalayer object

#### Returns

`void`

___

### cloneDatalayer

▸ **cloneDatalayer**(`datalayer`): `object`

Clones the datalayer object and returns it

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `datalayer` | `object` | Datalayer object which should be cloned |

#### Returns

`object`

The cloned object

___

### combine

▸ **combine**(`array1`, `array2`, `separator1?`, `separator2?`): `string`

Combines the individual values from different arrays into pairs

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array1` | `string`[] | `undefined` | The first array with strings |
| `array2` | `string`[] | `undefined` | The second array with strings |
| `separator1` | `string` | `','` | Separator for the combined pairs |
| `separator2` | `string` | `':'` | Separator between the individual pair values |

#### Returns

`string`

Returns the combined string

___

### decodeBase64

▸ **decodeBase64**(`value`): `string`

Decodes a string from base64

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | The string to be decoded |

#### Returns

`string`

The decoded string

___

### deleteCookie

▸ **deleteCookie**(`name`): `void`

Removes a cookie, if it exists

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name of the cookie |

#### Returns

`void`

___

### encodeBase64

▸ **encodeBase64**(`value`): `string`

Encodes a string to base64

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | The string to be encoded |

#### Returns

`string`

The encoded string

___

### flattenDatalayer

▸ **flattenDatalayer**(`datalayer`): `object`

Flattens the datalayer object and returns it

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `datalayer` | `object` | Datalayer object which should be flattened |

#### Returns

`object`

The flattened object

___

### fromString

▸ **fromString**(`str`): `void`

Creates the datalayer from a JSON string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | JSON string for the datalayer |

#### Returns

`void`

___

### getCookie

▸ **getCookie**(`name`): `string` \| ``null``

Returns the value of the cookie or null if the cookie does not exist

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the cookie |

#### Returns

`string` \| ``null``

The value of the cookie or null

___

### getCookies

▸ **getCookies**(): `Record`\<`string`, `string`\>

Return an object of cookies as a key value pair

#### Returns

`Record`\<`string`, `string`\>

Data as key value pair or null

___

### getDatalayer

▸ **getDatalayer**(): `object`

Returns the datalayer as an object

#### Returns

`object`

The datalayer object

___

### getQueryParameter

▸ **getQueryParameter**(`url?`): `string`[][]

Returns the query parameters of the current page or any URL as a
multidimensional string array so that duplicate parameters are not dropped

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `document.URL` | Any URL or, by default, the current URL of the website |

#### Returns

`string`[][]

Query parameters as multidimensional string array

___

### getValue

▸ **getValue**(`namespace`): `string` \| ``null``

Returns the value of a variable in the datalayer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `namespace` | `string` | Namespace of the variable (can be separated with a dot) |

#### Returns

`string` \| ``null``

Value of a variable or null if it does not exist

___

### log

▸ **log**(`log`): `void`

Writes the message to the console if debug mode is activated

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `log` | `LogEntry` | The LogEntry to write to the console |

#### Returns

`void`

___

### setCookie

▸ **setCookie**(`name`, `value`, `seconds?`, `path?`): `void`

Sets a cookie or overwrites it if it already
exists with the specified name and value.
(by default, the lifetime is set to 30 minutes)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | The name of the cookie |
| `value` | `string` | `undefined` | The value of the cookie |
| `seconds` | `number` | `1800` | Duration in seconds the cookie should be stored |
| `path` | `string` | `'/'` | The path of the cookie |

#### Returns

`void`

___

### setDebug

▸ **setDebug**(`debug`): `void`

Allows to change the debug mode

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `debug` | `boolean` | Specifies whether debug mode should be activated or deactivated |

#### Returns

`void`

___

### setValue

▸ **setValue**(`namespace`, `value`): `void`

Creates the required namespace in a data layer object
and overwrites it if it already exists

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `namespace` | `string` | Namespace of the variable (can be separated with a dot) |
| `value` | `string` | Value of the variable |

#### Returns

`void`

___

### toString

▸ **toString**(): `string`

Returns the datalayer as a string

#### Returns

`string`

The datalayer string

___

### useDatalayer

▸ **useDatalayer**(`datalayer?`): `void`

Enables to set an own custom datalayer object
If null is passed as a parameter, the default global datalayer will be reset and used

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `datalayer?` | ``null`` \| `object` | The (custom) datalayer object |

#### Returns

`void`
