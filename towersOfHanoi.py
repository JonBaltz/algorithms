class Towers:
	def __init__(self, n):
		pegs = []
		pegs.append(list(range(1, n + 1))[::-1])
		pegs.append([])
		pegs.append([])
		self.pegs = pegs

	def move(self, fromPeg, toPeg):
		self.pegs[toPeg].append(self.pegs[fromPeg].pop())
		return self

	def solve(self, rings, fromPeg, toPeg):
		moves = []
		if rings == 1:
			self.move(fromPeg, toPeg)
			return ["{} -> {}".format(fromPeg, toPeg)]
		moves.extend(self.solve(rings - 1, fromPeg, 3 - fromPeg - toPeg))
		moves.extend(self.solve(1, fromPeg, toPeg))
		moves.extend(self.solve(rings - 1, 3 - fromPeg - toPeg, toPeg))
		return moves

test = Towers(6)
print(test.pegs)
print(test.solve(6, 0, 2))
print(test.pegs)
