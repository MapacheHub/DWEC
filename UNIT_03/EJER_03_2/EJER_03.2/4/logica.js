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
const tabla = document.createElement('table');
  const fragmento = document.createDocumentFragment();
  
  arrayDatos.forEach(objeto => {
    const fila = document.createElement('tr');
    
    const celdaNombre = document.createElement('td');
    celdaNombre.textContent = objeto.nombre;
    fila.appendChild(celdaNombre);
    
    const celdaEdad = document.createElement('td');
    celdaEdad.textContent = objeto.edad;
    fila.appendChild(celdaEdad);
    
    fragmento.appendChild(fila);
  });
  
  tabla.appendChild(fragmento);
  contenedor.appendChild(tabla);


construirTabla(usuarios);



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
  
//   arrayDatos.forEach(objeto => {
//     const fila = document.createElement('tr');
    
//     const celdaNombre = document.createElement('td');
//     celdaNombre.textContent = objeto.nombre;
//     fila.appendChild(celdaNombre);
    
//     const celdaEdad = document.createElement('td');
//     celdaEdad.textContent = objeto.edad;
//     fila.appendChild(celdaEdad);
    
//     fragmento.appendChild(fila);
//   });
  
//   tabla.appendChild(fragmento);
//   contenedor.appendChild(tabla);
// }

// construirTabla(usuarios);