#!/usr/bin/env python


def callGetMax():
    max = 0
    getMax(1, 2, max)
    print(max)


def getMax(value1, value2, max):
    if value1 > value2:
        max = value1
    else:
        max = value2

callGetMax()


def callFunction1():
    i = 1
    while i <= 6:
        print(function1(i, 2))
        i += 1


def function1(i, num):
    line = ""
    for j in range(1, i):
        line += str(num) + " "
        num *= 2
    return line


callFunction1()
