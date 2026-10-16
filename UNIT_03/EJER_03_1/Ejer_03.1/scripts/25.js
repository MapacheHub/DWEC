// Para mejorar la legibilidad, se ha decidido agrupar visualmente los cursos por temática. Tu objetivo es encontrar todas las tarjetas 
// de cursos que pertenezcan a la categoría ‘Desarrollo Web’. Una vez identificadas, debes aplicarles un ligero fondo de color (#f0f0f0) 
// para que se distingan del resto.

const archivo_25 = document.querySelectorAll('.card')
archivo_25.forEach(function(curso) {
    const categoria = curso.querySelector('.categoria');
    if (categoria.textContent === 'Desarrollo Web') {
        curso.style.backgroundColor = 'red';
    }
}); 

console.log("25.", archivo_25);
