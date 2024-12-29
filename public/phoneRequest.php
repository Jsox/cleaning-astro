<?php

if (!$_POST) exit;



if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");

$phone     = $_POST['phone'];

if (trim($phone) == '') {
    echo '<div class="error_message">Не верный номер телефона</div>';
    exit();
}

//$address = "example@example.net";
$address = "mrjohn73@yandex.ru";


// Configuration option.
// i.e. The standard subject will appear as, "You've been contacted by John Doe."

// Example, $e_subject = '$name . ' has contacted you via Your Website.';

$e_subject = 'Запрос обратного звонка с сайта клининга: ' . $phone;

PHP_EOL . PHP_EOL;
$e_content = "\"$e_subject\"" . PHP_EOL . PHP_EOL;


$headers = "From: $address" . PHP_EOL;
$headers .= "Reply-To: $address" . PHP_EOL;
$headers .= "MIME-Version: 1.0" . PHP_EOL;
$headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;

if (mail($address, $e_subject, $e_subject, $headers)) {
    echo "ok";
} else {
    echo 'ERROR!';
}
