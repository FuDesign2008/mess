<?php

$connect = mysql_connect('localhost', 'sqltest', 'sql_TEST_123');

function setXmlHeader() {
    header('Content-Type: text/xml');
    header('Cache-Control: no-cache, must-revalidate');
    # a date in the past
    header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
}

function echoXmlDeclaration() {
    echo '<?xml version="1.0" encoding="utf-8" ?>';
}

function responseBlank($msg, $isXml) {
    if ($isXml) {
        setXmlHeader();
        echoXmlDeclaration();
        echo "<data>";
        echo "<msg>$msg</msg>";
        echo "</data>";
    } else {
        $blank = array('msg' => $msg, 'userInfo' => '');
        echo json_encode($blank);
    }
}

if (!$connect) {
    responseBlank('Failed to connect to database');
    return;
}
$isXml = trim($_GET['isXml']);
$isXml = $isXml == 'true';

$q = trim($_GET['q']);


if ($q == '') {
    responseBlank('The q is blank', $isXml);
    return;
}

$arr = preg_split('/\s+/', $q);
if (sizeOf($arr) != 2)  {
    responseBlank('no firstName or lastName', $isXml);
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

if ($isXml) {
    setXmlHeader();
    echoXmlDeclaration();

    echo "<data>";
    echo "<userInfo>";

    foreach($userInfo as $key=>$value) {
        echo "<$key>$value</$key>";
    }

    echo "</userInfo>";
    echo "</data>";

} else {
    $response = array(
        'userInfo' => $userInfo,
    );

    echo json_encode($response);
}



?>

