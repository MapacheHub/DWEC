const producto = document.getElementById('items');
const lista = document.getElementById('listaCarro');
const spanFinal = document.getElementById('total');

//  **2.** Crea una función `calcularTotal()` que recorra todos los `<li>` del carrito, lea sus `data-price`, los sume y actualice el `textContent` del `span#total`.
function calcularTotal(){
    const itemCarro = lista.querySelectorAll('li');
    let suma = 0;

    itemCarro.forEach(objeto => {
        suma += parseFloat(objeto.getAttribute('data-price'));
    });

    spanFinal.textContent = suma;
}

//   **1.** Al hacer clic en “Añadir al carrito”, clona el `<li>` del producto (`cloneNode(true)`) y añádelo a la lista del carrito.
producto.addEventListener('click', (x) => {
    if (x.target.classList.contains('anaBot')) {
        const itemInventario = x.target.parentNode;
        const clon = itemInventario.cloneNode(true);

        const copiaBoton = clon.querySelector('button');
        copiaBoton.textContent = 'Quitar';
        copiaBoton.className = 'quitBot';

        lista.appendChild(clon);
        //    **3.** Llama a `calcularTotal()` cada vez que se añada un producto.
        calcularTotal();
    }
});

//  **4.** **(Extra)**: Añade un botón “Quitar” a los elementos del carrito y haz que `calcularTotal()` se ejecute también al quitar un producto.
lista.addEventListener('click', (x) => {
    if (x.target.classList.contains('quitBot')) {
        x.target.parentNode.remove();
        calcularTotal();
    }
})