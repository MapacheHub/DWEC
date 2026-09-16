const ciudades = ["Madrid", "Buenos Aires", "Tokio", "Nueva York", "Paris"]

ciudades.push("Roma")

const ciudadesMayusculas = ciudades.map(mayus => mayus.toUpperCase())

const ciudadesFiltradas = ciudades.filter(seis => seis.length <= 6)

console.log(ciudades)
console.log(ciudadesMayusculas)
console.log(ciudadesFiltradas)