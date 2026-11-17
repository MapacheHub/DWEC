// Ejercicio 2.1 · Reserva de viaje (versión inicial)
const formulario = document.getElementById('reserva');
const total = document.getElementById('total');
const resultado = document.getElementById('resultado');
const precioPersonaNoche = 50;

// Referencias a los campos principales del formulario
const campoPersonas = formulario.elements.personas; // Ajusta el .name si en tu HTML es distinto
const campoEntrada = formulario.elements.entrada;
const campoSalida = formulario.elements.salida;

// 1. Desactivar la validación del navegador y fijar las fechas mínimas (hoy)
formulario.noValidate = true;

const hoy = new Date().toISOString().split('T')[0];
if (campoEntrada) campoEntrada.min = hoy;
if (campoSalida) campoSalida.min = hoy;

// 2. Función mostrarError(campo), como en el ejercicio 1.1
function mostrarError(campo) {
  const esValido = campo.validity.valid;
  const spanError = document.getElementById(`error-${campo.name}`);

  if (spanError) {
    spanError.textContent = campo.validationMessage;
  }

  campo.classList.toggle('con-error', !esValido);

  return esValido;
}

// 3. Función comprobarReglas(): la salida debe ser posterior a la entrada (setCustomValidity)
function comprobarReglas() {
  if (!campoEntrada || !campoSalida) return;

  // Limpiamos cualquier error personalizado previo antes de comprobar
  campoSalida.setCustomValidity('');

  if (campoEntrada.value && campoSalida.value) {
    if (campoSalida.value <= campoEntrada.value) {
      campoSalida.setCustomValidity('La fecha de salida debe ser posterior a la fecha de entrada.');
    }
  }
}

// 4. Funciones calcularNoches() y calcularTotal()
function calcularNoches() {
  if (!campoEntrada?.value || !campoSalida?.value) return 0;

  const fechaInicio = new Date(campoEntrada.value);
  const fechaFin = new Date(campoSalida.value);
  const diferenciaMs = fechaFin - fechaInicio;

  if (diferenciaMs <= 0) return 0;

  const msPorDia = 1000 * 60 * 60 * 24;
  return Math.round(diferenciaMs / msPorDia);
}

function calcularTotal() {
  const noches = calcularNoches();
  const personas = Number(campoPersonas?.value) || 0;
  const importe = noches * personas * precioPersonaNoche;

  if (total) {
    total.textContent = `${importe.toFixed(2)} €`;
  }

  return { noches, personas, importe };
}

// 5. Eventos input y focusout en el formulario
formulario.addEventListener('input', (evento) => {
  const campo = evento.target;
  if (!campo.name) return;

  // Si cambian las fechas, comprobamos las reglas cruzadas y revalidamos la salida si tenía error
  if (campo === campoEntrada || campo === campoSalida) {
    comprobarReglas();
    if (campoSalida.classList.contains('con-error')) {
      mostrarError(campoSalida);
    }
  }

  // Revalidamos el propio campo si ya tenía error o si es el checkbox
  if (campo.classList.contains('con-error') || campo.type === 'checkbox') {
    mostrarError(campo);
  }

  // Recalculamos el total estimado en tiempo real
  calcularTotal();
});

formulario.addEventListener('focusout', (evento) => {
  const campo = evento.target;
  if (!campo.name || campo.type === 'submit' || campo.type === 'reset') return;

  if (campo === campoEntrada || campo === campoSalida) {
    comprobarReglas();
  }

  mostrarError(campo);
});

// 6. Evento submit: valida todos los campos y muestra el resumen de la reserva
formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  comprobarReglas();

  const campos = Array.from(formulario.elements).filter((el) => el.name);
  let primerInvalido = null;

  campos.forEach((campo) => {
    const esValido = mostrarError(campo);
    if (!esValido && !primerInvalido) {
      primerInvalido = campo;
    }
  });

  if (primerInvalido) {
    primerInvalido.focus();
    resultado.textContent = '';
    return;
  }

  const datos = Object.fromEntries(new FormData(formulario));
  const { noches, importe } = calcularTotal();

  const resumen = {
    ...datos,
    noches,
    total: `${importe.toFixed(2)} €`
  };

  resultado.textContent = JSON.stringify(resumen, null, 2);
});

// 7. Evento reset
formulario.addEventListener('reset', () => {
  resultado.textContent = '';

  if (campoSalida) {
    campoSalida.setCustomValidity('');
  }

  const campos = Array.from(formulario.elements).filter((el) => el.name);
  campos.forEach((campo) => {
    campo.classList.remove('con-error');
    const spanError = document.getElementById(`error-${campo.name}`);
    if (spanError) {
      spanError.textContent = '';
    }
  });

  // Esperamos al siguiente ciclo para que el formulario recupere sus valores por defecto (ej. 1 persona)
  setTimeout(() => {
    calcularTotal();
  }, 0);
});