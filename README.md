# simple-uniqueid
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![npm version](https://img.shields.io/npm/v/@rpearce/simple-uniqueid.svg)](https://www.npmjs.com/package/@rpearce/simple-uniqueid) [![npm downloads](https://img.shields.io/npm/dm/@rpearce/simple-uniqueid.svg)](https://www.npmjs.com/package/@rpearce/simple-uniqueid) [![Build Status](https://travis-ci.org/rpearce/simple-uniqueid.svg?branch=master)](https://travis-ci.org/rpearce/simple-uniqueid) [![Coverage Status](https://coveralls.io/repos/github/rpearce/simple-uniqueid/badge.svg?branch=master)](https://coveralls.io/github/rpearce/simple-uniqueid?branch=master) [![Maintainability](https://api.codeclimate.com/v1/badges/8e4debef4b9f0e8acd6e/maintainability)](https://codeclimate.com/github/rpearce/simple-uniqueid/maintainability)

Generate simple unique ids.

This small package relies on `Math.random().toString(16).slice(-4)` to generate
32 unique characters with an optional string prefix.

_Note: This is not a replacement for a real crypto library but is intended for
small-batch use (like HTML `id` attributes)._

## Links
* [Installation](#installation)
* [Usage](#usage)
* [All Conributors](#contributors)
* [Authors](./AUTHORS)
* [Changelog](./CHANGELOG.md)
* [Contributing](./CONTRIBUTING.md)
* [Code of Conduct](./CODE_OF_CONDUCT.md)

## Installation
```
$ npm i @rpearce/simple-uniqueid
```
or
```
$ yarn add @rpearce/simple-uniqueid
```

## Usage

```js
import uniqueId from '@rpearce/simple-uniqueid'

uniqueId() // "177dc3d88508b9f8bd2e69982a7d03b8"
uniqueId('myPrefix-') // "myPrefix-64f8fca9b3d96c98a267ba58cf0f9eb8"
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://robertwpearce.com"><img src="https://avatars2.githubusercontent.com/u/592876?v=4" width="100px;" alt=""/><br /><sub><b>Robert Pearce</b></sub></a><br /><a href="https://github.com/rpearce/simple-uniqueid/commits?author=rpearce" title="Code">💻</a> <a href="https://github.com/rpearce/simple-uniqueid/commits?author=rpearce" title="Documentation">📖</a> <a href="#example-rpearce" title="Examples">💡</a> <a href="#ideas-rpearce" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/rpearce/simple-uniqueid/commits?author=rpearce" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
