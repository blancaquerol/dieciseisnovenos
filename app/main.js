window.onload = () => {
    let datos;

    let mostrarDetalle = (e) => {window.open(`..assets/pages/detalle.html?id=${e.currentTarget.id}`)}

    let noticias = document.querySelector("#noticias");

    fetch(`assets/data/data.json`)
        .then(r => r.json())
        .then(data => {
            datos = data;
            data.forEach(noticia => {
                //noticias.innerHTML += `<li class="articulo" id= "${noticia.id}"><img src=" ${noticia.img}" alt="${noticia.alt}"> <span>${noticia.titulo} ${noticia.seccion} ${noticia.autor}</span></li>`;
            });
        })
        .then(() => {
            let articulo = document.querySelectorAll(".articulo")
            articulo.forEach((noticia) => {
                noticia.addEventListener("click", mostrarDetalle, true)
            })
        })

}