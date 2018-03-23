[ecb-currency-converter](../README.md) > [CurrencyConverter](../classes/currencyconverter.md)



# Class: CurrencyConverter

## Index

### Properties

* [ECB_RATES_URL](currencyconverter.md#ecb_rates_url)
* [isLoaded](currencyconverter.md#isloaded)
* [rates](currencyconverter.md#rates)


### Methods

* [convert](currencyconverter.md#convert)
* [getRates](currencyconverter.md#getrates)
* [xmlToRates](currencyconverter.md#xmltorates)
* [convertBase](currencyconverter.md#convertbase)
* [emptyRatesObject](currencyconverter.md#emptyratesobject)
* [isCurrency](currencyconverter.md#iscurrency)



---
## Properties
<a id="ecb_rates_url"></a>

### «Private» ECB_RATES_URL

**●  ECB_RATES_URL**:  *`string`*  = "https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml"

*Defined in [currency-converter.ts:10](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currency-converter.ts#L10)*





___

<a id="isloaded"></a>

### «Private» isLoaded

**●  isLoaded**:  *`boolean`*  = false

*Defined in [currency-converter.ts:12](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currency-converter.ts#L12)*





___

<a id="rates"></a>

### «Private» rates

**●  rates**:  *[Rates](../#rates)*  =  CurrencyConverter.emptyRatesObject()

*Defined in [currency-converter.ts:13](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currency-converter.ts#L13)*





___


## Methods
<a id="convert"></a>

###  convert

► **convert**(convertObject: *[ConvertObject](../#convertobject)*): `Promise`.<[ConvertedObject](../#convertedobject)>



*Defined in [currency-converter.ts:62](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currency-converter.ts#L62)*



Convert between two currencies.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| convertObject | [ConvertObject](../#convertobject)   |  The currency object that contains info about the conversion. |





**Returns:** `Promise`.<[ConvertedObject](../#convertedobject)>
A promise that will return the new currency and quantity.






___

<a id="getrates"></a>

###  getRates

► **getRates**(base: *[Currency](../#currency)*, reload?: *`boolean`*): `Promise`.<[Rates](../#rates)>



*Defined in [currency-converter.ts:21](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currency-converter.ts#L21)*



Get the rates from the ECB server.


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| base | [Currency](../#currency)  | - |   The base currency to use. |
| reload | `boolean`  | false |   If the data should be reloaded from ECB, default is false. |





**Returns:** `Promise`.<[Rates](../#rates)>
A promise that will give the rates.






___

<a id="xmltorates"></a>

### «Private» xmlToRates

► **xmlToRates**(xml: *`string`*): `Promise`.<[Rates](../#rates)>



*Defined in [currency-converter.ts:74](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currency-converter.ts#L74)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| xml | `string`   |  - |





**Returns:** `Promise`.<[Rates](../#rates)>





___

<a id="convertbase"></a>

### «Static»«Private» convertBase

► **convertBase**(rates: *[Rates](../#rates)*, base: *[Currency](../#currency)*): [Rates](../#rates)



*Defined in [currency-converter.ts:46](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currency-converter.ts#L46)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| rates | [Rates](../#rates)   |  - |
| base | [Currency](../#currency)   |  - |





**Returns:** [Rates](../#rates)





___

<a id="emptyratesobject"></a>

### «Static»«Private» emptyRatesObject

► **emptyRatesObject**(): [Rates](../#rates)



*Defined in [currency-converter.ts:101](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currency-converter.ts#L101)*





**Returns:** [Rates](../#rates)





___

<a id="iscurrency"></a>

### «Static»«Private» isCurrency

► **isCurrency**(currency: *`string`*): `boolean`



*Defined in [currency-converter.ts:139](https://github.com/FlareMind/ecb-currency-converter/blob/514aa9d/src/currency-converter.ts#L139)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| currency | `string`   |  - |





**Returns:** `boolean`





___


