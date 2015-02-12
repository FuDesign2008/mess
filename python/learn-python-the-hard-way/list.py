#!/usr/bin/python


ten_things = 'Apples Oranges Crows Telephone Light Sugar'
things = ten_things.split(' ')

more_stuff = [
    "Day",
    "Night",
    "Song",
    "Frisbee",
    "Corn",
    "Banana",
    "Girl",
    "Boy"
]

while len(things) < 10:
    item = more_stuff.pop()
    things.append(item)


print things
print more_stuff
print things[-1]


things = [1, 2, 3, 4]
print things[1]

things[1] = 'Good'
print things
print (10 in things)
