const prompt = require('prompt-sync')();

const listaProibida = ['Renan', 'Pablo', 'José'];
let visAutorizados = [];

for (let i = 0; i < 3; i++) {
    let nome = prompt('Digite o nome do visitante: ');

    if (listaProibida.includes(nome)) {
        console.log(`ALERTA: Segurança acionada para o visitante ${nome}!`);
    } else {
        visAutorizados.push(nome);
        console.log(`Visitante ${nome} autorizado.`);
    }
}

console.log('\nLista de visitantes autorizados:');
console.log(visAutorizados);