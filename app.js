
//ecommcerce de compra de hamburguesas
function Hamburguesa(id, nombre, precio, tipo, stock, detalle,imagen) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.tipo = tipo
    this.stock = stock
    this.detalle = detalle
    this.imagen = imagen
}

let hamburguesas = [
    new Hamburguesa(1, "Veggie", 800, "comida", 12, "Pan de espinaca, medallon vegetariano, tomate, queso, cebolla.", ),
    new Hamburguesa(2, "Italiana", 850, "comida", 10, "Burger, muzzarella, tomate asado, rucula y alioli verde."),
    new Hamburguesa(3, "Queso grillado", 870, "comida", 15,"Burger con provoleta a la plancha, morrones asados, cebolla frita, rucula.", "./Imagenes/Queso grillado.jpg"),
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


        //Nombre del producto
        clonarMenu.children[0].innerText = hamburguesa.nombre

        //precio

        clonarMenu.children[1].innerText = hamburguesa.precio

        // detalle de las burger
        clonarMenu.children[2].innerText = hamburguesa.detalle
    });
}

crear (hamburguesas)

//Eventos 

const carritoButtons = document.querySelectorAll('#carritoButton')
carritoButtons.forEach((carritoButton) => {
    carritoButton.addEventListener('click', carritoClicked)
});

//Boton comprar

const comprarButton = document.querySelector(".comprarButton")
comprarButton.addEventListener("click", comprarButtonClicked)


const carritoAdds = document.querySelector(".carrito-add")

//Aca agregue evento para que el boton de añadir carrito funcione
function carritoClicked (event){
    const boton = event.target
    const item = boton.closest(".product-card")

    const itemTitulo = item.querySelector (".titulo").textContent
    const itemPrecio = item.querySelector (".precio").textContent

    añadirItem(itemTitulo, itemPrecio)
}
//DOM 
function añadirItem (itemTitulo, itemPrecio){
    const elementsTitle = carritoAdds.querySelectorAll(".tituloBurger")
    for (let i = 0 ; i < elementsTitle.length; i++){
        if(elementsTitle[i].innerText === itemTitulo){
            let elementsCantidad = elementsTitle[i].parentElement.parentElement.querySelector(".cantidad")
            elementsCantidad.value++
            carritoTotal()
            return
        }
    }


    const carritoRow = document.createElement("div")
    const carritoConteiner = `
    <div class="row menuBurger">
        <div class="col-6 mb-3 mt-3">
            <h6 class="tituloBurger ml-3 mb-0 text-white-50">${itemTitulo}</h6>
        </div>
        <div class="col-2 mb-3 mt-3">
            <p class="sumaPrecio mb-0 text-white-50">${itemPrecio}</p>
        </div>
        <div class="col-4 ">
            <input class="mr-3 cantidad" type="number"value="1">
            <button class="btn btn-danger buttonDelete ml-3" type="button">X</button>
        </div>
    </div>`

    carritoRow.innerHTML = carritoConteiner
    
    carritoAdds.append(carritoRow)

    //Delete producto

    carritoRow.querySelector(".buttonDelete").addEventListener("click", removerProducto)

    //Cantidad de los productos

    carritoRow.querySelector(".cantidad").addEventListener("change", cantidadCarrito)

    carritoTotal()

    // JSON para que guarde informacion del carrito 

    const anteriorEstado = JSON.parse(localStorage.getItem('carrito'))
    const productoAgregar = hamburguesas.find(hamburguesa => hamburguesa.nombre == itemTitulo)

// Operador ternario para  reducir codigo y spread operator
anteriorEstado ? localStorage.setItem("carrito", JSON.stringify([...anteriorEstado, productoAgregar]))
:
localStorage.setItem("carrito", JSON.stringify([productoAgregar]))

//Codigo reducido
/*    if (anteriorEstado){
    localStorage.setItem("carrito", JSON.stringify([...anteriorEstado, productoAgregar]))
    }
    else {
        localStorage.setItem("carrito", JSON.stringify([productoAgregar]))
    }
*/
}

//Funcion para sumar carrito

function carritoTotal(){
    let total = 0
    const sumaCarrito = document.querySelector(".sumaCarrito")
    const menuBurgers = document.querySelectorAll(".menuBurger")

menuBurgers.forEach(menuBurger => {
    const sumaPrecioCont= menuBurger.querySelector(".sumaPrecio")
    const sumaPrecio = Number(sumaPrecioCont.textContent.replace("$", ""))
    const cantidadCont = menuBurger.querySelector(".cantidad")
    const cantidad = Number(cantidadCont.value)
    total = total + sumaPrecio * cantidad
})

sumaCarrito.innerHTML = `$${total} `
}

// Agrego evento click para remover los productos del carrito

function removerProducto (event){
    const buttonClick = event.target
    buttonClick.closest(".menuBurger").remove()
    carritoTotal()
    

}
//Evento change para modificar cantidad de los productos

function cantidadCarrito(event){
    const inputCarrito = event.target

    if (inputCarrito.value <= 0 ){
        inputCarrito.value = 1
    }
    carritoTotal() 
}

// Funcion para limpiar carrito al hacer click en comprar
function comprarButtonClicked(){
    carritoAdds.innerHTML = ""
    carritoTotal()

// Si el carrito esta vacio 
    if (carritoTotal.total =  "0"){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Seleccione un producto a comprar !'
            })
    }
    // Si se completa la compra
    else{
        Swal.fire({
            icon: 'success',
            title: 'Haz completado la compra !',
            text: 'Recibiras los detalles por email. Por favor ingrese su correo!'
            })
    }
    }


