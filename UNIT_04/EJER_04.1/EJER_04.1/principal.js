// ==========================================================
// EJER_04.1 · Eventos en JavaScript
// Escribe aquí tus soluciones (módulo ES6).
// - Nombres de variables y funciones en español.
// - Usa addEventListener (no onclick en el HTML).
// ==========================================================

// ---------- Ejercicio 1 · Contador de clics ----------

const botonMas = document.getElementById('boton-sumar');
const botonMenos = document.getElementById('boton-restar');
const botonRe = document.getElementById('boton-reiniciar');
const valorN = document.getElementById('valor-contador');

let contar = 0;

function actuCont(nValor) {
    contar = nValor;
    valorN.textContent = contar;

    if (contar < 0) {
        valorN.style.color = 'var(--rojo)';
    } else {
        valorN.style.color = 'var(--texto)';
    }
}

botonMas.addEventListener('click', () => actuCont(contar + 1));
botonMenos.addEventListener('click', () => actuCont(contar - 1));
botonRe.addEventListener('click', () => actuCont(0));

// ---------- Ejercicio 2 · Tarjeta sensible al ratón ----------

const tarjeta = document.getElementById('tarjeta-raton');
const frase = document.getElementById('mensaje-raton');
// const frase = tarjeta.querySelector('p') || tarjeta;


tarjeta.addEventListener('mouseover', () => {
    frase.textContent = '¡Estás dentro!';
    tarjeta.classList.add('activa');
});
tarjeta.addEventListener('mouseleave', () => {
    frase.textContent = 'Pasa el ratón por la tarjeta';
    tarjeta.classList.remove('activa');
});
tarjeta.addEventListener('dblclick', () => 
    frase.textContent = '¡Doble clic!'
);

// ---------- Ejercicio 3 · Espejo de texto ----------

const escrito = document.getElementById('campo-texto');
const eco = document.getElementById('eco-texto');
const cuenta = document.getElementById('caracteres-restantes');



// ---------- Ejercicio 4 · Mover con el teclado ----------


// ---------- Ejercicio 5 · Paleta de colores ----------


// ---------- Ejercicio 6 · Grupo con foco ----------


// ---------- Ejercicio 7 · Burbuja y captura ----------


// ---------- Ejercicio 8 · Detener y cancelar ----------
