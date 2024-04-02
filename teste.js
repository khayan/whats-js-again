/* 
1. Declarar um array
2. Inserir os números de 0-10
3. Retornar apenas números pares
*/

const numeros = [];

for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        numeros.push(i);
    }
}

console.log(numeros);