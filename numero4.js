const prompt = require('prompt-sync')();

let temperaturas = [];
let soma = 0;

for (let i = 1; i <= 7; i++) {
    let leitura = prompt(`Digite a temperatura do dia ${i} em Campos do Jordão:`);
    let temp = Number(leitura);
    
    temperaturas.push(temp); 
    soma += temp; 
}

let maxima = temperaturas[0];
let minima = temperaturas[0];

for (let i = 0; i < temperaturas.length; i++) {
    if (temperaturas[i] > maxima) {
        maxima = temperaturas[i];
    }
    if (temperaturas[i] < minima) {
        minima = temperaturas[i];
    }
}

let media = soma / temperaturas.length;

console.log("--- Relatório de Clima: Campos do Jordão ---");
console.log(`Temperaturas registradas: ${temperaturas.join("°C, ")}°C`);
console.log(`Média da semana: ${media.toFixed(1)}°C`);
console.log(`Temperatura Máxima: ${maxima}°C`);
console.log(`Temperatura Mínima: ${minima}°C`);