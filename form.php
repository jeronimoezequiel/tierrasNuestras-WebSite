<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['Mensaje'];

    $to = 'auralqit@gmail.com';
    $subject = 'Nuevo mensaje de contacto';
    $body = "Nombre: $name\nEmail: $email\nTeléfono: $phone\nMensaje: $message";

    if (mail($to, $subject, $body)) {
        echo "Correo enviado con éxito.";
    } else {
        echo "Error al enviar el correo.";
    }
}
?>
