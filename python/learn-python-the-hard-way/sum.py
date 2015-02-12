#!/usr/bin/python

numbers = [12, 45, 78, 20]
sum = 0

for number in numbers:
    sum += number

print "The sum is:", sum

sum_while = 0
index = len(numbers)

while index > 0:
    index -= 1
    sum_while += numbers[index]

print "The sum_while is:", sum_while
