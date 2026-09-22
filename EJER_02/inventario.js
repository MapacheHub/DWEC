//  1.

export function crearProducto(nombre, categoria, precio, stock){
    return {nombre,categoria,precio,stock}
}

export function filtrarPorCategoria(inventario, categoria){
    return inventario.filter(producto => producto.categoria.toLowerCase() === categoria.toLowerCase())  //  devuelve un filtro del inventario, que coje un producto, de ese producto su categoria(la baja a minuscula) que sea exacta a la categoria escrita(la pone en minuscula)
}

export function listaProductosAgotados(inventario){
    return inventario.filter(producto => producto.stock === 0)
}

export function calcularValorTotalInventario(inventario){
    return inventario.reduce((acumulador, producto) => acumulador + (producto.precio * producto.stock), 0)  //  ???
}

export default function resumenInventario(inventario){

    console.log("--- RESUMEN DEL INVENTARIO ---");

    const totalProductos = inventario.length;
    console.log(`Número total de productos: ${totalProductos}`);
  
    // Extraemos las categorías únicas usando un Set
    const categoriasUnicas = new Set(inventario.map(producto => producto.categoria));
    const totalCategorias = categoriasUnicas.size;
    console.log(`Número de categorías distintas: ${totalCategorias}`);
  
    const valorTotal = calcularValorTotalInventario(inventario);
    console.log(`Valor total del inventario: $${valorTotal.toFixed(2)}`);
}