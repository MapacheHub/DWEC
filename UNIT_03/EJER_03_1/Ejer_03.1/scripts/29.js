// Para mejorar la accesibilidad y el rastreo, recorre todos los enlaces de la navegación y asígnales un atributo data-tipo con el valor enlace-nav.

const archivo_29 = document.querySelectorAll('.navegacion a');
archivo_29.forEach(function(enlace) {
    enlace.setAttribute('data-tipo', 'enlace-nav');
})

// const enlacesNav = document.querySelectorAll('.navegacion a');
//   Array.prototype.forEach.call(enlacesNav, function(enlace) {
//     enlace.setAttribute('data-tipo', 'enlace-nav');
//   });

console.log("29.", archivo_29);