//  1.  creacion de objeto

let usuario = {nombre: "Jony", email: "JonyLenony@mail.com"}

//  2.

let perfil = {puesto: "CEO", empresa: "Ladrillo S.L"}

//  3.  combinar objetos usando "spread operator" (...'objeto')

let empleado = {
    ...usuario,
    ... perfil
}

//  4. y 5.
//  "optional chaining" [es la parte de 'objeto'?, es para que si no existe 'objeto'.'objetito' no reviente]
//  "Nullish Coalescing Operator" (??), es para asignar un valor por si es valor base es null {sinceramente no se por que tube que ponerlo asi, tu hazlo asi i supose}

 console.log(empleado.perfil?.direccion?.ciudad ?? "Ciudad no especificada")
