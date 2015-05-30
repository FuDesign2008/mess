#!/usr/bin/env python
# encoding: utf-8

CODE_a = ord('a')
CODE_A = ord('A')
CODE_z = ord('z')
CODE_Z = ord('Z')
OFFSET = CODE_a - CODE_A


def toCase(str, toUpper):
    characters = []
    for char in str:
        code = ord(char)
        start = CODE_a if toUpper else CODE_A
        end = CODE_z if toUpper else CODE_Z
        offset = (0 - OFFSET) if toUpper else OFFSET

        new_char = char

        if code >= start and code <= end:
            new_char = chr(code + offset)

        characters.append(new_char)

    return ''.join(characters)


def toUpperCase(str):
    return toCase(str, True)


def toLowerCase(str):
    return toCase(str, False)


test_strings = [
        'Hello',
        'Gooo------mmmKKK',
        '--',
        'MMM-----kmmdsmdfsfdjsjdsfkkk,   kk'
    ]

for text in test_strings:
    upper = toUpperCase(text)
    lower = toLowerCase(text)

    upper_equal = upper == text.upper()
    lower_equal = lower == text.lower()

    print "'%s' upper: %r  lower: %r " % (text, upper_equal, lower_equal)
