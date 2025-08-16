// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo () {

    let nombreAmigo = document.getElementById("amigo").value.trim();
       
    // ocultar el resultado del sorteo
    let resultadoSorteo = document.getElementById("resultado");
    resultadoSorteo.innerHTML = ""; // Limpiar resultados anteriores
    resultadoSorteo.style.display = "none"; // Ocultar el resultado del sorteo

    // Validación para evitar espacios en blanco
    if (nombreAmigo === "") {
                alert("Por favor, inserte un nombre.");
                return;
            }

            amigos.push(nombreAmigo);


            let listado = document.getElementById("listaAmigos"); 
            listado.style.display = "block"; // Mostrar la lista de amigos

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

    // Aquí vamos a eliminar el amigo secreto de la lista para que no se repita
    amigos = amigos.filter(amigo => amigo !== amigoAleatorio);          

    let amigoGanador = document.getElementById("resultado");
    amigoGanador.innerHTML = ""; // Limpiar resultados anteriores
    amigoGanador.style.display = "block"; // Mostrar el resultado del sorteo
    let ganador = document.createElement("li");

    // ocultaremos la lista de amigos
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.style.display = "none"; // Ocultar la lista de amigos

    ganador.textContent = `Tu amigo secreto sorteado es: ${amigoSecreto}`;

    //limpiaremos el array para un nuevo sorteo
    amigos = [] ;                            

    amigoGanador.appendChild(ganador);

}