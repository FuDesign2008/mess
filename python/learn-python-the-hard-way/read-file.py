#!/usr/bin/python

from sys import argv

script, filename = argv

txt_file = open(filename)

print "Here's your file %r: " % filename
print txt_file.read()
txt_file.close()

print "Type the filename again:"
again_name = raw_input("> ")

again_file = open(again_name)

print again_file.read()
again_file.close()
