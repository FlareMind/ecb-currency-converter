import 'mocha'
import {CurrencyConverter} from "../src";
import {Currencies} from "../src";

describe('CurrencyConverter', () => {
    it('should read data from ESC', done => {
        new CurrencyConverter().getRates(Currencies.EUR).then(rates => {
            done();
        });
    });

    it('should convert currencies', done => {
        new CurrencyConverter().convert({
            from: Currencies.EUR,
            to: Currencies.SEK,
            quantity: 100
        }).then(result => {
            if (result.currency !== 'SEK') {
                done(new Error('Currency should be SEK'));
            } else {
                done();
            }
        });
    });
});

