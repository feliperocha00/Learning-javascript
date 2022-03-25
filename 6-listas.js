console.log(`Trabalhando com Listas`);

// const salvador=`Salvador`;
// const saoPaulo=`São Paulo`;
// const rioDeJaneiro=`Rio de Janeiro`; crtl+k+c pra fazer isso


const listaDeDestinos= new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`);//adiciona itens dinamicamente

console.log("Destinos Possíveis");
// console.log(salvador,saoPaulo,rioDeJaneiro)
//melhor jeito de fazer lista
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);//retirar item
console.log(listaDeDestinos);
console.log(listaDeDestinos[1],listaDeDestinos[0]);
