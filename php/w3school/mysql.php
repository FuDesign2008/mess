<?php

$connect = mysql_connect('localhost', 'sqltest', 'sql_TEST_123');

if (!$connect) {
    die('Could not connect:' . mysql_error());
}

echo '<p>Connnet to mysql ok!</p>';



//$sqlCreateDB = 'CREATE DATABASE phptest';
//$isCreated = mysql_query($sqlCreateDB, $connect);

//if ($isCreated) {
    //echo "<p>Dabase phptest created!</p>";
//} else {
    //echo "Error creating database: " . mysql_error();
//}

//mysql_select_db('phptest', $connect);

//$sqlCreateTable = "CREATE TABLE Persons (
    //personID int NOT NULL AUTO_INCREMENT,
    //PRIMARY KEY(personID),
    //firstName varchar(15),
    //lastName varchar(15),
    //age int
//)";

//mysql_query($sqlCreateTable, $connect);


mysql_select_db('phptest', $connect);

mysql_query("INSERT INTO Persons(firstName, lastName, age)
    VALUES('Perter', 'Griffin', 35)
");

mysql_query("INSERT INTO Persons(firstName, lastName, age)
    VALUES('Glenn', 'Quagmire', 33)
");



mysql_close($connect);


?>
