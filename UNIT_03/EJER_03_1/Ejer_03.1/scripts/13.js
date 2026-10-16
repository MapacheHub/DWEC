// El departamento de marketing ha notado que la imagen del primer curso, el de JavaScript Moderno, tiene una tasa de clics muy baja. 
// Han proporcionado una nueva imagen en la ruta ‘img/hacer4.jpg’ que debemos usar como reemplazo. Actualiza la imagen de ese curso en específico.

const newIm = document.querySelector('.card img');
newIm.src = ('img/hacer4.jpg')

console.log("13.", newIm);