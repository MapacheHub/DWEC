// Necesitamos una lista limpia con los nombres de las categorías para nuestro sistema de analítica. 
// Genera un array que contenga únicamente el texto de cada párrafo de categoría y muéstralo en la consola.

const archivo_28 = document.querySelectorAll('.categoria');
const parafos = Array.prototype.map.call(archivo_28, function(carta) {
    return carta.textContent;
})
console.log("28.", parafos);