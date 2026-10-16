// Es necesario añadir la duración a todos los cursos. Para cada tarjeta, debes crear dinámicamente un nuevo párrafo, asignarle la 
// clase ‘duracion’ y el texto ‘Duración: 20 horas’, y añadirlo al final de la sección de información.

const archivo_26 = document.querySelectorAll('.card div');

archivo_26.forEach(function(archivo26) {
    let duracion = document.createElement('p')
    duracion.textContent = 'Duracion: 20 horas';
    duracion.classList.add('daracion');
    archivo26.appendChild(duracion);
})

console.log("26.", archivo_26);