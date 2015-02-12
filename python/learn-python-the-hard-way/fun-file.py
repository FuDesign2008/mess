#!/usr/bin/python


from sys import argv

script, file_name = argv


def print_all(file):
    print file.read()


def rewind(file):
    file.seek(0)

input_file = open(file_name)

print_all(input_file)
rewind(input_file)

lines = input_file.readlines()
print lines

rewind(input_file)

for line in input_file:
    print "line: ", line,

rewind(input_file)

line_content = input_file.readline()
line_counter = 1

while line_content:
    print line_counter, line_content,
    line_content = input_file.readline()
    line_counter += 1

input_file.close()
