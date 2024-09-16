<?php 

$nombre = $_POST['name'];
$mail = $_POST['email'];
$telefono = $_POST['phone'];  // Cambiado de 'tel' a 'phone'
$mensaje = $_POST['Mensaje'];

// Cuerpo del mensaje que envían los usuarios
$mensaje = "Mensaje enviado por " . $nombre . ",\r\n";
$mensaje .= "su e-mail es: " . $mail . " \r\n";
$mensaje .= "Telefono de contacto: " . $telefono . " \r\n";
$mensaje .= "Mensaje: " . $mensaje . " \r\n";
$mensaje .= "Enviado el día " . date('d/m/Y', time());

$para = 'jeronimonunez2405@gmail.com';
$asunto = 'Enviado desde el Sitio Web Tierras Nuestras';

// Encabezados
$header =   'From: ' . $mail . "\r\n" .
            'Reply-To: ' . $mail . "\r\n" .
            'X-Mailer: PHP/' . phpversion() . "\r\n" .
            'Content-Type: text/plain; charset=UTF-8' . "\r\n";

// Función mail
if (mail($para, $asunto, utf8_decode($mensaje), $header)) {
    header('Location: exito.html');
} else {
    echo 'Error al enviar el correo.';
}
?>
