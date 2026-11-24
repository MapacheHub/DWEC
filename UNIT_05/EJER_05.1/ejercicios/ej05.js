const entradas = [
  '{"nombre":"Ana","nota":8.5}',
  '{"nombre":"Luis","nota":"9"}',
  '{"nombre":"","nota":7}',
  '{"nombre":"Marta","nota":11}',
  '{"nombre":"Pablo","nota":6',
  'null',
];

const leerJSON = (texto) => {
  try {
    return JSON.parse(texto);
  } catch (error) {
    return null;
  }
};

function esAlumnoValido(texto){

const alumno = leerJSON(texto);

if (typeof alumno !== 'object' || alumno === null){
  return false;
} if (typeof alumno.nombre !== 'string' || alumno.nombre === '') {
    return false;
} if (typeof alumno.nota !== 'number' || Number.isNaN(alumno.nota) || alumno.nota < 0 || alumno.nota > 10) {
  return false;
}
return true;
};


for (const texto of entradas) {
  console.log(esAlumnoValido(texto) ? '✔ aceptado ' : '✘ rechazado', texto);
}