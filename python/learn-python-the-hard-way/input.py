#!/usr/bin/python


print "How old are you?",
age = raw_input()
age = int(age)

print "How tall are you?",
height = raw_input()
height = int(height)

print "How much do you weight?",
weight = raw_input()
weight = int(weight)

print "So, you're %r old, %r tall and %r heavy." % (age, height, weight)
