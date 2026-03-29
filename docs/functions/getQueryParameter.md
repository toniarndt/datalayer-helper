[**datalayer-helper**](../README.md)

***

# Function: getQueryParameter()

> **getQueryParameter**(`key`, `url?`): `string`[]

Returns the query parameters of the current page or any URL as a string array
or as an empty array if no values were found for the key

## Parameters

### key

`string`

Query key for which the values are to be returned

### url?

`string` = `document.URL`

Any URL or, by default, the current URL of the website

## Returns

`string`[]

Returns values as a string array or an empty array if no matching values were found for the key
