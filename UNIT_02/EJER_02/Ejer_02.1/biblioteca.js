let Libros = [
    {id: 1, titulo: "Libro a", autor: "A", paginas: 50},
    {id: 1, titulo: "Libro b", autor: "B", paginas: 100},
    {id: 1, titulo: "Libro c", autor: "C", paginas: 150},
    {id: 1, titulo: "Libro d", autor: "D", paginas: 200},
    {id: 1, titulo: "Libro e", autor: "E", paginas: 250},
    {id: 1, titulo: "Libro f", autor: "F", paginas: 300},
    {id: 1, titulo: "Libro g", autor: "G", paginas: 350},
    {id: 1, titulo: "Libro h", autor: "H", paginas: 400},
    {id: 1, titulo: "Libro i", autor: "I", paginas: 450},
    {id: 1, titulo: "Libro j", autor: "J", paginas: 500},
]

// function agregarLibro(){}

function obtenerLibros(){
    console.log("hola")
    (Libros.forEach(function(libro) {
    console.log("Id: " + libro.id + " | Titulo: " + libro.titulo +" | Autor: " + libro.autor + " | Paginas: " + libro.paginas)
} ) )
}


