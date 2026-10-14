// El equipo de UX sugiere que sería útil para los usuarios ver de un vistazo cuántos cursos ofrecemos. 
// La tarea consiste en que el enlace del menú que lleva a la sección de contacto refleje siempre el número total de cursos listados en la página. 
// Por ejemplo, si hay 3 cursos, el enlace debería cambiar a “Contacto (3 Cursos)”.

const numCur = document.querySelector('.navegacion a:nth-child(3)')         //  Metemos en una variable el enlace de Contactos (es el tercero)
const nCur = document.querySelectorAll('.card').length;                     //  Metemos en una variable la longitud de los diferentes cursos (hay 3 cursos)
numCur.textContent = (`Contacto (${nCur} Cursos)`);                         //  Cambiamos el nombre del enlace a Contactos y le añadimos al texto la variable con la cantidad de cursos

console.log("12.", numCur);