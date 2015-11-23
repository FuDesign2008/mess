<?php

function customError($errno, $errstr) {
    echo "<p><b>Error: </b> [$errno] $errstr </p>";
    //echo "Ending Script";
    //die();
}
set_error_handler("customError");

if (!file_exists("welcome.txt")) {
    trigger_error('File not found');
} else {
    $file = fopen('welcome.txt', 'r');
}

// trigger a error
echo($test);

trigger_error('test of error');
?>
