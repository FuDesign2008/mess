#!/usr/bin/env node

'use strict';

/**
 * @param {Integer} index
 * @return {String}
 */
var convertIndex = function (index) {

  if (index < 1) {
    return;
  }

  var strIndex = '',
      charCodeA = 'A'.charCodeAt(0),
      temp;

  while(index >= 1) {
    temp = index % 26;
    if (temp === 0) {
      strIndex = 'Z' + strIndex;
      index = Math.floor(index / 26) - 1;
    } else {
      strIndex = String.fromCharCode(temp + charCodeA - 1) + strIndex;
      index = Math.floor(index / 26);
    }
  }

  return strIndex;
};


// test
// J
console.log(convertIndex(10));

// BC
console.log(convertIndex(55));

// YZ
console.log(convertIndex(676));

// YY
console.log(convertIndex(675));

// ZA
console.log(convertIndex(677));
console.log(convertIndex(26*52));
