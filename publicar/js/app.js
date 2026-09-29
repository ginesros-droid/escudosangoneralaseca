'use strict';
const nombrePedania = "Sangonera la Seca";
const tituloProyecto = "El escudo de Sangonera la Seca";
const subtituloProyecto =
  "Descubre el significado de cada uno de sus elementos";
const autor = "Ginés Ros";
const categoriasEscudo = [
  { id: "heraldico", nombre: "Elementos heráldicos", color: "#8c1d2b" },
  { id: "historico", nombre: "Elementos históricos", color: "#a9822c" },
  { id: "geografico", nombre: "Elementos geográficos", color: "#1f3b64" },
  { id: "simbolico", nombre: "Elementos simbólicos", color: "#4d4438" }
];
const TEXTO_PENDIENTE_DOCUMENTACION = "Significado pendiente de documentación histórica.";
const TEXTO_INTERPRETACION_ORIENTATIVA =
  "Esta interpretación debe considerarse orientativa y no una descripción heráldica oficial.";
const FUENTE_PRINCIPAL =
  "Explicación oficial del escudo, aprobada en el Pleno de la Junta Municipal de Sangonera la Seca el 30 de marzo de 2004 (Ayuntamiento de Murcia).";
const elementosEscudo = [
  {
    id: "corona",
    nombre: "Corona real",
    titulo: "La corona real cerrada",
    categoria: "heraldico",
    descripcion:
      "Corona de oro con arcos cerrados rematados en una cruz, adornada con perlas y piedras preciosas, situada como ornamento exterior sobre el escudo.",
    significado:
      "Corona real cerrada, propia de la monarquía española. Timbra el conjunto del escudo como ornamento exterior, indicando su carácter de blasón municipal aprobado oficialmente.",
    historia:
      "El escudo fue aprobado en el Pleno de la Junta Municipal de Sangonera la Seca el 30 de marzo de 2004.",
    fuente: FUENTE_PRINCIPAL,
    coordenadas: { tipo: "polygon", zona: "parte superior, ornamento exterior" }
  },
  {
    id: "cartela-superior",
    nombre: "Cartela «Vox Nigra»",
    titulo: "Cinta superior: «Vox Nigra»",
    categoria: "heraldico",
    descripcion:
      "Cinta o listón que envuelve el lateral izquierdo del escudo con la inscripción en latín «Vox Nigra».",
    significado:
      "Junto con la cartela inferior, forma la divisa «Vox Nigra et Sanguinaria», que recoge los nombres latinos de los dos antiguos pagos (Voz Negra y Sanguinaria) que dieron origen a Sangonera la Seca.",
    historia:
      "La Villa de la Voz Negra (o Villanueva de Sangonera) es uno de los dos núcleos históricos cuyo nombre se recuerda en la divisa del escudo.",
    fuente: FUENTE_PRINCIPAL,
    coordenadas: { tipo: "polygon", zona: "lateral izquierdo del escudo" }
  },
  {
    id: "cartela-inferior",
    nombre: "Cartela «et Sanguinaria»",
    titulo: "Cinta inferior: «et Sanguinaria»",
    categoria: "heraldico",
    descripcion:
      "Cinta que envuelve el lateral derecho e inferior del escudo con la inscripción «et Sanguinaria».",
    significado:
      "Completa la divisa «Vox Nigra et Sanguinaria»: los nombres latinos de los dos pagos (Voz Negra y Sanguinaria) que dieron lugar a Sangonera la Seca.",
    historia:
      "«Sanguinaria» remite a la tradición de la batalla entre moros y cristianos narrada en el campo negro central, de la que —según la tradición recogida por Saavedra Fajardo— tomaría nombre el paraje.",
    fuente: FUENTE_PRINCIPAL,
    coordenadas: { tipo: "polygon", zona: "lateral derecho e inferior del escudo" }
  },
  {
    id: "primer-cuartel",
    nombre: "Primer cuartel",
    titulo: "Primer cuartel (superior izquierdo)",
    categoria: "heraldico",
    descripcion:
      "Cuartel superior izquierdo, en campo de gules (rojo), con tres montañas de plata, una corona real, un puente de oro y una construcción de piedra bajo él.",
    significado:
      "Representa las Salinas Reales de Sangonera, situadas sobre el puente romano del Puntarrón, y la Vereda Real de Ganados que discurre bajo el puente: el camino más antiguo de la comarca.",
    historia:
      "Las Salinas de Sangonera ya fueron explotadas en época romana. El puente romano del Puntarrón da nombre al barrio homónimo de la pedanía.",
    fuente: FUENTE_PRINCIPAL,
    coordenadas: { tipo: "polygon", zona: "cuadrante superior izquierdo" }
  },
  {
    id: "corona-pequena",
    nombre: "Corona sobre las montañas",
    titulo: "Corona real sobre las montañas de sal",
    categoria: "heraldico",
    descripcion:
      "Pequeña corona real de oro situada sobre la montaña central de las tres representadas en el primer cuartel.",
    significado:
      "Corona real que señala el carácter de «Salinas Reales» de las salinas de Sangonera, es decir, su titularidad y explotación vinculada a la Corona.",
    historia: TEXTO_PENDIENTE_DOCUMENTACION,
    fuente: FUENTE_PRINCIPAL,
    coordenadas: { tipo: "polygon", zona: "interior del primer cuartel, sobre la montaña central" }
  },
  {
    id: "montanas",
    nombre: "Montañas de sal",
    titulo: "Las tres montañas de sal",
    categoria: "geografico",
    descripcion:
      "Tres formas triangulares de color plata (blanco) dispuestas en hilera sobre el puente romano.",
    significado:
      "En plata, tres montañas de sal que simbolizan las Salinas Reales de Sangonera.",
    historia:
      "Las Salinas de Sangonera, ya explotadas por los romanos, conservan un caserón del siglo XIX y forman uno de los parajes diseminados de la pedanía.",
    multimedia: [
      {
        tipo: "imagen",
        src: "assets/salinas-recreacion-2025.png",
        alt: "Recreación del entorno de las Salinas Reales en su época de actividad",
        pie: "Recreación del entorno en la época de actividad — Ginés Ros, 2025"
      },
      {
        tipo: "video",
        src: "assets/salinas-recreacion-2025.mp4",
        pie: "Salinas Reales de Sangonera la Seca — Ginés Ros, 2025"
      },
      {
        tipo: "imagen",
        src: "assets/salinas-estado-actual-2022.png",
        alt: "Estado actual de las Salinas Reales en 2022",
        pie: "Estado de las Salinas Reales, 2022"
      }
    ],
    fuente: FUENTE_PRINCIPAL,
    coordenadas: { tipo: "polygon", zona: "mitad superior del primer cuartel" }
  },
  {
    id: "muralla",
    nombre: "Puente romano (Pontarrón)",
    titulo: "El puente romano del Puntarrón",
    categoria: "historico",
    descripcion:
      "Construcción de sillares dorados con apariencia de mampostería, situada bajo las montañas de sal, que representa un puente.",
    significado:
      "Representa el puente romano conocido como «Pontarrón», sobre el que se sitúan las montañas de sal y la corona real.",
    historia:
      "El puente romano del Puntarrón da nombre al barrio del Puntarrón, uno de los barrios históricos de Sangonera la Seca. " +
      "Los detalles documentados sobre este paraje proceden del libro «Bastitania y Contestania del Reino de Murcia» (1794), del historiador y religioso Juan Lozano y Santa (el canónigo Lozano), quien recorrió la Región de Murcia como «anticuario aficionado», anotando los descubrimientos que los agricultores realizaban en sus tierras. En los parajes de Buznegra y El Puntarrón constató la existencia de «un puente de fábrica romana» —término que en el castellano del siglo XVIII designaba las construcciones sólidas de piedra, sillería o ladrillo (mampostería), frente a los puentes provisionales de madera—. Para sostener la cronología romana del puente y de los caminos que cruzaban Sangonera la Seca, documentó el hallazgo en los campos colindantes de «una destacada colección de monedas, tanto del Bajo como del Alto Imperio», halladas por los lugareños al remover la tierra de cultivo, que abarcaban desde el mayor esplendor de Roma hasta su decadencia y confirmaban que el Puntarrón era una vía de tránsito comercial y militar de primer orden, vinculada a la antigua Vía Augusta. Lozano dejó constancia además de que la superficie de ambos parajes estaba repleta de fragmentos cerámicos y materiales de construcción de origen romano, lo que indica la presencia de antiguas villas agrícolas o puestos de control asociados a la vigilancia del puente. Gracias a este rescate documental del siglo XVIII, recogido hoy en el portal Región de Murcia Digital, los historiadores modernos pudieron certificar que el origen de Sangonera la Seca está profundamente ligado a la arqueología romana, pese a que el desarrollo urbanístico posterior borrara las estructuras en superficie.",
    fuente:
      FUENTE_PRINCIPAL +
      " Los datos históricos sobre el puente proceden de los estudios arqueológicos de la Región de Murcia, recopilados y publicados por el portal oficial Región de Murcia Digital (Regmurcia), en su sección dedicada a la Historia Antigua de Sangonera la Seca.",
    coordenadas: { tipo: "polygon", zona: "mitad inferior del primer cuartel" }
  },
  {
    id: "elemento-rojo",
    nombre: "Vara de pastor",
    titulo: "La vara de pastor bajo el puente",
    categoria: "simbolico",
    descripcion:
      "Elemento de color rojo situado bajo el arco del puente, de forma curva, que representa una vara de pastor con su calabaza.",
    significado:
      "Simboliza la Vereda Real de Ganados, descrita como el camino más antiguo de la comarca, que transcurre bajo el puente romano.",
    historia: TEXTO_PENDIENTE_DOCUMENTACION,
    fuente: FUENTE_PRINCIPAL,
    coordenadas: { tipo: "polygon", zona: "bajo el arco del puente, primer cuartel" }
  },
  {
    id: "segundo-cuartel",
    nombre: "Segundo cuartel",
    titulo: "Segundo cuartel (superior derecho)",
    categoria: "heraldico",
    descripcion:
      "Cuartel superior derecho, en campo de azur (azul), con una roca sobre ondas, un roque de oro, un racimo de moras y dos flores de lis.",
    significado:
      "Es el escudo nobiliario de la familia Rocamora, que ostentaba el señorío de la Villa de la Voz Negra o Villanueva de Sangonera.",
    historia:
      "La familia Rocamora fue titular del señorío de la Villa de la Voz Negra, uno de los dos núcleos que darían origen a Sangonera la Seca.",
    fuente: FUENTE_PRINCIPAL,
    coordenadas: { tipo: "polygon", zona: "cuadrante superior derecho" }
  },
  {
    id: "elemento-central-2",
    nombre: "Roca y roque",
    titulo: "La roca, el roque y el racimo de moras",
    categoria: "heraldico",
    descripcion:
      "Sobre ondas de azur y plata se eleva una roca de color pardo; sobre ella, una pieza dorada en forma de roque (torre de ajedrez), y sobre el roque, un racimo de moras de color púrpura.",
    significado:
      "Conjunto de armas parlantes de la familia Rocamora («roca» + «mora»): la roca y el roque aluden al apellido Rocamora, y el racimo de moras refuerza ese juego heráldico con el mismo apellido.",
    historia:
      "La familia Rocamora ligó su historia a la localidad a principios del siglo XVII: en 1617, don Francisco de Rocamora y Tomás adquirió las tierras y la jurisdicción de los pagos de La Buznegra y Sangonera la Seca. Bajo su dominio, unificó ambos territorios dándoles el nombre original de Villanueva de Sangonera. Debido a su importancia histórica, el escudo nobiliario de la familia Rocamora ocupa el cuartel superior derecho del escudo oficial de Sangonera la Seca, representado por una roca sobre ondas de azur y plata, coronada por una torre de oro y un racimo de moras, flanqueada por dos flores de lis.",
    fuente:
      FUENTE_PRINCIPAL +
      " Los datos sobre la adquisición de las tierras en 1617 por Francisco de Rocamora y Tomás proceden de las crónicas recopiladas por el portal oficial del Ayuntamiento de Sangonera la Seca y de los archivos históricos digitalizados de Región de Murcia Digital (Regmurcia). El origen del apellido, que se remonta al caballero Pedro Ramón de Rocamora en el siglo XIII y sus ramas posteriores en Orihuela, Alicante y Murcia, está documentado en tratados de genealogía como los recogidos en Wikipedia (Casa de Rocamora) y en institutos heráldicos como Heraldry Institute.",
    coordenadas: { tipo: "polygon", zona: "centro del segundo cuartel" }
  },
  {
    id: "flores-lis",
    nombre: "Flores de lis",
    titulo: "Las flores de lis",
    categoria: "heraldico",
    descripcion:
      "Dos flores de lis de oro, situadas una a cada lado de la roca y el roque, flanqueándolos simétricamente.",
    significado:
      "Dos flores de lis en oro que flanquean el roque, como parte del escudo nobiliario de la familia Rocamora.",
    historia: TEXTO_PENDIENTE_DOCUMENTACION,
    fuente: FUENTE_PRINCIPAL,
    coordenadas: { tipo: "polygon", zona: "a ambos lados del elemento central, segundo cuartel" }
  },
  {
    id: "ondas-cuartel2",
    nombre: "Ondas del segundo cuartel",
    titulo: "Ondas de azur y plata",
    categoria: "geografico",
    descripcion:
      "Franjas onduladas alternas de azul y blanco en la parte inferior del segundo cuartel, bajo la roca.",
    significado:
      "Ondas de azur y plata sobre las que se eleva la roca, como parte del escudo nobiliario de los Rocamora.",
    historia: TEXTO_PENDIENTE_DOCUMENTACION,
    fuente: FUENTE_PRINCIPAL,
    coordenadas: { tipo: "polygon", zona: "parte inferior del segundo cuartel" }
  },
  {
    id: "campo-negro",
    nombre: "Campo negro central",
    titulo: "El campo de sable (negro)",
    categoria: "heraldico",
    descripcion:
      "Franja central del escudo, de color negro (sable), que ocupa todo el ancho del blasón bajo los dos cuarteles superiores.",
    significado:
      "Campo de sable sobre el que se representan las espadas cruzadas; junto con las ondas inferiores, simboliza el origen del nombre del pueblo.",
    historia:
      "Este campo, con las espadas y las ondas del río, recrea la tradición de la batalla entre moros y cristianos de la que —según Saavedra Fajardo— tomaría nombre «Sangonera», por la sangre vertida.",
    fuente: FUENTE_PRINCIPAL,
    coordenadas: { tipo: "polygon", zona: "franja central del escudo" }
  },
  {
    id: "armas-cruzadas",
    nombre: "Espadas cruzadas",
    titulo: "Las dos espadas cruzadas",
    categoria: "historico",
    descripcion:
      "Dos espadas blancas cruzadas en aspa sobre el campo negro: una de hoja curva (mora) y otra de hoja recta (cristiana).",
    significado:
      "Representan la famosa batalla, muy mencionada en la Edad Media, que mantuvieron moros y cristianos en la vega de Sangonera.",
    historia:
      "Según recoge la tradición citada por Saavedra Fajardo, «por la sangre vertida, hoy se llama Sangonera». La mitad inferior del escudo simboliza así el origen del nombre del pueblo. " +
      "Las espadas evocan la llamada batalla de la Vega de Sangonera (o del Campo de Sangonera), uno de los episodios más legendarios de la invasión musulmana de la península. Según cronistas históricos e hipótesis de investigadores, el enfrentamiento directo entre el ejército árabe comandado por Abd al-Aziz y las tropas cristianas visigodas del duque Teodomiro tuvo lugar en el año 713, en el actual territorio de Sangonera la Verde y Sangonera la Seca. Algunos historiadores antiguos y textos como la Primera Crónica General de España (compilada bajo Alfonso X el Sabio) o el Poema de Fernán González llegaron incluso a situar aquí la mítica y definitiva caída del rey visigodo Don Rodrigo, en lugar de en el río Guadalete (Cádiz); la Crónica del Moro Rasis menciona incluso el supuesto hallazgo de una lápida del monarca en la zona. El historiador Francisco Cascales describió el choque como un enfrentamiento brutal y sangriento, tan violento que dio pie a la leyenda popular de que el nombre de Sangonera procedía de «Sangre Negra», por el color que tomó el campo tras la matanza; estudios lingüísticos modernos apuntan en cambio a que la etimología real procede del latín «Sanguinaria» (lugar de plantas sanguinarias) o del árabe «fahs Sanqunayra». Las fuerzas cristianas locales fueron diezmadas, pero el duque Teodomiro logró replegar de forma ordenada a los supervivientes hacia Orihuela. Sitiado y en inferioridad numérica, ideó entonces la estratagema de vestir a las mujeres de la ciudad con ropas de guerreros sobre las murallas para simular un ejército numeroso, lo que forzó a Abd al-Aziz a negociar una capitulación honrosa: el llamado Pacto de Teodomiro (año 713), que permitió a los cristianos del territorio de Tudmir conservar sus propiedades, su fe y su autonomía política a cambio del pago de tributos.",
    fuente:
      FUENTE_PRINCIPAL +
      " Los datos sobre la batalla de la Vega de Sangonera proceden de la combinación de crónicas medievales, obras de historiadores clásicos y recopilaciones de la Región de Murcia: el Licenciado Francisco Cascales (1564-1642), en sus «Discursos históricos de la muy noble y muy leal ciudad de Murcia»; la Primera Crónica General de España (siglo XIII, bajo Alfonso X el Sabio); el Poema de Fernán González (hacia 1255); Diego Rodríguez de Almela y Saavedra Fajardo, que respaldaron la tradición de la batalla «Sanguinaria» de moros y visigodos en el año 713; y el portal Región de Murcia Digital (Regmurcia).",
    coordenadas: { tipo: "polygon", zona: "centro del campo negro" }
  },
  {
    id: "gotas-sangre",
    nombre: "Gotas de sangre",
    titulo: "Las espadas ensangrentadas",
    categoria: "simbolico",
    descripcion:
      "Pequeñas marcas rojas en los extremos de ambas espadas, representando gotas de sangre.",
    significado:
      "Las espadas aparecen «ensangrentadas en sus extremos», remachando la referencia a la batalla y al origen sangriento del topónimo «Sangonera».",
    historia: TEXTO_INTERPRETACION_ORIENTATIVA,
    fuente: FUENTE_PRINCIPAL,
    coordenadas: { tipo: "circle", zona: "puntas de las espadas cruzadas" }
  },
  {
    id: "ondas-inferiores",
    nombre: "Ondas inferiores",
    titulo: "Las ondas del río Sangonera",
    categoria: "geografico",
    descripcion:
      "Franjas onduladas azules y blancas que ocupan la parte inferior y apuntada del escudo.",
    significado:
      "Representan el río Sangonera, también llamado Guadalentín, sobre el que se sitúa el campo negro con las espadas cruzadas.",
    historia:
      "El río Sangonera-Guadalentín da nombre a la pedanía y protagoniza, junto con las espadas, la mitad inferior del escudo, dedicada al origen del topónimo.",
    fuente: FUENTE_PRINCIPAL,
    coordenadas: { tipo: "polygon", zona: "parte inferior del escudo" }
  }
];
const ordenExploracion = [
  "corona",
  "primer-cuartel",
  "corona-pequena",
  "montanas",
  "muralla",
  "elemento-rojo",
  "segundo-cuartel",
  "elemento-central-2",
  "flores-lis",
  "ondas-cuartel2",
  "campo-negro",
  "armas-cruzadas",
  "gotas-sangre",
  "ondas-inferiores",
  "cartela-superior",
  "cartela-inferior"
];
const explicacionGeneral = [
  "El escudo de Sangonera la Seca fue aprobado en el Pleno de la Junta Municipal el 30 de marzo de 2004 y respeta escrupulosamente las reglas de la heráldica.",
  "Se divide en tres campos principales: dos cuarteles en la mitad superior (uno en gules con las Salinas Reales y el puente romano del Puntarrón, y otro en azur con las armas de la familia Rocamora) y un campo de sable en la mitad inferior, sobre ondas de azur y plata, con dos espadas cruzadas que evocan el origen del nombre del pueblo.",
  "Los colores empleados siguen el vocabulario heráldico tradicional: gules (rojo), azur (azul), sable (negro) y sinople (verde), además de los dos metales, oro (amarillo) y plata (blanco).",
  "El conjunto está timbrado con la corona real cerrada, propia de la monarquía española, y flanqueado por una cinta con el lema «Vox Nigra et Sanguinaria», que recuerda los nombres latinos de los dos antiguos pagos —la Voz Negra y la Sanguinaria— que dieron origen a Sangonera la Seca."
];
document.addEventListener('DOMContentLoaded', () => {
  const svg = document.getElementById('svg-escudo');
  const viewport = document.getElementById('escudo-viewport');
  const lienzo = document.getElementById('escudo-lienzo');
  const panelVacio = document.getElementById('panel-info-vacio');
  const panelContenido = document.getElementById('panel-info-contenido');
  const infoCategoria = document.getElementById('info-categoria');
  const infoTitulo = document.getElementById('info-titulo');
  const infoNombre = document.getElementById('info-nombre');
  const infoDescripcion = document.getElementById('info-descripcion');
  const infoSignificado = document.getElementById('info-significado');
  const infoHistoria = document.getElementById('info-historia');
  const infoMultimedia = document.getElementById('info-multimedia');
  const infoFuente = document.getElementById('info-fuente');
  const panelNavegacion = document.getElementById('panel-info-navegacion');
  const infoPaso = document.getElementById('info-paso');
  const btnAnterior = document.getElementById('btn-anterior');
  const btnSiguiente = document.getElementById('btn-siguiente');
  const btnCerrar = document.getElementById('btn-cerrar');
  const btnVerTodoPanel = document.getElementById('btn-ver-todo-panel');
  const btnVerTodo = document.getElementById('btn-ver-todo');
  const btnExplorar = document.getElementById('btn-explorar');
  const seccionCompleta = document.getElementById('seccion-completa');
  const explicacionGeneralEl = document.getElementById('explicacion-general');
  const tarjetasEl = document.getElementById('tarjetas-elementos');
  const pieAutor = document.getElementById('pie-autor');
  const btnZoomIn = document.getElementById('btn-zoom-in');
  const btnZoomOut = document.getElementById('btn-zoom-out');
  const btnZoomReset = document.getElementById('btn-zoom-reset');
  const btnFullscreen = document.getElementById('btn-fullscreen');
  const mapaElementos = new Map(elementosEscudo.map(el => [el.id, el]));
  const mapaCategorias = new Map(categoriasEscudo.map(c => [c.id, c]));
  let modoExploracion = false;
  let pasoActual = 0;
  let elementoSeleccionado = null;
  document.title = tituloProyecto + " | Guía interactiva del patrimonio";
  document.getElementById('nombre-pedania').textContent = nombrePedania;
  document.getElementById('titulo-proyecto').textContent = tituloProyecto;
  document.getElementById('subtitulo-proyecto').textContent = subtituloProyecto;
  pieAutor.textContent = "Autor: " + autor;
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip-zona';
  viewport.appendChild(tooltip);
  function mostrarTooltip(texto, x, y) {
    tooltip.textContent = texto;
    tooltip.style.left = x + 'px';
    tooltip.style.top = y + 'px';
    tooltip.classList.add('visible');
  }
  function ocultarTooltip() {
    tooltip.classList.remove('visible');
  }
  const zonas = Array.from(svg.querySelectorAll('[data-id]'));
  function idsUnicos() {
    return Array.from(new Set(zonas.map(z => z.dataset.id)));
  }
  function zonasPorId(id) {
    return zonas.filter(z => z.dataset.id === id);
  }
  zonas.forEach(zona => {
    const datos = mapaElementos.get(zona.dataset.id);
    if (!datos) return;
    zona.setAttribute('tabindex', '0');
    zona.setAttribute('role', 'button');
    zona.setAttribute('aria-label', datos.nombre + ': ' + datos.titulo);
    const activarHover = (evt) => {
      zonasPorId(zona.dataset.id).forEach(z => z.classList.add('zona-hover'));
      const rect = viewport.getBoundingClientRect();
      const clientX = evt.clientX !== undefined ? evt.clientX : rect.left + rect.width / 2;
      const clientY = evt.clientY !== undefined ? evt.clientY : rect.top + rect.height / 2;
      mostrarTooltip(datos.nombre, clientX - rect.left, clientY - rect.top);
    };
    const desactivarHover = () => {
      zonasPorId(zona.dataset.id).forEach(z => z.classList.remove('zona-hover'));
      ocultarTooltip();
    };
    zona.addEventListener('mouseenter', activarHover);
    zona.addEventListener('mousemove', activarHover);
    zona.addEventListener('mouseleave', desactivarHover);
    zona.addEventListener('focus', () => activarHover({}));
    zona.addEventListener('blur', desactivarHover);
    zona.addEventListener('click', () => seleccionarElemento(zona.dataset.id));
    zona.addEventListener('keydown', (evt) => {
      if (evt.key === 'Enter' || evt.key === ' ') {
        evt.preventDefault();
        seleccionarElemento(zona.dataset.id);
      }
    });
  });
  function marcarSeleccion(id) {
    zonas.forEach(z => {
      z.classList.toggle('zona-seleccionada', z.dataset.id === id);
    });
  }
  function limpiarSeleccionVisual() {
    zonas.forEach(z => {
      z.classList.remove('zona-seleccionada');
    });
  }
  function seleccionarElemento(id, { desdeExploracion = false } = {}) {
    const datos = mapaElementos.get(id);
    if (!datos) return;
    elementoSeleccionado = id;
    marcarSeleccion(id);
    ocultarSeccionCompleta();
    const cat = mapaCategorias.get(datos.categoria);
    infoCategoria.textContent = cat ? cat.nombre : '';
    infoCategoria.style.background = cat ? hexConAlfa(cat.color, 0.14) : '';
    infoCategoria.style.color = cat ? cat.color : '';
    infoTitulo.textContent = datos.titulo;
    infoNombre.textContent = datos.nombre;
    infoDescripcion.textContent = datos.descripcion || TEXTO_PENDIENTE_DOCUMENTACION;
    infoSignificado.textContent = datos.significado || TEXTO_PENDIENTE_DOCUMENTACION;
    infoHistoria.textContent = datos.historia || TEXTO_PENDIENTE_DOCUMENTACION;
    pintarMultimedia(datos.multimedia);
    infoFuente.textContent = datos.fuente || "Información pendiente de documentación.";
    panelVacio.hidden = true;
    panelContenido.hidden = false;
    if (modoExploracion || desdeExploracion) {
      panelNavegacion.hidden = false;
      const idx = ordenExploracion.indexOf(id);
      infoPaso.textContent = (idx + 1) + ' / ' + ordenExploracion.length;
      btnAnterior.disabled = idx <= 0;
      btnSiguiente.disabled = idx >= ordenExploracion.length - 1;
    } else {
      panelNavegacion.hidden = true;
    }
    panelContenido.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  function pintarMultimedia(items) {
    infoMultimedia.innerHTML = '';
    if (!items || !items.length) {
      infoMultimedia.hidden = true;
      return;
    }
    items.forEach(item => {
      const figura = document.createElement('figure');
      figura.className = 'panel-info__multimedia-item';
      if (item.tipo === 'video') {
        const video = document.createElement('video');
        video.src = item.src;
        video.controls = true;
        video.preload = 'metadata';
        figura.appendChild(video);
      } else {
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt || '';
        img.loading = 'lazy';
        img.tabIndex = 0;
        img.title = 'Ver a pantalla completa';
        img.addEventListener('click', () => abrirPantallaCompleta(img));
        img.addEventListener('keydown', (evt) => {
          if (evt.key === 'Enter' || evt.key === ' ') {
            evt.preventDefault();
            abrirPantallaCompleta(img);
          }
        });
        figura.appendChild(img);
      }
      if (item.pie) {
        const pie = document.createElement('figcaption');
        pie.textContent = item.pie;
        figura.appendChild(pie);
      }
      infoMultimedia.appendChild(figura);
    });
    infoMultimedia.hidden = false;
  }
  function abrirPantallaCompleta(el) {
    const pedir = el.requestFullscreen || el.webkitRequestFullscreen;
    if (pedir) pedir.call(el);
  }
  function hexConAlfa(hex, alfa) {
    const c = hex.replace('#', '');
    const r = parseInt(c.substring(0, 2), 16);
    const g = parseInt(c.substring(2, 4), 16);
    const b = parseInt(c.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alfa})`;
  }
  function cerrarPanel() {
    elementoSeleccionado = null;
    modoExploracion = false;
    panelVacio.hidden = false;
    panelContenido.hidden = true;
    panelNavegacion.hidden = true;
    limpiarSeleccionVisual();
  }
  btnCerrar.addEventListener('click', cerrarPanel);
  function iniciarExploracion() {
    modoExploracion = true;
    pasoActual = 0;
    ocultarSeccionCompleta();
    seleccionarElemento(ordenExploracion[pasoActual], { desdeExploracion: true });
  }
  function irAPaso(delta) {
    const nuevo = pasoActual + delta;
    if (nuevo < 0 || nuevo >= ordenExploracion.length) return;
    pasoActual = nuevo;
    seleccionarElemento(ordenExploracion[pasoActual], { desdeExploracion: true });
  }
  btnExplorar.addEventListener('click', iniciarExploracion);
  btnAnterior.addEventListener('click', () => irAPaso(-1));
  btnSiguiente.addEventListener('click', () => irAPaso(1));
  function pintarExplicacionGeneral() {
    explicacionGeneralEl.innerHTML = '';
    explicacionGeneral.forEach(parrafo => {
      const p = document.createElement('p');
      p.textContent = parrafo;
      explicacionGeneralEl.appendChild(p);
    });
  }
  function pintarTarjetas() {
    tarjetasEl.innerHTML = '';
    idsUnicos().forEach(id => {
      const datos = mapaElementos.get(id);
      if (!datos) return;
      const cat = mapaCategorias.get(datos.categoria);
      const tarjeta = document.createElement('button');
      tarjeta.type = 'button';
      tarjeta.className = 'tarjeta-elemento';
      tarjeta.style.borderLeft = '4px solid ' + (cat ? cat.color : 'var(--color-borde)');
      const span = document.createElement('span');
      span.textContent = cat ? cat.nombre : '';
      const h4 = document.createElement('h4');
      h4.textContent = datos.titulo;
      const p = document.createElement('p');
      p.textContent = datos.descripcion;
      tarjeta.appendChild(span);
      tarjeta.appendChild(h4);
      tarjeta.appendChild(p);
      tarjeta.addEventListener('click', () => {
        ocultarSeccionCompleta();
        seleccionarElemento(id);
        document.querySelector('.seccion-escudo').scrollIntoView({ behavior: 'smooth' });
      });
      tarjetasEl.appendChild(tarjeta);
    });
  }
  function mostrarSeccionCompleta() {
    seccionCompleta.hidden = false;
    seccionCompleta.scrollIntoView({ behavior: 'smooth' });
  }
  function ocultarSeccionCompleta() {
    seccionCompleta.hidden = true;
  }
  btnVerTodo.addEventListener('click', mostrarSeccionCompleta);
  btnVerTodoPanel.addEventListener('click', mostrarSeccionCompleta);
  const ZOOM_MIN = 1;
  const ZOOM_MAX = 4;
  const ZOOM_PASO = 0.35;
  let escala = 1;
  let desplazX = 0;
  let desplazY = 0;
  let arrastrando = false;
  let inicioX = 0;
  let inicioY = 0;
  function aplicarTransformacion(conTransicion = true) {
    lienzo.classList.toggle('sin-transicion', !conTransicion);
    lienzo.style.transform = `translate(${desplazX}px, ${desplazY}px) scale(${escala})`;
  }
  function limitarDesplazamiento() {
    if (escala <= 1) {
      desplazX = 0;
      desplazY = 0;
      return;
    }
    const rect = viewport.getBoundingClientRect();
    const maxX = (rect.width * (escala - 1)) / 2;
    const maxY = (rect.height * (escala - 1)) / 2;
    desplazX = Math.max(-maxX, Math.min(maxX, desplazX));
    desplazY = Math.max(-maxY, Math.min(maxY, desplazY));
  }
  function establecerZoom(nuevaEscala) {
    escala = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, nuevaEscala));
    limitarDesplazamiento();
    aplicarTransformacion(true);
  }
  btnZoomIn.addEventListener('click', () => establecerZoom(escala + ZOOM_PASO));
  btnZoomOut.addEventListener('click', () => establecerZoom(escala - ZOOM_PASO));
  btnZoomReset.addEventListener('click', () => {
    escala = 1;
    desplazX = 0;
    desplazY = 0;
    aplicarTransformacion(true);
  });
  viewport.addEventListener('mousedown', (evt) => {
    if (escala <= 1) return;
    arrastrando = true;
    viewport.classList.add('arrastrando');
    inicioX = evt.clientX - desplazX;
    inicioY = evt.clientY - desplazY;
  });
  window.addEventListener('mousemove', (evt) => {
    if (!arrastrando) return;
    desplazX = evt.clientX - inicioX;
    desplazY = evt.clientY - inicioY;
    limitarDesplazamiento();
    aplicarTransformacion(false);
  });
  window.addEventListener('mouseup', () => {
    arrastrando = false;
    viewport.classList.remove('arrastrando');
  });
  let distanciaInicialTactil = null;
  let escalaInicialTactil = 1;
  let toqueUnicoInicioX = 0;
  let toqueUnicoInicioY = 0;
  function distanciaEntreToques(t) {
    const dx = t[0].clientX - t[1].clientX;
    const dy = t[0].clientY - t[1].clientY;
    return Math.hypot(dx, dy);
  }
  viewport.addEventListener('touchstart', (evt) => {
    if (evt.touches.length === 2) {
      distanciaInicialTactil = distanciaEntreToques(evt.touches);
      escalaInicialTactil = escala;
    } else if (evt.touches.length === 1 && escala > 1) {
      toqueUnicoInicioX = evt.touches[0].clientX - desplazX;
      toqueUnicoInicioY = evt.touches[0].clientY - desplazY;
    }
  }, { passive: true });
  viewport.addEventListener('touchmove', (evt) => {
    if (evt.touches.length === 2 && distanciaInicialTactil) {
      evt.preventDefault();
      const nueva = distanciaEntreToques(evt.touches);
      const factor = nueva / distanciaInicialTactil;
      establecerZoom(escalaInicialTactil * factor);
    } else if (evt.touches.length === 1 && escala > 1) {
      evt.preventDefault();
      desplazX = evt.touches[0].clientX - toqueUnicoInicioX;
      desplazY = evt.touches[0].clientY - toqueUnicoInicioY;
      limitarDesplazamiento();
      aplicarTransformacion(false);
    }
  }, { passive: false });
  viewport.addEventListener('touchend', () => {
    distanciaInicialTactil = null;
  });
  btnFullscreen.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      const solicitar = viewport.requestFullscreen || viewport.webkitRequestFullscreen;
      if (solicitar) solicitar.call(viewport);
    } else {
      const salir = document.exitFullscreen || document.webkitExitFullscreen;
      if (salir) salir.call(document);
    }
  });
  pintarExplicacionGeneral();
  pintarTarjetas();
});