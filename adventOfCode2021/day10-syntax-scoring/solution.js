// https://adventofcode.com/2021/day/10

const fs = require("fs");
function getInput(filename) {
  return fs.readFileSync(`./${filename}.txt`, "utf-8")
    .trim().split("\n");
}

const input = getInput("input");
const smallInput = getInput("smallInput");

const pointTable = {
  ")": { pair: "(", points: 3 },
  "]": { pair: "[", points: 57 },
  "}": { pair: "{", points: 1197 },
  ">": { pair: "<", points: 25137 }
};

const openTable = {
  "(": 1,
  "[": 2,
  "{": 3,
  "<": 4,
};

function firstIllegal(string) {
  const stack = [];

  for (const letter of string) {
    if (pointTable[letter]) {
      if (pointTable[letter].pair !== stack.pop()) return letter;
    } else stack.push(letter);
  }

  return null;
}

function sumErrorScores(input) {
  return input.map((string) => firstIllegal(string))
    .filter((illegal) => illegal)
    .reduce((prev, illegal) => prev + pointTable[illegal].points, 0);
}

// console.log(sumErrorScores(smallInput)); // 26397
// console.log(sumErrorScores(input)); // 389589

function getEnding(string) {
  const stack = [];

  for (const letter of string) {
    if (pointTable[letter]) {
      if (pointTable[letter].pair !== stack.pop()) return [];
    } else stack.push(letter);
  }

  return stack.reverse().map((letter) => openTable[letter]);
}

function scoreEnding(end) {
  return end.reduce((prev, curr) => curr + (prev * 5), 0);
}

function getMiddleScore(input) {
  const scores = input.map((string) => getEnding(string))
    .filter((end) => end.length)
    .map((end) => scoreEnding(end));
  return scores.sort((a, b) => a - b)[Math.floor(scores.length / 2)];
}

// console.log(getMiddleScore(smallInput)); // 288957
// console.log(getMiddleScore(input)); // 1190420163
