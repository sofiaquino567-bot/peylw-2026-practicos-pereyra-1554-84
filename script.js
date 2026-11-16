console.log("Script cargado exitosamente");

// Referencias de las celdas de la tabla
let resumenNombre = document.getElementById("resumen-nombre");
let resumenApellido = document.getElementById("resumen-apellido");
let resumenEmail = document.getElementById("resumen-email");
let resumenTelefono = document.getElementById("resumen-telefono");
let resumenEdad = document.getElementById("resumen-edad");
let resumenDireccion = document.getElementById("resumen-direccion");
let resumenProvincia = document.getElementById("resumen-provincia");
let resumenCP = document.getElementById("resumen-cp");
let resumenContacto = document.getElementById("resumen-contacto");
let resumenSuscripciones = document.getElementById("resumen-suscripciones");

// Referencias de los campos del formulario
const campoNombre = document.getElementById("Nombre");
const campoApellido = document.getElementById("Apellido");
const campoEmail = document.getElementById("email");
const campoTelefono = document.getElementById("Telefono");
const campoEdad = document.getElementById("Edad");
const campoDireccion = document.getElementById("Dirección");
const campoProvincia = document.getElementById("Provincia");
const campoCP = document.getElementById("codigo-postal");

// Verifico si estoy en la página del formulario
if (campoNombre !== null) {

    // Eventos para los campos de texto y números (input)
    campoNombre.addEventListener("input", function() {
        resumenNombre.innerText = campoNombre.value;
    });

    campoApellido.addEventListener("input", function() {
        resumenApellido.innerText = campoApellido.value;
    });

    campoEmail.addEventListener("input", function() {
        resumenEmail.innerText = campoEmail.value;
    });

    campoTelefono.addEventListener("input", function() {
        resumenTelefono.innerText = campoTelefono.value;
    });

    campoEdad.addEventListener("input", function() {
        if (Number(campoEdad.value) < 18 && campoEdad.value !== "") {
            resumenEdad.innerText = campoEdad.value + " (Menor de edad)";
            resumenEdad.classList.add("advertencia");
        } else {
            resumenEdad.innerText = campoEdad.value;
            resumenEdad.classList.remove("advertencia");
        }
    });

    campoDireccion.addEventListener("input", function() {
        resumenDireccion.innerText = campoDireccion.value;
    });

    campoCP.addEventListener("input", function() {
        resumenCP.innerText = campoCP.value;
    });

    // Evento para Provincia (change)
    campoProvincia.addEventListener("change", function() {
        resumenProvincia.innerText = campoProvincia.value;
    });

    // Referencias de método de contacto y suscripciones
    const opcionesContacto = document.querySelectorAll('input[name="Contacto"]');
    const opcionesSuscripcion = document.querySelectorAll('input[name="suscripcion"]');

    // Eventos para método de contacto
    opcionesContacto.forEach(function(opcion) {
        opcion.addEventListener("change", function() {
            resumenContacto.innerText = document.querySelector('input[name="Contacto"]:checked').value;
        });
    });

    const contactoSeleccionado = document.querySelector('input[name="Contacto"]:checked');

    if (contactoSeleccionado !== null) {
        resumenContacto.innerText = contactoSeleccionado.value;
    }

    // Eventos para suscripciones
    opcionesSuscripcion.forEach(function(opcion) {
        opcion.addEventListener("change", function() {
            const suscripcionesSeleccionadas = document.querySelectorAll('input[name="suscripcion"]:checked');

            let suscripciones = [];

            suscripcionesSeleccionadas.forEach(function(suscripcion) {
                suscripciones.push(suscripcion.value);
            });

            resumenSuscripciones.innerText = suscripciones.join(", ");
        });
    });

    const suscripcionesSeleccionadas = document.querySelectorAll('input[name="suscripcion"]:checked');

    let suscripciones = [];

    suscripcionesSeleccionadas.forEach(function(suscripcion) {
        suscripciones.push(suscripcion.value);
    });

    resumenSuscripciones.innerText = suscripciones.join(", ");
}

// Referencias de los elementos de la biografía
const botonLeerMas = document.getElementById("btn-leer-mas-pereyra-1554-84");
const contenidoCV = document.querySelector(".cv-completo");

// Verifico si estoy en la página de la biografía
if (botonLeerMas !== null && contenidoCV !== null) {
    botonLeerMas.addEventListener("click", function() {

        if (getComputedStyle(contenidoCV).display === "none") {
            contenidoCV.style.display = "block";
            botonLeerMas.innerText = "Leer menos";
        } else {
            contenidoCV.style.display = "none";
            botonLeerMas.innerText = "Leer más";
        }

    });
}

// Juego Memotest:

function iniciarJuego() {

    let intentos= document.getElementById("intentos")
    let paresEncontrados= document.getElementById("pares-encontrados")
    let record= document.getElementById("record")
    let tableroCartas= document.getElementById("tablero-memotest")

    if (tableroCartas != null) {

        let mensajeJuego= document.getElementById("mensaje-juego")
        let mejorRecord = localStorage.getItem("recordMemotest")

        if (mejorRecord != null) {
            record.textContent = mejorRecord
        }

        let juegoTerminado = false
        let botonReiniciar = document.getElementById("btn-reiniciar-pereyra-1554-84")

// Creación de las cartas
let cartas=["img/arcoiris.jpg", "img/arcoiris.jpg", 
            "img/corazon.png", "img/corazon.png",
            "img/flor.png", "img/flor.png",
            "img/nube.png",  "img/nube.png", 
            "img/helado.jpg", "img/helado.jpg",
            "img/huevo.jpg", "img/huevo.jpg",
            "img/hongo.avif", "img/hongo.avif",
            "img/sol.avif", "img/sol.avif"]

// Función que mezcla el orden de las cartas:

cartas.sort(function() {
    return Math.random() - 0.5
})

// Funcion que permite mostrar las cartas

let cartasSeleccionadas= []

function crearCartas() {
    tableroCartas.innerHTML = ""
    cartas.forEach(function(carta) {


    // Creamos elemento html
    let nuevaCarta= document.createElement("li")
    let imagenCarta= document.createElement("img")
    nuevaCarta.classList.add("carta") // Clase que define el diseño de las cartas
    nuevaCarta.classList.add("oculta")

    imagenCarta.src = carta // modificamos la ruta de la imagen
    nuevaCarta.appendChild(imagenCarta)
    tableroCartas.appendChild(nuevaCarta)

    // Evento que nos sirve para dar vuelta la carta
    nuevaCarta.addEventListener("click", function() {
    //  Evento que nos permite controlar cuantas cartas hay seleccionadas

    if (juegoTerminado == true) {
    return}
        if (cartasSeleccionadas.length < 2) {
            if (!cartasSeleccionadas.includes(nuevaCarta)) {
                nuevaCarta.classList.remove("oculta")
                nuevaCarta.classList.add("volteada")
            cartasSeleccionadas.push(nuevaCarta)
                if (cartasSeleccionadas.length == 2) {
                    intentos.textContent = Number(intentos.textContent) + 1
                if (cartasSeleccionadas[0].querySelector("img").src == cartasSeleccionadas[1].querySelector("img").src) {
                    paresEncontrados.textContent = Number(paresEncontrados.textContent) + 1
                    if (Number(paresEncontrados.textContent) == 8) {
                        mensajeJuego.textContent = "¡Felicitaciones! Completaste el Memotest."
                        juegoTerminado = true
                        if (mejorRecord == null || Number(intentos.textContent) < Number(mejorRecord)) {
                            mejorRecord = intentos.textContent
                            localStorage.setItem("recordMemotest", mejorRecord)
                            record.textContent = mejorRecord
                        }
                    }
                    cartasSeleccionadas = []
                }
                else {
                setTimeout(function() {
                    cartasSeleccionadas[0].classList.add("oculta")
                    cartasSeleccionadas[0].classList.remove("volteada")

                    cartasSeleccionadas[1].classList.add("oculta")
                    cartasSeleccionadas[1].classList.remove("volteada")

                    cartasSeleccionadas = []
                }, 1000)}
                }
            }
        }
    })
})}

crearCartas()

// Funcion del boton de reinicio del juego:

botonReiniciar.addEventListener("click", function() {
    cartas.sort(function() {
    return Math.random() - 0.5
    })

    crearCartas()
    intentos.textContent = 0
    paresEncontrados.textContent = 0
    cartasSeleccionadas = []
    juegoTerminado = false
        mensajeJuego.textContent = "¡Bienvenido al Memotest!"
    })
    }
}

iniciarJuego()