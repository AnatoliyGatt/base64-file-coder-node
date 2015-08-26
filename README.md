# base64-file-coder for Node.js

Base64 file encoder/decoder.

[![NPM Package Version][npm-package-version-badge]][npm-package-url]
[![NPM Package License][npm-package-license-badge]][npm-package-license-url]
[![NPM Package Downloads][npm-package-downloads-badge]][npm-package-url]
[![Dependencies Status][dependencies-status-badge]][dependencies-status-page-url]
[![devDependencies Status][devDependencies-status-badge]][devDependencies-status-page-url]

[![Node Version][node-version-badge]][node-downloads-page-url]
[![Travis CI Build Status][travis-ci-build-status-badge]][travis-ci-build-status-page-url]
[![Code Climate Status][code-climate-status-badge]][code-climate-status-page-url]
[![Code Climate Test Coverage Status][code-climate-test-coverage-status-badge]][code-climate-test-coverage-status-page-url]
[![Inch CI Documentation Coverage Status][inch-ci-documentation-coverage-status-badge]][inch-ci-documentation-coverage-status-page-url]

[![NPM Package Statistics][npm-package-statistics-badge]][npm-package-url]

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

[npm-package-url]: https://npmjs.org/package/base64-file-coder-node

[npm-package-version-badge]: https://img.shields.io/npm/v/base64-file-coder-node.svg?style=flat-square

[npm-package-license-badge]: https://img.shields.io/npm/l/base64-file-coder-node.svg?style=flat-square
[npm-package-license-url]: http://opensource.org/licenses/MIT

[npm-package-downloads-badge]: https://img.shields.io/npm/dm/base64-file-coder-node.svg?style=flat-square

[dependencies-status-badge]: https://david-dm.org/AnatoliyGatt/base64-file-coder-node.svg?style=flat-square
[dependencies-status-page-url]: https://david-dm.org/AnatoliyGatt/base64-file-coder-node#info=dependencies

[devDependencies-status-badge]: https://david-dm.org/AnatoliyGatt/base64-file-coder-node/dev-status.svg?style=flat-square
[devDependencies-status-page-url]: https://david-dm.org/AnatoliyGatt/base64-file-coder-node#info=devDependencies

[node-version-badge]: https://img.shields.io/node/v/base64-file-coder-node.svg?style=flat-square
[node-downloads-page-url]: https://nodejs.org/download/

[travis-ci-build-status-badge]: https://img.shields.io/travis/AnatoliyGatt/base64-file-coder-node.svg?style=flat-square
[travis-ci-build-status-page-url]: https://travis-ci.org/AnatoliyGatt/base64-file-coder-node

[code-climate-status-badge]: https://img.shields.io/codeclimate/github/AnatoliyGatt/base64-file-coder-node.svg?style=flat-square
[code-climate-status-page-url]: https://codeclimate.com/github/AnatoliyGatt/base64-file-coder-node

[code-climate-test-coverage-status-badge]: https://img.shields.io/codeclimate/coverage/github/AnatoliyGatt/base64-file-coder-node.svg?style=flat-square
[code-climate-test-coverage-status-page-url]: https://codeclimate.com/github/AnatoliyGatt/base64-file-coder-node/coverage

[inch-ci-documentation-coverage-status-badge]: https://inch-ci.org/github/AnatoliyGatt/base64-file-coder-node.svg?style=flat-square
[inch-ci-documentation-coverage-status-page-url]: https://inch-ci.org/github/AnatoliyGatt/base64-file-coder-node

[npm-package-statistics-badge]: https://nodei.co/npm/base64-file-coder-node.png?downloads=true&downloadRank=true&stars=true