/* *********************************************************
 *
 *  Jaccard Index 0.1.0-beta
 *
 *  Copyright (c) 2020 RAM7
 *
 *  MIT License
 **********************************************************/

'use strict';

/*
  USAGE:

    const b1 = toBigrams( text1 );
    const b2 = toBigrams( text2 );

    const score = jIndex( b1, b2 );
    // => [0, 1]
 */

function toBigrams(txt) {
  if ( txt.length < 2 ) return [ txt ];

  const bigrams = new Set();
  for(let i = 0; i < txt.length - 1; i++) {
    bigrams.add(txt.substr(i, 2));
  }

  return [ ...bigrams ].sort();
}

function jIndex(a, b) {
  const ul = _union(a, b).length;
  return ul ? _intersection(a, b).length / ul : 0;
}

function _intersection(a, b) {
  return a.filter(e => ~b.indexOf(e));
}

function _union(a, b) {
  return [ ...(new Set(a.concat(b))) ];
}

module.exports = { toBigrams, jIndex };
