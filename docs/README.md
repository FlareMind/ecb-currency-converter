
# ecb-currency-converter documentation


## Index

### Classes

* [CurrencyConverter](classes/currencyconverter.md)


### Type aliases

* [AllCurrenciesObject](#allcurrenciesobject)
* [ConvertObject](#convertobject)
* [ConvertedObject](#convertedobject)
* [Currency](#currency)
* [RateObject](#rateobject)
* [Rates](#rates)


### Object literals

* [Currencies](#currencies)



---
# Type aliases
<a id="allcurrenciesobject"></a>

###  AllCurrenciesObject

**Τ AllCurrenciesObject**:  *`object`* 

*Defined in [currencies.ts:44](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L44)*



The all currency enum type

#### Type declaration




 AUD: [Currency](#currency)






 BGN: [Currency](#currency)






 BRL: [Currency](#currency)






 CAD: [Currency](#currency)






 CHF: [Currency](#currency)






 CNY: [Currency](#currency)






 CZK: [Currency](#currency)






 DKK: [Currency](#currency)






 EUR: [Currency](#currency)






 GBP: [Currency](#currency)






 HKD: [Currency](#currency)






 HRK: [Currency](#currency)






 HUF: [Currency](#currency)






 IDR: [Currency](#currency)






 ILS: [Currency](#currency)






 INR: [Currency](#currency)






 ISK: [Currency](#currency)






 JPY: [Currency](#currency)






 KRW: [Currency](#currency)






 MXN: [Currency](#currency)






 MYR: [Currency](#currency)






 NOK: [Currency](#currency)






 NZD: [Currency](#currency)






 PHP: [Currency](#currency)






 PLN: [Currency](#currency)






 RON: [Currency](#currency)






 RUB: [Currency](#currency)






 SEK: [Currency](#currency)






 SGD: [Currency](#currency)






 THB: [Currency](#currency)






 TRY: [Currency](#currency)






 USD: [Currency](#currency)






 ZAR: [Currency](#currency)







___

<a id="convertobject"></a>

###  ConvertObject

**Τ ConvertObject**:  *`object`* 

*Defined in [currencies.ts:130](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L130)*



Object used as input to convert from one currency to another.

#### Type declaration




 from: [Currency](#currency)


The currency to convert from.






 quantity: `number`


The quantity to convert.






 to: [Currency](#currency)


The currency to convert to.







___

<a id="convertedobject"></a>

###  ConvertedObject

**Τ ConvertedObject**:  *`object`* 

*Defined in [currencies.ts:150](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L150)*



Object used as output from the currency conversion.

#### Type declaration




 currency: [Currency](#currency)


Currency converted to.






 quantity: `number`


Quantity in the new currency.







___

<a id="currency"></a>

###  Currency

**Τ Currency**:  *"EUR"⎮"USD"⎮"JPY"⎮"BGN"⎮"CZK"⎮"DKK"⎮"GBP"⎮"HUF"⎮"PLN"⎮"RON"⎮"SEK"⎮"CHF"⎮"ISK"⎮"NOK"⎮"HRK"⎮"RUB"⎮"TRY"⎮"AUD"⎮"BRL"⎮"CAD"⎮"CNY"⎮"HKD"⎮"IDR"⎮"ILS"⎮"INR"⎮"KRW"⎮"MXN"⎮"MYR"⎮"NZD"⎮"PHP"⎮"SGD"⎮"THB"⎮"ZAR"* 

*Defined in [currencies.ts:83](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L83)*



The three letter code of the allowed currencies




___

<a id="rateobject"></a>

###  RateObject

**Τ RateObject**:  *`object`* 

*Defined in [currency-converter.ts:144](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currency-converter.ts#L144)*


#### Type declaration




 $: `object`








 currency: `string`






 rate: `string`








___

<a id="rates"></a>

###  Rates

**Τ Rates**:  *`object`* 

*Defined in [currencies.ts:91](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L91)*



An object that contains all the rates.

#### Type declaration




 AUD: `number`






 BGN: `number`






 BRL: `number`






 CAD: `number`






 CHF: `number`






 CNY: `number`






 CZK: `number`






 DKK: `number`






 EUR: `number`






 GBP: `number`






 HKD: `number`






 HRK: `number`






 HUF: `number`






 IDR: `number`






 ILS: `number`






 INR: `number`






 ISK: `number`






 JPY: `number`






 KRW: `number`






 MXN: `number`






 MYR: `number`






 NOK: `number`






 NZD: `number`






 PHP: `number`






 PLN: `number`






 RON: `number`






 RUB: `number`






 SEK: `number`






 SGD: `number`






 THB: `number`






 TRY: `number`






 USD: `number`






 ZAR: `number`







___


<a id="currencies"></a>

## Object literal: Currencies


An enum with all supported currencies.
*__type__*: {{EUR: string; USD: string; JPY: string; BGN: string; CZK: string; DKK: string; GBP: string; HUF: string; PLN: string; RON: string; SEK: string; CHF: string; ISK: string; NOK: string; HRK: string; RUB: string; TRY: string; AUD: string; BRL: string; CAD: string; CNY: string; HKD: string; IDR: string; ILS: string; INR: string; KRW: string; MXN: string; MYR: string; NZD: string; PHP: string; SGD: string; THB: string; ZAR: string}}



<a id="currencies.aud"></a>

###  AUD

**●  AUD**:  *"AUD"*  = "AUD"

*Defined in [currencies.ts:23](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L23)*





___
<a id="currencies.bgn"></a>

###  BGN

**●  BGN**:  *"BGN"*  = "BGN"

*Defined in [currencies.ts:9](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L9)*





___
<a id="currencies.brl"></a>

###  BRL

**●  BRL**:  *"BRL"*  = "BRL"

*Defined in [currencies.ts:24](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L24)*





___
<a id="currencies.cad"></a>

###  CAD

**●  CAD**:  *"CAD"*  = "CAD"

*Defined in [currencies.ts:25](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L25)*





___
<a id="currencies.chf"></a>

###  CHF

**●  CHF**:  *"CHF"*  = "CHF"

*Defined in [currencies.ts:17](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L17)*





___
<a id="currencies.cny"></a>

###  CNY

**●  CNY**:  *"CNY"*  = "CNY"

*Defined in [currencies.ts:26](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L26)*





___
<a id="currencies.czk"></a>

###  CZK

**●  CZK**:  *"CZK"*  = "CZK"

*Defined in [currencies.ts:10](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L10)*





___
<a id="currencies.dkk"></a>

###  DKK

**●  DKK**:  *"DKK"*  = "DKK"

*Defined in [currencies.ts:11](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L11)*





___
<a id="currencies.eur"></a>

###  EUR

**●  EUR**:  *"EUR"*  = "EUR"

*Defined in [currencies.ts:6](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L6)*





___
<a id="currencies.gbp"></a>

###  GBP

**●  GBP**:  *"GBP"*  = "GBP"

*Defined in [currencies.ts:12](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L12)*





___
<a id="currencies.hkd"></a>

###  HKD

**●  HKD**:  *"HKD"*  = "HKD"

*Defined in [currencies.ts:27](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L27)*





___
<a id="currencies.hrk"></a>

###  HRK

**●  HRK**:  *"HRK"*  = "HRK"

*Defined in [currencies.ts:20](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L20)*





___
<a id="currencies.huf"></a>

###  HUF

**●  HUF**:  *"HUF"*  = "HUF"

*Defined in [currencies.ts:13](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L13)*





___
<a id="currencies.idr"></a>

###  IDR

**●  IDR**:  *"IDR"*  = "IDR"

*Defined in [currencies.ts:28](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L28)*





___
<a id="currencies.ils"></a>

###  ILS

**●  ILS**:  *"ILS"*  = "ILS"

*Defined in [currencies.ts:29](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L29)*





___
<a id="currencies.inr"></a>

###  INR

**●  INR**:  *"INR"*  = "INR"

*Defined in [currencies.ts:30](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L30)*





___
<a id="currencies.isk"></a>

###  ISK

**●  ISK**:  *"ISK"*  = "ISK"

*Defined in [currencies.ts:18](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L18)*





___
<a id="currencies.jpy"></a>

###  JPY

**●  JPY**:  *"JPY"*  = "JPY"

*Defined in [currencies.ts:8](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L8)*





___
<a id="currencies.krw"></a>

###  KRW

**●  KRW**:  *"KRW"*  = "KRW"

*Defined in [currencies.ts:31](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L31)*





___
<a id="currencies.mxn"></a>

###  MXN

**●  MXN**:  *"MXN"*  = "MXN"

*Defined in [currencies.ts:32](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L32)*





___
<a id="currencies.myr"></a>

###  MYR

**●  MYR**:  *"MYR"*  = "MYR"

*Defined in [currencies.ts:33](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L33)*





___
<a id="currencies.nok"></a>

###  NOK

**●  NOK**:  *"NOK"*  = "NOK"

*Defined in [currencies.ts:19](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L19)*





___
<a id="currencies.nzd"></a>

###  NZD

**●  NZD**:  *"NZD"*  = "NZD"

*Defined in [currencies.ts:34](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L34)*





___
<a id="currencies.php"></a>

###  PHP

**●  PHP**:  *"PHP"*  = "PHP"

*Defined in [currencies.ts:35](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L35)*





___
<a id="currencies.pln"></a>

###  PLN

**●  PLN**:  *"PLN"*  = "PLN"

*Defined in [currencies.ts:14](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L14)*





___
<a id="currencies.ron"></a>

###  RON

**●  RON**:  *"RON"*  = "RON"

*Defined in [currencies.ts:15](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L15)*





___
<a id="currencies.rub"></a>

###  RUB

**●  RUB**:  *"RUB"*  = "RUB"

*Defined in [currencies.ts:21](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L21)*





___
<a id="currencies.sek"></a>

###  SEK

**●  SEK**:  *"SEK"*  = "SEK"

*Defined in [currencies.ts:16](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L16)*





___
<a id="currencies.sgd"></a>

###  SGD

**●  SGD**:  *"SGD"*  = "SGD"

*Defined in [currencies.ts:36](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L36)*





___
<a id="currencies.thb"></a>

###  THB

**●  THB**:  *"THB"*  = "THB"

*Defined in [currencies.ts:37](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L37)*





___
<a id="currencies.try"></a>

###  TRY

**●  TRY**:  *"TRY"*  = "TRY"

*Defined in [currencies.ts:22](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L22)*





___
<a id="currencies.usd"></a>

###  USD

**●  USD**:  *"USD"*  = "USD"

*Defined in [currencies.ts:7](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L7)*





___
<a id="currencies.zar"></a>

###  ZAR

**●  ZAR**:  *"ZAR"*  = "ZAR"

*Defined in [currencies.ts:38](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currencies.ts#L38)*





___


