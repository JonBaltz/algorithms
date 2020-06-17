const bind = function(func, obj) {
	const constants = Array.prototype.slice.call(arguments, 2);
	return function() {
		return func.apply(obj, constants.concat([...arguments]));
	};
};

Function.prototype.bind = function(obj) {
	const constants = Array.prototype.slice.call(arguments, 1);
	const func = this;
	return function() {
		return func.apply(obj, constants.concat([...arguments]));
	};
};

const alice = {
	name: "Alice",
	talk: function() {
		return `${this.name} has an insightful conversation.`;
	}
};
console.assert(alice.talk() === "Alice has an insightful conversation.");
const bob = { name: "Bob" }
const bobTalk = bind(alice.talk, bob);
console.assert(bobTalk() === "Bob has an insightful conversation.", "Bind binds the function to bob");
console.assert(alice.talk() === "Alice has an insightful conversation.", "Doesn't change the initial function");
const add = (a, b) => a + b;
const addTo5 = bind(add, null, 5);
console.assert(addTo5(6) === 11, "Bind adds constant values to a function", addTo5(6));
const bobTalk2 = alice.talk.bind(bob);
console.assert(bobTalk2() === "Bob has an insightful conversation.", "Function method bind changes name to bob");
const addTo8 = add.bind(null, 8);
console.assert(addTo8(3) === 11, "Function method adds constant values to function", addTo8(3));
