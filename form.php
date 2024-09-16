<?php 

$nombre = $_POST['name'];
$mail = $_POST['email'];
$telefono = $_POST['tel'];
$mensaje = $_POST['Mensaje'];

//Cuerpo del mensaje que envien los usuarios
$mensaje = "Mensaje enviado por " . $nombre . ",\r\n";
$mensaje .= "su e-mail es: " . $mail . " \r\n";
$mensaje .= "Telefono de contacto: " .$tel . " \r\n";
$mensaje .= "Mensaje: " . $_POST['Mensaje'] . " \r\n";
$mensaje .= "Enviado el día " . date('d/m/Y', time());

$para = 'jeronimonunez2405@gmail.com';
$asunto = 'Enviado desde el Sitio Web Tierras Nuestras'

//función mail = a quién le envio el mail
mail($para, $asunto, utf8_decode($mensaje), $header);

//Redirección al header despues de enviado el form
header('Location:exito.html');
?>