/**
    1. Criar um array aleatório de palavras e números
    2. Separar em 2 arrays, um de números e outro de palavras
    3. O array de números precisa estar em ordem crescente
 */

const randomArray = ["9,5 em js", 13, "alta infinita do btc", 2, "parça", 67, 10, 5, "vai curintia", "rocket", 136, "exquadrilhadafumaca"];

const stringsComFilter = randomArray.filter(element => typeof element === 'string').sort();
const numerosComFilter = randomArray.filter(element => typeof element === 'number').sort((a, b) => a - b);

// const strings = [];
// const numeros = [];

// randomArray.forEach(element => {
//     if (typeof element === 'string') {
//         strings.push(element);
//         strings.sort();
//     } else {
//         numeros.push(element);
//         numeros.sort((a, b) => a - b);
//     }
// });

console.log(stringsComFilter);
console.log(numerosComFilter);

const reduce = numerosComFilter.reduce((acc, cur) => acc + cur, 0);
console.log(reduce);