/*
This problem was asked by Facebook.

Given a list of integers, return the largest product that can be made by multiplying any three integers.

For example, if the list is [-10, -10, 5, 2], we should return 500, since that's -10 * -10 * 5.

You can assume the list has at least three integers.
 * */

const largestProduct = (arr) => {
  const sArr = sort(arr);
  const checkOne = sArr[0] * sArr[1] * sArr[sArr.length - 1];
  const checkTwo =
    sArr[sArr.length - 1] * sArr[sArr.length - 2] * sArr[sArr.length - 3];

  if (checkOne > checkTwo) return checkOne;
  return checkTwo;
};

const sort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      let tmp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = tmp;
      sort(arr);
    }
  }
  return arr;
};

const testOne = [-10, -10, 5, 2];
const testTwo = [-10, 10, 5, 2];
const testThree = [-1, -1, 5, 2];
const testFour = [100, 100, 100, 100];

console.log(`TEST ONE: ${largestProduct(testOne)} expected: 500`);
console.log(`TEST TWO: ${largestProduct(testTwo)} expected: 100`);
console.log(`TEST THREE: ${largestProduct(testThree)} expected: 5`);
console.log(`TEST FOUR: ${largestProduct(testFour)} expected: 10000`);
