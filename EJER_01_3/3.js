const productos = [
  { nombre: 'Ratón', precio: 15, stock: 0 },
  { nombre: 'Teclado', precio: 25, stock: 8 },
  { nombre: 'Monitor', precio: 120, stock: 3 }
]

//  1.
const disponibles = productos /* .filter(...).map(...) */ .filter(
    productos => productos.stock > 0
    ).map(
        productos => productos.nombre
        )

//  2.
const listaHtml = '<ul>' + disponibles
   .map(nombre => `<li>${nombre}</li>`)
  .join('') + '</ul>'

console.log(disponibles) // ['Teclado', 'Monitor']
console.log(listaHtml)   // <ul><li>Teclado</li><li>Monitor</li></ul>
