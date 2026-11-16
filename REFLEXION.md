1. Indique cuál fue la opción de juego seleccionada.

La opción de juego que seleccioné fue la de Memoria con Cartas (Memotest) con un tablero de 8 pares de cartas, que al hacer clic, se dan vuelta. Si coinciden quedan visibles, si no se vuelven a ocultar tras un breve lapso.

2. Copie el fragmento de código JavaScript literal donde implementa la lectura y escritura del récord en localStorage (métodos getItem y setItem).

getItem: 
let mejorRecord = localStorage.getItem("recordMemotest")
if (mejorRecord != null) {
    record.textContent = mejorRecord
}

setItem:
if (mejorRecord == null || Number(intentos.textContent) < Number(mejorRecord)) {
    mejorRecord = intentos.textContent
    localStorage.setItem("recordMemotest", mejorRecord)
    record.textContent = mejorRecord
    }

3. ¿Cómo estructuró la lógica para evitar que el usuario hiciera trampa o pudiera adivinar la respuesta directamente leyendo las variables globales en la consola del navegador? (Ejemplo: uso de ámbitos de función local, no guardar respuestas correctas en variables globales obvias).

La lógica del juego está organizada dentro de la función iniciarJuego() para evitar que el usuario pueda acceder fácilmente a las respuestas correctas desde la consola del navegador (F12). De esta forma, las variables utilizadas para almacenar las cartas, las imágenes, los intentos, los pares encontrados y las cartas seleccionadas tienen un ámbito local y no pueden consultarse directamente desde la consola del navegador como variables globales. Así se dificulta que el usuario pueda descubrir las parejas sin jugar.