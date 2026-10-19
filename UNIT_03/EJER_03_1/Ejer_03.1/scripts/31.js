// Hay una oferta especial para el curso de React. Localiza su tarjeta y, buscando solo dentro de ella, 
// encuentra el párrafo oculto para añadirle el texto ’ (¡Oferta especial!)’ al final.

const archivo_31 = document.querySelectorAll('.card');

archivo_31.forEach(function(card) {
    const titulo = card.querySelector('h2')
    if(titulo && titulo.textContent.includes('React')){
        const parrafoOculto = card.querySelector('.oculto');
        if(parrafoOculto){
            parrafoOculto.textContent += ' (¡Oferta especial!)';
            console.log("31.", parrafoOculto);
        }
    }
})