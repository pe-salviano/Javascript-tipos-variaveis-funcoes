function apresentar (nome){
    return `meu nome é ${nome}`;
}


// arrow function
const apresentarArrow = nome => num1 + num2;
const soma = (num1, num2) => num1 + num2;

//arrow function com + de 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "Somente números de 1 a 9"
    } else {
        return num1 + num2;
    }
}

