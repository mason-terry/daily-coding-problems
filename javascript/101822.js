/*
This problem was asked by Microsoft.

Given an array of numbers, find the length of the longest increasing subsequence in the array. The subsequence does not necessarily have to be contiguous.

For example, given the array [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15], the longest increasing subsequence has length 6: it is 0, 2, 6, 9, 11, 15.
*/

const longestIncreasingSubsequence = (arr) => {
  let ln = arr.length - 1;
  let lis = [];
  let maxLen = -Infinity;

  for (let i = 0; i <= ln; i++) {
    lis[i] = 1;
  }

  for (let i = 1; i <= ln; i++) {
    for (let j = 0; j <= i; j++) {
      if (arr[j] < arr[i] && lis[i] < lis[j] + 1) {
        lis[i] = lis[j] + 1;
      }
    }
  }

  for (let i = 0; i < lis.length; i++) {
    if (lis[i] > maxLen) {
      maxLen = lis[i];
    }
  }
  return maxLen;
};

const testOne = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];

console.log(`TEST ONE: ${longestIncreasingSubsequence(testOne)}`);
