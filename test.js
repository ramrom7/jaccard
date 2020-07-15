/* *********************************************************
 *
 *  Simple tests
 *
 **********************************************************/

'use strict';

const { toBigrams, jIndex } = require('./jaccard');

const t1 = 'This is a simple test text!';
const t2 = 'This is simply a test text!';
const t3 = 'this is a simple test-text.';

const b1 = toBigrams(t1);
const b2 = toBigrams(t2);
const b3 = toBigrams(t3);
const b4 = toBigrams(t1.toLowerCase());

// compare
console.log(jIndex(b1, b2));  // score => 0.833
console.log(jIndex(b1, b3));  // score => 0.731
console.log(jIndex(b2, b3));  // score => 0.607
console.log(jIndex(b1, b4));  // score => 0.913
