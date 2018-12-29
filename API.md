# API Documentation
This small package relies on `Math.random().toString(16).slice(-4)` to generate
32 unique characters with an optional string prefix.

## Installation
```js
$ npm i @rpearce/simple-uniqueid
```

## Usage

```js
import uniqueId from 'simple-uniqueid'

uniqueId() // "177dc3d88508b9f8bd2e69982a7d03b8"
uniqueId('myPrefix-') // "myPrefix-64f8fca9b3d96c98a267ba58cf0f9eb8"
```
