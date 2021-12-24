// https://adventofcode.com/2021/day/18

const fs = require("fs");
function getInput(filename) {
  return fs.readFileSync(`./${filename}.txt`, "utf-8").
    trim().split("\n").
    map((line) => {
      return line.split("[").join(" [ ").
        split("]").join(" ] ").
        split(",").join(" , ").
        split(" ").filter((a) => a).
        map((val) => isNaN(Number(val)) ? val : Number(val));
    });
}

const smallInput = getInput("smallInput");
const input = getInput("input");

function addSn(a, b) {
  let sum = ["[", ...a, ",",  ...b, "]"];
  return sum;
}

function closestLeftIndex(index, number) {
  for (let i = index - 1; i >= 0; i--) {
    if (!isNaN(number[i])) return i;
  }
  return null;
}

function closestRightIndex(index, number) {
  for (let i = index + 1; i < number.length; i++) {
    if (!isNaN(number[i])) return i;
  }
  return null;
}

function explodeSn(number) {
  const deepPair = [];

  let depth = 0;
  for (let i = 0; i < number.length; i++) {
    if (!isNaN(number[i])) {
      if (depth === 5) {
        deepPair.push(i);
        if (deepPair.length === 2) break;
      }
    } else if (number[i] === "[") {
      depth++;
    } else if (number[i] === "]") {
      depth--;
    }
  }

  if (!deepPair.length) return null;

  const left = closestLeftIndex(deepPair[0], number);
  if (left) {
    number[left] += number[deepPair[0]];
  }
  const right = closestRightIndex(deepPair[1], number);
  if (right) {
    number[right] += number[deepPair[1]];
  }

  number.splice(deepPair[0] - 1, 5, 0);
  return number;
}

function splitSn(number) {
  for (let i = 0; i < number.length; i++) {
    if (number[i] >= 10) {
      const half = number[i] / 2;
      number.splice(i, 1, ...[
        "[",
        Math.floor(half),
        ",",
        Math.ceil(half),
        "]"
      ]);
      return number;
    }
  }

  return null;
}

function reduceSn(number) {
  while (true) {
    if (explodeSn(number)) continue;
    if (splitSn(number)) continue;
    return number;
  }
}

function getMagnitude(number) {
  if (!Array.isArray(number)) return number;

  return 3 * getMagnitude(number[0]) + 2 * getMagnitude(number[1]);
}

function clone(arr) {
  return [...arr];
}

function part1(input) {
  const finalSum = input.reduce((sum, line) => {
    return reduceSn(addSn(sum, clone(line)));
  });

  return getMagnitude(JSON.parse(finalSum.join("")));
}

function part2(input) {
  let max = 0;
  for (const line1 of input) {
    for (const line2 of input) {
      const sum = reduceSn(addSn(clone(line1), clone(line2)));
      max = Math.max(max, getMagnitude(JSON.parse(sum.join(""))));
    }
  }
  return max;
}

console.log(part1(smallInput)); // 4140
console.log(part1(input)); // 4057

console.log(part2(smallInput)); // 3993
console.log(part2(input)); // 4683
