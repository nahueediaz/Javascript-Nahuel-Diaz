/*
//Calculador de años bisiestos

let numero = Number(prompt("Ingresa un año"))
if (numero <= "2022" ){
alert("Error, ingresaste un numero menor a 2022")
}else {
for (let i = 2020; i < 2021; i++) {
let bisiesto = (numero - i) / 4;
alert(bisiesto + " años bisiestos desde 2022")
}
}*/

// Conversor de monedas de pesos a dolar o euro

let numero = parseInt(prompt(`¿Que operacion desea realizar?
1- Cambio de peso a dolar
2- Cambio de peso a euro`))

if (numero == 1) {
    let otroNumero = Number(prompt("Seleccione el numero de pesos que desea cambiar"))
    let dolar = 139.17
    function valorDolar(otroNumero, dolar) {
        return  otroNumero / dolar
        }
        let resultado = valorDolar(otroNumero, dolar)
            alert(`El cambio de peso a dolar es:  ${resultado.toFixed(2)} usd `)
        }

else if (numero == 2){
    let otroNumero2 = Number(prompt("Seleccione el numero de peso que desea cambiar"))
    let euro = 138.40 
    function valorEuro(otroNumero2, euro) {
        return otroNumero2 / euro
    }
    let resultado2 = valorEuro (otroNumero2, euro)
    alert (`El cambio de pesos a euro es: € ${resultado2.toFixed(2)}`)
}

else {
    alert("Caracter ingresado incorrecto")
}