//  1.
const ciudades = ["Madrid", "Buenos Aires", "Tokio", "Nueva York", "Paris"]

//  2.
ciudades.push("Roma")       //  Añadir al array

//  3.
const ciudadesMayusculas = ciudades.map(mayus => mayus.toUpperCase())       //  cada vez que pase un dato del array va a ser dejado en "mayus", cuando se deja luego se pasa a mayusculas (.toUpperCase()) y luego se guarda en la nueva constante

//  4.
const ciudadesFiltradas = ciudades.filter(seis => seis.length <= 6)         //  cada vez que pase un dato del array va a ser dejado en "seis", luego se compara que la longitud de seis sea inferior a 6, si es correcto se guarda en la nueva constante

//  5.
console.log(ciudades)
console.log(ciudadesMayusculas)
console.log(ciudadesFiltradas)