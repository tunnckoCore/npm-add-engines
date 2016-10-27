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

## Related
- [create-readdir-stream](https://www.npmjs.com/package/create-readdir-stream): Streaming `fs.readdir`, extensible with smart plugins. No recursion and no globs by… [more](https://github.com/tunnckocore/create-readdir-stream#readme) | [homepage](https://github.com/tunnckocore/create-readdir-stream#readme "Streaming `fs.readdir`, extensible with smart plugins. No recursion and no globs by default - [use][] plugins. Does not stat and doesn't read the filepaths - use plugins. It just push [vinyl][] files to stream. Follows signature and semantics of `fs.creat")
- [function-arguments](https://www.npmjs.com/package/function-arguments): Get arguments of a function, useful for and used in dependency injectors… [more](https://github.com/tunnckocore/function-arguments#readme) | [homepage](https://github.com/tunnckocore/function-arguments#readme "Get arguments of a function, useful for and used in dependency injectors. Works for regular functions, generator functions and arrow functions.")
- [gruu](https://www.npmjs.com/package/gruu):  | [homepage](https://github.com/tunnckoCore/gruu#readme)
- [is-async-function](https://www.npmjs.com/package/is-async-function): Is function really asynchronous function? Trying to guess that based on check… [more](https://github.com/tunnckocore/is-async-function#readme) | [homepage](https://github.com/tunnckocore/is-async-function#readme "Is function really asynchronous function? Trying to guess that based on check if [common-callback-names][] exists as function arguments names or you can pass your custom.")
- [minibase](https://www.npmjs.com/package/minibase): MiniBase is minimalist approach to Base - @node-base, the awesome framework. Foundation… [more](https://github.com/node-minibase/minibase#readme) | [homepage](https://github.com/node-minibase/minibase#readme "MiniBase is minimalist approach to Base - @node-base, the awesome framework. Foundation for building complex APIs with small units called plugins. Works well with most of the already existing [base][] plugins.")
- [npm-pkgs](https://www.npmjs.com/package/npm-pkgs): List user npm packages from the [npmjs.com](http://npm.im)! | [homepage](https://github.com/tunnckoCore/npm-pkgs "List user npm packages from the [npmjs.com](http://npm.im)!")

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/npm-add-engines/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[base]: https://github.com/node-base/base
[common-callback-names]: https://github.com/tunnckocore/common-callback-names
[load-pkg]: https://github.com/jonschlinkert/load-pkg
[use]: https://github.com/jonschlinkert/use
[vinyl]: https://github.com/gulpjs/vinyl

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

