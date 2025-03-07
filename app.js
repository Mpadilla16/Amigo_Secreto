let amigos = []; 

function agregarAmigo() {
    let input = document.getElementById("amigo"); 
    let nombre = input.value.trim(); 
    
   
    if (nombre === "") {
        alert("❌ Error: Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 

    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); 
        li.textContent = amigos[i]; 
        listaAmigos.appendChild(li); 
    }
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("❌ Error: No hay amigos para sortear. Agrega al menos uno.");
        return;
    }

    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `<p> El amigo secreto es: <strong>${amigoSorteado}</strong> </p>`;
}
