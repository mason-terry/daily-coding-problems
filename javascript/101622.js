/*

This problem was asked by Square.

You are given a histogram consisting of rectangles of different heights.
These heights are represented in an input list, such that [1, 3, 2, 5] corresponds to the following diagram:

  x
  x
  x   x
  x x x
x x x x

Determine the area of the largest rectangle that can be formed only from the bars of the histogram.
For the diagram above, for example, this would be six, representing the 2 x 3 area at the bottom right.

*/

// get height of first item
// length = 1
// if gt or equal to add 1 to length and multiply
// if less than height change height to new item and get total, if new area is greater than old area, keep going, if not stop and record area

const findLargestRectangle = (hist) => {
  let height = 0;
  let length = 0;
  let area = -Infinity;
  let total = -Infinity;
  for (let i = 0; i < hist.length; i++) {
    area = -Infinity;
    length = 0;
    height = 0;
    height = hist[i];
    length++;
    for (let j = i + 1; j < hist.length; j++) {
      if (hist[j] >= height) {
        length++;
        if (height * length > area) {
          area = height * length;
        }
      }
      if (hist[j] < height) {
        area = length * height;
        height = hist[j];
        length++;
        if (height * length > area) {
          area = height * length;
        }
      }
    }
    if (area > total) {
      total = area;
    }
  }
  return total;
};

const hist1 = [1, 5, 2, 3];
const hist2 = [4, 4, 5, 6];
const hist3 = [2, 4, 5, 6];
const hist4 = [4, 10, 2, 2];
const hist5 = [4, 10, 21, 2];

console.log("Should be 6:", findLargestRectangle(hist1));
console.log("Should be 16:", findLargestRectangle(hist2));
console.log("Should be 12:", findLargestRectangle(hist3));
console.log("Should be 10:", findLargestRectangle(hist4));
console.log("Should be 21:", findLargestRectangle(hist5));
