// https://adventofcode.com/2021/day/16

const fs = require("fs");

function hexToBinary(hex) {
  return parseInt(hex, 16).toString(2).padStart(4, "0");
}

const inputs = fs.readFileSync("./input.txt", "utf-8").
  trim().split("\n").
  map((line) => line.split("").
    map((val) => hexToBinary(val)).
    join("").split(""));

function binaryToDecimal(binary) {
  return parseInt(binary.join(""), 2);
}

function operate(typeID, subPackets) {
  const [first, second] = subPackets;
  switch (typeID) {
    case 0:
      return subPackets.reduce((a, b) => a + b, 0);
    case 1:
      return subPackets.reduce((a, b) => a * b, 1);
    case 2:
      return Math.min(...subPackets);
    case 3:
      return Math.max(...subPackets);
    case 5:
      return first > second ? 1 : 0;
    case 6:
      return first < second ? 1 : 0;
    case 7:
      return first === second ? 1 : 0;
  }
}

function decodePacket(packet, arr = []) {
  let versionSum = 0;

  function recurse() {
    versionSum += binaryToDecimal(packet.splice(0, 3));
    const typeID = binaryToDecimal(packet.splice(0, 3));

    if (typeID === 4) {
      const value = [];

      let prefix;
      do {
        prefix = packet.splice(0, 1);
        value.push(...packet.splice(0, 4));
      } while (prefix[0] === "1")

      return binaryToDecimal(value);
    } else {
      const subPackets = [];

      const lengthTypeID = packet.splice(0, 1);
      if (lengthTypeID[0] === "1") {
        const length = binaryToDecimal(packet.splice(0, 11));
        for (let i = 0; i < length; i++) {
          subPackets.push(recurse());
        }
      } else {
        const padLength = packet.length - 15 - binaryToDecimal(packet.splice(0, 15));
        while (packet.length > padLength) {
          subPackets.push(recurse());
        }
      }

      return operate(typeID, subPackets);
    }
  }

  const result = recurse();
  return [result, versionSum];;
}

inputs.forEach((input) => {
  console.log(decodePacket(input));
});
