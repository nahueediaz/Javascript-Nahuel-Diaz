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
function Hamburguesa(id, nombre, precio, tipo, stock, detalle) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.tipo = tipo
    this.stock = stock
    this.detalle = detalle

    this.restarStock = (cantidad) => {
    this.stock -= cantidad
    }
}

let hamburguesas = [
    new Hamburguesa(1, "Veggie", 800, "comida", 12, "Pan de espinaca, medallon vegetariano, tomate, queso, cebolla."),
    new Hamburguesa(2, "Italiana", 850, "comida", 10, "Burger, muzzarella, tomate asado, rucula y alioli verde."),
    new Hamburguesa(3, "Queso grillado", 870, "comida", 15,"Burger con provoleta a la plancha, morrones asados, cebolla frita, rucula."),
    new Hamburguesa(4, "Queso azul", 820, "comida", 14, "Burger, cebolla dulce, mayonesa, queso azul, sesamo tostado."),
    new Hamburguesa(5, "Big kiro", 900, "comida", 15, "Doble burger, cheddar, cebolla caramelizada."),
    new Hamburguesa(6, "Classic", 750, "comida", 15, "Burger, pepinillos, tomate, lechuga, mayonesa de morrones"), 
    new Hamburguesa(7, "Agua", 200, "bebida", 20, "Agua"),
    new Hamburguesa(8, "Gaseosa", 250, "bebida", 12, "Pepsi, fanta, sprite"),
    new Hamburguesa(9, "Cerveza", 300, "bebida", 12, "Brahama, Heinneken"),
]

//DOM 

let contenedor = document.getElementById("contenedor-productos")
let temp = document.querySelector("template")
let card = temp.content.querySelector("div")

function crear (carta){
    contenedor.innerHTML = ""

    carta.forEach(hamburguesa => {
        let clonarMenu = card.cloneNode(true)
        contenedor.appendChild(clonarMenu)

        console.log(clonarMenu)
        //Nombre del producto
        clonarMenu.children[0].innerText = hamburguesa.nombre

        //precio

        clonarMenu.children[1].innerText = hamburguesa.precio

        // detalle de las burger
        clonarMenu.children[2].innerText = hamburguesa.detalle
    });
}

crear (hamburguesas)





/*
// Metodo filter mostrar solo como funciona, no interactua con el resto del codigo
    const comid = hamburguesas.filter(burger=> burger.tipo == "comida")
    const bebid = hamburguesas.filter(drinks => drinks.tipo == "bebida")
    console.log(comid)
    console.log(bebid)

// funciones para mostrar menu, que la hamburguesa vaya al carrito
function Menu() {
    this.hamburguesas = []
    
    this.agregarHamburguesa = (hamburguesa) => {
    this.hamburguesas = [...this.hamburguesas, hamburguesa]
    }

    this.traerHamburguesa = (id) => {
        return this.hamburguesas.find(hamburguesa => hamburguesa.id == id)
    }

    this.mostrarMenu = () => {
        return this.hamburguesas.map(hamburguesa => `${hamburguesa.id}. ${hamburguesa.nombre} `).join("\n")
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
        const nuevaCantidad = Number(prompt("Selecciona una nueva cantidad"))
        resultado = carrito.agregarAlCarrito(id, nuevaCantidad)
    }

//indicar si para terminar con la compra
    end = prompt("Escribe si cuando haya terminado de elegir sus hamburguesas").toLowerCase()
}
//Total de los productos seleccionados. Y ademas indica cuanto sale cada una.
alert(`El total de su compra es: $${carrito.total}. \n Has comprado: ${carrito.mostrarCompra()}`)

//para finalizar se le va a solicitar al usuario su nombre y un email para contactarnos con ellos

let nombre = prompt("Ingrese su nombre")
let email = prompt("Ingrese su email")

alert(`Muchas gracias por su compra ${nombre} por medio de su email ${email} nos pondremos en contacto con usted!`)
*/