<?php

session_start();

if (isset($_SESSION['views'])) {
    $_SESSION['views'] += 1;
} else {
    $_SESSION['views'] = 1;
}

echo "Views: " . $_SESSION['views'] . '<br/>';

echo "raw cookie: <br/>";
print_r($_COOKIE);

//unset($_SESSION['views']);
//session_destroy();


?>

