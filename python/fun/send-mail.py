#!/usr/bin/env python
# encoding:utf-8

import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

sender = 'from@example.com'
to_address_list = ['to@example.com']
cc_address_list = ['cc@example.com']
server_host = 'host'
server_port = 25
login_name = 'name'
login_pwd = 'pwd'

html = """
<html>
    <head></head>
    <body>
        Hello, <em>Email</em>. Click
        <a href="http://www.youdao.com">here</a> to youdao!
    </body>
</html>
"""

msg = MIMEMultipart('alternative')
msg['Subject'] = 'Message from python'
msg['From'] = sender
msg['To'] = ','.join(to_address_list)
msg['CC'] = ','.join(cc_address_list)

msg.attach(MIMEText(html, 'html'))

try:
    server = smtplib.SMTP(server_host, server_port)
    server.login(login_name, login_pwd)
    # server = smtplib.SMTP('localhost')
    server.sendmail(sender, to_address_list + cc_address_list, msg.as_string())
    print 'Email sent succefully'
    server.quit()
except smtplib.SMTPException:
    print 'Error occored'
