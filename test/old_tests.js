/* -*- coding: UTF-8, tab-width: 2 -*- */
/*jslint indent: 2, maxlen: 80, node: true */
'use strict';

var flatten = require('../'),
  util = require('util'),
  assert = require('assert');

function formatCall(t) {
  if (t[2] === undefined) {
    return util.format('`flatten(%j) == %j`', t[0], t[1]);
  }
  return util.format('`flatten(%j, %j) == %j`', t[0], t[2], t[1]);
}

[
  [ [1, [ 2, 3]], [1, [2, 3]], 0],
  [ [1, 2, 3 ], [1, 2, 3] ],
  [ ['a', ['b', ['c']]], ['a', 'b', 'c'] ],
  [ [2, [4, 6], 8, [[10]]], [2, 4, 6, 8, 10] ],
  [ [1, [2, [3, [4, [5]]]]], [1, 2, 3, [4, [5]]], 2 ] // depth of 2
].forEach(function (t) {
  assert.deepStrictEqual(flatten(t[0], t[2]), t[1],
    util.format('☠☠☠☠☠☠☠☠☠ %s ☠☠☠☠☠☠☠☠☠', formatCall(t)));
  console.log('✓ %s', formatCall(t));
});
