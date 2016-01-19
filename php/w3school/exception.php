<?php

class CustomException extends Exception {

    public function errorMessage() {
        $errorMsg = '<p>Error on line ' . $this->getLine() .
            ' in ' .  $this->getFile() . ': <b>' .
            $this->getMessage() . '</b></p>';

        return $errorMsg;
    }
}


function checkNumber($number) {
    if ($number > 1) {
        throw new Exception("Value muse be 1 or below");
    }
    return true;
}

try {
    try {
        checkNumber(2);
    } catch (Exception $e) {
        echo 'Message: ' . $e->getMessage();
        throw new CustomException($e->getMessage());
    }
} catch (CustomException $ce) {
    echo $ce->errorMessage();
}

function topExceptionHandler($exception) {
    echo '<p style="color: red;">Exception: ', $exception->getMessage(), '</p>';
}

set_exception_handler('topExceptionHandler');

throw new Exception('Uncaught Exception occurred!');


?>



