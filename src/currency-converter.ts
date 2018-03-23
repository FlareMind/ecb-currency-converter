import * as https from 'https'
import {parseString} from "xml2js";
import {
    ConvertedObject, ConvertObject, Currencies, Currency,
    Rates
} from "./currencies";

export class CurrencyConverter {

    private ECB_RATES_URL: string = 'https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml';

    private isLoaded: boolean = false;
    private rates: Rates = CurrencyConverter.emptyRatesObject();

    /**
     * Get the rates from the ECB server.
     * @param {Currency} base The base currency to use.
     * @param {boolean} reload If the data should be reloaded from ECB, default is false.
     * @return {Promise<Rates>} A promise that will give the rates.
     */
    getRates(base: Currency, reload=false): Promise<Rates> {
        return new Promise<Rates>((resolve, reject) => {

            // Use cached data if available
            if (this.isLoaded && !reload) {
                resolve(CurrencyConverter.convertBase(this.rates, base));
                return;
            }

            // Load the data from ECB
            https.get(this.ECB_RATES_URL, response => {
                response.on('data', data => {

                    // Convert from XML to JSON
                    this.xmlToRates(data.toString())
                        .then(rates => {
                            this.rates = rates;
                            this.isLoaded = true;
                            resolve(CurrencyConverter.convertBase(this.rates, base));
                        }, reject);
                });
            });
        });
    }

    private static convertBase(rates: Rates, base: Currency): Rates {
        let baseRate: number = rates[base],
            newRates: Rates = CurrencyConverter.emptyRatesObject();

        Object.keys(rates).forEach((currency: Currency) => {
            newRates[currency] = rates[currency] / baseRate;
        });

        return newRates;
    }

    /**
     * Convert between two currencies.
     * @param {ConvertObject} convertObject The currency object that contains info about the conversion.
     * @return {Promise<ConvertedObject>} A promise that will return the new currency and quantity.
     */
    convert(convertObject: ConvertObject): Promise<ConvertedObject> {
        return new Promise<ConvertedObject>((resolve, reject) => {
            this.getRates(Currencies.EUR).then(rates => {
                resolve({
                    quantity: convertObject.quantity / rates[convertObject.from]
                    * rates[convertObject.to],
                    currency: convertObject.to
                });
            }, reject);
        });
    }

    private xmlToRates(xml: string): Promise<Rates> {
        return new Promise<Rates>((resolve, reject) => {
            parseString(xml, {trim: true}, (error, result) => {

                // Check for errors
                if (error !== null) {
                    reject(error);
                    return;
                }

                // Create an empty object
                let rates: Rates = CurrencyConverter.emptyRatesObject();

                // Set the values from ECB
                result['gesmes:Envelope'].Cube[0].Cube[0].Cube.forEach((rateObject: RateObject) => {
                    let currency: string = rateObject.$.currency;

                    if (CurrencyConverter.isCurrency(currency)) {
                        rates[currency] = parseFloat(rateObject.$.rate);
                    }
                });

                resolve(rates);
            });
        });
    }

    private static emptyRatesObject(): Rates {
        return {
            EUR: 1,
            USD: 0,
            JPY: 0,
            BGN: 0,
            CZK: 0,
            DKK: 0,
            GBP: 0,
            HUF: 0,
            PLN: 0,
            RON: 0,
            SEK: 0,
            CHF: 0,
            ISK: 0,
            NOK: 0,
            HRK: 0,
            RUB: 0,
            TRY: 0,
            AUD: 0,
            BRL: 0,
            CAD: 0,
            CNY: 0,
            HKD: 0,
            IDR: 0,
            ILS: 0,
            INR: 0,
            KRW: 0,
            MXN: 0,
            MYR: 0,
            NZD: 0,
            PHP: 0,
            SGD: 0,
            THB: 0,
            ZAR: 0
        }
    }

    private static isCurrency(currency: string): currency is Currency {
        return Object.keys(Currencies).indexOf(currency) !== -1;
    }
}

type RateObject = {
    $: {
        currency: string;
        rate: string;
    };
};