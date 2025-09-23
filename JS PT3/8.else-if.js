/*
IF (se)

ELSE IF (senão se)

ELSE (senão)

*/

const temperature = 34

if (temperature >= 37.5) {
    console.log('Febre alta')
} else if (temperature < 37.5 && temperature >= 37) {
    console.log('Febre moderada')
} else if (temperature < 37 && temperature >= 36) {
    console.log('Saudável')
}
else {
    console.log('Hipotermia')
}