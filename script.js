let dolar = 5.1

let usdInput = document.querySelector("#usd");
let brlInput = document.querySelector("#brl");

usdInput.addEventListener ("keyup" , () => {
    convert("usd-to-brl")
});

brlInput.addEventListener ("keyup" , () => {
    convert("brl-to-usd")
});

usdInput.addEventListener("blur",() =>{
    usdInput.value = formatCurrency(usdInput.value)
} )

brlInput.addEventListener("blur", () => {
    brlInput.value = formatCurrency(brlInput.value)
})

usdInput.value = "1000,00"
convert("usd-to-brl")

// Funções
function formatCurrency(value) {
    let fixedValue = fixValue(value)
    let options = {
        usedGrouping: false,
        minimumFractionDigits: 2
    }
    let formatter = new Intl.NumberFormat("pt-BR" , options)
    return formatter.format(fixedValue)
}

function fixValue(value) {
    let fixedValue = value.replace("," , ".")
    let floatValue = parseFloat (fixedValue)
    if (floatValue == NaN) {
        floatValue = 0
}
return floatValue
}

function convert(type) {
    // ajustar o valor
    if (type == "usd-to-brl") {
        let fixedValue = fixValue(usdInput.value)
    // converter o valor
        let result = fixedValue * dolar
        result = result.toFixed(2)
    // mostrar no campo de dolar
        brlInput.value = formatCurrency(result)
    }

    if (type == "brl-to-usd") {
        // ajustar o valor
        let fixedValue = fixValue(brlInput.value)
        // converter o valor
        let result = fixedValue / dolar
        result = result.toFixed(2)
        // mostrar no campo de dolar
        usdInput.value = formatCurrency(result)
    }
    
    
}


