let nomes = [];
let quantidade = Number(prompt("Quantos nomes deseja cadastrar?"));

for (let i = 0; i < quantidade; i++) {
    nomes.push(prompt("Digite um nome:"));
}

let i = 0;
let encontrado = false;

while (i < nomes.length) {
    if (nomes[i] === "Ricardo") {
        console.log("Usuário encontrado");
        encontrado = true;
        break;
    }
    i++;
}

if (!encontrado) {
    console.log("Não cadastrado");
}