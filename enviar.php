<?php
$email = $_POST['email'];

$header = 'From: ' . $email . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Nuevo mail registrado: " . $email . ",\r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'gonzalobordes@gmail.com';
$asunto = 'Nuevo email registrado desde la web';

mail($para, $asunto, utf8_decode($mensaje), $header);

header("Location:index.html");
?>