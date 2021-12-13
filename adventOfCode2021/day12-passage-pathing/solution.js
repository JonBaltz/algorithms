// https://adventofcode.com/2021/day/12

const fs = require("fs");
function getInput(filename) {
  return fs.readFileSync(`./${filename}.txt`, "utf-8")
    .trim().split("\n")
    .map((line) => line.split("-"));
}

const testInput = getInput("testInput");
const input = getInput("input");

function isLowerCase(str) {
  return str === str.toLowerCase();
}

// function canBeExtended(path, link, paths) {
  // const split = path.split(",");
  // if (isLowerCase(link[1]) && split.includes(link[1])) return null;
  // if (split[split.length - 1] === link[0] && link[0] !== "end") {
    // return `${path},${link[1]}`;
  // }
  // return null;
// }

function repeatedLowerCase(splitPath) {
  for (let i = 0; i < splitPath.length; i++) {
    const point = splitPath[i];
    if (isLowerCase(point) && splitPath.indexOf(point) !== i) return true;
  }
  return false;
}

function canBeExtended(path, link, paths) {
  const split = path.split(",");
  if (link[0] === "end" || link[1] === "start") return null;
  if (isLowerCase(link[1]) && split.includes(link[1]) && repeatedLowerCase(split)) return null;
  if (split[split.length - 1] === link[0]) {
    return `${path},${link[1]}`;
  }
  return null;
}

function buildPaths(list) {
  const paths = new Set();
  list.forEach((link) => {
    if (link[0] === "start") paths.add([...link].join(","));
    if (link[1] === "start") paths.add([...link].reverse().join(","));
  });

  let changed = true;
  while(changed) {
    changed = false;
    const temp = new Set();

    list.forEach((link) => {
      paths.forEach((path) => {
        const forward = canBeExtended(path, link, paths);
        if (forward) temp.add(forward);
        const backward = canBeExtended(path, link.reverse(), paths);
        if (backward) temp.add(backward);
      });
    });

    const before = paths.size;
    temp.forEach((path) => paths.add(path));
    if (paths.size !== before) changed = true;
  }

  return [...paths].filter((path) => path.includes("end"));
}

console.log(buildPaths(testInput).length);
console.log(buildPaths(input).length);

// 10
// 5576

// 36
// 152837
