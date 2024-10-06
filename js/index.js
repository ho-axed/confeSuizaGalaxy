$(document).click(function(event) {
    if (!$(event.target).closest('.speciment-image').length) {
        // Remover clase 'active' de todos los elementos .speciment-image
        $(".speciment-image").removeClass('active');

        // Agregar clase de animación para esconder y luego vaciar el contenido
        $(".container-expanded").addClass('hide').one('animationend', function() {
            $(".specimen-reader-container").empty();
        });
    }
});

$(".speciment-image").click(function(event) {
    event.stopPropagation(); // Evitar que el evento de click se propague al documento

    $(".speciment-image").removeClass('active');

    $(this).addClass('active');
    
    let container = `
    <div class='container-expanded' id="card-info">
        <img src="media/chemovermis-viridis.jpeg" alt="Imagen de especimenes" class="image-expanded">
        <div class='container-description'>
            <h3 id='whatIsIt'>¿Que es el Chemovermis Viridis?</h3>
            <p class='whatIsItDesc'>
                El Chemovermis Viridis es un gusano que mide alrededor de 14 cm y posee una piel gruesa recubierta por una capa mucosa de bacterias quimiosintéticas, que le dan un distintivo tono verdoso. Estas bacterias metabolizan sulfato de hidrógeno, dióxido de carbono y oxígeno, generando energía que el gusano utiliza para sobrevivir en ambientes ricos en compuestos químicos tóxicos
            </p>
        </div>
    </div>
    `;
    
    $(".specimen-reader-container").html(container);

    // Agregar clase de animación para mostrar
    $(".container-expanded").addClass('show');

    // Hacer scroll hasta el centro de la pantalla
    $('html, body').animate({
        scrollTop: $(".specimen-reader-container").offset().top - ($(window).height() / 2) + ($(".specimen-reader-container").height() / 2)
    }, 1000); // Ajusta el tiempo de animación según sea necesario (1000 ms = 1 segundo)
});
// stars animation

