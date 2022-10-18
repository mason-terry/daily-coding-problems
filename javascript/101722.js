/*
This problem was asked by Palantir.

In academia, the h-index is a metric used to calculate the impact of a researcher's papers. It is calculated as follows:

A researcher has index h if at least h of her N papers have h citations each. If there are multiple h satisfying this formula, the maximum is chosen.
A researcher has index 3 if at least 3 of her 5 papers have 3 citations each. If there are multiple h satisfying this formula, the maximum is chosen.

For example, suppose N = 5, and the respective citations of each paper are [4, 3, 0, 1, 5]. Then the h-index would be 3, since the researcher has 3 papers with at least 3 citations.

Given a list of paper citations of a researcher, calculate their h-index.
 */

const calculateHIndex = (papers) => {
  let currentHIndex = -Infinity;
  let hIndex = -Infinity;
  let count = 0;
  for (let i = 0; i < papers.length; i++) {
    count = 0;
    count++;
    for (let j = 0; j < papers.length; j++) {
      if (i === j) {
        continue;
      }

      if (papers[j] >= papers[i]) {
        count++;
      }
    }
    if (count >= papers[i]) {
      currentHIndex = papers[i];
      if (currentHIndex > hIndex) {
        hIndex = currentHIndex;
      }
    }
  }
  return hIndex;
};

const test1 = [4, 3, 0, 1, 5];
const test2 = [4, 3, 2, 1, 5];
const test3 = [4, 3, 10, 1, 5];
const test4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const test5 = [10, 8, 5, 4, 3];
const test6 = [25, 8, 5, 3, 3];

console.log(`Test 1 expected: 3 actual: ${calculateHIndex(test1)}`);
console.log(`Test 2 expected: 3 actual: ${calculateHIndex(test2)}`);
console.log(`Test 3 expected: 3 actual: ${calculateHIndex(test3)}`);
console.log(`Test 4 expected: 5 actual: ${calculateHIndex(test4)}`);
console.log(`Test 5 expected: 4 actual: ${calculateHIndex(test5)}`);
console.log(`Test 6 expected: 3 actual: ${calculateHIndex(test6)}`);
