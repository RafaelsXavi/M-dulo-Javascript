/*
MAP = "Mutually Assured Production"
 - Cria um novo array, a partir do array que você está manipulando
 - Sempre retorna um array, com a mesma quantidade de elementos do array original
 - Não altera o array original
 - Sempre que você quiser transformar os itens de um array em um novo array, você deve usar o MAP
 - Exige que você retorne algum valor para cada elemento do array original, caso contrário, o valor retornado será undefined
 - Aceita três argumentos: o valor do elemento, o índice do elemento e o array completo
 - O mais comum é usar apenas o valor do elemento
    - Pode ser encadeado com outros métodos, como filter e reduce
    - Pode ser usado para fazer cálculos, transformar dados, formatar strings, entre outros
    - Pode ser usado para renderizar listas em frameworks como React, Vue, Angular, etc.
    - Sintaxe: array.map((element, index, array) => { ... })


const cart = [
    {name: 'Camisa', price: 90},
    {name: 'Bermuda', price: 120},
    {name: 'Meia', price: 30},
    {name: 'Tênis', price: 300}
]
const newCart = cart.map((product) => {
    if(product.price > 100){
        let discount = product.price * 0.1; // 10% de desconto
        let newPrice = product.price - discount;
        return `Produto: ${product.name}, Preço Antigo: R$${product.price.toFixed(2)}, Desconto: R$${discount.toFixed(2)}, Novo Preço: R$${newPrice.toFixed(2)}`;
    } else {
        return `Produto: ${product.name}, Preço: R$${product.price.toFixed(2)}, Sem desconto`;
    } 
});

console.log(newCart);
console.log(cart); // array original não foi alterado   

*/
const aluno = [
    {nome: 'João', prova1: 7, prova2: 8},
    {nome: 'Maria', prova1: 6, prova2: 9},
    {nome: 'Pedro', prova1: 5, prova2: 7},
    {nome: 'Ana', prova1: 8, prova2: 10}
];

const media = aluno.map((aluno) => {
    let media = (aluno.prova1 + aluno.prova2) / 2;
    let mediaaprov = media >= 7 ? 'Aprovado' : 'Reprovado';
    return `Aluno: ${aluno.nome}, Aprovação: ${mediaaprov}, Média: ${media.toFixed(2)}`;
});

console.log(media);
console.log(aluno); // array original não foi alterado