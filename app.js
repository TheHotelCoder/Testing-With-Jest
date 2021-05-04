// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)


// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(fromEuroToDollar){
    // convertimos el valor a dolares
    let valueInYen = fromEuroToDollar * 127.9
    // retornamos el valor
    return valueInYen;
}

const fromYenToPound = function(fromDollarToYen){
    // convertimos el valor a dolares
    let valueInPound = fromDollarToYen * 0.8
    // retornamos el valor
    return valueInPound;
}





module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
