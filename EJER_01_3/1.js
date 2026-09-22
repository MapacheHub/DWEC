function esContrasenaValida(contrasena) {
  //TODO: completa el cuerpo de la función
  return contrasena.length >= 8
}

const contrasenas = ['1234', 'miClave2024', 'abc']

//TODO: usa esContrasenaValida como literal de función anónimo
// dentro de un .map() para obtener [false, true, false]
const resultado = contrasenas.map(esContrasenaValida)

console.log(resultado) // [false, true, false]

// supongo que es mas rentable darle nombre a funciones cuando la uses directamente, si una funcion usa otra funcion esa otra funcion no creo que edberia de tener un nombre para ahora espacio y acelerar todo