// https://adventofcode.com/2021/day/2

const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf-8").trim().split("\n");
const smallInput = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2'];

function dataCleanup(line) {
  return line.split(' ').map((word, i) => i === 1 ? Number(word) : word);
}

function productOfTuplet(tuplet) {
  return tuplet[0] * tuplet[1];
}

function getPosition(instructions) {
  const position = [0, 0];

  instructions.forEach((instruction) => {
    switch (instruction[0]) {
      case 'forward':
        position[0] += instruction[1];
        break;
      case 'up':
        position[1] -= instruction[1];
        break;
      case 'down':
        position[1] += instruction[1];
        break;
    }
  });

  return position;
}

// console.log(productOfTuplet(getPosition(smallInput.map(dataCleanup))));
// console.log(productOfTuplet(getPosition(input.map(dataCleanup))));

function getPositionWithAim(instructions) {
  const position = [0, 0, 0];
  let aim = 0;

  instructions.forEach((instruction) => {
    switch (instruction[0]) {
      case 'forward':
        position[0] += instruction[1];
        position[1] += instruction[1] * aim;
        break;
      case 'up':
        aim -= instruction[1];
        break;
      case 'down':
        aim += instruction[1];
        break;
    }
  });

  return position;
}

// console.log(productOfTuplet(getPositionWithAim(smallInput.map(dataCleanup))));
// console.log(productOfTuplet(getPositionWithAim(input.map(dataCleanup))));
