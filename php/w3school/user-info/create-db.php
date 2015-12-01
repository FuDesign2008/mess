<?php

$connect = mysql_connect('localhost', 'sqltest', 'sql_TEST_123');

if (!$connect) {
    die('Could not connect to database: ' + mysql_error());
}



mysql_select_db('phptest', $connect);
$hasTable = mysql_query('SELECT * FROM users LIMIT 1', $connect) !== FALSE;
echo '<p style="color:red"> table exists or not :' . $hasTable . '</p>';

if ($hasTable) {
    # delete all data in table `users`
    mysql_query("DELETE FROM users", $connect);
}


# id    FirstName   LastName    Age Hometown    Job
# 1 Peter   Griffin 41  Quahog  Brewery
# 2 Lois    Griffin 40  Newport Piano Teacher
# 3 Joseph  Swanson 39  Quahog  Police Officer
# 4 Glenn   Quagmire    41  Quahog  Pilot

$sql = 'CREATE TABLE users (
        id int NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (id),
        firstName varchar(15),
        lastName varchar(15),
        age int,
        hometown varchar(50),
        job varchar(20)
    )';

mysql_query($sql, $connect);

function insertDataToTable($firstName, $lastName, $age, $hometown, $job) {
    $sqlCmd = "INSERT INTO users(firstName, lastName, age, hometown, job)
        VALUES('$firstName', '$lastName', $age, '$hometown', '$job')
    ";

    # echo "insert data to users: " . $sqlCmd;

    global $connect;
    mysql_query($sqlCmd, $connect);
}

insertDataToTable('Peter', 'Griffin', 41, 'Quahog', 'Brewery');
insertDataToTable('Lois', 'Griffin', 40, 'Newport', 'Piano Teacher');
insertDataToTable('Joseph', 'Swanson', 39, 'Quahog', 'Police Officer');
insertDataToTable('Glenn', 'Quagmire', 41, 'Quahog', 'Pilot');

function printQueryResult($queryResult) {
    echo "<style>";
    echo "table, tr, th, td {border: 1px solid; border-collapse: collapse;}";
    echo "table {margin: 10px;}";
    echo "</style>";

    echo "<table>";
    echo "<tr><th>ID</th><th>First Name</th><th>Last Name</th><th>Age</th><th>Hometown</th><th>Job</th></tr>";

    while($row = mysql_fetch_array($queryResult)) {
        echo "<tr><td>" . $row['id'] . "</td><td>" . $row['firstName'] . "</td><td>" . $row['lastName'] ."</td><td>" . $row['age'] . "</td><td>" . $row['hometown'] . "</td><td>" . $row['job'] . "</td></tr>";
        //print_r($row);
        //echo $row['firstName'] . " " . $row['lastName'] . ' ' . $row['age'];
        //echo '<br/>';
    }

    echo "</table>";
}

$sql = "SELECT * FROM users ";
$result = mysql_query($sql, $connect);
printQueryResult($result);

mysql_close($connect);



?>
