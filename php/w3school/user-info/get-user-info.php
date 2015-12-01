<?php

$connect = mysql_connect('localhost', 'sqltest', 'sql_TEST_123');

function responseBlank($msg) {
    $blank = array('msg' => $msg, 'userInfo' => '');
    echo json_encode($blank);
}

if (!$connect) {
    responseBlank('Failed to connect to database');
    return;
}

$q = trim($_GET['q']);

if ($q == '') {
    responseBlank('The q is blank');
    return;
}

$arr = preg_split('/\s+/', $q);
if (sizeOf($arr) != 2)  {
    responseBlank('no firstName or lastName');
    return;
}

$firstName = $arr[0];
$lastName = $arr[1];

mysql_select_db('phptest', $connect);
$sql = "SELECT * FROM users WHERE (firstName='$firstName' AND lastName='$lastName')";
# $sql = "SELECT * FROM users WHERE firstName='$firstName'";
$result = mysql_query($sql, $connect);
$row = mysql_fetch_array($result);

$userInfo = NULL;

if ($row != NULL) {
    $names = array('firstName', 'lastName', 'age', 'hometown', 'job');
    foreach($names as $name) {
        $userInfo[$name] = $row[$name];
    }
}

$response = array(
    'userInfo' => $userInfo,
);

echo json_encode($response);






?>

