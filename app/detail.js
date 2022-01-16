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
            let user = data[Number(param)-1];
            let detail = document.querySelector("#detail");
            detail.innerHTML = `<img src=" ${user.img}" alt="${user.src}" class ="avatar"> 
            <div>
            <h1>${user.titulo}</h1>
            <p class="entradilla">${user.entradilla}</p>
            </div>`
        })


}