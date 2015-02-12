#!/usr/bin/python

import sys
import keyword

print "Python version: ", sys.version_info
print "Python keywords: ", keyword.kwlist

for word in keyword.kwlist:
    print "*", word
