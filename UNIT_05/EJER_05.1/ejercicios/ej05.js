const entradas = [
  '{"nombre":"Ana","nota":8.5}',
  '{"nombre":"Luis","nota":"9"}',
  '{"nombre":"","nota":7}',
  '{"nombre":"Marta","nota":11}',
  '{"nombre":"Pablo","nota":6',
  'null',
];

function esAlumnoValido(texto){

if (!JSON.parse(texto)) {
    console.log(1);
    return false;
} else if (null){
    console.log(2);
    return false;
} else if (texto.nombre) {
    console.log(3);
    return false;
} else if (texto.numero > 10 || texto.numero < 0){
    console.log(4);
    return false;
}
};

const leerJSON = (texto) => {
  try {
    return JSON.parse(texto);
  } catch (error) {
    console.log('   (el texto no es JSON válido)');
    return null;
  }
};

for (let i = 0; i <= entradas.length; i++){
    esAlumnoValido(entradas[i]);
}

for (const texto of entradas) {
  const libro = leerJSON(texto);
  console.log(esAlumnoValido(libro) ? '✔ aceptado ' : '✘ rechazado', texto);
}
