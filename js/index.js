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
                <h3 id='whatIsIt' >What is the Chemical Emerald Worm (Chemovermis viridis)?</h3>
                <p class='whatIsItDesc'>
                    The Chemical Emerald Worm (Chemovermis Viridis) is a worm what have a size of 14 cm and has a thick skin covered by a mucous layer of chemosynthetic bacteria, which give it a distinctive greenish hue. These bacteria metabolize hydrogen sulfate, carbon dioxide, and oxygen, generating energy that the worm uses to survive in environments rich in toxic chemical compounds.
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
                <h3 id='whatIsIt'>What is the Luminescent Octopus of Aether (Octolumina chimera)?</h3>
                <p class='whatIsItDesc'>
                    This fluorescent mollusk, similar to an octopus, has 4 tentacles and a body that glows in ethereal tones. Inside it houses chemosynthetic bacteria that transform organisms absorbed by its tentacles into energy. This process keeps it active and adapted to an underwater environment where sunlight is non-existent.
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
                <h3 id='whatIsIt'>What is the Cold-Fire Incandescent Fish (Ignisfex thermalis) ?</h3>
                <p class='whatIsItDesc'>
                This fish of 10 cm lives in the depths near hot springs and methane seeps. It has chemosynthetic bacteria in its gills that allow it to process hydrogen sulfide, generating vital energy for its survival in these extreme areas, where chemical elements prevail over light.
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
                <h3 id='whatIsIt'>What is the Bicolor Crustacean (Chimera crustacea)?</h3>
                <p class='whatIsItDesc'>
                The Bicolor Crustacean has a size of approximate 8 cm and features a robust bright orange exoskeleton with black spots, allowing it to camouflage itself in its surroundings. Its legs are adapted for digging in the seabed. This crustacean has chemosynthetic bacteria in its exoskeleton that metabolize hydrogen sulfide, converting it into usable energy. It feeds on organic matter and small organisms in the substrate, optimizing its survival in dark environments.
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
                <h3 id='whatIsIt'>What is the Fluorescent Jellyfish (Luminara medusoidea)?</h3>
                <p class='whatIsItDesc'>
                The Fluorescent Jellyfish has a diameter of 25 cm and a translucent bell that emits a blue light in the dark. Its tentacles, designed to capture microscopic organisms, harbor chemosynthetic bacteria that metabolize hydrogen sulfide and methane to produce energy. It captures plankton through its tentacles and benefits from the energy generated by bacteria, establishing an effective symbiosis in its environment without sunlight.
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
                <h3 id='whatIsIt'>What is the Depth Anemone (Anemone profundis)?</h3>
                <p class='whatIsItDesc'>
                The Depth Anemone has a height of 30 cm and features tentacles in vibrant colors such as red and purple. At its base, it harbors chemosynthetic bacteria that metabolize hydrogen sulfide, producing energy for its growth. It filters water to trap small organisms and feeds on nutrients provided by bacteria, thriving in an ecosystem where sunlight is not present.
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
                <h3 id='whatIsIt'>What is the Spectral Hunter (Spectridae Poisonous)</h3>
                <p class='whatIsItDesc'>
                The Wraith Hunter is between 30 and 40 cm tall, with a flexible and translucent body that allows it to move stealthily in the depths. It easily hide itself in its surroundings thanks to its iridescent skin and has chemosynthetic bacteria that provide it with energy when it is not hunting.
                Specialized in attacking small prey such as the Chemical Emerald Worm or the Coldfire Incandescent Fish, it injects a paralyzing venom through a retractable stinger. Its compact size allows it to ambush with agility and take advantage of 

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

