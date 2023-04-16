def checkPermutation(a, b):
	return sorted(a) == sorted(b)

print(checkPermutation("listen", "silent"), True)
print(checkPermutation("abc", "bac"), True)
print(checkPermutation("aaabbbd", "bbbaaaj"), False)
