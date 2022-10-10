// var

// observação: Var é utilizada de forma solta (não é muito indicado utilizar var)

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area)
// var area;

//------------------------------------------------------

// let

//observação: Let primite que o seu valor seja trocado, porém sempre tem que ser decladara antes de ser utilizada.

// let forma = 'retangulo';
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === 'retangulo'){
//     area = altura * comprimento;
// } else {
//     area = (altura * comprimento) / 2;
// }
// console.log(area);



// const

//Observação: const tem um valor fixo (uma vez declarado fica preso nela) e também tem que ser declarado antes de utilziar. 

const forma = 'triangulo';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado'){
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}
console.log(area)
