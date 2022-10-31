    //Boton comprar

    const form = document.querySelector(".form")
    form.addEventListener("submit", comprarButtonClicked)
    
// Funcion para limpiar carrito al hacer click en comprar
function comprarButtonClicked(e){
e.preventDefault()
        Swal.fire({
            icon: 'success',
            title: 'Felicitaciones! El pedido fue tomado',
            text: 'Le enviaremos un email con los detalles de la compra y su seguimiento.',
        })
        
        form.reset()
    }

    let anombre = [],
        aemail = [],
        adireccion = []

        if(localStorage.getItem("nombrePersona") != null){
            anombre= JSON.parse(localStorage.getItem("nombrePersona"))
            aemail = JSON.parse(localStorage.getItem("emailPersona"))
            adireccion = JSON.parse(localStorage.getItem("direccionPersona"))
        }

let buttonComprar = document.querySelector("#buttonComprar")

buttonComprar.addEventListener("click", registrarCompra)

function registrarCompra(){
    let nombre = document.querySelector("#nombre").value
    let email = document.querySelector("#email").value
    let direccion = document.querySelector("#direccion").value

    anombre.push(nombre)
    aemail.push(email)
    adireccion.push(direccion)

    localStorage.setItem("nombrePersona", JSON.stringify(anombre))
    localStorage.setItem("emailPersona", JSON.stringify(aemail))
    localStorage.setItem("direccionPersona", JSON.stringify(adireccion))
    

    datosPersona()
}