# https://leetcode.com/problems/two-sum/

def twoSumExtraSpace(nums, target):
	map = {}

	for index, value in enumerate(nums):
		if target - value in map:
			return (map[target - value], index)
		else:
			map[value] = index


def twoSum(nums, target):
	low, high = 0, len(nums) - 1

	while low < high:
		current = nums[low] + nums[high]

		if current == target:
			return (low, high)

		if current < target:
			low += 1
		else: 
			high -= 1
	
	return None


print(twoSum([2, 7, 11, 20], 9), (0, 1))
print(twoSum([2, 7, 11, 20], 31), (2, 3))
print(twoSum([2, 7, 11, 20], 22), (0, 3))
print(twoSum([2, 7, 11, 20], 18), (1, 2))
print(twoSumExtraSpace([2, 7, 11, 20], 9), (0, 1))
print(twoSumExtraSpace([2, 7, 11, 20], 31), (2, 3))
print(twoSumExtraSpace([2, 7, 11, 20], 22), (0, 3))
print(twoSumExtraSpace([2, 7, 11, 20], 18), (1, 2))
