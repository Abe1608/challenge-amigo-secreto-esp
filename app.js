// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo () {

    let nombreAmigo = document.getElementById("amigo").value.trim();
    
    // Validación para evitar espacios en blanco
    if (nombreAmigo === "") {
                alert("Por favor, inserte un nombre.");
                return;
            }

            amigos.push(nombreAmigo);


            let listado = document.getElementById("listaAmigos"); 

            listado.innerHTML = ""; // Limpiar la lista antes de un nuevo nombre 

            // Utilizaremos un bucle for para recorrer la lista de amigos 
            // para ir creando el elemento <li> para cada espacio de la lista
            for (let i = 0; i < amigos.length; i++) {
            let elementoNuevo = document.createElement("li");
            elementoNuevo.textContent = amigos[i];
            listado.appendChild(elementoNuevo);
            }


            // Limpiar el input después de agregar el amigo
            document.getElementById("amigo").value = "";
}


function sortearAmigo() {  
     // condicional para ver que almenos haya mas de 2 datos agregados
    if (amigos.length < 2) {
        alert("Necesitas al menos dos amigos para realizar el sorteo.");
        return;
    }       

    // aquí va ir valor aleatorio para buscar el amigo secreto
    let amigoAleatorio = amigos[Math.floor(Math.random() * amigos.length)];
    let amigoSecreto = [amigoAleatorio];

    let amigoGanador = document.getElementById("resultado");
    amigoGanador.innerHTML = ""; // Limpiar resultados anteriores
    let ganador = document.createElement("li");
    ganador.textContent = `Tuamigo secreto sorteado es: ${amigoSecreto}`;

    amigoGanador.appendChild(ganador);

}