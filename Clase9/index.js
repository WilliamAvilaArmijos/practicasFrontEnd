const obtenerPersonajes = async() => {
  
    const respuesta = await axios.get('https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=1')
    console.log(respuesta);
    return respuesta
}

obtenerPersonajes().then(
(res) =>{
    const HEROES = res.data;
    const LIST = document.querySelector(`#list`);
    HEROES.forEach(heroe => {
        LIST.innerHTML+=
        `
<div class="card mb-3" style="background-color: black; color: white; margin-top: 20px">
    <div class="row g-0">
        <div class="col-md-3">
            <img src="${heroe.image}"
                class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-6">
            <div class="card-body">
                <h5 class="card-title">${heroe.title}</h5>
                <p class="card-text">${heroe.body}</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div class="col-md-3">
        <button class="content-button" id="btnBorrar" onclic=eliminar('${heroe._id}')>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path
                    d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z">
                </path>
            </svg>
        </button>
        </div>
    </div>
</div>
        `
    });
}
);


async function eliminar(_id){
    let url = `https://bp-marvel-api.herokuapp.com/marvel-characters/${_id}?Author=1`;
    await axios.delete(url);
    location.reload();
}


window.addEventListener('DOMContentLoaded', function(event){
    obtenerPersonajes();
})
