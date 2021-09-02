/*
CSS GRID
Cuadrícula en dos dimensiones
Para activarlo: display: grid;
        o       display: grid-inline;
Contenedor de cuadrícula, los cuadritos que contiene son los grid items.

Ejes:
    Eje de fila en dirección x
    Eje de columna en dirección y
Estos ejes siempre se mantienen igual, no como en flex-box

Las líneas de cuadrícula separan los cuadritos dentro del contenedor. Éstas se numeran automáticamente
comenzando desde 1 x: de izquierda a derecha = número de filas + 1
Grid line, son las líneas verticales y horizontales que separan las columnas y las filas (las que
    dividen la cuadrícula)
                    (Si son dos filas, se tienen tres líneas de cuadrícula) (grid items)
                   y: de arriba hacia abajo = número de columnas + 1
                    (Si son tres columnas, se tienen cuatro líneas de cuadrícula) (grid items)

El espacio real que está entre los elementos de la cuadrícula es el canal o "gutter". Puede ser diferente
para el de la columna y el de la fila

======================================================================================================
                                P R O P I E D A D E S  D E L  G R I D
======================================================================================================

C O N T A I N E R                                I T E M

grid-template-rows                               grid-row-start        grid-row: inicio / final;
grid-template-rows                               grid-row-end                          grid-area
grid-template-columns  (plantilla)                                                                  
grid-template-areas                              grid-column-start     grid-column: inicio / final;
                                                 grid-column-end
row-gap
column-gap        (brecha o hueco)               justify-self
                                                 align-self
justify-items    alinea horizontalmente                               
align-items      alinea verticalmente            order: el valor por defecto es cero, admite valores
justify-content  alinea horizontalmente                  + y -
align-content    alinea verticalmente            grid-row: 2 / span 3; inicio / cuánto se expande

grid-auto-rows                                   & > * -> Propiedad para todos sus elementos hijo
grid-auto-columns
grid-auto-flow //Indica si el grid se despliega en filas o columnas (valor defecto: rows, puede ser column)

place-items: center; centra en horizontal y vertical
grid-area: 3 / 1 / 5 / 4; inicio de fila / inicio columna / fin fila / fin columna
grid-template-rows: 1fr repeat(3, 100px) .7fr; fr para expandir celdas del grid, no usar px porque
hay desbordamiento. También se pueden usar porcentajes
grid-template-columns: repeat(3, 1fr) 200px;


grid-template es una propiedad abreviada que combina grid-template-rows y grid-template-columns.
Por ejemplo, grid-template: 50% 50% / 200px; creará una cuadrícula con dos filas que ocuparán el 
50% del alto cada una, y una columna que será 200 píxeles de ancho.

======================================================================================================

La celda grid es el área en tre líneas de columna y de fila

Truco para poner crear varios elementos a la vez, con diferente número:
    .container>.item.item--$*6

Unidad Fraccional:
    grid-template-rows: repeat(2, 150px) 1fr; ocupa todo el espacio que sobra
    grid-template-columns: 2fr 1fr 3fr; divide al contenedor en 5 partesiguales y ocupa la fr indicada
    También se pueden usar porcentajes
    Define el width
    El porcentaje no toma en cuenta el gap

Repeat:
    grid-template-rows: repeat(2, 150px); para columnas iguales
    grid-template-rows: repeat(2, 150px) 100px; para 2 columnas iguales y una diferente

Si se tienen más elementos de los que en un principio se definió en el div del grid, el grid añadirá
más filas o columnas, al nuevo espacio creado se le llama cuadrícula implícita.

Se pueden tener varios items dentro de la misma celda, con posicionamiento explícito, usar z-index para
una mejor visualización de los elementos

span: 
    grid-column: 2 / span 3; inicio y lugares que queremos abarque
    grid-column: 2 / span 2; para que no cree una columna extra
    grid-column: 2 / -1; comineza desde la posición 2 y termina hasta el final del contenedor (por si
      no recordamos cuántas columnas son)

    El -1 no significa el fin de la cuadrícula, sino el fin de la celda explícita, por lo que no
    funcionará en la cuadrícula implícita

=======================
Nombrando las líneas para posicionar elementos (método dos, el 1 es con números)

Se pone el contenido y el inicio o fin -> [header-start]   [header-end]
El final de una, es el inicio de la otra.
Cuando es con repeat: repeat(3, [col-start] 1fr [col-end]) -> se crea un conjunto de líneas de cuadrícula
    Así se creean tres columnas, c/u con su inicio llamado col-start y con su respectivo final
    para la 1er columna será col-start 1 / col-start 2 and so on
    grid-column: col-start 1 / col-end 4;

========================
Método 3 para posicionar elementos: nombrar las áreas enteras (grid áreas)

A c/celda se le da un nombre. Ej (grid de 4x4)
Por cada fila se define un string

grid-template-areas: 'header header header header'
                      "box box box side"
                      "main main main side"
                      "footer footer footer footer";

Se pueden dejar celdas vacías colocando un "." en el nombre de la celda.
Y hay que posicionar los demás elementos o el grid los recorrerá

Luego, c/celda se manda a llamar con "grid-area": (en el html el nombre de la celda es igual al 
    nombre de la clase del elemento)

.header {
    grid-area: header;
}

===================
Grid explícito
Nosotros definimos como serán las columnas y filas con grid-template

===================
Grid implícito
Cuando el grid agrega + filas o columnas que nosotros no especificamos. Esto lo hace para cubir espacio
A este grid también se le puede dar formato con:
    grid-auto-rows: 90px;
    grid-auto-columns: 90px;
grid-auto-flow: row / colum; si es row, column no se aplicará y viceversa
Visualmente, al inspeccionar, se puede observar que el grid explícito está cubierto por una línea
sólida, mientras que el implícito no.

===================
Alineando los elementos de la cuadrícula al área de la cuadrícula

* align-items: center; stretch end start
De esta forma, los elementos se alínean verticalmente, ocupando sólo el espacio
que necesitan, al igual que en flexbox, su valor defecto es "stretch", por eso se estiran

*justify-items: center; stretch end start
Alínea los elementos horozontalmente (como justify content en Flexbox). Los centra en el área

*align-self: center; stretch end start
Elimina las dos propiedades anteriores definidas en el contenedor

*justify-self: center; stretch end start

===================
Alineando tracks (pistas)

Como en flexbox

*justify-content: space-around; center start end space-between space-evenly
Alinea horizontalmente

*align-content: center;
Alínea verticalmente

Para eliminar cuadrículas vacías poner "dense" en grid-auto-flow: row dense;

===================
min-content max-content minmax() function

min-content -> el espacio se ajusta al menor contenido de la fila o columna
max-content -> el espacio se ajusta al mayor contenido de la fila o columna
minmax() se le pasan dos valores y Css garantiza que la pista se mantendrá entre esos dos valores
Siempre conservarán esas medidas. Altura y ancho: minmax(150px, min-content)
    mínimo y máximo (al hacerlo responsivo)

grid-template-columns: max-content min-content 1fr 1fr;
grid-template-columns: minmax(200px, 300px); este se observa al definir un ancho relativo al contenedor
    ej. width: 90%;, al hacer más pequeñas la pantalla: el valor de la columna siempre estará
    entre 200 y 300px, nunca menor a 200 ni mayor a 300. Se pueden usar % y fr
La unidad fraccional llena todo el espacio restante, pero nunca es más pequeña que el contenido
mínimo de una fila o columna (esto cuando la pantalla se hace más pequeña)

===================
Responsive Layout: auto-fill (autocompletar) y auto-fit (autoajuste)
*auto-fill: llenará automáticamente el espacio disponible con los elementos que tenga para ocupar,
    creará más columnas o filas, en caso de que el contenedor sea más grande que los elementos para
    ocupar (si las dimensiones se definen en pixeles)
*auto-fit: colapsa las pistas dándoles un ancho de cero, pero dejando el espacio libre del contenedor
    por lo tanto, no se pueden ver las columnas
grid-template-columns: repetat(auto-fill, 100px);

width: 90%;
grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
grid-auto-rows: 100px; //para darle estilo al grid implícito
    Esto crea las columnas necesarias para que c/u abarque 100px de ancho, al hacer la vista más
    pequeña, las columnas se convertirán en filas porque se ha definido que el ancho mínimo de una
    columna debe ser 100px;

Se pueden establecer valores negativos a grid-column-start y grid-column-end, comenzando
a contar desde la derecha a la izquierda

grid-column-start: 1;                 grid-column: 2 / span 3
grid-column-end: span 5;


==============================================================================================
                            I n i c i o  d e l  P r o y e c t o
==============================================================================================

npm init
npm i node-sass --save-dev
    Build process
npm install concat --save-dev
npm install autoprefixer --save-dev
npm install postcss-cli --save-dev
npm install npm-run-all --save-dev

cuando el script es start, no es necesario poner: npm run start, sólo npm start

En muchos casos no es necesario definir las filas, sólo las columnas del grid, ya que el contenido
se adaptará automáticamente

Para el diseño de las columnas, es habitual crear 8 o 16
Luego se agrega la barra izquierda (sidebar) y para centrar las 8 columnas de contenido se agregan
columnas a los lados con 1fr para que ocupen el espacio que queda y serán las primeras en encogerse.
Después estas columnas también se podrán ocupar.

Tip: 
    .features{feature $}*6 -> Creará 6 div con la clase feature con texto

Fill:
    para cambiar el color de los svg. Usualmente su width y height es el mismo.

Extend:
    Dentro del archivo se pone lo que se quiere heredar a los bloques de diseño:
    %heading {
        font-family: Gabriola; etc
    }

    Dentro de los bloques se manda a llamar la extensión: 
        @extend %heading; y así hereda las propiedades de heading.
    La diferencia con el Mixin es que el mixin se copia donde se manda a llamar, y en Extend
    los bloques se copian dentro del Extend (en %heading)

Para hacer responsiva la sección Features:
    con auto-fit: creará tantas pistas para que el contenido se adapte en función del width
    que se le da al contenido. Se usa junto con minmax para establecer el mínimo y el máximo rango
    en el que estará:
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    CSS agregará tantas pistas como quepan, y si no las irá colocando abajo

Combiene usar flexbox cuando se tiene un grid de una dimensión (una columna)

padding: 4rem 8vw;//unidades de viewport width: El padding se ajustará dependiendo de las dimensiones
de la pantalla, a lo ancho

Las imágenes no llenan todo el espacio de la celda, ya que se comportan diferente en comparación
con los demás elementos. Las imágenes siempre tratan de mantener su aspecto.

Sombra: 
    box-shadow: 0 2rem 5rem rgba(#000, .2);

La entidad <sup> eleva el texto en el HTML: <p>324 m<sup>2</sup></p>

Para encimar dos elementos en grid, especificar a c/u el mismo posicionamiento y darle un z-index
al que queramos por encima

===================
Para la galería
Para que las imágenes no se desborden hay que usar auto-fit: cover;
en el HTML crear un contenedor para las imágenes y luego éstas se adaptarán (encerrar en figure,
    funciona también con un div)
Para que funcione object-fit se debe establecer ancho y altura

&_img { Para que la imagen se adapte al tamaño de la celda
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

===================
Footer

===================
Botón de side-bar: se creará un rectángulo y después sus pseudoelementos after y before

===================
Header
Con grid puede usar line height para dar espacio entre los textos, en lugar de usar margin-bottom

===================
Responsive Design

"devserver": "live-server --browser=firefox", en el package para abrirlo con Firefox


Crear vars en el archivo base y luego usarlas en los media queries, se usan ems para definirlos

lo que queremos entre el tamaño default de la fuente que da el navegador:

800px/16px=50em

@media only screen and (max-width: $bp-largest) {
        font-size: 50%;
    }

1.- reducir el tamaño de letra
2.- pasar la barra lateral arriba (cambiar la definición del grid, agregando una fila y eliminando
    una columna) luego acomodar la barra
    Es conveniente nombrar el inicio de las filas y columnas, para que al hacer el diseño responsivo,
    sea más fácil adaptarlo
3.- Agregar una nueva fila para bajar a los agentes
    @media only screen and (max-width: $bp-large) { en el bloque "list"
            grid-template-columns: repeat(3, min-content max-content);
        }



        Folio beneficio: 1-383951025180

*/