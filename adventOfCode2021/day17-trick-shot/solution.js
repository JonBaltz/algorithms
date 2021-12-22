// https://adventofcode.com/2021/day/17

const example = [[20, 30], [-10, -5]];
const input = [[60, 94], [-171, -136]];

function xSim(v, range) {
  let x = 0;
  let turns = 0;
  const hits = [];
  while (v) {
    x += v--;
    turns++;
    if (x >= range[0] && x <= range[1]) {
      if (hits.length) {
        hits[1] = turns;
      } else {
        hits[0] = turns;
        hits[1] = turns;
      }
    }
  }
  if (turns === hits[1]) hits[1] = null;

  return hits.length ? hits : null;
}

function ySim(v, range) {
  let y = 0;
  let turns = 0;
  const hits = [];
  let maxHeight = 0;

  while ((y += v--) >= range[0]) {
    turns++;
    maxHeight = Math.max(maxHeight, y);
    if (y <= range[1]) {
      if (hits.length) {
        hits[1] = turns;
      } else {
        hits[0] = turns;
        hits[1] = turns;
      }
    }
  }

  return hits.length ? [hits, maxHeight] : null;
}

function overlap(a, b) {
  return (
    (a[0] >= b[0] && a[0] <= b[1]) ||
    (b[0] >= a[0] && (!a[1] || b[0] <= a[1]))
  );
}

function bestVelocity(target) {
  const [xTarget, yTarget] = target;

  const xHits = [];
  for (let i = 1; i <= xTarget[1]; i++) {
    const curr = xSim(i, xTarget);
    if (!curr) continue;
    xHits.push(curr);
  }

  let yMax = 0;
  const yHits = [];
  for (let i = yTarget[0]; i < Math.abs(yTarget[0]); i++) {
    const curr = ySim(i, yTarget);
    if (!curr) continue;
    yMax = Math.max(yMax, curr[1]);
    yHits.push(curr[0]);
  }

  let count = 0;
  for (const xHit of xHits) {
    for (const yHit of yHits) {
      if (overlap(xHit, yHit)) {
        count++;
      } else {
      }
    }
  }

  return [count, yMax];
}

console.log(bestVelocity(example)); // [ 112, 45 ]
console.log(bestVelocity(input)); // [ 2270, 14535 ]
