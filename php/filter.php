<?php

$int = 300;

$intOptions = array(
    'options' => array(
        'min_range' => 0,
        'max_range' => 256
    )
);

function customEcho($msg) {
    echo '<p>' . $msg . '</p>';
}

if (!filter_var($int, FILTER_VALIDATE_INT, $intOptions)) {
    customEcho("Integer is not valid");
} else {
    customEcho("Integer is valid");
}


if (filter_has_var(INPUT_GET, 'email')) {
    customEcho('Email is: ' . $_GET['email']);
    if (filter_input(INPUT_GET, 'email', FILTER_VALIDATE_EMAIL)) {
        customEcho("E-mail is valid");
    } else {
        customEcho("E-mail is not valid!");
    }

} else {
    customEcho('Input type does not exist!');
}

$testUrl = "http://www.w3schooêèél.coêèém.cn";
$filteredUrl = filter_var($testUrl, FILTER_SANITIZE_URL);
customEcho($filteredUrl);


if (filter_has_var(INPUT_GET, 'url')) {
    customEcho('raw url is: ' . $_GET['url']);

    $url = filter_input(INPUT_GET, 'url', FILTER_SANITIZE_URL);

    customEcho('raw url after filter is: ' . $_GET['url']);
    customEcho('filtered url: ' . $url);
}


$filters = array(
    'email' => FILTER_VALIDATE_EMAIL,
    'url' => array(
        'filter' => FILTER_SANITIZE_URL
    )
);

$inputs = filter_input_array(INPUT_GET, $filters);
print_r($inputs);


# open http://mess.myphp.net/filter.php?email=fudesign2008@163.com&url=http://www.w3schoo%C3%AA%C3%A8%C3%A9l.co%C3%AA%C3%A8%C3%A9m.cn


function convertSpace($str) {
    $str = str_replace('-', ' ', $str);
    $str = str_replace('@', ' ', $str);
    $str = str_replace('=', '@', $str);
    return $str;
}

$testStr = 'Please-mail-me:@FuDesign2008=163.com';
$filters = array(
    'options' => 'convertSpace'
);
$filteredStr = filter_var($testStr, FILTER_CALLBACK, $filters);
customEcho($filteredStr);






?>
