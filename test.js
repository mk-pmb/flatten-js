var flatten = require('./index'),
    util = require('util'),
    assert = require('assert');

[
  [ [1, 2, 3 ], [1, 2, 3] ],
  [ ['a', ['b', ['c']]], ['a', 'b', 'c'] ],
  [ [2, [4, 6], 8, [[10]]], [2, 4, 6, 8, 10] ]
].forEach(function (t) {
  assertArrayEqual(flatten(t[0]), t[1]);
  console.log('✓ `flatten(%j) == %j`', t[0], t[1]);
});

function assertArrayEqual(a, b, msg) {
  assert(b.every(function (x, i) {
    return a[i] == x;
  }), msg || util.format('Array %j !== %j', a, b));
}
