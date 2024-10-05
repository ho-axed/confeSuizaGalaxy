$(".speciment-image").click(()=> {
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
    `
    $(".specimen-reader-container").html(container)
})