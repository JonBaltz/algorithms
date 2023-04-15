def isAnaagram(a, b):
	return sorted(a) == sorted(b)

print(isAnaagram("help", "phel"))
print(isAnaagram("aabbcc", "cabcab"))
print(isAnaagram("aabbcc", "aaaaa"))
print(isAnaagram("silent", "listen"))
