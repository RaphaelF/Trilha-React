console.log(`\nTrabalhando com loops`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`,);

const idadeComprador = 15;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("Destinos possíveis \n")
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;
    
let contador = 0;   
let destinoExiste = false;

while(contador < 3){
    if(listaDeDestinos[contador] == destino){
        console.log("Destino possível");
        destinoExiste = true;
        break;
    }else{
        console.log("Destino impossível");
    }
    contador ++;
}

console.log(`Destino existe: ${destinoExiste}`)

if(podeComprar && destinoExiste){
    console.log("Boa viagem");
}else{
    console.log("Desculpe tivemos um erro" );
}

for(let i = 0 ;i < 3 ; i++ ){
    if(listaDeDestinos[i] == destino){
        console.log("Destino possível");
        destinoExiste = true;
        break;
    }
}