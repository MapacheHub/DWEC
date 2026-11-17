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


tarjeta.addEventListener('mouseenter', () => {
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
const MAX_CARACTERES = 30;

escrito.addEventListener('input', () => {
    if (escrito.value.length > MAX_CARACTERES) {
        escrito.value = escrito.value.slice(0, MAX_CARACTERES);
    }

    const textoActual = escrito.value;
    const restantes = MAX_CARACTERES - textoActual.length;

    eco.textContent = textoActual;
    cuenta.textContent = restantes;

    cuenta.classList.toggle('poco', restantes <= 5);
});

// ---------- Ejercicio 4 · Mover con el teclado ----------

const areaJuego = document.querySelector('.area-juego');
const cuadrado = document.querySelector('.cuadrado');
const textoPosicion = document.getElementById('posicion-cuadrado'); 

let posX = 0;
let posY = 0;
const PASO = 10;

document.addEventListener('keydown', (evento) => {
    // Límites máximos dentro del área (360 - 40 = 320, 200 - 40 = 160)
    const maxX = areaJuego.clientWidth - cuadrado.offsetWidth;
    const maxY = areaJuego.clientHeight - cuadrado.offsetHeight;

    switch (evento.key) {
        case 'ArrowUp':
            evento.preventDefault(); // Evita que la página haga scroll
            posY = Math.max(0, posY - PASO);
            break;
        case 'ArrowDown':
            evento.preventDefault();
            posY = Math.min(maxY, posY + PASO);
            break;
        case 'ArrowLeft':
            posX = Math.max(0, posX - PASO);
            break;
        case 'ArrowRight':
            posX = Math.min(maxX, posX + PASO);
            break;
        case ' ': // Tecla Espacio
            // Evita scroll si no estamos escribiendo en un input
            if (document.activeElement.tagName !== 'INPUT') {
                evento.preventDefault();
                posX = 0;
                posY = 0;
            }
            break;
        default:
            return; // Salir si se pulsa otra tecla
    }

    cuadrado.style.left = `${posX}px`;
    cuadrado.style.top = `${posY}px`;
    
    if (textoPosicion) {
        textoPosicion.textContent = `(${posX}, ${posY})`;
    }
});

// ---------- Ejercicio 5 · Paleta de colores ----------

const paleta = document.querySelector('.paleta');
const lienzo = document.querySelector('.lienzo');
const colorElegido = document.getElementById('nombre-color');

paleta.addEventListener('click', (evento) => {
    // Comprobamos que se haya pulsado sobre una muestra y no en el hueco entre ellas
    const muestra = evento.target.closest('.muestra');
    if (!muestra) return;

    const color = muestra.getAttribute('data-color');
    const nombre = muestra.getAttribute('data-nombre');

    lienzo.style.backgroundColor = color;
    colorElegido.textContent = nombre;
});

// ---------- Ejercicio 6 · Grupo con foco ----------

const grupoContacto = document.getElementById('grupo-contacto');
const mensajeFoco = document.getElementById('mensaje-foco'); // Ajusta este ID según tu HTML

// focusin y focusout SÍ burbujean (a diferencia de focus y blur)
grupoContacto.addEventListener('focusin', (evento) => {
    if (evento.target.tagName === 'INPUT') {
        grupoContacto.classList.add('activo');
        const placeholder = evento.target.getAttribute('placeholder') || evento.target.name;
        mensajeFoco.textContent = `Editando: ${placeholder}`;
    }
});

grupoContacto.addEventListener('focusout', () => {
    grupoContacto.classList.remove('activo');
    mensajeFoco.textContent = 'Ningún campo activo';
});

// ---------- Ejercicio 7 · Burbuja y captura ----------

const cajas = document.querySelectorAll('.caja');
const listaRegistro = document.querySelector('.registro');
const botonLimpiar = document.getElementById('boton-limpiar-flujo');

function registrarEvento(nombreFase) {
    const li = document.createElement('li');
    li.textContent = nombreFase;
    listaRegistro.appendChild(li);
}

cajas.forEach((caja) => {
    // Obtenemos el nombre limpio de la caja (ej. "Externa", "Media", "Interna")
    const nombreCaja = caja.firstChild.textContent.trim();

    // Fase de burbuja (por defecto, false)
    caja.addEventListener('click', () => {
        registrarEvento(nombreCaja);
    });

    // Fase de captura (tercer parámetro en true)
    caja.addEventListener('click', () => {
        registrarEvento(`${nombreCaja} (captura)`);
    }, true);
});

if (botonLimpiar) {
    botonLimpiar.addEventListener('click', () => {
        listaRegistro.innerHTML = '';
    });
}

// ---------- Ejercicio 8 · Detener y cancelar ----------

const tarjetaProducto = document.querySelector('.tarjeta-producto');
const botonComprar = tarjetaProducto.querySelector('button');
const enlaceInfo = tarjetaProducto.querySelector('a');
const cajaEstado = document.querySelector('.estado');

function agregarMensajeEstado(texto) {
    // Añade como línea nueva respetando el white-space: pre-line del CSS
    cajaEstado.textContent += (cajaEstado.textContent ? '\n' : '') + texto;
}

tarjetaProducto.addEventListener('click', () => {
    agregarMensajeEstado('Has pulsado la tarjeta');
});

botonComprar.addEventListener('click', (evento) => {
    evento.stopPropagation(); // Detiene la propagación hacia la tarjeta
    agregarMensajeEstado('Producto comprado');
});

enlaceInfo.addEventListener('click', (evento) => {
    evento.preventDefault();  // Cancela la navegación del enlace
    evento.stopPropagation(); // Evita que también dispare el clic de la tarjeta
    agregarMensajeEstado('Enlace bloqueado');
});