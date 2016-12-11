/*!
 * npm-add-engines <https://github.com/tunnckoCore/npm-add-engines>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (http://i.am.charlike.online)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var fs = require('fs')
var add = require('./index')
var test = require('mukla')
var mkdirp = require('mkdirp')
var rimraf = require('rimraf')

test('should throw if `cb` not a function', function (done) {
  function fixture () {
    add(123)
  }
  test.throws(fixture, TypeError)
  test.throws(fixture, /expect `cb` be function/)
  done()
})

test('should not update engines field if already exist', function (done) {
  mkdirp.sync('./fixture')
  fs.writeFileSync('./fixture/package.json', '{"engines": {"a":"b"}}')
  add('./fixture', function (err, pkg) {
    test.ifError(err)
    test.strictEqual(pkg.engines.a, 'b')
    rimraf.sync('./fixture/package.json')
    rimraf.sync('./fixture')
    done()
  })
})

test('should update if no engines field', function (done) {
  add(function (err, pkg) {
    test.ifError(err)
    test.strictEqual(pkg.engines.node, '>=4')
    test.strictEqual(pkg.engines.npm, '>=2')
    done()
  })
})
