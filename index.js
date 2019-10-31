/* -*- coding: UTF-8, tab-width: 2 -*- */
/*jslint indent: 2, maxlen: 80, node: true */
'use strict';

module.exports = function flatten(list, depth) {
  depth = (typeof depth === 'number') ? depth : Infinity;

  function coreFlatten(list, d) {
    return list.reduce(function (acc, item) {
      if (Array.isArray(item) && d < depth) {
        return acc.concat(coreFlatten(item, d + 1));
      }
      return acc.concat(item);
    }, []);
  }

  if (depth > 0) { return coreFlatten(list, 1); }
  if (Array.isArray(list)) { return list.slice(); }
  return list;
};
