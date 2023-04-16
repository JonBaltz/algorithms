def fizzBuzz():
	for i in range(1, 101):
		output = ""

		if i % 3 == 0: output += "Fizz"
		if i % 5 == 0: output += "Buzz"

		print(output or i)

def oneLine():
	for output in [("Fizz" * (i%3<1) + "Buzz" * (i%5<1) or i) for i in range(1, 101)]: print(output)
		

# fizzBuzz()
oneLine()
