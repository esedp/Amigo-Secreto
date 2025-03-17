let amigos = [];

function adicionarAmigo() {
    const nome = document.getElementById("amigo").value.trim();

    if(nome === "") {
        alert("O campo não pode ser vazio!");
    } else if(amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
    } else {
        amigos.push(nome);

        adicionarNaLista(nome);
    }
}

function adicionarNaLista(nome) {
    const listaAmigos = document.getElementById("listaAmigos");
    const li = document.createElement("li");
    li.textContent = nome;
    listaAmigos.appendChild(li);

    const inputNome = document.getElementById("amigo");
    inputNome.value = "";
}