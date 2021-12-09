// https://adventofcode.com/2021/day/8

const fs = require('fs');
function getInput(filename) {
  const file = fs.readFileSync(`./${filename}.txt`, "utf8")
    .trim().split("\n");
  return file.map((line) => {
    return line.split(" | ")
      .map((chunk) => chunk.split(" ")
        .map((str) => str.split("").sort()));
  });
}

const smallInput = getInput("smallInput");
const input = getInput("input");

function getUnique(entry) {
  const key = {
    2: 1,
    4: 4,
    3: 7,
    7: 8,
  };
  return entry.map((display) => {
    const value = key[display.length];
    return value ? [value, display] : null;
  }).filter((value) => value);
}

function countUniqueInOutput(entries) {
  return entries.reduce((a, b) => {
    return a + getUnique(b[1]).length;
  }, 0);
}

// console.log(countUniqueInOutput(smallInput)); // 26
// console.log(countUniqueInOutput(input)); // 543

function includes(list, target) {
  return target.map((cha) => {
    return list.includes(cha);
  }).reduce((a, b) => a && b);
}

function decodeSix(display, key) {
  const hasOne = includes(display, key[1]);
  const hasFour = includes(display, key[4]);
  const hasSeven = includes(display, key[7]);
  if (hasFour) {
    return 9;
  } else if (hasOne) {
    return 0;
  } else {
    return 6;
  }
}

function decodeFive(display, key) {
  const hasOne = includes(display, key[1]);
  const hasFour = includes(display, key[4]);
  const nineIncludes = includes(key[9], display);
  if (hasOne && !hasFour) {
    return 3;
  } else if (nineIncludes) {
    return 5;
  } else {
    return 2;
  }
}

function decodeEntry(entry) {
  const key = Array(10);

  getUnique(entry)
    .forEach((unique) => key[unique[0]] = unique[1]);
  
  entry.filter((display) => display.length === 6)
    .forEach((display) => {
      key[decodeSix(display, key)] = display;
    });

  entry.filter((display) => display.length === 5)
    .forEach((display) => {
      key[decodeFive(display, key)] = display;
    });

  const result = {};
  key.forEach((value, dex) => {
    result[value.join("")] = dex;
  });
  return result;
}

function getOutput(entry) {
  const key = decodeEntry(entry[0]);
  let res = "";
  entry[1].forEach((display) => {
    res += key[display.join("")];
  });
  return Number(res);
}

function sumOutputs(entries) {
  return entries.reduce((prev, entry) => {
    return prev + getOutput(entry);
  }, 0);
}

// console.log(sumOutputs(smallInput)); // 61229
// console.log(sumOutputs(input)); // 994266
