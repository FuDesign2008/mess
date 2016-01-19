<?php

$q = $_GET["q"];

$xmlDoc = new DOMDocument();
$xmlDoc->load('./cd_catalog.xml');

$artistList = $xmlDoc->getElementsByTagName('ARTIST');
$len = $artistList->length;
$result = array();

for ($i = 0; $i < $len; $i++) {
    $item = $artistList->item($i);
    $cd = null;

    if ($item && $item->nodeType == 1) {
        $childNodes = $item->childNodes;
        $firstChild = $childNodes->item(0);
        if ($firstChild &&
                strtolower($firstChild->nodeValue) == strtolower($q)) {
            $cd = $item->parentNode;
        }
    }

    if ($cd != null) {
        $cdInfo = array();

        $childNodes = $cd->childNodes;
        $len = $childNodes->length;
        for ($i = 0; $i < $len; $i++) {
            $item = $childNodes->item($i);
            if ($item && $item->nodeType == 1) {
                $cdInfo[strtolower($item->nodeName)] = $item->nodeValue;
            }
        }

        array_push($result, $cdInfo);
    }
}

$response = array('cds' => $result);

echo json_encode($response);

?>
