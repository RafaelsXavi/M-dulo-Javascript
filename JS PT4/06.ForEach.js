/*
ForEach
- Permite iterar sobre arrays (similar ao for...of)
- Aceita 3 argumentos: valorAtual, indice, array
- Não retorna um novo array (diferente do map)
- Não é possível usar break ou continue (diferente do for...of)


*/

const users = [
    {name: 'rafael', age: 23, Number: '(11)123456789'},//0
    {name: 'carlos', age: 30, Number: '(11)456789123'},//1
    {name: 'maria', age: 28, Number: '(11)654321987'},//2
    {name: 'joao', age: 35, Number: '(11)789123456'}//3
]
/*
users.forEach(item => console.log(item.name));
rafael
carlos
maria
joao
*/


users.forEach( function(item, index, array) {
    console.log(`${index + 1} O usuário: ${item.name}, tem ${item.age} anos de idade, seu telefone de contato é ${item.Number}`);
    }
);
/*
Nome: rafael, Idade: 23, Telefone: (11)123456789


//for ( const user of users){
 //   console.log(`Nome: ${user.name}, Idade: ${user.age}, Telefone: ${user.Number}`);
 //   console.log('---');
 //
//}
//console.log('fora do for')
*/
