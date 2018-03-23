/**
 * An enum with all supported currencies.
 * @type {{EUR: string; USD: string; JPY: string; BGN: string; CZK: string; DKK: string; GBP: string; HUF: string; PLN: string; RON: string; SEK: string; CHF: string; ISK: string; NOK: string; HRK: string; RUB: string; TRY: string; AUD: string; BRL: string; CAD: string; CNY: string; HKD: string; IDR: string; ILS: string; INR: string; KRW: string; MXN: string; MYR: string; NZD: string; PHP: string; SGD: string; THB: string; ZAR: string}}
 */
export let Currencies: AllCurrenciesObject = {
    EUR: 'EUR',
    USD: 'USD',
    JPY: 'JPY',
    BGN: 'BGN',
    CZK: 'CZK',
    DKK: 'DKK',
    GBP: 'GBP',
    HUF: 'HUF',
    PLN: 'PLN',
    RON: 'RON',
    SEK: 'SEK',
    CHF: 'CHF',
    ISK: 'ISK',
    NOK: 'NOK',
    HRK: 'HRK',
    RUB: 'RUB',
    TRY: 'TRY',
    AUD: 'AUD',
    BRL: 'BRL',
    CAD: 'CAD',
    CNY: 'CNY',
    HKD: 'HKD',
    IDR: 'IDR',
    ILS: 'ILS',
    INR: 'INR',
    KRW: 'KRW',
    MXN: 'MXN',
    MYR: 'MYR',
    NZD: 'NZD',
    PHP: 'PHP',
    SGD: 'SGD',
    THB: 'THB',
    ZAR: 'ZAR'
};

/**
 * The all currency enum type
 */
export type AllCurrenciesObject = {
    EUR: Currency;
    USD: Currency;
    JPY: Currency;
    BGN: Currency;
    CZK: Currency;
    DKK: Currency;
    GBP: Currency;
    HUF: Currency;
    PLN: Currency;
    RON: Currency;
    SEK: Currency;
    CHF: Currency;
    ISK: Currency;
    NOK: Currency;
    HRK: Currency;
    RUB: Currency;
    TRY: Currency;
    AUD: Currency;
    BRL: Currency;
    CAD: Currency;
    CNY: Currency;
    HKD: Currency;
    IDR: Currency;
    ILS: Currency;
    INR: Currency;
    KRW: Currency;
    MXN: Currency;
    MYR: Currency;
    NZD: Currency;
    PHP: Currency;
    SGD: Currency;
    THB: Currency;
    ZAR: Currency;
};

/**
 * The three letter code of the allowed currencies
 */
export type Currency =
    'EUR' | 'USD' | 'JPY' | 'BGN' | 'CZK' | 'DKK' | 'GBP' | 'HUF' | 'PLN' | 'RON' | 'SEK' | 'CHF' | 'ISK' | 'NOK' |
    'HRK' | 'RUB' | 'TRY' | 'AUD' | 'BRL' | 'CAD' | 'CNY' | 'HKD' | 'IDR' | 'ILS' | 'INR' | 'KRW' | 'MXN' | 'MYR' |
    'NZD' | 'PHP' | 'SGD' | 'THB' | 'ZAR';

/**
 * An object that contains all the rates.
 */
export type Rates = {
    EUR: number;
    USD: number;
    JPY: number;
    BGN: number;
    CZK: number;
    DKK: number;
    GBP: number;
    HUF: number;
    PLN: number;
    RON: number;
    SEK: number;
    CHF: number;
    ISK: number;
    NOK: number;
    HRK: number;
    RUB: number;
    TRY: number;
    AUD: number;
    BRL: number;
    CAD: number;
    CNY: number;
    HKD: number;
    IDR: number;
    ILS: number;
    INR: number;
    KRW: number;
    MXN: number;
    MYR: number;
    NZD: number;
    PHP: number;
    SGD: number;
    THB: number;
    ZAR: number;
};

/**
 * Object used as input to convert from one currency to another.
 */
export type ConvertObject = {
    /**
     * The currency to convert from.
     */
    from: Currency;

    /**
     * The currency to convert to.
     */
    to: Currency;

    /**
     * The quantity to convert.
     */
    quantity: number;
};

/**
 * Object used as output from the currency conversion.
 */
export type ConvertedObject = {

    /**
     * Currency converted to.
     */
    currency: Currency;

    /**
     * Quantity in the new currency.
     */
    quantity: number;
};
