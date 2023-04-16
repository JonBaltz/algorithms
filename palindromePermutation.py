from collections import Counter

def isPermutation(str):
	counter = Counter(str)
	countOdds = [key for key in counter if key != " " and counter[key]%2 != 0] 
	return len(countOdds) <= 1

print(isPermutation("atco cta"), True)
print(isPermutation("atco"), False)
print(isPermutation("tact coa"), True)
print(isPermutation("aabbaa"), True)
print(isPermutation("ab"), False)
print(isPermutation("aabaa"), True)
print(isPermutation("caabaac"), True)
print(isPermutation(""), True)
