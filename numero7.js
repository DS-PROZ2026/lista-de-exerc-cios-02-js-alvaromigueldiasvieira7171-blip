let frota = [];
let frotaManutencao = [];

let quantidade = Number(prompt("Quantos veículos deseja cadastrar?"));

for (let i = 0; i < quantidade; i++) {
    let modelo = prompt("Modelo do caminhão:");
    let km = Number(prompt("Quilometragem atual:"));
    let revisao = Number(prompt("Última revisão (em meses):"));

    frota.push({
        modelo: modelo,
        km: km,
        revisao: revisao
    });
}

for (let i = 0; i < frota.length; i++) {
    if (frota[i].km > 10000 || frota[i].revisao > 6) {
        frotaManutencao.push(frota[i]);
    }
}

console.log("Total de veículos cadastrados:", frota.length);
console.log("Veículos que precisam de manutenção:", frotaManutencao.length);
console.log("Lista de manutenção:", frotaManutencao);