const input = document.getElementById('tareaInput');
  const botonAnadir = document.getElementById('botonAnadir');
  const lista = document.getElementById('listaTarea');


//  **1.** Al hacer clic en “Añadir”, si el `input` no está vacío, crea un nuevo `<li>` con el texto del `input`.
  botonAnadir.addEventListener('click', () => {
    console.log("pulsaste el boton");
    const texto = input.value.trim();
    if (texto !== '') {

      const nuevoLi = document.createElement('li');
      nuevoLi.textContent = texto + ' ';


//   **2.** Dentro de cada `<li>` nuevo, además del texto, añade un botón “Eliminar”.
      const botonEliminar = document.createElement('button');
      botonEliminar.textContent = 'Eliminar';

      
//  **3.** Si el clic es en un botón “Eliminar”, navega por el DOM (`parentNode`) para encontrar el `<li>` que lo contiene y elimínalo (`.remove()`).
      botonEliminar.addEventListener('click', (e) => {
        const liContenedor = e.target.parentNode;
        liContenedor.remove();
      });

      nuevoLi.appendChild(botonEliminar);
      lista.appendChild(nuevoLi);
      input.value = '';
    }
  });