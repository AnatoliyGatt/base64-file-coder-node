# base64-file-coder for Node.js

Base64 file encoder/decoder.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![License][license]][license-url]
[![Travis Build][travis-image]][travis-url]

[![NPM Statistics][npm-statistics-image]][npm-url]

## Installation

`npm install base64-file-coder-node`

## Usage Example

```javascript
var base64File = require("base64-file-coder-node")();

base64File.encode("path/to/file", function(error, base64) {
    if(!error) {
        console.log(base64);
    } else {
        console.error(error);
    }
});

console.log(base64File.decode("TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZX..."));
```

***

```javascript
TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nI...
<Buffer 4c 6f 72 65 6d 20 69 70 73 75 6d 20 64 6f 6c 6f 72 20 73 69 ... >
```

## Tests

To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```

## License

Distributed under the [MIT License](LICENSE).

[npm-image]: https://img.shields.io/npm/v/base64-file-coder-node.svg
[npm-url]: https://npmjs.org/package/base64-file-coder-node
[downloads-image]: https://img.shields.io/npm/dm/base64-file-coder-node.svg
[downloads-url]: https://npmjs.org/package/base64-file-coder-node
[license]: https://img.shields.io/npm/l/base64-file-coder-node.svg
[license-url]: https://github.com/AnatoliyGatt/base64-file-coder-node/blob/master/LICENSE
[travis-image]: https://img.shields.io/travis/AnatoliyGatt/base64-file-coder-node/master.svg
[travis-url]: https://travis-ci.org/AnatoliyGatt/base64-file-coder-node
[npm-statistics-image]: https://nodei.co/npm/base64-file-coder-node.png?downloads=true&downloadRank=true&stars=true