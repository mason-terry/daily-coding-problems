/*
This problem was asked by Google.

Given a sorted list of integers, square the elements and give the output in sorted order.

For example, given [-9, -2, 0, 2, 3], return [0, 4, 4, 9, 81].
*/

const solution = (arr) => {
  return arr.map((a) => a * a).sort((a, b) => a - b);
};

const testOne = [-9, -2, 0, 2, 3];

console.log(`test one ${solution(testOne)}`);
