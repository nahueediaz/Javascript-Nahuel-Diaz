//Calculador de años bisiestos

let numero = Number(prompt("Ingresa un año"))
if (numero <= "2022" ){
alert("Error, ingresaste un numero menor a 2022")
}else {
for (let i = 2020; i < 2021; i++) {
let bisiesto = (numero - i) / 4;
alert(bisiesto + " años bisiestos desde 2022")
}
}