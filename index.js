/*!
 * npm-add-engines <https://github.com/tunnckoCore/npm-add-engines>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var utils = require('./utils')

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
    pkg.engines.npm = '>=3'
    cb(null, pkg)
  }

  return typeof dir !== 'string'
    ? utils.loadPkg(callback)
    : utils.loadPkg(dir, callback)
}
