[![Travis](https://img.shields.io/travis/defo550/hex-to-rgb.svg)](https://travis-ci.org/defo550/hex-to-rgb)
[![Codecov](https://img.shields.io/codecov/c/github/defo550/hex-to-rgb.svg)](https://codecov.io/gh/defo550/hex-to-rgb )
[![npm (scoped)](https://img.shields.io/npm/v/@defo550/hex-to-rgb.svg)](https://www.npmjs.com/package/@defo550/hex-to-rgb)
[![MIT License](https://img.shields.io/npm/l/hex-to-rgb.svg)](https://opensource.org/licenses/MIT)

# Convert a hexadecimal to RGB format

## Installation

Package is distributed via npm:

```javascript
npm i @defo550/hex-to-rgb
```

## Usage

```javascript
const hexRgb = require('@defo550/hex-to-rgb');

hexRgb('#ffa100');
// [255, 161, 0]

hexRgb('#000');
// [0, 0, 0]
```
