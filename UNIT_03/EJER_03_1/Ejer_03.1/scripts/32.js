// Se necesita una clase específica para las imágenes de los cursos. Recorre todas las tarjetas y, para 
// cada una, encuentra su imagen y aplícale la clase ‘imagen-curso’.

const archivo_32 = document.querySelectorAll('.card');
archivo_32.forEach(function(card) {
    const img = card.querySelector('img')
    img.classList.add('imagen-curso');
})

console.log("32.", archivo_32);