1. Copie el fragmento de su código CSS que realiza la animación de rotación vertical del logo del CURZA al pasar el cursor por encima.
    
    /* LOGO DEL CURZA */

/* Configuro el tamaño y la transición de la animación 3D */
.logo-curza {
width: 100px;
height: auto;
transition: transform 1s ease-in-out;
transform-style: preserve-3d;
}

/* Giro completo del logo al pasar el mouse */
.logo-curza:hover {
transform: rotateY(360deg);
}

2. ¿Por qué es necesario definir un color de fondo (background-color) en el elemento con position: sticky cuando se realiza el desplazamiento de texto detrás de él? ¿Qué ocurriría si no se define?

Es necesario definir un color de fondo para que el texto que se desplaza por detrás del título no se vea a través de él. Si no se define, el fondo sería transparente y el texto podría verse detrás de las letras del título Bibliografía, dificultando su lectura.

3. Describa brevemente qué cambio visual ocurre en su sitio al probarlo en una pantalla de tamaño celular (menor a 768px) debido a las directivas @media que implementó.

Al visualizar el sitio en modo para celular, el encabezado se organiza verticalmente, el título y el logo reducen su tamaño y los enlaces del menú se muestran uno debajo del otro. Además, el formulario pasa a una sola columna, las imágenes se adaptan al ancho de la pantalla y las tablas permiten el desplazamiento horizontal para evitar que se desborden.