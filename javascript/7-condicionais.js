console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`,);

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log(listaDeDestinos);

// if(idadeComprador >= 18){
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1); //removendo um item
// }else{
//     //a pessoa é menor de idade
//     if(estaAcompanhada){
//         console.log("Menor acompanhado");
//         listaDeDestinos.splice(1, 1); //removendo um item
//     }else{
//         console.log("Venda não permitida para menores de 18 anos");
//     }
// }

if(idadeComprador >= 18 || estaAcompanhada){
    console.log("Comprador maior de idade ou está acompanhado");
    listaDeDestinos.splice(1, 1); //removendo um item
}else{
    console.log("Venda não permitida para menores de 18 anos");
}


console.log(listaDeDestinos);
console.log("Embarque \n\n");

if(idadeComprador > 18 && temPassagemComprada){
    console.log("Boa Viagem");
}else{
    console.log("Você não pode embarcar");
}

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);


const salario = 3300.0;

