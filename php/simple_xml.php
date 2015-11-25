<?php

$xml = simplexml_load_file('./note.xml');

echo $xml->getName() . '<br/>';

$children = $xml->children();

foreach($children as $child) {
    echo $child->getName() . ': ' . $child . "<br/>";
}


?>
