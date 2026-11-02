1. Copie el fragmento de código JavaScript literal que utilizó para validar si la edad ingresada es menor a 18 años y aplicar el estilo CSS dinámico en la tabla.

- Archivo "script.js":
campoEdad.addEventListener("input", function() {
        if (Number(campoEdad.value) < 18 && campoEdad.value !== "") {
            resumenEdad.innerText = campoEdad.value + " (Menor de edad)";
            resumenEdad.classList.add("advertencia");
        } else {
            resumenEdad.innerText = campoEdad.value;
            resumenEdad.classList.remove("advertencia");
        }
    });

- Archivo "styles.css":
/* Mensajes de advertencia para los datos del formulario */
.advertencia {
    background-color: #ffcccc;
    color: #990000;
    font-weight: bold;
    border: 1px solid #cc6666;
}
2. ¿Por qué se utilizó el evento 'input' en lugar de 'change' para realizar el volcado en tiempo real de los campos de texto? Explique la diferencia de comportamiento entre ambos eventos.

Se utilizó el evento input en lugar de change porque permite actualizar la tabla en tiempo real mientras el usuario escribe o modifica el contenido de un campo de texto. La diferencia entre ambos es que input se ejecuta cada vez que se modifica el valor del campo, mientras que change se ejecuta cuando se confirma el cambio, generalmente al salir del campo. Por eso se eligió input, ya que permite visualizar los datos ingresados en la tabla de manera inmediata, sin tener que esperar a que el usuario termine de completar el campo.

3. Describa brevemente cómo solucionó el problema de ejecutar código específico de una página (ej. buscar el botón de biografía) en un archivo JavaScript común sin que genere errores de "null pointer" en la consola de la otra página (ej. al estar en contacto.html).

Para solucionar este problema utilicé una condición "if" que verifica si los elementos existen en la página antes de ejecutar el código correspondiente. De esta manera, compruebo si estoy en acercade.html antes de agregar el evento al botón "Leer más" y si estoy en contacto.html antes de ejecutar los eventos del formulario. Así evito que JavaScript intente acceder a elementos que no existen en la página y se generen errores en la consola.