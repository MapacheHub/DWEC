const usuarios = [
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Luis', edad: 30 },
    { nombre: 'Jorge', edad: 24},
];
function construirTabla(arrayDatos) {
  const contenedor = document.getElementById('contenedor-tabla');
  contenedor.innerHTML = ''; // Limpiar previo
  
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
}

construirTabla(usuarios);