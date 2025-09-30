/*
OPERADORes TERNÁRIOS
========================= 
Um operador ternário é uma forma abreviada de escrever uma instrução condicional if...else. Ele é chamado de "ternário" porque envolve três operandos: uma condição, uma expressão a ser avaliada se a condição for verdadeira e outra expressão a ser avaliada se a condição for falsa.

A sintaxe básica do operador ternário é a seguinte:
condição ? expressão1 : expressão2

Se a condição for verdadeira, a expressão1 será avaliada e retornada. Se a condição for falsa, a expressão2 será avaliada e retornada.
Exemplo:


const idade = 18
const podeDirigir = idade >= 18 ? 'Sim, pode dirigir' : 'Não, não pode dirigir'
console.log(podeDirigir) // Saída: Sim, pode dirigir

*/

const salario = 5000;

const nivel = salario < 3500
    ? 'Você é junior'
    : salario < 6000
        ? 'Você é pleno'
        : 'Você é senior';

console.log(nivel);