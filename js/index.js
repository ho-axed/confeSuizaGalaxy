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
    <div class='container-expanded'>
        <img src="media/Img-example.png" alt="Imagen de especimenes" class="image-expanded">
        <div class='container-description'>
            <h3 id='whatIsIt'>¿Que es?</h3>
            <p class='whatIsItDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti quas totam labore magni adipisci enim amet possimus, rem aspernatur reiciendis obcaecati. Consectetur officia, minima sed accusantium quia totam eum.
                Reprehenderit saepe deleniti eligendi totam odit libero animi vero et, eaque iste, id autem voluptatem, quo reiciendis dolores culpa praesentium alias! Quidem sit accusantium molestiae maxime! Natus facilis aut cum.
            </p>
            <h3 id='whatItDoes'>¿Que hace?</h3>
            <p class='whatItDoesDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti quas totam labore magni adipisci enim amet possimus, rem aspernatur reiciendis obcaecati. Consectetur officia, minima sed accusantium quia totam eum.
                Reprehenderit saepe deleniti eligendi totam odit libero animi vero et, eaque iste, id autem voluptatem, quo reiciendis dolores culpa praesentium alias! Quidem sit accusantium molestiae maxime! Natus facilis aut cum.
            </p>
            <h3 id='whatIsItsInhabitat'>¿Cual es su habitat?</h3>
            <p class='whatIsItsInhabitatDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti quas totam labore magni adipisci enim amet possimus, rem aspernatur reiciendis obcaecati. Consectetur officia, minima sed accusantium quia totam eum.
                Reprehenderit saepe deleniti eligendi totam odit libero animi vero et, eaque iste, id autem voluptatem, quo reiciendis dolores culpa praesentium alias! Quidem sit accusantium molestiae maxime! Natus facilis aut cum.
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