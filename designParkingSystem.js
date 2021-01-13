// https://leetcode.com/problems/design-parking-system/

const ParkingSystem = function(big, medium, small) {
	this.left = ["p", big, medium, small];
};

ParkingSystem.prototype.addCar = function(carType) {
	if (this.left[carType]) {
		this.left[carType]--;
		return true;
	} else return false;
};

const test = new ParkingSystem(1, 1, 0);
console.assert(test.addCar(1) === true, "1");
console.assert(test.addCar(2) === true, "2");
console.assert(test.addCar(3) === false, "3");
console.assert(test.addCar(1) === false, "4");

