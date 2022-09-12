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
/*
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
}*/

//ecommcerce de compra de hamburguesas
function Hamburguesa(id, nombre, precio, tipo, stock) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.detalle = tipo
    this.stock = stock

    this.restarStock = (cantidad) => {
    this.stock -= cantidad
    }
}

const hamburguesas = [
    new Hamburguesa(1, "Veggie", 800, "comida", 12),
    new Hamburguesa(2, "Italiana", 850, "comida", 10),
    new Hamburguesa(3, "Queso grillado", 870, "comida", 15),
    new Hamburguesa(4, "Crazy chicken", 820, "comida", 14),
    new Hamburguesa(5, "Big kiro", 900, "comida", 15),
    new Hamburguesa(6, "Classic", 750, "comida", 15),
    new Hamburguesa(7, "Kiro bacon", 770, "comida", 10),
    new Hamburguesa(8, "Agua", 200, "bebida", 20),
    new Hamburguesa(9, "Gaseosa", 250, "bebida", 12),
    new Hamburguesa(10, "Cerveza", 800, "bebida", 12),
]
//menu de hamburguesas

function Menu() {
    this.hamburguesas = []
    
    this.agregarHamburguesa = (hamburguesa) => {
    this.hamburguesas = [...this.hamburguesas, hamburguesa]
    }

    this.traerHamburguesa = (id) => {
        return this.hamburguesas.find(hamburguesa => hamburguesa.id == id)
    }

    this.mostrarMenu = () => {
        return this.hamburguesas.map(hamburguesa => `${hamburguesa.id}. ${hamburguesa.nombre}`).join("\n")
    }
}

const menu = new Menu()

for(const hamburguesa of hamburguesas){
    menu.agregarHamburguesa(hamburguesa)
}
//carrito para compra de hamburguesas

function Carrito(){
    this.total = 0
    this.hamburguesas = []

    this.mostrarCompra = () => {
    return this.hamburguesas
        .map((hamburguesa) => `${hamburguesa.nombre}: ${hamburguesa.precio}`)
        .join("\n");
    };

    this.agregarAlCarrito = (id, cantidad) => {
    const hamburguesa = menu.traerHamburguesa(id)

// Si se piden mas hamburguesas de las que hay en stock te pide que ingreses un numero menor
    if(hamburguesa.stock < cantidad) {
        alert(
            `No se puede pedir mas hamburguesas de las que hay en stock(${hamburguesa.stock}).`
        );
        return false
    }

        hamburguesa.restarStock(cantidad)

        this.hamburguesas = [...this.hamburguesas, hamburguesa]
      this.total += hamburguesa.precio * cantidad
        return true
    }
}
// Aca indicas si seguis comprando

const carrito = new Carrito()

let end = "no"
//Si es distinto a si continuas con la compra

while(end !== "si"){
    const id = Number(prompt(`Seleccione el numero de producto a comprar: \n${menu.mostrarMenu()}`))
    const cantidad = Number(prompt("Indique la cantidad que quiere del producto seleccionado: "))
    let resultado = carrito.agregarAlCarrito(id, cantidad)
    
    while(!resultado){
        const nuevaCantidad = Number(prompt(
        "Selecciona una nueva cantidad"
        ))
        resultado = carrito.agregarAlCarrito(id, nuevaCantidad)
    }

//indicar si para terminar con la compra
    end = prompt("Escribe si cuando haya terminado de elegir sus hamburguesas")?.toLowerCase()
}
//Total de los productos seleccionados. Y ademas indica cuanto sale cada una.
alert(`El total de su compra es: $${carrito.total}. \n Has comprado: ${carrito.mostrarCompra()}\nMuchas gracias por su compra que lo disfrute`)