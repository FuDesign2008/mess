<?php

$parser = xml_parser_create();

function start ($parser, $element_name, $element_attrs) {
   echo $element_name . ': ';
}

function stop($parser, $element_name) {
   echo '<br/>';
}

function char($parser, $data) {
    echo $data;
}

xml_set_element_handler($parser, 'start', 'stop');
xml_set_character_data_handler($parser, 'char');

$fileName = './note.xml';
if (!file_exists($fileName) || !is_readable($fileName)) {
    die('No file exists or readable: ' . $fileName);
}

$fp = fopen($fileName, 'r');

if (!$fp) {
    die('Could not read file: ' . $fileName);
}

while($data=fread($fp, 4096)) {
    xml_parse($parser, $data, feof($fp)) or
        die(
            sprintf('XML error: %s at line %d',
            xml_error_string(xml_get_error_code($parser)),
            xml_get_current_line_number($parser)
        ));

    xml_parser_free($parser);
}

fclose($fp);


?>
