/*
While & Do While

while
O while é uma estrutura de repetição que avalia uma condição no início do loop. Se a condição for verdadeira, o bloco de código dentro do while será executado. Esse processo se repete até que a condição se torne falsa.

estrutura:
while (condição) {
  // código a ser executado enquanto a condição for verdadeira
}
Exemplo:
let count = 0;  
while (count < 5) {
    console.log(count);
    count++;
}
// Saída: 0, 1, 2, 3, 4 
do...while
O do...while é semelhante ao while, mas a condição é avaliada no final do loop. Isso garante que o bloco de código seja executado pelo menos uma vez, independentemente da condição inicial.
estrutura:
do {
  // código a ser executado
} while (condição);     
Exemplo:
let count = 0;
do {
    console.log(count);
    count++;
}   while (count < 5);  
// Saída: 0, 1, 2, 3, 4
Diferença principal:
A principal diferença entre while e do...while é o momento em que a condição é avaliada. No while, a condição é verificada antes da execução do bloco de código, enquanto no do...while, a condição é verificada após a execução do bloco de código. Isso significa que o do...while sempre executa o bloco de código pelo menos uma vez, mesmo que a condição seja falsa desde o início.
*/

while (condition) {
    
}