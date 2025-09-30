/*
 Cacula desconto de 10% em um produto
 valor do produto maior que 100
 valor do produto menor ou igual a 100

*/

const cart = [
    {name: 'Camisa', price: 90},
    {name: 'Bermuda', price: 120},
    {name: 'Meia', price: 30},
    {name: 'Tênis', price: 300}
]

for(const product of cart){
    if(product.price > 100){
        let discount = product.price * 0.1;
        let newPrice = product.price - discount;
        console.log(`Produto: ${product.name}, Preço Antigo: R$${product.price.toFixed(2)}, Desconto: R$${discount.toFixed(2)}, Novo Preço: R$${newPrice.toFixed(2)}`);
    } else {
        console.log(`Produto: ${product.name}, Preço: R$${product.price.toFixed(2)}, Sem desconto`);
    }
    console.log('---');  ;
}
//console.log('fora do for');

// Retorna um valor 
// Retorna uma função
// Retorna um objeto
// Retorna um array
// Retorna uma string 
// Retorna um boolean (true ou false)