window.onload = () => {
    let datos;

    let mostrarDetalle = (e) => { window.open(`assets/pages/articulo.html?id=${e.currentTarget.id}`, `_self`) }

    /*     let noticias = document.querySelector("#noticias");
     */
    let noticiaDestacada = document.querySelector("#noticia_destacada");
    let zoomIn = document.querySelector("#zoom_in");
    let planosub = document.querySelector("#plano_subjetivo");
    let contraplano = document.querySelector("#contra_plano");

    fetch(`assets/data/data.json`)
        .then(r => r.json())
        .then(data => {
            datos = data;
            data.forEach(noticia => {
                /*noticias.innerHTML += `<li class="articulo" id= "${noticia.id}"><img src=" ${noticia.img}" alt="${noticia.alt}"> <span>${noticia.titulo} ${noticia.seccion} ${noticia.autor}</span></li>`;
                 */
                if (noticia.main == true) {
                    noticiaDestacada.innerHTML += `<div class="big_img">
                    <img class="hero" src="${noticia.img}" alt="${noticia.alt}">
                    <div class="bigtitle">
                        <div class="seccion">
                            <object data="${noticia.icono}" type="image/svg+xml">
                            </object>
                            <h6>${noticia.seccion}</h6>
                        </div>
                        <h1>${noticia.titulo}</h1>
                    </div>
                </div>
                <div class="info">
                    <div class="autorfecha">${noticia.autor} <br> <span>${noticia.fecha}</span> </div>
                    <p class="entradilla">${noticia.entradilla}</p>
                </div>`;
                } else {
                    if (noticia.seccion == "Zoom In") {
                        zoomIn.innerHTML += `<img class="articulo" src=" ${noticia.img}" alt="${noticia.alt}">`;
                    } else if (noticia.seccion == "Plano Subjetivo") {
                        planosub.innerHTML += `<img class="articulo" src=" ${noticia.img}" alt="${noticia.alt}">`;
                    } else if (noticia.seccion == "Contraplano") {
                        contraplano.innerHTML += `<div class= "articulo"><img src=" ${noticia.img}" alt="${noticia.alt}"></div>`;
                    }
                }
            });
        })
        .then(() => {
            let articulo = document.querySelectorAll(".articulo")
            articulo.forEach((noticia) => {
                noticia.addEventListener("click", mostrarDetalle, true)
            })
        })

}