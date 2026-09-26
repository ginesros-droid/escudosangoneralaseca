'use strict';
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