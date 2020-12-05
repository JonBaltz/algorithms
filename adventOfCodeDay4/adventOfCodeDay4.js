const fs = require("fs");
const inputFile = fs.readFileSync("./input.txt", "utf-8").trim();

// PART 1:
const passports = inputFile.split("\n\n").map(pass => pass.split("\n").join(" "));
let count = 0;
let required = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

for (let i = 0; i < passports.length; i++) {
	let hasAll = true;
	for (let j = 0; j < required.length; j++) {
		if (!passports[i].includes(required[j])) {
			hasAll = false;
			break;
		}
	}
	if (hasAll) count++;
};

// console.log(count);

//PART 2:
const passports2 = inputFile.split("\n\n").map(pass => JSON.parse("{" + pass.split("\n").join(" ").split(" ").map(field => `"${field.split(":").join("\":\"")}"`).join(", ") + "}"));
let validCount = 0;
for (let i = 0; i < passports2.length; i++) {
	let { byr, iyr, eyr, hgt, hcl, ecl, pid} = passports2[i];
	if (!byr || byr < "1920" || byr > "2002") continue;
	if (!iyr || iyr < "2010" || iyr > "2020") continue;
	if (!eyr || eyr < "2020" || eyr > "2030") continue;
	if (!hgt || !(hgt.endsWith("cm") && hgt >= "150cm" && hgt <= "193cm") && !(hgt.endsWith("in") && hgt >= "59in" && hgt <= "76in")) continue;
	if (!hcl || hcl.length !== 7 || !hcl.match(/#[0-9,a-f]{6}/)) continue;
	const eyeColors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
	if (!ecl || !eyeColors.includes(ecl)) continue;
	if (!pid || pid.length !== 9 || !Number(pid)) continue;
	validCount++;
}

console.log(validCount);
