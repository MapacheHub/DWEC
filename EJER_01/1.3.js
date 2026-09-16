const producto = {
    nombre: "Eyefon",
    precio: 1000
}

const cliente = {
    nombreCliente: "Enrique",
    esPremium: true
}

const pedido = {
    ...producto, ...cliente
}

console.log(pedido)

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