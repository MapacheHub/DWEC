import resumenInventario, { crearProducto, filtrarPorCategoria, listaProductosAgotados, calcularValorTotalInventario} from './inventario.js';

const inventario=[]

inventario.push(crearProducto("Portatil", "Electronica", 450, 34))
inventario.push(crearProducto("Camisa", "Ropa", 31, 7))
inventario.push(crearProducto("Galletas", "Alimentacion", 5.45, 0))
inventario.push(crearProducto("Anillos", "Joyeria", 1200, 3))
inventario.push(crearProducto("Tren", "Infantil", 26.50, 12))
inventario.push(crearProducto("Vendas", "Salud", 6, 148))

console.log(filtrarPorCategoria(inventario, "Ropa"))
console.log(listaProductosAgotados(inventario))
console.log(calcularValorTotalInventario(inventario))
resumenInventario(inventario)