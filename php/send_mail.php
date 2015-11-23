<?php
if (isset($_REQUEST['email'])) {
    $email = $_REQUEST['email'];
    $subject = $_REQUEST['subject'];
    $message = $_REQUEST['message'];

    mail(
        'FuDesign2008@163.com',
        "Subject: $subject",
        $message,
        "From: $email"
    );

    echo "Thank you for useing our mail form!";

} else {
    require './send_mail_html.php';
}

?>
