// Hay información oculta en la tarjeta del curso de React. Implementa una funcionalidad para que, al hacer clic en el título 
// de ESE curso, el párrafo oculto se vuelva visible.

let archivo = document.querySelectorAll('.card');
archivo = archivo[2];

const titul = archivo.querySelector('h2');                     //  Titulo de ESE Curso
const ocul = archivo.querySelector('.oculto');

titul.addEventListener('click', function() {                    //  Hacer click
    ocul.classList.remove('oculto')                             //  parrafo oculto se vuelva visible
})

console.log("23.", titul, ocul);