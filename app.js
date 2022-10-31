let contenedor = document.getElementById("contenedor-productos")


async function fetchHamburguesas(){
    const respuest = await fetch('./data.json')
    return await respuest.json()
}

let menu = []
// LLamo al json mediante fetch y luego llamo a la funcion para nuestro menu 
fetchHamburguesas().then(hamburguesas => {
    menu = hamburguesas

    mostrarMenu()
})

//Funcion para llamar a nuestro menu... DOM 
function mostrarMenu(){
    for (hamburguesa of menu){
        const li = document.createElement("div")
        li.classList.add ("contenedor-cards")
        const cardMenu = `<div class="product-card row" id="productos">
        <h3 class="titulo">${hamburguesa.nombre}</h3>
        <p class="precio">${hamburguesa.precio}</p>
        <img src="${hamburguesa.imagen}" alt="">
        <p class="texto">${hamburguesa.detalle}</p>
        <button class="btn btn-primary" id="carritoButton">Agregar al carrito</button>
        `
        li.innerHTML = cardMenu
        contenedor.append(li)

        // Eventos- Boton-Añadir al carrito 
        const carritoButtons = document.querySelectorAll('#carritoButton')
console.log(carritoButtons)
carritoButtons.forEach((carritoButton) => {
    carritoButton.addEventListener('click', carritoClicked)
});
    }
}

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
/*
    // JSON para que guarde informacion del carrito 
    const anteriorEstado = JSON.parse(localStorage.getItem('carrito'))
    const productoAgregar = hamburguesas.find(hamburguesa => hamburguesa.nombre == itemTitulo)
// Operador ternario para  reducir codigo y spread operator
anteriorEstado ? localStorage.setItem("carrito", JSON.stringify([...anteriorEstado, productoAgregar]))
:
localStorage.setItem("carrito", JSON.stringify([productoAgregar]))
*/
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
