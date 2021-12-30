console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

//declaração de array
const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`,);
//console.log(`Destinos possíveis: ${salvador}, ${saoPaulo}, ${rioDeJaneiro}`);
console.log(listaDeDestinos);

//adicionando elementos
listaDeDestinos.push(`Curitiba`);
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);