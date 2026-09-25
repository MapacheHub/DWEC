const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']
const tecnologias2 = tecnologias.filter(function(tech) {    //  .filter recorre el array y guarda cada dato en la funcion "tech"
    if(tech !== 'HTML') {                                   //  .filter filtra
        return tech
    }
})

function filtro(tech) {    //   lo mismo de antes paro mas compacto
    if(tech !== 'HTML') {
        return tech
    }
}


// const tecnologias2 = tecnologias.map(function(tech) {       //  .map sirve para editar el contenido de dentro del array
//     if(tech === 'Node.js') {
//         return 'Nest.js'
//     } else {
//         return tech
//     }
// })

console.log(tecnologias2)