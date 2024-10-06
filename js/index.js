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

    if (this.id == 'img1') {
        let container = `
        <div class='container-expanded prosto-one-regular' id="card-info">
            <img src="media/chemovermis-viridis.jpeg" alt="Imagen de especimenes" class="image-expanded">
            <div class='container-description prosto-one-regular'>
                <h3 id='whatIsIt' >¿Que es el Gusano de Esmeralda Química (Chemovermis viridis)?</h3>
                <p class='whatIsItDesc'>
                    El Gusano de Esmeralda Quimica (Chemovermis Viridis) es un gusano que mide alrededor de 14 cm y posee una piel gruesa recubierta por una capa mucosa de bacterias quimiosintéticas, que le dan un distintivo tono verdoso. Estas bacterias metabolizan sulfato de hidrógeno, dióxido de carbono y oxígeno, generando energía que el gusano utiliza para sobrevivir en ambientes ricos en compuestos químicos tóxicos.
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
    }

    if (this.id == 'img2') {
        let container = `
        <div class='container-expanded prosto-one-regular' id="card-info">
            <img src="media/Pulpo-Luminiscente.jpg" alt="Imagen de especimenes" class="image-expanded">
            <div class='container-description prosto-one-regular'>
                <h3 id='whatIsIt'>¿Que es el Pulpo Luminiscente de Éter (Octolumina quimera)?</h3>
                <p class='whatIsItDesc'>
                    Este molusco fluorescente, similar a un pulpo, tiene 4 tentáculos y un cuerpo que brilla en tonos etéreos. En su interior alberga bacterias quimiosintéticas que transforman organismos absorbidos por sus tentáculos en energía. Este proceso lo mantiene activo y adaptado a un entorno subacuático donde la luz solar es inexistente.
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
    }

    if (this.id == 'img3') {
        let container = `
        <div class='container-expanded prosto-one-regular' id="card-info">
            <img src="media/Pez-Incandescente.jpeg" alt="Imagen de especimenes" class="image-expanded">
            <div class='container-description prosto-one-regular'>
                <h3 id='whatIsIt'>¿Que es el Pez Incandescente de Fuego Frío (Ignisfex thermalis)?</h3>
                <p class='whatIsItDesc'>
                Este pez de 10 cm vive en las profundidades cercanas a fuentes termales y filtraciones de metano. Posee bacterias quimiosintéticas en sus branquias que le permiten procesar sulfuro de hidrógeno, generando energía vital para su supervivencia en estas zonas extremas, donde prevalecen los elementos químicos sobre la luz.
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
    }

    
    if (this.id == 'img4') {
        let container = `
        <div class='container-expanded prosto-one-regular' id="card-info">
            <img src="media/Crustaceo-Bicolor.jpeg" alt="Imagen de especimenes" class="image-expanded">
            <div class='container-description prosto-one-regular'>
                <h3 id='whatIsIt'>¿Que es el Crustáceo Bicolor (Chimera crustacea)?</h3>
                <p class='whatIsItDesc'>
                El Crustáceo Bicolor mide aproximadamente 8 cm y presenta un exoesqueleto robusto de color naranja brillante con manchas negras, lo que le permite camuflarse en su entorno. Sus patas están adaptadas para excavar en el fondo marino. Este crustáceo tiene bacterias quimiosintéticas en su exoesqueleto que metabolizan sulfuro de hidrógeno, convirtiéndolo en energía utilizable. Se alimenta de materia orgánica y pequeños organismos del sustrato, optimizando su supervivencia en ambientes oscuros.
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
    }

    if (this.id == 'img5') {
        let container = `
        <div class='container-expanded prosto-one-regular' id="card-info">
            <img src="media/Medusa-Florecente.jpeg" alt="Imagen de especimenes" class="image-expanded">
            <div class='container-description prosto-one-regular'>
                <h3 id='whatIsIt'>¿Que es la Medusa Fluorescente (Luminara medusoidea)?</h3>
                <p class='whatIsItDesc'>
                La Medusa Fluorescente tiene un diámetro de 25 cm y una campana translúcida que emite un brillo azul en la oscuridad. Sus tentáculos, diseñados para capturar organismos microscópicos, albergan bacterias quimiosintéticas que metabolizan sulfuro de hidrógeno y metano para producir energía. Captura plancton a través de sus tentáculos y se beneficia de la energía generada por las bacterias, estableciendo una simbiosis eficaz en su entorno sin luz solar.
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
    }

    if (this.id == 'img6') {
        let container = `
        <div class='container-expanded prosto-one-regular' id="card-info">
            <img src="media/Anemona-Profundidad.jpeg" alt="Imagen de especimenes" class="image-expanded">
            <div class='container-description prosto-one-regular'>
                <h3 id='whatIsIt'>¿Que es la Anémona de Profundidad (Anémona profundis?</h3>
                <p class='whatIsItDesc'>
                La Anémona de Profundidad alcanza una altura de 30 cm y presenta tentáculos en colores vibrantes como rojo y púrpura. En su base, alberga bacterias quimiosintéticas que metabolizan sulfuro de hidrógeno, produciendo energía para su crecimiento. Filtra el agua para atrapar pequeños organismos y se nutre de los nutrientes proporcionados por las bacterias, prosperando en un ecosistema donde la luz solar no está presente.
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
    }

    if (this.id == 'img7') {
        let container = `
        <div class='container-expanded prosto-one-regular' id="card-info">
            <img src="media/Cazador-Espectral.jpeg" alt="Imagen de especimenes" class="image-expanded">
            <div class='container-description prosto-one-regular'>
                <h3 id='whatIsIt'>¿Que es el Cazador Espectral (Spectridae venenosa)</h3>
                <p class='whatIsItDesc'>
                El Cazador Espectral mide entre 30 y 40 cm, con un cuerpo flexible y translúcido que le permite moverse sigilosamente en las profundidades. Se camufla fácilmente en su entorno gracias a su piel iridiscente y cuenta con bacterias quimiosintéticas que le proporcionan energía cuando no está cazando.
                Especializado en atacar presas pequeñas como el Gusano de Esmeralda Química o el Pez Incandescente de Fuego Frío, inyecta un veneno paralizante a través de un aguijón retráctil. Su tamaño compacto le permite emboscar   con agilidad y aprovechar 

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
    }


});
document.getElementById('specimens-options').addEventListener('click', function() {
    document.querySelector('.speciment-container-all').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('about-options').addEventListener('click', function() {
    document.getElementById('whoAreWe').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('ABYSSALIS-info').addEventListener("click", ()=> {
    document.getElementById('About-planet').scrollIntoView({ behavior: 'smooth' });
})

