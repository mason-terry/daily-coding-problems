/*
This problem was asked by Facebook.

Given a list of integers, return the largest product that can be made by multiplying any three integers.

For example, if the list is [-10, -10, 5, 2], we should return 500, since that's -10 * -10 * 5.

You can assume the list has at least three integers.
 * */

const largestProduct = (arr, int) => {
  console.log(int);
  const largestNums = [];
  for (let i = 0; i < arr.length; i++) {
    console.log();
    if (i === 0) {
      largestNums.push(arr[i]);
    }
  }
  return arr;
};

const testOne = [-10, -10, 5, 2];
const int = 3;

console.log(
  `TEST ONE: receieved: ${largestProduct(testOne, int)} expected: 500`
);
