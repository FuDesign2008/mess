<?php
// Fill up array with names
$a[]="Anna";
$a[]="Brittany";
$a[]="Cinderella";
$a[]="Diana";
$a[]="Eva";
$a[]="Fiona";
$a[]="Gunda";
$a[]="Hege";
$a[]="Inga";
$a[]="Johanna";
$a[]="Kitty";
$a[]="Linda";
$a[]="Nina";
$a[]="Ophelia";
$a[]="Petunia";
$a[]="Amanda";
$a[]="Raquel";
$a[]="Cindy";
$a[]="Doris";
$a[]="Eve";
$a[]="Evita";
$a[]="Sunniva";
$a[]="Tove";
$a[]="Unni";
$a[]="Violet";
$a[]="Liza";
$a[]="Elizabeth";
$a[]="Ellen";
$a[]="Wenche";
$a[]="Vicky";

$q = $_GET['q'];


$hint = [];
if (strlen($q) === 0) {
    $hint = [];
} else {
    $len = strlen($q);
    $lower = strtolower($q);
    $hint = [];
    for ($i = 0; $i < count($a); $i++) {
        $start = substr($a[$i], 0, $len);
        if ($lower == strtolower($start)) {
            array_push($hint, $a[$i]);
        }
    }
}

echo json_encode(array('hints' => $hint));

?>
