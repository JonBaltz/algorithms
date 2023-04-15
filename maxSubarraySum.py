def maxSubarraySum(nums):
	max = nums[0]
	current = 0

	for num in nums:
		current += num
		if current > max: max = current
		if current < 0: current = 0

	return max

print(maxSubarraySum([1, -2, 3, 4, -5, 6]), 8)
print(maxSubarraySum([1, 2, 3, 4]), 10)
print(maxSubarraySum([-1, 0, -500]), 0)
print(maxSubarraySum([-1, -2, -500]), -1)
