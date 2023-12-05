const buttonConverter = document.querySelector("#botao");
const optionVConvert = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // valor em real
    const currencyValueConvert = document.querySelector(".currency-value");  // valor convertido 

    const dolarToday = 4.88;
    const euroToday = 5.32;
    const libraToday = 6.20;
    const bitcoinToday = 191.12166;

    if (optionVConvert.value == "dolar") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);
    }

    if (optionVConvert.value == "euro") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);
    }

    if (optionVConvert.value == "libra") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("ge-BP", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday);
    }

    if (optionVConvert.value == "bitcoin") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValue / bitcoinToday);
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);

}



function changeImg() {
    
    const changeText = document.getElementById("currency-name");
    const changeImg = document.querySelector(".currency-img");


    if (optionVConvert.value == "dolar") {
        changeText.innerHTML = "Dolar Americano"
        changeImg.src = "./assets/dolar.png"

    }
    if (optionVConvert.value == "euro") {
        changeText.innerHTML = "Euro"
        changeImg.src = "./assets/euro.png"
    }
    if (optionVConvert.value == "libra") {
        changeText.innerHTML = "Libras"
        changeImg.src = "./assets/libra.png"
    }
    if (optionVConvert.value == "bitcoin") {
        changeText.innerHTML = " Bitcoins"
        changeImg.src = "./assets/bitcoin.png"
    }

    convertValues();

}

const optionValuesConvert = document.querySelector(".currency-select-convert");
const currencyValueConvert = document.querySelector(".currency-value-to-convert"); // 00.00

function convertImgAll(){
    const changeTextAll = document.getElementById("currency-name-convert"); //p
    const changeImgAll = document.querySelector(".currency-img-convert"); // img
      

    if (optionValuesConvert.value == "real") {
        changeTextAll.innerHTML = "Real"
        changeImgAll.src = "./assets/brasil.png"

    }
    if (optionValuesConvert.value == "dolar") {
        changeTextAll.innerHTML = "Dolar Americano"
        changeImgAll.src = "./assets/dolar.png"

    }
    if (optionValuesConvert.value == "euro") {
        changeTextAll.innerHTML = "Euro"
        changeImgAll.src = "./assets/euro.png"
    }
    if (optionValuesConvert.value == "libra") {
        changeTextAll.innerHTML = "Libras"
        changeImgAll.src = "./assets/libra.png"
    }
    if (optionValuesConvert.value == "bitcoin") {
        changeTextAll.innerHTML = " Bitcoins"
        changeImgAll.src = "./assets/bitcoin.png"
    }

    convertImgAll()

}



optionValuesConvert.addEventListener('change', convertImgAll)

buttonConverter.addEventListener('click', convertValues)
optionVConvert.addEventListener('change', changeImg)