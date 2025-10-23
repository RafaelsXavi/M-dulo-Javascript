/*Lógica da programação =  Receita de Bolo Trabalhar Passo a Passo*/
//JS é case sensitive = reconhece letras maiúsculas e minúsculas
//Declaração de variável
const convertbutton = document.getElementById("convert-button")
const currencyFromSelect = document.getElementById("currency-from")
const currencyToSelect = document.getElementById("currency-to")



const getExchangeRate = async (from, to) => {
    if (from === to) return 1;

    const apiUrl = `https://economia.awesomeapi.com.br/json/last/${from}-${to}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const key = `${from}${to}`;
        return parseFloat(data[key].bid);
    } catch (error) {
        console.error("Erro ao buscar taxa de câmbio:", error);
        alert("Erro ao obter taxas de câmbio. Usando valores aproximados.");
        // Fallback para taxas aproximadas
        const fallbackRates = {
            "USD-BRL": 5.25,
            "EUR-BRL": 6.31,
            "BTC-BRL": 134000,
            "BRL-USD": 0.1905,
            "EUR-USD": 1.204,
            "BTC-USD": 25500,
            "BRL-EUR": 0.1584,
            "USD-EUR": 0.830,
            "BTC-EUR": 21200,
            "BRL-BTC": 0.00000746,
            "USD-BTC": 0.0000392,
            "EUR-BTC": 0.0000471
        };
        const key = `${from}-${to}`;
        return fallbackRates[key] || 1;
    }
};

const convertValues = async () => {
    const inputvalue = parseFloat(document.querySelector(".input-value").value);
    const currencyFrom = currencyFromSelect.value;
    const currencyTo = currencyToSelect.value;

    console.log("convertValues")
    console.log("Valor digitado:", inputvalue)
    console.log("Moeda de:", currencyFrom)
    console.log("Moeda para:", currencyTo)

    if (isNaN(inputvalue) || inputvalue <= 0) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    // Mapear valores para códigos da API
    const currencyCodes = {
        real: "BRL",
        dolar: "USD",
        euro: "EUR",
        bitcoin: "BTC"
    };

    const fromCode = currencyCodes[currencyFrom];
    const toCode = currencyCodes[currencyTo];

    // Obter taxa de câmbio
    const rate = await getExchangeRate(fromCode, toCode);
    const convertedValue = inputvalue * rate;

    let currencyCode = "";
    let currencyName = "";
    let currencyImageSrc = "";

    switch (currencyTo) {
        case "real":
            currencyCode = "BRL";
            currencyName = "Real";
            currencyImageSrc = "./assets/brasil 2.png";
            break;
        case "dolar":
            currencyCode = "USD";
            currencyName = "Dólar";
            currencyImageSrc = "./assets/estados-unidos (1) 1.png";
            break;
        case "euro":
            currencyCode = "EUR";
            currencyName = "Euro";
            currencyImageSrc = "./assets/icons8-euro-48.png";
            break;
        case "bitcoin":
            currencyCode = "BTC";
            currencyName = "Bitcoin";
            currencyImageSrc = "./assets/icons8-bitcoin-96.png";
            break;
    }

    // Atualizar os valores na página
    const fromValueText = document.querySelector(".currency-box .currency-value")
    const toValueText = document.querySelectorAll(".currency-value")[1]
    const toCurrencyText = document.querySelectorAll(".currency")[1]
    const toCurrencyImage = document.querySelectorAll(".currency-box img")[1]

    // Formatar valor de entrada
    let fromCurrencyCode = "";
    switch (currencyFrom) {
        case "real": fromCurrencyCode = "BRL"; break;
        case "dolar": fromCurrencyCode = "USD"; break;
        case "euro": fromCurrencyCode = "EUR"; break;
        case "bitcoin": fromCurrencyCode = "BTC"; break;
    }

    fromValueText.textContent = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: fromCurrencyCode }).format(inputvalue)
    toValueText.textContent = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: currencyCode }).format(convertedValue)
    toCurrencyText.textContent = currencyName
    toCurrencyImage.src = currencyImageSrc
    toCurrencyImage.alt = currencyName
}

convertbutton.addEventListener("click", convertValues)

currencyToSelect.addEventListener("change", convertValues)
