#!/usr/bin/python

theVar = 124

print "The type of theVar: %s" % type(theVar)

print "is instance of int: %s" % isinstance(theVar, int)


class A():
    pass


class B(A):
    pass


a = A()
b = B()

print "a is instance of A: %s" % isinstance(a, A)
print "b is instance of B: %s" % isinstance(b, B)
print "b is instance of A: %s" % isinstance(b, A)

print "a type: %s" % type(a)
print "b type: %s" % type(b)
