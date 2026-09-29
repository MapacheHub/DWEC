let Libros = [
    {id: 1, titulo: "Libro a", autor: "A", paginas: 50},
    {id: 2, titulo: "Libro b", autor: "B", paginas: 100},
    {id: 3, titulo: "Libro c", autor: "C", paginas: 150},
    {id: 4, titulo: "Libro d", autor: "D", paginas: 200},
    {id: 5, titulo: "Libro e", autor: "E", paginas: 250},
    {id: 6, titulo: "Libro f", autor: "F", paginas: 300},
    {id: 7, titulo: "Libro g", autor: "G", paginas: 350},
    {id: 8, titulo: "Libro h", autor: "H", paginas: 400},
    {id: 9, titulo: "Libro i", autor: "I", paginas: 450},
    {id: 10, titulo: "Libro j", autor: "J", paginas: 500},
]

export function agregarLibro(num, tit, aut, pag){
    Libros.push({id: num, titulo: tit, autor: aut, paginas: pag})
}

// agregarLibro(20, "Amanecer rojo", "Charles Charly", 1200)

export function obtenerLibros(){
    Libros.forEach(function(libro) {
    console.log("Id: " + libro.id + " | Titulo: " + libro.titulo +" | Autor: " + libro.autor + " | Paginas: " + libro.paginas)
} ) 
}

//  2.4

export function buscarLibro(num){
    Libros.find(libro)
    if (libro.id == num) {
        return libro
    }
}

export function eliminarLibro(num){
    Libros.findIndex(libro){
        if (libro.id == num){
            libro.splice()
        }
    }
}

