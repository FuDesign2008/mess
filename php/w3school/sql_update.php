<?php

$connect = mysql_connect('localhost', 'sqltest', 'sql_TEST_123');

if (!$connect) {
    die('Could not connect to mysql: ' . mysql_error());
}

mysql_select_db('phptest', $connect);

$sqlCmd = 'UPDATE Persons SET age="46" WHERE firstName="Perter"';
mysql_query($sqlCmd, $connect);

$affectedRows = mysql_affected_rows($connect);
echo '<p>affected rows: ' . $affectedRows . '</p>';

$sqlCmd = 'SELECT * FROM Persons ORDER BY age';
$result = mysql_query($sqlCmd, $connect);

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

printQueryResult($result);


mysql_close($connect);

?>
