/* 
THIS = este , esta, isto



*/


const name = 'Dev Club'; // escopo global


// escopo local
const person = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log('Hello, ' + this.name); // 'this' refere-se ao objeto 'person'
    }
};

person.greet(); // Output: Hello, John  