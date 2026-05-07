const prompt = require('prompt-sync')();

let pessoas = [];
let somaIdades = 0;

for (let i = 0; i < 5; i++) {
    let nome = prompt(`Nome da pessoa ${i + 1}:`);
    let idade = Number(prompt(`Idade de ${nome}:`));
    
    pessoas.push({ nome: nome, idade: idade });
    somaIdades += idade;
}

let maisVelha = pessoas[0];

for (let i = 1; i < pessoas.length; i++) {
    if (pessoas[i].idade > maisVelha.idade) {
        maisVelha = pessoas[i];
    }
}

console.log(`Média de idade do grupo: ${(somaIdades / 5).toFixed(1)} anos`);
console.log(`Pessoa mais velha: ${maisVelha.nome} (${maisVelha.idade} anos)`);