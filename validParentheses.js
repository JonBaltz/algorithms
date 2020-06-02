// https://leetcode.com/problems/valid-parentheses/

const isValid = function(str) {
	let storage = [];
	for (let i = 0; i < str.length; i++) {
		let curr = str[i];
		if (curr === "(" || curr === "{" || curr === "[") {
			storage.push(curr);
		} else {
			if (!storage.length) return false;
			let p = storage.pop();
			switch(curr) {
				case ")":
					if (p !== "(") return false;
					break;
				case "}":
					if (p !== "{") return false;
					break;
				case "]":
					if (p !== "[") return false;
					break;
				default:
					return false;
			}
		}
	}
	return storage.length ? false : true;
}

console.assert(isValid("(){}[]") === true, "works for non-nested sets");
console.assert(isValid("[{()}]") === true, "works for a nested set");
console.assert(isValid("((((({") === false, "unclosed sets aren't valid");
console.assert(isValid("))))") === false, "closing without opening is not valid");
console.assert(isValid("{)(}") === false, "interchanging types aren't valid");
