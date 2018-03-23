# ecb-currency-converter
[![Build Status](https://travis-ci.org/FlareMind/ecb-currency-converter.svg?branch=master)](https://travis-ci.org/FlareMind/ecb-currency-converter)
Convert currencies using data from the European Central Bank.

## Installation

With npm
```
npm install --save ecb-currency-converter
```

## Documentation
Documentation is available [here](docs/README.md).

## Example
Example of currency conversion

```typescript
import {CurrencyConverter} from "../src";

// Create converter
let currencyConverter: CurrencyConverter = new CurrencyConverter();

currencyConverter

    // Convert from EUR to SEK
    .convert({
        from: "EUR",
        to: "SEK",
        quantity: 100
    })

    // Get results
    .then(result => {
        /*
         * Result is for example
         * {
         *     currency: 'SEK',
         *     quantity: 1019.22759
         * }
         */
    });
```

## Contribute
Make sure to run the tests
```
npm test
```