const prompt = require('prompt-sync')();
let custos = [];
let somaCustos = 0;

for (let i = 0; i < 4; i++) {
    let valor = Number(prompt(`Custo da manutenção ${i + 1}:`));
    custos.push(valor);
    somaCustos += valor;
}

let maisCara = Math.max(...custos);

console.log(`Custo Total: R$ ${somaCustos.toFixed(2)}`);
console.log(`Média por Máquina: R$ ${(somaCustos / 4).toFixed(2)}`);
console.log(`Manutenção mais cara: R$ ${maisCara.toFixed(2)}`);