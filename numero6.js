let produtos = ["Monitor", "Mouse", "Teclado", "Cabo HDMI"];
let quantidades = [10, 2, 8, 3];

console.log("--- Relatório de Estoque Crítico ---");

let encontrouCritico = false;

for (let i = 0; i < quantidades.length; i++) {
    if (quantidades[i] < 5) {
        console.log(`ALERTA: O produto "${produtos[i]}" está com apenas ${quantidades[i]} unidades.`);
        encontrouCritico = true;
    }
}

if (!encontrouCritico) {
    console.log("Todos os produtos estão com estoque em dia!");
}