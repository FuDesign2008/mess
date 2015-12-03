<?php

$q = $_GET['q'];
$q = strtolower(trim($q));

function echoBlank() {
    $response = array('suggests' => '');
    echo json_encode($response);
}

if (!$q) {
    echoBlank();
    return;
}


$xmlDoc = new DOMDocument();
$xmlDoc->load('./links.xml');

$titles = $xmlDoc->getElementsByTagName('title');

# @param {Element} $el
# @return {String}
function extractText($element) {
    $childNodes = $element->childNodes;
    $len = $childNodes->length;
    $text = '';
    for ($index = 0; $index < $len; $index++) {
        $node = $childNodes->item($index);
         # 3: text node
        if ($node->nodeType === 3) {
            $text = $text . $node->nodeValue;
        }
    }
    return $text;
}

$suggests = array();

foreach($titles as $title) {
    $titleText = extractText($title);
    $lower = strtolower($titleText);
    if (strpos($lower, $q) > -1) {
        $parent = $title->parentNode;
        $urlList = $parent->getElementsByTagName('url');

        $item = array(
            'title' => $titleText,
            'url' => extractText($urlList->item(0))
        );

        array_push($suggests, $item);
    }
}

$response = array(
    'suggests' => $suggests
);

echo json_encode($response);



?>
