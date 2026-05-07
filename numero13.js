const prompt = require('prompt-sync')();
let temperaturas = [];
let somaTemp = 0;
let acima35 = 0;

for (let i = 0; i < 6; i++) {
    let t = Number(prompt(`Temperatura do Sensor ${i + 1}:`));
    temperaturas.push(t);
    somaTemp += t;
    if (t > 35) acima35++;
}

let maxima = Math.max(...temperaturas);

console.log(`--- Relatório Estufa ---`);
console.log(`Média: ${(somaTemp / 6).toFixed(1)}°C`);
console.log(`Máxima: ${maxima}°C`);
console.log(`Sensores em Alerta (>35°C): ${acima35}`);