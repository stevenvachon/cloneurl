# cloneurl [![NPM Version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Monitor][greenkeeper-image]][greenkeeper-url]

> Clone a WHATWG [`URL`](https://mdn.io/URL) instance.


This module's browser version contains no `URL` shim.


## Installation

[Node.js](https://nodejs.org) `>= 6` is required. To install, type this at the command line:
```shell
npm install cloneurl
```


## Usage

```js
const cloneURL = require('cloneurl');

const b = cloneURL(a);

console.log(b === a);
//-> false

console.log(b.href === a.href);
//-> true
```


[npm-image]: https://img.shields.io/npm/v/cloneurl.svg
[npm-url]: https://npmjs.com/package/cloneurl
[travis-image]: https://img.shields.io/travis/stevenvachon/cloneurl.svg
[travis-url]: https://travis-ci.org/stevenvachon/cloneurl
[greenkeeper-image]: https://badges.greenkeeper.io/stevenvachon/cloneurl.svg
[greenkeeper-url]: https://greenkeeper.io/
