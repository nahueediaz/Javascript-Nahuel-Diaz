datosPersona()

function datosPersona (){
    let tbody = document.querySelector("#tablaPersona tbody")

    tbody.innerHTML = ""

    let nombre = JSON.parse(localStorage.getItem("nombrePersona")),
        email = JSON.parse (localStorage.getItem("emailPersona")),
        direccion = JSON.parse(localStorage.getItem("direccionPersona"))

    let cantidadPersonas = nombre.lenght

    for (let i = 0 ; i < cantidadPersonas; i++){

        let fila = document.createElement ("tr")

        let celdaNombre = document.createElement("td")
        let celdaEmail = document.createElement("td")
        let celdadireccion = document.createElement("td")

        let nodoNombre = document.createTextNode(nombre[i]),
            nodoEmail = document.createTextNode(email[i]),
            nodoDireccion = document.createTextNode(direccion[i])

            celdaNombre.appendChild(nodoNombre)
            celdaEmail.appendChild(nodoEmail)
            celdadireccion.appendChild(nodoDireccion)

            fila.appendChild(celdaNombre)
            fila.appendChild(celdaEmail)
            fila.appendChild(celdadireccion)

            tbody.appendChild(fila)
    }
}