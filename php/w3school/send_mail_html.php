<?php
echo '<form method="post" action="./send_mail.php">';
echo 'Email: <input name="email" type="text"/><br/>';
echo 'Subject: <input name="subject" type="text"/><br/>';
echo 'Message: <br/>';
echo '<textarea name="message" rows="15" cols="40"></textarea>';
echo '<br/>';
echo '<input type="submit" value="Submit"/>';
echo '</form>';
?>
