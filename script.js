function getOdds(numeros){
    let impares = numeros.filter(numero => numero % 2 !== 0);
    console.log(impares); 
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
getOdds(numeros)