const formularioNotas = document.getElementById("formulario-notas");

let alumnos = [];
let contadorId = 1;
let columnaOrden = null;
let ordenAscendente = true;


const { alumno: inputAlumno, nota: inputNota} = formularioNotas.elements;


const preview = document.getElementById("vista-previa");
const tablaBody = document.querySelector("#tabla tbody");
const resumenP = document.getElementById("resumen");
const tablaHead = document.querySelector("#tabla thead");


// Vista previa (input). Mientras se escribe la nota, muestra junto al campo «Aprobado» (5 o más) o «Suspenso». Si el campo está vacío, no muestres nada.

inputNota.addEventListener("input", () => {
    const preNota = inputNota.valueAsNumber;

    if (preNota >= 5){
        preview.textContent = "Aprobado";
        preview.className = "aprobado";
        console.log("Hola");
    } else if (preNota < 5){
        preview.textContent = "Suspenso";
        preview.className = "suspenso";
    } else {
        preview.textContent = "";
    }
});


// Añadir (submit). Guarda { id, alumno, nota } en un array, limpia el formulario (también la vista previa) y devuelve el foco al nombre. campo id lo generará el programa secuencialmente:1, 2, 3…

formularioNotas.addEventListener("submit", (e) => {
e.preventDefault();

alumnos.push({
    id: contadorId++,
    alumno: inputAlumno.value.trim(),
    nota: inputNota.valueAsNumber
});

formularioNotas.reset();
preview.textContent = "";
inputAlumno.focus();

pintar();
});


// Tabla. Crea una tabla donde agreges los datos a una fila. Pinta las filas con map(). Las notas aprobadas en verde (aprobado) y las suspensas en rojo (suspenso). Agrega por cada fila un botón “Borrar” que la elimine.

const pintar = () => {

tablaBody.innerHTML = alumnos.map(a => `
    <tr data-id="${a.id}">
    <td>${a.alumno}</td>
    <td class="${a.nota >= 5 ? 'aprobado' : 'suspenso'}">${a.nota.toFixed(1)}</td>
    <td><button data-accion="borrar">Borrar</button></td>
    </tr>
`).join("");


// Borrar con delegación. Un único escuchador click en el <tbody> borra la fila pulsada con filter().

tablaBody.addEventListener("click", (e) => {
    const boton = e.target.closest("button[data-accion='borrar']");
    if (!boton) return;

    const fila = boton.closest("tr");
    const idAlumno = parseInt(fila.dataset.id, 10);

    alumnos = alumnos.filter(a => a.id !== idAlumno);

    pintar();
});

// Resumen. Debajo de la tabla muestra: nota media (reduce()), mejor alumno (reduce()), número de aprobados (filter()) y si aprueban todos (every()). Con la tabla vacía escribe «Sin alumnos».

const notaMedia = alumnos.reduce((acc, a) => acc + a.nota, 0) / alumnos.length;

const mejorAlumnoObj = alumnos.reduce((max, a) => a.nota > max.nota ? a : max, alumnos[0]);

const numAprobados = alumnos.filter(a => a.nota >= 5).length;

const apruebanTodos = alumnos.every(a => a.nota >= 5);

resumenP.innerHTML = `
    Nota media: <strong>${notaMedia.toFixed(2)}</strong> | 
    Mejor alumno: <strong>${mejorAlumnoObj.alumno} (${mejorAlumnoObj.nota.toFixed(1)})</strong> | 
    Aprobados: <strong>${numAprobados}</strong> | 
    ¿Aprueban todos?: <strong>${apruebanTodos ? 'Sí' : 'No'}</strong>
`;

if (alumnos.length === 0) {
    tablaBody.innerHTML = "";
    resumenP.textContent = "Sin alumnos";
    return;
}

}


// 1. **Ordenar con delegación.** Un único escuchador `click` en el `<thead>` ordena por la columna pulsada con `sort()`. Un segundo clic sobre la misma columna invierte el orden. 

// > **Pistas:** para ordenar texto usa `a.alumno.localeCompare(b.alumno)`, y para números `a.nota - b.nota`. Para invertir el orden basta con cambiar el signo del resultado.
// >

tablaHead.addEventListener("click", (e) => {
const th = e.target.closest("th[data-orden]");
if (!th) return;

const criterio = th.dataset.orden; // "alumno" o "nota"

if (columnaOrden === criterio) {
    ordenAscendente = !ordenAscendente;
} else {
    columnaOrden = criterio;
    ordenAscendente = true;
}

alumnos.sort((a, b) => {
    let resultado = 0;
    if (criterio === "alumno") {
    resultado = a.alumno.localeCompare(b.alumno);
    } else if (criterio === "nota") {
    resultado = a.nota - b.nota;
    }
    return ordenAscendente ? resultado : -resultado;
});

pintar();
});






// const formularioNotas = document.getElementById("formulario-notas");

// if (formularioNotas) {
//   // Estado de la aplicación
// //   let alumnos = [];
// //   let contadorId = 1;
// //   let columnaOrden = null;
// //   let ordenAscendente = true;

//   // Elementos del DOM
// //   const { alumno: inputAlumno, nota: inputNota } = formularioNotas.elements;
// //   const vistaPrevia = document.getElementById("vista-previa");
// //   const tablaBody = document.querySelector("#tabla tbody");
// //   const tablaHead = document.querySelector("#tabla thead");
// //   const resumenP = document.getElementById("resumen");

//   // 1. Vista previa en tiempo real
// //   inputNota.addEventListener("input", () => {
// //     const valor = inputNota.value;
// //     if (valor === "") {
// //       vistaPrevia.textContent = "";
// //       return;
// //     }
    
// //     const nota = inputNota.valueAsNumber;
// //     if (nota >= 5) {
// //       vistaPrevia.textContent = "Aprobado";
// //       vistaPrevia.className = "aprobado";
// //     } else {
// //       vistaPrevia.textContent = "Suspenso";
// //       vistaPrevia.className = "suspenso";
// //     }
// //   });

//   // Función para pintar la tabla y el resumen
//   const pintarNotas = () => {
//     // if (alumnos.length === 0) {
//     //   tablaBody.innerHTML = "";
//     //   resumenP.textContent = "Sin alumnos";
//     //   return;
//     // }

//     // // 3. Tabla: Pintar filas con map
//     // tablaBody.innerHTML = alumnos.map(a => `
//     //   <tr data-id="${a.id}">
//     //     <td>${a.alumno}</td>
//     //     <td class="${a.nota >= 5 ? 'aprobado' : 'suspenso'}">${a.nota.toFixed(1)}</td>
//     //     <td><button data-accion="borrar">Borrar</button></td>
//     //   </tr>
//     // `).join("");

//     // // 5. Resumen estadístico
//     // // Nota Media (reduce)
//     // const notaMedia = alumnos.reduce((acc, a) => acc + a.nota, 0) / alumnos.length;

//     // // Mejor Alumno (reduce)
//     // const mejorAlumnoObj = alumnos.reduce((max, a) => a.nota > max.nota ? a : max, alumnos[0]);

//     // // Número de aprobados (filter)
//     // const numAprobados = alumnos.filter(a => a.nota >= 5).length;

//     // // Si aprueban todos (every)
//     // const apruebanTodos = alumnos.every(a => a.nota >= 5);

//     // resumenP.innerHTML = `
//     //   Nota media: <strong>${notaMedia.toFixed(2)}</strong> | 
//     //   Mejor alumno: <strong>${mejorAlumnoObj.alumno} (${mejorAlumnoObj.nota.toFixed(1)})</strong> | 
//     //   Aprobados: <strong>${numAprobados}</strong> | 
//     //   ¿Aprueban todos?: <strong>${apruebanTodos ? 'Sí' : 'No'}</strong>
//     // `;
//   };

//   // 2. Añadir alumno (`submit`)
// //   formularioNotas.addEventListener("submit", (e) => {
// //     e.preventDefault();

// //     alumnos.push({
// //       id: contadorId++,
// //       alumno: inputAlumno.value.trim(),
// //       nota: inputNota.valueAsNumber
// //     });

// //     // Limpieza, reseteo de vista previa y foco
// //     formularioNotas.reset();
// //     vistaPrevia.textContent = "";
// //     inputAlumno.focus();

// //     pintarNotas();
// //   });

//   // 4. Borrar con delegación en el `<tbody>`
// //   tablaBody.addEventListener("click", (e) => {
// //     const boton = e.target.closest("button[data-accion='borrar']");
// //     if (!boton) return;

// //     const fila = boton.closest("tr");
// //     const idAlumno = parseInt(fila.dataset.id, 10);

// //     // Filtramos para eliminar al alumno seleccionado
// //     alumnos = alumnos.filter(a => a.id !== idAlumno);
    
// //     pintarNotas();
// //   });

//   // OPCIONAL: Ordenar con delegación en el `<thead>`
// //   tablaHead.addEventListener("click", (e) => {
// //     const th = e.target.closest("th[data-orden]");
// //     if (!th) return;

// //     const criterio = th.dataset.orden; // "alumno" o "nota"

// //     // Si pulsamos en la misma columna invertimos dirección, si no, empezamos en ascendente
// //     if (columnaOrden === criterio) {
// //       ordenAscendente = !ordenAscendente;
// //     } else {
// //       columnaOrden = criterio;
// //       ordenAscendente = true;
// //     }

// //     // Aplicamos el orden mediante el método sort
// //     alumnos.sort((a, b) => {
// //       let resultado = 0;
// //       if (criterio === "alumno") {
// //         resultado = a.alumno.localeCompare(b.alumno);
// //       } else if (criterio === "nota") {
// //         resultado = a.nota - b.nota;
// //       }
// //       return ordenAscendente ? resultado : -resultado;
// //     });

// //     pintarNotas();
// //   });

//   // Inicialización del texto de resumen
//   pintarNotas();
// }