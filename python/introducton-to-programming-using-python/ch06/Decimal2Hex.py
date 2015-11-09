#!/usr/bin/env python


def decimalToHex(decimalValue):
    hex = ""

    while decimalValue != 0:
        hexValue = decimalValue % 16
        hex = toHexChar(hexValue) + hex
        decimalValue = decimalValue // 16

    return hex


def toHexChar(number):
    if 0 <= number < 10:
        return chr(number + ord('0'))
    else:
        return chr(number - 10 + ord('A'))


def main():
    inputStr = raw_input('Enter a decimal value:')
    decimalValue = int(inputStr)
    print(decimalToHex(decimalValue))

main()
