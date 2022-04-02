console.log(`\nTrabalhando com Condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
//Variaveis
const idadeComprador = 15;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

console.log("\nDestinos Possíveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

// while(contador<3){ //pra repetição 
//     if(listaDeDestinos[contador] == destino){ //encontra o valor desejado na lista
//         destinoExiste = true
//         break;
//     }
//     contador += 1;
// }

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa viagem!");
}else{
    console.log("Desculpe tivemos um erro!")
}

for(let i = 0 ; i < 3 ; i ++){
    if(listaDeDestinos[i] == destino){ //encontra o valor desejado na lista
        destinoExiste = true
    }
}