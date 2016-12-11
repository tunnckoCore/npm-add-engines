/*!
 * npm-add-engines <https://github.com/tunnckoCore/npm-add-engines>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (http://i.am.charlike.online)
 * Released under the MIT license.
 */

'use strict'

var utils = require('./utils')

/**
 * > Update `package.json` file of `dir` or current
 * working directory, using [load-pkg][] behind.
 *
 * **Example**
 *
 * ```js
 * const add = require('npm-add-engines')
 *
 * add((err, pkg) => {
 *   console.log(err) // => if error
 *   console.log(pkg.engines) // => { node: '>=4', npm: '>=2' }
 * })
 *
 * add('~/foo/bar/dir', (err, pkg) => {
 *   console.log(err) // => if error
 *   console.log(pkg.name) // => my-foo-pkg
 *   console.log(pkg.engines) // => { node: '>=4', npm: '>=2' }
 * })
 * ```
 *
 * @param  {String|Function}   `[dir]` optional, can be `cb`
 * @param  {Function} `<cb>` required, callback function
 * @api public
 */

module.exports = function npmAddEngines (dir, cb) {
  if (typeof dir === 'function') {
    cb = dir
    dir = null
  }
  if (typeof cb !== 'function') {
    throw new TypeError('npm-add-engines: expect `cb` be function')
  }

  function callback (err, pkg) {
    /* istanbul ignore next */
    if (err) return cb(err)
    if (pkg.hasOwnProperty('engines')) {
      return cb(null, pkg)
    }
    pkg.engines = {}
    pkg.engines.node = '>=4'
    pkg.engines.npm = '>=2'
    cb(null, pkg)
  }

  return typeof dir !== 'string'
    ? utils.loadPkg(callback)
    : utils.loadPkg(dir, callback)
}
