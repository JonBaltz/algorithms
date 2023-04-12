const isOneAway = function(a, b) {
  if (a === b) return true;
  if (Math.abs(a.length - b.length) > 1) return false;

  if (a.length === b.length) {
    let changes = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) changes++;
    }
    return changes < 2;
  }

  let longer = a.length > b.length ? a : b;
  let shorter = a.length < b.length ? a : b;

  for (let i = 0; i < longer.length; i++) {
    if (a[i] === b[i]) continue;
    const beforeSame = longer.substring(0, i) === shorter.substring(0, i);
    const afterSame = longer.substring(i + 1) === shorter.substring(i);

    return beforeSame && afterSame;
  }
};

const trueCases = [
  ["hat", "hat"],
  ["", ""],
  ["o", "o"],
  ["abc", "bbc"],
  ["c", ""],
  ["qw", "qwe"],
  ["pale", "ple"],
  ["pales", "pale"],
  ["pale", "bale"],
];

trueCases.forEach(([a, b]) => {
  console.assert(isOneAway(a, b), `${a} and ${b} ARE one away`);
});

const falseCases = [
  ["pale", "bake"],
  ["pale", "ae"],
  ["", "ae"],
  ["bike", "ekib"],
  ["true", "false"],
];

falseCases.forEach(([a, b]) => {
  console.assert(!isOneAway(a, b), `${a} and ${b} are NOT one away`);
});
