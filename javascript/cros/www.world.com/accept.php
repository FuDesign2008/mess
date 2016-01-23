<?php

header("Access-Control-Allow-Origin:http://www.hello.com");
$msgList = array("msg" => "This is a message from world");
echo json_encode($msgList);
?>
