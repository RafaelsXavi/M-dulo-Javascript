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

users.forEach(function(item, index) {
    console.log(`${index + 1} Nome: ${user.name}, Idade: ${user.age}, Telefone: ${user.Number}`)}
)
/*
users.forEach( (user, index, arr) => {
    console.log(`Nome: ${user.name}, Idade: ${user.age}, Telefone: ${user.Number}`);
    console.log(`Index: ${index}`);
    console.log(arr);
    console.log('---');
});

//for ( const user of users){
 //   console.log(`Nome: ${user.name}, Idade: ${user.age}, Telefone: ${user.Number}`);
 //   console.log('---');
 //
//}
//console.log('fora do for')
*/
