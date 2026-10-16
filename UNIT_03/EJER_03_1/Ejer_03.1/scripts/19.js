// Comienza en el primer div de información (.info). Desde ahí, sube a su elemento padre (la tarjeta) y, una vez ahí, 
// desciende para encontrar el primer elemento hijo de esa tarjeta, que debería ser la imagen.

const divHijo = document.querySelector('.info');
const imgNuev = divHijo.parentElement.firstElementChild;

console.log("19.", imgNuev);