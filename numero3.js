const prompt = require('prompt-sync')();

let mochila = [];
const capacidadeMax = 4;

for (let i = 0; i < 6; i++) {
    let item = prompt(`Você encontrou um item. Qual é? `);

    if (mochila.length < capacidadeMax) {
        mochila.push(item);
        console.log(`Item "${item}" adicionado à mochila.`);
    } else {
        console.log('Mochila cheia!');
        let resposta = prompt('Deseja descartar o primeiro item para pegar o novo? (S/N) ');

        if (resposta.toUpperCase() === 'S') {
            mochila.shift(); 
            mochila.push(item); 
            console.log(`Item trocado! "${item}" foi adicionado.`);
        } else {
            console.log(`Você ignorou o item "${item}".`);
        }
    }
}

console.log('\nConteúdo final da mochila:');
console.log(mochila);