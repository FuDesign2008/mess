<?php

setcookie('user', 'fudesign2008', time() + 3600);

echo "cookie use: " . $_COOKIE["user"] . "<br/>";

echo 'print the raw cookie <br/>';
print_r($_COOKIE);


if (isset($_COOKIE['user'])) {
    echo '<p> Welcome ' . $_COOKIE['user'] . '!</p>';
} else {
    echo '<p> Welcome guest!</p>';
}

// to clear cookie
//setcookie('user', '', time() - 3600);

?>
