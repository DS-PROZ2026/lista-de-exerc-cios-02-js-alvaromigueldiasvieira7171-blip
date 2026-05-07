const prompt = require('prompt-sync')();
let destinos = [];
let somaPassagens = 0;

for (let i = 0; i < 10; i++) {
    let nome = prompt(`Destino ${i + 1}:`);
    let precoPassagem = Number(prompt(`Preço da passagem para ${nome}:`));
    let precoHotel = Number(prompt(`Custo do hotel em ${nome}:`));
    
    destinos.push({ nome, precoPassagem, precoHotel });
    somaPassagens += precoPassagem;
}

let maisCaro = destinos[0];
let temBarato = false;

for (let d of destinos) {
    if (d.precoPassagem > maisCaro.precoPassagem) {
        maisCaro = d;
    }
    if (d.precoPassagem < 1000) {
        temBarato = true;
    }
}

console.log(`Média das passagens: R$ ${(somaPassagens / 10).toFixed(2)}`);
console.log(`Destino com passagem mais cara: ${maisCaro.nome} (R$ ${maisCaro.precoPassagem})`);
console.log(temBarato ? "Existem destinos com passagem abaixo de R$ 1000,00!" : "Não há passagens abaixo de R$ 1000,00.");