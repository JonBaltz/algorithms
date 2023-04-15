def sumEvens(nums):
	return sum([num for num in nums if num % 2 == 0])

print(sumEvens([1, 2, 3, 4, 5, 6]), 12)
print(sumEvens([1, 5, 3, 41, 5, 9]), 0)
print(sumEvens([]), 0)
print(sumEvens([0]), 0)
print(sumEvens([2]), 2)
