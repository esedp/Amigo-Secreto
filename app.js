let amigos = [];

function adicionarAmigo() {
    const nome = document.getElementById("amigo").value.trim().toUpperCase();

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

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("É necessário pelo menos 2 amigos para realizar o sorteio!");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    const li = document.createElement("li");
    li.textContent = `O amigo sorteado é: ${amigoSorteado}`;
    resultado.appendChild(li);

    amigos = [];
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
}