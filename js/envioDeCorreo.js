const btnEnvio = document.getElementById('enviarCorreo');

btnEnvio.addEventListener('click', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const numero = document.getElementById('phone').value;
    const mensaje = document.getElementById('message').value;

    window.location.href = `mailto:jeronimonunez2405@gmail.com?subject=enviadoDesdeLaWeb&body=Nombre%3A${nombre}%0ACorreo%3A${email}%0ATelefono%3A${phone}%0AMensaje%3A${message}`;
});