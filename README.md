# [npm-add-engines][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] [![npm downloads][downloads-img]][downloads-url] 

> Add engines field to your package.json file in current working directory or user-defined directory

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install
> Install with [npm](https://www.npmjs.com/)

```
$ npm i npm-add-engines --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const npmAddEngines = require('npm-add-engines')
```

## API

### [npmAddEngines](index.js#L38)
> Update `package.json` file of `dir` or current working directory, using [load-pkg][] behind.

**Example**

```js
var add = require('npm-add-engines')

add(function cb (err, pkg) {
  console.log(err) // => if error
  console.log(pkg.engines) // => { node: '>=4', npm: '>3' }
})

add('~/foo/bar/dir', function cb (err, pkg) {
  console.log(err) // => if error
  console.log(pkg.name) // => my-foo-pkg
  console.log(pkg.engines) // => { node: '>=4', npm: '>3' }
})
```

**Params**

* `[dir]` **{String|Function}**: optional, can be `cb`    
* `<cb>` **{Function}**: required, callback function    

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/npm-add-engines/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[npmjs-url]: https://www.npmjs.com/package/npm-add-engines
[npmjs-img]: https://img.shields.io/npm/v/npm-add-engines.svg?label=npm-add-engines

[license-url]: https://github.com/tunnckoCore/npm-add-engines/blob/master/LICENSE
[license-img]: https://img.shields.io/npm/l/npm-add-engines.svg

[downloads-url]: https://www.npmjs.com/package/npm-add-engines
[downloads-img]: https://img.shields.io/npm/dm/npm-add-engines.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/npm-add-engines
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/npm-add-engines.svg

[travis-url]: https://travis-ci.org/tunnckoCore/npm-add-engines
[travis-img]: https://img.shields.io/travis/tunnckoCore/npm-add-engines/master.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/npm-add-engines
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/npm-add-engines.svg

[david-url]: https://david-dm.org/tunnckoCore/npm-add-engines
[david-img]: https://img.shields.io/david/tunnckoCore/npm-add-engines.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg

[load-pkg]: https://github.com/jonschlinkert/load-pkg