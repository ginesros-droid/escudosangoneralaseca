'use strict';

/* =====================================================
   PROTECCIÓN BÁSICA CONTRA COPIA/INSPECCIÓN (DISUASORIA)
   =====================================================
   Esto NO es seguridad real: cualquier navegador necesita descargar y
   ejecutar el HTML/CSS/JS para mostrar la página, así que el código
   siempre puede verse con las herramientas adecuadas (proxies, "ver
   código fuente" desde otra herramienta, etc.). Este script solo
   dificulta el acceso casual: clic derecho, atajos habituales de
   DevTools y selección/copiado de texto.

   Para quitar esta protección, basta con no incluir este archivo en
   index.html (o borrar su <script> correspondiente).
   ===================================================== */

document.addEventListener('contextmenu', function (evento) {
  evento.preventDefault();
});

document.addEventListener('keydown', function (evento) {
  const tecla = evento.key ? evento.key.toUpperCase() : '';
  const combinacionBloqueada =
    tecla === 'F12' ||
    (evento.ctrlKey && evento.shiftKey && ['I', 'J', 'C'].includes(tecla)) ||
    (evento.ctrlKey && ['U', 'S'].includes(tecla));

  if (combinacionBloqueada) {
    evento.preventDefault();
  }
});

document.addEventListener('copy', function (evento) {
  evento.preventDefault();
});

document.addEventListener('dragstart', function (evento) {
  evento.preventDefault();
});
