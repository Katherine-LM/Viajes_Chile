$(document).ready(function () {

    // Iniciar el carousel
    $('#carousel').carousel();

    // Establecer un intervalo para cambiar automáticamente las diapositivas cada 3 segundos
    setInterval(function () {
        $('#carousel').carousel('next');
    }, 4000); // Intervalo en milisegundos (en este caso, 3000 ms o 3 segundos)


    // Agrega un tooltip al formulario
    $('form').tooltip({
        trigger: 'manual',
        title: 'Mensaje enviado',
        placement: 'top'
    });


    // Agrega un evento al formulario para mostrar un mensaje al enviar
    $('form').submit(function (event) {
        event.preventDefault(); // Evita que el formulario se envíe realmente (es solo un ejemplo)

        // Puedes agregar aquí la lógica para enviar el formulario o mostrar un mensaje de éxito

        // Muestra el mensaje de tooltip
        $(this).tooltip('show');

        // Limpia los campos del formulario después de un tiempo (por ejemplo, 2 segundos)
        setTimeout(function () {
            $('form')[0].reset(); // Resetea el formulario
            $('form').tooltip('hide'); // Oculta el tooltip
        }, 2000);
    });

});











