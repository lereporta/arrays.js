const notas = [ 10, 6.5, 8, 7.5];

let somaDasNotas = 0 

notas.forEach(function (notas, indice) {  //forEach permite o console.log do indice ao passalo.
    somaDasNotas += notas;
    console.log(indice);
});

const media = somaDasNotas / notas.length;

console.log(`A media das notas é ${media}.`);








// const soma = [10, 10, 10];

// let somasoma = 0 

// soma.forEach(function (soma){
//     somasoma += soma;
// });

// const medias = somasoma / soma.length;

// console.log(medias);