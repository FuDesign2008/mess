#!/usr/bin/python


class Song(object):

    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing(self):
        for line in self.lyrics:
            print line


happy_bday = Song([
    "Happy birthday to you",
    "I don't want to get sued",
    "So I'll stop right there"
    ])

happy_bday.sing()
