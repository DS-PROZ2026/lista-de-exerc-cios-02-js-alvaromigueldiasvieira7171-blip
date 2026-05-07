const estoque = [
    { produto: "Camiseta", quantidade: 15 },
    { produto: "Calça", quantidade: 10 },
    { produto: "Meia", quantidade: 50 }
];

let totalItens = 0;

for (let i = 0; i < estoque.length; i++) {
    totalItens += estoque[i].quantidade;
}

console.log(`Quantidade total de itens no estoque: ${totalItens}`);