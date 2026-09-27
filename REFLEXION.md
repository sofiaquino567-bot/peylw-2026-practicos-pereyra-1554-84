1. Indique el código HTML literal que utilizó para definir el campo del Código Postal con su correspondiente expresión de patrón (pattern) y atributo title.

<label for="codigo-postal">Código Postal:</label>
        <input type="text" id="codigo-postal" name="codigo-postal"
        pattern="^[A-Z]\d{4}[A-Z]{3}$"
        title="Ingrese el código postal con el formato: R8500AAF">

2. Explique para qué sirve la etiqueta "label" en los formularios y cómo se asocia correctamente a un campo de entrada mediante el atributo for.

La etiqueta <label> sirve para proporcionar una etiqueta clara y descriptiva a cada campo de un formulario, indicando al usuario qué información debe ingresar. Para asociar correctamente un <label> con un campo de entrada mediante el atributo "for", el valor de "for" debe ser exactamente igual al valor del atributo "id" del campo.

3. ¿Cómo se comportan los campos de selección circular (radio) cuando tienen diferentes atributos name vs. cuando comparten el mismo name?

Los campos de selección circular (radio) funcionan como un grupo cuando comparten el mismo atributo name, por lo que el usuario solo puede seleccionar una opción de ese grupo. En cambio, cuando tienen diferentes valores en name, pertenecen a grupos distintos y se puede seleccionar una opción de cada grupo.
