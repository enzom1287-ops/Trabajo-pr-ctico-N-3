const datos = ["House Of The Dragon","From","Game Of Thrones","True Detective","Cowboy Bebop","The Boys","Attack On Titan","The Office", "Lazarus"];
const elementos=[...datos];  // array con todos los datos de las series

const contenedor = document.getElementById('contenedor-flex'); // referencia al DOM
const boton = document.getElementById('boton-interaccion');

function renderizar() {  //funcion que limpia el contenedor

    contenedor.innerHTML = '';

    elementos.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item;

        contenedor.appendChild(div);
    })

}

    boton.addEventListener('click', () => { //clic del boton para ordenar 
        elementos.reverse();
        renderizar();
    });

    renderizar();