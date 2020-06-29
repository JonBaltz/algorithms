const mixEvents = function(obj) {
	__events = {};
	obj.on = function(event, func) {
		__events[event] = __events[event] || [];
		__events[event].push(func);
	};
	obj.trigger = function(event) {
		if (__events[event]) {
			const args = Array.prototype.slice.call(arguments, 1);
			for (let i = 0; i < __events[event].length; i++) {
				__events[event][i].apply(obj, args);
			}
		}
	};
	return obj;
};

const dog = mixEvents({ "name":"Betty", "furColor":"Black" });
dog.on("mailman", () => { console.log("WOOF WOOF!!") });
dog.trigger("mailman");
dog.on("mailman", () => { console.log("Betty barks at the mailman") });
dog.trigger("mailman");
dog.trigger("cat");
