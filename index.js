/* -*- coding: UTF-8, tab-width: 2 -*- */
/*jslint indent: 2, maxlen: 80, node: true */
"use strict";
function flatRecurs(arr, d, res) {
  var i = 0, cur, len = arr.length;
  for (i; i < len; i += 1) {
    cur = arr[i];
    if (Array.isArray(cur) && d) {
      flatRecurs(cur, d - 1, res);
    } else {
      res.push(cur);
    }
  }
  return res;
}
module.exports = function flatten(list, depth) {
  var parsedDepth = typeof depth === "number" ? depth : Infinity;
  return flatRecurs(list, parsedDepth, []);
};
