const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArray');

assertEqual(eqArrays([1, 2, 3], [1, 4, 3]), true);