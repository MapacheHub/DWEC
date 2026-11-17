// / Ejercicio 1.1 · Registro de usuario (versión inicial)
const formulario = document.getElementById('registro');
const resultado = document.getElementById('resultado');

// 1. Desactivar la validación del navegador (noValidate)
formulario.noValidate = true;

// 2. Función mostrarError(campo): escribe campo.validationMessage en #error-<name>,
//    activa o quita la clase 'con-error' y devuelve true si el campo es válido
function mostrarError(campo) {
  const esValido = campo.validity.valid;
  const spanError = document.getElementById(`error-${campo.name}`);

  if (spanError) {
    spanError.textContent = campo.validationMessage;
  }

  campo.classList.toggle('con-error', !esValido);

  return esValido;
}

// 3. Evento focusout en el formulario: valida el campo que se abandona
formulario.addEventListener('focusout', (evento) => {
  const campo = evento.target;
  // Ignoramos botones (submit, reset, button)
  if (!campo.name || campo.type === 'submit' || campo.type === 'reset') return;

  mostrarError(campo);
});

// 4. Evento input en el formulario: si el campo ya tenía error, se revalida
formulario.addEventListener('input', (evento) => {
  const campo = evento.target;
  if (!campo.name) return;

  // Revalidamos si ya estaba marcado con error (o si es un checkbox que se acaba de marcar)
  if (campo.classList.contains('con-error') || campo.type === 'checkbox') {
    mostrarError(campo);
  }
});

// 5. Evento submit: valida todos los campos; si hay errores, foco en el primero;
//    si no, muestra los datos en JSON sin la contraseña
formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();

  // Obtenemos todos los campos con atributo 'name' del formulario
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

  // Construimos el objeto de datos a partir de FormData y eliminamos la contraseña
  const datos = Object.fromEntries(new FormData(formulario));
  delete datos.contrasena; // Ajusta el nombre si el input en HTML tiene otro 'name' (ej. datos.password)

  resultado.textContent = JSON.stringify(datos, null, 2);
});

// 6. Evento reset: limpia el resultado y todos los errores
formulario.addEventListener('reset', () => {
  resultado.textContent = '';

  const campos = Array.from(formulario.elements).filter((el) => el.name);
  campos.forEach((campo) => {
    campo.classList.remove('con-error');
    const spanError = document.getElementById(`error-${campo.name}`);
    if (spanError) {
      spanError.textContent = '';
    }
  });
});