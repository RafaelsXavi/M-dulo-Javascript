/*Lógica da programação =  Receita de Bolo Trabalhar Passo a Passo*/
//JS é case sensitive = reconhece letras maiúsculas e minúsculas
//Declaração de variável 
const convertbutton = document.getElementById("convert-button")
const currencySelect = document.getElementById("currency-select")

function convertValues() {
    const inputvalue = document.querySelector(".input-value").value
    const currencyToConvert = document.querySelectorAll("select")[1].value

    console.log(currencySelect)
    console.log("convertValues")
    console.log("Valor digitado:", inputvalue)
    console.log("Moeda para converter:", currencyToConvert)

    // Cotações fixas
    const dolarToday = 5.25
    const euroToday = 6.31
    const realToday = 1
    const bitcoinToday = 134.000

    let convertedValue = 0
    let currencyCode = ""


    if (currencyToConvert === "bitcoin") {
        convertedValue = inputvalue / bitcoinToday
        currencyCode = "btc"
    }
    if (currencyToConvert === "real") {
        convertedValue = inputvalue / realToday
        currencyCode = "BRL"
    }
    if (currencyToConvert === "dolar") {
        convertedValue = inputvalue / dolarToday
        currencyCode = "USD"
    }
    if (currencyToConvert === "euro") {
        convertedValue = inputvalue / euroToday
        currencyCode = "EUR"
    }

    // Atualizar os valores na página
    const realValueText = document.querySelector(".currency-box .currency-value")
    const dolarValueText = document.querySelectorAll(".currency-value")[1]
    const currencyText = document.querySelectorAll(".currency")[1]
    const currencyImage = document.querySelectorAll(".currency-box img")[1]

    realValueText.textContent = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputvalue)
    dolarValueText.textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: currencyCode }).format(convertedValue)

    // Atualizar a imagem da moeda e texto
    if (currencyToConvert === "real") {
        currencyImage.src = "./brasil.png"
        currencyImage.alt = "real"
        currencyText.textContent = "real"
    }
    if (currencyToConvert === "bitcoin") {
        currencyImage.src = "./assets/bitcoin.png"
        currencyImage.alt = "bitcoin"
        currencyText.textContent = "bitcoin"
    }
    if (currencyToConvert === "dolar") {
        currencyImage.src = "./assets/estados-unidos (1) 1.png"
        currencyImage.alt = "Dolar"
        currencyText.textContent = "Dolar"
    }
    if (currencyToConvert === "euro") {
        currencyImage.src = "./assets/icons8-euro-48.png"
        currencyImage.alt = "Euro"
        currencyText.textContent = "Euro"
    }

    // Chamar a função de conversão ao mudar a seleção da moeda



}



convertbutton.addEventListener("click", convertValues)

document.querySelectorAll("select")[1].addEventListener("change", convertValues)
