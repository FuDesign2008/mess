#!/usr/bin/env python
# encoding: utf-8

import math


class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def distance(self, point):
        if not isinstance(point, Point):
            return

        distance = math.sqrt(
            pow(self.x - point.x, 2) + pow(self.y - point.x, 2)
        )

        return distance


class Circle:
    def __init__(self, center, radius):
        self.center = center
        self.radius = radius

    def isPointIn(self, point):
        distance = self.center.distance(point)

        if distance <= self.radius:
            return True

        return False


# test begin

p = Point(3, 4)
circle = Circle(Point(0, 0), 3)
is_in = circle.isPointIn(p)

print "p is in circle: %r" % is_in
