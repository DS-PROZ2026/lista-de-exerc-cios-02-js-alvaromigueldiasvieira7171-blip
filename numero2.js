const prompt = require('prompt-sync')();

let atletas = [];

for (let i=0;i<5;i++){
    let nome = prompt(`Digite o nome do ${i + 1}º atleta:`);
    atletas.push(nome);
}

for (let i = 0; i < atletas.length;i++){
    if (i===0){
        console.log(`Medalha de ouro: ${atletas[i]}`);
    } else if (i=== 1){
        console.log(`Medalha de Prata: ${atletas[i]}`);
    } else if (i === 2){
        console.log(`Medalha de Bronze: ${atletas[i]}`);
    }else{
        console.log(`O participante ${atletas[i]} ganhou medalha de honra`)
    }
}
