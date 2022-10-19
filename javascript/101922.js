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
  let wordArr = word.split("");
  console.log({ wordArr });
  for (let i = 0; i < matrix.length; i++) {
    console.log(`${matrix[i]}`);
    findWordInRow(matrix[i], wordArr);
  }
  console.log({ word });
  return matrix;
};

const findWordInRow = (row, wordArr) => {
  for (let i = 0; i < wordArr.length; i++) {
    console.log(`${wordArr[i]}`);
    for (let j = 0; j < row.length; j++) {
      console.log(`${row[j]}`);
    }
  }
  return;
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
