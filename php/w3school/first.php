<?php

echo "<p>The first php script</p>";

$a = array("a" => "Dog", "b" => "Cat", "c" => "Horse");
print_r($a);

$a = array_change_key_case($a, CASE_UPPER);

print_r($a);

$a = array("Dog", "Cat", "Horse");
print_r($a);

print_r($b);

$text = "w3school.cn";

print "<br/>Study PHP at $text<br/>";

print "My car is a {$a[0]}<br/>";

print "11+12 is {11+12}<br/>";

var_dump($text);

print '<br/>';

var_dump($a);
print '<br/>';

$hello = "Hello World";
$hello = null;
var_dump($hello);
print '<br/>';

echo 'This will not expand: \n a newline';

$juice = "apple";

echo "He drank some $juice juice.".PHP_EOL;
// Invalid. "s" is a valid character for a variable name, but the variable is $juice.
echo "He drank some juice made of $juices.";

?>
