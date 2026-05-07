const prompt = require('prompt-sync')();

let consumoAgua = [];
let totalConsumo = 0;

for (let i = 0; i < 6; i++) {
    let valor = Number(prompt(`Informe o consumo de água do Dia ${i + 1} (litros):`));
    consumoAgua.push(valor);
    totalConsumo += valor;
}

let maiorPico = consumoAgua[0];
let diaPico = 1;

for (let i = 0; i < consumoAgua.length; i++) {
    if (consumoAgua[i] > maiorPico) {
        maiorPico = consumoAgua[i];
        diaPico = i + 1; 
    }
}

console.log(`--- Relatório de Consumo ---`);
console.log(`Consumo Total: ${totalConsumo}L`);
console.log(`Média Diária: ${(totalConsumo / 6).toFixed(2)}L`);
console.log(`Maior Pico: ${maiorPico}L no Dia ${diaPico}`);