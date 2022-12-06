/*
This problem was asked by Microsoft.

Given a 2D matrix of characters and a target word, write a function that returns whether the word can be found in the matrix by going left-to-right, or up-to-down.

For example, given the following matrix:

[['F', 'A', 'C', 'I'],
 ['O', 'B', 'Q', 'P'],
 ['A', 'N', 'O', 'B'],
 ['M', 'A', 'S', 'S']]

and the target word 'FOAM', you should return true, since it's the leftmost column. Similarly, given the target word 'MASS', you should return true, since it's the last row.
 * */

const findWord = (matrix, word) => {
  let found = false;
  for (let i = 0; i < matrix.length; i++) {
    found = findLeftToRightWord(matrix[i], word);
    if (!found) {
      if (wordArr.length > matrix.length) {
        return false;
      }
      found = findUpToDownWord(matrix[i], word, i);
    }
  }
  return found;
};

const findLeftToRightWord = (row, word) => {
  let wordArr = word.split("");
  if (wordArr.length > row.length) {
    return false;
  }
  if (row.includes(...wordArr)) {
    return true;
  }
  return false;
};

const findUpToDownWord = (row, word, index) => {
  let wordArr = word.split("");
  for (let i = 0; i < row.length; i++) {
    console.log(`index: ${index} i: ${i}`);
  }
};

const testOne = [
  ["F", "A", "C", "I"],
  ["O", "B", "Q", "P"],
  ["A", "N", "O", "B"],
  ["M", "A", "S", "S"],
];

// const word = "FOAM";
const word = "MASS";

console.log(`TEST ONE: ${findWord(testOne, word)}`);
