//  se queda en la variable el ultimo dato añadido
//  1.
const producto = {
    nombre: "Eyefon",
    precio: 1000
}

//  2.
const cliente = {
    nombreCliente: "Enrique",
    esPremium: true
}

//  3.
const pedido = {
    ...producto, 
    ...cliente
}

//  4.
console.log(pedido)

//  5.
const producto2 = {
    nombre: "Eyefon",
}

const cliente2 = {
    nombre: "Enrique",
}

const pedido2 = {
    ...producto2, ...cliente2
}

console.log(pedido2)

//  se queda en la variable el ultimo dato añadido