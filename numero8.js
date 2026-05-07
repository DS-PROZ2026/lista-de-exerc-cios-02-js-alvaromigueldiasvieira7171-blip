const prompt = require('prompt-sync')();

let nomesVendedores = [];
let totalVendas = [];
let somaVendas = 0;

for (let i = 0; i < 5; i++) {
    let nome = prompt(`Digite o nome do vendedor ${i + 1}:`);
    let venda = Number(prompt(`Digite o total de vendas de ${nome}:`));

    nomesVendedores.push(nome);
    totalVendas.push(venda);
    
    somaVendas += venda; 
}

let mediaGrupo = somaVendas / 5;
let metaMinima = mediaGrupo * 0.7;

let vendedorDestaque = nomesVendedores[0];
let maiorVenda = totalVendas[0];

console.log("--- RESULTADOS DO DESEMPENHO ---");
console.log(`Média do Grupo: R$ ${mediaGrupo.toFixed(2)}`);
console.log(`Linha de Corte (70% da média): R$ ${metaMinima.toFixed(2)}`);
console.log("--------------------------------");

for (let i = 0; i < 5; i++) {
    if (totalVendas[i] > maiorVenda) {
        maiorVenda = totalVendas[i];
        vendedorDestaque = nomesVendedores[i];
    }

    if (totalVendas[i] < metaMinima) {
        console.log(`[ALERTA] ${nomesVendedores[i]} está Abaixo da Meta com R$ ${totalVendas[i].toFixed(2)}`);
    }
}

console.log("--------------------------------");
console.log(`Vendedor Destaque do Mês: ${vendedorDestaque} (R$ ${maiorVenda.toFixed(2)})`);