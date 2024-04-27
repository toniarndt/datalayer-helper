# datalayer-helper

A JavaScript library for working with datalayers.

- [datalayer-helper](#datalayer-helper)
  - [Quick Start](#quick-start)
  - [Why do we need a library?](#why-do-we-need-a-library)
  - [Using the library](#using-the-library)
  - [Where is the data stored?](#where-is-the-data-stored)
  - [Debugging](#debugging)
  - [Documentation](#documentation)
  - [Build and test](#build-and-test)
  - [Contributing](#contributing)
  - [License](#license)

## Quick Start

Download the JS-library and integrate it into the website. Following the script tag:

```html
<script type="text/javascript" src="datalayer-helper.min.js"></script>
```

Alternatively, you can also integrate the source code of the library directly on the page or via a tag manager.

## Why do we need a library?

A datalayer is the interface between developers and web analysts. It simplifies the transfer of variable values. Working with a datalayer can be time-consuming and repetitive for web analysts, depending on the complexity of the project. To simplify this process, this library comes into play, which provides many functions that are frequently required.

To use this library, you'll need to get it onto the page. The easiest way to do this
is by [following these instructions.](#quick-start)

## Using the library

If you are already used to working with the s-object from Adobe Analytics, using datalayer.js will feel similarly familiar to you.
We introduce a new object (**d-object**) on the page that can be accessed and that provides all the functions of the library.

Example call:

```js
d.builddate; // to get the builddate
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

If you wish to contribute to this repository, please first discuss the change you wish to make by issue, e-mail or other means with the owners of this repository before making a change.

Stay friendly!

## License

Copyright 2024 Toni Arndt. All rights reserved.

This work is licensed under the terms of the MIT license. For a copy, see
<https://github.com/toniarndt/datalayer-helper/blob/main/LICENSE>.
