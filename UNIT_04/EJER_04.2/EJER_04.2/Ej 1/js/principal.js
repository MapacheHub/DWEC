let productos = [];
let contadorID = 1;

const formCompra = document.getElementById("formulario-compra");
const lista = document.getElementById("lista");
const totalP = document.getElementById("total");
const buscador = document.getElementById("buscador");

//1.
formCompra.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const {producto, precio, unidades } = formCompra.elements;
    const nombreP = producto.value.trim();
    const precioP = precio.valueAsNumber;
    const unidadesP = unidades.valueAsNumber;


//2.
    const productoEnAlmacen = productos.find(
        objeto => objeto.nombre.toLowerCase() === nombreP.toLowerCase()
    );

//2. y 1.
if (productoEnAlmacen) {
    productoEnAlmacen.unidades += unidadesP;
} else {
    productos.push({
        id: contadorID++,
        nombre: nombreP,
        precio: precioP,
        unidades: unidadesP,
    })
}

    formCompra.reset();
    buscador.value = "";
    producto.focus();
    pintar();

});

//3.
const pintar = (filtroProducto = productos) => {
     lista.innerHTML = filtroProducto
    .map(prod => `
      <li data-id="${prod.id}">
        <span>${prod.nombre} - ${prod.unidades} ud. x ${prod.precio.toFixed(2)}€ = ${(prod.unidades * prod.precio).toFixed(2)}€</span>
        <button data-accion="restar">-</button>
        <button data-accion="sumar">+</button>
        <button data-accion="borrar">Borrar</button>
      </li>
    `)
    .join("");

    const total = productos.reduce((acu, produc) => acu + (produc.precio * produc.unidades), 0);
    totalP.textContent = productos.length > 0
    ? `Total: ${total.toFixed(2)} €`
    : "Lista vacia";
}   

lista.addEventListener("click", (evento) => {
    const boton = evento.target.closest("button");
    if (!boton) return;

    const accion = boton.dataset.accion;
    const li = boton.closest("li");
    const idProd = parseInt(li.dataset.id, 10);

  // Diccionario de acciones para evitar un bloque if/else largo
    const acciones = {
        sumar: () => {
            const prod = productos.find(p => p.id === idProd);
            if (prod) prod.unidades++;
        },
        restar: () => {
            const prod = productos.find(p => p.id === idProd);
            if (prod && prod.unidades > 1) prod.unidades--;
        },
        borrar: () => {
            productos = productos.filter(p => p.id !== idProd);
        }
  };

  if (acciones[accion]) {
    acciones[accion]();
    
    filtrarProductos();
  }
});

const filtrarProductos = () => {
  const filtroProducto = productos.filter(prod => 
    prod.nombre.toLowerCase().includes(buscador.value.toLowerCase())
  );
};

buscador.addEventListener("input", filtrarProductos);

formCompra.addEventListener("focusin", (evento) => {
  evento.target.classList.add("activo");
});

formCompra.addEventListener("focusout", (evento) => {
  evento.target.classList.remove("activo");
});















// {
// // 1. Estado de la aplicación y selectores
// let productos = [];
// let contadorIdProducto = 1;

// const formCompra = document.getElementById("formulario-compra");
// const listaUl = document.getElementById("lista");
// const totalParrafo = document.getElementById("total");
// const buscadorInput = document.getElementById("buscador");

// // 2. Función para pintar la lista en el DOM
// const pintarCompra = (productosFiltrados = productos) => {
//   // Generamos los elementos <li> mediante map
//   listaUl.innerHTML = productosFiltrados
//     .map(prod => `
//       <li data-id="${prod.id}">
//         <span>${prod.nombre} - ${prod.unidades} ud. x ${prod.precio.toFixed(2)}€ = ${(prod.unidades * prod.precio).toFixed(2)}€</span>
//         <button data-accion="restar">-</button>
//         <button data-accion="sumar">+</button>
//         <button data-accion="borrar">Borrar</button>
//       </li>
//     `)
//     .join("");

//   // Calcular el total global usando reduce (siempre sobre el array base)
//   const totalGlobal = productos.reduce((acc, prod) => acc + (prod.precio * prod.unidades), 0);
//   totalParrafo.textContent = productos.length > 0 
//     ? `Total: ${totalGlobal.toFixed(2)} €` 
//     : "Lista vacía";
// };

// // 3. Añadir producto (Manejo del Submit)
// formCompra.addEventListener("submit", (evento) => {
//   evento.preventDefault();
  
//   const { producto, precio, unidades } = formCompra.elements;
//   const nombreTexto = producto.value.trim();
//   const precioNum = precio.valueAsNumber;
//   const unidadesNum = unidades.valueAsNumber;

//   // Comprobación de duplicados (sin distinguir mayúsculas) mediante find
//   const productoExistente = productos.find(
//     prod => prod.nombre.toLowerCase() === nombreTexto.toLowerCase()
//   );

//   if (productoExistente) {
//     productoExistente.unidades += unidadesNum;
//   } else {
//     productos.push({
//       id: contadorIdProducto++,
//       nombre: nombreTexto,
//       precio: precioNum,
//       unidades: unidadesNum
//     });
//   }

//   formCompra.reset();
//   buscadorInput.value = ""; // Limpiamos el buscador al añadir
//   producto.focus();
//   pintarCompra();
// });

// // 4. Delegación de eventos en el UL (Acciones de botones)
// listaUl.addEventListener("click", (evento) => {
//   const boton = evento.target.closest("button");
//   if (!boton) return;

//   const accion = boton.dataset.accion;
//   const li = boton.closest("li");
//   const idProd = parseInt(li.dataset.id, 10);

//   // Diccionario de acciones para evitar un bloque if/else largo
//   const acciones = {
//     sumar: () => {
//       const prod = productos.find(p => p.id === idProd);
//       if (prod) prod.unidades++;
//     },
//     restar: () => {
//       const prod = productos.find(p => p.id === idProd);
//       if (prod && prod.unidades > 1) prod.unidades--;
//     },
//     borrar: () => {
//       productos = productos.filter(p => p.id !== idProd);
//     }
//   };

//   if (acciones[accion]) {
//     acciones[accion]();
//     // Reaplicamos el filtro actual del buscador si el usuario estaba buscando
//     filtrarProductos();
//   }
// });

// // 5. Buscador (Filtro dinámico con evento input)
// const filtrarProductos = () => {
//   const textoBuscado = buscadorInput.value.toLowerCase();
//   const productosFiltrados = productos.filter(prod => 
//     prod.nombre.toLowerCase().includes(textoBuscado)
//   );
//   pintarCompra(productosFiltrados);
// };

// buscadorInput.addEventListener("input", filtrarProductos);

// // 6. Foco en el formulario (Clase activo mediante focusin/focusout)
// formCompra.addEventListener("focusin", (evento) => {
//   evento.target.classList.add("activo");
// });

// formCompra.addEventListener("focusout", (evento) => {
//   evento.target.classList.remove("activo");
// });
// }