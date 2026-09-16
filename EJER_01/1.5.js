//  1.
const estudiantes = [
    {
    nombre: "Alberto",
    apellidos: "Rodriguez",
    calificacion: 9,
    aprobado: true
},
    {
    nombre: "Roberto",
    apellidos: "Menindez",
    calificacion: 4,
    aprobado: false
},
    {
    nombre: "Berto",
    apellidos: "Antuñez",
    calificacion: 5,
    aprobado: true
}
]

//  2.
const estudiantesId = estudiantes.map((estudiantes, numeracion) =>{
    return {
        id: numeracion + 1,
        ...estudiantes}
}
)

//  3.
const estudiantesAprobados = estudiantes.filter(estudiantes => estudiantes.calificacion >= 5)

//  4.
estudiantesAprobados.forEach(estudiantes => {
  console.log(`¡Felicidades ${estudiantes.nombre}, has aprobado con ${estudiantes.calificacion}!`)
})

//  5.
estudiantes.forEach(estudiantes => {

const estudiantesVerificacion = estudiantes.calificacion >= 5

if (estudiantesVerificacion !== estudiantes.aprobado) {
    console.log(`Incoherencia en el registro de ${estudiantes.nombre}: calificación = ${estudiantes.calificacion}, aprobado = ${estudiantes.aprobado}`)
}
})