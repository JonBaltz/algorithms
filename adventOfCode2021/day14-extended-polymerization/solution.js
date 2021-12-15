// https://adventofcode.com/2021/day/14

const fs = require("fs");
function getInput(filename) {
  const file = fs.readFileSync(`./${filename}.txt`, "utf-8").
    trim().split("\n\n")
  return [
    file[0].split(""),
    Object.fromEntries(file[1].split("\n").map((line) => line.split(" -> ")))
  ];
}

const input = getInput("input");
const smallInput = getInput("smallInput");

function addOrInit(obj, key, val) {
  if (obj[key]) {
    obj[key] += val;
  } else obj[key] = val;
}

function buildPairs(poly, chart) {
  const pairs = {};
  const counts = {};
  for (const pair in chart) {
    pairs[pair] = 0;
  }
  for (let i = 1; i < poly.length; i++) {
    const pair = poly[i - 1] + poly[i];
    pairs[pair]++;
  }
  poly.forEach((letter) => {
    addOrInit(counts, letter, 1);
  });
  return [pairs, counts];
}

function runStep(pairs, chart, counts) {
  const temp = {};
  for (const pair in pairs) {
    const letter = chart[pair];
    addOrInit(counts, letter, pairs[pair]);
    
    const a = pair[0] + letter;
    const b = letter + pair[1];

    addOrInit(temp, a, pairs[pair]);
    addOrInit(temp, b, pairs[pair]);

    pairs[pair] = 0;
  }
  Object.assign(pairs, temp);
}

function runNSteps(input, N) {
  const [pairs, counts] = buildPairs(...input);

  for (let i = 0; i < N; i++) {
    runStep(pairs, input[1], counts);
  }
  
  const values = Object.values(counts).sort((a, b) => a - b);
  return values[values.length - 1] - values[0];
}

// console.log(runNSteps(smallInput, 10)); // 1588
// console.log(runNSteps(input, 10)); // 2851
// console.log(runNSteps(smallInput, 40)); // 2188189693529
// console.log(runNSteps(input, 40)); // 10002813279337
