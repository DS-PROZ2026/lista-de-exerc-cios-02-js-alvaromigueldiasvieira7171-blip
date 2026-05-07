const prompt = require('prompt-sync')();

let modelos = ["Duster", "Creta", "Nivus", "Pulse", "Compass"];
let precos = [110000, 135000, 128000, 105000, 180000];

let entrada = prompt("Qual o seu orçamento máximo para a compra do SUV?");
let orcamento = Number(entrada);

let encontrouAlgum = false;

console.log(`--- Opções para o orçamento de R$${orcamento.toLocaleString('pt-BR')} ---`);

for (let i = 0; i < modelos.length; i++) {
    if (precos[i] <= orcamento) {
        console.log(`- ${modelos[i]}: R$${precos[i].toLocaleString('pt-BR')}`);
        encontrouAlgum = true;
    }
}

if (!encontrouAlgum) {
    console.log("Que tal olhar nossa seção de seminovos?");
}