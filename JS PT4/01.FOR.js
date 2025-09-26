/*
Estrututra de repetição FOR
 1 - for (inicialização; condição; incremento) {
      // código a ser executado
    }
    2 - A inicialização é executada uma vez no início do loop.
    3 - A condição é avaliada antes de cada iteração do loop. Se for verdadeira, o bloco de código dentro do loop é executado. Se for falsa, o loop termina.
    4 - O incremento é executado após cada iteração do loop, geralmente usado para atualizar a variável de controle.
    5 - O bloco de código dentro do loop é executado repetidamente enquanto a condição for verdadeira.
Exemplo:   
for (let i = 0; i < 5; i++) {
    console.log(i); // Isso imprimirá os números de 0 a 4 no console
}   

2 - Exemplo com array:

const frutas = ['maçã', 'banana', 'laranja'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]); // Isso imprimirá cada fruta no console
}  

3 - Exemplo com array e break:
const frutas = ['maçã', 'banana', 'laranja', 'uva', 'pera'];
for (let i = 0; i < frutas.length; i++) {
    if (frutas[i] === 'laranja') {
        break; // Sai do loop quando encontrar 'laranja'
}

for ([inicialização]; [condição]; [expressão final]) {


for (let i = 0; i < 15; i++){
    console.log(i)
}
const frutas = ['maçã', 'banana', 'pera','uva','laranja', 'manga'];// lenght (tamanho do array) = 6
// i = index (índice) <(menor) que frutas.length (tamanho do array)
for (let i = 0; i < frutas.length; i++) {
    if (frutas[i] === 'laranja'){break;} // Sai do loop quando encontrar 'laranja'
    console.log(frutas[i]); // Isso imprimirá cada fruta no console
}
    
*/