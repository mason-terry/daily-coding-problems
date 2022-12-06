/*
This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.
*/

const solution = (arr) => {
  let res = Infinity;
  for (let i = 0; i < arr.length; i++) {
    let n = arr[i] - 1;
    if (n < res && n > 0) {
      res = arr[i];
    }
  }
  return res;
};

const testOne = [3, 4, -1, 1];
const testTwo = [1, 2, 0];

console.log(`test one: ${solution(testOne)}`);
console.log(`test two: ${solution(testTwo)}`);
