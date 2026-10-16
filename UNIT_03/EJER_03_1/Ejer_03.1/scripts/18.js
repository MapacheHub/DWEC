// Partiendo desde el pie de página (footer), localiza el contenedor principal que está justo antes y aplícale un borde de 2px de color rojo para destacarlo.

const foot = document.getElementById('footer-principal')
const antesFoot = foot.previousElementSibling.style.border = "2px solid red"

console.log("18.", antesFoot);
