// https://adventofcode.com/2021/day/5

const fs = require('fs');
function importFile(filename) {
  const lines = fs.readFileSync(filename, "utf-8")
    .trim().split("\n");
  return lines.map((line) => {
    return line.split(" -> ")
      .map((cord) => cord.trim().split(',').map((str) => Number(str)));
  });
}

const smallInput = importFile("./smallInput.txt");
const input = importFile("./input.txt");

function countAbove2(board) {
  return Object.values(board).reduce((prev, curr) => {
    return prev + (curr >= 2 ? 1 : 0);
  }, 0);
}

function plotSimpleLine(sto, start, end, axis, orient) {
  for (let i = Math.min(start, end); i <= Math.max(start, end); i++) {
    let pointStr;
    if (orient === "hori") {
      pointStr = axis.toString() + "," + i.toString();
    } else {
      pointStr = i.toString() + "," + axis.toString();
    }

    if (sto[pointStr]) {
      sto[pointStr]++;
    } else sto[pointStr] = 1;
  }
}

function plotComplexLine(sto, x1, x2, y1, y2) {
  const slope = (y2 - y1) / (x2 - x1); 

  for (let i = x1; i <= x2; i++) {
    const pointStr = i.toString() + "," + ((i - x1) * slope + y1).toString();

    if (sto[pointStr]) {
      sto[pointStr]++;
    } else sto[pointStr] = 1;
  }
}

function drawLines(lines, isPartOne) {
  const sto = {};

  lines.forEach((line) => {
    const [x1, y1] = line[0];
    const [x2, y2] = line[1];

    if (x1 === x2) {
      plotSimpleLine(sto, y1, y2, x1, "hori");
    } else if (y1 === y2) {
      plotSimpleLine(sto, x1, x2, y1, "vert");
    } else {
      if (isPartOne) return null;

      if (x1 < x2) {
        plotComplexLine(sto, x1, x2, y1, y2);
      } else {
        plotComplexLine(sto, x2, x1, y2, y1);
      }

    }
  });

  return sto;
}

// console.log(countAbove2(drawLines(smallInput, true))); // 5
// console.log(countAbove2(drawLines(input, true))); // 3990
console.log(countAbove2(drawLines(smallInput, false))); // 12
console.log(countAbove2(drawLines(input, false))); // 21305
