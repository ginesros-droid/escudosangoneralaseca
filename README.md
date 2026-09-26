# El escudo de Sangonera la Seca — Guía interactiva

Aplicación web educativa e interactiva para explicar, de forma visual, el escudo heráldico de Sangonera la Seca (pedanía de Murcia). Desarrollada **exclusivamente en HTML, CSS y JavaScript**, sin backend, sin dependencias externas y sin necesidad de servidor: se abre haciendo doble clic en `index.html`.

## Qué es

El visitante ve el escudo completo y puede pulsar sobre cada una de sus partes (corona, cuarteles, montañas, espadas, ondas, cintas...) para conocer su descripción visual, su significado heráldico, su historia documentada y la fuente de esa información. Incluye zoom, pantalla completa, un recorrido guiado ("Explorar el escudo") y una vista de conjunto ("Ver el escudo completo").

Toda la información histórica se basa en la explicación oficial del escudo, **aprobada en el Pleno de la Junta Municipal de Sangonera la Seca el 30 de marzo de 2004**. Donde no existe documentación confirmada sobre un detalle concreto, el texto lo indica explícitamente en lugar de inventar un significado.

## Cómo abrirlo

Haz doble clic en `index.html`. Funciona directamente desde el disco (`file://`), sin necesidad de conexión a internet ni de instalar nada.

## Estructura de carpetas

```
escudo-interactivo/
│
├── index.html          Estructura de la página y zonas SVG interactivas
├── css/
│   └── styles.css       Todos los estilos visuales
├── js/
│   ├── app.js             Configuración del proyecto y lógica de la aplicación
│   └── proteccion.js      Disuasorio de copia/inspección (ver más abajo)
├── assets/
│   └── Escudo_Sangonera_La_Seca.jpg   Imagen del escudo
├── publicar/            Versión minificada lista para subir (se regenera, no editar a mano)
└── README.md
```

## Cómo sustituir la imagen del escudo

1. Sustituye el archivo `assets/Escudo_Sangonera_La_Seca.jpg` por la nueva versión (misma proporción recomendada, o ajusta el `viewBox` del SVG si cambia el tamaño, ver más abajo).
2. Si la nueva imagen tiene otras dimensiones en píxeles, actualiza el `viewBox` de `<svg id="svg-escudo">` en `index.html` con el nuevo ancho y alto exactos (por ejemplo `viewBox="0 0 950 1433"`).
3. Las zonas interactivas están definidas en coordenadas relativas a ese `viewBox`, así que si cambias las proporciones de la imagen tendrás que reajustar los polígonos (ver siguiente apartado).

## Cómo modificar los textos generales

Abre `js/app.js` y edita la sección marcada como:

```js
// =====================================================
// CONFIGURACIÓN DEL PROYECTO
// =====================================================
```

Ahí encontrarás:

- `nombrePedania`, `tituloProyecto`, `subtituloProyecto`: textos de la cabecera.
- `autor`: nombre mostrado en el pie de página.
- `categoriasEscudo`: las categorías de la leyenda (nombre y color).
- `elementosEscudo`: el array con toda la información de cada elemento (ver siguiente apartado).
- `ordenExploracion`: el orden del recorrido guiado.
- `explicacionGeneral`: los párrafos de la sección "El escudo completo".

## Cómo añadir o modificar elementos del escudo

Cada elemento vive en el array `elementosEscudo` de `js/app.js`, con esta forma:

```js
{
  id: "identificador-unico",
  nombre: "Nombre corto",
  titulo: "Título mostrado en el panel",
  categoria: "heraldico", // debe existir en categoriasEscudo
  descripcion: "Qué se ve, de forma objetiva.",
  significado: "Significado heráldico si está documentado.",
  historia: "Dato histórico o contexto, si existe.",
  fuente: "De dónde procede la información.",
  coordenadas: { tipo: "polygon", zona: "descripción libre de la zona" }
}
```

Si no tienes información confirmada para `significado` o `historia`, usa una de estas frases (ya definidas como constantes reutilizables):

- `TEXTO_PENDIENTE_DOCUMENTACION` → "Significado pendiente de documentación histórica."
- `TEXTO_INTERPRETACION_ORIENTATIVA` → "Esta interpretación debe considerarse orientativa y no una descripción heráldica oficial."

Después de añadir un elemento nuevo al array, añade también su zona interactiva en el SVG (ver siguiente apartado) usando el mismo `id` en el atributo `data-id`, y opcionalmente añádelo a `ordenExploracion` si quieres que forme parte del recorrido guiado.

## Cómo ajustar las coordenadas SVG de cada zona

Las zonas interactivas están en `index.html`, dentro de `<svg id="svg-escudo">`. Cada una es un `<polygon>` o `<circle>` con un atributo `data-id` que debe coincidir exactamente con el `id` del elemento correspondiente en `elementosEscudo`:

```html
<!-- ZONA INTERACTIVA - NOMBRE DEL ELEMENTO -->
<!-- Ajustar puntos del polygon/path si es necesario. -->
<polygon data-id="mi-elemento" points="x1,y1 x2,y2 x3,y3 ..."></polygon>
```

Las coordenadas están en el mismo sistema que el `viewBox` (actualmente `0 0 950 1433`, el tamaño en píxeles de la imagen original), por lo que funcionan igual en cualquier tamaño de pantalla: el navegador escala el SVG junto con la imagen.

Para ajustar una zona:

1. Abre `index.html` en el navegador y usa las herramientas de desarrollador para inspeccionar el SVG, o superpón temporalmente una rejilla.
2. Cambia los pares `x,y` del `points` del polígono (o `cx`, `cy`, `r` de un `circle`) hasta que la zona cubra bien el elemento visual.
3. Guarda y recarga — no hace falta ningún proceso de compilación.

Las zonas actuales son una primera aproximación razonable, pensada para ajustarse con facilidad, no una calibración al píxel.

## Cómo cambiar el nombre de la pedanía o el autor

Ambos son constantes en la cabecera de `js/app.js`:

```js
const nombrePedania = "Sangonera la Seca";
const autor = "Ginés Ros";
```

## Cómo añadir fuentes históricas

Cada elemento tiene su propio campo `fuente`. Puedes ampliarlo con URL, libro, archivo histórico, publicación oficial, autor o fecha, por ejemplo:

```js
fuente: "Ayuntamiento de Murcia, Junta Municipal de Sangonera la Seca, acta del Pleno de 30/03/2004. Ver también: https://ejemplo.org/acta"
```

Si no hay fuente fiable para un dato, dejar `fuente: "Pendiente de documentación"` en lugar de presentar una interpretación como hecho confirmado.

## Notas de accesibilidad y funcionamiento

- Todas las zonas del escudo son alcanzables y activables por teclado (Tab + Enter/Espacio).
- El estado seleccionado no depende únicamente del color: al seleccionar una zona no se pinta ningún contorno sobre el escudo (para no distraer visualmente); el elemento elegido se identifica por su etiqueta flotante al pasar el ratón y por el panel de información, que permanece abierto con su nombre, descripción, significado, historia y fuente.
- La aplicación funciona completamente offline y no usa CDN ni librerías externas.
- El zoom y el arrastre no interfieren con las zonas interactivas del SVG (siguen siendo pulsables mientras el escudo está ampliado).

## Protección contra copia/inspección (disuasoria, no seguridad real)

`js/proteccion.js` bloquea el clic derecho, el atajo de "ver código fuente" (Ctrl+U), los atajos habituales de las herramientas de desarrollador (F12, Ctrl+Shift+I/J/C), el copiado de texto (evento `copy`) y arrastrar la imagen; en `css/styles.css` el `body` lleva además `user-select: none` para dificultar seleccionar texto.

**Importante:** esto no oculta el código de verdad. Cualquier navegador necesita descargar y ejecutar el HTML/CSS/JS para mostrar la página, así que alguien con conocimientos técnicos siempre puede acceder a él (por ejemplo abriendo las herramientas de desarrollador desde el menú del navegador en vez del atajo, o inspeccionando el tráfico de red). Estas medidas solo evitan el acceso casual de la mayoría de visitantes.

Para quitar esta protección: elimina la línea `<script src="js/proteccion.js"></script>` de `index.html` y el bloque `user-select: none` de `css/styles.css`.

## Cómo publicar el sitio

No subas directamente los archivos fuente (`index.html`, `css/`, `js/` de la raíz del proyecto): usa el contenido ya preparado en `publicar/`, que incluye las mismas páginas con los comentarios y espacios en blanco eliminados (más difícil de leer a simple vista) y el `assets/` con la imagen.

1. Edita siempre los archivos fuente (`index.html`, `css/styles.css`, `js/app.js`, `js/proteccion.js`), nunca los de `publicar/` (se sobrescriben al regenerar).
2. Para regenerar `publicar/` tras un cambio, vuelve a ejecutar el script de minificado que se usó para crearla (elimina y recrea esa carpeta a partir de los archivos fuente).
3. Sube el **contenido** de `publicar/` (no la carpeta en sí) a tu hosting: `index.html`, `css/styles.css`, `js/app.js`, `js/proteccion.js` y `assets/Escudo_Sangonera_La_Seca.jpg`.
