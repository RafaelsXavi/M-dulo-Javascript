/*Operadores logicos

&& -> E (todas as condições precisam ser verdadeiras) pessoa exigente
true && true -> true
true && false -> false
false && true -> false
false && false -> false

console.log(true && true && true) // true
console.log(true && false && true) // false
console.log(false && true) // false
console.log(false && false) // false


|| -> OU (pelo menos uma condição precisa ser verdadeira) pessoa flexível
true || true -> true
true || false -> true
false || true -> true
false || false -> false

! -> NÃO (inverte o valor booleano)

!true -> false
!false -> true





*/

const vouAoCinema = true
const tenhoDinheiro = true
const ehFimDeSemana = false
const tenhoIngresso = true
const vouAoShow = false

if (vouAoCinema && tenhoDinheiro && ehFimDeSemana && tenhoIngresso) {
    console.log('Vou ao cinema')
} else {
    console.log('Não vou ao cinema')
}  