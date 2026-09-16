const nombre = "Jorge"
let edad = 24
const tieneMascotas = true
edad = 42
// tieneMascotas = false

console.log(nombre, typeof nombre, " | ",edad, typeof edad,  " | ",tieneMascotas, typeof tieneMascotas)

let mascota
if (tieneMascotas === true) {
    mascota = "si"
} else {
    mascota = "no"
}

console.log(`${nombre} tiene ${edad} años y ${mascota} tiene mascotas`)