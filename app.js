let amigos = [];

function adicionarAmigo() {
    const nome = document.getElementById("amigo").value.trim();

    if(nome === "") {
        alert("O campo não pode ser vazio!");
    } else if(amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
    } else {
        amigos.push(nome);
    }
}
