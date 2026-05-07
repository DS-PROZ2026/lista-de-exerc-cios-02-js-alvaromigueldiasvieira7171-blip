const prompt = require('prompt-sync')();
let consumos = [];
let somaKml = 0;

for (let i = 0; i < 5; i++) {
    let kml = Number(prompt(`KM/L do Caminhão ${i + 1}:`));
    consumos.push(kml);
    somaKml += kml;
}

let melhor = Math.max(...consumos);
let pior = Math.min(...consumos);

console.log(`Média da Frota: ${(somaKml / 5).toFixed(2)} km/l`);
console.log(`Melhor Consumo: ${melhor} km/l`);
console.log(`Pior Consumo: ${pior} km/l`);