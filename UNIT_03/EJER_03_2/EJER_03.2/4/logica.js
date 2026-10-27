import { createElement } from "react"

const usuarios = [
    {
        nombre: 'Ana',
        edad: 25,
    },
    {
        nombre: 'Luis',
        edad: 30,
    }
]
export function createTable(usuarios){
    document.createElement('table')

    const tabla = document.getElementsByClassName('table')
    usuarios.foreach(persona => {
        const userTR = document.createElement('tr');
        tabla.appendChild(userTR);
        persona.foreach(dato => {
            const datoTD = document.createElement('td');
            datoTD.textContent = dato;
            userTR.appendChild(datoTD);
        })
    })            
}



// const usuarios = [
//   { nombre: 'Ana', edad: 25 },
//   { nombre: 'Luis', edad: 30 },
//   { nombre: 'Carlos', edad: 22 },
//   { nombre: 'María', edad: 28 }
// ];

// function construirTabla(arrayDatos) {
//   const contenedor = document.getElementById('contenedor-tabla');
//   contenedor.innerHTML = ''; // Limpiar previo
  
//   const tabla = document.createElement('table');
//   const fragmento = document.createDocumentFragment();
  
//   // Crear filas con datos
//   arrayDatos.forEach(objeto => {
//     const fila = document.createElement('tr');
    
//     // Celda Nombre
//     const celdaNombre = document.createElement('td');
//     celdaNombre.textContent = objeto.nombre;
//     fila.appendChild(celdaNombre);
    
//     // Celda Edad
//     const celdaEdad = document.createElement('td');
//     celdaEdad.textContent = objeto.edad;
//     fila.appendChild(celdaEdad);
    
//     fragmento.appendChild(fila);
//   });
  
//   tabla.appendChild(fragmento);
//   contenedor.appendChild(tabla);
// }

// // Ejecución de ejemplo
// construirTabla(usuarios);