#!/usr/bin/env python
# encoding: utf-8


def compute_change(change):
    rmb_list = [100, 50, 20, 10, 5, 1, 0.5, 0.1]
    ret = {}

    for rmb in rmb_list:
        count = change // rmb
        change = change % rmb
        if count > 0:
            ret[rmb] = int(count)
            print "%s : %d" % (str(rmb), count)

    return ret


result = compute_change(144.5)

print "%r" % result
