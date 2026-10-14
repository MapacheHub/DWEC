// Necesitamos verificar que el script se está cargando correctamente. Localiza el título principal de la página, el que sirve de banner, 
// y envía su contenido de texto a la consola para confirmar que tienes acceso a él.

const titulo = document.getElementById('titulo-principal');
console.log("1.", titulo.textContent);