/* push Adiciona um ou mais elementos ao final do array e retorna o novo comprimento do array.
let array = [1, 2, 4, 5, 10]
array.push(22)

console.log(array)
// [1, 2, 4, 5, 10, 22]

let array2 = ["abacate", "salada-mista", "mamão"]
array.push("banana")

console.log(array2)
// ["abacate", "salada-mista", "mamão", "banana"]
 ----------------------
// lengt - Tamanho do array
let array = [1, 2, 4]
console.log(array.length)
// 3

let array2 = ["abacate", "salada-mista", "mamão", 33, 44]
console.log(array2.length)
// 5
------------------------
//sort Ordena
let array = ["mamão", "abacate", "laranja"]
array.sort()
// ["abacate", "laranja", "mamão"]
-------------------------
//Delete
let array = ["mamão", "abacate", "laranja"]
delete array[1]
// ["abacate", undefined, "mamão"]

console.log(array.length)
// 3
-------------------------
//every - testa se todos os elementos do array passam por um teste
//retorna true ou false
const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every( (value) => value < 200 ));
//true

const users = [
	{name: 'Nico', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Joana', credit: 300},
	{name: 'Vanessa', credit: 200},
];

console.log(users.every((user) => user.credit < 1000))
//true

console.log(users.every(user => user.credit < 500))
//false
-------------------------
//some - testa se ao menos um elemento do array passa por um teste
//retorna true ou false
const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every( (value) => value < 20 ));
//true

const users = [
	{name: 'Nico', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Joana', credit: 300},
	{name: 'Vanessa', credit: 200},
];

console.log(usersList.every((user) => user.credit < 100))
//false

console.log(usersList.every(user => user.credit < 500))
//true
-------------------------
// fill: Preenche posições do array como desejarmos
/*
	fill(1, 2, 3) 
	1) O que vai ser colocado no array
	2) A posição inicial 
	3) Posição final



// Preenche com 0 da posição 2 do array até a posição 4
console.log(array1.fill(0, 2, 4));
// [1, 2, 0, 0]

// Preenche com 5 a partir da posição 1 
console.log(array1.fill(5, 1));
// [1, 5, 5, 5]

console.log(array1.fill(6));
// [6, 6, 6, 6]
-------------------------
find: Usamos esse método quando queremos encontrar algum elemento dentro no Array
const users = [
	{name: 'João', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Carlos', credit: 300},
	{name: 'Vanessa', credit: 300},
];

const findUser = users.find((user) => user.name === 'Maria');
// 	{name: 'Maria', credit: 900}

const findUser = users.find((user) => user.credit === 300);
// 	{name: 'Carlos', credit: 300}
console.log(findUser)
-------------------------
findIndex: Faz o mesmo que o .find(), mas retorna o índice do elemento encontrado ao invés de retornar o próprio elemento.
const users = [
	{name: 'João', credit: 600},// POSIÇÃO = 0
	{name: 'Maria', credit: 900}, // POSIÇÃO = 1
	{name: 'Carlos', credit: 300},  // POSIÇÃO = 2
	{name: 'Vanessa', credit: 300},  // POSIÇÃO = 3
];

const findUser = users.findIndex(user => user.name === 'Maria');
// POSIÇÃO = 1

users[findUser].name = 'Maria Joaquina';

console.log(users);
// [
// 	{name: 'João', credit: 600},
// 	{name: 'Maria Joaquina', credit: 900},
// 	{name: 'Carlos', credit: 300},]

-------------------------
concat - Esse método é usado para juntar dois arrays. 
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array1.concat(array2);
console.log(array3);
// [1, 2, 3, 4, 5, 6]
const array4 = array2.concat(array1);
console.log(array4);
// [4, 5, 6, 1, 2, 3]
-------------------------
includes - Esse método nos diz se há ou não um determinado item no array. Retorna true ou false.
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// true

console.log(pets.includes('at'));
// false
-------------------------
join - O método join() junta todos os elementos de um array.
//join(separator)

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// "Fire,Air,Water"

console.log(elements.join(''));
// "FireAirWater"

console.log(elements.join(' '));
// "Fire Air Water"

console.log(elements.join('-'));
// "Fire-Air-Water"
-------------------------
slice - O método slice() retorna um novo array, apenas com as informações escolhidas
/* 1) Posição do array da qual vamos começar a pegar as informações 
		  para criar o novo array
	 2) Posição final do array que vamos pegar os dados


const users = ["João", "Maria", "Pedro", "Michele", "Fernando"];

console.log(users.slice(2));
// ["Pedro", "Michele", "Fernando"];

console.log(users.slice(2, 4));
// [ "Pedro", "Michele" ];

console.log(users.slice(1, 6));
// ["Maria", "Pedro", "Michele", "Fernando"];


console.log(users.slice());
// ["João", "Maria", "Pedro", "Michele", "Fernando"];
-------------------------
splice - Esse metódo remove ou adiciona elementos em um array em uma posição específica.
 1) Posição do array da qual vamos começar a tirar as informações 
 2) Quantos elementos eu quero retirar a partir da posição inicial 
 3) Item que você quer adicionar

const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'];

months.splice(1, 0, 'Feb');
// [ 'Jan', 'Feb', 'Fev', 'Mar', 'Abr', 'Mai' ];


months.splice(1, 4, 'May');
// [ 'Jan', 'May' ]
-------------------------
pop - Remove o último elemento de um array.
const array1 = [1, 2, 3];

const lastElement = array1.pop();

console.log(array1);
// [1, 2]

console.log(lastElement);
// 3
-------------------------
shift - Remove o primeiro elemento de um array.
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// [2, 3]

console.log(firstElement);
// 1
*/