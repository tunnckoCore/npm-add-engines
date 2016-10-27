#!/usr/bin/env node

var fs = require('fs')
var path = require('path')
var utils = require('./utils')
var argv = utils.minimist(process.argv.slice(2))
var add = require('./index')
var fp = path.resolve(argv.cwd || '.', 'package.json')

function onerror (err) {
  console.log(err.stack || err)
  process.exit(1)
}

function done (err, pkg) {
  if (err) return onerror(err)
  var json = JSON.stringify(pkg, null, 2)

  fs.writeFile(fp, json, function cb (err) {
    if (err) return onerror(err)
    console.log('Successfully updated!')
    console.log('Path:', fp)
    process.exit(0)
  })
}

var cwd = argv.cwd ? argv.cwd : done
add(cwd, done)
