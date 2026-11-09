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
  const textoBuscado = buscador.value.toLowerCase();
  const filtroProducto = productos.filter(prod => 
    prod.nombre.toLowerCase().includes(textoBuscado)
  );
  pintar(filtroProducto);
};

buscador.addEventListener("input", filtrarProductos);

formCompra.addEventListener("focusin", (evento) => {
  evento.target.classList.add("activo");
});

formCompra.addEventListener("focusout", (evento) => {
  evento.target.classList.remove("activo");
});