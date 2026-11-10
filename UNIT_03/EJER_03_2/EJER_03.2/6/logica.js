const contenedorBotones = document.getElementById('botonesOpciones');
const contenedoresContenido = document.querySelectorAll('#opcionesTexto .contenido-tab');

// **2.** Usando delegación de eventos, escucha los clics en los botones.
contenedorBotones.addEventListener('click', (e) => {
    if (e.target.classList.contains('tab-bot')) {


        //  **3**. Al hacer clic, primero oculta todos los `div` de contenido (añadiendo la clase `oculto`).
        contenedoresContenido.forEach(div => div.classList.add('oculto'));


        //  **4.** Luego, obtén el `data-id` del botón clicado y muestra solo el `div` de contenido correspondiente (quitándole la clase `oculto`).
        const idDestino = e.target.getAttribute('data-id');
        document.getElementById(idDestino).classList.remove('oculto');
    }
});