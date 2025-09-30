/* 
For...in = usado para iterar sobre propriedades enumeráveis de um objeto, na ordem original de inserção.
For...of = usado para iterar sobre objetos iteráveis, como arrays, strings, mapas, conjuntos, entre outros.

*/
const users = {name:'rafael', age: 30, city: 'São Paulo'};



for ( const key in users){
    console.log(`${key}: ${users[key]}`);
}