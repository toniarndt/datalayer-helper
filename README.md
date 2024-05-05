# datalayer-helper

A JavaScript library for working with datalayers.

- [Quick Start](#quick-start)
- [Latest Releases](#latest-releases)
- [Why do we need a library?](#why-do-we-need-a-library)
- [Using the library](#using-the-library)
- [Where is the data stored?](#where-is-the-data-stored)
- [Debugging](#debugging)
- [Documentation](#documentation)
- [Build and test](#build-and-test)
- [Contributing](#contributing)
- [License](#license)

## Quick Start

Download the latest version of the JS-library directly from the [dist folder](https://github.com/toniarndt/datalayer-helper/tree/main/dist) and integrate it into your website as follows.

```html
<script type="text/javascript" src="datalayer-helper.min.js"></script>
```

Alternatively, you can also integrate the source code of the library directly on the page or via a tag manager.

### Latest Releases

| Version                                                                                                    | Description                                                                                                        |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| [Regular](https://raw.githubusercontent.com/toniarndt/datalayer-helper/main/dist/datalayer-helper.js)      | This version is human readable, easy to edit and debug, but has a larger file size.                                |
| [Minified](https://raw.githubusercontent.com/toniarndt/datalayer-helper/main/dist/datalayer-helper.min.js) | This version is smaller and more difficult for humans to read, but it can be loaded more quickly by a web browser. |

## Why do we need a library?

The datalayer is an essential concept in web development, especially when working with tools like tag manager. Here are some reasons why you should use a library like this:

### Simplify data handling

The library abstracts away the complexity of dealing with the datalayer, allowing developers to focus on the logic of the application instead of managing data structures.

### Improved performance

Optimized code and reduction of redundant code in projects have a positive effect on the loading speed and execution time of scripts.

### Debugging

Integrated debugging enables simple testing of the implementation and assists with troubleshooting.

### Easier collaboration

A standardized approach to working with the datalayer simplifies teamwork by making the code easier to understand and share.

To use this library, you'll need to get it onto the page. The easiest way to do this
is by [following these instructions.](#quick-start)

## Using the library

If you are already used to working with the s-object from Adobe Analytics, using datalayer.js will feel similarly familiar to you.
We introduce a new object (**d-object**) on the page that can be accessed and that provides all the functions of the library.

Example call:

```js
d.buildDate; // to get the build date
```

## Where is the data stored?

By default, the data is saved in the global datalayer object:

```js
window._datalayer;
```

Alternatively, you can also use a custom datalayer if you already have an existing implementation.

## Debugging

Activate debugging in the library using the following code:

```js
d.setDebug(true);
```

If you set the value to 'false', you can deactivate debugging again.
A variable is created in the SessionStorage if debugging is activated. This is to allow you to concentrate on debugging.

## Documentation

For detailed documentation of the variables and functions, please use the [docs/readme.md](https://github.com/toniarndt/datalayer-helper/blob/main/docs/README.md)

## Build and test

The following are prerequisites::

- Install Node.js
- Install yarn
- Install git

Clone a copy of the project repo by running:

```
git clone https://github.com/toniarndt/datalayer-helper.git
```

Enter the datalayer.js directory and install the dependencies:

```
cd datalayer-helper
yarn install
```

You can run the linter with the command.

```
yarn lint
```

That should be everything. You can try running the build, which will compile and minify the TypeScript.
The built version (datalayer-helper.min.js) will be in the **./dist** subdirectory.

```
yarn build
```

Build:all will also build the documentation and store it in the **./docs** folder.

```
yarn build:all
```

## Contributing

If you wish to contribute to this repository, please first discuss the change you wish to make by issue, e-mail or other means with the owners of this repository before making a change. Stay friendly!

Author: [hello@toniarndt.com](mailto:hello@toniarndt.com)

## License

Copyright 2024 Toni Arndt. All rights reserved.

This work is licensed under the terms of the MIT license. For a copy, see
<https://github.com/toniarndt/datalayer-helper/blob/main/LICENSE>.
