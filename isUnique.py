from collections import Counter

def isUnique(str):
	counter = Counter(str)

	for count in counter.values():
		if count > 1: return False
	else:
		return True

print(isUnique("abcde"), True)
print(isUnique("aa"), False)
print(isUnique(""), True)
print(isUnique("a"), True)
print(isUnique("Aa"), True)
print(isUnique("eabcde"), False)
