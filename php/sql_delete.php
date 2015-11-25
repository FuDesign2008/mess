<?php

$connect = mysql_connect('localhost', 'sqltest', 'sql_TEST_123');

if (!$connect) {
    die('Could NOT connect to mysql: ' . mysql_error());
}

mysql_select_db('phptest', $connect);

function printQueryResult($queryResult) {
    echo "<style>";
    echo "table, tr, th, td {border: 1px solid; border-collapse: collapse;}";
    echo "table {margin: 10px;}";
    echo "</style>";

    echo "<table>";
    echo "<tr><th>First Name</th><th>Last Name</th><th>Age</th></tr>";

    while($row = mysql_fetch_array($queryResult)) {
        echo "<tr><td>" . $row['firstName'] . "</td><td>" . $row['lastName'] ."</td><td>" . $row['age'] . "</td></tr>";
        //print_r($row);
        //echo $row['firstName'] . " " . $row['lastName'] . ' ' . $row['age'];
        //echo '<br/>';
    }

    echo "</table>";
}

function printTable($connect) {
    $sqlSelect = 'SELECT * FROM Persons ORDER BY age';
    $result = mysql_query($sqlSelect, $connect);
    printQueryResult($result);
}


$sqlCmd = 'INSERT INTO Persons (firstName, lastName, age) VALUES("fu", "yg", 28)';
mysql_query($sqlCmd, $connect);
echo '<p> insert affected rows: ' . mysql_affected_rows($connect) .  '</p>';
printTable($connect);

$sqlCmd = 'DELETE FROM Persons WHERE firstName="fu"';
mysql_query($sqlCmd, $connect);
echo '<p> delete affected rows: ' . mysql_affected_rows($connect) .  '</p>';
printTable($connect);


mysql_close($connect);

?>
