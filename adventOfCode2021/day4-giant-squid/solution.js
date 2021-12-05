// https://adventofcode.com/2021/day/4

const fs = require("fs");
function importFile(filename) {
  const chuncks = fs.readFileSync(filename, "utf-8")
    .trim().split("\n\n");
  const numbers = chuncks.shift().split(',');
  const boards = chuncks.map((board) => {
    return board.split('\n')
      .map((row) => row.split(' ').filter((item) => !!item.length));
  });
  return [numbers, boards];
}

const smallInput = importFile("./smallInput.txt");
const input = importFile("./input.txt");

function checkBoard(board) {
  let result = false;
  board.forEach((row, i) => {
    if (row.length === row.filter((a) => a === true).length) result = true;
    if (board.length === board.filter((a) => a[i] === true).length) result = true;
  });
  return result;
}

function simulateBingo(input) {
  const [numbers, boards] = input;

  let result = null;
  numbers.forEach((number) => {
    boards.forEach((board) => {
      if (result) return;
      board.forEach((row, i) => {
        row.forEach((item, j) => {
          if (item === number) board[i][j] = true;
        });
      });

      if (checkBoard(board)) result = [board, number];
    });
  });

  return result;
}

function findUnmarked(board) {
  return board.reduce((total, row) => {
    const rowSum = row.filter((item) => item !== true)
      .reduce((rowTotal, item) => {
        return rowTotal + Number(item);
      }, 0);
    return rowSum + total;
  }, 0);
}

function getFinalScore(input) {
  const [board, number] = simulateBingo(input);
  return number * findUnmarked(board);
}

// console.log(getFinalScore(smallInput)); // 4512
// console.log(getFinalScore(input)); // 38594

function findLastWinner(input) {
  let [numbers, boards] = input;

  let result = null;
  numbers.forEach((number) => {
    boards.forEach((board) => {
      if (result) return;
      board.forEach((row, i) => {
        row.forEach((item, j) => {
          if (item === number) board[i][j] = true;
        });
      });
      
      if (boards.length === 1 && checkBoard(board)) result = [board, number];
    });
    boards = boards.filter((board) => !checkBoard(board));
  });

  return result;
}

function getLoserScore(input) {
  const [board, number] = findLastWinner(input);
  return number * findUnmarked(board);
}

// console.log(getLoserScore(smallInput)); // 1924
// console.log(getLoserScore(input)); // 21184
