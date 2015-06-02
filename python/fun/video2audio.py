#!/usr/bin/env python
# encoding: utf-8

import urllib2
import base64


class HtmlLoader:

    def __init__(self, url, user_name, password):
        self.url = url
        self.user_name = user_name
        self.password = password

    def _download(self):
        auth_string = "%s:%s" % (self.user_name, self.password)
        base64_string = base64.encodestring(auth_string).replace('\n', '')

        request = urllib2.Request(self.url)
        request.add_header("Authorization", "Basic %s" % base64_string)
        try:
            response = urllib2.urlopen(request)
            self.html_string = response.read()
            return True
        except Exception, ex:
            print ex
            return False

    def _write2file(self):
        path = './temp.html'
        file_handler = open(path, 'w')
        file_handler.writelines(self.html_string)
        file_handler.close()

    def parse(self):
        is_download = self._download()
        if is_download:
            print "Download html ok!"
            self._write2file()


class VideoConvertor:

    def __init__(self, url, user_name, password):
        pass

    def _download(self):
        pass

    def _save(self):
        pass

    def convert2audio(self):
        pass


class AudioDenoiser:

    def __init__(self, path):
        pass

    def _save(self):
        pass

    def denoise(self):
        pass


html_url = 'http://www.youku.com/playlist_show/id_4266706_ascending_1_mode_pic_page_1.html'
login_name = ''
login_pwd = ''

html_loader = HtmlLoader(html_url, login_name, login_pwd)
video_urls = html_loader.parse()

for url in video_urls:
    video_convertor = VideoConvertor(url, login_name, login_pwd)
    path = video_convertor.convert2audio()
    if path:
        audio_denoiser = AudioDenoiser(path)
        audio_denoiser.denoise()
