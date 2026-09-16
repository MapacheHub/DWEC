const coche = {
    marca: "Toyota",
    modelo: "T800",
    año: 2006,
    estaDisponible: false
}

console.table(coche)

coche.estaDisponible = true

coche.color = "Verde"

delete coche.año

console.table(coche)
