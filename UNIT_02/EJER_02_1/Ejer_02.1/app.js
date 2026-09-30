import { buscarLibro, calcularTotalPaginas, eliminarLibro, hayLibrosLargos, obtenerLibros, ordenarPorPaginas, todosSonLibrosCortos } from "./biblioteca.js"
import { agregarLibro } from "./biblioteca.js"

obtenerLibros()

agregarLibro(11,"Oscuro y sombrio","Pepe Billuela",372)

obtenerLibros()

//  2.4

buscarLibro(3)
eliminarLibro(3)

obtenerLibros()

//  2.5

calcularTotalPaginas()

//  2.6

ordenarPorPaginas()

//  2.7

hayLibrosLargos(500)
todosSonLibrosCortos(500)