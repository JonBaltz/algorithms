def URLify(str):
	return "%20".join(str.split(" "))

print(URLify("Jon Baltz"))
print(URLify("Wild West Cowboy"))
