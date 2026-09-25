const suma = /* completa */ (a ,b) => {
  return (a + b)
}
const resta = /* completa */ (a , b) => {
  return (a - b)
}

// potencia debe lanzar un error si el exponente es negativo
// (pista: usa cuerpo de bloque y throw)
const potencia = (base, exponente) => {
  //TODO
  if (exponente < 0) {
    throw new Error("El exponente no debe ser menor a 0.")
  }

  return (base ** exponente)
}

const aplicarOperacion = (a, b, operacion) => /* completa */ {
  return operacion(a, b)
}

console.log(aplicarOperacion(5, 3, suma))  // 8
console.log(aplicarOperacion(5, 3, resta)) // 2
console.log(aplicarOperacion(2, 3, potencia)) // 8
console.log(aplicarOperacion(2, -1, potencia)) // debería lanzar un error