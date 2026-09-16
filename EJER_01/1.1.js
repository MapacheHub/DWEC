//  1.
const nombre = "Jorge"

//  2.
let edad = 24

//  3.
const tieneMascotas = true

//  4.
edad = 42
// tieneMascotas = false                    //  const significa Constante, ergo no se puede cambiar

//  5.
console.log(nombre, typeof nombre, " | ",edad, typeof edad,  " | ",tieneMascotas, typeof tieneMascotas)

//  6.
let mascota
if (tieneMascotas === true) {
    mascota = "si"
} else {
    mascota = "no"
}

console.log(`${nombre} tiene ${edad} años y ${mascota} tiene mascotas`)