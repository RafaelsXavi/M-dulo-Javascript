/*
SWITCH CASE - CONTROLADOR DE FLUXO
Estrutura de controle que permite executar diferentes blocos de código com base no valor de uma expressão.
Útil quando se tem múltiplas condições para verificar.
*/
const fruta = 'pessego';

switch (fruta) {
    case 'maçã':
        console.log('A fruta é maçã');
        break;
    case 'banana':
        console.log('A fruta é banana');
        break;
    case 'laranja':
        console.log('A fruta é laranja');
        break;
    default:
        console.log('Fruta desconhecida');
}