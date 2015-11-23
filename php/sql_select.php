<?php

$connect = mysql_connect('localhost', 'sqltest', 'sql_TEST_123');

if (!$connect) {
    die('Could not connet: ' . mysql_error());
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


$result = mysql_query("SELECT * FROM Persons");
printQueryResult($result);

$result = mysql_query("SELECT * FROM Persons WHERE firstName='Perter'");
printQueryResult($result);


mysql_close($connect);

?>
