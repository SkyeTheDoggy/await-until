# Await Until

A simple function that waits until a condition is met.

## Installation

```sh
npm intall @qskye/await-until
```

## Usage

```js
const { awaitUntil } = require('await-until');

const conditionFn = () => 5 > 0;

// Default usage
await awaitUntil(conditionFn);

// With custom delay and timeout
await awaitUntil(conditionFn, 100, 5000);
```