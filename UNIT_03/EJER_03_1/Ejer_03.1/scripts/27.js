// Queremos aplicar un estilo especial a los cursos estándar. Filtra la lista de tarjetas para obtener solo aquellas que NO son ‘premium’. 
// A las tarjetas resultantes, aplícales un borde punteado de 2px de color negro.

const archivo_27 = document.querySelectorAll('.card');
const cardNoPremium = Array.prototype.filter.call(archivo_27, function(card) {
    return !card.classList.contains('premium');
})

cardNoPremium.forEach(function(card) {
    card.style.border = '2px dotted black';
});

console.log("27.", archivo_27);