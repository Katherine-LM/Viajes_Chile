


$(document).ready(function() {
    $('#carousel').on('slide.bs.carousel', function () {
        $('.carousel-item').addClass('animate__animated animate__slideInLeft');
    });
    
    $('#carousel').on('slid.bs.carousel', function () {
        $('.carousel-item').removeClass('animate__animated animate__slideInLeft');
    });
    


        // Al pasar el ratón sobre la tarjeta, cambia el color de fondo
        $('.card').hover(
            function () {
                // Mouse enter - Cambia el color de fondo a un tono más claro
                $(this).animate({ backgroundColor: '#e0e0e0' }, 200);
            },
            function () {
                // Mouse leave - Restaura el color de fondo original
                $(this).animate({ backgroundColor: '' }, 200);
            }
        );


   
            // Agrega un tooltip al formulario
            $('form').tooltip({
                trigger: 'manual',
                title: 'Mensaje enviado',
                placement: 'top'
            });
    
            // Agrega un evento al formulario para mostrar un mensaje al enviar
            $('form').submit(function(event) {
                event.preventDefault(); // Evita que el formulario se envíe realmente (es solo un ejemplo)
                
                // Puedes agregar aquí la lógica para enviar el formulario o mostrar un mensaje de éxito
    
                // Muestra el mensaje de tooltip
                $(this).tooltip('show');
    
                // Limpia los campos del formulario después de un tiempo (por ejemplo, 2 segundos)
                setTimeout(function() {
                    $('form')[0].reset(); // Resetea el formulario
                    $('form').tooltip('hide'); // Oculta el tooltip
                }, 2000);
            });
    
});



