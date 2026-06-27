console.log("Conectado!");

const formulario = document.getElementById("formulario");
let personas = [];
 
//conexion con el formulario de HTML
    formulario.addEventListener( "submit", (e) => {
        e.preventDefault();
        
        //declarar cada elemento del formulario
        const valornombre = document.getElementById("nombre").value;
        const valorapellido = document.getElementById("apellido").value;
        const valoredad = Number(document.getElementById("edad").value);
        const valoraltura = Number(document.getElementById("altura").value);
        const valorpeso = Number(document.getElementById("peso").value);

        //valores negativos
        if (valoredad <= 0 || valoraltura <= 0 || valorpeso <= 0) {
            alert("Edad, altura y peso deben ser valores positivos.");
            return;
        }
        // calculo IMC
        const alturaM = valoraltura / 100;
        const imc = valorpeso / (alturaM ** 2);

        let categoria;
        if (imc < 18.5) {
            categoria = "Bajo Peso";
        }else if (imc < 25) {
            categoria = "Normal";
        }else if (imc < 30) {
            categoria = "Sobrepeso";
        }else { 
            categoria = "Obesidad";
        }

        //guardar persona
        personas.push({valornombre, valorapellido, valoredad, valoraltura, valorpeso, imc, categoria});

        formulario.reset(); //limpiar el formulario
        renderizar ();
    });

    function renderizar(){
        const resultado = document.getElementById("resultado");
        resultado.innerHTML  ="";
        
        personas.forEach((persona, index) =>{
            resultado.innerHTML +=`
            <div>
            <p><strong>${persona.valornombre} ${persona.valorapellido}</strong></p>
            <p>Edad: ${persona.valoredad} | Altura: ${persona.valoraltura}cm | Peso: ${persona.valorpeso}kg</p>
            <p>IMC: ${persona.imc.toFixed(2)} - ${persona.categoria}</p>
            <button type="button" onclick="eliminar(${index})">ELIMINAR</button>
            <hr>
            </div>
    `;
    });
    
}
    function eliminar(index){
        personas.splice(index, 1);
        renderizar();
    }