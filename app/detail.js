window.onload = () => {
    //alert ("this Boiler Works");

    let obtenerParam = (url) => {
        let urlParam = String(url.match(/\?+.+/));
        urlParam = urlParam.replace("?id=", "");
        return urlParam;
    }

    let param = obtenerParam(document.URL);
    console.log(param);

    fetch(`../data/data.json`)
        .then(r => r.json())
        .then(data => {
            let noticia = data[Number(param) - 1];
            let detail = document.querySelector("#detail");
            if (noticia.template == "largo") {
                detail.innerHTML = `<article><section class="encabezado">
                <figure class="main-img">
                    <img src="../../${noticia.img}" alt="${noticia.src}">
                </figure>
                <div class="main-text">
                    <h1>${noticia.titulo}</h1>
                    <div class="seccion">
                        <object data="../../${noticia.icono}" type="image/svg+xml">
                        </object>
                        <h6>${noticia.seccion}</h6>
                        <div class="info">
                            <div class="autorfecha">${noticia.autor} <br> <span>${noticia.fecha}</span> </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="content">
                <p class="entradilla">${noticia.entradilla}</p>
                <p class="per_deb">${noticia.contenido[0].nombre}</p>
                <p>${noticia.contenido[0].p}</p>
                <h4>${noticia.contenido[0].destacado}</h4>
                <img src=" ${noticia.contenido[0].imagen}" alt="${noticia.contenido[0].img_alt}">
                <p class="per_deb">${noticia.contenido[1].nombre}</p>
                <p>${noticia.contenido[1].p}</p>
                <h4>${noticia.contenido[1].destacado}</h4>
                <img src=" ${noticia.contenido[1].imagen}" alt="${noticia.contenido[1].img_alt}">
                <p class="per_deb">${noticia.contenido[2].nombre}</p>
                <p>${noticia.contenido[2].p}</p>
                <h4>${noticia.contenido[2].destacado}</h4>
                <img src=" ${noticia.contenido[2].imagen}" alt="${noticia.contenido[2].img_alt}">
            </section></article>`
            } else if (noticia.template == "corto") {
                detail.innerHTML = `<section class="encabezado">
                <figure class="main-img">
                    <img src="../../${noticia.img}" alt="${noticia.src}">
                </figure>
                <div class="main-text">
                    <h1>${noticia.titulo}</h1>
                    <div class="seccion">
                        <object data="../../${noticia.icono}" type="image/svg+xml">
                        </object>
                        <h6>${noticia.seccion}</h6>
                        <div class="info">
                            <div class="autorfecha">${noticia.autor} <br> <span>${noticia.fecha}</span> </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="content">
                <p class="entradilla">${noticia.entradilla}</p>
                <p class="per_deb">${noticia.contenido[0].nombre}</p>
                <p>${noticia.contenido[0].p}</p>
                <h4>${noticia.contenido[0].destacado}</h4>
                <img src=" ${noticia.contenido[0].imagen}" alt="${noticia.contenido[0].img_alt}">
                <p class="per_deb">${noticia.contenido[1].nombre}</p>
                <p>${noticia.contenido[1].p}</p>
                <h4>${noticia.contenido[1].destacado}</h4>
                <img src=" ${noticia.contenido[1].imagen}" alt="${noticia.contenido[1].img_alt}">
                <p class="per_deb">${noticia.contenido[2].nombre}</p>
                <p>${noticia.contenido[2].p}</p>
                <h4>${noticia.contenido[2].destacado}</h4>
                <img src=" ${noticia.contenido[2].imagen}" alt="${noticia.contenido[2].img_alt}">
            </section>`
            }
        })


}