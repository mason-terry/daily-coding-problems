/*
This problem was asked by Apple.

A fixed point in an array is an element whose value is equal to its index. Given a sorted array of distinct elements, return a fixed point, if one exists. Otherwise, return False.

For example, given [-6, 0, 2, 40], you should return 2. Given [1, 5, 7, 8], you should return False.
*/

const solution = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i) {
      return arr[i];
    }
  }
  return false;
};

const testOne = [-6, 0, 2, 40];
const testTwo = [1, 5, 7, 8];
const testThree = [0, 1, 2, 3];
const testFour = [3, 2, 1, 0];

console.log(`test one: ${solution(testOne)}`);
console.log(`test two: ${solution(testTwo)}`);
console.log(`test three: ${solution(testThree)}`);
console.log(`test four: ${solution(testFour)}`);
