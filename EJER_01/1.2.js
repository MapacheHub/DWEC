//  1.
const coche = {
    marca: "Toyota",
    modelo: "T800",
    año: 2006,
    estaDisponible: false
}

//  2.
console.table(coche)

//  3.
const {marca, modelo} = coche        // desestructure coche para poder sacar la marca y el modelo

console.log(marca)
console.log(modelo)

//  4.
coche.estaDisponible = true

//  5.
coche.color = "Verde"

//  6.
delete coche.año

//  7.
console.table(coche)
