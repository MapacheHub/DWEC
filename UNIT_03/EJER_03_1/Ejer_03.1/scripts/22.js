// El formulario de contacto debe ser funcional. Evita que la página se recargue al enviarlo y, en su lugar, captura 
// los valores de los campos de nombre y mensaje y muéstralos en la consola.

let formNom2, forMen2;

const form = document.getElementById('formulario-contacto').addEventListener('submit', function(reinicio){
    reinicio.preventDefault();
    const formNom = document.getElementById('nombre').value;
    const forMen = document.getElementById('mensaje').value;

    formNom2 = formNom;
    forMen2 = forMen;

    console.log("22.", formNom, forMen);
})

console.log("22. dale a enviar y mira abajo"); 