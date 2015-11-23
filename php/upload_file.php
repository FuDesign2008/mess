<?php

$file = $_FILES["file"];
$type = $file["type"];

$allowTypes = array("image/gif", "image/jpeg", "image/pjpeg", "image/png");
// 2MB
$maxSize = 2 * 1024 * 1024;

echo $type . "<br/>";

echo getenv('APACHE_RUN_USER') . '<br/>';
echo exec('whoami') . '<br/>';

if (in_array($type, $allowTypes, true) && $file["size"] < $maxSize) {
    $error = $file["error"];
    if ($error > 0) {
        echo "Error:" . $error . "<br/>";
    } else {
        $properties = array("name", "type", "size", "tmp_name");
        foreach($properties as $property) {
            echo $property . " : " . $file[$property] . "<br/>";
        }

        // save upload file
        $savePath = "upload/" . $file["name"];
        if (file_exists($savePath)) {
            echo $file["name"] . " already exists. ";
        } else {
            move_uploaded_file($file["tmp_name"], $savePath);
            echo "Store in: " . $savePath;
        }
    }
} else {
    echo "Invalid file";
}



?>
