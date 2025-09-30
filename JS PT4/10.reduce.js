/*
    REDUCE = "Redução"
 - Reduz o array a um único valor
 - Pode retornar qualquer tipo de valor: número, string, objeto, array, etc.
 - Aceita quatro argumentos: acumulador, valor do elemento, índice do elemento e array completo 
 - O mais comum é usar apenas o acumulador e o valor do elemento
 - O valor retornado em cada iteração é atribuído ao acumulador na próxima iteração
 - Pode ser usado para somar valores, concatenar strings, agrupar objetos, entre outros
 - Sintaxe: array.reduce((acumulador, elemento, index, array) => { ... }, valorInicial)
 - O valorInicial é opcional, se não for fornecido, o primeiro elemento do array será usado como valor inicial e a iteração começará no segundo elemento
 - Pode ser encadeado com outros métodos, como map e filter
 - Útil para calcular totais, médias, encontrar valores máximos ou mínimos, entre outros
 - Exemplo: somar todos os preços de um carrinho de compras, concatenar todas as strings de um array, etc.

 Aceita quatro argumentos: acumulador, valor do elemento, índice do elemento e array completo 
 O mais comum é usar apenas o acumulador e o valor do elemento
 - O valor retornado em cada iteração é atribuído ao acumulador na próxima iteração 
 


const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = list.reduce((acc, value) => {
    acc += value;
    return acc;
}, 0);
console.log(sum); // 55

const cart = [
    {name: 'Camisa', price: 90},
    {name: 'Bermuda', price: 120},
    {name: 'Meia', price: 30},
    {name: 'Tênis', price: 300}
];
const total = cart.reduce((acc, product) => {
    acc += product.price;
    return acc;
}, 0);
console.log(`Total do carrinho: R$${total.toFixed(2)}`); // Total do carrinho: R$540.00 
// Retorna um valor
// Retorna uma função
// Retorna um objeto 
*/

const cart = [
    {productname: 'abobora', pricePerKg: 5.00, quantity: 2},
    {productname: 'banana', pricePerKg: 3.00, quantity: 1},
    {productname: 'maca', pricePerKg: 4.00, quantity: 1.5},
    {productname: 'laranja', pricePerKg: 2.50, quantity: 3},
];
const total = cart.reduce((acc, product) => {
    acc += product.pricePerKg * product.quantity;
    return acc;
}, 0);
console.log(`Total da compra: R$${total.toFixed(2)}`); // Total da compra: R$27.75
// Retorna um valor
// Retorna uma função
// Retorna um objeto 
// Retorna um array
// Retorna uma string 
// Retorna um boolean (true ou false)