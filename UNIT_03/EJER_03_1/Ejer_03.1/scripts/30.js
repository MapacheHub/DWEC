// Limita tu búsqueda a la sección del formulario. Encuentra el área de texto (textarea) y cambia su texto de ejemplo (placeholder) a 
// ‘Escribe aquí tu consulta detallada’.

const archivo_30 = document.getElementById('formulario-contacto');
const textoTarea = document.querySelector('textarea');
textoTarea.placeholder = "Escribe aquí tu consulta detallada";

console.log("30.", archivo_30);