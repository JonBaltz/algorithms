// This file was used to test the number of steps needed to determine is a linked list has a cycle.
// The max steps were calculated with a variety of lengths, start-indecies, and speeds to create a general conclusion on the number of steps needed.

const cycleStats = function (numOfNodes, cycleStartIndex, hareSpeed) {
	let first = null;
	// This can be altered to make full lists of both paths but was removed for speedier testing of assumptions.
	for (let i = 1; i < 2 * numOfNodes; i++) {
		const currHare = Math.min(((hareSpeed * i) % numOfNodes) + cycleStartIndex, hareSpeed * i);
		const currTort = Math.min((i % numOfNodes) + cycleStartIndex, i);
		if (currHare === currTort) {
			return i;
		}
		// if (currHare === currTort && !first) {
		// 	first = i;
		// }
	}
	// return first;
}

// Assumption: If the entire linked list is a cycle, and the speed is 2 the pointers will meet at the first node.
// Assumption2: If the speed is greater than 2, the cycle will be found at the same index or earlier than if the speed was 2.
// for (let i = 1; i < 1000; i++) {
// 	console.assert(cycleStats(i, 0, 2) === i, "assumption is true", i, cycleStats(i, 0, 2));
// 	console.assert(cycleStats(i, 0, 3) <= i, "higher speed is equal or faster", i);
// }

// Assumption: If the cycle doesn't include all nodes, the pointers will not take more steps to meet than there are nodes
// for (let i = 1; i < 1000; i++) {
// 	for (let j = 1; j < i; j++) {
// 		console.assert(cycleStats(i, j, 2) <= i, "assumption is true");
// 		console.assert(cycleStats(i, j, 3) <= i, "assumption is true");
// 	}
// }


// Conclusion:
// In the linked list cycle algorithm, the slow pointer will never need to take more steps than there are nodes in the linked list to determine if there is a cycle.



// const linkedListCycle = function (head) {
// 	let tort = head;
// 	let hare = head;
// 	while (hare.next && hare.next.next) {
// 		tort = tort.next;
// 		hare = hare.next.next;
// 		if (tort === hare) {
// 			return true;
// 		}
// 	}
// 	return false;
// }

// const Node = function (value) {
// 	this.value = value;
// 	this.next = null;
// }

// const test = new Node(1);
// const two = new Node(2);
// const three = new Node(3);
// const four = new Node(4);
// const five = new Node(5);
// const six = new Node(6);
// test.next = two;
// two.next = three;
// three.next = four;
// four.next = five;
// five.next = six;
// six.next = five;
// console.log(cycleStats(test));

// const test = new Node(1);
// const two = new Node(2);
// const three = new Node(3);
// const four = new Node(4);
// console.log(cycleStats(test));
// test.next = two;
// console.log(cycleStats(test));
// two.next = three;
// console.log(cycleStats(test));
// three.next = four;
// console.log(cycleStats(test));

// console.assert(linkedListCycle(test) === false, "works without cycle");
// three.next = two;
// console.assert(linkedListCycle(test) === true, "finds cycles");
// three.next = four;
// four.next = two;
// console.assert(linkedListCycle(test) === true, "finds cycles");
