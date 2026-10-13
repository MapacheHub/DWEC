// ================================================================
// RETO 3 · MÉTODOS DE ARRAY                         (escribir funciones)
// ================================================================

// 3.1 nombresCaros
export const nombresCaros = (productos, minimo) => {
  // TU CÓDIGO AQUÍ
  return productos.filter((pro) => pro.precio >= minimo).map((pro) => pro.nombre).sort((a, b) => a.localeCompare(b, 'es'))
};

// 3.2 totalInventario
export const totalInventario = (productos) => {
  // TU CÓDIGO AQUÍ
  if (!Array.isArray(productos)) return []
  return productos.reduce((tot, aña) => tot + (aña.precio * aña.unidades), 0)
};

// 3.3 agruparPorCategoria
export const agruparPorCategoria = (productos) => {
  // TU CÓDIGO AQUÍ
   return productos.reduce((a, b) => {
    a.categoria - b.categoria
    })
};

// 3.4 productoMasBarato
export const productoMasBarato = (productos) => {
  // TU CÓDIGO AQUÍ
  if (productos.length === 0) return undefined
  return productos.reduce((a, b) => a.precio < b.precio ? a : b , productos[0])
  
};

// 3.5 hayAgotados
export const hayAgotados = (productos) => {
  // TU CÓDIGO AQUÍ
  return productos.some(s => s.unidades === 0)

};
