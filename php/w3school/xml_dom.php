<?php

$xmlDoc = new DomDocument();
$xmlDoc->load('./note.xml');

# print $xmlDoc->saveXML();

// print $xmlDoc->saveHTML();

$root = $xmlDoc->documentElement;
$childNodes = $root->childNodes;

foreach($childNodes as $node) {
    if ($node->nodeType === 1) {
        print $node->nodeName . ' = ' . $node->nodeValue . '<br/>';
    }
}


?>
