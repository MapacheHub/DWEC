const cursos = [
    {
    nombre: "Lengua",
    profesor: "Alberto",
    estudiantes:[
        {
        nombre: "Alba",
        calificacion: 6
        },{
        nombre: "Beatriz",
        calificacion: 3
        },{
        nombre: "Carmen",
        calificacion: 8
        }
    ]
},
{
    nombre: "Matematicas",
    profesor: "Berto",
    estudiantes:[
        {
        nombre: "Antonio",
        calificacion: 4
        },{
        nombre: "Blanca",
        calificacion: 6
        },{
        nombre: "Claudia",
        calificacion: 3
        }
    ]
},
{
    nombre: "Ciencias sociales",
    profesor: "Carlos",
    estudiantes:[
        {
        nombre: "Alvaro",
        calificacion: 2
        },{
        nombre: "Belen",
        calificacion: 8
        },{
        nombre: "Cesar",
        calificacion: 6
        }
    ]
},
{
    nombre: "Informatica",
    profesor: "Daniel",
    estudiantes:[
        {
        nombre: "Ana",
        calificacion: 9
        },{
        nombre: "Borja",
        calificacion: 6
        },{
        nombre: "Cecilia",
        calificacion: 8
        }
    ]
}
]

const resumenCursos = cursos.map(cursos => {
  const sumCal = cursos.estudiantes.reduce((acumulador, estudiantes) => {
    return acumulador + estudiantes.calificacion
  }, 0)

  const promedio = sumCal / cursos.estudiantes.length

  return {
    nombreCurso: cursos.nombre,
    promedioCalificaciones: Number(promedio.toFixed(1))
  }
})

const cursosDestacados = resumenCursos.filter(cursos => cursos.promedioCalificaciones >= 7)

cursosDestacados.forEach(resumenCursos => {
  console.log(`El curso ${resumenCursos.nombreCurso} tiene un promedio de ${resumenCursos.promedioCalificaciones} y es considerado destacado.`)
})

cursos.forEach(cursos => {
    const malaPinta = cursos.estudiantes.filter(estudiantes => estudiantes.calificacion < 4)

    if (malaPinta.length > 0) {
        console.log(`⚠️ Atención: En el curso ${cursos.nombre} hay estudiantes con calificaciones muy bajas.`)
    }
})