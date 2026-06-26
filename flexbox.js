const datos = ["House Of The Dragon","From","Game Of Thrones","True Detective","Cowboy Bebop","The Boys","Attack On Titan","The Office", "Lazarus"];
const elementos=[... datos];

const contenedor = document.getElementById('contenedor-flex');
const boton = document.getElementById('boton-intereaccion');

function renderizar() {

    contenedor.innerHTML = '';

    elementos.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item;
        contenedor.appendChild(div);
    })

}

    boton.addEventListener('click', () => {
        elementos.reverse();
        renderizar();
    });

    renderizar();