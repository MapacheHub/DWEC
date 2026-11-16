// Nombre y apellidos: ______________________________


import { tareasIniciales } from './datos.js';

// ============================================================
// Constantes y elementos de la página (ya definidos: no los cambies)
// ============================================================
const ESTADOS = ['porhacer', 'encurso', 'hecha'];
const LIMITE_HORAS = 40;

const formularioTarea = document.querySelector('#formulario-tarea');
const campoHoras = formularioTarea.elements.horas;
const mensajeFormulario = document.querySelector('#mensaje-formulario');
const buscador = document.querySelector('#buscador');
const botonArchivar = document.querySelector('#boton-archivar');
const tablero = document.querySelector('#tablero');
const listaHoras = document.querySelector('#horas-asignatura');
const progreso = document.querySelector('#progreso');

const columnas = {
  porhacer: document.querySelector('#col-porhacer'),
  encurso: document.querySelector('#col-encurso'),
  hecha: document.querySelector('#col-hecha')
};
const contadores = {
  porhacer: document.querySelector('#num-porhacer'),
  encurso: document.querySelector('#num-encurso'),
  hecha: document.querySelector('#num-hecha')
};

// Se desactiva la validación del navegador: los mensajes los muestras tú (apartado 1)
formularioTarea.noValidate = true;

// Tareas del tablero. Es una copia: los datos originales no se tocan
let tareas = tareasIniciales.map((tarea) => ({ ...tarea }));

// Repinta todo a partir del array de tareas (ya hecha: la usarás en el apartado 4)
const repintar = () => {
  pintarTablero(buscarTareas(tareas, buscador.value));
  pintarResumen(tareas);
};


// ============================================================
// APARTADO 1 · Formulario y validación
// ============================================================

// 1.1 · Devuelve el texto del error de un campo según su `validity` ('' si es válido)
const mensajeDeError = (campo) => {
  // TU CÓDIGO AQUÍ

// Devuelve el texto del primer problema que tenga el campo, o una cadena vacía si es válido.

  const x = campo.validity;

  if (x.valueMissing) {
    return 'Este campo es obligatorio';
  } 
  
  if (x.tooShort){
    return `Escribe al menos ${campo.minLength} caracteres`;
  } 
  
  if (x.rangeUnderflow || x.rangeOverflow){
    return `Debe estar entre ${campo.min} y ${campo.max}`;
  } 
  
  if (x.customError){
    return campo.validationMessage;
  } 

  return '';
  
};

// 1.2 · Muestra u oculta el error de un campo y devuelve si es válido
const validarCampo = (campo) => {
  // TU CÓDIGO AQUÍ

  const mensaje = mensajeDeError(campo);
  const eleError = campo.nextElementSibling;

  // Calcula el mensaje con mensajeDeError, lo escribe en el elemento que va justo después del campo
  if (eleError && eleError.classList.contains('error')) {
    eleError.textContent = mensaje;
  }

  // y marca o desmarca el campo con la clase invalido según tenga o no error. Devuelve true si el campo es válido y false si no
  const valido = mensaje === '';
  campo.classList.toggle('invalido', !valido);
  return valido;

};

// 1.3 · Aplica (o quita) el error personalizado de #horas según el límite de horas pendientes
const comprobarHoras = () => {
  // TU CÓDIGO AQUÍ

  const horasPendientes = tareas.filter((t) => t.estado !== 'hecha').reduce((sum, t) => sum + t.horas, 0);

  // Si el campo está vacío cuenta como 0 horas.
  const horasNuevas = Number(campoHoras.value) || 0;

// las horas pendientes (las de las tareas que no están hechas) más las horas que se están escribiendo en el formulario no pueden superar LIMITE_HORAS. Si se superan, el campo #horas recibe un error personalizado; si no, se le quita cualquier error personalizado.
  if (horasPendientes + horasNuevas > LIMITE_HORAS) {

    // Mensaje: Superas el límite de 40 h pendientes (ahora hay 25 h), donde 25 son las horas pendientes actuales, sin contar lo que se ha escrito.
    campoHoras.setCustomValidity(`Superas el límite de ${LIMITE_HORAS} h pendientes (ahora hay ${horasPendientes} h)`)
  } else {
    campoHoras.setCustomValidity('');
  }

};

// 1.4 · Deja el formulario como recién cargado
const limpiarFormulario = () => {
  // TU CÓDIGO AQUÍ

  // Deja el formulario como recién cargado:

  // valores iniciales
  formularioTarea.reset();
  campoHoras.setCustomValidity('');
  mensajeFormulario.textContent = '';

  // ningún mensaje de error
  formularioTarea.querySelectorAll('.error').forEach((el) => {
    el.textContent = '';
  })

  // ningún campo con la clase invalido
  formularioTarea.querySelectorAll('.invalido').forEach((el) => {
    el.classList.remove('invalido');
  })
};

// 1.5 · Eventos del formulario (change, input y keydown)
// TU CÓDIGO AQUÍ

// Usa un solo listener por evento, puesto en el formulario y aprovechando evento.target (delegación), no uno por cada campo:

// change : llama a comprobarHoras() y valida el campo que cambió.
formularioTarea.addEventListener('change', (evento) => {
  const campo = evento.target;
  if (!campo.name) return;
  comprobarHoras();
  validarCampo(campo);
})

// input : solo si el campo tiene la clase invalido, repite la comprobación de las horas y revalida ese campo. Así el error desaparece en cuanto se corrige, pero no se avisa de errores mientras el usuario escribe por primera vez.
formularioTarea.addEventListener('input', (evento) => {
  const campo = evento.target;
  if (campo.classList.contains('invalido')) {
    comprobarHoras();
    validarCampo(campo);
  }
})

// keydown : si la tecla es Escape, limpia el formulario.
formularioTarea.addEventListener('keydown', (evento) => {
  if (evento.key === 'Escape') {
    limpiarFormulario();
  }
})


// ============================================================
// APARTADO 2 · Cálculos con los datos (funciones puras)
// ============================================================

// 2.1 · Tareas cuyo título o asignatura contienen el texto buscado
const buscarTareas = (lista, texto) => {
  // TU CÓDIGO AQUÍ

  // sin distinguir mayúsculas de minúsculas y sin tener en cuenta los espacios al principio y al final del texto.
  const tarea = texto.trim().toLowerCase();

  // Con el texto vacío devuelve todas las tareas (en un array nuevo).
  if (tarea === '') {
    return[...lista];
  }

  // Devuelve las tareas cuyo título o cuya asignatura contienen el texto
  return lista.filter((t) => t.titulo.toLowerCase().includes(tarea) || t.asignatura.toLowerCase().includes(tarea));

};

// 2.2 · Reparte las tareas en un objeto con una lista por cada estado
const agruparPorEstado = (lista) => {
  // TU CÓDIGO AQUÍ

  // objeto con tres propiedades (porhacer, encurso y hecha), cada una con un array...
  const grupos = {
    porhacer: [],
    encurso: [],
    hecha: [],
  };

  //  ...array de las tareas de ese estado en el mismo orden que tenían en lista
  for (const tarea of lista) {
    if (grupos[tarea.estado]) {
      grupos [tarea.estado].push(tarea);
    }
    // Si un estado no tiene tareas, su array queda vacío.
  }

  return grupos;
};

// 2.3 · Suma las horas de cada asignatura, de más a menos horas
const horasPorAsignatura = (lista) => {
  // TU CÓDIGO AQUÍ

  // array de objetos 
  const mapaHoras = new Map();

  //  array de objetos { asignatura, horas }
  for (const tarea of lista) {
    const actual = mapaHoras.get(tarea.asignatura) || 0;

    // Suma las horas de cada asignatura
    mapaHoras.set(tarea.asignatura, actual + tarea.horas);

    const resultado = Array.from(mapaHoras, ([asignatura, horas]) => ({
      asignatura,
      horas
    }));

    return resultado.sort((a, b) => {
      if (b.horas !== a.horas) {

        // ordenado de más a menos horas
        return b.horas - a.horas;
      }

      // Si dos asignaturas tienen las mismas horas, van por orden alfabético
      return a.asignatura.localeCompare(b.asignatura);
    });
  }
};


// ============================================================
// APARTADO 3 · Pintar la página
// ============================================================

// 3.1 · Devuelve (sin insertarla) la tarjeta <li> de una tarea
const crearTarjeta = (tarea) => {
  // TU CÓDIGO AQUÍ

  // Devuelve (sin insertarla en la página) la tarjeta de una tarea. Para la tarea 2 debe quedar equivalente a este HTML:
    // <li class="tarjeta prioridad-alta" data-id="2">
      // <strong class="titulo">Maquetar el formulario de contacto</strong>
      // <span class="meta">DIW · 4 h</span>
      // <button type="button" data-accion="retroceder">←</button>
      // <button type="button" data-accion="avanzar">→</button>
    // </li>

  // La clase de prioridad depende de la tarea: prioridad-baja, prioridad-media o prioridad-alta.

  // Todo se construye con createElement, textContent, dataset y classList/className; nada de innerHTML.
  const li = document.createElement('li');
    li.className = `tarjeta prioridad-${tarea.prioridad}`;
    li.dataset.id = tarea.id;

    const strong = document.createElement('strong');
      strong.className = 'titulo';
      strong.textContent = tarea.titulo;

    const span = document.createElement('meta');
      span.className = 'meta';
      span.textContent = `${tarea.asignatura} · ${tarea.horas} h`;

    // El botón de retroceder está desactivado (disabled) si la tarea está en la primera columna, y el de avanzar si está en la última. Compara con ESTADOS en lugar de escribir los nombres de memoria.
    const botRetro = document.createElement('button');
      botRetro.type = 'button';
      botRetro.dataset.accion = "retroceder";
      botRetro.textContent = '←';
      botRetro.disabled = tarea.estado === ESTADOS[0];

    const botAvan = document.createElement('button');
      botAvan.type = 'button';
      botAvan.dataset.accion = "avanzar";
      botAvan.textContent = '→';
      botAvan.disabled = tarea.estado === ESTADOS[ESTADOS.length -1];

  li.append(strong, span, botRetro, botAvan);
  return li;
};

// 3.2 · Reparte las tarjetas de lista en las tres columnas y actualiza los contadores
const pintarTablero = (lista) => {
  // TU CÓDIGO AQUÍ

  // usa agruparPorEstado
  const agrupadas = agruparPorEstado(lista);

  // coloca en cada una las tarjetas de las tareas de lista que le corresponden por estado
  for(const estado of ESTADOS) {
    const columna = columna[estado];
    const tareasEstado = agrupadas[estado];

    // "Vacía" las tres columnas
    columna.replaceChildren();

    // usa crearTarjeta
    for(const tarea of tareasEstado){
      columna.appendChild(crearTarjeta(tarea));
    }

    // Después escribe en cada contador cuántas tarjetas tiene su columna.
    contadores[estado].textContent = tareasEstado.length;
  }
};

// 3.3 · Pinta el resumen: horas por asignatura y progreso
const pintarResumen = (lista) => {
  // TU CÓDIGO AQUÍ

  // En #horas-asignatura, un <li> por asignatura, en el orden de horasPorAsignatura, con el formato DWES — 9 h (guion largo, con espacios).
  const resumenAsignaturas = horasPorAsignatura(lista);
  listaHoras.replaceChildren();

  for(const item of resumenAsignaturas) {
    const li = document.createElement('li');
      li.textContent = `${item.asignatura} — ${item.horas} h`;
  }

  // En #progreso, el texto Hechas: 3 de 9 (33 %): tareas hechas, tareas totales y porcentaje redondeado a un entero. Con una lista vacía debe quedar Hechas: 0 de 0 (0 %) (cuidado con dividir entre cero).
  const total = lista.length;
  const hechas = lista.filter((t) => t.estado === 'hehca').length;
  const porcentaje = total === 0 ? 0 : Math.round((hechas / total) * 100);

  progreso.textContent = `Hechas: ${hechas} de ${total} (${porcentaje} %)`;
};


// ============================================================
// APARTADO 4 · Interacción
// ============================================================

// 4.1 · Mueve una tarea `paso` columnas (+1 avanza, -1 retrocede)
const moverTarea = (id, paso) => {
  // TU CÓDIGO AQUÍ

  // Busca en tareas la tarea con ese id
  const tarea = tareas.find((t) => t.id == id);
  if (!tarea) return;

  // cambia su estado paso posiciones dentro de ESTADOS
  const indiceActual = ESTADOS.indexOf(tarea.estado);
  const nuevoIndice = indiceActual + paso;

  // Si no existe ninguna tarea con ese id, o si el movimiento la sacaría de las tres columnas, no hace nada y no da error.
  if (nuevoIndice < 0 || nuevoIndice >= ESTADOS.length) return;

  tarea.estado = ESTADOS[nuevoIndice];
};

// 4.2 · Añade una tarea nueva al array y la devuelve
const anadirTarea = (datos) => {
  // TU CÓDIGO AQUÍ

  const maxId = tareas.reduce((max, t) => (t.id > max ? t.id : max), 0);

  // Añade a tareas una tarea con titulo, asignatura, horas y prioridad, con estado: 'porhacer' y con un id igual al mayor id existente más uno
  const nuevaTarea = {
    id: maxId + 1,
    titulo: datos.titulo,
    asignatura: datos.asignatura,
    horas: datos.horas,
    estado: 'porhacer',
    prioridad: datos.prioridad,
  };

  tareas.push(nuevaTarea);

  // Devuelve la tarea creada.
  return nuevaTarea;
};

// 4.3 · Elimina del array las tareas hechas y devuelve cuántas eran
const archivarHechas = () => {
  // TU CÓDIGO AQUÍ

  // Elimina de tareas todas las tareas hechas y devuelve cuántas eran. Si no hay ninguna hecha no cambia nada y devuelve 0.
  const cantidadInicial = tareas.length;
  tareas = tareas.filter((t) => t.estado !== 'hecha');
  return cantidadInicial - tareas.length;
};

// 4.4 · Eventos del tablero, del buscador y del botón «Archivar hechas», y primer pintado
// TU CÓDIGO AQUÍ

tablero.addEventListener('click', (evento) => {
  const boton = evento.target.closest('button[data-accion]');
  if (!boton) return;

  const tarjeta = boton.closest('.tarjeta');
  if (!tarjeta) return;

  const id = Number(tarjeta.dataset.id);
  const paso = boton.dataset.accion === 'avanzar' ? 1 : -1;

  moverTarea(id, paso);
  repintar();
});

buscador.addEventListener('input', () => {
  repintar();
});

botonArchivar.addEventListener('click', () => {
  archivarHechas();
  repintar();
});

repintar();

// 4.5 · Envío del formulario
// TU CÓDIGO AQUÍ

formularioTarea.addEventListener('submit', (evento) => {
  evento.preventDefault();
  comprobarHoras();

  const campos = Array.from(formularioTarea.elements).filter((el) => el.name);
  let primerInvalido = null;

  for (const campo of campos) {
    const esValido = validarCampo(campo);
    if (!esValido && !primerInvalido) {
      primerInvalido = campo;
    }
  }

  if (primerInvalido) {
    primerInvalido.focus();
    return;
  }

  const tituloLimpio = formularioTarea.elements.titulo.value.trim();
  const asignatura = formularioTarea.elements.asignatura.value;
  const horas = Number(campoHoras.value);
  const prioridad = formularioTarea.elements.prioridad.value;

  anadirTarea({
    titulo: tituloLimpio,
    asignatura,
    horas,
    prioridad
  });

  limpiarFormulario();
  repintar();
  mensajeFormulario.textContent = `Tarea añadida: ${tituloLimpio}`;
});
