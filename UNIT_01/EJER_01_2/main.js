//  2.
import mostrarPerfil, {crearPerfil, esMayorDeEdad, obtenerMayoresDeEdad, calcularPromedioEdad } from "./gestorUsuarios.js"

let usuarios = [
    {nombre: "Alex", correo: "AlexEA@gmail.com", edad: 13},    
    {nombre: "Pepe", correo: "PepeAR@gmail.com", edad: 19}
]

usuarios.forEach(function(user) {
    crearPerfil(user)
})

usuarios.forEach(function(user) {
    console.log(mostrarPerfil(user))
})
console.log("mayores")
console.log(obtenerMayoresDeEdad(usuarios))

console.log(calcularPromedioEdad(usuarios))