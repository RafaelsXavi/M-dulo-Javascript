/*Lógica da programação =  Receita de Bolo Trabalhar Passo a Passo*/
//JS é case sensitive = reconhece letras maiúsculas e minúsculas
//Declaração de variável 
const convertbutton = document.getElementById("convert-button")

function convertValues (){
    const inputvalue = document.querySelector(".input-value").value
    const currencyToConvert = document.querySelectorAll("select")[1].value
    
    console.log("convertValues")
    console.log("Valor digitado:", inputvalue)
    console.log("Moeda para converter:", currencyToConvert)

    // Cotações fixas
    const dolarToday = 5.25
    const euroToday = 5.90
    let convertedValue = 0
    let currencyCode = ""

    if(currencyToConvert === "US$ Dólar"){
        convertedValue = inputvalue / dolarToday
        currencyCode = "USD"
    } else if(currencyToConvert === "€ Euro"){
        convertedValue = inputvalue / euroToday
        currencyCode = "EUR"
    }

    // Atualizar os valores na página
    const realValueText = document.querySelector(".currency-box .currency-value")
    const dolarValueText = document.querySelectorAll(".currency-value")[1]
    const currencyText = document.querySelectorAll(".currency")[1]

    realValueText.textContent = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputvalue)
    dolarValueText.textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: currencyCode }).format(convertedValue)
    currencyText.textContent = currencyToConvert
}

convertbutton.addEventListener("click", convertValues)
