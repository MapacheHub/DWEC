const ipsun = "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum";

//    **1.** Al hacer clic en “Generar”:
document.getElementById('generar').addEventListener('click', () => {

    //    **2.** Obtén el número del `input`.
    const parrafos = parseInt(document.getElementById('nParrafos').value, 10);
    const resultado = document.getElementById('resultado');
    const fragmento = document.createDocumentFragment();

    //    **3.** Primero, vacía el `div#resultado` por si ya tenía contenido.
    resultado.innerHTML = '';

    //    **4.** Inicia un bucle que se repita tantas veces como el número introducido.
    for (let i = 0; i < parrafos; i++) {

        //    **5.** En cada iteración, crea un nuevo elemento `<p>`, asígnale un texto de “Lorem ipsum…” y añádelo al `div#resultado`.
        const p = document.createElement('P');
        p.textContent = ipsun;
        resultado.appendChild(p);
    }

    //    **6.** Usa `DocumentFragment` para mejorar el rendimiento si se van a generar muchos párrafos.
    resultado.appendChild(fragmento);
})